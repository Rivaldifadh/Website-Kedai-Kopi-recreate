// toggle class active untuk hamburger menu
const navbarNav = document.querySelector(".navbar-nav");

// ketika hamburger menu di klik

document.querySelector("#hamburger-menu").onclick = () => {
  navbarNav.classList.toggle("active");
};

// klik di luar elemen

const hm = document.querySelector("#hamburger-menu");
const sb = document.querySelector("#search-button");
const sc = document.querySelector("#shopping-cart");

document.addEventListener("click", function (e) {
  if (!hm.contains(e.target) && !navbarNav.contains(e.target)) {
    navbarNav.classList.remove("active");
  }

  if (!sb.contains(e.target) && !searchForm.contains(e.target)) {
    searchForm.classList.remove("active");
  }
  if (!sc.contains(e.target) && !shoppingCart.contains(e.target)) {
    shoppingCart.classList.remove("active");
  }
});
// sb adalah singkatan dari search button

// toggle class active navbar search form
const searchForm = document.querySelector(".search-form");
const searchBox = document.querySelector("#search-box");

// ketika search menu diklik
document.querySelector("#search-button").onclick = (e) => {
  searchForm.classList.toggle("active");
  searchBox.focus();
  e.preventDefault();
};

// // klik diluar side bar untuk menghilangkan nav

const searchBox = document.querySelector("#search-box");

document.addEventListener("click", function (e) {
  if (!searchBox.contains(e.target) && !searchForm.contains(e.target)) {
    searchForm.classList.remove("active");
  }
});

// toggle class active untuk shoppin-cart
const shoppingCart = document.querySelector(".shopping-cart");
document.querySelector("#shopping-cart-button").onclick = (e) => {
  shoppingCart.classList.toggle("active");
  e.preventDefault();
};

// toggle modal section
const itemDetailModal = document.querySelector("#item-detail-modal");
const itemDetailButtons = document.querySelectorAll(".item-detail-button");

// loopin
itemDetailButtons.forEach((btn) => {
  btn.addEventListener("click", function (e) {
    itemDetailModal.style.display = "flex";
    e.preventDefault();
  });
});


// klik tombol close modal box
document.querySelector(".modal .close-icon").onclick = (e) => {
  itemDetailModal.style.display = "none";
  e.preventDefault();
};

// klik diluar modal
const modal = document.querySelector("#item-detail-modal");
window.onclick = (e) => {
  if (e.target === modal) {
    modal.style.display = "none";
  }
};
