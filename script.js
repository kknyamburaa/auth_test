
document.getElementById('signup').addEventListener('submit', function(e) {
    e.preventDefault();
    console.log('Signup form submitted');

const firstname = document.getElementById('firstname').value;
const lastname = document.getElementById('lastname').value;
const email = document.getElementById('email').value;
const password = document.getElementById('password').value;
const confirmpassword = document.getElementById('confirmpassword').value; 


if (password !== confirmpassword) {
    alert('Passwords do not match');
    return;
}

let users = JSON.parse(localStorage.getItem('users')) || [];

if (users.find(u => u.email === email)) {
        alert('User with this email already exists');
        return;
}

const user = {
    firstname: firstname,
    lastname: lastname,
    email: email,
    password: password
};
users.push(user);

localStorage.setItem('users', JSON.stringify(user));
alert('User created successfully');


});

document.getElementById('login').addEventListener('submit', function(e) {
    e.preventDefault();
    console.log('Login form submitted');

const users = JSON.parse(localStorage.getItem('users')) || [];
const user = users.find(u => u.email === loginEmail && u.password === loginPassword);

if (user) {
    alert('Login successful!');
} else {
    alert('Invalid credentials');
}
submit-button.addEventListener('click', function() {
    window.location.href = 'index.html';
});
});