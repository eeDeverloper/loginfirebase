import { signOut } from "https://www.gstatic.com/firebasejs/9.10.0/firebase-auth.js";
import { auth } from './host.js'

const LOGOUT = document.querySelector('#btnLogout')


LOGOUT.addEventListener('click', async () => {
    await signOut(auth)

    location.reload()

    Toastify({
        text: "Sesion cerrada correctamente!",
        duration: 3000,
        newWindow: true,
        close: true,
        gravity: "top", // `top` or `bottom`
        position: "right", // `left`, `center` or `right`
        stopOnFocus: true, // Prevents dismissing of toast on hover
        style: {
            background: "#1a1a1a;",
        }
    }).showToast()
});