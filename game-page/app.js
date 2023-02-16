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

// move cards

const boardCards = document.querySelectorAll('.gamePlay img')
const boardGrids = document.querySelectorAll('.gamePlay .board-grid')

let currentDroppable = null;


boardCards.forEach(boardCard=>{
    boardCard.addEventListener('dragstart', dragStart)
    boardCard.addEventListener('dragend', dragEnd)
})

function dragStart(){
    // console.log('dragStart')
    currentDroppable = this
    setTimeout(()=>{
        this.style.display = 'none'
    }, 0)
}
function dragEnd(){
    // console.log('dragEnd')
    currentDroppable = null
    setTimeout(()=>{
        this.style.display = 'inline'
    }, 0)
}

boardGrids.forEach(boardGrid=>{
    boardGrid.addEventListener('dragover', dragOver)
    boardGrid.addEventListener('dragenter', dragEnter)
    boardGrid.addEventListener('dragleave', dragLeave)
    boardGrid.addEventListener('drop', dragDrop)

})
let goTo = ''
function dragOver(e){
    // console.log('dragOver')
    // let rect = this.getClientRects();
    e.preventDefault()
    // console.log(this)
    if(this.hasChildNodes() && this.firstElementChild !== null && window.getComputedStyle(this.firstElementChild).display !== 'none'){
        let bounds = this.getBoundingClientRect()
        let x = e.clientX - bounds.left
        let boardGridWidth = bounds.width
        let currentPositionElement = this
        let positionElements = []
        if(x < boardGridWidth/2){
            // goTo = 'right'
            while(currentPositionElement){
                if(currentPositionElement.hasChildNodes()){
                    positionElements.push(currentPositionElement)
                    currentPositionElement = currentPositionElement.nextElementSibling
                }
                else{
                    break;
                }
            }
            // positionElements.forEach((grid, index, array)=>{
            //     grid.firstElementChild.style.left = boardGridWidth + 'px'
            //     grid.addEventListener('transitionend', e=>{
            //         if(grid.hasChildNodes() && grid.firstElementChild !== null && window.getComputedStyle(grid.firstElementChild).display !== 'none'){
            //             console.log('if' + grid.firstElementChild)
            //             // grid.firstElementChild.remove()
            //             // grid.nextElementSibling.firstElementChild.remove()
            //             // grid.nextElementSibling.appendChild(grid)
            //             // grid.firstElementChild.style.display = 'none'
            //         }
            //         else{
            //             console.log('else' + grid.firstElementChild)
            //         }
            //         // grid.hasChildNodes() && grid.firstElementChild.remove()
            //         // console.log(grid.firstElementChild)
            //         // console.log(grid.nextElementSibling.firstElementChild)
            //         // // console.log(grid.nextElementSibling)
            //         // grid.hasChildNodes() && grid.firstElementChild.remove()
            //         // grid.nextElementSibling.hasChildNodes() && grid.nextElementSibling.firstElementChild.remove()
            //         // grid.nextElementSibling.appendChild(grid)
            //         // console.log(index)
            //     })
            // })
        }
        else{
            // goTo = 'left'
        }
    }
    else{
        this.style.background = 'rgba(104, 59, 3, 1)'
    }
    // console.log(arr)
}
function dragEnter(e){
    // console.log('dragEnter')
    // let arr = []
    // if(this.hasChildNodes() && this.firstElementChild !== null && window.getComputedStyle(this.firstElementChild).display !== 'none'){
    //     let bounds = this.getBoundingClientRect()
    //     let x = e.clientX - bounds.left
    //     let boardGridWidth = bounds.width
    //     if(x < boardGridWidth/2){
    //         // goTo = 'left'
    //         let currentPositionElement = this.nextElementSibling
    //         while(currentPositionElement){
    //             arr.push(currentPositionElement)
    //             currentPositionElement = currentPositionElement.nextElementSibling
    //         }
    //     }
    //     else{
    //         // goTo = 'right'
    //     }
    // }
    // console.log(arr)
}
function dragLeave(){
    // console.log('dragLeave')
    if(this.tagName !== 'IMG'){
        this.style.background = 'transparent'
    }
    else{
        return
    }
}
function dragDrop(e){
    // console.log('dragDrop')
    // console.log(e.target.tagName)
    if(e.target.tagName !== 'IMG'){
        this.appendChild(currentDroppable)
    }
    else{
        return
    }
}


// boardCards.forEach(boardCard=>{
//     boardCard.addEventListener('mousedown', e=>{
//         boardCard.style.width = boardCard.offsetWidth + 'px'
//         boardCard.style.height = boardCard.offsetHeight + 'px'
//         let shiftX = e.clientX - boardCard.getBoundingClientRect().left;
//         let shiftY = e.clientY - boardCard.getBoundingClientRect().top;
//         boardCard.style.position = 'absolute';
//         boardCard.style.zIndex = 1000;
//         document.body.append(boardCard);

//         moveAt(e.pageX, e.pageY);

//         function moveAt(pageX, pageY) {
//             boardCard.style.left = pageX - shiftX + 'px';
//             boardCard.style.top = pageY - shiftY + 'px';
//         }
//         function onMouseMove(event) {
//             moveAt(event.pageX, event.pageY);
    
//             boardCard.hidden = true;
//             let elemBelow = document.elementFromPoint(event.clientX, event.clientY);
//             boardCard.hidden = false;
    
//             if (!elemBelow) return;
    
//             let droppableBelow = elemBelow.closest('.droppable');
//             if (currentDroppable != droppableBelow) {
//               if (currentDroppable) { // null when we were not over a droppable before this event
//                 leaveDroppable(currentDroppable);
//               }
//               currentDroppable = droppableBelow;
//               if (currentDroppable) { // null if we're not coming over a droppable now
//                 // (maybe just left the droppable)
//                 enterDroppable(currentDroppable);
//               }
//             }
//         }
//         document.addEventListener('mousemove', onMouseMove);

//         boardCard.onmouseup = function() {
//             document.removeEventListener('mousemove', onMouseMove);
//             boardCard.onmouseup = null;
//         };
//     })
// })

// function enterDroppable(elem) {
//     elem.style.background = 'pink';
// }

// function leaveDroppable(elem) {
//     elem.style.background = '';
// }


// boardCards.forEach(boardCard=>{
//     boardCard.ondragstart = function() {
//         return false;
//     };
// })


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
gamePlayOpponentButton.addEventListener('click', e=>{
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