var profileInfo = {};
var profileSummary = document.getElementById("profile");

function validateFirstname(){
    var firstname = document.getElementById("fname");
    var errorDiv = document.getElementById("userfirstnameError");
    try {
        if (firstname.value === "") {
            throw "Please enter your first name";
        }
        firstname.style.background = "";
        errorDiv.style.display = "";
        errorDiv.innerHTML = "";
        profilefirstname = firstname.value;
        document.getElementById("profileUsernamef").innerHTML = profilefirstname;
        document.getElementById("profile").style.display = "block";
        document.getElementById("userfirstnameSection").style.display = "block";
        return true;
    }
    catch (msg) {
        errorDiv.style.display = "block";
        errorDiv.innerHTML = msg;
        firstname.style.background = "rgb(255,233,233)";
    }
}
function validateLastname() {
    var lastname = document.getElementById("lname");
    var errorDiv = document.getElementById("userlastnameError");
    try {
        if (lastname.value === "") {
            throw "Please enter your last name";
        }
        lastname.style.background = "";
        errorDiv.style.display = "";
        errorDiv.innerHTML = "";
        profilelastname = lastname.value;
        document.getElementById("profileUsernamel").innerHTML = profilelastname;
        document.getElementById("profile").style.display = "block";
        document.getElementById("userlastnameSection").style.display = "block";
        return true;
    }
    catch (msg) {
        errorDiv.style.display = "block";
        errorDiv.innerHTML = msg;
        lastname.style.background = "rgb(255,233,233)";
    }
}
function validateAddress() {
    var Address = document.getElementById("addr");
    var errorDiv = document.getElementById("addrError");
    try {
        if (Address.value === "") {
            throw "Please enter an address";
        }
        Address.style.background = "";
        errorDiv.style.display = "";
        errorDiv.innerHTML = "";
        profileAddress = Address.value;
        return true;
    }
    catch (msg) {
        errorDiv.style.display = "block";
        errorDiv.innerHTML = msg;
        Address.style.background = "rgb(255,233,233)";
    }
}
function validateCity() {
    var City = document.getElementById("city");
    var errorDiv = document.getElementById("cityError");
    try {
        if (City.value === "") {
            throw "Please enter the city";
        }
        City.style.background = "";
        errorDiv.style.display = "";
        errorDiv.innerHTML = "";
        profileCity = City.value;
        document.getElementById("profileCity").innerHTML = profileCity;
        document.getElementById("profile").style.display = "block";
        document.getElementById("city").style.display = "";
        return true;
    }
    catch (msg) {
        errorDiv.style.display = "block";
        errorDiv.innerHTML = msg;
        City.style.background = "rgb(255,233,233)";
    }
}
function validatePostalCode() {
    var PostalCode = document.getElementById("postal").value;
    var errorDiv = document.getElementById("postalError");
    var regex = /^[A-Za-z]\d[A-Za-z][ -]?\d[A-Za-z]\d$/;
    var match = regex.exec(PostalCode);
    try {
        if (match){
            return true;
        } else {
            throw "Please enter valid postal code";
        }
    }
    catch (msg) {
        errorDiv.style.display = "block";
        errorDiv.innerHTML = msg;
        City.style.background = "rgb(255,233,233)";
    }
}
function validateProvince() {
    var Province = document.getElementById("province");
    var errorDiv = document.getElementById("provinceError");
    try {
        if ((
            Province.value === "QC" || 
            Province.value === "ON" || 
            Province.value === "MN" || 
            Province.value === "SK" || 
            Province.value === "AB" || 
            Province.value === "BC") === false) {
            throw "Must be: QC or ON or MN or SK or AB or BC";
        }
        Province.style.background = "";
        errorDiv.style.display = "";
        errorDiv.innerHTML = "";
        profileProvince = Province.value;
        document.getElementById("profileProvince").innerHTML = profileProvince;
        document.getElementById("profile").style.display = "block";
        document.getElementById("province").style.display = "";
        return true;
    }
    catch (msg) {
        errorDiv.innerHTML = msg;
        errorDiv.style.display = "block";
        Province.style.background = "rgb(255,233,233)";
    }
}
function validateAge()
{
    var Age = document.getElementById("age");
    var errorDiv = document.getElementById("ageError");
    try {
        if (Age.value >=18 === false)
        {
            throw "You must be 18+";
        }
        Age.style.background = "";
        errorDiv.style.display = "";
        errorDiv.innerHTML = "";
        profileage = Age.value;
        document.getElementById("profileAge").innerHTML = profileage;
        document.getElementById("profile").style.display = "block";
        document.getElementById("age").style.display = "";
        return true;
    }
    catch (msg) {
        errorDiv.innerHTML = msg;  
        errorDiv.style.display = "block";
        Age.style.background = "rgb(255, 233, 233)";
    }
}
function validatePassword() 
{
    var pass1 = document.getElementById("password");
    var pass2 = document.getElementById("confirm");
    var errorDiv = document.getElementById("passwordError");
    try {
        if (/.{6,}/.test(pass1.value)=== false) {
            throw "Password must contain 6 characters";
        }
        else if (pass1.value.localeCompare(pass2.value) !== 0) {
            throw "Password does not match";
        }
        else if (/[A-Z]/.test(pass1.value) === false) {
            throw "Password needs an Uppercase letter";
        }
        else if (/\d/.test(pass1.value) === false) {
            throw "Password needs at least one number between 0-9";
        }
        pass1.style.background = "";
        pass2.style.background = "";
        errorDiv.style.display = "";
        errorDiv.innerHTML = "";
        return true;
    }
    catch (msg) {
        pass1.style.background = "rgb(255, 233, 233)";
        pass2.style.background = "rgb(255, 233, 233)";
        errorDiv.style.display = "block";
        errorDiv.innerHTML = msg;
    }
}
function validateEmail() {
    var emailInput = document.getElementById("email");
    var errorDiv = document.getElementById("emailError");
    try {
        if (emailInput.value.search("@") === -1 || emailInput.value.lastIndexOf(".") === -1) {
            throw "Please provide a valid email address";
        }
        emailInput.style.background = "";
        errorDiv.innerHTML = "";
        errorDiv.style.display = "";
        emailInput.value = emailInput.value.toLowerCase();
        profileemail = emailInput.value;
        document.getElementById("profileEmail").innerHTML = profileemail;
        document.getElementById("profile").style.display = "block";
        document.getElementById("emailSection").style.display = "block";
        return true;
    }
    catch (msg) {
        errorDiv.innerHTML = msg;
        errorDiv.style.display = "block";
        emailInput.style.background = "rgb(255,233,233)";
    }
}

