const pages = require('../../../data/pages');

module.exports = function (falseCase, page) {
    const title = browser.getTitle();
    const pageTitle = pages[page].title;

    if (falseCase) {
        expect(title).not.toBe(
            pageTitle,
            { message : `Expected title not to be "${pageTitle}"`}
        );
    } else {
        expect(title).toBe(
            pageTitle,
            { message : `Expected title to be "${pageTitle}" but found "${title}"`}
        );
    }
}

