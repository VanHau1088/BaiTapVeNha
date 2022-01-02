import signUp from './signUp.js'

const signUpUI = new signUp()

document.querySelector('#app').append(signUpUI.render())