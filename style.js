// const obj = document.querySelector(".header");
// const contain = document.querySelector(".navbar-collapse");
// const btn = document.querySelector(".navbar-toggler");
// const home = document.querySelector("#show");
// const btntfl = document.querySelector("#showfr");
// const gback = document.querySelector(".gback");
// const contatcus = document.querySelector("#contatcus");
// const comingSoon = document.querySelector("#comingSoon");
// const navLink = document.querySelectorAll(".nav-link");
// const wlc = document.querySelector(".home-wlc");
// let lang = localStorage.getItem("lang");

// let varlang;
// if (lang !== "fr") varlang = "fr";
// else varlang = "en";

// function vhToPixels(vh) {
//   return Math.round(window.innerHeight / (100 / vh));
// }
// if (
//   window.scrollY === 0 &&
//   btn.attributes.getNamedItem("aria-expanded").value !== "true"
// ) {
//   obj.classList.remove("tophead");
//   contain.classList.remove("tophead");
//   wlc.classList.remove("wlc-fade");
//   navLink.forEach((e) => {
//     e.classList.add("active");
//   });
// } else {
//   obj.classList.add("tophead");
//   contain.classList.add("tophead");
//   wlc.classList.add("wlc-fade");
//   navLink.forEach((e) => {
//     e.classList.remove("active");
//   });
// }

// window.addEventListener("scroll", () => {
//   if (
//     window.scrollY === 0 &&
//     btn.attributes.getNamedItem("aria-expanded").value !== "true"
//   ) {
//     obj.classList.remove("tophead");
//     contain.classList.remove("tophead");
//     wlc.classList.remove("wlc-fade");
//     navLink.forEach((e) => {
//       e.classList.add("active");
//     });
//   } else {
//     obj.classList.add("tophead");
//     contain.classList.add("tophead");
//     if (!wlc.classList.contains("wlc-fade")) wlc.classList.add("wlc-fade");
//     navLink.forEach((e) => {
//       e.classList.remove("active");
//     });
//   }
// });
// btn.addEventListener("click", () => {
//   if (window.scrollY === 0) {
//     if (btn.attributes.getNamedItem("aria-expanded").value == "true") {
//       obj.classList.add("tophead");
//       contain.classList.add("tophead");
//       navLink.forEach((e) => {
//         e.classList.remove("active");
//       });
//     } else {
//       obj.classList.remove("tophead");
//       contain.classList.remove("tophead");
//       navLink.forEach((e) => {
//         e.classList.add("active");
//       });
//     }
//   }
// });
// gback.addEventListener("click", () => {
//   comingSoon.classList.remove("opacity");
//   contatcus.classList.remove("hide");
// });

// home.addEventListener("click", () => {
//   comingSoon.classList.add("opacity");
//   contatcus.classList.add("hide");
// });
// btntfl.addEventListener("click", () => {
//   comingSoon.classList.add("opacity");
//   contatcus.classList.add("hide");
// });

// $(`[lang="${varlang}"]`).hide();

// $("#lang").click(function () {
//   lang = localStorage.getItem("lang");
//   if (lang !== "fr") localStorage.setItem("lang", "fr");
//   else  localStorage.setItem("lang", "en");
//   $('[lang="fr"]').toggle();
//   $('[lang="en"]').toggle();
// });
// $("#langr").click(function () {
//   lang = localStorage.getItem("lang");
//   if (lang !== "fr") localStorage.setItem("lang", "fr");
//   else  localStorage.setItem("lang", "en");
//   $('[lang="fr"]').toggle();
//   $('[lang="en"]').toggle();
// });