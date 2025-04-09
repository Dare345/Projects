function ham(){
    var nav = document.getElementById("menu");
    if (nav.style.display === "flex"){
        nav.style.display = "none";
    }else{
        nav.style.display = "flex";
    }
}



function validateForm(){
    const name = document.forms["feedback"]["nam"].value;
    const message = document.forms["feedback"]["com"].value;
    if (name === "" || name === null){
        document.getElementById("nam").style.backgroundColor = "pink";
        return false;
    }else{
        document.getElementById("nam").style.backgroundColor = "";
    }
    
    if(message === "" || message === null){
        document.getElementById("com").style.backgroundColor = "pink";
        return false;
    }else{
        document.getElementById("com").style.backgroundColor = "";
    }

    if (name != null && message != null){
        return true;
    }
}