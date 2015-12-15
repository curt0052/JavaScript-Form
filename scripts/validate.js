//validate module
//var validate = (function(){

    //create private and public functions/objects/variables to validate the form
    
    
    
    
//}());

function validate() {

    var valid = true;

    if (profile.fname.value == "") {
        document.getElementById('fnameWarn').innerHTML = "*No first name entered*";
        valid = false;
    }

    if (profile.lname.value == "") {
        document.getElementById('lnameWarn').innerHTML = "*No last name entered*";
        valid = false;
    }
    if (profile.address1.value == "") {
        document.getElementById("a1Warn").innerHTML = "*No address entered*";
        valid=false;
    }
    if (profile.city.value == "") {
        document.getElementById("cityWarn").innerHTML = "*No city entered*";
        valid=false;
    }
    if (profile.province.value == "") {
        document.getElementById("provWarn").innerHTML = "*No province selected*";
        valid=false;
    }
    if (profile.country.value == "") {
        document.getElementById("countWarn").innerHTML = "*No country selected*";
        valid=false;
    }

    if (valid) {
        alert("Thank you!");
    }

    return valid;

};