const signin_form = document.querySelector('.signin-form')
const have_account_button = document.querySelector('.have-account a')
const be_member_button = document.querySelector('.be-member')
const forget_password_button = document.querySelector('.forget-password a')
const signup_form = document.querySelector('.signup-form')
const forget_password_form = document.querySelector('.forget-password-form')
const logo_area = document.querySelector('.logo-area')
const back_to_signin_button = document.getElementById('back-to-signin')
have_account_button.addEventListener('click', e=>{
    signup_form.classList.add('signup-closing')
    signup_form.addEventListener('animationend', e=>{
        signup_form.classList.remove('signup-closing')
        signin_form.classList.add('signin-opening')
        signup_form.classList.add('de-active')
        signin_form.classList.remove('de-active')
    }, {once:true})
    signin_form.addEventListener('animationend', ev=>{
        signin_form.classList.remove('signin-opening')
    }, {once: true})
})
be_member_button.addEventListener('click',e=>{
    signin_form.classList.add('signin-closing')
    signin_form.addEventListener('animationend', e=>{
        signin_form.classList.remove('signin-closing')
        signup_form.classList.add('signup-opening')
        signin_form.classList.add('de-active')
        signup_form.classList.remove('de-active')
    }, {once:true})
    signup_form.addEventListener('animationend', ev=>{
        signup_form.classList.remove('signup-opening')
    }, {once:true})
})
forget_password_button.addEventListener('click',e=>{
    signin_form.classList.add('signin-closing')
    signin_form.addEventListener('animationend', e=>{
        signin_form.classList.remove('signin-closing')
        forget_password_form.classList.add('forget-password-opening')
        signin_form.classList.add('de-active')
        forget_password_form.classList.remove('de-active')
    }, {once:true})
    forget_password_form.addEventListener('animationend', ev=>{
        forget_password_form.classList.remove('forget-password-opening')
    }, {once:true})
})
back_to_signin_button.addEventListener('click',e=>{
    e.preventDefault()
    forget_password_form.classList.add('forget-password-closing')
    forget_password_form.addEventListener('animationend', e=>{
        forget_password_form.classList.remove('forget-password-closing')
        signin_form.classList.add('signin-opening')
        forget_password_form.classList.add('de-active')
        signin_form.classList.remove('de-active')
    }, {once:true})
    signin_form.addEventListener('animationend', ev=>{
        signin_form.classList.remove('signin-opening')
    }, {once:true})
})

document.querySelectorAll('.newcomer').forEach(button=>{
    button.addEventListener('click',e=>{
        e.preventDefault()
    })
})
document.querySelector('.choose-room').addEventListener('click',e=>{
    e.preventDefault()
})
document.getElementById('submit').addEventListener('click',e=>{
    e.preventDefault()
})
document.querySelector('.send-code').addEventListener('click',e=>{
    e.preventDefault()
})