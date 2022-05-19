

export function loadMenu(){
    let menuListener = document.querySelector('.menu')
    menuListener.addEventListener('click', loadMenu)

    console.log('this is menu')
    let bodySectionDelete = document.querySelector('.body-section')
    console.log(bodySectionDelete)
    bodySectionDelete.remove()

    let newBodySection = document.createElement('div')
    newBodySection.classList.add('body-section')
    newBodySection.setAttribute('id', 'menu')

    let bodyContentAppendMenu = document.querySelector('.body-content')
    bodyContentAppendMenu.appendChild(newBodySection)

    let menuItem1 = document.createElement('div')
    menuItem1.classList.add('menu-item')
    let food1 = document.createElement('div')
    food1.classList.add('food')
    food1.innerText = 'shigure don / しぐれ 丼'
    let price1 = document.createElement('div')
    price1.classList.add('price')
    price1.innerText = '$7.49'

    let menuItem2 = document.createElement('div')
    menuItem2.classList.add('menu-item')
    let food2 = document.createElement('div')
    food2.classList.add('food')
    food2.innerText = 'curry don / カレードン'
    let price2 = document.createElement('div')
    price2.classList.add('price')
    price2.innerText = '$7.99'

    let menuItem3 = document.createElement('div')
    menuItem3.classList.add('menu-item')
    let food3 = document.createElement('div')
    food3.classList.add('food')
    food3.innerText = 'niku udon / 肉 うどん'
    let price3 = document.createElement('div')
    price3.classList.add('price')
    price3.innerText = '$6.99'

    let menuItem4 = document.createElement('div')
    menuItem4.classList.add('menu-item')
    let food4 = document.createElement('div')
    food4.classList.add('food')
    food4.innerText = 'ochazuke / お茶漬け'
    let price4 = document.createElement('div')
    price4.classList.add('price')
    price4.innerText = '$4.29'



    let menuWrapper = document.createElement('div')
    menuWrapper.classList.add('menu-wrapper')
    let newBodySectionAppend = document.querySelector('.body-section')
    newBodySectionAppend.appendChild(menuWrapper)

    let menuWrapperAppend = document.querySelector('.menu-wrapper')
    menuWrapperAppend.appendChild(menuItem1)
    menuWrapperAppend.appendChild(menuItem2)
    menuWrapperAppend.appendChild(menuItem3)
    menuWrapperAppend.appendChild(menuItem4)

    menuItem1.appendChild(food1)
    menuItem1.appendChild(price1)

    menuItem2.appendChild(food2)
    menuItem2.appendChild(price2)

    menuItem3.appendChild(food3)
    menuItem3.appendChild(price3)

    menuItem4.appendChild(food4)
    menuItem4.appendChild(price4)

    
    
}