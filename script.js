
const signupLink = document.querySelector('a[href="signup.html"]');

document.getElementById("signup").addEventListener("click", function(event) {
    event.preventDefault();
    console.log("Form submitted");
});

const fullname = document.getElementById("fullname").value;
const lastname = document.getElementById("lastname").value;
const email = document.getElementById("email").value;
const password = document.getElementById("password").value;
const confirmPassword = document.getElementById("confirmPassword").value;
const signupForm = document.getElementById("signupForm");
const loginForm = document.getElementById("loginForm");

if (password !== confirmPassword) {
    alert("Passwords do not match");
    return;
}
const users = JSON.parse(localStorage.getItem("users")) || [];
        
const newUser = {
    fullname: fullname,
    lastname: lastname,
    email: email,
    password: password
};
users.push(newUser);
console.log(users);

localStorage.setItem("users", JSON.stringify(users));
localStorage.setItem("currentuser", JSON.stringify({
    fullname: fullname,
    lastname: lastname,
    email: email,
    password: password
}));

console.log("User saved:", newUser);
        alert("Signup successful!");
        
const loginform = document.getElementById("login");

if (loginform) {
    loginform.addEventListener("submit", function(event) {
        event.preventDefault();
        console.log("Login form submitted");
        
        const email = document.getElementById("loginEmail").value;
        const password = document.getElementById("loginPassword").value;
        
        const users = JSON.parse(localStorage.getItem("users")) || [];
        const user = users.find(u => u.email === email && u.password === password);
        
        if (user) {
            localStorage.setItem("currentuser", JSON.stringify({
                fullname: user.fullname,
                lastname: user.lastname,
                email: user.email
            }));
            alert("Login successful!");
            window.location.href = "dashboard.html";
        } else {
            alert("Invalid email or password");
        }
    });
}
