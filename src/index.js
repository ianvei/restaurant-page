console.log('Parker')
console.log('tarker')
import { loadWebpage } from './app/utils/load.js'
import { loadMenu } from './app/utils/menu.js'

let firstLoadFlag = true

if (firstLoadFlag){
    loadWebpage(firstLoadFlag)
}

let loadListener = document.querySelector('.main')
let menuListener = document.querySelector('.menu')

loadListener.addEventListener('click', loadWebpage)

menuListener.addEventListener('click', loadMenu)
