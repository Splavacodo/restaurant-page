import "./style.css";
import { loadHomePage } from "./load-homepage.js";
import { loadMenuPage } from "./load-menu-page.js";
import { loadAboutPage } from "./load-about-page.js";

loadHomePage();

document.querySelector(".home-nav").addEventListener("click", () => loadHomePage());
document.querySelector(".menu-nav").addEventListener("click", () => loadMenuPage());
document.querySelector(".about-nav").addEventListener("click", () => loadAboutPage());
