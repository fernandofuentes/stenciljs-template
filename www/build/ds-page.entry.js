import { r as registerInstance, B as Build, h, c as getElement } from './core-d92b5eae.js';

const DSPage = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.pageX = 0;
        this.pageY = 0;
        document.title = `Stencil DS - Stencil for Production Design Systems`;
    }
    componentDidUnload() {
        document.body.classList.remove('dark');
        cancelAnimationFrame(this.raf);
    }
    componentDidLoad() {
        document.body.classList.add('dark');
        let existingScript = document.querySelector('#hbs-script');
        if (existingScript) {
            existingScript.remove();
        }
        const script = document.createElement('script');
        script.src = '//js.hsforms.net/forms/v2.js';
        script.id = 'hbs-script';
        script.onload = () => {
            this.injectForm();
        };
        document.body.appendChild(script);
        this.startRendering();
    }
    startRendering() {
        const glshader = this.glShader;
        if (Build.isBrowser && glshader) {
            let last = 0;
            const offset = Math.random() * 10000.0;
            const timeStep = (time) => {
                if (time > last) {
                    const width = glshader.offsetWidth;
                    const height = glshader.offsetHeight;
                    const x = this.pageX - glshader.offsetLeft;
                    const y = height - this.pageY;
                    glshader.uniforms = {
                        '1f:iTime': (time + offset) / 16000,
                        '2fv:iResolution': [width, height],
                        '2fv:iMouse': [x, y]
                    };
                    last = time + 32;
                }
                this.raf = requestAnimationFrame(timeStep);
            };
            this.raf = requestAnimationFrame(timeStep);
        }
    }
    onMouseMove(ev) {
        this.pageX = ev.pageX;
        this.pageY = ev.pageY;
    }
    injectForm() {
        hbspt.forms.create({
            portalId: "3776657",
            formId: 'fe81d3de-e3ee-43c7-8636-e664bf53bc91',
            css: "",
            target: '#ds-form-target'
        });
    }
    handleCtaClick(ev, id) {
        if (document.documentElement.scrollIntoView) {
            ev.preventDefault();
            const el = document.getElementById(id);
            if (el) {
                scrollTo(el);
            }
        }
    }
    render() {
        return [
            h("section", { class: "hero" }, h("pro-glshader", { class: "shader", frag: FLAG, ref: el => this.glShader = el }), h("div", { class: "container" }, h("div", { class: "measure-lg" }, h("hgroup", null, h("svg", { class: "ds-logo", width: "208", height: "208", fill: "none", xmlns: "http://www.w3.org/2000/svg" }, h("circle", { cx: "104", cy: "104", r: "48", fill: "#001AFF", opacity: ".3", filter: "url(#filter0_f)" }), h("path", { d: "M155.84 122c11.62 0 17.95-7.15 17.95-17.04 0-9.89-6.33-17.04-17.95-17.04H143.6V122h12.24zm10.56-17.04c0 6.38-3.31 10.6-10.75 10.6h-5.04v-21.2h5.04c7.44 0 10.75 4.22 10.75 10.6z", fill: "url(#paint0_linear)" }), h("path", { d: "M189.59 116.43c-4.42 0-6.43-2.45-6.63-5.23h-6.9c.19 5.62 3.69 11.47 13.15 11.47 8.1 0 13.48-4.32 13.48-10.41 0-13.54-18.43-8.16-18.43-14.98 0-2.2 2.11-3.84 5.43-3.84 3.64 0 5.75 2.16 5.9 5.14h6.86c-.19-6.15-4.7-11.38-12.67-11.38-7.87 0-12.43 4.75-12.43 10.51 0 13.35 18.24 8.07 18.24 14.79 0 2.5-2.26 3.93-6 3.93z", fill: "url(#paint1_linear)" }), h("g", { filter: "url(#filter1_dddi)", fill: "#fff" }, h("path", { d: "M95.6 113.76h24.67L106.93 128H82.4l13.2-14.24z" }), h("path", { opacity: ".3", d: "M95.6 113.76h24.67L89 120.88l6.6-7.12z" }), h("path", { d: "M136 96.88H85.33L72 111.12h50.67L136 96.88zM101.03 80h24.57l-13.27 14.24h-24.6L101.03 80z" })), h("defs", null, h("filter", { id: "filter0_f", x: "0", y: "0", width: "208", height: "208", filterUnits: "userSpaceOnUse", "color-interpolation-filters": "sRGB" }, h("feFlood", { "flood-opacity": "0", result: "BackgroundImageFix" }), h("feBlend", { in: "SourceGraphic", in2: "BackgroundImageFix", result: "shape" }), h("feGaussianBlur", { stdDeviation: "28", result: "effect1_foregroundBlur" })), h("filter", { id: "filter1_dddi", x: "32", y: "40", width: "144", height: "128", filterUnits: "userSpaceOnUse", "color-interpolation-filters": "sRGB" }, h("feFlood", { "flood-opacity": "0", result: "BackgroundImageFix" }), h("feColorMatrix", { in: "SourceAlpha", values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" }), h("feOffset", null), h("feGaussianBlur", { stdDeviation: "4" }), h("feColorMatrix", { values: "0 0 0 0 0.439216 0 0 0 0 0.498039 0 0 0 0 1 0 0 0 0.75 0" }), h("feBlend", { in2: "BackgroundImageFix", result: "effect1_dropShadow" }), h("feColorMatrix", { in: "SourceAlpha", values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" }), h("feOffset", null), h("feGaussianBlur", { stdDeviation: "20" }), h("feColorMatrix", { values: "0 0 0 0 0.529412 0 0 0 0 0.564706 0 0 0 0 1 0 0 0 1 0" }), h("feBlend", { in2: "effect1_dropShadow", result: "effect2_dropShadow" }), h("feColorMatrix", { in: "SourceAlpha", values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" }), h("feOffset", null), h("feGaussianBlur", { stdDeviation: "8" }), h("feColorMatrix", { values: "0 0 0 0 0.14902 0 0 0 0 0.215686 0 0 0 0 1 0 0 0 1 0" }), h("feBlend", { in2: "effect2_dropShadow", result: "effect3_dropShadow" }), h("feBlend", { in: "SourceGraphic", in2: "effect3_dropShadow", result: "shape" }), h("feColorMatrix", { in: "SourceAlpha", values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0", result: "hardAlpha" }), h("feOffset", null), h("feGaussianBlur", { stdDeviation: "3" }), h("feComposite", { in2: "hardAlpha", operator: "arithmetic", k2: "-1", k3: "1" }), h("feColorMatrix", { values: "0 0 0 0 0.752941 0 0 0 0 0.988235 0 0 0 0 1 0 0 0 1 0" }), h("feBlend", { in2: "shape", result: "effect4_innerShadow" })), h("linearGradient", { id: "paint0_linear", x1: "144", y1: "105", x2: "203", y2: "105", gradientUnits: "userSpaceOnUse" }, h("stop", { "stop-color": "#F9F9FD" }), h("stop", { offset: "1", "stop-color": "#DAD9E9", "stop-opacity": ".9" })), h("linearGradient", { id: "paint1_linear", x1: "144", y1: "105", x2: "203", y2: "105", gradientUnits: "userSpaceOnUse" }, h("stop", { "stop-color": "#F9F9FD" }), h("stop", { offset: "1", "stop-color": "#DAD9E9", "stop-opacity": ".9" })))), h("h1", null, "Bring your  company\u2019s design system to life."), h("p", null, "Reduce design debt, connect disparate tech teams, and enforce brand consistency at scale with code-based, world-class design systems that work everywhere."), h("a", { href: "#learn-more", onClick: (ev) => this.handleCtaClick(ev, 'learn-more') }, "Learn more ", h("app-icon", { name: "arrow-down" })))))),
            h("section", { class: "content content--gradient-bg", id: "learn-more" }, h("div", { class: "container" }, h("hgroup", null, h("h2", null, "Production-ready Design Systems at Scale."), h("p", null, "Build shared components across teams using a diverse set of frontend frameworks and technologies, all while enforcing brand guidelines and exceeding accessibility standards.")), h("div", { class: "features" }, h("table", null, h("thead", null, h("tr", null, h("th", null, h("h3", null, "Stencil OSS"), h("p", null, "Always free & open source")), h("th", null, h("h3", null, "Stencil DS"), h("p", null, "Custom pricing")))), h("tbody", null, h("tr", null, h("td", null, h("div", { class: "icon-cell" }, h("app-icon", { name: "checkmark" }), " Web Component compiler")), h("td", null, h("div", { class: "icon-cell" }, h("app-icon", { name: "checkmark" }), " Web Component compiler"))), h("tr", null, h("td", null, h("div", { class: "icon-cell" }, h("app-icon", { name: "checkmark" }), " Lazy-loading for Components")), h("td", null, h("div", { class: "icon-cell" }, h("app-icon", { name: "checkmark" }), " Lazy-loading for Components"))), h("tr", null, h("td", null, h("div", { class: "icon-cell" }, h("app-icon", { name: "checkmark" }), " Intelligent polyfill loading")), h("td", null, h("div", { class: "icon-cell" }, h("app-icon", { name: "checkmark" }), " Intelligent polyfill loading"))), h("tr", null, h("td", null, h("div", { class: "icon-cell" }, h("app-icon", { name: "checkmark" }), " Community support")), h("td", null, h("div", { class: "icon-cell" }, h("app-icon", { name: "checkmark" }), " Premium Support SLA"))), h("tr", null, h("td", { class: "empty" }), h("td", null, h("div", { class: "icon-cell" }, h("app-icon", { name: "checkmark" }), " Generate bindings for Angular, React, and Vue"))), h("tr", null, h("td", { class: "empty" }), h("td", null, h("div", { class: "icon-cell" }, h("app-icon", { name: "checkmark" }), " Automated Documentation generation"))), h("tr", null, h("td", { class: "empty" }), h("td", null, h("div", { class: "icon-cell" }, h("app-icon", { name: "checkmark" }), " Visual Regression testing tools"))), h("tr", null, h("td", { class: "empty" }), h("td", null, h("div", { class: "icon-cell" }, h("app-icon", { name: "checkmark" }), " Accessibility verification tools"))), h("tr", null, h("td", { class: "empty" }), h("td", null, h("div", { class: "icon-cell" }, h("app-icon", { name: "checkmark" }), " Expert advisory on your Design System project"))), h("tr", null, h("td", { class: "empty" }), h("td", null, h("div", { class: "icon-cell" }, h("app-icon", { name: "checkmark" }), " Training opportunities")))), h("tbody", null, h("tr", null, h("td", null, h("stencil-route-link", { anchorClass: "btn btn--secondary", url: "/docs/getting-started" }, "Install Stencil")), h("td", null, h("a", { href: "#cta-form", class: "btn btn--primary", onClick: (ev) => this.handleCtaClick(ev, 'cta-form') }, "Get in touch")))))))),
            h("section", { class: "content" }, h("div", { class: "container" }, h("hgroup", null, h("h2", null, "FAQ for Stencil DS")), h("div", { class: "faq-grid" }, h("div", null, h("h4", null, "What parts of Stencil are free? What parts are commerically licensed?"), h("p", null, "Yes, the official Stencil project is 100% free and open source (MIT licensed), and always will be. We offer Stencil DS for teams undertaking large Design System initiatives which offers additional features and tools that are not free. This keeps the lights on and lets us keep making the Stencil you know and love better and better, all while helping teams be successful with their Design System initiatives.")), h("div", null, h("h4", null, "Why do Angular, React, and Vue need bindings?"), h("p", null, "Stencil builds standard Web Components that run in all modern browsers, with intelligent loading of any necessary polyfills for clients with missing APIs."), h("p", null, "However, certain frameworks, such as React, don't play as well with Web Components out of the box. Additionally, developers often prefer a framework's conventions for naming and usage that deviates from typical Web Component usage."), h("p", null, "To bring the best of both worlds, Stencil DS automatically generates up-to-date bindings for all major frameworks and smooths out any rough edges in their Web Component support. This also makes using Stencil-built components feel native to each framework.")), h("div", null, h("h4", null, "What is Automated Documentation Generation?"), h("p", null, "One of the greatest challenges for Design Systems is adoption. Developers will take the path of least resistance to get their work done, and that means the best documentation wins."), h("p", null, "To ensure your Design System achieves mass adoption, Stencil DS generates top-quality documentation automatically from your components, with rich metadata about properties and events gathered directly from your component code."), h("p", null, "Stencil DS generates live examples, code snippets, and an index of all your components in a beautiful but easily customizable fashion, to make it incredibly fast and easy for developers to find and use the components they need."), h("p", null, "The team behind Stencil DS's documentation generation built Ionic Framework's documentation, regarded by many as some of the best developer documentation for an open source project. We can bring that level of developer regard directly to your Design System's official documentation.")), h("div", null, h("h4", null, "How do you verify components meet Accessibility standards?"), h("p", null, "Building a Design System with Web Component APIs that exceeds accessibility standards is not straightforward. Stencil DS comes with a number of features and tools that help verify and enforce accessibility support for your components in a continuous way that can be easily integrated into your Continuous Integration workflow."), h("p", null, "This goes above and beyond existing Accessibility testing tools and ensures your Design System initiative meets and exceeds all legal requirements for Accessibility.")), h("div", null, h("h4", null, "How do I ensure components don't have visual UI regressions or issues in specific browsers?"), h("p", null, "One of the biggest challenges to building any sophisticated component kit or Design System is ensuring components don't have visual regressions due to changes in styles or issues with specific browsers."), h("p", null, "Unfortunately, traditional unit testing or snapshot testing is not sufficient to test visual style and layout changes. The Ionic team built out a set of powerful visual regression testing tools to ensure consistency between releases."), h("p", null, "Stencil DS brings these powerful visual regression tools to teams building Design Systems, and helps them integrate with your existing Continuous Integration workflow to provide UI verification on every single commit.")), h("div", null, h("h4", null, "What do I get with Premium Support?"), h("p", null, "While Stencil has an active community and is being actively maintained, there are cases where certain bugs or features are not a priority due to misalignment with our open source roadmap or time constraints."), h("p", null, "For teams deploying major Design System initiatives, relying on open source and community support is not sufficient. You'll need assurance that key issues or features are identified and communicated quickly, with potential fixes or workarounds made available in a timely fashion."), h("p", null, "With Stencil DS, Premium Support is provided and teams will have a dedicated account manager to communicate with if anything goes wrong.")), h("div", null, h("h4", null, "My team needs help making our initiative successful. Do you offer Advisory Services?"), h("p", null, "Yes! The Stencil team is the same team that build and deployed one of the most successful open source Design Systems ever: Ionic Framework. Today, Ionic is used by millions of developers for over five million applications."), h("p", null, "Not only that, but the team behind Stencil is a leader in modern Web APIs and Progressive Web Apps, and has unique expertise that is difficult to find anywhere else."), h("p", null, "We work with major enterprise companies and high growth startups undertaking major Design System initiatives that can't afford to fail, and we're ready to help your team, too!"))))),
            h("section", { class: "content content--border-top", id: "cta-form" }, h("div", { class: "container" }, h("hgroup", null, h("h2", null, "Want to learn more about Stencil DS?"), h("p", null, "Our team will reach out to see how we can help make your Design System initiative successful.")), h("div", { id: "ds-form-target", class: "hubspot-override" })))
        ];
    }
    get el() { return getElement(this); }
    static get style() { return "ds-page {\n  display: block;\n}\n\n\nds-page .container {\n  overflow: hidden;\n}\n\nds-page .hero {\n  position: relative;\n  padding-top: 24px;\n  padding-bottom: 240px;\n  color: #fff;\n}\n\nds-page .hero .ds-logo {\n  margin: -40px 0 -40px -64px;\n}\n\nds-page .hero hgroup {\n  text-align: center;\n  max-width: 540px;\n  margin-left: auto;\n  margin-right: auto;\n}\n\nds-page .shader {\n  background: #0A0A12;\n  position: absolute;\n  top: -150px;\n  left: 0;\n  bottom: 0;\n  height: auto;\n  z-index: -1;\n}\n\nds-page .hero h1 {\n  color: #fff;\n  font-size: 64px;\n  letter-spacing: -0.01em;\n  line-height: 1.1;\n  font-weight: 700;\n  margin-top: 0;\n  margin-bottom: 0;\n}\n\nds-page .hero p {\n  font-size: 24px;\n  line-height: 1.4;\n  letter-spacing: -0.01em;\n  color: #E1E1F2;\n  margin: 24px auto 30px;\n  max-width: 440px;\n}\n\nds-page .hero a {\n  -webkit-transition: color 0.2s;\n  transition: color 0.2s;\n  color: #8583FF;\n  text-decoration: none;\n  text-transform: uppercase;\n  letter-spacing: 0.08em;\n  font-weight: bold;\n  font-size: 20px;\n  line-height: 24px;\n}\n\nds-page .hero a:hover {\n  color: #9B99FD;\n}\n\nds-page .hero a svg {\n  -webkit-transition: fill 0.2s, -webkit-transform 0.2s;\n  transition: fill 0.2s, -webkit-transform 0.2s;\n  transition: transform 0.2s, fill 0.2s;\n  transition: transform 0.2s, fill 0.2s, -webkit-transform 0.2s;\n  fill: #8583FF;\n  -webkit-transform: translate(1px, 1px);\n  transform: translate(1px, 1px);\n}\n\nds-page .hero a:hover svg {\n  -webkit-transform: translate(1px, 3px);\n  transform: translate(1px, 3px);\n  fill: #9B99FD;\n}\n\nds-page .measure-lg {\n  margin-left: auto;\n  margin-right: auto;\n}\n\nds-page .content {\n  padding: 200px 0;\n}\n\nds-page .content--gradient-bg {\n  background: -webkit-gradient(linear, left top, left bottom, from(#FFFFFF), to(#F9FAFB));\n  background: linear-gradient(180deg, #FFFFFF 0%, #F9FAFB 100%);\n}\n\nds-page .content--border-top {\n  border-top: 1px solid #E9EDF3;\n}\n\nds-page .content hgroup {\n  max-width: 612px;\n  margin-bottom: 36px;\n}\n\nds-page h2 {\n  font-size: 48px;\n  line-height: 1.2;\n  letter-spacing: -0.02em;\n  font-weight: 700;\n  margin-bottom: 10px;\n  margin-top: 0;\n}\n\nds-page h3 {\n  font-size: 32px;\n  line-height: 1.2;\n  letter-spacing: -0.01em;\n  margin: 0;\n}\n\nds-page h4 {\n  font-weight: 600;\n  font-size: 28px;\n  line-height: 1.2;\n  letter-spacing: -0.01em;\n  margin-bottom: 18px;\n  text-transform: none;\n  color: #000;\n}\n\nds-page .content hgroup p {\n  font-size: 24px;\n  line-height: 1.6;\n  letter-spacing: -0.01em;\n}\n\nds-page .faq-grid {\n  -webkit-columns: 2;\n  -moz-columns: 2;\n  columns: 2;\n  -webkit-column-gap: 112px;\n  -moz-column-gap: 112px;\n  column-gap: 112px;\n}\n\nds-page .faq-grid > div {\n  margin-bottom: 20px;\n  display: inline-block;\n}\n\nds-page .faq-grid p {\n  font-size: 16px;\n  line-height: 27px;\n  color: #626175;\n}\n\nds-page table {\n  margin-top: 78px;\n}\n\nds-page table,\nds-page table tr,\nds-page table tr:nth-child(2n) {\n  background-color: transparent\n}\n\nds-page table td,\nds-page table th {\n  padding: 14px 0;\n  border: 0;\n  width: 50%;\n  font-weight: 500;\n  font-size: 16px;\n  line-height: 27px;\n  text-align: left;\n}\n\nds-page table th {\n  padding-bottom: 24px;\n  -ms-flex-direction: column;\n  flex-direction: column;\n}\n\nds-page table .icon-cell {\n  display: -ms-flexbox;\n  display: flex;\n}\n\nds-page table td app-icon .icon-checkmark {\n  fill: #000;\n  margin-right: 8px;\n}\n\nds-page table tr {\n  border-top: 0;\n}\n\nds-page table tbody tr:not(:last-child) td:not(.empty) {\n  border-bottom: 1px solid #DEE3EA;\n}\n\nds-page table th p {\n  font-size: 24px;\n  line-height: 30px;\n  letter-spacing: -0.01em;\n  color: #2F3A48;\n  font-weight: 400;\n  margin-top: 8px;\n}\n\nds-page tbody+tbody td {\n  padding-top: 32px;\n}\n\n\@media screen and (max-width: 768px) {\n  ds-page .hero {\n    padding-bottom: 132px;\n  }\n\n  ds-page .hero h1 {\n      font-size: 56px;\n  }\n\n  ds-page .content {\n    padding: 148px 0;\n  }\n\n  ds-page h2 {\n    font-size: 42px;\n  }\n\n  ds-page h3 {\n    font-size: 28px;\n  }\n\n  ds-page table {\n    min-width: 532px;\n  }\n\n  ds-page table th p {\n    font-size: 20px;\n  }\n\n  ds-page table td,\n  ds-page table th {\n    font-size: 15px;\n  }\n\n  ds-page .faq-grid {\n    -webkit-columns: 1;\n    -moz-columns: 1;\n    columns: 1;\n    -webkit-column-gap: 0;\n    -moz-column-gap: 0;\n    column-gap: 0;\n  }\n\n  ds-page .faq-grid > div {\n    margin-bottom: 0;\n  }\n}\n\n\@media screen and (max-width: 520px) {\n  ds-page .features {\n    overflow-x: scroll;\n    margin-right: -24px;\n  }\n}\n\n\@media screen and (max-width: 420px) {\n  ds-page .hero h1 {\n      font-size: 42px;\n  }\n\n  ds-page .hero p {\n    font-size: 22px;\n  }\n\n  ds-page .content {\n    padding: 100px 0;\n  }\n\n  ds-page h2 {\n    font-size: 34px;\n  }\n\n  ds-page .content hgroup p {\n    font-size: 20px;\n  }\n\n  ds-page table {\n    margin-top: 24px;\n  }\n}\n\n.hs-form .actions {\n  text-align: center;\n}\n\n.hs-form .hs-button {\n  cursor: pointer;\n}\n\n.hubspot-override .hs-form label {\n  font-weight: 600;\n  font-size: 14px;\n  display: block;\n  padding-bottom: 2px;\n}\n\n.hubspot-override .hs-form, .hs-form fieldset {\n  max-width: 100% !important;\n}\n\n.hubspot-override .hs-form .hs-form-field {\n  margin-top: 22px;\n}\n\n.hubspot-override .hs-form label {\n  margin-bottom: 3px;\n}\n\n.hubspot-override .hs-form .hs-form-required {\n  display: inline;\n  color: #f45454;\n  margin-left: 4px;\n}\n\n.hubspot-override .hs-form .hs-richtext {\n  margin-top: 8px;\n}\n\n.hubspot-override .hs-form .hs-input, .hubspot-override .hs-form input.hs-input {\n  -webkit-transition: border 0.3s;\n  transition: border 0.3s;\n  font-weight: 500;\n  background-color: #fff;\n  background-image: none;\n  border: 1px solid #ced6e3;\n  line-height: 1.39286;\n  border-radius: 4px;\n  padding: 11px 15px;\n  font-size: 15px;\n  margin-bottom: 0;\n  color: #505863;\n}\n\n.hubspot-override .hs-form input.hs-input[type=\"number\"] {\n  float: none;\n}\n\n.hs-form .hs-input:hover, .hs-form .hs-input:focus, .hs-form .hs-input:active,\n.hs-form input.hs-input:hover,\n.hs-form input.hs-input:focus,\n.hs-form input.hs-input:active,\n.hs-form select.hs-input:hover,\n.hs-form select.hs-input:focus,\n.hs-form select.hs-input:active {\n  outline: none;\n  -webkit-box-shadow: none;\n  box-shadow: none;\n}\n\n.hubspot-override .hs-form input.hs-input[type=\"text\"], .hubspot-override .hs-form input.hs-input[type=\"email\"], .hubspot-override .hs-form input.hs-input[type=\"tel\"] {\n  height: auto;\n  width: 100%;\n  float: none;\n}\n\n.hubspot-override .hs-form input.hs-input[type=\"text\"]:focus, .hubspot-override .hs-form input.hs-input[type=\"email\"]:focus, .hubspot-override .hs-form input.hs-input[type=\"tel\"]:focus, .hubspot-override .hs-form textarea:focus {\n  border-color: var(--color-dodger-blue);\n}\n\n.hubspot-override .hs-form input.hs-input[type=\"radio\"], .hubspot-override .hs-form input.hs-input[type=\"checkbox\"] {\n  height: auto;\n  margin-right: 8px;\n}\n\n.hubspot-override .hs-form .hs-form-booleancheckbox-display {\n  display: -ms-flexbox;\n  display: flex;\n}\n\n.hubspot-override .hs-form select.hs-input {\n  height: 44px;\n  -webkit-appearance: none;\n  -moz-appearance: none;\n  appearance: none;\n  background-image: linear-gradient(45deg, transparent 50%, gray 50%), linear-gradient(135deg, gray 50%, transparent 50%);\n  background-position: calc(100% - 20px) 50%, calc(100% - 15px) 50%;\n  background-size: 5px 5px, 5px 5px, 1px 1.5em;\n  background-repeat: no-repeat;\n}\n\n.hubspot-override .hs-form fieldset.form-columns-1 .hs-input {\n  width: 100%;\n}\n\n.hubspot-override .hs-form form fieldset.form-columns-2 .input {\n  margin: 0;\n}\n\n.hubspot-override .hs-form fieldset.form-columns-2 .hs-form-field {\n  padding: 0 10px;\n}\n\n.hubspot-override .hs-form fieldset.form-columns-2 .hs-form-field:first-child {\n  padding-left: 0;\n}\n\n.hubspot-override .hs-form fieldset.form-columns-2 .hs-form-field:last-child {\n  padding-right: 0;\n}\n\n.hubspot-override .hs-form .inputs-list, .hubspot-override .hs-form .hs-error-msgs {\n  margin: 0;\n  padding: 0;\n  list-style-type: none;\n}\n\n.hubspot-override .hs-form .inputs-list.multi-container {\n  overflow: hidden;\n}\n\n.hubspot-override .hs-form .inputs-list.multi-container li:nth-last-child(n+6):first-child, .hubspot-override .hs-form .inputs-list.multi-container li:nth-last-child(n+6):first-child~li {\n  width: 50%;\n  float: left;\n  padding-right: 11px;\n}\n\n.hubspot-override .hs-form .inputs-list.multi-container li:nth-last-child(n+6):first-child~li:nth-child(even) {\n  padding-right: 0;\n  padding-left: 11px;\n}\n\n.hubspot-override .hs-form .hs-form-checkbox-display {\n  margin-top: 4px;\n  display: -ms-flexbox;\n  display: flex;\n}\n\n.hubspot-override .hs-form .hs-form-checkbox-display .hs-input[type=\"checkbox\"] {\n  margin-right: 10px;\n}\n\n.hubspot-override .hs-form .hs-form-checkbox-display span {\n  font-size: 15px;\n  color: #505863;\n}\n\n.hubspot-override .hs-form .hs-error-msgs {\n  padding: 5px 0 0;\n  font-size: 11px;\n  color: #f45454;\n}\n\n.hubspot-override .hs-form .hs_submit {\n  margin-top: 30px;\n}\n\n.hubspot-override .hs-form .hs_submit input.hs-button {\n  -webkit-transition: all .15s ease;\n  transition: all .15s ease;\n  text-decoration: none;\n  border: none;\n  outline: none;\n  font-size: 14px;\n  font-weight: 700;\n  text-transform: uppercase;\n  padding: 16px 20px;\n  border-radius: 6px;\n  letter-spacing: 0.04em;\n  -webkit-box-shadow: var(--button-shadow);\n  box-shadow: var(--button-shadow);\n  cursor: pointer;\n  display: -ms-inline-flexbox;\n  display: inline-flex;\n  -ms-flex-align: center;\n  align-items: center;\n  ;\n  background: var(--color-dodger-blue);\n  color: var(--color-white);\n}\n\n.hubspot-override .hs-form .hs_submit input.hs-button:hover {\n  text-decoration: none;\n  -webkit-transform: translateY(-1px);\n  transform: translateY(-1px);\n  -webkit-box-shadow: var(--button-shadow-hover);\n  box-shadow: var(--button-shadow-hover);\n}\n\n\@media (max-width: 768px) {\n  .hubspot-override .hs-form fieldset.form-columns-2 .hs-form-field {\n    width: 100%;\n    float: none;\n    padding: 0 !important;\n  }\n\n  .hubspot-override .hs-form fieldset.form-columns-2 .hs-form-field+.hs-form-field {\n    margin-top: 24px;\n  }\n\n  .hubspot-override .hs-form .inputs-list.multi-container li:nth-last-child(n+6):first-child, .hubspot-override .hs-form .inputs-list.multi-container li:nth-last-child(n+6):first-child~li {\n    width: 100%;\n    float: none;\n    padding-right: 0;\n  }\n\n  .hubspot-override .hs-form .inputs-list.multi-container li:nth-last-child(n+6):first-child~li:nth-child(even) {\n    padding-left: 0;\n  }\n\n  .hubspot-override .hs-form .hs_submit input.hs-button {\n    width: 100%;\n  }\n}\n\n.hubspot-override .submitted-message {\n  font-size: 18px;\n  line-height: 1.4;\n  text-align: center;\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-direction: column;\n  flex-direction: column;\n  -ms-flex-align: center;\n  align-items: center;\n  font-weight: 600;\n  color: var(--color-dodger-blue);\n  max-width: 410px;\n  background-color: white;\n  margin: 0 auto;\n}\n\n.hubspot-override .hs-form label:not(.hs-form-booleancheckbox-display) {\n  text-transform: uppercase;\n  font-size: 12px;\n  letter-spacing: 0.05em;\n  margin-bottom: 6px;\n}\n\n.hubspot-override .hs-form .hs-form-booleancheckbox-display {\n  font-size: 15px;\n}\n\n\n.hubspot-override .hs-form .hs-richtext p span,\n.hubspot-override .hs-form .hs-richtext p a {\n  font-size: 15px;\n}\n\n.hubspot-override .hs-form .hs-input,\n.hubspot-override .hs-form input.hs-input {\n  padding: 16px 20px 18px;\n  font-size: 18px;\n}\n\n.hubspot-override .hs-form select.hs-input {\n  text-indent: 10px;\n  height: 60px;\n}\n\n\@-moz-document url-prefix() {\n  .hubspot-override .hs-form select.hs-input {\n    text-indent: 0;\n  }\n}\n\n.hubspot-override .hs-form .hs-error-msgs label {\n  font-size: 11px;\n  letter-spacing: 0;\n  text-transform: none;\n}\n\n.hubspot-override .hs-form fieldset.form-columns-2 .hs-form-field {\n  padding: 0 20px;\n}\n\n.hubspot-override .hs-form .hs_submit {\n  text-align: center;\n  padding-top: 18px;\n}\n\n.hubspot-override .hs-form .hs_submit input.hs-button {\n  padding: 22px 27px 24px;\n  border-radius: 6px;\n}\n\n\@media (max-width: $screen-sm) {\n  .hubspot-override .hs-form fieldset.form-columns-2 .hs-form-field {\n    padding: 0;\n  }\n}"; }
};
const FLAG = `
#extension GL_EXT_shader_texture_lod : enable
#extension GL_OES_standard_derivatives : enable
precision highp float;

uniform float iTime;
uniform vec2 iResolution;
uniform vec2 iMouse;

#define ALTERNATE_VERSION
#define PI 3.14159265359

vec3 hash33(vec3 p) {
  float n = sin(dot(p, vec3(7, 157, 113)));
  return fract(vec3(2097152, 262144, 32768)*n)*2. - 1.;
}

float tetraNoise(in vec3 p) {
  vec3 i = floor(p + dot(p, vec3(0.333333)) );  p -= i - dot(i, vec3(0.166666)) ;
  vec3 i1 = step(p.yzx, p), i2 = max(i1, 1.0-i1.zxy); i1 = min(i1, 1.0-i1.zxy);
  vec3 p1 = p - i1 + 0.166666, p2 = p - i2 + 0.333333, p3 = p - 0.5;
  vec4 v = max(0.5 - vec4(dot(p,p), dot(p1,p1), dot(p2,p2), dot(p3,p3)), 0.0);
  vec4 d = vec4(dot(p, hash33(i)), dot(p1, hash33(i + i1)), dot(p2, hash33(i + i2)), dot(p3, hash33(i + 1.)));
  return clamp(dot(d, v*v*v*8.)*1.732 + .5, 0., 1.); // Not sure if clamping is necessary. Might be overkill.
}

vec2 smoothRepeatStart(float x, float size) {
  return vec2(
    mod(x - size / 2., size),
    mod(x, size)
  );
}

float smoothRepeatEnd(float a, float b, float x, float size) {
  return mix(a, b,
    smoothstep(
      0., 1.,
      sin((x / size) * PI * 2. - PI * .5) * .5 + .5
    )
  );
}

#define repeatSize 10.

void main() {
  vec2 uv = (-iResolution.xy + 2. * gl_FragCoord.xy) / iResolution.y;
  float dist = distance(gl_FragCoord.xy, iMouse) / length(iResolution);

  // Zoom in a bit
  uv *= 0.9;

  float x = uv.x - mod(iTime, repeatSize / 2.);
  float y = uv.y;

  vec2 ab; // two sample points on one axis

  float noise;
  float noiseA, noiseB;

  ab = smoothRepeatStart(x, repeatSize) * dist;
  noiseA = tetraNoise(16.+vec3(vec2(ab.x, uv.y) * 1.2, 0)) * .5;
  noiseB = tetraNoise(16.+vec3(vec2(ab.y, uv.y) * 1.2, 0)) * .5;
  noise = smoothRepeatEnd(noiseA, noiseB, x, repeatSize);

  ab = smoothRepeatStart(y, repeatSize / 2.);
  noiseA = tetraNoise(vec3(vec2(uv.x, ab.x) * .5, 0)) * 2.;
  noiseB = tetraNoise(vec3(vec2(uv.x, ab.y) * .5, 0)) * 2.;
  noise *= smoothRepeatEnd(noiseA, noiseB, y, repeatSize / 2.);

  ab = smoothRepeatStart(x, repeatSize);
  noiseA = tetraNoise(9.+vec3(vec2(ab.x, uv.y) * .05, 0)) * 5.;
  noiseB = tetraNoise(9.+vec3(vec2(ab.y, uv.y) * .05, 0)) * 5.;
  noise *= smoothRepeatEnd(noiseA, noiseB, x, repeatSize);

  noise = mix(noise * .8, dot(uv, vec2(-.66,1.)*.4), .6);

  float spacing = 1./90.;
  float lines = mod(noise, spacing) / spacing;
  lines = min(lines * 2., 1.) - max(lines * 2. - 1., 0.);
  lines /= fwidth(noise / spacing);

  // Double to occupy two pixels and appear smoother
  lines = 1. - lines * 0.5;

  float iconRate = clamp(1., 240./distance(gl_FragCoord.xy, vec2(iResolution.x *.5 - 30.0, iResolution.y - 265.)), 300.);
gl_FragColor = vec4(
  vec3(0.04, 0.04, 0.078) +
  (vec3(lines) * clamp(.0, abs(noise), 1.) * 0.4 * iconRate)
,1.0);
}
`;
function scrollTo(el) {
    let currentTime = 0;
    const scrollY = window.scrollY;
    const scrollTargetY = el.offsetTop;
    const speed = 600;
    const easeOutExpo = (pos) => {
        return (pos === 1) ? 1 : -Math.pow(2, -10 * pos) + 1;
    };
    const time = Math.max(.1, Math.min(Math.abs(scrollY - scrollTargetY) / speed, .8));
    const tick = () => {
        currentTime += 1 / 60;
        const p = currentTime / time;
        const t = easeOutExpo(p);
        if (p < 1) {
            requestAnimationFrame(tick);
            window.scrollTo(0, scrollY + ((scrollTargetY - scrollY) * t));
        }
        else {
            window.scrollTo(0, scrollTargetY);
        }
    };
    tick();
}

export { DSPage as ds_page };
