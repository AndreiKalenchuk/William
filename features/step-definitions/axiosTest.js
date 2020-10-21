const axios = require('axios');

const host = 'https://server-stage.pasv.us';

const users = {
    admin: {
        email: 'admin610@qa6.us',
        pass: '321321'
}
}

function adminLogin(user) {
 //   const userRole = (user === 'admin') ? 'admin' : 'student';

    return axios.post(`${host}/user/login`, {
        email: users[user].email,
        password: users[user].pass
    })
        .then(response => response)
        .catch(error => console.log(error))

}
module.exports = { adminLogin }

//console.log( adminLogin(admin))

