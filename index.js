const body = document.querySelector("body");
const btn = document.querySelector(".main-header").lastElementChild;
const icon = document.querySelector("i");
console.log(body, btn);
let currentstatus = true;
btn.addEventListener("click", (e) => {
  if (!currentstatus) {
    body.setAttribute("class", "bg-blackcolor");
    setTimeout(() => {
      // e.target.innerHTML = "Light mode";
      icon.setAttribute("class", "fa-regular fa-sun");
      currentstatus = !currentstatus;
    }, 300);
  } else {
    body.setAttribute("class", "bg-whitecolor");
    setTimeout(() => {
      // e.target.innerHTML = "Dark mode";
      icon.setAttribute("class", "fa-solid fa-sun");
      currentstatus = !currentstatus;
    }, 300);
  }
});
