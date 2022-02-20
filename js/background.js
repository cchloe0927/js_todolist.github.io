const images = [
    "01.jpeg", "02.jpeg", "03.jpeg", "04.jpeg", "05.jpeg", "06.jpeg", "07.jpeg"
];

const chosenImage = images[Math.floor(Math.random() * images.length)];

//js에서 html에 요소 추가 방법(createElement/appendChild)
const bgImage = document.createElement("img");

bgImage.src = `img/${chosenImage}`;

document.body.appendChild(bgImage);
