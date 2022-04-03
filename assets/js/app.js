import * as fonksiyon from "./functions.js";

/* Splide Slider */
let splide__item = document.querySelector(".splide");
if (splide__item) {
	var splide = new Splide(splide__item, {
		pagination: false,
		padding: "1rem",
		start: 2,
	});
	splide.mount();
}
/* Splide Slider SON */

/* Aos */
AOS.init();
/* Aos SON */

/* İnput File */
var input = document.getElementById("cv");
if (input) {
	input.addEventListener("input", () => {
		let yol = input.value;
		var kes =
			yol.indexOf("\\") >= 0
				? yol.lastIndexOf("\\")
				: yol.lastIndexOf("/");
		var dosya_ismi = yol.substring(kes);
		if (dosya_ismi.indexOf("\\") === 0 || dosya_ismi.indexOf("/") === 0) {
			dosya_ismi = dosya_ismi.substring(1);
		}
		document.getElementById("file-name").innerHTML = dosya_ismi;
	});
}
/* İnput File SON */

/* Pozisyon */
let pozisyonlar = document.querySelectorAll(".pozisyon");
if (pozisyonlar) {
	pozisyonlar.forEach((pozisyon) => {
		let pozisyon_buton = pozisyon.querySelector(".pozisyon__buton");
		let pozisyon_bilgileri = pozisyon.querySelector(".pozisyon__bilgileri");
		pozisyon_buton.addEventListener("click", () => {
			if (pozisyon_bilgileri.style.maxHeight) {
				pozisyon_bilgileri.style.maxHeight = null;
			} else {
				pozisyon_bilgileri.style.maxHeight =
					pozisyon_bilgileri.scrollHeight + "px";
			}
			pozisyon.classList.toggle("aktif");
		});
	});
}
/* Pozisyon SON */
/* Svg Animasyon */
const paths = document.querySelectorAll(".aktif__gorsel");
const section = document.getElementById("steps");

/* 	pageYOffset NE KADAR KAYDIRDIĞIM
	document.body.offsetHeight sayfanın tam boyutu
	window.innerHeight ekran yüksekliği */

if (section) {
	window.onscroll = function () {
		let konum = section.getBoundingClientRect(),
			top = Math.round(konum.top);

		paths.forEach((path) => {
			path.style.height = 0;
		});
		if (top < 400) {
			top = -top;
			paths.forEach((path) => {
				path.style.height = `calc(25vh + ${top}px)`;
			});
		} else {
			paths.forEach((path) => {
				path.style.height = 0;
			});
		}
	};
}

/* Svg Animasyon SON */

/* Nav Popup */
const navPopupTus = document.querySelector(".nav__popup-tus"),
	navPopup = document.querySelector("#nav-popup"),
	navPopupLink = document.querySelectorAll("#nav-popup .__tus"),
	navFiltre = document.querySelector("#nav-popup .__filtre");
let scroll = 1;
let navToggle = () => {
	navPopup.classList.toggle("--aktif");
	navPopupTus.classList.toggle("--aktif");
	scroll = -scroll;
	scroll < 0 ? fonksiyon.scrool_kapat() : fonksiyon.scrool_ac();
};
navFiltre.onclick = () => navToggle();
navPopupTus.onclick = () => navToggle();
navPopupLink.forEach((link) => {
	link.onclick = () => navToggle();
});
/* Nav Popup SON */
