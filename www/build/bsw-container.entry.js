import { r as registerInstance, h, e as Host } from './index-ea1051fa.js';

const bswContainerCss = ":host{display:block}";

const BswContainer = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
  }
  render() {
    return (h(Host, null, h("slot", null)));
  }
};
BswContainer.style = bswContainerCss;

export { BswContainer as bsw_container };
