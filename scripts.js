const msg = new SpeechSynthesisUtterance();
let voices = [];
const voicesDropdown = document.querySelector('[name="voice"]');
const options = document.querySelectorAll('[type="range"], [name="text"]');
const speakButton = document.querySelector('#speak');
const stopButton = document.querySelector('#stop');
msg.text = document.querySelector('[name="text"]').value;

function populateVoices() {
  voices = getVoices(this);
  console.log(voices);
}

function getVoices(speechObj) {
  let voicesArray = speechObj.getVoices();
  let voices = voicesArray.map(voice => voice.name);
  return voices;
}

speechSynthesis.addEventListener('voiceschanged', populateVoices);
