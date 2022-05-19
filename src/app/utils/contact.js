export function info(){
    let ip1 = "Manpuku Modern Japanese Eatery is a concept that builds on the fundamental elements of three key words: “EAT, DRINK, and ENJOY”. These are the principles that build the foundation and set the standard for the company and staff."
    let ip2 = "Established in May 2008, Manpuku brings together under one roof an assortment rice dishes, noodle dishes, and an array of speciality snacks not commonly found in the North American food market."
    let ip3 = "It is with this uniqueness that strives Manpuku to become a one of a kind eatery. By providing the customers with an authentic food and service experience, customers will feel as if they have stepped into a restaurant in the heart of Japan."
    let ip4 = "One of the key features of Manpuku is the U-shaped counter and open kitchen concept that allows customers to observe as well as interact with the staff."
    let ip5 = "Manpuku is a welcoming place built for people coming as an individual, a couple, a family, or a group. Whether big or small, Manpuku offers comfort, service and intergrity built upon three basic principles, so please..."
    
    let bodySectionDelete = document.querySelector('.body-section')
    console.log(bodySectionDelete)
    bodySectionDelete.remove()

    let newBodySection = document.createElement('div')
    newBodySection.classList.add('body-section')
    newBodySection.setAttribute('id', 'info')

    let bodyContentAppendMenu = document.querySelector('.body-content')
    bodyContentAppendMenu.appendChild(newBodySection)

    let paragraphWrapper = document.createElement('div')
    paragraphWrapper.classList.add('paragraph-wrapper')
    let newBodySectionAppend = document.querySelector('.body-section')
    newBodySectionAppend.appendChild(paragraphWrapper)

    let infop1 = paragraphWrapper = document.createElement('p')
    infop1.textContent = ip1

    let infop2 = paragraphWrapper = document.createElement('p')
    infop2.textContent = ip2

    let infop3 = paragraphWrapper = document.createElement('p')
    infop3.textContent = ip3

    let infop4 = paragraphWrapper = document.createElement('p')
    infop4.textContent = ip4

    let infop5 = paragraphWrapper = document.createElement('p')
    infop5.textContent = ip5

    let eatDrink = document.createElement('h3')
    eatDrink.textContent = "EAT DRINK ENJOY"

    let paragraphWrapperAppend = document.querySelector(".paragraph-wrapper")
    paragraphWrapperAppend.appendChild(infop1)
    paragraphWrapperAppend.appendChild(infop2)
    paragraphWrapperAppend.appendChild(infop3)
    paragraphWrapperAppend.appendChild(infop4)
    paragraphWrapperAppend.appendChild(infop5)
    paragraphWrapperAppend.appendChild(eatDrink)


}