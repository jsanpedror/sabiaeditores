const audioPlayer = document.getElementById("audio-player");
const currentTrack = document.getElementById("current-track");
const trackButtons = document.querySelectorAll(".track-button");

trackButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const source = button.dataset.src;
    const title = button.dataset.title;

    // Change the audio source
    audioPlayer.src = source;

    // Reload the new track
    audioPlayer.load();

    // Update the track title
    currentTrack.textContent = title;

    // Remove active state from all tracks
    trackButtons.forEach((track) => {
      track.classList.remove("active-track");
    });

    // Highlight the selected track
    button.classList.add("active-track");

    // Play the selected song
    audioPlayer.play();
  });
});
