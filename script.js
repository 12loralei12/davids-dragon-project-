const container = document.getElementById('game-container');
const message = document.getElementById('message');
const yay = new Audio("./assets/yay.mp3");
const dragonImages = [
  'assets/dragon1.png',
  'assets/dragon2.png',
  'assets/dragon3.png'
];



let foundDragons = 0;

function getRandomPosition(containerWidth, containerHeight, dragonSize) {
  const x = Math.floor(Math.random() * (containerWidth - dragonSize));
  const y = Math.floor(Math.random() * (containerHeight - dragonSize));
  return { x, y };
}

dragonImages.forEach((imgSrc, index) => {
  const dragon = document.createElement('div');
  dragon.classList.add('dragon');
  dragon.style.backgroundImage = `url('${imgSrc}')`;

  const { x, y } = getRandomPosition(800, 500, 60);
  dragon.style.left = `${x}px`;
  dragon.style.top = `${y}px`;

  dragon.addEventListener('click', () => {
    if (!dragon.classList.contains('found')) {
      dragon.classList.add('found');
      dragon.style.opacity = 0.4;
      foundDragons++;
      if (foundDragons === dragonImages.length) {
        message.textContent = "You found all the dragons! 🐉🎉";
        window.addEventListener("mousemove",()=>{
          yay.play();
        });
      } else {
        message.textContent = `You found a dragon! ${dragonImages.length - foundDragons} left!`;
      }
    }
  });


  
  container.appendChild(dragon);
});
















