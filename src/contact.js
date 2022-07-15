import call from './assets/call.svg'
import contact from './assets/contact.svg'
import mapShot from './assets/street-map.png'

const contentSelector = document.querySelector('#content')

function contactCreation(){
    const tabs = document.querySelectorAll('.tab-name')
    tabs[0].style.backgroundColor = '#D9D9D9'
    tabs[1].style.backgroundColor = '#D9D9D9'
    tabs[2].style.backgroundColor = 'rgba(255, 77, 77, 0.63)'
    const contactTab = document.createElement('div')
    contactTab.id = 'contact-container'
    const contactContainer = document.createElement('div')
    contactContainer.classList.add('contact-section')
    const address = document.createElement('div')
    address.setAttribute('style', 'white-space: pre;');
    address.textContent = 'Address:\r\n' 
    address.textContent += '221B Baker St, \r\n'   
    address.textContent += 'Marylebone, London NW1 6XE, \r\n'   
    address.textContent += 'United Kingdom.'
    const contactNum = document.createElement('div')
    contactNum.classList.add('contact-number')
    const heading = document.createElement('div')
    heading.textContent = 'Contact Us:'
    contactNum.innerHTML = call
    const number = document.createElement('div')
    number.textContent = '044-12345678'
    contactNum.append(number)
    const mail = document.createElement('div')
    mail.classList.add('mail-id')
    mail.innerHTML = contact
    const mailId = document.createElement('div')
    mailId.textContent = 'chennaiTiffinHouse111@outlook.com'
    mail.append(mailId)
    contactContainer.append(address,heading,contactNum,mail)
    const mapContainer = document.createElement('div')
    mapContainer.classList.add('map')
    const mapImg = document.createElement('img')
    mapImg.src = mapShot
    mapContainer.append(mapImg)
    contactTab.append(contactContainer,mapContainer)
    contentSelector.insertBefore(contactTab,contentSelector.childNodes[2])
}

export {contactCreation};