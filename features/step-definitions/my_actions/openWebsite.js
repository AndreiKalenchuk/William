const pages = require('../../../data/pages')

module.exports = (type, path) => {

    if (type === 'url') {
        browser.url(path);
    } else {
       pages[path].open();
    }
}

