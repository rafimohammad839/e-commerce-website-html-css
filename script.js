const menuIcon = document.querySelector('.menu-icon');
const menuItems = document.getElementById('menuItems');
const productImage = document.getElementById('product-image');
const smallImages = document.getElementsByClassName('small-img');
const loginForm = document.getElementById('login-form')
const registerForm = document.getElementById('register-form')
const indicator = document.getElementById('indicator')

menuItems.style.maxHeight = "0";

// Opens or collapses the navbar in mobile view
menuIcon.onclick = function (e) {
  if (menuItems.style.maxHeight === "0px") {
    menuItems.style.maxHeight = "200px";
  } else {
    menuItems.style.maxHeight = "0px";
  }
}

// Closes navbar on clicking outside the navbar
document.onclick = function (e) {
  if (event.target.className !== "menu-icon") {
    if (menuItems.style.maxHeight === "200px") {
      menuItems.style.maxHeight = "0px";
    }
    event.stopPropagation();
  }
}

// Clicking on the small image, view the image in large size
Array.from(smallImages).forEach(smallImage => {
  smallImage.addEventListener('click', function (e) {
    productImage.src = e.target.src;
  })
})

// Toggle Form
function register() {
  registerForm.style.transform = "translateX(0px)";
  loginForm.style.transform = "translateX(0px)";
  indicator.style.transform = "translateX(100px)";
}

function login() {
  registerForm.style.transform = "translateX(300px)";
  loginForm.style.transform = "translateX(300px)";
  indicator.style.transform = "translateX(0px)";
}