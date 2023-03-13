import { doc } from "prettier";
import { renderHomePage } from "./homePage";
import "./styles.css";

renderHomePage();

const home = document.querySelector(".home");
const menu = document.querySelector(".menu");
const contact = document.querySelector(".contact");

home.addEventListener("click", () => {
  console.log("helol");
});

menu.addEventListener("click", () => {
  console.log("menu");
});

contact.addEventListener("click", () => {
  console.log("contact");
});
