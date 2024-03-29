import {
  createChildren,
  createMainContainer,
  createImg,
} from "./basicFunctions";

// syntax: createBlank(text, parentClass, className)
const renderHomePage = () => {
  createMainContainer("", "main-container");
  const backgroundContainer = document.querySelector(".main-container");
  backgroundContainer.classList.add("home-container");

  createChildren("", ".main-container", "second-main");
  createChildren("", ".second-main", "about-container");
  createChildren("About", ".about-container", "about-header");
  createChildren(
    "Welcome to our coffee shop, where we believe that every cup of coffee should be an experience to remember. Located in the heart of the city, our coffee shop is the perfect spot to unwind and relax, catch up with friends or get some work done. We pride ourselves on providing the highest quality coffee, sourced from the finest roasters around the world.Located in the heart of the city, our coffee shop is the perfect spot to unwind and relax, catch up with friends or get some work done.",
    ".about-container",
    "about-text"
  );

  createChildren("", ".second-main", "hours-container");
  createChildren("Hours", ".hours-container", "hours-header");
  createChildren(
    "Our coffee shop is open 7 days a week for your convenience. Our hours of operation are as follows: Monday to Friday: 7:00am - 7:00pm Saturday: 8:00am - 6:00pm Sunday: 9:00am - 5:00pm We understand that everyone has different schedules, so we aim to offer flexible hours that can accommodate a variety of lifestyles. Whether you need your morning caffeine fix or a cozy place to unwind in the evening, our doors are always open.",
    ".hours-container",
    "hours-text"
  );

  createChildren("", ".second-main", "location-container");
  createChildren("Location", ".location-container", "location-header");
  createChildren(
    "5298 West Loop Drive, Dallas, TX, 75214",
    ".location-container",
    "location-text"
  );
};

export default renderHomePage;
