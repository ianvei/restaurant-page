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

    // nav //
    let nav = document.createElement('div')
    nav.classList.add('nav')
    pageAppend.appendChild(nav)

    let navAppend = document.querySelector('.nav')
    let navContent = document.createElement('div')
    navContent.classList.add('nav-content')
    navAppend.appendChild(navContent)

    let navh1 = document.createElement('h2')
    navh1.textContent = 'Main'

    let navh2 = document.createElement('h2')
    navh2.textContent = 'Menu'

    let navh3 = document.createElement('h2')
    navh3.textContent = 'Info'

    let navContentAppend = document.querySelector('.nav-content')
    navContentAppend.appendChild(navh1)
    navContentAppend.appendChild(navh2)
    navContentAppend.appendChild(navh3)
    // nav //

    //body-content//
    let bodyContent = document.createElement('div')
    bodyContent.classList.add('body-content')
    pageAppend.appendChild(bodyContent)

    let bodySection = document.createElement('div')
    bodySection.classList.add('body-section')

    let bodyContentAppend = document.querySelector('.body-content')
    bodyContent.appendChild(bodySection)

    let bodySectionImg = document.createElement('img')
    bodySectionImg.setAttribute('src', "/src/manpuku.jpeg")
    bodySectionImg.setAttribute('alt', "restaurant storefront")
    bodySectionImg.setAttribute('class', "storefront-img")
    
    let bodySectionAppend = document.querySelector('.body-section')
    bodySectionAppend.appendChild(bodySectionImg)

    let mainContentText = document.createElement('div')
    mainContentText.classList.add('main-content-text')

    let bodySectionp1 = document.createElement('p')
    bodySectionp1.textContent = "OUR STOREFRONT"
    let bodySectionp2 = document.createElement('p')
    bodySectionp2.textContent = "We are a restaurant in Toronto bringing the most authentic Japanese Food to the City"
    let bodySectionp3 = document.createElement('p')
    bodySectionp3.textContent = "写真家の川島小鳥主宰のブックレーベルpiyo piyo pressの出版２タイトル「（世界）² / 川島小鳥x仲野太賀」「花とイルカとユニコーン / 小橋陽介」とオリジナルトートバッグが再入荷しました。 以下関連商品お買い上げの方に、小橋陽介がジョウビタキを描いたpiyo piyo press（世界）²　特製ステッカーを差し上げます。"

    mainContentText.appendChild(bodySectionp1)
    mainContentText.appendChild(bodySectionp2)
    mainContentText.appendChild(bodySectionp3)
    bodySectionAppend.appendChild(mainContentText)






    return console.log('I am loading')
}