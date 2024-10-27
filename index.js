document.addEventListener("DOMContentLoaded", function () {
  let accordionHeaders = document.querySelectorAll(".accordion-header");
  let accordionImgs = document.querySelectorAll(".accordion-img");
  let sectionBoxes = document.querySelectorAll(".section-box");

  accordionHeaders.forEach((header, index) => {
    header.addEventListener("click", function () {
      if (accordionImgs[index].src.includes("icon-minus.svg")) {
        accordionImgs[index].src = "assets/images/icon-plus.svg";
        sectionBoxes[index].style.display = "none";
      } else {
        accordionImgs[index].src = "assets/images/icon-minus.svg";
        sectionBoxes[index].style.display = "block";
      }
    });
  });
});
