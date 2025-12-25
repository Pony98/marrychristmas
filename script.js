let images = [
    "images/15.jpg",
    "images/16.jpg",
    "images/1.jpg",
    "images/2.jpg",
    "images/3.jpg",
    "images/4.jpg",
    "images/5.jpg",
    "images/6.jpg",
    "images/7.jpg",
    "images/8.jpg",
    "images/9.jpg",
    "images/10.jpg",
    "images/11.jpg",
    "images/12.jpg",
    "images/13.jpg",
    "images/14.jpg"
];

let index = 0;
let slide = document.getElementById("slide");

function showImage() {
    slide.src = images[index];
}

function next() {
    index = (index + 1) % images.length;
    showImage();
}

function prev() {
    index = (index - 1 + images.length) % images.length;
    showImage();
}

// Auto slide
setInterval(next, 3000);

let isPlaying = false;
  
  function toggleMusic() {
    const audio = document.getElementById('bgMusic');
    if (isPlaying) {
      audio.pause();
    } else {
      audio.play();
    }
    isPlaying = !isPlaying;
  }