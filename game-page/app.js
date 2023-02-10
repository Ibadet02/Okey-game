const chat_size_button = document.querySelector('body main .gameBody-section__middle .chatting .tab-box .tab .change-size')
const chatting_box = document.querySelector('body main .gameBody-section__middle .chatting')
const tabcontent = document.querySelector('body main .gameBody-section__middle .chatting .tab-box .tabcontent')
const chatting_down_icon = document.querySelector('body main .gameBody-section__middle .chatting .tab-box .tab .change-size.minimise .down-icon')
const chatting_up_icon = document.querySelector('body main .gameBody-section__middle .chatting .tab-box .tab .change-size .fa-angle-up')
chat_size_button.addEventListener('click', e=>{
    if(window.getComputedStyle(chatting_up_icon).display !== 'none'){
        chatting_box.style.transition = 'height .2s'
        tabcontent.style.height = '100%'
        // tabcontent.style.flex = '1'
        chatting_box.classList.remove('minimise')
        chatting_box.classList.add('maximise')
        chatting_up_icon.style.display = 'none'
        chatting_down_icon.style.display = 'inline'
    }
    else{
        chatting_box.style.transition = 'height .2s'
        tabcontent.style.height = ''
        // tabcontent.style.flex = 'none'
        chatting_box.classList.add('minimise')
        chatting_box.classList.remove('maximise')
        chatting_up_icon.style.display = 'inline'
        chatting_down_icon.style.display = 'none'
    }
})