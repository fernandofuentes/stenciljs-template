import { r as registerInstance, h } from './core-d92b5eae.js';

const CustomClock = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.time = Date.now();
    }
    componentDidLoad() {
        this.timer = setInterval(() => {
            this.time = Date.now();
        }, 1000);
    }
    componentDidUnload() {
        clearInterval(this.timer);
    }
    render() {
        const time = new Date(this.time).toLocaleTimeString();
        return (h("span", null, time));
    }
};

export { CustomClock as custom_clock };
