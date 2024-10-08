// $( document ).ready(function() {
//     $( ".tradingview-widget-container iframe" ).clone().appendTo( ".tradingview-widget-container" );
//   });

// Create a new Audio object
const audio = new Audio('audio.mp3'); // Replace with the path to your audio file
// Set the audio to loop
audio.loop = true;

// Function to play the audio
function playAudioLoop() {
  audio.play();
}

function enterWebsite() {
  document.getElementById('entryModal').style.display = 'none'; // Hide the modal
  //document.getElementById('mainContent').style.display = 'block'; // Show the main content
  playAudioLoop();
}