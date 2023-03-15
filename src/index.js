import { clearPage, colorButton } from "./basicFunctions";
import createHeader from "./header";
import createMenu from "./menu";
import renderHomePage from "./homePage";
import renderContact from "./contact";
import "./styles.css";

createHeader();
const highlightHome = (() => {
  const home = document.querySelector(".home");
  home.classList.add("highlight");
})();
renderHomePage();

const buttons = document.querySelectorAll("button");

buttons.forEach((btn) => {
  btn.addEventListener("click", () => {
    switch (btn.textContent) {
      case "Home":
        clearPage();
        renderHomePage();
        colorButton(".home", ".menu", ".contact");
        break;
      case "Menu":
        clearPage();
        createMenu();
        colorButton(".menu", ".home", ".contact");
        break;
      case "Contact":
        clearPage();
        renderContact();
        colorButton(".contact", ".menu", ".home");
        break;
    }
  });
});
