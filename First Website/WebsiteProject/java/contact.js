function submitten() {
    var fname = document.getElementById("fname");
    var lname = document.getElementById("lname");
    var mail = document.getElementById("mail");
    var gsm = document.getElementById("gsm");

    if (fname.value != "" && lname.value != "" && mail.value != "" && gsm.value != "") {
        return true;
    }
    else {
        document.getElementById("sub").innerHTML = "Uw gegvens zijn ongeldig";
        return false;
    }
}