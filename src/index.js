import { doc } from "prettier";
import { renderHomePage } from "./homePage";
import { clearPage } from "./basicFunctions";
import { createHeader } from "./header";
import "./styles.css";

renderHomePage();

const home = document.querySelector(".home");
const menu = document.querySelector(".menu");
const contact = document.querySelector(".contact");

home.addEventListener("click", () => {
  clearPage();
  createHeader();
});

menu.addEventListener("click", () => {
  clearPage();
  createHeader();
});

contact.addEventListener("click", () => {
  clearPage();
  createHeader();
});
