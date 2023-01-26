document.querySelector(".overlay").onclick = function () {
  this.style.top = "-100%";
};

let toUp = document.querySelector(".toUp");
function toup() {
  if (window.scrollY > 300) {
    toUp.style.opacity = "1";
    toUp.removeAttribute("disabled");
  } else {
    toUp.style.opacity = "0";
    toUp.setAttribute("disabled", true);
  }
}
toUp.onclick = function (e) {
  window.scrollTo(0, 0);
};
window.addEventListener("load", toup);
window.addEventListener("scroll", toup);

let started = false;
window.addEventListener("scroll", () => {
  let count = document.querySelector("#count");
  let card = document.querySelectorAll("#count .card h3");
  if (window.scrollY >= count.offsetTop - 150 && !started) {
    started = true;
    card.forEach((item) => {
      counts(item);
    });
  }
});
function counts(el) {
  let target = el.dataset.target;
  let count = setInterval(() => {
    el.innerText++;
    if (el.innerText == target) {
      clearInterval(count);
    }
  }, 2000 / target);
}

