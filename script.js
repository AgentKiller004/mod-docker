// --- Game Configuration ---
// Add your games here.
// 'id' is a unique identifier.
// 'name' is the display name.
// 'image' is the path to the game's banner image in your 'images' folder.
// 'description' is a short text about the game.
// 'path' will be the command to launch the game's .exe when using Electron.
const games = [
    {
        id: 'game1',
        name: 'Half-Life',
        image: 'images/half.jpg',
        description: 'Half-Life is a first-person shooter game developed by Valve Corporation. It was released in 1998 and has since become a landmark title in the gaming industry, known for its immersive storytelling and innovative gameplay mechanics.',
        path: "D:\\Games\\Half-Life - Source Quadrilogy\\halflife.bat"
    },
    {
        id: 'game2',
        name: 'Half-Life 2',
        image: 'images/half2.jpg',
        description: 'Half-Life 2 is a first-person shooter game developed by Valve Corporation. It was released in 2004 and is the sequel to the original Half-Life. The game is known for its advanced physics engine, immersive storytelling, and engaging gameplay.',
        path: "D:\\Games\\Half-Life - Source Quadrilogy\\half2.bat"
    },
    {
        id: 'game3',
        name: 'Half-Life 2: Episode One',
        image: 'images/half2_1.jpg',
        description: 'Half-Life 2: Episode One is a first-person shooter game developed by Valve Corporation. It was released in 2006 as a sequel to Half-Life 2. The game continues the story of Gordon Freeman as he fights against the Combine forces in City 17.',
        path: "D:\\Games\\Half-Life - Source Quadrilogy\\half21.bat"
    },
    {
        id: 'game4',
        name: 'Half-Life 2: Episode Two',
        image: 'images/half2_2.jpg',
        description: 'Half-Life 2: Episode Two is a first-person shooter game developed by Valve Corporation. It was released in 2007 as a sequel to Half-Life 2: Episode One. The game continues the story of Gordon Freeman and Alyx Vance as they fight against the Combine forces and try to reach the resistance base.',
        path: "D:\\Games\\Half-Life - Source Quadrilogy\\half22.bat"
    }
    

];

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