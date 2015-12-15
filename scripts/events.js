//form element events
document.getElementById("fname").addEventListener("blur", function(){
    if(this.value !== ""){
        fnameWarn.innerHTML = "";
    }
});

document.getElementById("lname").addEventListener("blur", function(){
    if(this.value !== ""){
        lnameWarn.innerHTML = "";
    }
});
document.getElementById("address1").addEventListener("blur", function(){
    if(this.value !== ""){
        a1Warn.innerHTML = "";
    }
});
document.getElementById("city").addEventListener("blur", function(){
    if(this.value !== ""){
        cityWarn.innerHTML = "";
    }
});
document.getElementById("province").addEventListener("blur", function(){
    if(this.value !== ""){
        provWarn.innerHTML = "";
    }
});
document.getElementById("country").addEventListener("blur", function(){
    if(this.value !== ""){
        countWarn.innerHTML = "";
    }
});
