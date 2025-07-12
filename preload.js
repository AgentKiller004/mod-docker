const { contextBridge, ipcRenderer } = require('electron');

// Expose a secure 'electronAPI' object to your renderer process (script.js)
contextBridge.exposeInMainWorld('electronAPI', {
  launchGame: (executablePath) => ipcRenderer.send('launch-game', executablePath),
  getGames: () => ipcRenderer.invoke('get-games') // Add this line
});