document.addEventListener("DOMContentLoaded", function () {

  document.querySelectorAll(".gallery").forEach(gallery => {

    const mainImage = gallery.parentElement.querySelector(".main-image");
    if (!mainImage) return;

    gallery.querySelectorAll("img").forEach(img => {

      img.addEventListener("click", () => {

        const newImage = new Image();
        newImage.src = img.src;

        newImage.onload = () => {
          mainImage.style.opacity = 0;

          setTimeout(() => {
            mainImage.src = newImage.src;
            mainImage.style.opacity = 1;
          }, 100);
        };

      });

    });

  });

});

// 🔥 LIGHTBOX FUNCTIONALITY

const lightbox = document.getElementById("lightbox");
const lightboxImg = document.getElementById("lightbox-img");

document.querySelectorAll(".main-image").forEach(img => {
  img.addEventListener("click", () => {
    lightbox.style.display = "flex";
    lightboxImg.src = img.src;
  });
});

// click anywhere to close
lightbox.addEventListener("click", () => {
  lightbox.style.display = "none";
});
