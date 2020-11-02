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

async function getAdminToken() {
    return await axios.post(`${host}/user/login`, {
        email: users.admin.email,
        password: users.admin.password,
    })
        .then(res => {
            process.env.ADMIN_TOKEN = res.data.token;
        })
        .catch(error => console.log(error));
}

function adminGetUserById(user) {
    const userRole = user === 'new' ? process.env.NEW_USER_ID : '';
    return axios.get(`${host}/user/${userRole}`, {
        headers: {
            Authorization: process.env.ADMIN_TOKEN
        }
    })
        .then(res => res)
        .catch(error => console.log(error))
}

function settingsUpdate(userRole, update, newData) {
    const userId = userRole === 'new' ? process.env.NEW_USER_ID : '';
    const userToken = userRole === 'new' ? process.env.NEW_USER_TOKEN : '';
    return axios.patch(`${host}/user/settings/${update}`, {
            userId: userId,
            oldPassword: users[userRole].password,
            newPassword: newData,
            confirmPassword: newData
        },
        {
            headers: {
                Authorization: userToken
            }
        }
    )
        .then(users[userRole].password = newData)
        .catch(error => console.log(error))
}

function deleteUser(userRole) {
    const userId = userRole === 'new' ? process.env.NEW_USER_ID : '';
    return axios.delete(`${host}/user/${userId}`, {
        headers: {
            Authorization: process.env.ADMIN_TOKEN
        }
    })
        .then(res => res)
        .catch(error => console.log(error))
}

module.exports = {
    apiCreateNewUser, apiUserLogin, adminGetUserById,
    getAdminToken, settingsUpdate, deleteUser
};

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
