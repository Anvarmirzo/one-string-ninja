document.addEventListener("DOMContentLoaded", function (e) {
  "use strict";
  // Active page index
  let currentPageIndex = 0;
  let pagesLength = 0;

  // Сollection of user information
  const formData = {
    name: "",
    year: "",
  };

  // Set pages length
  (() => {
    const pages = document.querySelectorAll("[data-page"),
      allPagesCount = document.getElementById("pages-count");
    allPagesCount.textContent = +pages.length - 1;
    pagesLength = +pages.length - 1;
  })();

  // Page change listener
  const currentPageHolder = document.getElementById("hold-current-page");
  (() => {
    const observer = new MutationObserver(function (mutations) {
      mutations.forEach(function (mutation) {
        if (mutation.type === "attributes") {
          // Change current page
          const previousPage = document.querySelector(
            `[data-page="${currentPageIndex - 1}"]`
          );
          const currentPage = document.querySelector(
            `[data-page="${currentPageIndex}"]`
          );

          previousPage.classList.remove("active");
          currentPage.classList.add("active");

          // Display progress
          const progress = document.getElementById("progress");
          const bar = document.getElementById("progress-bar-line");
          const currentProgressCount = document.getElementById(
            "display-current-page"
          );
          currentProgressCount.textContent = currentPageIndex;
          if (currentPageIndex) progress.classList.add("active");

          bar.style.width = `${(currentPageIndex / pagesLength) * 100}%`;
        }
      });
    });

    observer.observe(currentPageHolder, {
      attributes: true, //configure it to listen to attribute changes
    });
  })();

  // Page navigation
  (() => {
    document.addEventListener("click", function (event) {
      if (event.target.closest("[data-next-btn]")) {
        currentPageIndex++;
        currentPageHolder.value = currentPageIndex;
      }
    });
  })();

  // Welcome page slider
  (() => {
    let currentSlide = 0;
    const bulletsWrapper = document.getElementById("welcome-slider__contorls"),
      imageSlides = document.getElementById("welcome-slider__images").children,
      textSlides = document.getElementById("welcome-slider__text").children;

    const handleClick = (event) => {
      const bullet = event.target.closest("button");

      if (!bullet || !bulletsWrapper.contains(bullet)) return;

      // removing active state from previous slide
      const allBullets = bulletsWrapper.querySelectorAll("[data-control]");
      allBullets[currentSlide].classList.remove("active");
      imageSlides[currentSlide].classList.remove("active");
      textSlides[currentSlide].classList.remove("active");

      if (bullet.hasAttribute("data-control")) {
        // updating current slide
        currentSlide = +bullet.getAttribute("data-control");
      } else if (bullet.id === "next-btn") {
        // handle click on next button
        if (currentSlide < 2) {
          currentSlide++;
        } else {
          const currentPage = document.querySelector('[data-page="0"]'),
            nextPage = document.querySelector('[data-page="1"]');
          currentPage.classList.remove("active");
          nextPage.classList.add("active");

          currentPageIndex++;
          currentPageHolder.value = currentPageIndex;
        }
      }
      // setting active state for current slide
      allBullets[currentSlide].classList.add("active");
      imageSlides[currentSlide].classList.add("active");
      textSlides[currentSlide].classList.add("active");
    };

    bulletsWrapper.addEventListener("click", handleClick);
  })();

  // Name form
  (() => {
    const nameForm = document.getElementById("name-form");
    nameForm.addEventListener("submit", (event) => {
      event.preventDefault();
      // Save user name
      const printName = document.getElementById("username");
      formData.name = nameForm.querySelector("input").value;
      printName.textContent = formData.name;
    });
  })();

  // Age form
  (() => {
    const ageForm = document.getElementById("year-btns");
    ageForm.addEventListener("click", (event) => {
      event.preventDefault();

      // Save user age
      if (event.target.closest("[data-next-btn]")) {
        formData.year = event.target.dataset.year;
        console.log(formData);
      }
    });
  })();
});