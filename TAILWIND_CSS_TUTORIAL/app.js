const hamburgerDiv = document.querySelector("#hamburger-div");
const menu = document.querySelector("#menu");

hamburgerDiv.addEventListener("click", () => {
  menu.classList.toggle("hidden");
  
  // toggle background color for the #hamburger-div
  if (menu.classList.contains("hidden")) {
    hamburgerDiv.style.backgroundColor = "white";
  } else {
    hamburgerDiv.style.backgroundColor = "#EEEEEE";
  }
});
