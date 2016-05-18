// project namespace
var webAudio = webAudio || {};
webAudio.context;
webAudio.initialize = function webAudioInitialize() {
  try {
    window.AudioContext = window.AudioContext || window.webkitAudioContext;
    webAudio.context = new AudioContext();
  } catch (ex) {
    console.log('Web Audio API is not supported on this device.');
  } finally {
    console.log('Web Audio API is supported on this device.');
  }
};
window.addEventListener('load', webAudio.initialize, false);

$(document).foundation();

