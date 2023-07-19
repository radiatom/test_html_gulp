import * as flsFunctions from "./modules/functions.js";
flsFunctions.isWebp();

import Swiper, { Navigation, Pagination } from "swiper";
const swiper = new Swiper();

const iconMenu = document.querySelector(".header__icon");
if (iconMenu) {
    const menuBody = document.querySelector(".header__menu");
    if (menuBody) {
        iconMenu.addEventListener("click", (e) => {
            menuBody.classList.toggle("active");
            iconMenu.classList.toggle("active");
        });
    }
}
