import {
  createMainContainer,
  createChildren,
  createInput,
  createForm,
  createLabel,
  createImg,
} from "./basicFunctions";

//syntax: (Text, parentClass, className)
//input: (id, parentClass, LabelText)
//Image: (imageSource, parentClass, className))
const renderContact = () => {
  createMainContainer("", "main-container");
  const backgroundContainer = document.querySelector(".main-container");
  backgroundContainer.classList.add("contact-container");

  createChildren("", ".main-container", "contact-holder");
  // createImg("/src/imgs/jason-leem.jpg", ".main-container", "side-image");
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
