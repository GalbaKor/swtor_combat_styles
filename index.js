// for each link, listen for a click, then if clicked -> remove the nav-open that was previously added

const guardianToggle = document.querySelector(".gameclass__guardian");
const sentinelToggle = document.querySelector(".gameclass__sentinel");
const sageToggle = document.querySelector(".gameclass__sage");
const shadowToggle = document.querySelector(".gameclass__shadow");
const commandoToggle = document.querySelector(".gameclass__commando");
const vanguardToggle = document.querySelector(".gameclass__vanguard");
const gunslingerToggle = document.querySelector(".gameclass__gunslinger");
const scoundrelToggle = document.querySelector(".gameclass__scoundrel");

guardianToggle.addEventListener("click", () => {
  document.body.classList.toggle("gameclass__guardian--on");
});

sentinelToggle.addEventListener("click", () => {
  document.body.classList.toggle("gameclass__sentinel--on");
});

sageToggle.addEventListener("click", () => {
  document.body.classList.toggle("gameclass__sage--on");
});

shadowToggle.addEventListener("click", () => {
  document.body.classList.toggle("gameclass__shadow--on");
});

commandoToggle.addEventListener("click", () => {
  document.body.classList.toggle("gameclass__commando--on");
});

vanguardToggle.addEventListener("click", () => {
  document.body.classList.toggle("gameclass__vanguard--on");
});

gunslingerToggle.addEventListener("click", () => {
  document.body.classList.toggle("gameclass__gunslinger--on");
});

scoundrelToggle.addEventListener("click", () => {
  document.body.classList.toggle("gameclass__scoundrel--on");
});
