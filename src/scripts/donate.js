// enable program overlay
const overlayBtn = document.querySelector(".overlay-btn");
const exitBtn = document.querySelector(".exit-btn");

overlayBtn.addEventListener("click", (e) => {
  e.preventDefault();
  document.querySelector(".overlay").classList.add("show");
});

exitBtn.addEventListener("click", () => {
  document.querySelector(".overlay").classList.remove("show");
});
