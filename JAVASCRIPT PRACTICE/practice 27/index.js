function loadImage(src) {
  return new Promise((resolve, reject) => {
    let img = new Image();
    img.onload = function () {
      resolve(img);
    };
    img.onerror = function () {
      reject(new Error("Failed to load image:" + src));
    };
    img.src = src;
  });
}

let imgContainer = document.getElementById("imageContainer");

let imgUrls = ["./image/1.jpg", "./image/4.jpg", "./image/5.jpg"];

Promise.all(imgUrls.map(loadImage))
  .then((image) => {
    image.forEach((image) => imgContainer.appendChild(image));
  })
  .catch((error) => console.log(error));
