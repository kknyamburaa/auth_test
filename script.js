
const signupLink = document.querySelector('a[href="signup.html"]');

document.getElementById("signup").addEventListener("click", function(event) {
    event.preventDefault();
    console.log("Form submitted");
});

const fullname = document.getElementById("fullname");
const lastname = document.getElementById("lastname");
const email = document.getElementById("email");
const password = document.getElementById("password");
const confirmPassword = document.getElementById("confirmPassword");
const signupForm = document.getElementById("signupForm");
const loginForm = document.getElementById("loginForm");

if (password.value !== confirmPassword.value) {
    alert("Passwords do not match");
    return;
}
const users = JSON.parse(localStorage.getItem("users")) || [];
        
const newUser = {
    fullname: fullname.value,
    lastname: lastname.value,
    email: email.value,
    password: password.value
};
users.push(newUser);
console.log(users);

localStorage.setItem("users", JSON.stringify(users));
localStorage.setItem("currentuser", JSON.stringify({
    fullname: fullname.value,
    lastname: lastname.value,
    email: email.value,
    password: password.value
}));

console.log("User saved:", newUser);
        alert("Signup successful!");
        
