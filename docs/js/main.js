(()=>{function e(e,n){var a="undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(!a){if(Array.isArray(e)||(a=function(e,n){if(!e)return;if("string"==typeof e)return t(e,n);var a=Object.prototype.toString.call(e).slice(8,-1);"Object"===a&&e.constructor&&(a=e.constructor.name);if("Map"===a||"Set"===a)return Array.from(e);if("Arguments"===a||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a))return t(e,n)}(e))||n&&e&&"number"==typeof e.length){a&&(e=a);var r=0,o=function(){};return{s:o,n:function(){return r>=e.length?{done:!0}:{done:!1,value:e[r++]}},e:function(e){throw e},f:o}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var c,l=!0,s=!1;return{s:function(){a=a.call(e)},n:function(){var e=a.next();return l=e.done,e},e:function(e){s=!0,c=e},f:function(){try{l||null==a.return||a.return()}finally{if(s)throw c}}}}function t(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,a=new Array(t);n<t;n++)a[n]=e[n];return a}document.addEventListener("DOMContentLoaded",(function(t){"use strict";var n,a=0,r=0,o={name:"",email:"",year:"",hasGuitar:"",during:"",terms:{}};n=document.querySelectorAll("[data-page"),document.getElementById("pages-count").textContent=+n.length-1,r=+n.length-1;var c,l,s,i,d,u,m,g=document.getElementById("hold-current-page");new MutationObserver((function(e){e.forEach((function(e){if(console.log(o),"attributes"===e.type){var t=document.querySelector('[data-page="'.concat(a-1,'"]')),n=document.querySelector('[data-page="'.concat(a,'"]'));t.classList.remove("active"),n.classList.add("active");var c=document.getElementById("progress"),l=document.getElementById("progress-bar-line");document.getElementById("display-current-page").textContent=a,a&&c.classList.add("active"),l.style.width="".concat(a/r*100,"%")}}))})).observe(g,{attributes:!0}),document.addEventListener("click",(function(e){e.target.closest("[data-next-btn]")&&(a++,g.value=a)})),c=0,l=document.getElementById("welcome-slider__contorls"),s=document.getElementById("welcome-slider__images").children,i=document.getElementById("welcome-slider__text").children,l.addEventListener("click",(function(e){var t=e.target.closest("button");if(t&&l.contains(t)){var n=l.querySelectorAll("[data-control]");if(n[c].classList.remove("active"),s[c].classList.remove("active"),i[c].classList.remove("active"),t.hasAttribute("data-control"))c=+t.getAttribute("data-control");else if("next-btn"===t.id)if(c<2)c++;else{var r=document.querySelector('[data-page="0"]'),o=document.querySelector('[data-page="1"]');r.classList.remove("active"),o.classList.add("active"),a++,g.value=a}switch(n[c].classList.add("active"),s[c].classList.add("active"),i[c].classList.add("active"),c){case 0:break;case 1:n[0].style.left="17px",n[1].style.left="58px",n[2].style.left="0";break;case 2:n[0].style.left="32px",n[1].style.left="16px"}}})),(d=document.getElementById("name-form")).addEventListener("submit",(function(e){e.preventDefault();var t=document.getElementById("username");o.name=d.querySelector("input").value,t.textContent=o.name})),(u=document.getElementById("email-form")).addEventListener("submit",(function(e){e.preventDefault();var t=document.getElementById("username");o.email=u.querySelector("input").value,t.textContent=o.name})),document.getElementById("year-btns").addEventListener("click",(function(e){e.preventDefault(),e.target.closest("button")&&(e.target.dataset.year?o.year=e.target.dataset.year:(o.year=e.target.parentElement.dataset.year,o.year||(o.year=e.target.parentElement.parentElement.dataset.year)))})),document.getElementById("has-guitar-btns").addEventListener("click",(function(e){e.target.closest("[data-next-btn]")&&(console.log(e.target),e.target.dataset.hasguitar?o.hasGuitar=e.target.dataset.hasguitar:(o.hasGuitar=e.target.parentElement.dataset.hasguitar,o.hasGuitar||(o.hasGuitar=e.target.parentElement.parentElement.dataset.hasguitar)))})),document.getElementById("during-btns").addEventListener("click",(function(e){e.target.closest("[data-next-btn]")&&(e.target.dataset.during?o.during=e.target.dataset.during:(o.during=e.target.parentElement.dataset.during,o.during||(o.during=e.target.parentElement.parentElement.dataset.during)))})),(m=document.getElementById("terms-form")).addEventListener("submit",(function(t){t.preventDefault();var n,a=e(m.querySelectorAll("[type=checkbox]"));try{for(a.s();!(n=a.n()).done;){var r=n.value;r.checked?o.terms[r.value]=!0:o.terms[r.value]=!1}}catch(e){a.e(e)}finally{a.f()}}))}))})();