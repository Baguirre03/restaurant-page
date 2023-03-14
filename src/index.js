import { clearPage } from "./basicFunctions";
import createHeader from "./header";
import createMenu from "./menu";
import renderHomePage from "./homePage";
import renderContact from "./contact";
import "./styles.css";

createHeader();
renderHomePage();

const buttons = document.querySelectorAll("button");

buttons.forEach((btn) => {
  btn.addEventListener("click", () => {
    switch (btn.textContent) {
      case "Home":
        clearPage();
        renderHomePage();
        break;
      case "Menu":
        clearPage();
        createMenu();
        break;
      case "Contact":
        clearPage();
        renderContact();
        break;
    }
  });
});
