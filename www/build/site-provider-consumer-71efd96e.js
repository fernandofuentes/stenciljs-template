import { h } from './core-d92b5eae.js';
import { c as createProviderConsumer } from './index-df72ec0c.js';

const SiteProviderConsumer = createProviderConsumer({
    isLeftSidebarIn: false,
    toggleLeftSidebar: () => { }
}, (subscribe, child) => h("context-consumer", { subscribe: subscribe, renderer: child }));

export { SiteProviderConsumer as S };
