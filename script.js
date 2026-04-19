document.addEventListener("DOMContentLoaded", () => {
  /* ==========================
     AMBIL SEMUA ELEMENT
  ========================== */
  const navbarNav = document.querySelector(".navbar-nav");
  const hamburgerMenu = document.querySelector("#hamburger-menu");

  const searchForm = document.querySelector(".search-form");
  const searchBtn = document.querySelector("#search-button");
  const searchBox = document.querySelector("#search-box");

  const shoppingCart = document.querySelector(".shopping-cart");
  const cartBtn = document.querySelector("#shopping-cart-button");

  const itemDetailModal = document.querySelector("#item-detail-modal");
  const itemDetailButtons = document.querySelectorAll(".item-detail-button");
  const modalClose = document.querySelector(".modal .close-icon");

  /* =========
  HERO SECTION (CTA)
  ========= */
  const beliSekarang = document.querySelectorAll(".cta-order");

  beliSekarang.forEach((btn) => {
    btn.addEventListener("click", function (e) {
      e.preventDefault();

      const productName = this.dataset.product || "-";
      const phoneNumber = "6283128723888";

      const message = `Halo, saya ingin memesan produk:\n${productName}`;
      const waUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
        message
      )}`;

      window.open(waUrl, "_blank");
    });
  });

  /* ==========================
     HELPER FUNCTION
  ========================== */
  function closeAll() {
    navbarNav?.classList.remove("active");
    searchForm?.classList.remove("active");
    shoppingCart?.classList.remove("active");
  }

  /* ==========================
     HAMBURGER MENU
  ========================== */
  hamburgerMenu?.addEventListener("click", (e) => {
    e.preventDefault();
    closeAll();
    navbarNav.classList.toggle("active");
  });

  /* ==========================
     SEARCH FORM
  ========================== */
  searchBtn?.addEventListener("click", (e) => {
    e.preventDefault();
    closeAll();
    searchForm.classList.toggle("active");
    searchBox?.focus();
  });

  /* ==========================
     SHOPPING CART
  ========================== */
  cartBtn?.addEventListener("click", (e) => {
    e.preventDefault();
    closeAll();
    shoppingCart.classList.toggle("active");
  });

  /* ==========================
     CLICK DI LUAR → TUTUP SEMUA
  ========================== */
  document.addEventListener("click", (e) => {
    if (
      !hamburgerMenu?.contains(e.target) &&
      !navbarNav?.contains(e.target) &&
      !searchBtn?.contains(e.target) &&
      !searchForm?.contains(e.target) &&
      !cartBtn?.contains(e.target) &&
      !shoppingCart?.contains(e.target)
    ) {
      closeAll();
    }
  });

  /* ==========================
     MODAL DETAIL PRODUK
  ========================== */
  itemDetailButtons.forEach((btn) => {
    btn.addEventListener("click", (e) => {
      e.preventDefault();
      itemDetailModal.style.display = "flex";
    });
  });

  modalClose?.addEventListener("click", (e) => {
    e.preventDefault();
    itemDetailModal.style.display = "none";
  });

  itemDetailModal?.addEventListener("click", (e) => {
    if (e.target === itemDetailModal) {
      itemDetailModal.style.display = "none";
    }
  });

  /* =========
  CONTACT SECTION (TOMBOL KIRIM)
  ========= */
  const kirimPesan = document.querySelectorAll(".send-wa");

  kirimPesan.forEach((sendWaBtn) => {
    sendWaBtn.addEventListener("click", (e) => {
      e.preventDefault();

      const form = sendWaBtn.closest("form");
      if (!form) {
        alert("Form tidak ditemukan");
        return;
      }

      const nameInput = form.querySelector("#name");
      const emailInput = form.querySelector("#email");
      const messageInput = form.querySelector("#message");

      if (!nameInput || !emailInput || !messageInput) {
        alert("Input tidak ditemukan");
        return;
      }

      const name = nameInput.value.trim();
      const email = emailInput.value.trim();
      const message = messageInput.value.trim();

      if (!name || !email || !messageInput) {
        alert("Nama dan email wajib diisi!");
        return;
      }

      const phoneNumber = "6283128723888";
      const messages = `Halo, saya ${name}\nEmail: ${email}\n ${message}`;
      const waUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
        messages
      )}`;

      window.open(waUrl, "_blank");
    });
  });
});
