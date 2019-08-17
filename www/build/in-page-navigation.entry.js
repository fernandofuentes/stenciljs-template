import { r as registerInstance, h } from './core-d92b5eae.js';

const InPageNavigtion = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.pageLinks = [];
        this.srcUrl = '';
        this.currentPageUrl = '';
        this.itemOffsets = [];
    }
    function() {
        const itemIndex = this.itemOffsets.findIndex(item => item.topOffset > window.scrollY);
        if (itemIndex === 0) {
            this.selectedId = undefined;
        }
        else if (itemIndex === -1) {
            this.selectedId = this.itemOffsets[this.itemOffsets.length - 1].id;
        }
        else {
            this.selectedId = this.itemOffsets[itemIndex - 1].id;
        }
    }
    updateItemOffsets() {
        requestAnimationFrame(() => {
            this.itemOffsets = this.pageLinks.map((pl) => {
                const item = document.getElementById(pl.id);
                return {
                    id: pl.id,
                    topOffset: item.getBoundingClientRect().top + window.scrollY
                };
            });
        });
    }
    componentDidLoad() {
        this.updateItemOffsets();
    }
    cleanHeader(str) {
        // The Markdown headers can contain HTML escaped characters such as "&#39;" (')
        // or especially on the Host Element page "&lt;"/"&gt;"
        // This is a hack to evaluate those as DOM elements and extract the text out.
        const headerEl = document.createElement('span');
        headerEl.innerHTML = str;
        return headerEl.innerText;
    }
    render() {
        const pageLinks = this.pageLinks.filter(pl => pl.level !== 1);
        const submitEditLink = (h("a", { class: "submit-edit-link", href: `https://github.com/ionic-team/stencil-site/edit/master/${this.srcUrl}` }, h("app-icon", { name: "github" }), h("span", null, "Submit an edit")));
        if (pageLinks.length === 0) {
            return (h("div", null, submitEditLink));
        }
        return (h("div", null, h("h5", null, "Contents"), h("ul", { class: "heading-links" }, pageLinks.map(pl => (h("li", { class: {
                'heading-link': true,
                [`size-h${pl.level}`]: true,
                'selected': this.selectedId === pl.id
            } }, h("stencil-route-link", { url: `${this.currentPageUrl}#${pl.id}` }, this.cleanHeader(pl.text)))))), submitEditLink));
    }
    static get watchers() { return {
        "pageLinks": ["updateItemOffsets"]
    }; }
    static get style() { return "in-page-navigation {\n  -ms-flex: 0 0 180px;\n  flex: 0 0 180px;\n  height: 100%;\n  position: -webkit-sticky;\n  position: sticky;\n  top: 24px;\n}\n\nin-page-navigation h5 {\n  text-transform: uppercase;\n  font-size: 10px;\n  margin-top: 0;\n  margin-bottom: 10px;\n  font-weight: 400;\n  color: #6c6c8b;\n  padding-left: 2px;\n}\n\nin-page-navigation .heading-links {\n  list-style: none;\n  line-height: 1;\n  padding: 0;\n  margin: 0;\n  --indent-size: 12px;\n  margin-left: calc(var(--indent-size) * -2);\n}\n\nin-page-navigation .heading-links li {\n  width: 188px;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n\nin-page-navigation .heading-links li + li {\n  margin-top: 8px;\n}\n\nin-page-navigation .heading-links a {\n  font-weight: 400;\n  color: var(--color-gunpowder);\n  font-size: 13px;\n  line-height: 18px;\n  font-weight: 500;\n  border: none;\n}\n\nin-page-navigation .heading-links a:hover {\n  color: var(--color-woodsmoke);\n}\n\nin-page-navigation .heading-links a:hover {\n  border: none;\n}\n\nin-page-navigation li.heading-link {\n  padding-left: 12px;\n  margin-left: 0;\n  border-left: 2px solid transparent;\n}\n\nin-page-navigation li.heading-link.selected {\n  border-left: 2px solid var(--color-dodger-blue);\n}\n\nin-page-navigation li.heading-link.selected a {\n  color: var(--color-dodger-blue);\n  font-weight: 600;\n}\n\nin-page-navigation li.size-h2 {\n  -webkit-transform: translateX(calc(var(--indent-size) * 1));\n  transform: translateX(calc(var(--indent-size) * 1));\n  font-weight: 600;\n}\nin-page-navigation li.size-h3 {\n  -webkit-transform: translateX(calc(var(--indent-size) * 2));\n  transform: translateX(calc(var(--indent-size) * 2));\n}\n\nin-page-navigation li.size-h4 {\n  -webkit-transform: translateX(calc(var(--indent-size) * 3));\n  transform: translateX(calc(var(--indent-size) * 3));\n}\n\nin-page-navigation li.size-h3 a,\nin-page-navigation li.size-h4 a {\n  font-weight: 400;\n  color: #6c6c8b;\n}\n\nin-page-navigation li.size-h3 a:hover,\nin-page-navigation li.size-h4 a:hover {\n  color: var(--color-gunpowder);\n}\n\nin-page-navigation .submit-edit-link {\n  font-size: 12px;\n  display: inline-block;\n  color: var(--color-dodger-blue);\n  font-weight: 600;\n  text-decoration: none;\n  display: -ms-flexbox;\n  display: flex;\n}\n\nin-page-navigation .submit-edit-link svg {\n  fill: var(--color-dodger-blue);\n}\n\nin-page-navigation .submit-edit-link span {\n  -webkit-transition: border 0.2s;\n  transition: border 0.2s;\n  height: 16px;\n  margin-left: 6px;\n  border-bottom: 1px solid transparent;\n}\n\nin-page-navigation .submit-edit-link span:hover {\n  border-bottom: 1px solid var(--color-cadet-blue);\n}\n\nin-page-navigation .heading-links + .submit-edit-link {\n  margin-top: 28px;\n}\n\n\n\@media screen and (max-width: 1024px) {\n  in-page-navigation {\n    display: none;\n  }\n}"; }
};

export { InPageNavigtion as in_page_navigation };
