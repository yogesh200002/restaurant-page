import { headerCreation,mainCreation,footerCreation } from './initial-page-load';
import { menuCreation } from './menu';
import { contactCreation } from './contact';
import './styles.css';

headerCreation()
mainCreation()
footerCreation()

const tabs = document.querySelectorAll('.tab-name')
const header = document.querySelector('header')

tabs[0].addEventListener('click',()=>{
    if(document.getElementById('main')){
        return
    }
    else if(document.getElementById('menu-container') != null){
        document.getElementById('menu-container').remove()
        mainCreation()
    }
    else if(document.getElementById('contact-container') != null){
        document.getElementById('contact-container').remove()
        mainCreation()
    }
})
tabs[1].addEventListener('click',()=>{
    console.log(document.getElementById('main'),document.getElementById('menu-container'),document.getElementById('contact-container'))
    if(document.getElementById('menu-container')){
        return
    }
    else if(document.getElementById('main') != null){
        document.getElementById('main').remove()
        menuCreation()
    }
    else if(document.getElementById('contact-container') != null){
        document.getElementById('contact-container').remove()
        menuCreation()
    }
})
tabs[2].addEventListener('click',()=>{
    if(document.getElementById('contact-container')){
        return
    }
    else if(document.getElementById('main') != null){
        document.getElementById('main').remove()
        contactCreation()
    }
    else if(document.getElementById('menu-container') != null){
        document.getElementById('menu-container').remove()
        contactCreation()
    }
})

