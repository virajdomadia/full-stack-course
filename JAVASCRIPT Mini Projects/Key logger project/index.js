let log = document.getElementById("log");
let state = document.getElementById("state");
let startBtn = document.getElementById("start-btn");
let stopBtn = document.getElementById("stop-btn");

startBtn.addEventListener("click", () => {
  document.addEventListener("keydown", handleDown);
  document.addEventListener("keyup", handleUp);
  startBtn.disabled = true;
});

stopBtn.addEventListener("click", () => {
  document.addEventListener("keydown", handleDown);
  document.addEventListener("keyup", handleUp);
  log.textContent = "";
  state.textContent = "";
  startBtn.disabled = false;
});

function handleDown(e) {
  log.textContent = `Key ${e.key} pressed Down`;
  state.textContent = "Key is Down";
}

function handleUp(e) {
  log.textContent = `Key ${e.key} pressed Up`;
  state.textContent = "Key is Up";
}
