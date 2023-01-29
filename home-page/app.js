const menu_bar = document.querySelector('.menu-bar')
const sidebar_desktop = document.querySelector('.sidebar-desktop')
const body_section__left = document.querySelector('.body-section__left')
const exit_sidebar = document.querySelector('.sidebar-exit-button')
const tables = document.querySelector('.tables')
const change_chat_size = document.querySelector('.change-size');
const chat_box = document.querySelector('.chatting')
const tables_container = document.querySelector('.tables-container')
const halls_button = document.querySelector('.halls-button')
const hall_section = document.querySelector('.hall-section')
const leave_halls_button = document.getElementById('exit-hall')
const animation_background =document.querySelector('.animation-background')
// const mobile_nav = document.querySelector('.mobile-nav')
// menu_bar.addEventListener('click', ()=>{
//     menu_bar.classList.toggle('change')
//     mobile_nav.classList.toggle('change')
// })

menu_bar.addEventListener('click', e=>{
    sidebar_desktop.classList.add('open')
    animation_background.classList.remove('deactive')
    animation_background.classList.add('coming')
    animation_background.addEventListener('animationend', e=>{
        animation_background.classList.remove('coming')
    }, {once:true})
    // body_section__left.classList.add('narrow')
    // tables.style.gridTemplateColumns = 'repeat(2, 1fr)'
})
Array.from([exit_sidebar, animation_background]).forEach(el=>{
    el.addEventListener('click', e=>{
        sidebar_desktop.classList.remove('open')
        animation_background.classList.add('leaving')
        animation_background.addEventListener('animationend',e=>{
            animation_background.classList.remove('leaving')
            animation_background.classList.add('deactive')
        }, {once: true})
        // body_section__left.classList.remove('narrow')
        // tables.style.gridTemplateColumns = 'repeat(3, 1fr)'
    })
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

halls_button.addEventListener('click', e=>{
    hall_section.classList.remove('deactive')
    hall_section.classList.add('coming')
    animation_background.classList.remove('deactive')
    animation_background.classList.add('coming')
    hall_section.addEventListener('animationend', e=>{
        hall_section.classList.remove('coming')
        animation_background.classList.remove('coming')
    }, {once: true})
})

Array.from([leave_halls_button, animation_background]).forEach(el=>{
    el.addEventListener('click', e=>{
        hall_section.classList.add('leaving')
        animation_background.classList.add('leaving')
        hall_section.addEventListener('animationend',e=>{
            hall_section.classList.remove('leaving')
            hall_section.classList.add('deactive')
            animation_background.classList.remove('leaving')
            animation_background.classList.add('deactive')
        }, {once: true})
    })
})