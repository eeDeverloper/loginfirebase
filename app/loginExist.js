const loggedOut = document.querySelectorAll('.logged-out')
const loggedIn = document.querySelectorAll('.logged-in')
const andTitleNone = document.querySelectorAll('.titleInicioNull')
const andFooterNone = document.querySelectorAll('.subtitleInicioNull')
const nameUserAndWelcome = document.querySelectorAll('.btnWelcomeUser')

export const loginCheckExist = user =>{


    if(user){
        loggedOut.forEach(link => link.style.display = 'none')
        loggedIn.forEach(link => link.style.display = 'block')
        andTitleNone.forEach(link => link.style.display = 'none')
        andFooterNone.forEach(link => link.style.display = 'none')
        nameUserAndWelcome.forEach(link => link.style.display = 'block')
    } else{
        loggedIn.forEach(link => link.style.display = 'none')
        loggedOut.forEach(link => link.style.display = 'block')
        andTitleNone.forEach(link => link.style.display = 'block')
        andFooterNone.forEach(link => link.style.display = 'block')
        nameUserAndWelcome.forEach(link => link.style.display = 'none')
    }

}