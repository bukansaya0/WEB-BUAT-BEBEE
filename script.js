document.getElementById("playButton").addEventListener("click", function() {
    const audio = document.getElementById("loveSong");
    if (audio.paused) {
        audio.play();
        this.textContent = "Jeda Lagu";
    } else {
        audio.pause();
        this.textContent = "Putar Lagu";
    }
});
