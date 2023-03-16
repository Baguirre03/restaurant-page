const createMainContainer = (text, className) => {
  const body = document.querySelector("body");

  const element = document.createElement("div");
  element.classList.add(className);
  element.textContent = text;

  body.appendChild(element);

  return element;
};

const createChildren = (text, parentClass, className) => {
  const parent = document.querySelector(parentClass);

  const element = document.createElement("div");
  element.classList.add(className);
  element.textContent = text;

  parent.appendChild(element);

  return element;
};

const createImg = (imageSource, parentClass, className) => {
  const image = document.createElement("img");
  image.src = imageSource;
  image.classList.add(className);

  const parent = document.querySelector(parentClass);

  parent.appendChild(image);
};

const createButton = (text, parentClass, className) => {
  const parent = document.querySelector(parentClass);

  const element = document.createElement("button");
  element.classList.add(className);
  element.textContent = text;

  parent.appendChild(element);

  return element;
};

const clearPage = () => {
  let removeMain = document.querySelector(".main-container");
  while (removeMain.firstChild) {
    removeMain.removeChild(removeMain.firstChild);
  }
  removeMain.remove();
};

const createFoodItem = (name, foodDescription, parentClass, imageLink) => {
  const foodContainer = document.createElement("div");
  foodContainer.classList.add("food-container");

  const parent = document.querySelector(parentClass);
  parent.appendChild(foodContainer);

  const food = document.createElement("div");
  food.classList.add("food-name");
  food.textContent = name;

  foodContainer.appendChild(food);

  const foodImage = document.createElement("img");
  foodImage.src = imageLink;
  foodImage.classList.add("food-image");

  foodContainer.appendChild(foodImage);

  const foodDesc = document.createElement("div");
  foodDesc.classList.add("food-description");
  foodDesc.textContent = foodDescription;

  foodContainer.appendChild(foodDesc);
};

const createInput = (id, parentClass) => {
  const parent = document.querySelector(parentClass);
  const input = document.createElement("input");
  parent.appendChild(input);
  input.setAttribute("id", id);
};

const colorButton = (button, other, other2) => {
  const highlight = document.querySelector(button);
  const remove = document.querySelector(other);
  const remove2 = document.querySelector(other2);

  highlight.classList.add("highlight");
  remove.classList.remove("highlight");
  remove2.classList.remove("highlight");
};

export {
  createMainContainer,
  createChildren,
  createButton,
  clearPage,
  createFoodItem,
  createInput,
  createImg,
  colorButton,
};
