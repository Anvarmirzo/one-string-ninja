import {inputMask} from './cardValidators/inputMask';

document.addEventListener('DOMContentLoaded', function () {
  'use strict';

  // Active page index
  let currentPageIndex = 0;
  let pagesLength = 0;

  // Сollection of user information
  const formData = {
    name: '', email: '', year: '', hasGuitar: '', during: '', terms: {}
  };

  // Set pages length
  (() => {
    const pages = document.querySelectorAll('[data-page]'),
      allPagesCount = document.getElementById('pages-count');

    allPagesCount.textContent = ((+pages.length - 1) > 12) ? '12' : pages.length - 1;
    pagesLength = ((+pages.length - 1) > 12) ? '12' : pages.length - 1;
  })();

  // Page change listener
  const currentPageHolder = document.getElementById('hold-current-page');
  (() => {
    const observer = new MutationObserver(function (mutations) {
      mutations.forEach(function (mutation) {
        if (mutation.type === 'attributes') {
          if (currentPageIndex !== 8) {
            // Change current page
            const previousPage = document.querySelector(`[data-page="${currentPageIndex - 1}"]`);
            const currentPage = document.querySelector(`[data-page="${currentPageIndex}"]`);

            previousPage.classList.remove('active');
            currentPage.classList.add('active');
          }
          // Display progress
          const progress = document.getElementById('progress');
          const bar = document.getElementById('progress-bar-line');
          const currentProgressCount = document.getElementById('display-current-page');
          currentProgressCount.textContent = currentPageIndex;
          if (currentPageIndex) progress.classList.add('active');
          bar.style.width = `${(currentPageIndex / pagesLength) * 100}%`;

        }
      });
    });

    observer.observe(currentPageHolder, {
      attributes: true //configure it to listen to attribute changes
    });
  })();

  // Page navigation
  (() => {
    document.addEventListener('click', function (event) {
      if (event.target.closest('[data-next-btn]') && event.target.dataset.disabled !== 'true') {
        currentPageIndex++;
        currentPageHolder.value = currentPageIndex;
      }
    });
  })();

  // Welcome page slider
  (() => {
    let currentSlide = 0;
    const bulletsWrapper = document.getElementById('welcome-slider__controls'),
      imageSlides = document.getElementById('welcome-slider__images').children,
      textSlides = document.getElementById('welcome-slider__text').children;

    const handleClick = (event) => {
      const bullet = event.target.closest('button');

      if (!bullet || !bulletsWrapper.contains(bullet)) return;

      // removing active state from previous slide
      const allBullets = bulletsWrapper.querySelectorAll('[data-control]');
      allBullets[currentSlide].classList.remove('active');
      imageSlides[currentSlide].classList.remove('active');
      textSlides[currentSlide].classList.remove('active');

      if (bullet.hasAttribute('data-control')) {
        // updating current slide
        currentSlide = +bullet.getAttribute('data-control');
      } else if (bullet.id === 'next-btn') {
        // handle click on next button
        if (currentSlide < 2) {
          if (currentSlide === 1) bullet.textContent = 'Начать!';
          currentSlide++;
        } else {
          const currentPage = document.querySelector('[data-page="0"]'),
            nextPage = document.querySelector('[data-page="1"]');
          currentPage.classList.remove('active');
          nextPage.classList.add('active');

          currentPageIndex++;
          currentPageHolder.value = currentPageIndex;
        }
      }
      // setting active state for current slide
      allBullets[currentSlide].classList.add('active');
      imageSlides[currentSlide].classList.add('active');
      textSlides[currentSlide].classList.add('active');

      switch (currentSlide) {
        case 0:
          break;

        case 1:
          allBullets[0].style.left = '17px';
          allBullets[1].style.left = '58px';
          allBullets[2].style.left = '0';

          break;

        case 2:
          allBullets[0].style.left = '32px';
          allBullets[1].style.left = '16px';
          break;

        default:
          break;
      }
    };

    bulletsWrapper.addEventListener('click', handleClick);
  })();

  // Subscribe page slider
  (() => {
    let currentSlide = 0;
    const bulletsWrapper = document.getElementById('subscribe-slider__controls'),
      textSlides = document.getElementById('subscribe-slider__text').children;

    const handleClick = (event) => {
      const bullet = event.target.closest('button');

      if (!bullet || !bulletsWrapper.contains(bullet)) return;

      // removing active state from previous slide
      const allBullets = bulletsWrapper.querySelectorAll('[data-subscribe-control]');
      allBullets[currentSlide].classList.remove('active');
      textSlides[currentSlide].classList.remove('active');

      if (bullet.hasAttribute('data-subscribe-control')) {
        // updating current slide
        currentSlide = +bullet.getAttribute('data-subscribe-control');
      } else if (bullet.id === 'subscribe-btn') {
        // handle click on next button
        if (currentSlide < 3) {
          currentSlide++;
        } else {
          const currentPage = document.querySelector('[data-page="13"]'),
            nextPage = document.querySelector('[data-page="14"]');
          currentPage.classList.remove('active');
          nextPage.classList.add('active');

          currentPageIndex++;
          currentPageHolder.value = currentPageIndex;
        }
      }
      // setting active state for current slide
      allBullets[currentSlide].classList.add('active');
      textSlides[currentSlide].classList.add('active');

      switch (currentSlide) {
        case 0:
          break;

        case 1:
          allBullets[0].style.left = '16px';
          allBullets[1].style.left = '0';
          break;

        case 2:
          allBullets[0].style.left = '32px';
          allBullets[2].style.left = '16px';
          break;

        case 3:
          allBullets[0].style.left = '48px';
          allBullets[3].style.left = '32px';
          break;

        default:
          break;
      }
    };

    bulletsWrapper.addEventListener('click', handleClick);
  })();

  // Name form
  (() => {
    const nameForm = document.getElementById('name-form');
    nameForm.addEventListener('submit', (event) => {
      event.preventDefault();
      // Save username
      const printName = document.getElementById('username');
      formData.name = nameForm.querySelector('input').value;
      printName.textContent = formData.name;
    });
  })();

  // Email form
  (() => {
    const emailForm = document.getElementById('email-form');
    emailForm.addEventListener('submit', (event) => {
      event.preventDefault();
      // Save user email
      const printName = document.getElementById('username');
      formData.email = emailForm.querySelector('input').value;
      printName.textContent = formData.name;
    });
  })();

  // Age form
  (() => {
    const ageForm = document.getElementById('year-btns');
    ageForm.addEventListener('click', (event) => {
      event.preventDefault();

      // Save user age
      if (event.target.closest('button')) {
        if (!event.target.dataset.year) {
          formData.year = event.target.parentElement.dataset.year;
          if (!formData.year) {
            formData.year = event.target.parentElement.parentElement.dataset.year;
          }
        } else {
          formData.year = event.target.dataset.year;
        }
      }
    });
  })();

  // Has guitar form
  (() => {
    const hasGuitarForm = document.getElementById('has-guitar-btns');
    hasGuitarForm.addEventListener('click', (event) => {
      if (event.target.closest('[data-next-btn]')) {
        if (!event.target.dataset.hasguitar) {
          formData.hasGuitar = event.target.parentElement.dataset.hasguitar;
          if (!formData.hasGuitar) {
            formData.hasGuitar = event.target.parentElement.parentElement.dataset.hasguitar;
          }
        } else {
          formData.hasGuitar = event.target.dataset.hasguitar;
        }
      }
    });
  })();

  // During form
  (() => {
    const duringForm = document.getElementById('during-btns');
    duringForm.addEventListener('click', (event) => {
      if (event.target.closest('[data-next-btn]')) {
        if (!event.target.dataset.during) {
          formData.during = event.target.parentElement.dataset.during;
          if (!formData.during) {
            formData.during = event.target.parentElement.parentElement.dataset.during;
          }
        } else {
          formData.during = event.target.dataset.during;
        }
      }
    });
  })();

  // Terms form
  (() => {
    const form = document.getElementById('terms-form');
    form.addEventListener('submit', function (event) {
      event.preventDefault();
      const checkboxes = form.querySelectorAll('[type=checkbox]');
      for (const item of checkboxes) {
        formData.terms[item.value] = !!item.checked;
      }
    });
  })();

  // Change checkboxes content
  (() => {
    const checkboxesPage = document.getElementById('checkboxes'),
      checkboxes = checkboxesPage.querySelectorAll('#during-btns span'),
      titles = checkboxesPage.querySelectorAll('.title'), btn = document.getElementById('change-checkboxes');

    btn.addEventListener('click', () => {
      if (!checkboxes.length || titles.length < 2) return;

      checkboxesPage.classList.add('second-part');
      titles[0].classList.remove('active');
      titles[1].classList.add('active');

      checkboxes[0].textContent = 'Сыграть крутую песню в любое время';
      checkboxes[1].textContent = 'Очаровать девушку';
      checkboxes[1].parentElement.classList.add('swapped');
      checkboxes[2].innerHTML = 'Играть&nbsp;вместе с другими';
      checkboxes[2].parentElement.classList.add('swapped');
      checkboxes[3].textContent = 'Поднимать себе настроение';
      checkboxes[4].innerHTML = 'Сочинять свою&nbsp;музыку';
      checkboxes[5].parentElement.classList.add('create');
      checkboxes[6].innerHTML = 'Медитировать<br> и снимать стресс';

      for (const span of checkboxes) {
        span.previousElementSibling.checked = false;
      }

      setTimeout(() => {
        if (currentPageIndex === 7) {
          currentPageIndex++;
          btn.setAttribute('data-next-btn', '8');
          checkboxesPage.setAttribute('data-page', '8');
          currentPageHolder.value = currentPageIndex;
        }
      }, 1);
    });
  })();

  // Close progress bar
  (() => {
    const closeBtn = document.getElementById('close-progress-btn');
    closeBtn.addEventListener('click', () => {
      const progressBar = document.getElementById('progress');
      progressBar.style.opacity = '0';
      progressBar.style.height = '0';
      progressBar.style.position = 'absolute';
      progressBar.style.overflow = 'hidden';
    });
  })();

//  Form validation

  const fieldValidator = (inputId, btnId) => {
    const nameInput = document.getElementById(inputId);
    const nameBtn = document.getElementById(btnId);

    nameInput.addEventListener('input', (e) => {
      if (e.target.value.trim().length > 1) {
        nameBtn.dataset.disabled = 'false';
      } else {
        nameBtn.dataset.disabled = 'true';
      }
    });

    // nameBtn.addEventListener('click', () => {
    //
    // });
  };

  fieldValidator('name-form-input', 'name-form-btn');
  fieldValidator('email-form-input', 'email-form-btn');

  /* Card validator */
  (() => {
    const paymentData = {
      cardType: '',
      cardNumber: '',
      cardExpiry: '',
      cardCvc: '',
      cardName: '',
      validFields: []
    };
    const masterCardRegex = /^5[1-5][0-9]{14}$|^2(?:2(?:2[1-9]|[3-9][0-9])|[3-6][0-9][0-9]|7(?:[01][0-9]|20))[0-9]{12}$/;
    const visaRegex = /^4[0-9]{12}(?:[0-9]{3})?$/;
    const maestroRegex = /^(5018|5081|5044|5020|5038|603845|6304|6759|676[1-3]|6799|6220|504834|504817|504645)[0-9]{8,15}$/;
    const expiryDateRegex = /^(0[1-9]|1[0-2])\/?([0-9]{4}|[0-9]{2})$/mg;
    const ccCVCPattern = /^[0-9]{3,4}$/;

    (function radioHandler() {
      const radiosWrapper = document.getElementById('payment-radios');
      const radios = radiosWrapper.querySelectorAll('input[type="radio"]');


      /* Handle payment method */
      for (const radio of radios) {
        radio.addEventListener('input', (e) => {
          paymentData.cardType = e.target.value;
        });
      }
    })();

    (function inputHandler() {
      const fieldsWrapper = document.getElementById('payment-fields');
      const fields = fieldsWrapper.querySelectorAll('input[type="text"]');
      const btn = document.getElementById('payment-submit-btn');
      const errorMessage = document.getElementById('error-msg');

      const [cardNumber, cardExpiry, cardCvc, cardName] = fields;
      inputMask(cardNumber, cardExpiry, cardCvc);

      for (const field of fields) {
        field.addEventListener('input', (e) => {
          switch (Object.keys(field.dataset)[0]) {
            case 'number':
              paymentData.cardNumber = e.target.value.split(' ').join('');
              break;

            case 'expiry':
              paymentData.cardExpiry = e.target.value;
              break;

            case 'cvc':
              paymentData.cardCvc = e.target.value;
              break;

            case 'name':
              paymentData.cardName = e.target.value;
              break;
            default:
              break;
          }
        });
      }
      btn.addEventListener('click', () => {

        /* Validation number */
        if (paymentData.cardNumber.match(masterCardRegex) || paymentData.cardNumber.match(visaRegex) || paymentData.cardNumber.match(maestroRegex)) {
          if (cardNumber.classList.contains('invalid')) {
            cardNumber.classList.remove('invalid');
          }

          if (!paymentData.validFields.includes('cardNumber')) {
            paymentData.validFields.push('cardNumber');
          }

        } else {
          errorMessage.classList.add('active');
          cardNumber.classList.add('invalid');
        }

        /* Validation expiry date */
        if (paymentData.cardExpiry.match(expiryDateRegex)) {
          if (!paymentData.validFields.includes('cardExpiry')) {
            paymentData.validFields.push('cardExpiry');
          }
          if (cardExpiry.classList.contains('invalid')) {
            cardExpiry.classList.remove('invalid');
          }
        } else {
          errorMessage.classList.add('active');
          cardExpiry.classList.add('invalid');
        }

        /* Validation СVC */
        if (paymentData.cardCvc.match(ccCVCPattern)) {
          if (!paymentData.validFields.includes('cardCvc')) {
            paymentData.validFields.push('cardCvc');
          }
          if (cardCvc.classList.contains('invalid')) {
            cardCvc.classList.remove('invalid');
          }
        } else {
          errorMessage.classList.add('active');
          cardCvc.classList.add('invalid');
        }

        /* Validation name*/
        if (paymentData.cardName.length > 2) {
          if (!paymentData.validFields.includes('cardName')) {
            paymentData.validFields.push('cardName');
          }
          if (cardName.classList.contains('invalid')) {
            cardName.classList.remove('invalid');
          }
        } else {
          errorMessage.classList.add('active');
          cardName.classList.add('invalid');
        }

        /* Hide error message */
        if (paymentData.validFields.length === 4 && errorMessage.classList.contains('active')) {
          errorMessage.classList.remove('active');
          currentPageIndex++;
          currentPageHolder.value = currentPageIndex
        }
      });
    })();
  })();
});
