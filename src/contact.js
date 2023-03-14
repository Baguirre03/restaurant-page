import {
  createMainContainer,
  createChildren,
  createInput,
} from "./basicFunctions";

//syntax: (Text, parentClass, className)
//input: (id, parentClass)
const renderContact = () => {
  createMainContainer("", "main-container");

  createChildren("Contact:", ".main-container", "contact-holder");
  createInput("test", ".contact-holder");
  createInput("test1", ".contact-holder");
  createInput("test2", ".contact-holder");
  createInput("test3", ".contact-holder");
};

export default renderContact;
