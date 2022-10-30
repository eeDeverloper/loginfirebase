import { GoogleAuthProvider, signInWithPopup } from 'https://www.gstatic.com/firebasejs/9.10.0/firebase-auth.js';
import { auth } from './host.js'

const GoogleSignIn = document.querySelector('#buttonGoogle');

GoogleSignIn.addEventListener('click', async () => {

    const providerGoogleAuth =  new GoogleAuthProvider()

    const modalFormSignIn = document.querySelector('#signinModal')
    const modalCloseSignIn = bootstrap.Modal.getInstance(modalFormSignIn)
    modalCloseSignIn.hide()

    try {
        const userGoogleCredentials = await signInWithPopup(auth, providerGoogleAuth)
    } catch (error) {
        console.log(error)
    }

})