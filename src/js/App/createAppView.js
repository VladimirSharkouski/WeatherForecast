import createHeader from "./createHeader.js";
import createSidebar from "./createSidebar.js";
import createMainBlock from "./createMain.js";

let createApp = () => {
    createHeader();
    createSidebar();
    createMainBlock();
};
export default createApp;