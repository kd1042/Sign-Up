const button = document.querySelector('.bt');
let password = document.getElementById('pass').value;
let confpass = document.getElementById('confirm-password').value;

button.addEventListener('click', () => {
     
    if(password === confpass){
        return true;
    }
    else{
        alert("Password Doesn't Match.");
    }

})