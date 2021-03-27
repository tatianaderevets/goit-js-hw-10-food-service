import dishesList from '../menu.json'
import itemsTemplate from '../templates/menu-items.hbs'

const menuRef = document.querySelector('.js-menu');
const markup = itemsTemplate(dishesList)

menuRef.insertAdjacentHTML('afterbegin', markup)
