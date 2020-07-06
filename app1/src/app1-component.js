import { Component } from "can";

export default Component.extend({
    tag: "custom-app1",
    view: `<div>APP1 - {{currentDate}}</div>`,
    ViewModel: {
        currentDate: {
            Type: Date,
            Default: Date
        },
        connectedCallback() {
            setInterval(() => this.currentDate = new Date(), 1000);
        }
    }
});