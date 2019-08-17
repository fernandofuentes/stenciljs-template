import { r as registerInstance, h } from './core-d92b5eae.js';

const ContributorList = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
    }
    render() {
        const contributors = this.contributors;
        if (!contributors || contributors.length === 0) {
            return null;
        }
        return (h("section", null, h("h5", null, "Contributors"), h("div", null, h("ul", null, contributors.map(contributor => (h("li", null, h("a", { href: `https://github.com/${contributor}`, target: "_blank" }, h("span", { class: "img-wrapper" }, h("img", { src: `https://github.com/${contributor}.png?size=90`, loading: "lazy", title: `Contributor ${contributor}`, importance: "low" }))))))))));
    }
    static get style() { return "contributor-list {\n  display: block;\n  margin-top: 60px;\n}\n\ncontributor-list h5 {\n  margin: 10px 0;\n}\n\n\ncontributor-list ul {\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-direction: row-reverse;\n  flex-direction: row-reverse;\n  -ms-flex-pack: end;\n  justify-content: flex-end;\n  list-style: none;\n  margin: 0;\n  padding: 0;\n}\n\ncontributor-list ul li:not(:last-child){\n  margin-left: -10px;\n}\n\ncontributor-list ul li:hover {\n  z-index: 5;\n}\n\ncontributor-list a {\n  -webkit-transition: -webkit-transform 50ms ease-out;\n  transition: -webkit-transform 50ms ease-out;\n  transition: transform 50ms ease-out;\n  transition: transform 50ms ease-out, -webkit-transform 50ms ease-out;\n  display: inline-block;\n  text-align: center;\n  text-decoration: none;\n  color: var(--color-dodger-blue);\n  font-size: 11px;\n  border: 0;\n}\n\ncontributor-list a:hover {\n  border: 0;\n  -webkit-transform: scale(1.125);\n  transform: scale(1.125);\n  z-index: 1;\n}\n\ncontributor-list .img-wrapper {\n  border-radius: 100%;\n  display: inline-block;\n  overflow: hidden;\n}\n\ncontributor-list img {\n  border: solid 2px var(--background);\n  border-radius: 50%;\n  height: 32px;\n  width: 32px;\n  border: 2px solid #FFF;\n}"; }
};

export { ContributorList as contributor_list };
