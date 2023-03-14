import { createFoodItem } from "./basicFunctions";

// syntax: createBlank(text, parentClass, className)
const createMenu = () => {
  createMainContainer("", "main-container");

  createChildren("First Item", ".main-container", "first");
  createChildren("Food here", ".first", "food-name");

  createChildren("Second Item", ".main-container", "second");
  createChildren("Food HERE", ".second", "food-name");
};

export default createMenu;
