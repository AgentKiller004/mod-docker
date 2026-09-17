const fs = require('fs');
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
  try {
    const filePath = path.join(__dirname, 'games.json');
    const data = await fs.promises.readFile(filePath, 'utf8');
    return JSON.parse(data);
  } catch (error) {
    console.error('Failed to read or parse games.json:', error);
    return [];
  }
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
ipcMain.on('launch-game', async (event, gameId) => {
  try {
    const filePath = path.join(__dirname, 'games.json');
    const data = await fs.promises.readFile(filePath, 'utf8');
    const games = JSON.parse(data);
    const game = games.find(g => g.id === gameId);

    if (game && game.path) {
      const executablePath = game.path;
      execFile(executablePath, (error, data) => {
        if (error) {
          console.error('Failed to launch game:', error);
        }
      });
    } else {
      console.error('Game not found or path is missing');
    }
  } catch (error) {
    console.error('Failed to launch game:', error);
  }
});