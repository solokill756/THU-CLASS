document.querySelector('.loginPage').addEventListener('click' , function() {
    document.querySelector('.login').classList.remove('d-none');
    document.querySelector('.signUp').classList.add('d-none');
})

document.querySelector('.signUpPage').addEventListener('click' , function() {
    document.querySelector('.signUp').classList.remove('d-none');
    document.querySelector('.login').classList.add('d-none');
})