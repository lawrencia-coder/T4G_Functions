// Custom alert function
function customAlert(message) {
  // Create overlay
  const overlay = document.createElement('div');
  overlay.className = 'modal-overlay';

  // Create modal box
  const box = document.createElement('div');
  box.className = 'modal-box';
  box.innerHTML = `<p>${message}</p><button>OK</button>`;

  // Close on button click
  box.querySelector('button').addEventListener('click', () => {
    document.body.removeChild(overlay);
  });

  overlay.appendChild(box);
  document.body.appendChild(overlay);
}

// Gender prompt logic
customAlert("Hi there, Welcome To Our Website 🎉");

let gender = prompt("Indicate here if you are a male or female (in lowercase).");

function Usergender() {
  if (gender === "male") {
    customAlert("💙 You are a Boy! 😊 🎉🎂");
  } else if (gender === "female") {
    customAlert("💖 You are a Girl! 😍 🎉🎂");
  } else {
    customAlert("⚠️ Please enter the correct gender.");
  }
}
Usergender();
