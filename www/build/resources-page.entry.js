import { r as registerInstance, h } from './core-d92b5eae.js';

const ResourcesPage = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        document.title = `Stencil Resources`;
    }
    render() {
        return [
            h("div", { class: "container" }, h("h1", { class: "headline measure-md" }, "Resources to help you get more out of Stencil"), h("section", { class: "measure-lg" }, h("h2", null, "Community Articles/Blogs"), h("p", null, "Disclaimer: these articles are community-created, and might contain inaccurate, or outdated information and code snippets."), h("ul", { class: "list--unstyled" }, LINKS.BLOGS.map(link => {
                return (h("li", null, h("a", { target: "_blank", rel: "noopener", href: link.url }, link.title)));
            }))), h("section", { class: "measure-lg" }, h("h2", null, "3rd Party Components, Templates and Tools"), h("ul", { class: "list--unstyled" }, LINKS.COMPONENTS.map(link => {
                return (h("li", null, h("a", { target: "_blank", rel: "noopener", href: link.url }, link.title)));
            }), LINKS.TEMPLATES.map(link => {
                return (h("li", null, h("a", { target: "_blank", rel: "noopener", href: link.url }, link.title)));
            }), LINKS.TOOLS.map(link => {
                return (h("li", null, h("a", { target: "_blank", rel: "noopener", href: link.url }, link.title)));
            }))), h("section", null, h("h2", null, "Demos"), h("p", null, "Demos of apps built using Stencil and Ionic"), h("div", { class: "demo-card-list" }, LINKS.DEMOS.map(demo => {
                return (h("demo-card", { name: demo.title, description: demo.description, imgPath: demo.imgPath, demoUrl: demo.demoUrl, sourceUrl: demo.sourceUrl }));
            }))), h("section", { class: "measure-lg" }, h("h2", null, "Present Stencil"), h("div", { class: "slide-wrapper screenshot" }, h("iframe", { src: "https://ionic-team.github.io/stencil-present/", title: "Present Stencil", loading: "lazy" })), h("p", null, "A forkable presentation for your next meetup or conference talk on Stencil. Built with ", h("a", { href: "https://github.com/hakimel/reveal.js" }, "Reveal.js")), h("a", { target: "_blank", rel: "noopener", href: "https://ionic-team.github.io/stencil-present/" }, "Stencil Presentation"), h("br", null), h("a", { target: "_blank", rel: "noopener", href: "https://github.com/ionic-team/stencil-present/" }, "Source"))),
            h("pre-footer", null)
        ];
    }
    static get style() { return "resources-page .measure-lg {\n  margin-bottom: 100px;\n}\n\nresources-page .measure-lg > div + div {\n  margin-top: 56px;\n}\n\nresources-page .list--unstyled {\n  line-height: 1.4;\n}\n\nresources-page .list--unstyled li + li {\n  margin-top: 20px;\n}\n\nresources-page h2 + .list--unstyled {\n  margin-top: 22px;\n}\n\nresources-page .slide-wrapper {\n  position: relative;\n  padding-bottom: 56.25%;\n  /* 16:9 */\n  padding-top: 25px;\n  height: 0;\n}\n\nresources-page .slide-wrapper iframe {\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n}\n\nresources-page a {\n  text-decoration: none;\n}"; }
};
const LINKS = {
    TEMPLATES: [
        { title: 'Official Stencil App Starter Project', url: 'https://github.com/ionic-team/stencil-app-starter' },
        { title: 'Official Stencil Component Starter Project', url: 'https://github.com/ionic-team/stencil-component-starter' },
        { title: 'Angular Stencil: use Stencil-built components in Angular', url: 'https://github.com/seveves/angular-stencil' }
    ],
    COMPONENTS: [
        { title: 'Stencil Router', url: 'https://github.com/ionic-team/stencil-router/wiki' },
        { title: 'Stencil Card Component', url: 'https://github.com/henriquecustodia/stencil-card-app' },
        { title: 'st-image: lazy loaded images', url: 'https://github.com/jgw96/st-img' },
        { title: 'st-payment: Stencil Payment API Component', url: 'https://github.com/Fdom92/stencil-payment' },
        { title: 'st-fetch: A simple component for performing http fetch calls', url: 'https://github.com/Fdom92/stencil-fetch' },
        { title: 'web-photo-filter: Use webGL for amazing instagram like filters', url: 'https://github.com/peterpeterparker/web-photo-filter' },
        { title: 'stencil-flip-images: Awesome animated image gallery', url: 'https://github.com/jepiqueau/stencil-flip-images' },
        { title: 'd3-stencil: Charts built with D3 and Stencil. Framework-agnostic, simple.', url: 'https://d3-stencil.dev' }
    ],
    TOOLS: [
        { title: 'yo Stencil: A yeoman generator for Stencil', url: 'https://github.com/AkashGutha/generator-stencil' },
        { title: 'Stencil Snippets: A Stencil snippets package for VS Code', url: 'https://marketplace.visualstudio.com/items?itemName=fdom.stencil-snippets' },
        { title: 'tslint-stencil: TSLint rules for Stencil components', url: 'https://www.npmjs.com/package/tslint-stencil' }
    ],
    BLOGS: [
        { title: 'Announcing Stencil.js', url: 'https://www.youtube.com/watch?v=UfD-k7aHkQE' },
        { title: 'Stencil - Getting Started (video)', url: "https://www.youtube.com/watch?v=MqMYaT1GlWY" },
        { title: 'Using a Stencil-built component in Angular', url: "https://github.com/ospatil/ng-components-integration" },
        { title: 'Create your First Stencil Component', url: 'https://coryrylan.com/blog/create-your-first-web-component-with-stencil-js' },
        { title: 'Getting Started with Stencil', url: 'https://alligator.io/stencil/getting-started/' },
        { title: "Stencil.js: It's finally time for vanilla web components!", url: 'https://medium.com/@sinedied/stencil-js-its-finally-time-for-vanilla-web-components-927d26b573e1' },
        { title: "Stencil with MobX", url: 'https://github.com/aaronksaunders/stencil-mobx' },
        { title: "Webkomponenten mit Stencil – Ein erster Überblick (in German)", url: 'https://www.datacodedesign.de/webkomponenten-mit-stencil-ein-erster-ueberblick/' },
        { title: 'Stencil’e Giriş (in Turkish)', url: 'https://medium.com/t%C3%BCrkiye/stencile-giri%C5%9F-41e90e37595d' },
        { title: 'Stencil’de Bileşenler Arası Haberleşme (in Turkish)', url: 'https://medium.com/t%C3%BCrkiye/stencilde-bilesenler-arasi-haberlesme-52523a470fa9' },
        { title: 'Stencil Tricks - A collection of community-written articles on how to do awesome things in Stencil JS', url: 'https://medium.com/stencil-tricks' }
    ],
    DEMOS: [
        {
            title: 'Stenciljs.com',
            description: 'Yep, this site is also built with Stencil!',
            imgPath: '/assets/img/demos/demo-stenciljs',
            demoUrl: '/',
            sourceUrl: 'https://github.com/ionic-team/stencil-site',
        },
        {
            title: 'IonicHN',
            description: 'Hacker News PWA built with @stencil/core and @ionic/core',
            imgPath: '/assets/img/demos/demo-ionichn',
            demoUrl: 'https://corehacker-10883.firebaseapp.com/',
            sourceUrl: 'https://github.com/ionic-team/ionic-stencil-hn-app'
        },
        {
            title: 'Stencil Fiber demo',
            description: 'This showcases the runtime performance of stencil using our async rendering',
            imgPath: '/assets/img/demos/demo-fiber',
            demoUrl: 'https://stencil-fiber-demo.firebaseapp.com/',
            sourceUrl: 'https://github.com/ionic-team/stencil-fiber-demo'
        },
        {
            title: 'IonicBeer',
            description: 'Beer PWA built with @stencil/core and @ionic/core',
            imgPath: '/assets/img/demos/demo-ionicbeer',
            demoUrl: 'https://stencilbeer.firebaseapp.com/',
            sourceUrl: 'https://github.com/jgw96/stencil-beer'
        },
        {
            title: 'InstaMusic',
            description: 'A full featured music player built with @stencil/core and @ionic/core',
            imgPath: '/assets/img/demos/demo-instamusic',
            demoUrl: 'https://instamusic-c15fe.firebaseapp.com/',
            sourceUrl: 'https://github.com/jgw96/instamusic'
        }
    ]
};

export { ResourcesPage as resources_page };
