window.onload = function () {

  console.log("JS FULLY LOADED");

  const lightbox = document.getElementById("lightbox");
  const lightboxImg = document.getElementById("lightbox-img");

  if (!lightbox || !lightboxImg) {
    console.log("Lightbox not found");
    return;
  }

  document.querySelectorAll(".main-image").forEach(img => {

    img.addEventListener("click", () => {

      console.log("CLICK WORKED");

      lightbox.style.display = "flex";
      lightboxImg.src = img.src;

    });

  });

  lightbox.addEventListener("click", () => {
    lightbox.style.display = "none";
  });

};
