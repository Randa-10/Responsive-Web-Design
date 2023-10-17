function validname() {
    var userName = document.getElementById("form3Example1cg");
    var userErro = document.getElementById("eorname");
    var fullName = userName.value.trim(); //remove space
    if (fullName === "" || fullName.length < 3) {
        userErro.style.display = "inline"
        userName.select();
    } else {
        userErro.style.display = "none"
        userName.style.background = "white";
        return true;
    }
}

function validemail() {
    const email = document.getElementById("form3Example3cg").value;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        document.getElementById("eormail").style.display = "block"

        return false;
    } else {
        document.getElementById("eormail").style.display = "none"

    }

    return true;
}


function validpassword() {
    var userpass = document.getElementById("form3Example4cg");
    var passrep = document.getElementById("form3Example4cdg")
    var passErro = document.getElementById("eorpass");
    var info = document.getElementById("info")
    if (userpass.value !== passrep.value ) {
        passErro.style.display = "inline"
        info.style.display = "none"
        userpass.style = "border:2px solid red";
        passrep.style = "border:2px solid red"
        // userName.select();
    } else if (userpass.length < 6 ||userpass.value === "") {
        info.style.display = "inline"
        userpass.style = "border:2px solid red";
    } else {
        passErro.style.display = "none"
        info.style.display = "none"
        userpass.style = "background-color:white;border:2px solid blue";
        passrep.style = "background-color:white;border:2px solid blue"
        return true;
    }
}

function check() {
    var para1 = document.getElementById("para")
    var para2 = document.getElementById("par2")
    para1.style.display = "block"
    para2.style.display = "block"

}
