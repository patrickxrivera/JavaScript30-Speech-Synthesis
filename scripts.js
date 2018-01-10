const msg = new SpeechSynthesisUtterance();
let voices = [];
const voicesDropdown = document.querySelector('[name="voice"]');
const options = document.querySelectorAll('[type="range"], [name="text"]');
const speakButton = document.querySelector('#speak');
const stopButton = document.querySelector('#stop');
msg.text = document.querySelector('[name="text"]').value;

function populateVoices() {
  voices = this.getVoices();
  renderVoicesHTML(voices);
}

function renderVoicesHTML(voices) {
  let voicesHTML = voices
    .map(voice => {
      return `<option value="${voice.name}">${voice.name} - ${voice.lang}</option>`;
    }).join('');
  voicesDropdown.innerHTML = voicesHTML;
}

function setVoice() {
  msg.voice = voices.find(voice => voice.name === this.value);
  toggleVoices();
}

function toggleVoices(startOver = true) {
  speechSynthesis.cancel();
  if (startOver) {
    speechSynthesis.speak(msg);
  }
}

speechSynthesis.addEventListener('voiceschanged', populateVoices);
voicesDropdown.addEventListener('change', setVoice);
