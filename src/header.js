import { createMainContainer, createChildren, createButton } from "./basicFunctions";

const createHeader = () => {
// HTML class main-container on page
  createMainContainer("", "header-container");

  // syntax: createBlank(text, parentClass, className)
  createChildren("", ".header-container", "header");
  createChildren("Bens Super Cool Coffee shop", ".header", "name");

  createChildren("", ".header", "button-holder");

  createButton("button1", ".button-holder", "buttons");
  createButton("button2", ".button-holder", "buttons");
  createButton("button3", ".button-holder", "buttons");
};

export { createHeader };
