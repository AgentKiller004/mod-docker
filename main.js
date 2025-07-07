const { app, BrowserWindow, ipcMain } = require('electron');
const path = require('path');
const { spawn } = require('child_process');

function createWindow() {
  const win = new BrowserWindow({
    width: 1200,
    height: 800,
    icon: path.join(__dirname, 'images', 'icon1.ico'),
    webPreferences: {
      // The preload script is essential for secure communication
      preload: path.join(__dirname, 'preload.js') 
    }
  });

  win.loadFile('index.html');
  win.setMenuBarVisibility(false);
}

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
  console.log(`Attempting to run batch file: ${executablePath}`);
  
  // Use spawn to run the batch file via cmd.exe
  const child = spawn('cmd.exe', ['/c', executablePath]);

  // Optional: Log output from the batch file for debugging
  child.stdout.on('data', (data) => {
    console.log(`Batch file output: ${data}`);
  });

  child.stderr.on('data', (data) => {
    console.error(`Batch file error: ${data}`);
  });

  child.on('exit', (code) => {
    console.log(`Batch file process exited with code: ${code}`);
  });
});