import { Component } from "can";

export default Component.extend({
    tag: "custom-app2",
    view: `<div>APP2 - {{currentDate}}</div>`,
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