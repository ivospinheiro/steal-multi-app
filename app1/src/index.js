import App from "./app1-component";
import { stache } from "can";
import "./index.less";

export default function loadApp() {
    const template = new stache(`<custom-app1></custom-app1>`);

    document.body.appendChild(template());
};

loadApp();