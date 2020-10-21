const ProfilePage = require('../pageobjects/profile.page')
const axios = require('axios');
const users = require('../../data/users')
const host = 'http://stage.localcoding.us';

let responseStatus;
let responseMsg;



module.exports = {


    logOut() {
        ProfilePage.NameDropDown.click();
        ProfilePage.btnLogOut.click();
    },

    async apiLogin(role) {
       return await axios
            .post(`${host}/user/login`, {
                email: users[role].email,
                password: users[role].pass
            })
            .then(res => {
                responseStatus = res.status
                responseMsg = res.statusText;
            })
            .catch(err => console.log(err));
    },

    async requestStatus(status) {  //success
        const statusCode = (status === 'success')? 201 : 400;
        const response = await this.apiLogin;
        expect(responseStatus).toBeCloseTo(statusCode)
    }

}

