import { onAuthStateChanged } from "https://www.gstatic.com/firebasejs/9.10.0/firebase-auth.js";
import {auth, db} from './host.js'
import {getDocs, collection, setDoc} from "https://www.gstatic.com/firebasejs/9.10.0/firebase-firestore.js";

import './form.js'
import './logout.js'
import './loginExist.js'
import {loginCheckExist} from './loginExist.js'
import { setCards } from "./setCards.js";
import { Cards } from "./Cards.js";

onAuthStateChanged(auth, async (user) => {

    const UsernameGOOGLE = document.querySelector(".userNameGoogle")
    const UsernameNORMAL = document.querySelector(".userNameGoogle")
    const imageAvatarUser = document.querySelector('.imgAvatarSignIn')
    const usernameConfig = document.querySelector('.userNameConfig')
    const emailConfig = document.querySelector('.emailConfig')
    const USERCONFIGURACION = document.querySelector('.userNameConfig')
    const signupForm = document.querySelector('#form-signup')
    

    if(user){
        loginCheckExist(user)
        const querySnapshot = await getDocs(collection(db, "images"));
        setCards(querySnapshot.docs)

        const AGREGARDATOS = await getDocs(collection(db, "users"))
        Cards(AGREGARDATOS.docs)


        const userName = auth.currentUser.displayName;
        UsernameGOOGLE.innerHTML = userName

        const nameUser  = auth.currentUser.displayName;
        usernameConfig.innerHTML = nameUser

        const emailConfigValue = auth.currentUser.email;
        emailConfig.innerHTML = emailConfigValue;




        


    } else{
        setCards([])
    }
    loginCheckExist(user)
})