import { createMainContainer, createChildren } from "./basicFunctions";

const renderContact = () => {
  createMainContainer("", "main-container");

  createChildren("Contact:", ".main-container", ".contact");
};

export default renderContact;
