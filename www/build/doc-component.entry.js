import { r as registerInstance, B as Build, h, H as Host } from './core-d92b5eae.js';
import { a as findItem, f as fileNotFound } from './site-structure-utils-436ba0ca.js';

const siteStructure = [
	{
		text: "Introduction",
		children: [
			{
				text: "Why Stencil",
				filePath: "/assets/docs/introduction/why-stencil.json",
				url: "/docs/introduction"
			},
			{
				text: "Goals and Objectives",
				filePath: "/assets/docs/introduction/goals-and-objectives.json",
				url: "/docs/goals-and-objectives"
			},
			{
				text: "Browser Support",
				filePath: "/assets/docs/introduction/browser-support.json",
				url: "/docs/browser-support"
			},
			{
				text: "Getting Started",
				filePath: "/assets/docs/introduction/getting-started.json",
				url: "/docs/getting-started"
			},
			{
				text: "My First Component",
				filePath: "/assets/docs/introduction/my-first-component.json",
				url: "/docs/my-first-component"
			},
			{
				text: "FAQ",
				filePath: "/assets/docs/introduction/faq.json",
				url: "/docs/faq"
			}
		]
	},
	{
		text: "Design Systems",
		children: [
			{
				text: "What is a Design System?",
				filePath: "/assets/docs/design-systems/what-is-design-system.json",
				url: "/docs/what-is-design-system"
			},
			{
				text: "Stencil for Design Systems",
				filePath: "/assets/docs/design-systems/stencil-for-design-systems.json",
				url: "/docs/stencil-for-design-systems"
			}
		]
	},
	{
		text: "Components",
		children: [
			{
				text: "API",
				filePath: "/assets/docs/components/api.json",
				url: "/docs/decorators"
			},
			{
				text: "Component",
				filePath: "/assets/docs/components/component.json",
				url: "/docs/component"
			},
			{
				text: "Lifecycle Methods",
				filePath: "/assets/docs/components/component-lifecycle.json",
				url: "/docs/component-lifecycle"
			},
			{
				text: "Properties",
				filePath: "/assets/docs/components/properties.json",
				url: "/docs/properties"
			},
			{
				text: "Internal State",
				filePath: "/assets/docs/components/state.json",
				url: "/docs/state"
			},
			{
				text: "Reactive Data",
				filePath: "/assets/docs/components/reactive-data.json",
				url: "/docs/reactive-data"
			},
			{
				text: "Using JSX",
				filePath: "/assets/docs/components/templating-and-jsx.json",
				url: "/docs/templating-jsx"
			},
			{
				text: "Events",
				filePath: "/assets/docs/components/events.json",
				url: "/docs/events"
			},
			{
				text: "Methods",
				filePath: "/assets/docs/components/methods.json",
				url: "/docs/methods"
			},
			{
				text: "Host Element",
				filePath: "/assets/docs/components/host-element.json",
				url: "/docs/host-element"
			},
			{
				text: "Styling",
				filePath: "/assets/docs/components/styling.json",
				url: "/docs/styling"
			},
			{
				text: "Functional Components",
				filePath: "/assets/docs/components/functional-components.json",
				url: "/docs/functional-components"
			}
		]
	},
	{
		text: "Framework Integrations",
		children: [
			{
				text: "Overview",
				filePath: "/assets/docs/framework-integration/overview.json",
				url: "/docs/overview"
			},
			{
				text: "Angular",
				filePath: "/assets/docs/framework-integration/angular.json",
				url: "/docs/angular"
			},
			{
				text: "React",
				filePath: "/assets/docs/framework-integration/react.json",
				url: "/docs/react"
			},
			{
				text: "Vue",
				filePath: "/assets/docs/framework-integration/vue.json",
				url: "/docs/vue"
			},
			{
				text: "Ember",
				filePath: "/assets/docs/framework-integration/ember.json",
				url: "/docs/ember"
			},
			{
				text: "JavaScript",
				filePath: "/assets/docs/framework-integration/javascript.json",
				url: "/docs/javascript"
			}
		]
	},
	{
		text: "Config",
		children: [
			{
				text: "Overview",
				filePath: "/assets/docs/config/overview.json",
				url: "/docs/config"
			},
			{
				text: "Dev Server",
				filePath: "/assets/docs/config/dev-server.json",
				url: "/docs/dev-server"
			},
			{
				text: "Plugins",
				filePath: "/assets/docs/config/plugins.json",
				url: "/docs/plugins"
			}
		]
	},
	{
		text: "Output Targets",
		children: [
			{
				text: "Overview",
				filePath: "/assets/docs/output-targets/overview.json",
				url: "/docs/output-targets"
			},
			{
				text: "www",
				filePath: "/assets/docs/output-targets/www.json",
				url: "/docs/www"
			},
			{
				text: "dist",
				filePath: "/assets/docs/output-targets/dist.json",
				url: "/docs/distribution"
			},
			{
				text: "docs-readme",
				filePath: "/assets/docs/output-targets/docs-readme.json",
				url: "/docs/docs-readme"
			},
			{
				text: "docs-json",
				filePath: "/assets/docs/output-targets/docs-json.json",
				url: "/docs/docs-json"
			},
			{
				text: "Copy Tasks",
				filePath: "/assets/docs/output-targets/copy-tasks.json",
				url: "/docs/copy-tasks"
			}
		]
	},
	{
		text: "Guides",
		children: [
			{
				text: "Prerendering",
				filePath: "/assets/docs/guides/prerendering.json",
				url: "/docs/prerendering"
			},
			{
				text: "Bundling",
				filePath: "/assets/docs/guides/module-bundling.json",
				url: "/docs/module-bundling"
			},
			{
				text: "Typed Components",
				filePath: "/assets/docs/guides/typed-components.json",
				url: "/docs/typed-components"
			},
			{
				text: "Forms",
				filePath: "/assets/docs/guides/forms.json",
				url: "/docs/forms"
			},
			{
				text: "Style Guide",
				filePath: "/assets/docs/guides/style-guide.json",
				url: "/docs/style-guide"
			},
			{
				text: "Service Workers",
				filePath: "/assets/docs/guides/service-workers.json",
				url: "/docs/service-workers"
			},
			{
				text: "State Tunnel",
				filePath: "/assets/docs/guides/state-tunnel.json",
				url: "/docs/stencil-state-tunnel"
			},
			{
				text: "Redux",
				filePath: "/assets/docs/guides/redux.json",
				url: "/docs/stencil-redux"
			}
		]
	},
	{
		text: "Testing",
		children: [
			{
				text: "Overview",
				filePath: "/assets/docs/testing/overview.json",
				url: "/docs/testing-overview"
			},
			{
				text: "Config",
				filePath: "/assets/docs/testing/config.json",
				url: "/docs/testing-config"
			},
			{
				text: "Unit Testing",
				filePath: "/assets/docs/testing/unit-testing.json",
				url: "/docs/unit-testing"
			},
			{
				text: "End-to-end Testing",
				filePath: "/assets/docs/testing/e2e-testing.json",
				url: "/docs/end-to-end-testing"
			},
			{
				text: "Mocking",
				filePath: "/assets/docs/testing/mocking.json",
				url: "/docs/mocking"
			},
			{
				text: "Visual Screenshot Diff",
				filePath: "/assets/docs/testing/screenshot-visual-diff.json",
				url: "/docs/screenshot-visual-diff"
			}
		]
	},
	{
		text: "Community",
		children: [
			{
				text: "Stencil on GitHub",
				filePath: "https://github.com/ionic-team/stencil"
			},
			{
				text: "Stencil on Slack",
				filePath: "https://stencil-worldwide.herokuapp.com/"
			},
			{
				text: "Stencil on Twitter",
				filePath: "https://twitter.com/stenciljs"
			}
		]
	}
];

