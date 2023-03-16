import {
  createMainContainer,
  createChildren,
  createInput,
  createForm,
  createLabel,
} from "./basicFunctions";

//syntax: (Text, parentClass, className)
//input: (id, parentClass)
//Label: (text, id, parentClass, forName)
const renderContact = () => {
  createMainContainer("", "main-container");

  createChildren("", ".main-container", "contact-holder");
  createChildren("Contact Ben's Coffee!", ".contact-holder", "contact-header");
  createChildren(
    "Lets get this conversation started. Tell us a bit about  yourself and we`ll get in touch as soon as we can.",
    ".contact-holder",
    "contact-text"
  );

  createForm("", ".contact-holder", "form");

  createLabel("First Name: ", "first", ".form", "first-name");
  createInput("first-name", ".form");

  createLabel("Last Name: : ", "last", ".form", "last-name");
  createInput("last-name", ".form");

  createLabel("Email: ", "email", ".form", "email");
  createInput("email", ".form");

  createLabel("Message: ", "message", ".form", "message");
  createInput("message", ".form");
};

export default renderContact;
