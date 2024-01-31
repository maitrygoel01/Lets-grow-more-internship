let signupConent = document.querySelector(".signup-form-container"),
stagebtn1b = document.querySelector(".stagebtn1b"),
stagebtn2a = document.querySelector(".stagebtn2a"),
stagebtn2b = document.querySelector(".stagebtn2b"),
stagebtn3a = document.querySelector(".stagebtn3a"),
stagebtn3b = document.querySelector(".stagebtn3b"),
signupContent1 = document.querySelector(".stage1-content"),
signupContent2 = document.querySelector(".stage2-content"),
signupContent3 = document.querySelector(".stage3-content");

signupContent2.style.display = "none"
signupContent3.style.display = "none"

function stage1to2(){
    signupContent1.style.display = "none"
    signupContent3.style.display = "none"
    signupContent2.style.display = "block"
    document.querySelector(".stageno-1").innerText = "✔"
    document.querySelector(".stageno-1").style.backgroundColor = "#52ec61"
    document.querySelector(".stageno-1").style.color = "#fff"
}
function stage2to1(){
    signupContent1.style.display = "block"
    signupContent3.style.display = "none"
    signupContent2.style.display = "none"
}
function stage2to3(){
    signupContent1.style.display = "none"
    signupContent3.style.display = "block"
    signupContent2.style.display = "none"
    document.querySelector(".stageno-2").innerText = "✔"
    document.querySelector(".stageno-2").style.backgroundColor = "#52ec61"
    document.querySelector(".stageno-2").style.color = "#fff"
}
function stage3to2(){
    signupContent1.style.display = "none"
    signupContent3.style.display = "none"
    signupContent2.style.display = "block"
}


function submitForm() {
    var fname = document.getElementById("fname").value;
    var lname = document.getElementById("lname").value;
    var dob = document.getElementById("dob").value;
    var phone = document.getElementById("phone").value;
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;
    var confirmpassword = document.getElementById("confirmpassword").value;
    

    var displayContainer = document.getElementById("displayContainer");

    var userCard = document.createElement("div");
    userCard.className = "userCard";
    userCard.innerHTML = "<h2>Entered Data:</h2>" +
        "<p><strong>First Name:</strong> " + fname + "</p>" +
        "<p><strong>Last Name:</strong> " + lname + "</p>" +
        "<p><strong>Date of Birth:</strong> " + dob + "</p>" +
        "<p><strong>Phone number:</strong> " + phone + "</p>" +
        "<p><strong>Email:</strong> " + email + "</p>";
        "<p><strong>Password:</strong> " + password + "</p>" +
        "<p><strong>Confirm Password:</strong> " + confirmpassword + "</p>" +

    displayContainer.appendChild(userCard);

    // Reset form fields
    document.getElementById("fname").value = "";
    document.getElementById("lname").value = "";
    document.getElementById("dob").value = "";
    document.getElementById("phone").value = "";
    document.getElementById("email").value = "";
    document.getElementById("password").value = "";
    document.getElementById("confirmpassword").value = "";

    // Display the user card
    userCard.style.display = "block";
}