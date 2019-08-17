import { r as registerInstance, B as Build, h } from './core-d92b5eae.js';
import { f as fileNotFound } from './site-structure-utils-436ba0ca.js';

const NotFoundPage = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
    }
    render() {
        if (!Build.isBrowser) {
            fileNotFound();
            return null;
        }
        return (h("div", null, h("h1", null, "Uh oh! We can't find the page you're looking for."), h("p", null, h("stencil-route-link", { url: '/', class: 'block' }, "Back to the home page"))));
    }
    static get style() { return "notfound-page {\n  text-align: center;\n}"; }
};

export { NotFoundPage as notfound_page };
