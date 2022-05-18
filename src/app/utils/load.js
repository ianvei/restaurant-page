// let loadWepbage = function(){
//     return console.log('I am loading')
// }

export function loadWebpage(){
    // header //
    let contentAppend = document.getElementById('content')
    
    let page = document.createElement('div')
    page.classList.add('page')

    let header = document.createElement("div")
    header.classList.add('header')

    let above = document.createElement("div")
    above.classList.add('above')

    let ls = document.createElement("div")
    ls.classList.add('ls')

    let rs = document.createElement("div")
    rs.classList.add('rs')

    let lsp1 = document.createElement("p")
    lsp1.textContent ="Access"

    let lsp2 = document.createElement("p")
    lsp2.textContent ="About"

    let lsp3 = document.createElement("p")
    lsp3.textContent ="info@manpuku.jp"

    let rsp1 = document.createElement("p")
    rsp1.textContent ="Instagram"

    let rsp2 = document.createElement("p")
    rsp2.textContent ="Twitter"

    contentAppend.appendChild(page)
    let pageAppend = document.querySelector('.page')
    console.log(pageAppend)
    pageAppend.appendChild(header)

    let headerAppend = document.querySelector('.header')
    headerAppend.appendChild(above)

    let aboveAppend = document.querySelector('.above')
    aboveAppend.appendChild(ls)
    aboveAppend.appendChild(rs)

    let lsAppend = document.querySelector('.ls')
    lsAppend.appendChild(lsp1)
    lsAppend.appendChild(lsp2)
    lsAppend.appendChild(lsp3)
    
    let rsAppend = document.querySelector('.rs')
    rsAppend.appendChild(rsp1)
    rsAppend.appendChild(rsp2)

    let below = document.createElement('div')
    below.classList.add('below')
    headerAppend.appendChild(below)

    let belowp1 = document.createElement('p')
    belowp1.textContent = 'News'
    let belowp2 = document.createElement('p')
    belowp2.textContent = 'Subscribe to our newsletter'

    let belowAppend = document.querySelector('.below')
    belowAppend.appendChild(belowp1)
    belowAppend.appendChild(belowp2)
    // header //

    
    return console.log('I am loading')

}