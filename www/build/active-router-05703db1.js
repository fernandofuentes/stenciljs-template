import { h } from './core-d92b5eae.js';
import { c as createProviderConsumer } from './index-df72ec0c.js';

const ActiveRouter = createProviderConsumer({
    historyType: 'browser',
    location: {
        pathname: '',
        query: {},
        key: ''
    },
    titleSuffix: '',
    root: '/',
    routeViewsUpdated: () => { }
}, (subscribe, child) => (h("context-consumer", { subscribe: subscribe, renderer: child })));

export { ActiveRouter as A };
