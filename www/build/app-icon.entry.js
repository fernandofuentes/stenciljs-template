import { r as registerInstance, h } from './core-d92b5eae.js';

const AppIcon = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
    }
    render() {
        return (h("svg", { class: `icon icon-${this.name}`, width: "96", height: "23" }, h("use", { xlinkHref: `#icon-${this.name}` })));
    }
    static get style() { return "app-icon .icon-logo  {\n  width: 96px;\n  height: 23px;\n}\n\napp-icon .icon-checkmark {\n  fill: var(--color-dodger-blue);\n  width: 15px;\n  height: 11px;\n}\n\napp-icon .icon-targetblank {\n  fill: var(--color-cadet-blue);\n  width: 9px;\n  height: 9px;\n}\n\napp-icon .icon-github {\n  fill: var(--color-woodsmoke);\n  width: 17px;\n  height: 16px;\n}\n\napp-icon .icon-slack {\n  fill: var(--color-woodsmoke);\n  width: 16px;\n  height: 16px;\n}\n\napp-icon .icon-twitter {\n  fill: var(--color-woodsmoke);\n  width: 19px;\n  height: 14px;\n}\n\napp-icon .icon-menu {\n  fill: var(--color-dodger-blue);\n  width: 17px;\n  height: 15px;\n}\n\napp-icon .icon-close {\n  fill: var(--color-dodger-blue);\n  width: 14px;\n  height: 14px;\n}\n\napp-icon .icon-more {\n  fill: var(--color-dodger-blue);\n  width: 4px;\n  height: 18px;\n}\n\napp-icon .icon-docs {\n  fill: var(--color-dodger-blue);\n  width: 13px;\n  height: 11px;\n}\n\napp-icon .icon-link {\n  fill: var(--color-woodsmoke);\n  height: 12px;\n  width: 12px;\n}\n\napp-icon .icon-circle {\n  fill: var(--color-woodsmoke);\n  height: 12px;\n  width: 12px;\n}\n\napp-icon .icon-arrow-right {\n  height: 10px;\n  width: 7px;\n}\n\napp-icon .icon-arrow-down {\n  height: 16px;\n  width: 16px;\n}\n\napp-icon .icon-play {\n  height: 61px;\n  width: 61px;\n}"; }
};

export { AppIcon as app_icon };
