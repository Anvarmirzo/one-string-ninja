(()=>{function e(e,a){var n="undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(!n){if(Array.isArray(e)||(n=function(e,a){if(!e)return;if("string"==typeof e)return t(e,a);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return t(e,a)}(e))||a&&e&&"number"==typeof e.length){n&&(e=n);var r=0,s=function(){};return{s:s,n:function(){return r>=e.length?{done:!0}:{done:!1,value:e[r++]}},e:function(e){throw e},f:s}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var c,l=!0,i=!1;return{s:function(){n=n.call(e)},n:function(){var e=n.next();return l=e.done,e},e:function(e){i=!0,c=e},f:function(){try{l||null==n.return||n.return()}finally{if(i)throw c}}}}function t(e,t){(null==t||t>e.length)&&(t=e.length);for(var a=0,n=new Array(t);a<t;a++)n[a]=e[a];return n}document.addEventListener("DOMContentLoaded",(function(){"use strict";var t,a=0,n=0,r={name:"",email:"",year:"",hasGuitar:"",during:"",terms:{}};t=document.querySelectorAll("[data-page]"),document.getElementById("pages-count").textContent=+t.length-1,n=+t.length-1;var s,c,l,i,o,d,u,m,g,y,v,f=document.getElementById("hold-current-page");new MutationObserver((function(e){e.forEach((function(e){if("attributes"===e.type){if(8!==a){var t=document.querySelector('[data-page="'.concat(a-1,'"]')),r=document.querySelector('[data-page="'.concat(a,'"]'));t.classList.remove("active"),r.classList.add("active")}var s=document.getElementById("progress"),c=document.getElementById("progress-bar-line");document.getElementById("display-current-page").textContent=a,a&&s.classList.add("active"),c.style.width="".concat(a/n*100,"%")}}))})).observe(f,{attributes:!0}),document.addEventListener("click",(function(e){e.target.closest("[data-next-btn]")&&(a++,f.value=a)})),s=0,c=document.getElementById("welcome-slider__contorls"),l=document.getElementById("welcome-slider__images").children,i=document.getElementById("welcome-slider__text").children,c.addEventListener("click",(function(e){var t=e.target.closest("button");if(t&&c.contains(t)){var n=c.querySelectorAll("[data-control]");if(n[s].classList.remove("active"),l[s].classList.remove("active"),i[s].classList.remove("active"),t.hasAttribute("data-control"))s=+t.getAttribute("data-control");else if("next-btn"===t.id)if(s<2)s++;else{var r=document.querySelector('[data-page="0"]'),o=document.querySelector('[data-page="1"]');r.classList.remove("active"),o.classList.add("active"),a++,f.value=a}switch(n[s].classList.add("active"),l[s].classList.add("active"),i[s].classList.add("active"),s){case 0:break;case 1:n[0].style.left="17px",n[1].style.left="58px",n[2].style.left="0";break;case 2:n[0].style.left="32px",n[1].style.left="16px"}}})),function(){var e=0,t=document.getElementById("subscribe-slider__contorls"),n=document.getElementById("subscribe-slider__text").children;t.addEventListener("click",(function(r){var s=r.target.closest("button");if(s&&t.contains(s)){var c=t.querySelectorAll("[data-subscribe-control]");if(c[e].classList.remove("active"),n[e].classList.remove("active"),s.hasAttribute("data-subscribe-control"))e=+s.getAttribute("data-subscribe-control");else if("subscribe-btn"===s.id)if(e<3)e++;else{var l=document.querySelector('[data-page="13"]'),i=document.querySelector('[data-page="14"]');l.classList.remove("active"),i.classList.add("active"),a++,f.value=a}switch(c[e].classList.add("active"),n[e].classList.add("active"),e){case 0:break;case 1:c[0].style.left="16px",c[1].style.left="0";break;case 2:c[0].style.left="32px",c[2].style.left="16px";break;case 3:c[0].style.left="48px",c[3].style.left="32px"}}}))}(),(o=document.getElementById("name-form")).addEventListener("submit",(function(e){e.preventDefault();var t=document.getElementById("username");r.name=o.querySelector("input").value,t.textContent=r.name})),(d=document.getElementById("email-form")).addEventListener("submit",(function(e){e.preventDefault();var t=document.getElementById("username");r.email=d.querySelector("input").value,t.textContent=r.name})),document.getElementById("year-btns").addEventListener("click",(function(e){e.preventDefault(),e.target.closest("button")&&(e.target.dataset.year?r.year=e.target.dataset.year:(r.year=e.target.parentElement.dataset.year,r.year||(r.year=e.target.parentElement.parentElement.dataset.year)))})),document.getElementById("has-guitar-btns").addEventListener("click",(function(e){e.target.closest("[data-next-btn]")&&(e.target.dataset.hasguitar?r.hasGuitar=e.target.dataset.hasguitar:(r.hasGuitar=e.target.parentElement.dataset.hasguitar,r.hasGuitar||(r.hasGuitar=e.target.parentElement.parentElement.dataset.hasguitar)))})),document.getElementById("during-btns").addEventListener("click",(function(e){e.target.closest("[data-next-btn]")&&(e.target.dataset.during?r.during=e.target.dataset.during:(r.during=e.target.parentElement.dataset.during,r.during||(r.during=e.target.parentElement.parentElement.dataset.during)))})),(u=document.getElementById("terms-form")).addEventListener("submit",(function(t){t.preventDefault();var a,n=e(u.querySelectorAll("[type=checkbox]"));try{for(n.s();!(a=n.n()).done;){var s=a.value;r.terms[s.value]=!!s.checked}}catch(e){n.e(e)}finally{n.f()}})),m=document.getElementById("checkboxes"),g=m.querySelectorAll("#during-btns span"),y=m.querySelectorAll(".title"),(v=document.getElementById("change-checkboxes")).addEventListener("click",(function(){if(g.length&&!(y.length<2)){m.classList.add("second-part"),y[0].classList.remove("active"),y[1].classList.add("active"),g[0].textContent="Сыграть крутую песню в любое время",g[1].textContent="Очаровать девушку",g[1].parentElement.classList.add("swapped"),g[2].innerHTML="Играть&nbsp;вместе с другими",g[2].parentElement.classList.add("swapped"),g[3].textContent="Поднимать себе настроение",g[4].innerHTML="Сочинять свою&nbsp;музыку",g[5].parentElement.classList.add("create"),g[6].textContent="Медитировать и снимать стресс";var t,n=e(g);try{for(n.s();!(t=n.n()).done;)t.value.previousElementSibling.checked=!1}catch(e){n.e(e)}finally{n.f()}setTimeout((function(){7===a&&(a++,v.setAttribute("data-next-btn","8"),m.setAttribute("data-page","8"),f.value=a)}),1)}})),document.getElementById("close-progress-btn").addEventListener("click",(function(){var e=document.getElementById("progress");console.log("triggered"),e.style.opacity="0",e.style.height="0",e.style.position="absolute",e.style.overflow="hidden"}))}))})();