const cardList = document.querySelector('.cardList')

export const setCards = async (data) => {
    if (data.length) {
        let html = ''
        data.forEach((doc) => {
            const card = doc.data()
            const text = `
            <div class="alert alert-dismissible alert-primary m-4 text-center">
            <h4 class="alert-heading">${card.title}</h4>
            <p class="mb-0">${card.description}</p>
            </div>
            `

            html += text
        })

        cardList.innerHTML = html

    } else {
    }

}