const DocumentComponent = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
    }
    async componentWillRender() {
        if (this.page) {
            console.log('componentWillRender', this.page);
            const data = this.data = findItem(siteStructure, this.page);
            if (!Build.isBrowser && !data.item) {
                fileNotFound();
                return;
            }
            if (data.item && data.item.filePath) {
                this.content = await fetchContent(data.item.filePath);
            }
        }
    }
    render() {
        const data = this.data;
        const content = this.content;
        if (!data || !content) {
            return null;
        }
        console.log('render3', this.page);
        return (h(Host, null, h("div", { class: "container" }, h("div", { class: "container-inner" }, h("stencil-route-title", { pageTitle: content.title }), h("app-burger", null), h("site-menu", { selectedParent: data.parent, siteStructureList: siteStructure }), h("div", { class: "doc-content measure-lg" }, toHypertext(content.hypertext), h("lower-content-nav", { next: data.nextItem, prev: data.prevItem }), h("contributor-list", { contributors: content.contributors })), h("in-page-navigation", { pageLinks: content.headings, srcUrl: content.srcPath, currentPageUrl: content.url })))));
    }
    static get style() { return "doc-component {\n\n}\n\ndoc-component  .container-inner {\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-pack: justify;\n  justify-content: space-between;\n  width: 100%;\n  margin-bottom: 100px;\n}\n\ndoc-component h1 {\n  margin-top: 100px;\n}\n\ndoc-component h1:first-of-type {\n  margin-top: 0;\n}\n\ndoc-component h2,\ndoc-component h3 {\n  margin-bottom: 0;\n  margin-top: 27px;\n  padding-top: 25px;\n}\n\ndoc-component ul,\ndoc-component ol {\n  padding: 0 0 0 20px;\n  margin-bottom: 16px;\n}\n\ndoc-component ul ul {\n  margin: 2px 0;\n}\n\ndoc-component ul li {\n  font-size: 15px;\n}\n\ndoc-component .measure-lg {\n  margin-left: auto;\n  margin-right: auto;\n}\n\ndoc-component svg {\n  width: 100%;\n}\n\ndoc-component .btn.pull-left,\ndoc-component .btn.pull-right {\n  margin: 52px 6px 15px;\n}\n\ndoc-component .doc-content {\n  -ms-flex: 1;\n  flex: 1;\n  -ms-flex-pack: justify;\n  justify-content: space-between;\n  min-width: 0;\n  padding-left: 60px;\n  padding-right: 60px;\n  width: 100%;\n  margin-left: auto;\n  margin-right: auto;\n}\n\ndoc-component .heading-link {\n  position: relative;\n  text-decoration: none;\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-align: center;\n  align-items: center;\n}\n\ndoc-component .heading-link app-icon {\n  -webkit-transition: opacity 0.2s;\n  transition: opacity 0.2s;\n  position: absolute;\n  left: -20px;\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-align: center;\n  align-items: center;\n  opacity: 0;\n}\n\ndoc-component .heading-link:hover app-icon {\n  opacity: 0.8;\n}\n\ndoc-component table app-icon svg.icon-checkmark {\n  fill: var(--color-green-haze);\n}\n\ndoc-component .align-right {\n  text-align: right;\n}\n\ndoc-component .caption {\n  font-size: 12px;\n  color: var(--color-dolphin);\n}\n\ndocument-component contributor-list {\n  margin: 14px 0px;\n}\n\n\@media screen and (max-width: 1024px) {\n  doc-component .doc-content {\n    padding-right: 0;\n  }\n}\n\n\@media screen and (max-width: 768px) {\n  doc-component .doc-content {\n    padding-left: 0;\n  }\n\n  doc-component .measure-lg {\n    max-width: 560px;\n  }\n}\n\n\@media screen and (max-width: 480px) {\n  doc-component h1 {\n    font-size: 26px;\n  }\n\n  doc-component p,\n  doc-component ul li,\n  doc-component ol li {\n    font-size: 14px;\n  }\n}"; }
};
const localCache = new Map();
const fetchContent = (path) => {
    let promise = localCache.get(path);
    if (!promise) {
        console.log('fetchContent', path);
        promise = fetch(path).then(response => response.json());
        localCache.set(path, promise);
    }
    return promise;
};
const toHypertext = (data) => {
    if (!Array.isArray(data)) {
        console.error('content error, hypertext is undefined');
        return null;
    }
    const args = [];
    for (let i = 0; i < data.length; i++) {
        let arg = data[i];
        if (i === 0 && typeof arg === 'string' && tagBlacklist.includes(arg.toLowerCase().trim())) {
            arg = 'template';
        }
        else if (i === 1 && arg) {
            const attrs = {};
            Object.keys(arg).forEach(key => {
                const k = key.toLowerCase();
                if (!k.startsWith('on') && k !== 'innerhtml') {
                    attrs[key] = arg[key];
                }
            });
            arg = attrs;
        }
        else if (i > 1) {
            if (Array.isArray(arg)) {
                arg = toHypertext(arg);
            }
        }
        args.push(arg);
    }
    return h.apply(null, args);
};
const tagBlacklist = ['script', 'link', 'meta', 'object', 'head', 'html', 'body'];

export { DocumentComponent as doc_component };
