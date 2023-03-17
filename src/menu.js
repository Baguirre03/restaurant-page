import {
  createFoodItem,
  createChildren,
  createMainContainer,
} from "./basicFunctions";

// syntax: createBlank(Title Name, Description, parentClass)
const createMenu = () => {
  createMainContainer("", "main-container");
  createChildren("", ".main-container", "menu-holder");
  createFoodItem(
    "Espresso",
    "A strong and concentrated shot of coffee made by forcing hot water through finely ground coffee beans. It has a thick crema on top and a rich flavor.",
    ".menu-holder",
    "../src/imgs/espresso2.png"
  );

  createFoodItem(
    "Cappuccino",
    "A classic Italian coffee drink made with espresso, steamed milk, and a layer of frothed milk on top. It has a creamy texture and a balanced flavor.",
    ".menu-holder",
    "../src/imgs/cap.png"
  );
  createFoodItem(
    "Americano",
    "A simple coffee drink made by adding hot water to a shot of espresso. It has a milder flavor than espresso and a higher volume.",
    ".menu-holder",
    "../src/imgs/americano.png"
  );
  createFoodItem(
    "Latte",
    "A popular coffee drink made with espresso and steamed milk, typically with a small amount of foam on top. It has a smooth and creamy texture with a mild espresso flavor.",
    ".menu-holder",
    "../src/imgs/latte.png"
  );
  createFoodItem(
    "Macchiato",
    "A small shot of espresso with a dollop of steamed milk on top. It has a bolder flavor than a latte and a lighter texture than a cappuccino.",
    ".menu-holder",
    "../src/imgs/machiatto.png"
  );
  createFoodItem(
    "Mocha",
    "A coffee drink made with espresso, steamed milk, chocolate syrup or powder, and whipped cream on top. It has a rich and indulgent flavor with a hint of chocolate.",
    ".menu-holder",
    "../imgs/mocha.png"
  );
};

export default createMenu;
