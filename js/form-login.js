const myInput = document.querySelectorAll('input'),
    iconShowHiddenPass = document.querySelector('.show-hidden-pass'),
    myInputPass = document.querySelector('.input-pass');


function focusFun () {
    let parent = this.parentNode.parentNode;
    parent.classList.add('focus');
}

function blurFun () {
    let parent = this.parentNode.parentNode;

    //console.log(parent);
    if(this.value === '') {
        parent.classList.remove('focus');
    } else {
    	iconShowHiddenPass.classList.add('fa-eye-slash');
        //iconShowHiddenPass.classList.remove('fa-eye');
        myInputPass.setAttribute('type', 'password');
    }
}

myInput.forEach (myFun => { // myFun or any name
    myFun.addEventListener('focus', focusFun);
    myFun.addEventListener('blur', blurFun);
});

iconShowHiddenPass.addEventListener('click', () => {
    if(iconShowHiddenPass.classList.contains('fa-eye-slash')) {
        iconShowHiddenPass.classList.remove('fa-eye-slash');
        iconShowHiddenPass.classList.add('fa-eye');
        myInputPass.setAttribute('type', 'text');

    } else {
        iconShowHiddenPass.classList.add('fa-eye-slash');
        iconShowHiddenPass.classList.remove('fa-eye');
        myInputPass.setAttribute('type', 'password');
    }
})
