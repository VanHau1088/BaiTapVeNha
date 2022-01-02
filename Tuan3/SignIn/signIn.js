
class signIn{
    container;
    title;
    inputUserName;
    inputPassWord;
    buttonSignIn;

    constructor() {
        this.container = document.createElement('div')
        this.title = document.createElement('h1')
        this.inputUserName = document.createElement('input')
        this.inputPassWord = document.createElement('input')
        this.buttonSignIn = document.createElement('button')

        // content
        this.title.innerHTML = 'Sign In '
        this.inputUserName.placeholder = 'User Name'
        this.inputPassWord.placeholder = 'Pass Word'
        this.buttonSignIn.innerHTML = 'Sign In'

        // id
        this.container.id = 'container'

    }

    render() {
        this.container.append( this.title, this.inputUserName, this.inputPassWord, this.buttonSignIn )
        return this.container
    }
}
export default signIn;