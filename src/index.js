
import { loadWebpage } from './app/utils/load.js'
import { loadMenu } from './app/utils/menu.js'

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

