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
        name: 'A Brand New Day',
        image: 'images/pathm.png',
        description: 'A Brand New Day is a full-conversion mod for Doki Doki Literature Club that rewrites the original story with a lighter, more hopeful tone. Take on the role of a self-aware protagonist as you try to protect the girls from the horrors of the original timeline—and maybe even change their fate.',
        path: "D:\\Games\\Doki Doki Literature Club\\Doki Doki Literature Club Manual Mods\\Doki Doki Literature Club - A Brand New Day\\DDLC.exe"
    },
    {
        id: 'game2',
        name: 'Abridged',
        image: 'images/maxresdefault.jpg',
        description: 'Abridged is a comedy/parody mod for Doki Doki Literature Club that reimagines the story with sarcastic humor, meta jokes, and absurd twists. Nothing is sacred—and everything is fair game.',
        path: "D:\\Games\\Doki Doki Literature Club\\Doki Doki Literature Club Manual Mods\\Doki Doki Literature Club - Abridged\\DDLCAoHILtSWaLtM.exe"
    },
    {
        id: 'game3',
        name: 'Blue Skies',
        image: 'images/blue.jpg',
        description: 'Blue Skies is a full-length Doki Doki Literature Club mod that removes the horror elements and replaces them with a deep, emotional, and heartwarming slice-of-life story. Explore new routes, choices, and meaningful relationships with each of the girls.',
        path: "D:\\Games\\Doki Doki Literature Club\\Doki Doki Literature Club Manual Mods\\Doki Doki Literature Club - Blue Skies\\DDLC.exe"
    },
    {
        id: 'game4',
        name: 'Exit Music',
        image: 'images/thumbnail.jpg',
        description: 'Exit Music is a dark, emotional DDLC mod that follows an alternate timeline where Sayori survives—but struggles with trauma and depression. Featuring a dramatic story, original soundtrack, and multiple endings.',
        path: "D:\\Games\\Doki Doki Literature Club\\Doki Doki Literature Club Manual Mods\\Doki Doki Literature Club - Exit Music\\DDLC.exe"
    },
    {
        id: 'game5',
        name: 'Exit Music Redux',
        image: 'images/redux.png',
        description: 'Exit Music: Redux is a reimagining of the original Exit Music mod, featuring improved writing, new scenes, and a refined narrative. Dive into a darker, more emotionally grounded story where your choices matter—and the consequences are real.',
        path: "D:\\Games\\Doki Doki Literature Club\\Doki Doki Literature Club Manual Mods\\Doki Doki Literature Club - Exit Music Redux\\ExitMusicRedux.exe"
    },
    {
        id: 'game6',
        name: 'Fallen Angel',
        image: 'images/fallen.png',
        description: 'Fallen Angel is a DDLC mod that explores Yuri’s character in a more grounded, emotional story. With a focus on mental health and romance, it offers a deep, serious alternate route free from the original horror.',
        path: "D:\\Games\\Doki Doki Literature Club\\Doki Doki Literature Club Manual Mods\\Doki Doki Literature Club - Fallen Angel\\DDLC.exe"
    },
    {
        id: 'game7',
        name: 'Monika After Story',
        image: 'images/after.jpg',
        description: 'Monika After Story is a DDLC mod that continues the game after the original ending. Spend time with Monika in a virtual space where she learns, grows, and bonds with you the longer you stay.',
        path: "D:\\Games\\Doki Doki Literature Club\\Doki Doki Literature Club Manual Mods\\Doki Doki Literature Club - Monika After Story\\DDLC.exe"
    },
    {
        id: 'game8',
        name: 'Monika Before Story',
        image: 'images/before.png',
        description: 'Monika Before Story is a DDLC mod that puts Monika in the spotlight from the start, giving her a full route alongside the other girls. Experience the original story with new choices, dialogue, and a fresh perspective.',
        path: "D:\\Games\\Doki Doki Literature Club\\Doki Doki Literature Club Manual Mods\\Doki Doki Literature Club - Monika Before Story\\DDLC.exe"
    },
    {
        id: 'game9',
        name: 'Our Time',
        image: 'images/our.jpg',
        description: 'Our Time is a sequel mod to DDLC that builds a full romantic route with Monika in a post-canon world. Reconnect with her in a heartfelt story about love, healing, and starting over—together.',
        path: "D:\\Games\\Doki Doki Literature Club\\Doki Doki Literature Club Manual Mods\\Doki Doki Literature Club - Our Time\\DDLC.exe"
    },
    {
        id: 'game10',
        name: 'Purist',
        image: 'images/purist.png',
        description: 'The Purist Mod restores the original DDLC story without the horror, adding full romantic routes for all four girls. Enjoy a wholesome, choice-driven experience that focuses on character development and meaningful relationships.',
        path: "D:\\Games\\Doki Doki Literature Club\\Doki Doki Literature Club Manual Mods\\Doki Doki Literature Club - Purist\\DDLC.exe"
    },
    {
        id: 'game11',
        name: 'Salvation',
        image: 'images/salvation.png',
        description: 'Salvation is a DDLC mod where you save Sayori before tragedy strikes, leading to a new story of healing, friendship, and love. Includes original scenes, new music, and multiple character routes.',
        path: "D:\\Games\\Doki Doki Literature Club\\Doki Doki Literature Club Manual Mods\\Doki Doki Literature Club - Salvation\\DDLC.exe"
    },
    {
        id: 'game12',
        name: 'Salvation Remake',
        image: 'images/remake.png',
        description: 'Salvation: Remake is a modern reimagining of the original DDLC Salvation mod, featuring rewritten dialogue, new scenes, updated visuals, and deeper emotional storytelling—while preserving its focus on saving Sayori and supporting the others.',
        path: "D:\\Games\\Doki Doki Literature Club\\Doki Doki Literature Club Manual Mods\\Doki Doki Literature Club - Salvation Remake\\DokiDokiSalvRemakeFINALDDMC.exe"
    },
    {
        id: 'game13',
        name: 'Summertime',
        image: 'images/summer.png',
        description: 'Summertime is a slice-of-life DDLC mod that reimagines the story in a peaceful, school break setting. Focus on friendships, romance, and character-driven choices—with no horror, just good vibes and summer fun.',
        path: "D:\\Games\\Doki Doki Literature Club\\Doki Doki Literature Club Manual Mods\\Doki Doki Literature Club - Summertime\\DDLC.exe"
    },
    {
        id: 'game14',
        name: 'Triple Trouble',
        image: 'images/triple.png',
        description: 'Triple Trouble is a DDLC mod that features simultaneous routes with Sayori, Yuri, and Natsuki—navigating love, jealousy, and consequences. Your choices shape a complex, drama-filled story with multiple outcomes.',
        path: "D:\\Games\\Doki Doki Literature Club\\Doki Doki Literature Club Manual Mods\\Doki Doki Literature Club - Triple Trouble\\DDTT.exe"
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