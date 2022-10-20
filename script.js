const menuIcon = document.querySelector('.menu-icon');
const menuItems = document.getElementById('menuItems');

menuItems.style.maxHeight = "0";

menuIcon.onclick = function () {
  if (menuItems.style.maxHeight === "0px") {
    menuItems.style.maxHeight = "200px";
  } else {
    menuItems.style.maxHeight = "0px";
  }
}