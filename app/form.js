import { createUserWithEmailAndPassword} from "https://www.gstatic.com/firebasejs/9.10.0/firebase-auth.js";
import { auth, db } from './host.js'
import { doc, addDoc } from "https://www.gstatic.com/firebasejs/9.10.0/firebase-firestore.js";

const signupForm = document.querySelector('#form-signup')

signupForm.addEventListener('submit', async (e) => {
    e.preventDefault()
    const email = signupForm['emailInput'].value
    const password = signupForm['passwordInput'].value


    try {
        let html = ''
        const CREDENTIALS = await createUserWithEmailAndPassword(auth, email, password)

        const modalForm = document.querySelector('#signUpModal')
        const modalClose = bootstrap.Modal.getInstance(modalForm)
        modalClose.hide()

        Toastify({
            text: "Usuario creado correctamente!",
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
        if(error.code === 'auth/invalid-email'){
            Toastify({
                text: "Correo invalido.",
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

        if(error.code === 'auth/email-already-exists'){
            Toastify({
                text: "El correo ya esta en uso.",
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

        if(error.code === 'auth/weak-password'){
            Toastify({
                text: "La contraseña es demasiado debil!",
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

