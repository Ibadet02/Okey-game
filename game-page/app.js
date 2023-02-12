const chat_size_button = document.querySelector('body main .gameBody-section__middle .chatting .tab-box .tab .change-size')
const chatting_box = document.querySelector('body main .gameBody-section__middle .chatting')
const tabcontent = document.querySelector('body main .gameBody-section__middle .chatting .tab-box .tabcontent')
const chatting_down_icon = document.querySelector('body main .gameBody-section__middle .chatting .tab-box .tab .change-size.minimise .down-icon')
const chatting_up_icon = document.querySelector('body main .gameBody-section__middle .chatting .tab-box .tab .change-size .fa-angle-up')
const gamePlayOpponentBox = document.querySelector('.gamePlay__opponent-box')
const gamePlayArenaOpponentBox = document.querySelector('.gamePlay__arena--opponent-box')
const gamePlayOpponentButton = document.querySelector('body main .gameBody-section__middle .gamePlay .opponent-box .show-hide')
const gamePlayArenaOpponentButton = document.querySelector('body main .gameBody-section__middle .gamePlay__arena .opponent-box .show-hide')
const showGamePlayOpponentText = gamePlayOpponentButton.querySelector('.show')
const hideGamePlayOpponentText = gamePlayOpponentButton.querySelector('.hide')
const showGamePlayArenaOpponentText = gamePlayArenaOpponentButton.querySelector('.show')
const hideGamePlayArenaOpponentText = gamePlayArenaOpponentButton.querySelector('.hide')
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

gamePlayArenaOpponentButton.addEventListener('click', e=>{
    if(window.getComputedStyle(showGamePlayArenaOpponentText).display === 'none'){
        showGamePlayArenaOpponentText.style.display = 'inline'
        hideGamePlayArenaOpponentText.style.display = 'none'
        gamePlayArenaOpponentBox.style.bottom = '-3.5rem'
    }
    else{
        showGamePlayArenaOpponentText.style.display = 'none'
        hideGamePlayArenaOpponentText.style.display = 'inline'
        gamePlayArenaOpponentBox.style.bottom = '0'
    }
})
console.log(gamePlayOpponentButton)
gamePlayOpponentButton.addEventListener('click', e=>{
    console.log('cl9c')
    if(window.getComputedStyle(showGamePlayOpponentText).display === 'none'){
        showGamePlayOpponentText.style.display = 'inline'
        hideGamePlayOpponentText.style.display = 'none'
        gamePlayOpponentBox.style.top = '-3.5rem'
    }
    else{
        showGamePlayOpponentText.style.display = 'none'
        hideGamePlayOpponentText.style.display = 'inline'
        gamePlayOpponentBox.style.top = '.8rem'
    }
})