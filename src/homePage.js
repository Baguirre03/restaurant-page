import { createMainContainer, createChildren, createButton } from "./basicFunctions";

//For functions (text, parentClass, className)
const renderHomePage = () => {
    createMainContainer('', 'body', 'main-container');

    //header
    createChildren('', '.main-container', 'header')
    createChildren('Coffee shop', '.header')

    createChildren('', '.header', 'button-holder')

    createButton('button1', '.button-holder', 'buttons')
    createButton('button2', '.button-holder', 'buttons')
    createButton('button3', '.button-holder', 'buttons')
}

export {renderHomePage}