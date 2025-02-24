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