let container = document.getElementById("container");

let button = document.createElement("button");
button.textContent = "Click me";
button.style.height = "100px";
button.style.width = "100px";
button.style.background = "red";
container.appendChild(button);

button.addEventListener("click", () => {
  alert("button clicked");
});
