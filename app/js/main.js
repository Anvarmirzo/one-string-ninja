document.addEventListener("DOMContentLoaded", function (e) {
  ("use strict");
  // Active page index
  let currentPageIndex = 0;
  let pagesLength = 0;

  // Сollection of user information
  const formData = {
    name: "",
    email: "",
    year: "",
    hasGuitar: "",
    during: "",
    terms: {},
  };

  // Set pages length
  (() => {
    const pages = document.querySelectorAll("[data-page"),
      allPagesCount = document.getElementById("pages-count");
    allPagesCount.textContent = +pages.length;
    pagesLength = +pages.length;
  })();

  // Page change listener
  const currentPageHolder = document.getElementById("hold-current-page");
  (() => {
    const observer = new MutationObserver(function (mutations) {
      mutations.forEach(function (mutation) {
        console.log(currentPageIndex);
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

      switch (currentSlide) {
        case 0:
          break;

        case 1:
          allBullets[0].style.left = "17px";
          allBullets[1].style.left = "58px";
          allBullets[2].style.left = "0";

          break;

        case 2:
          allBullets[0].style.left = "32px";
          allBullets[1].style.left = "16px";
          break;

        default:
          break;
      }
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

  // Email form
  (() => {
    const emailForm = document.getElementById("email-form");
    emailForm.addEventListener("submit", (event) => {
      event.preventDefault();
      // Save user email
      const printName = document.getElementById("username");
      formData.email = emailForm.querySelector("input").value;
      printName.textContent = formData.name;
    });
  })();

  // Age form
  (() => {
    const ageForm = document.getElementById("year-btns");
    ageForm.addEventListener("click", (event) => {
      event.preventDefault();

      // Save user age
      if (event.target.closest("button")) {
        if (!event.target.dataset.year) {
          formData.year = event.target.parentElement.dataset.year;
          if (!formData.year) {
            formData.year =
              event.target.parentElement.parentElement.dataset.year;
          }
        } else {
          formData.year = event.target.dataset.year;
        }
      }
    });
  })();

  // Has guitar form
  (() => {
    const hasGuitarForm = document.getElementById("has-guitar-btns");
    hasGuitarForm.addEventListener("click", (event) => {
      if (event.target.closest("[data-next-btn]")) {
        if (!event.target.dataset.hasguitar) {
          formData.hasGuitar = event.target.parentElement.dataset.hasguitar;
          if (!formData.hasGuitar) {
            formData.hasGuitar =
              event.target.parentElement.parentElement.dataset.hasguitar;
          }
        } else {
          formData.hasGuitar = event.target.dataset.hasguitar;
        }
      }
    });
  })();

  // During form
  (() => {
    const duringForm = document.getElementById("during-btns");
    duringForm.addEventListener("click", (event) => {
      if (event.target.closest("[data-next-btn]")) {
        if (!event.target.dataset.during) {
          formData.during = event.target.parentElement.dataset.during;
          if (!formData.during) {
            formData.during =
              event.target.parentElement.parentElement.dataset.during;
          }
        } else {
          formData.during = event.target.dataset.during;
        }
      }
    });
  })();

  // Terms form
  (() => {
    const form = document.getElementById("terms-form");
    form.addEventListener("submit", function (event) {
      event.preventDefault();
      const checkboxes = form.querySelectorAll("[type=checkbox]");
      for (const item of checkboxes) {
        if (item.checked) {
          formData.terms[item.value] = true;
        } else {
          formData.terms[item.value] = false;
        }
      }
    });
  })();

  // Change checkboxes content
  (() => {
    const checkboxesPage = document.getElementById("checkboxes"),
      checkboxes = checkboxesPage.querySelectorAll("#during-btns span"),
      titles = checkboxesPage.querySelectorAll(".title"),
      btn = document.getElementById("change-checkboxes");

    btn.addEventListener("click", (e) => {
      if (!checkboxes.length || titles.length < 2) return;

      checkboxesPage.classList.add("second-part");
      titles[0].classList.remove("active");
      titles[1].classList.add("active");

      checkboxes[0].textContent = "Сыграть крутую песню в любое время";
      checkboxes[1].textContent = "Очаровать девушку";
      checkboxes[1].parentElement.classList.add("swapped");
      checkboxes[2].innerHTML = "Играть&nbsp;вместе с другими";
      checkboxes[2].parentElement.classList.add("swapped");
      checkboxes[3].textContent = "Поднимать себе настроение";
      checkboxes[4].innerHTML = "Сочинять свою&nbsp;музыку";
      checkboxes[5].parentElement.classList.add("create");
      checkboxes[6].textContent = "Медитировать и снимать стресс";

      for (const span of checkboxes) {
        span.previousElementSibling.checked = false;
      }

      setTimeout(() => {
        if (currentPageIndex === 7) {
          currentPageIndex++;
          btn.setAttribute("data-next-btn", "8");
          checkboxesPage.setAttribute("data-page", "8");
        }
      }, 1);
    });
  })();
});
