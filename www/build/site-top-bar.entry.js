import { r as registerInstance, h } from './core-d92b5eae.js';

const SiteTopBar = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
    }
    render() {
        return (h("a", { href: "https://blog.ionicframework.com/build-your-next-design-system-with-web-components/", target: "_blank", rel: "noopener" }, "On the blog: ", h("u", null, "Build your next Design System with Web Components")));
    }
    static get style() { return "site-top-bar {\n  display: block;\n  background-color: #111;\n  color: white;\n  font-size: 14px;\n  font-weight: bold;\n  padding: 10px;\n  width: 100%;\n  text-align: center;\n}\n\nsite-top-bar a {\n  text-decoration: none;\n  color: white;\n}\n\nsite-top-bar a.btn {\n  margin-left: 15px;\n  padding: 8px;\n  border-radius: 16px;\n  background-color: white;\n  color: black;\n  font-weight: bold;\n  font-size: 13px;\n  text-decoration: none;\n}"; }
};

export { SiteTopBar as site_top_bar };
