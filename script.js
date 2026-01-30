
document.getElementById('signup').addEventListener('submit', function(e) {
    e.preventDefault();
    console.log('Signup form submitted');
});
const firstname = document.getElementById('firstname').value;
const lastname = document.getElementById('lastname').value;
const email = document.getElementById('email').value;
const password = document.getElementById('password').value;
const confirmpassword = document.getElementById('confirmpassword').value; 

if (password !== confirmpassword) {
    alert('Passwords do not match');
}

const existingUsers = localStorage.getItem('email');
if (existingUsers) {
    alert('Existing users found');
    return;
}

const user = {
    firstname: firstname,
    lastname: lastname,
    email: email,
    password: password
};
localStorage.setItem('email', email);





document.getElementById('login').addEventListener('submit', function(e) {
    e.preventDefault();
    console.log('Login form submitted');
});
