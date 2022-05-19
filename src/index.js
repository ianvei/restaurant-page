
import { loadWebpage } from './app/utils/load.js'
import { loadMenu } from './app/utils/menu.js'


// IDEA, EACH TIME THE PAGE REFRESHES THE EVENT LISTENERS ARE REMOVED FROM THE BUTTONS. MUST ADD THEM ANY TIME AN ELEMENT IS RENDERED

let firstLoadFlag = true

if (firstLoadFlag){
    loadWebpage()
    firstLoadFlag = false
}

let loadListener = document.querySelector('.main')
let menuListener = document.querySelector('.menu')
let infoListener = document.querySelector('.Info')

menuListener.addEventListener('click', loadMenu)

loadListener.addEventListener('click', loadWebpage)

infoListener.addEventListener('click', console.log('info'))

