const typingTest = document.querySelector(".typing-text p");
const input = document.querySelector(".wrapper .input-field");
const time = document.querySelector(".time span b");
const mistakes = document.querySelector(".mistake span");
const wpm = document.querySelector(".wpm span");
const cpm = document.querySelector(".cpm span");
const btn = document.querySelector("button");

let timer;
let maxTime = 60;
let timeLeft = maxTime;
let charIndex = 0;
let mistake = 0;
let isTyping = false;

function loadParagraph() {
  const paragraph = [
    "Avoid daydreaming about the years to come.",
    "You are the most important person in your whole life.",
    "Always be true to who you are, and ignore what other people have to say about you.",
    "Always be true to who you are, and ignore what other people have to say about you.",
    "Only demonstrate your strength when it’s really required.",
    "Subscribe to Drop X Out",
  ];
  const randomIndex = Math.floor(Math.random() * paragraph.length);
  typingTest.innerHTML = "";
  for (const char of paragraph[randomIndex]) {
    console.log(char);
    typingTest.innerHTML += `<span>${char}</span>`;
  }
  typingTest.querySelectorAll("span")[0].classList.add("active");
  document.addEventListener("keydown", () => {
    input.focus();
  });
  typingTest.addEventListener("click", () => {
    input.focus();
  });
}

function initTyping() {
  const char = typingTest.querySelectorAll("span");
  const typedChar = input.value.charAt(charIndex);

  // Ensure that charIndex doesn't exceed the length of characters and that there is time left
  if (charIndex < char.length && timeLeft > 0) {
    if (!isTyping) {
      timer = setInterval(initTime, 1000); // Start timer if it's the first keypress
      isTyping = true;
    }

    if (char[charIndex].innerText === typedChar) {
      char[charIndex].classList.add("correct"); // Mark character as correct
      console.log("correct");
    } else {
      mistake++;
      char[charIndex].classList.add("incorrect"); // Mark character as incorrect
      console.log("incorrect");
    }

    charIndex++; // Move to the next character

    // Make sure charIndex does not exceed the length of characters
    if (charIndex < char.length) {
      char[charIndex].classList.add("active"); // Highlight the next character
    }

    mistakes.innerText = mistake; // Update mistake count
    cpm.innerText = charIndex - mistake; // Update characters per minute (CPM)
  } else {
    clearInterval(timer); // Stop the timer when done
    input.value = ""; // Clear the input field
  }
}

function initTime() {
  if (timeLeft > 0) {
    timeLeft--;
    time.innerText = timeLeft;
    let wpmVal = Math.round(
      ((charIndex - mistake) / 5 / (maxTime - timeLeft)) * 60
    );
    wpm.innerText = wpmVal;
  } else {
    clearInterval(timer);
  }
}

function reset() {
  loadParagraph();
  clearInterval(timer);
  timeLeft = maxTime;
  time.innerText = timeLeft;
  input.value = "";
  charIndex = 0;
  mistake = 0;
  isTyping = false;
  wpm.innerText = 0;
  cpm.innerText = 0;
  mistakes.innerText = 0;
}

input.addEventListener("input", initTyping);
btn.addEventListener("click", reset);
loadParagraph();
