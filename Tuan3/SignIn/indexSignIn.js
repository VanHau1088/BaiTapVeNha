import signIn from './signIn.js'

const signInUI = new signIn()

document.querySelector('#app').append(signInUI.render())