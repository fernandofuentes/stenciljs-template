import { r as registerInstance, h, c as getElement } from './core-d92b5eae.js';
import './index-df72ec0c.js';
import { S as SiteProviderConsumer } from './site-provider-consumer-71efd96e.js';

const AppRoot = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.elements = [
            'site-header',
            'site-menu',
            'app-burger',
            'main'
        ];
        this.isLeftSidebarIn = false;
        this.setHistory = ({ history }) => {
            if (!this.history) {
                this.history = history;
                this.history.listen((location) => {
                    // Google Analytics
                    window.gtag('config', 'UA-44023830-34', { 'page_path': location.pathname + location.search });
                    // Hubspot
                    window._hsq.push(['setPath', location.pathname + location.search]);
                    window._hsq.push(['trackPageView']);
                });
            }
        };
        this.toggleLeftSidebar = () => {
            if (window.innerWidth >= 768) {
                return;
            }
            const elements = this.elements
                .map(el => this.el.querySelector(el))
                .filter(el => !!el);
            if (this.isLeftSidebarIn) {
                this.isLeftSidebarIn = false;
                document.body.classList.remove('no-scroll');
                elements.forEach(el => {
                    el.classList.remove('left-sidebar-in');
                    el.classList.add('left-sidebar-out');
                });
            }
            else {
                this.isLeftSidebarIn = true;
                document.body.classList.add('no-scroll');
                elements.forEach(el => {
                    el.classList.add('left-sidebar-in');
                    el.classList.remove('left-sidebar-out');
                });
            }
        };
    }
    handleResize() {
        requestAnimationFrame(() => {
            if (window.innerWidth > 768 && this.isLeftSidebarIn) {
                this.isLeftSidebarIn = false;
                document.body.classList.remove('no-scroll');
                this.elements.forEach((el) => {
                    this.el.querySelector(el).classList.remove('left-sidebar-in');
                });
            }
        });
    }
    componentDidLoad() {
        this.isLeftSidebarIn = false;
    }
    render() {
        const siteState = {
            isLeftSidebarIn: this.isLeftSidebarIn,
            toggleLeftSidebar: this.toggleLeftSidebar
        };
        return (h(SiteProviderConsumer.Provider, { state: siteState }, h("site-header", null), h("main", null, h("stencil-router", { scrollTopOffset: 0 }, h("stencil-route", { style: { display: 'none' }, routeRender: this.setHistory }), h("stencil-route-switch", null, h("stencil-route", { url: "/", component: "landing-page", exact: true }), h("stencil-route", { url: "/docs/:pageName", routeRender: ({ match }) => (h("doc-component", { page: match.url })) }), h("stencil-route", { url: "/blog", component: "blog-list", exact: true }), h("stencil-route", { url: "/blog/:pageName", routeRender: ({ match }) => (h("blog-component", { page: match.url })) }), h("stencil-route", { url: "/pwa", component: "pwas-page" }), h("stencil-route", { url: "/resources", component: "resources-page" }), h("stencil-route", { url: "/design-systems", component: "ds-page" }), h("stencil-route", { component: 'notfound-page' }))), h("footer", null, h("div", { class: "container" }, h("div", { class: "footer-col" }, h("app-icon", { name: "logo" }), h("p", null, "\u00A9 2019 StencilJS.  Released under MIT License"), h("ul", { class: "external-links list--unstyled" }, h("li", null, h("a", { rel: "noopener", class: "link--external", target: "_blank", href: "https://twitter.com/stenciljs" }, h("app-icon", { name: "twitter" }))), h("li", null, h("a", { rel: "noopener", class: "link--external", target: "_blank", href: "https://stencil-worldwide.herokuapp.com" }, h("app-icon", { name: "slack" }))), h("li", null, h("a", { rel: "noopener", class: "link--external", target: "_blank", href: "https://github.com/ionic-team/stencil" }, h("app-icon", { name: "github" }))))))))));
    }
    get el() { return getElement(this); }
    static get style() { return "stencil-site {\n  min-height: 100%;\n  display: block;\n}\n\n.left-sidebar-in {\n  -webkit-animation-name: slideIn;\n  animation-name: slideIn;\n  -webkit-animation-duration: 0.7s;\n  animation-duration: 0.7s;\n  -webkit-animation-timing-function: var(--ease-out-expo);\n  animation-timing-function: var(--ease-out-expo);\n  -webkit-animation-fill-mode: forwards;\n  animation-fill-mode: forwards;\n}\n\n\@-webkit-keyframes slideIn {\n  from {\n    left: 0;\n  }\n  to {\n    left: calc(100vw - 56px);\n  }\n}\n\n\@keyframes slideIn {\n  from {\n    left: 0;\n  }\n  to {\n    left: calc(100vw - 56px);\n  }\n}\n\n.left-sidebar-out {\n  -webkit-animation-name: slideOut;\n  animation-name: slideOut;\n  -webkit-animation-duration: 0.7s;\n  animation-duration: 0.7s;\n  -webkit-animation-timing-function: var(--ease-out-expo);\n  animation-timing-function: var(--ease-out-expo);\n  -webkit-animation-fill-mode: forwards;\n  animation-fill-mode: forwards;\n}\n\n\@-webkit-keyframes slideOut {\n  from {\n    left: calc(100vw - 56px);\n  }\n  to {\n    left: 0;\n  }\n}\n\n\@keyframes slideOut {\n  from {\n    left: calc(100vw - 56px);\n  }\n  to {\n    left: 0;\n  }\n}\n\n.container {\n  width: 100%;\n  max-width: 1200px;\n  margin-left: auto;\n  margin-right: auto;\n  padding: 0 64px;\n  -ms-flex: 1 0 auto;\n  flex: 1 0 auto;\n}\n\nmain {\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-direction: column;\n  flex-direction: column;\n  min-height: calc(100vh - 64px);\n  padding-top: 80px;\n}\n\nstencil-router {\n  -ms-flex: 1;\n  flex: 1;\n}\n\n\@media screen and (max-width: 768px) {\n  .container {\n    padding: 0 16px;\n  }\n\n  main {\n    padding-top: 92px;\n    min-height: 100vh;\n  }\n}\n\nfooter {\n  width: 100%;\n  background: var(--color-white-lilac);\n  -ms-flex: 0 0 auto;\n  flex: 0 0 auto;\n  padding: 40px 0;\n  display: -ms-flexbox;\n  display: flex;\n}\n\nfooter .container {\n  display: -ms-flexbox;\n  display: flex;\n}\nfooter .footer-col {\n  -ms-flex: 1;\n  flex: 1;\n}\n\nfooter .footer-col {\n  text-align: center;\n}\n\nfooter p {\n  font-size: 12px;\n  line-height: 170%;\n  letter-spacing: -0.02em;\n  color: #767882;\n  margin: 8px 0 16px;\n}\n\nfooter app-icon .icon-logo {\n  width: 76px;\n  height: 16px;\n  opacity: 0.6;\n  margin-top: 2px;\n}\n\nfooter .external-links {\n  display: -ms-inline-flexbox;\n  display: inline-flex;\n}\n\nfooter .external-links li a {\n  -webkit-transition: opacity 0.2s;\n  transition: opacity 0.2s;\n  text-decoration: none;\n  opacity: 0.25;\n}\n\nfooter .external-links li a:hover {\n  border: none;\n  opacity: 0.5;\n}\n\nfooter .external-links li + li {\n  margin-left:  12px;\n}"; }
};

export { AppRoot as app_root };
