let musicPlaying = false;

function toggleMusic() {
    const audio = document.getElementById('background-music');
    if (musicPlaying) {
        audio.pause();
        musicPlaying = false;
    } else {
        audio.play();
        musicPlaying = true;
    }
}

function lightCandles() {
    // Logic to light up candles and show a birthday message
    alert('Candles are lit! Happy Birthday, Nadia!');
}

function createStars() {
    const starsContainer = document.createElement('div');
    starsContainer.className = 'stars';
    document.querySelector('.birthday-wish').appendChild(starsContainer);

    for (let i = 0; i < 100; i++) {
        const star = document.createElement('div');
        star.className = 'star';
        star.style.left = Math.random() * 100 + 'vw';
        star.style.top = Math.random() * 100 + 'vh';
        star.style.animationDuration = Math.random() * 3 + 2 + 's';
        starsContainer.appendChild(star);
    }
}

createStars();

document.getElementById('music-toggle').addEventListener('click', toggleMusic);

document.getElementById('next-button').addEventListener('click', function() {
    window.location.href = 'love-letter.html';
});

document.getElementById('special-gift-button').addEventListener('click', function() {
    window.location.href = 'video-surprise.html';
});

document.getElementById('replay-button').addEventListener('click', function() {
    window.location.href = 'video-surprise.html';
}); 