import { r as registerInstance, h } from './core-d92b5eae.js';

const LowerContentNav = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
    }
    render() {
        return [
            (this.prev != null ?
                h("stencil-route-link", { url: this.prev.url, anchorClass: "pull-left btn btn--secondary" }, "Back") :
                null),
            (this.next != null ?
                h("stencil-route-link", { url: this.next.url, anchorClass: "pull-right btn btn--primary" }, "Next") :
                null)
        ];
    }
    static get style() { return "lower-content-nav {\n    display: -ms-flexbox;\n    display: flex;\n    -ms-flex-pack: justify;\n    justify-content: space-between;\n}\n\nlower-content-nav > stencil-route-link {\n    display: inline-block;\n}"; }
};

export { LowerContentNav as lower_content_nav };
