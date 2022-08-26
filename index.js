const log = console.log;
const btns = document.querySelectorAll(".ops > .circle");

function Deactivate() {
  const btns = document.querySelectorAll(".ops > .circle");
  btns.forEach((btn) => {
    btn.classList.remove("active");
  });
}

function updateRating() {
  const rating = document.querySelector(".num");
  const btns = document.querySelectorAll(".ops > .circle");
  var number = 1;
  btns.forEach((btn) => {
    if (btn.classList.contains("active")) {
      number = btn.innerHTML;
    }
  });
  rating.innerHTML = number;
}

function SwitchPage() {
  const rating = document.querySelector(".start");
  const thankyouSection = document.querySelector(".end");
  rating.classList.add("deactive");
  thankyouSection.classList.add("activee");
  updateRating();
}

btns.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    Deactivate();
    e.target.classList.add("active");
  });
});