/* function createEventLister() {
    var previewBtn = document.getElementById("submit");
    if (previewBtn.addEventListener) {
        previewBtn.addEventListener("click", showProfile, false);
    } 
    else if (previewBtn.attachEvent) {
        previewBtn.attachEvent("onclick", showProfile);
    }
}
if (window.addEventListener) {
    window.addEventListener("load", createEventLister, false);
}
else if (window.attachEvent) {
    window.attachEvent("onload", createEventLister);
} */

function checkAllFrields(e) {
    if (validatePassword() &&
    validateEmail() &&
    validateProvince() &&
    validateAge() &&
    validateFirstname() && 
    validateLastname() &&
    validateCity() &&
    validateAddress() &&
    validatePostalCode()=== true) {
        alert("Thanks for registering with our website, your customer record was created successfully.");
        e.stopPropagation();
        e.preventDefault();
    }
}

function setUpPage () {
    validatePassword();
    validateEmail();
    validateProvince();
    validateAge();
    validateFirstname();
    validateLastname();
    validateCity();
    validateAddress();
    validatePostalCode();
    checkAllFrields();
}


var submit = document.getElementById("submit");
if (submit.addEventListener) {
    submit.addEventListener("click", setUpPage, false);
}
else if (submit.attachEvent) {
    submit.attachEvent("onclick", setUpPage);
}