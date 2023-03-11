import { createHeader } from "./header";
import { createChildren, createMainContainer } from "./basicFunctions";

const renderHomePage = () => {
    createHeader();
    createMainContainer('', 'second-container');

    createChildren('title', '.second-container', 'title')
}


export {renderHomePage}