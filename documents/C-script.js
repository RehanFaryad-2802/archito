const bars = document.querySelector('.bars');
const Xmark = document.querySelector('.x_mark');
const mobile = document.querySelector('.mobile_content');
const body = document.querySelector('body');

bars.addEventListener('click',()=>{
    mobile.style.transform = `translateY(0%)`;
   mobile.style.boxShadow = `0 0 20px 600px #00000077`;
    body.style.height = `100vh`;
    body.style.overflow = `hidden`;
})

Xmark.addEventListener('click',()=>{
    mobile.style.transform = `translateY(-100%)`;
   mobile.style.boxShadow = `none`;
    body.style.height = `auto`;
    body.style.overflow = `visible`;
})