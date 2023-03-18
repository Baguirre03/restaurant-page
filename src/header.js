import {
  createMainContainer,
  createChildren,
  createButton,
  createImg,
} from "./basicFunctions";
import coffee from "./imgs/coffee-outline.svg";

const createHeader = () => {
  // HTML class main-container on page
  createMainContainer("", "header-container");

  // syntax: createBlank(text, parentClass, className)
  createChildren("", ".header-container", "header");
  createChildren("Bens Super Cool Coffee shop", ".header", "name");
  createImg(coffee, ".name", "coffeeLogo");

  createChildren("", ".header", "button-holder");

  createButton("Home", ".button-holder", "home");
  createButton("Menu", ".button-holder", "menu");
  createButton("Contact", ".button-holder", "contact");
};

export default createHeader;
