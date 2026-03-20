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
