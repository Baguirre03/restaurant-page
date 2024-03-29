import {
  createFoodItem,
  createChildren,
  createMainContainer,
} from "./basicFunctions";

import espresso from "./imgs/espresso2.png";
import cap from "./imgs/cap.png";
import latte from "./imgs/latte.png";
import mach from "./imgs/machiatto.png";
import mocha from "./imgs/mocha.png";
import americano from "./imgs/americano.png";

// syntax: createBlank(Title Name, Description, parentClass)
const createMenu = () => {
  createMainContainer("", "main-container");
  createChildren("", ".main-container", "menu-holder");
  createFoodItem(
    "Espresso",
    "A strong and concentrated shot of coffee made by forcing hot water through finely ground coffee beans. It has a thick crema on top and a rich flavor.",
    ".menu-holder",
    espresso
  );

  createFoodItem(
    "Cappuccino",
    "A classic Italian coffee drink made with espresso, steamed milk, and a layer of frothed milk on top. It has a creamy texture and a balanced flavor.",
    ".menu-holder",
    cap
  );
  createFoodItem(
    "Americano",
    "A simple coffee drink made by adding hot water to a shot of espresso. It has a milder flavor than espresso and a higher volume.",
    ".menu-holder",
    americano
  );
  createFoodItem(
    "Latte",
    "A popular coffee drink made with espresso and steamed milk, typically with a small amount of foam on top. It has a smooth and creamy texture with a mild espresso flavor.",
    ".menu-holder",
    latte
  );
  createFoodItem(
    "Macchiato",
    "A small shot of espresso with a dollop of steamed milk on top. It has a bolder flavor than a latte and a lighter texture than a cappuccino.",
    ".menu-holder",
    mach
  );
  createFoodItem(
    "Mocha",
    "A coffee drink made with espresso, steamed milk, chocolate syrup or powder, and whipped cream on top. It has a rich and indulgent flavor with a hint of chocolate.",
    ".menu-holder",
    mocha
  );
};

export default createMenu;
