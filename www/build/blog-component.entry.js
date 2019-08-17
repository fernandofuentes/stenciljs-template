import { r as registerInstance, B as Build, h } from './core-d92b5eae.js';
import { b as blogStructure } from './list-bc1f4759.js';
import { f as fileNotFound } from './site-structure-utils-436ba0ca.js';

const BlogIndex = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
    }
    async componentWillRender() {
        if (this.page) {
            const post = this.data = blogStructure.find(blog => blog.url === this.page);
            if (!Build.isBrowser && !post) {
                fileNotFound();
                return;
            }
            if (post && post.filePath) {
                insertMetaTags(post);
                document.title = post.title;
                this.content = await fetchContent(post.filePath);
            }
        }
    }
    render() {
        if (!this.data || !this.content) {
            return;
        }
        const post = this.data;
        const content = this.content;
        return (h("div", { class: "container" }, h("div", { class: "share-links" }, h("div", { class: "sticky" }, h("a", { href: `http://twitter.com/home?status=${post.title}`, class: "twitter", onClick: function (ev) {
                ev.preventDefault();
                window.open(this.href, 'Share via Twitter', 'width=400, height=300');
            } }, h("app-icon", { name: "twitter" })), h("a", { href: `http://www.facebook.com/share.php?u=${window.location.href}&title=${post.title}`, class: "facebook", onClick: function (ev) {
                ev.preventDefault();
                window.open(this.href, 'Share via Facebook', 'width=555, height=656');
            } }, h("app-icon", { name: "facebook" })), h("a", { href: `http://www.linkedin.com/shareArticle?mini=true&url=${window.location.href}&title=${post.title}`, class: "linkedin", onClick: function (ev) {
                ev.preventDefault();
                window.open(this.href, 'Share via LinkedIn', 'width=500, height=600');
            } }, h("app-icon", { name: "linkedin" })))), h("div", { class: "blog-content" }, h("h1", null, post.title), h("span", { class: "post-meta" }, h("a", { href: `http://twitter.com/${post.twitter}` }, h("img", { alt: `Author: ${post.author}`, class: "post-author-image", src: `/assets/img/blog/authors/${post.twitter}.jpg` })), h("a", { class: "post-author-name", href: `http://twitter.com/${post.twitter}` }, post.author), h("span", { class: "post-date" }, post.date)), toHypertext(content.hypertext))));
    }
    static get style() { return "blog-component app-icon {\n  margin-left: 4px;\n}\n\nblog-component .container {\n  margin-bottom: 160px;\n  position: relative;\n}\n\nblog-component .post-meta {\n  text-transform: uppercase;\n  color: #92A1B3;\n  font-size: 11px;\n  font-weight: 500;\n  letter-spacing: 0.04em;\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-align: center;\n  align-items: center;\n}\n\nblog-component h1 {\n  font-size: 32px;\n  line-height: 38px;\n  font-weight: 600;\n  margin: 0 0 12px;\n}\n\nblog-component .blog-item p {\n  font-size: 16px;\n  line-height: 1.8;\n  color: #27323F;\n  margin: 22px 0;\n}\n\nblog-component .blog-item a {\n  color: var(--color-dodger-blue);\n  text-decoration: none;\n  font-weight: 500;\n  font-size: 16px;\n}\n\nblog-component .blog-index,\nblog-component .blog-content {\n  max-width: 640px;\n  margin-left: auto;\n  margin-right: auto;\n  margin-bottom: 160px;\n}\n\nblog-component .blog-content .post-meta {\n  margin-bottom: 80px;\n}\n\nblog-component h2,\nblog-component h3 {\n  margin-bottom: 0;\n  margin-top: 27px;\n  padding-top: 25px;\n}\n\nblog-component .blog-content img:not(.post-author-image),\nblog-component .blog-content svg {\n  width: 100%;\n}\n\nblog-component .post-author-image {\n  width: 24px;\n  height: 24px;\n  margin-right: 8px;\n  -ms-flex: 0 0 24px;\n  flex: 0 0 24px;\n  border-radius: 12px;\n}\n\nblog-component .post-author-name {\n  padding-right: 15px;\n  color: inherit;\n  text-decoration: none;\n}\n\nblog-component .post-author-name:hover {\n  text-decoration: underline;\n}\n\nblog-component .post-date::before {\n  content: \"|\";\n  padding-right: 12px;\n}\n\nblog-component .share-links {\n  position: absolute;\n  top: 0;\n  right: 64px;\n  height: 100%;\n}\n\nblog-component .share-links .sticky {\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-direction: column;\n  flex-direction: column;\n  position: -webkit-sticky;\n  position: sticky;\n  top: 24px;\n}\n\nblog-component .share-links a svg {\n  -webkit-transition: fill 0.2s;\n  transition: fill 0.2s;\n  fill: #CED6E0;\n  width: 24px;\n  height: 24px;\n}\n\nblog-component .share-links a:hover svg{\n  fill: #B2BECD;\n}\n\nblog-component .share-links a + a {\n  margin-top: 12px;\n}\n\n\n\@media screen and (max-width: 840px) {\n  blog-component .container {\n    display: -ms-flexbox;\n    display: flex;\n    -ms-flex-direction: column-reverse;\n    flex-direction: column-reverse;\n  }\n\n  blog-component .blog-content {\n    margin-bottom: 42px;\n  }\n\n  blog-component .blog-content .post-meta {\n    margin-bottom: 42px;\n  }\n\n  blog-component .share-links {\n    position: static;\n  }\n\n  blog-component .share-links .sticky {\n    -ms-flex-direction: row;\n    flex-direction: row;\n  }\n\n  blog-component .share-links a + a {\n    margin-top: 0;\n    margin-lefT: 12px;\n  }\n\n}"; }
};
const insertMetaTags = (post) => {
    createOgTag('og:title', `Stencil Blog - ${post.title}`);
    createOgTag('og:description', post.description);
    createOgTag('og:url', window.location.href);
    createOgTag('og:image', `${window.location.origin}${post.img}`);
    createTwitterTag('twitter:card', `summary`);
    createTwitterTag('twitter:title', post.title);
    createTwitterTag('twitter:description', post.description);
    createTwitterTag('twitter:image', `${window.location.origin}${post.img}`);
    if (post.twitter) {
        createTwitterTag('twitter:creator', `@${post.twitter}`);
    }
};
const createOgTag = (type, content) => {
    let el = document.head.querySelector(`meta[property="${type}"]`);
    if (!el) {
        el = document.createElement('meta');
        el.setAttribute('property', type);
        el.setAttribute('content', content);
        document.head.appendChild(el);
    }
    else {
        el.setAttribute('property', type);
        el.setAttribute('content', content);
    }
};
const createTwitterTag = (type, content) => {
    let el = document.head.querySelector(`meta[name="${type}"]`);
    if (!el) {
        el = document.createElement('meta');
        el.setAttribute('name', type);
        el.setAttribute('content', content);
        document.head.appendChild(el);
    }
    else {
        el.setAttribute('name', type);
        el.setAttribute('content', content);
    }
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

export { BlogIndex as blog_component };
