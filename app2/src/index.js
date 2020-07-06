import App from "./app2-component";
import { stache } from "can";
import "./index.less";

const template = new stache(`<custom-app2></custom-app2>`);

document.body.appendChild(template());