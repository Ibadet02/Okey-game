const menu_bar = document.querySelector('.menu-bar')
const sidebar_desktop = document.querySelector('.sidebar-desktop')
const body_section__left = document.querySelector('.body-section__left')
const exit_sidebar = document.querySelector('.exit-sidebar-button')
const tables = document.querySelector('.tables')
// const mobile_nav = document.querySelector('.mobile-nav')
// menu_bar.addEventListener('click', ()=>{
//     menu_bar.classList.toggle('change')
//     mobile_nav.classList.toggle('change')
// })

menu_bar.addEventListener('click', e=>{
    sidebar_desktop.classList.add('open')
    // body_section__left.classList.add('narrow')
    // tables.style.gridTemplateColumns = 'repeat(2, 1fr)'
})
exit_sidebar.addEventListener('click', e=>{
    sidebar_desktop.classList.remove('open')
    // body_section__left.classList.remove('narrow')
    // tables.style.gridTemplateColumns = 'repeat(3, 1fr)'
})