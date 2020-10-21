class ProfilePage {
    /**
     * define selectors using getter methods
     */
    get title() { return "Local Coding" }
    get NameDropDown() { return $('.anticon-down') };
    get btnLogOut() { return $('li[data-qa="logout"]')}
    get header() { return $('h1') };

}
module.exports = new ProfilePage();