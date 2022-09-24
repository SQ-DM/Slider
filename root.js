const btnDown = document.querySelector(".down-button");
btnDown.addEventListener("click", () => changeSlide("down"));

const btnUp = document.querySelector(".up-button");
btnUp.addEventListener("click", () => changeSlide("up"));

document.addEventListener("keydown", (event) => {
  if (event.key === "ArrowUp") {
    changeSlide("up")
  }
  else if (event.key === "ArrowDown") {
    changeSlide("down");
  }
});

const container = document.querySelector(".container");

const sideBar = document.querySelector(".sidebar");

const mainSlide = document.querySelector(".main-slide");
const slidesCount = mainSlide.querySelectorAll("div");

sideBar.style.top = `-${(slidesCount.length - 1) * 100}vh`;

let indexSlide = 0;

function changeSlide(direction) {
  if (direction === "up") {
    indexSlide++;
    if (indexSlide === slidesCount.length) {
      indexSlide = 0;
    }
  } else if (direction === "down") {
    indexSlide--;
    if (indexSlide < 0) {
      indexSlide = slidesCount.length - 1;
    }
  }

  const visibleSlide = container.clientHeight;

  mainSlide.style.transform = `translateY(-${indexSlide * visibleSlide}px)`;
  sideBar.style.transform = `translateY(${indexSlide * visibleSlide}px)`;
}
