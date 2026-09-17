const { contextBridge, ipcRenderer } = require('electron');

// Expose a secure 'electronAPI' object to your renderer process (script.js)
contextBridge.exposeInMainWorld('electronAPI', {
  launchGame: (gameId) => ipcRenderer.send('launch-game', gameId),
  getGames: () => ipcRenderer.invoke('get-games') // Add this line
});