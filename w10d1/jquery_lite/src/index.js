const DOMNodeCollection = require('./dom_node_collection');

window.$l = function (arg) {

    if (arg instanceof HTMLElement) {
        return new DOMNodeCollection([arg]);
    } else if (Object.isString(arg)) {
        return Array.from(document.querySelectorAll(arg));
    }

};




