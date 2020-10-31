const axios = require('axios');
const users = require('../../data/users')
const host = 'https://server-stage.pasv.us';


function apiCreateNewUser() {
    return axios.post(`${host}/user`,
        users.new
    )
        .then(res => res)
        .catch(error => error);

}

function apiUserLogin(user) {
    return axios.post(`${host}/user/login`, {
        email: users[user].email,
        password: users[user].password
    })
        .then(response => response)
        .catch(error => console.log(error))
}
module.exports = { apiCreateNewUser, apiUserLogin };

/*
after(async () => {
    const delUser = await axios({
        method: 'delete',
        url: `${host}/user/email/${newUser.email}`,
        headers : {
            Authorization: token
        }
    })
        .then(res => res.data)
        .catch(err => err.response.data)
    console.log(delUser)
    expect(delUser.success).true
});

it('API check the new user', async ()  => {
    const arr = await axios({
        method: 'get',
        url: `${host}/user/email/${newUser.email}`,
        headers : {
            Authorization: token
        }
    })
        .then(res => res.data)
        .catch(err => err.response.data)
    console.log(arr)
    expect(arr.payload.name).eq(`${newUser.firstName} ${newUser.lastName}`)
});*/
