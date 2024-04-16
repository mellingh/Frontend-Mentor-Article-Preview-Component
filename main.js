let btnElement = document.querySelector(".shareBtn");
let pathElement = document.querySelector(".shareIcon path");
let shareContainerDesktop = document.querySelector(".shareContainerDesktop");
let shareContainerMobile = document.querySelector(".shareContainerMobile");

shareContainerDesktop.style.display = "none";
shareContainerMobile.style.display = "none";

btnElement.addEventListener("mouseenter", function () {
  pathElement.setAttribute("fill", "white");
  btnElement.style.backgroundColor = "hsl(214, 17%, 51%)";
});

btnElement.addEventListener("click", function (event) {
  if (window.innerWidth >= 1440) {
    toggleShareContainer(shareContainerDesktop);
  } else {
    toggleShareContainer(shareContainerMobile);
  }

  event.stopPropagation();
});

btnElement.addEventListener("mouseleave", function () {
  pathElement.setAttribute("fill", "#6E8098");
  btnElement.style.backgroundColor = "#F0F0F0";
});

function toggleShareContainer(container) {
  if (container.style.display === "none") {
    container.style.display = "flex";
  } else {
    container.style.display = "none";
  }
}

document.addEventListener("click", function (event) {
  if (
    event.target !== btnElement &&
    event.target !== shareContainerDesktop &&
    event.target !== shareContainerMobile
  ) {
    shareContainerDesktop.style.display = "none";
    shareContainerMobile.style.display = "none";
  }
});
