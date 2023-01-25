const menu_bar = document.querySelector('.menu-bar')
const mobile_nav = document.querySelector('.mobile-nav')
menu_bar.addEventListener('click', ()=>{
    menu_bar.classList.toggle('change')
    mobile_nav.classList.toggle('change')
})

window.addEventListener('resize', e=>{
    
})