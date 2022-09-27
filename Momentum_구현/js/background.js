const images = ["img_1.jpg", "img_2.jpg", "img_3.jpg"]

const chosenImage = images[Math.floor(Math.random()*images.length)]

const bgImage = document.createElement("img");
bgImage.src = `img/${chosenImage}`;

document.body.appendChild(bgImage);