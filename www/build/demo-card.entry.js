import { r as registerInstance, h } from './core-d92b5eae.js';

const DemoCard = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
    }
    render() {
        return (h("div", null, h("div", { class: "demo-card__image" }, h("a", { target: "_blank", rel: "noopener", href: this.demoUrl }, h("img", { src: `${this.imgPath}.jpg`, srcSet: `${this.imgPath}.jpg 1x, ${this.imgPath}@2x.jpg 2x`, loading: "lazy" }))), h("h3", null, this.name), h("p", null, this.description), h("p", null, h("a", { target: "_blank", rel: "noopener", href: this.demoUrl, class: "text-link text-link--primary" }, "Demo"), "\u00A0\u00A0", h("a", { target: "_blank", rel: "noopener", href: this.sourceUrl, class: "text-link text-link--secondary" }, "Source"))));
    }
    static get style() { return ".demo-card-list {\n  display: grid;\n  grid-template-columns: repeat(3, 1fr);\n  grid-gap: 46px;\n  margin-bottom: 100px;\n}\n\n\@media screen and (max-width: 768px) {\n  .demo-card-list {\n    grid-template-columns: repeat(2, 1fr);\n    grid-gap: 36px;\n  }\n}\n\n\@media screen and (max-width: 480px) {\n  .demo-card-list {\n    grid-template-columns: repeat(1, 1fr);\n  }\n}\n\ndemo-card {\n  padding-bottom: 20px;\n}\n\ndemo-card h3 {\n  margin-bottom: 0;\n}\n\ndemo-card p {\n  margin-top: 8px;\n  margin-bottom: 0;\n  line-height: 1.5;\n}\n\n.demo-card__image {\n  border-radius: 15px;\n  overflow: hidden;\n  background: var(--color-white);\n  -webkit-box-shadow: var(--card-shadow);\n  box-shadow: var(--card-shadow);\n  border-radius: 13px;\n  -webkit-box-shadow: 0 2px 4px 0 rgba(0,0,0,0.09);\n  box-shadow: 0 2px 4px 0 rgba(0,0,0,0.09);\n}\n\n.demo-card__image img {\n  width: 100%;\n  vertical-align: bottom;\n}"; }
};

export { DemoCard as demo_card };
