function accessibilityTTS() {
  let utter = new SpeechSynthesisUtterance();
  utter.lang= 'en-US';
  utter.text = document.getElementById('description').innerText;
  console.log(utter.text);
  utter.volume = 0.5;

  window.speechSynthesis.speak(utter);
}
