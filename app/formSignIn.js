import { signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/9.10.0/firebase-auth.js";
import { auth } from './host.js'

const signinForm = document.querySelector('#form-signin')

signinForm.addEventListener('submit', async (e) => {
    e.preventDefault()

    const emailSignIn = signinForm['emailInputSignIn'].value
    const passwordSignIn = signinForm['passwordInputSignIn'].value

    try {
        const CREDENTIALSINIT = await signInWithEmailAndPassword(auth, emailSignIn, passwordSignIn)

        const modalFormSignIn = document.querySelector('#signinModal')
        const modalCloseSignIn = bootstrap.Modal.getInstance(modalFormSignIn)
        modalCloseSignIn.hide()

        Toastify({
            text: "Sesion iniciada correctamente!",
            duration: 3000,
            newWindow: true,
            close: true,
            gravity: "top", // `top` or `bottom`
            position: "right", // `left`, `center` or `right`
            stopOnFocus: true, // Prevents dismissing of toast on hover
            style: {
                background: "#1a1a1a",
            }
        }).showToast()

    } catch (error) {
        if(error.code === 'auth/invalid-password'){
            Toastify({
                text: "La contraseña es incorrecta.",
                duration: 3000,
                newWindow: true,
                gravity: "top", // `top` or `bottom`
                position: "right", // `left`, `center` or `right`
                stopOnFocus: true, // Prevents dismissing of toast on hover
                style: {
                    background: "#FF0000",
                }
            }).showToast()
        }
    }

});