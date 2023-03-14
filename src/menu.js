import { createFoodItem, createMainContainer } from "./basicFunctions";

// syntax: createBlank(Title Name, Description, parentClass)
const createMenu = () => {
  createMainContainer("", "main-container");
  createFoodItem("Food 1", "This is a description", ".main-container");
  createFoodItem("Food 1", "This is a description", ".main-container");
  createFoodItem("Food 1", "This is a description", ".main-container");
  createFoodItem("Food 1", "This is a description", ".main-container");
  createFoodItem("Food 1", "This is a description", ".main-container");
  createFoodItem("Food 1", "This is a description", ".main-container");
};

export default createMenu;
