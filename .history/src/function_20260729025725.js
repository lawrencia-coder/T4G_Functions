// Prompt user for gender
prompt
let gender = prompt("Indicate here if you are a male or female (in lowercase).");

function launchCelebration(emojis) {
  const container = document.getElementById('celebration');
  container.innerHTML = '';
  for (let i = 0; i < 25; i++) {
    const emoji = document.createElement('div');
    emoji.className = 'emoji';
    emoji.innerText = emojis;
    emoji.style.left = Math.random() * 100 + 'vw';
    emoji.style.top = '-50px';
    emoji.style.animationDuration = (2 + Math.random() * 3) + 's';
    container.appendChild(emoji);
  }
}

function Usergender() {
  const message = document.getElementById('message');
  if (gender === "male"){
    document.body.style.background = "#87cefa"; // blue
    message.innerText = "💙 Congratulations! It's a Boy 🎉";
    launchCelebration("🎉💙🎂");
  }else if (gender === "female") {
    document.body.style.background = "#fd8fa0"; // pink
    message.innerText = "💖 Congratulations! It's a Girl 🎉";
    launchCelebration("🎉💖🎂");
  } else {
    document.body.style.background = "white"; // wrong input
    message.innerText = "⚠️ Please enter the correct gender.";
  }
}
Usergender();

// Buttons still work for manual reveal
document.getElementById('boyBtn').addEventListener('click', () => {
  document.body.style.background = "#87cefa";
  document.getElementById('message').innerText = "💙 Congratulations! It's a Boy 🎉";
  launchCelebration("🎉💙🎂");
});

document.getElementById('girlBtn').addEventListener('click', () => {
  document.body.style.background = "#ffb6c1";
  document.getElementById('message').innerText = "💖 Congratulations! It's a Girl 🎉";
  launchCelebration("🎉💖🎂");
});
