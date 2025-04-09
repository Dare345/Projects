function ham(){
    var nav = document.getElementById("menu");
    if (nav.style.display === "flex"){
        nav.style.display = "none";
    }else{
        nav.style.display = "flex";
    }
}