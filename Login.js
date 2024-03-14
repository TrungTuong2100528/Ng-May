const loginsec=document.querySelector('.login-section')
const loginlink=document.querySelector('.login-link')
const registerlink=document.querySelector('.register-link')
registerlink.addEventListener('click',()=>{
    loginsec.classList.add('active')
})
loginlink.addEventListener('click',()=>{
    loginsec.classList.remove('active')
})



let currentLink = null;

document.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', function(event) {
        if (currentLink !== null) {
            currentLink.style.color = ''; // Reset màu của liên kết trước đó
        }
        this.style.color = 'red'; // Thay đổi màu của liên kết được nhấp vào
        currentLink = this; // Lưu trữ liên kết hiện tại
    });
});