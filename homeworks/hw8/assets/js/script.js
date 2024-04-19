function toggleSongs() {
    // Get the element with the id "songs-second-half"
    var songsSecondHalf = document.getElementById("songs-second-half");
    
    // Toggle the "hidden" class for the element
    songsSecondHalf.classList.toggle("hidden");
}

document.getElementById("toggle-button").onclick = toggleSongs;

