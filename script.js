// --- Game Configuration ---
// Add your games here.
// 'id' is a unique identifier.
// 'name' is the display name.
// 'image' is the path to the game's banner image in your 'images' folder.
// 'description' is a short text about the game.
// 'path' will be the command to launch the game's .exe when using Electron.

// --- Launcher Logic ---
document.addEventListener('DOMContentLoaded', () => {
    const gameList = document.getElementById('game-list');
    const gameTitle = document.getElementById('game-title');
    const gameImage = document.getElementById('game-image');
    const gameDescription = document.getElementById('game-description');
    const launchButton = document.getElementById('launch-button');
    const mainContent = document.getElementById('main-content');
    let selectedGameId = null;

    // Populate the game list
    games.forEach(game => {
        const gameElement = document.createElement('div');
        gameElement.textContent = game.name;
        gameElement.className = 'game-list-item';
        gameElement.dataset.gameId = game.id;
        gameList.appendChild(gameElement);

        gameElement.addEventListener('click', () => {
            selectGame(game.id);
        });
    });

    function selectGame(gameId) {
        const game = games.find(g => g.id === gameId);
        if (!game) return;
        
        selectedGameId = gameId;

        // Update main display
        gameTitle.textContent = game.name;
        gameImage.src = game.image;
        gameImage.style.display = 'block';
        gameDescription.textContent = game.description;
        launchButton.style.display = 'inline-block';
        
        // Update background
        mainContent.style.backgroundImage = `linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url('${game.image}')`;
        
        // Update selected item style
        document.querySelectorAll('.game-list-item').forEach(item => {
            item.classList.remove('selected');
        });
        document.querySelector(`[data-game-id="${gameId}"]`).classList.add('selected');
    }
    //Handle launch button click
    launchButton.addEventListener('click', () => {
        if (!selectedGameId) return;

        const game = games.find(g => g.id === selectedGameId);
        // Use the exposed API to send the game path to the main process
        window.electronAPI.launchGame(game.path);
    });

});