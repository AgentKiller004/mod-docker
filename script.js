document.addEventListener('DOMContentLoaded', async () => {
    // --- Global Variables ---
    const games = await window.electronAPI.getGames();
    const gameList = document.getElementById('game-list');
    const gameTitle = document.getElementById('game-title');
    const gameImage = document.getElementById('game-image');
    const gameDescription = document.getElementById('game-description');
    const launchButton = document.getElementById('launch-button');
    const mainContent = document.getElementById('main-content');
    const categoryFilters = document.getElementById('category-filters');
    let selectedGameId = null;

    // --- Functions ---

    /**
     * Populates the game list in the UI based on a category.
     * @param {string} category - The category to filter by. "All" shows all games.
     */
    function populateGameList(category) {
        gameList.innerHTML = ''; // Clear the current list

        const filteredGames = (category === 'All') 
            ? games 
            : games.filter(game => game.category === category);

        filteredGames.forEach(game => {
            const gameElement = document.createElement('div');
            gameElement.textContent = game.name;
            gameElement.className = 'game-list-item';
            gameElement.dataset.gameId = game.id;
            gameList.appendChild(gameElement);

            gameElement.addEventListener('click', () => {
                selectGame(game.id);
            });
        });
    }

    /**
     * Displays the details for a selected game.
     * @param {string} gameId - The ID of the game to display.
     */
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
        
        // Update selected item style in the list
        document.querySelectorAll('.game-list-item').forEach(item => {
            item.classList.remove('selected');
        });
        const selectedElement = document.querySelector(`[data-game-id="${gameId}"]`);
        if (selectedElement) {
            selectedElement.classList.add('selected');
        }
    }

    // --- Event Listeners ---

    // Handle clicks on category filter buttons
    categoryFilters.addEventListener('click', (event) => {
        if (event.target.tagName === 'BUTTON') {
            const category = event.target.dataset.category;
            
            // Update active button style
            document.querySelectorAll('.category-button').forEach(button => {
                button.classList.remove('active');
            });
            event.target.classList.add('active');
            
            // Repopulate the list with the selected category
            populateGameList(category);
        }
    });

    // Handle launch button click
    launchButton.addEventListener('click', () => {
        if (!selectedGameId) return;

        const game = games.find(g => g.id === selectedGameId);
        if (game) {
            window.electronAPI.launchGame(game.path);
        }
    });

    // --- Initial Load ---
    populateGameList('All'); // Initially, show all games
});