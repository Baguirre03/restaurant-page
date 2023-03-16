import {
  createMainContainer,
  createChildren,
  createInput,
  createForm,
  createLabel,
} from "./basicFunctions";

//syntax: (Text, parentClass, className)
//input: (id, parentClass, LabelText)
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

  createInput("first-name", ".form", "First Name: ", "first-name-holder");

  createInput("last-name", ".form", "Last Name: ", "last-name-holder");

  createInput("email", ".form", "Email: ", "email-holder");

  createInput("message", ".form", "Message: ", "message-holder");
};

export default renderContact;
