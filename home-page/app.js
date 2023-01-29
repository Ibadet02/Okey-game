const menu_bar = document.querySelector('.menu-bar')
const sidebar_desktop = document.querySelector('.sidebar-desktop')
const body_section__left = document.querySelector('.body-section__left')
const exit_sidebar = document.querySelector('.sidebar-exit-button')
const tables = document.querySelector('.tables')
const change_chat_size = document.querySelector('.change-size');
const chat_box = document.querySelector('.chatting')
const tables_container = document.querySelector('.tables-container')
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

change_chat_size.addEventListener('click', e=>{
    chat_box.classList.toggle('maximise')
    tables_container.classList.toggle('minimise')
    if(change_chat_size.classList.contains('maximise')){
        change_chat_size.classList.remove('maximise')
        change_chat_size.classList.add('minimise')
    }
    else{
        change_chat_size.classList.add('maximise')
        change_chat_size.classList.remove('minimise')
    }
})