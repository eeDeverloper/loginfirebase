const userNameNav = document.querySelector('.btnWelcomeUser')
const usernameConfig = document.querySelector('.contNameUser')

export const Cards = async (data) => {
    if (data.length) {
        let html = ''
        data.forEach((doc) => {
            const arreglos = doc.data()
            const text = `<span class="spanTextNavbar" > ${arreglos.name} <span> <i class='bx bxs-chevron-down'></i>`

            const textconfig = `<span class="spanTextNavbarUSER"> ${arreglos.name} <span>`

            userNameNav.innerHTML += text
            usernameConfig.innerHTML = textconfig
        })



    } else {
    }

}