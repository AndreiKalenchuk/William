const ProfilePage = require('../pageobjects/profile.page')
const axios = require('axios');
const users = require('../../data/users')
const host = 'http://stage.localcoding.us';

let responseStatus;
let responseMsg;



module.exports = {

       async requestStatus(status) {  //success
        const statusCode = (status === 'success')? 201 : 400;
        const response = await this.apiLogin;
        expect(responseStatus).toBeCloseTo(statusCode)
    }

}

