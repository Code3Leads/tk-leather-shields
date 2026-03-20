window.onload = function () {

  // =========================
  // IMAGE SWAP
  // =========================

  document.querySelectorAll(".gallery").forEach(gallery => {

    const mainImage = gallery.parentElement.querySelector(".main-image");
    if (!mainImage) return;

    gallery.querySelectorAll("img").forEach(img => {

      img.addEventListener("click", () => {
        mainImage.src = img.src;
      });

    });

  });

  // =========================
  // LIGHTBOX
  // =========================

  const lightbox = document.getElementById("lightbox");
  const lightboxImg = document.getElementById("lightbox-img");

  if (!lightbox || !lightboxImg) return;

  document.querySelectorAll(".main-image").forEach(img => {

    img.addEventListener("click", () => {
      lightbox.style.display = "flex";
      lightboxImg.src = img.src;
    });

  });

  lightbox.addEventListener("click", () => {
    lightbox.style.display = "none";
  });

};
