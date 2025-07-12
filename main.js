const { app, BrowserWindow, ipcMain } = require('electron');
const path = require('path');
const { execFile } = require('child_process');

function createWindow() {
  const win = new BrowserWindow({
    width: 1200,
    height: 800,
    icon: path.join(__dirname, 'images', 'icon.ico'),
    webPreferences: {
      // The preload script is essential for secure communication
      preload: path.join(__dirname, 'preload.js') 
    }
  });

  win.loadFile('index.html');
  win.setMenuBarVisibility(false);
}
ipcMain.handle('get-games', async () => {
  const filePath = path.join(__dirname, 'games.json');
  const data = fs.readFileSync(filePath, 'utf8');
  return JSON.parse(data);
});

app.whenReady().then(() => {
  createWindow();

  app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) {
      createWindow();
    }
  });
});

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});

// Listen for the 'launch-game' message from the renderer process
ipcMain.on('launch-game', (event, executablePath) => {
  console.log(`Attempting to launch: ${executablePath}`);
  
  execFile(executablePath, (error, data) => {
    if (error) {
      console.error('Failed to launch game:', error);
      // You could send an error message back to the renderer window here
    } else {
      console.log('Game launched successfully:', data);
    }
  });
});