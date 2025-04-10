const storyText = document.getElementById("story-text");
const choices = document.getElementById("choices");

function nextScene(choice) {
  if (choice === 'left') {
    storyText.innerText = "You walk down the left path and find a shimmering lake with glowing fish. A boat awaits. Do you take it?";
    choices.innerHTML = `
      <button onclick="nextScene('boat')">Take the Boat 🛶</button>
      <button onclick="nextScene('back')">Go Back 🔙</button>
    `;
  } else if (choice === 'right') {
    storyText.innerText = "The right path leads you to a mountain cave with ancient symbols. Do you enter?";
    choices.innerHTML = `
      <button onclick="nextScene('cave')">Enter the Cave 🗿</button>
      <button onclick="nextScene('back')">Go Back 🔙</button>
    `;
  } else if (choice === 'boat') {
    storyText.innerText = "You sail into the mist and find a secret island of friendly dragons! 🐉 The End.";
    choices.innerHTML = `
      <button onclick="restart()">Play Again 🔁</button>
    `;
  } else if (choice === 'cave') {
    storyText.innerText = "Inside the cave, you discover a glowing crystal that gives you magical powers! ✨ The End.";
    choices.innerHTML = `
      <button onclick="restart()">Play Again 🔁</button>
    `;
  } else if (choice === 'back') {
    storyText.innerText = "You wake up in a mysterious forest. Two paths lie ahead...";
    choices.innerHTML = `
      <button onclick="nextScene('left')">Take the Left Path 🌲</button>
      <button onclick="nextScene('right')">Take the Right Path 🌄</button>
    `;
  }
}

function restart() {
  nextScene('back');
}
