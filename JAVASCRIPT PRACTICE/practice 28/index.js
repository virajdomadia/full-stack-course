async function loadImage(src) {
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

async function loadImages() {
  let imgContainer = document.getElementById("imageContainer");

  let imgUrls = ["./image/3.jpg", "./image/4.jpg", "./image/5.jpg"];
  try {
    const images = await Promise.all(imgUrls.map(loadImage));
    images.forEach((image) => imgContainer.appendChild(image));
  } catch (error) {
    console.error(error);
  }
}

loadImages();
