import dosa from './assets/dosa.jpg'
import idli from './assets/idli.jpg'
import naan from './assets/naan.jpg'

const contentSelector = document.querySelector('#content')

function headerCreation(){
    const header = document.createElement('header')
    const nameR = document.createElement('div')
    nameR.id = 'name'
    nameR.textContent = 'Chennai Tiffin House'
    const tabs = document.createElement('div')
    tabs.classList.add('tabs')
    const homeTab = document.createElement('div')
    const menuTab = document.createElement('div')
    const contactTab = document.createElement('div')
    homeTab.textContent = 'Home'
    homeTab.style.backgroundColor = 'rgba(255, 77, 77, 0.63)'
    menuTab.textContent = 'Menu'
    contactTab.textContent = 'Contact Us'
    homeTab.classList.add('tab-name')
    menuTab.classList.add('tab-name')
    contactTab.classList.add('tab-name')
    tabs.append(homeTab,menuTab,contactTab)
    header.append(nameR,tabs)
    contentSelector.appendChild(header)
}

function mainCreation(){
    const tabs = document.querySelectorAll('.tab-name')
    tabs[0].style.backgroundColor = 'rgba(255, 77, 77, 0.63)'
    tabs[1].style.backgroundColor = '#D9D9D9'
    tabs[2].style.backgroundColor = '#D9D9D9'
    const main = document.createElement('main')
    main.id = 'main'
    const title = document.createElement('div')
    title.id = 'title'
    title.textContent = 'Welcome to Chennai Tiffin House'
    const homeContent = document.createElement('div')
    homeContent.classList.add('home-content') 
    homeContent.textContent = 'We are number one in serving mouth watery south indian dishes all over in India Since 2000. We offer wide varieties of dishes and sweets which we are known for.'
    const imgL = document.createElement('img')
    const imgC = document.createElement('img')
    const imgR = document.createElement('img')
    const imgContainer = document.createElement('div')
    imgContainer.id = 'img-container'
    imgL.src = idli
    imgC.src = naan
    imgR.src = dosa
    const lastContent = document.createElement('div')
    lastContent.textContent = 'Order online or Visit our outlets !'
    lastContent.classList.add('home-content')
    imgContainer.append(imgL,imgC,imgR)
    main.append(title,homeContent,imgContainer,lastContent)
    contentSelector.insertBefore(main,contentSelector.childNodes[2])
}

function footerCreation(){
    const footer = document.createElement('footer')
    footer.textContent = 'Made with Love by Yogesh S :)'
    contentSelector.append(footer)
}

export { headerCreation,mainCreation,footerCreation };