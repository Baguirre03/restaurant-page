import { createHeader } from "./header";
import { createChildren, createMainContainer } from "./basicFunctions";

// syntax: createBlank(text, parentClass, className)
const renderHomePage = () => {
  createHeader();
  createMainContainer("", "second-container");

  createChildren("About", ".second-container", "about");
  createChildren(
    "Welcome to our coffee shop, where we believe that every cup of coffee should be an experience to remember. Located in the heart of the city, our coffee shop is the perfect spot to unwind and relax, catch up with friends or get some work done. We pride ourselves on providing the highest quality coffee, sourced from the finest roasters around the world.Located in the heart of the city, our coffee shop is the perfect spot to unwind and relax, catch up with friends or get some work done. We pride ourselves on providing the highest quality coffee, sourced from the finest roasters around the world.",
    ".about",
    "about-text"
  );

  createChildren("Hours", ".second-container", "hours");
  createChildren(
    "Our coffee shop is open 7 days a week for your convenience. Our hours of operation are as follows: Monday to Friday: 7:00am - 7:00pm Saturday: 8:00am - 6:00pm Sunday: 9:00am - 5:00pm We understand that everyone has different schedules, so we aim to offer flexible hours that can accommodate a variety of lifestyles. Whether you need your morning caffeine fix or a cozy place to unwind in the evening, our doors are always open.",
    ".hours",
    "hours-text"
  );

  createChildren("Location", ".second-container", "location");
  createChildren("6000 west drive, Dallas, TX", ".location", "location-text");
};

export { renderHomePage };
