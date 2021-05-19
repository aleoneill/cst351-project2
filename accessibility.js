let toggleMenu = false;
let toggleCursor = false;
let toggleLargerText = false;
let toggleDyslexiaFriendlyText = false;
let toggleTextSpacing = false;
let toggleLineSpacing = false;

function toggleAccessibilityMenu() {
  toggleMenu = !toggleMenu;
  if (toggleMenu) {
    document.getElementById('accessibilityButtonMenu').style.display = "block";
  } else {
    document.getElementById('accessibilityButtonMenu').style.display = "none";
  }
}

function accessibilityTTS() {
  let utter = new SpeechSynthesisUtterance();
  utter.lang= 'en-US';
  utter.text = document.getElementById('description').innerText;
  console.log(utter.text);
  utter.volume = 0.5;

  window.speechSynthesis.speak(utter);
}

function enlargeText() {
  toggleLargerText = !toggleLargerText;
  if (toggleLargerText) {
    document.getElementById('description').style.fontSize = "xx-large";
  } else {
    document.getElementById('description').style.fontSize = "x-large";
  }
}

function dyslexiaFriendlyText() {
  toggleDyslexiaFriendlyText = !toggleDyslexiaFriendlyText;
  if (toggleDyslexiaFriendlyText) {
    document.getElementById('description').style.fontFamily = "sans-serif";
  } else {
    document.getElementById('description').style.fontFamily = "Cormorant Garamond";
  }
}

function textSpacing() {
  toggleTextSpacing = !toggleTextSpacing;
  if (toggleTextSpacing) {
    document.getElementById('description').style.letterSpacing = "3px";
  } else {
    document.getElementById('description').style.letterSpacing = "0px";
  }
}

function lineSpacing() {
  toggleLineSpacing = !toggleLineSpacing;
  if (toggleLineSpacing) {
    document.getElementById('description').style.lineHeight = "200%";
  } else {
    document.getElementById('description').style.lineHeight = "1.6";
  }
}

// function enlargeCursor() {
//   toggleCursor = !toggleCursor;
//   let root = document.documentElement;
//   if (toggleCursor) {
//     document.body.style.cursor = "imgs/cursor.png";
//   } else {
//     document.body.style.cursor = "crosshair";
//   }
// }
