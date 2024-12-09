const hamburgerDiv = document.querySelector("#hamburger-div");
const hamburgerLines = document.querySelectorAll(".hamburger-line");
const menu = document.querySelector("#menu");

hamburgerDiv.addEventListener("click", () => {
  // console.log(hamburgerLines)
  menu.classList.toggle("hidden");
  hamburgerLines.forEach((line) => {
    if (menu.classList.contains("hidden")) {
      // set lines back to black when menu is hidden
      line.classList.remove("bg-white");
      line.classList.add("bg-black");
    }
  });
});