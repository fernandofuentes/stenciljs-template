import { r as registerInstance, h, c as getElement } from './core-d92b5eae.js';
import './index-df72ec0c.js';
import { S as SiteProviderConsumer } from './site-provider-consumer-71efd96e.js';

const AppBurger = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.toggleLeftSidebar = () => { };
    }
    render() {
        return (h("div", { class: "burger", onClick: this.toggleLeftSidebar }, h("app-icon", { name: "menu" }), h("app-icon", { name: "close" })));
    }
    get el() { return getElement(this); }
    static get style() { return "app-burger {\n  display: none;\n  position: fixed;\n  top: 0px;\n  left: 0px;\n  z-index: 999;\n}\n\napp-burger > div {\n  padding: 18px;\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-align: start;\n  align-items: flex-start;\n  -ms-flex-pack: center;\n  justify-content: center;\n}\n\napp-burger > div:hover app-icon {\n  opacity: 1;\n}\n\napp-burger .icon-menu {\n  display: block;\n}\n\napp-burger .icon-close {\n  display: none;\n}\n\napp-burger app-icon {\n  -webkit-transition: opacity 0.3s;\n  transition: opacity 0.3s;\n  opacity: 0.7;\n  cursor: pointer;\n}\n\napp-burger.left-sidebar-in > div {\n  height: 100vh;\n  padding-right: 50px;\n}\n\napp-burger.left-sidebar-in .icon-menu {\n  display: none;\n}\n\napp-burger.left-sidebar-in .icon-close {\n  display: block;\n}\n\n\@media screen and (max-width: 768px) {\n  app-burger {\n    display: block;\n  }\n}"; }
};
SiteProviderConsumer.injectProps(AppBurger, ['toggleLeftSidebar']);

export { AppBurger as app_burger };
