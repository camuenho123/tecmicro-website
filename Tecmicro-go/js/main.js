const menuIcon = document.getElementById("menu-icon");
const slideoutMenu = document.getElementById("slideout-menu");

const menuCategoria = document.querySelector(".ev-text-menu1");
const showCategoria = document.querySelector(".uk-navbar-dropdown");

const userProfile = document.querySelector(".user-user-open");
const userProfileOption = document.querySelector(".user-user-show");

const userFavorite = document.querySelector(".user-favorite-open");
const userFavoriteOption = document.querySelector(".user-favorite-show");

const userNotificar = document.querySelector(".user-notificar-open");
const userNotificarOption = document.querySelector(".user-notificar-show");

const userCart = document.querySelector(".user-cart-open");
const userCartOption = document.querySelector(".user-cart-show");

const userArduino = document.querySelector(".user-arduino-open");
const userAduinoOption = document.querySelector(".user-arduino-show");

const userSearch = document.querySelector(".user-search-open");
const userSearchOption = document.querySelector(".user-search-show");

menuCategoria.addEventListener("click", function () {
  if (showCategoria.style.display == "none") {
    showCategoria.style.display = "block";
  } else {
    showCategoria.style.display = "none";
  }
});

userProfile.addEventListener("click", function () {
  if (userProfileOption.style.display == "none") {
    userProfileOption.style.display = "block";
  } else {
    userProfileOption.style.display = "none";
  }
});

userFavorite.addEventListener("click", function () {
  if (userFavoriteOption.style.display == "none") {
    userFavoriteOption.style.display = "block";
  } else {
    userFavoriteOption.style.display = "none";
  }
});

userNotificar.addEventListener("click", function () {
  if (userNotificarOption.style.display == "none") {
    userNotificarOption.style.display = "block";
  } else {
    userNotificarOption.style.display = "none";
  }
});
userCart.addEventListener("click", function () {
  if (userCartOption.style.display == "none") {
    userCartOption.style.display = "block";
  } else {
    userCartOption.style.display = "none";
  }
});
userArduino.addEventListener("click", function () {
  if (userAduinoOption.style.display == "none") {
    userAduinoOption.style.display = "block";
  } else {
    userAduinoOption.style.display = "none";
  }
});
userSearch.addEventListener("click", function () {
  if (userSearchOption.style.display == "none") {
    userSearchOption.style.display = "block";
  } else {
    userSearchOption.style.display = "none";
  }
});

menuIcon.addEventListener("click", function () {
  if (slideoutMenu.style.opacity == "1") {
    slideoutMenu.style.opacity = "0";
    slideoutMenu.style.pointerEvents = "none";
  } else {
    slideoutMenu.style.opacity = "1";
    slideoutMenu.style.pointerEvents = "auto";
  }
});
