import axios from 'axios'

export const register = newUser => {
    return axios
    .post('users/register', {
        name: newUser.name,
        username: newUser.username,
        password: newUser.password
    })
    .then(res => {
        console.log ('Registerd!')
    })
}

export const login = user => {
    return axios
    .post('users/login', {
        username: user.username,
        password: user.password
    })
    .then(res => {
        localStorage.setItem('usertoken', res.data)
        return res.data
    })
    .catch(err => {
        console.log(err)
    })
}

