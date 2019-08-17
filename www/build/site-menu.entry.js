import { r as registerInstance, h } from './core-d92b5eae.js';
import './index-df72ec0c.js';
import { S as SiteProviderConsumer } from './site-provider-consumer-71efd96e.js';

const SiteMenu = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.siteStructureList = [];
        this.toggleParent = (parentItem) => {
            return (e) => {
                e.preventDefault();
                this.selectedParent = parentItem;
            };
        };
    }
    render() {
        return (h("div", { class: "sticky" }, h(SiteProviderConsumer.Consumer, null, ({ toggleLeftSidebar }) => (h("div", null, h("ul", { class: 'menu-list' }, this.siteStructureList.map((item) => (h("li", null, h("a", { href: item.children[0].url || '#', onClick: this.toggleParent(item) }, h("span", { class: "section-label" }, item.text)), h("ul", { class: { 'collapsed': item !== this.selectedParent } }, item.children.map((childItem) => (h("li", null, (childItem.url) ?
            h("stencil-route-link", { url: childItem.url, onClick: toggleLeftSidebar }, childItem.text) :
            h("a", { rel: "noopener", class: "link--external", target: "_blank", href: childItem.filePath }, childItem.text))))))))))))));
    }
    static get style() { return "site-menu {\n  display: block;\n  -ms-flex: 0 0 auto;\n  flex: 0 0 auto;\n}\n\nsite-menu .section-label {\n  color: var(--color-woodsmoke);\n  margin-bottom: 0;\n  font-size: 14px;\n  font-weight: 600;\n}\n\nsite-menu .menu-list li,\nsite-menu .menu-list ul li {\n  list-style-type: none;\n  margin: 0;\n  padding: 0;\n}\n\nsite-menu .menu-list {\n  margin-top: 0;\n  padding: 0;\n}\n\nsite-menu .menu-list .section-label:first-of-type {\n  margin-top: 0;\n}\n\nsite-menu .menu-list ul {\n  padding: 0;\n}\n\nsite-menu .menu-list li {\n  font-size: 14px;\n}\n\nsite-menu .menu-list > li + li {\n  margin-top: 10px;\n}\n\nsite-menu .menu-list a {\n  font-weight: 400;\n  color: #6c6c8b;\n  text-decoration: none;\n  border: 0;\n}\n\nsite-menu .menu-list a:not(.link-active) {\n  -webkit-transition: color 0.2s;\n  transition: color 0.2s;\n}\n\nsite-menu .menu-list a:hover {\n  border: 0;\n}\n\nsite-menu .menu-list .link-active {\n  font-weight: bold;\n  color: var(--color-dodger-blue);\n}\n\nsite-menu .menu-list a:hover:not(.link-active) {\n  color: var(--color-woodsmoke);\n}\n\nsite-menu .menu-list ul li {\n  padding-left: 12px;\n  -webkit-transition: 80ms height;\n  transition: 80ms height;\n  height: 26px;\n  display: block;\n  overflow: hidden;\n}\n\nsite-menu .menu-list ul.collapsed li {\n  height: 0;\n}\n\n\@media screen and (max-width: 768px) {\n  site-menu {\n    position: fixed;\n    top: 0;\n    left: 0;\n    background: var(--color-woodsmoke);\n    z-index: 999;\n    padding: 20px;\n    width: calc(100vw - 56px);\n    -webkit-transform: translateX(calc(-100vw + 56px));\n    transform: translateX(calc(-100vw + 56px));\n    height: 100%;\n    overflow-y: scroll;\n  }\n  site-menu .menu-list .section-label {\n    color: white;\n  }\n  site-menu .menu-list a {\n    color: rgba(255, 255, 255, 0.6);\n  }\n  site-menu .menu-list a:hover:not(.link-active) {\n    color: white;\n  }\n}"; }
};

export { SiteMenu as site_menu };
