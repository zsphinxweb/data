var user_name = document.getElementById('name');
var pwd= document.getElementById('pwd');
var name_info = document.getElementById('name_info');
var pwd_info = document.getElementById('pwd_info');
var btn = document.getElementById('btn');

actual_pwd = 'z' + Math.round(Math.random()*10000);
actual_name = 'sphinx';

user_name.addEventListener('focus', () => {
    name_info.style.visibility = 'visible';
    name_info.innerHTML = "User name is "+ actual_name;
})

user_name.addEventListener('blur', () => {
    name_info.style.visibility = 'hidden';
})

pwd.addEventListener('focus', () => {
    pwd_info.style.visibility = 'visible';
    pwd_info.innerHTML = "Password is "+ actual_pwd;
})

pwd.addEventListener('blur', () => {
    pwd_info.style.visibility = 'hidden';
})

btn.addEventListener('blur', () => {
    if( user_name.value == actual_name && pwd.value == actual_pwd) {  
        window.location.href = "data.html";
    }
});
