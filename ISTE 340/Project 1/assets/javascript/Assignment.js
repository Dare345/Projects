'use strict';
if (!document.getElementById){
    window.location = "legacy.html"
}
//data set: 0:id, 1:question, 2 and more: options

let data = {
    start: ['q1','Would you like a heavy or light gun? ','heavy','light',],
    heavy: ['q2','Does the gun use explosives or bullets ','bullets','explosives'],
    bullets: ['q3','Pick your gun..','machine-gun','shotgun','rifle'],
    rifle: ['img','assets/img/Rifle.png','Based on your choices, the AR-15 is most suitable for you','Ammo Types:.223 Remington\n\n','Fire Rate:45 rounds per minute\n'],
    explosives: ['q3','Pick your explosive weapon ','rpg','grenade-launcher'],
    'machine-gun': ['img','assets/img/Machine.jpg','Based on your choices, the machine-gun is most suitable for you ','Ammo Types:.357 Magnum\n\n','Fire Rate:500 to 1000 rounds per minute\n'],
    rpg: ['img','assets/img/RPG.png', 'Based on your choices, the Rocket-Propelled Grenade is most suitable for you ','Ammo Types:High-Explosive Anti-Tank Rounds\n\n','Fire Rate:3 to 4 rounds per minute\n'],
    'grenade-launcher': ['img','assets/img/Grenade.png','Based on your choices, the grenade-launcher is most suitable for you ','Ammo Types:Grenade\n\n','Fire Rate:5 to 7 per minute\n'],
    light: ['q2','What type of pistol? ','revolver','semi','machine'],
    revolver: ['q3','What type of revolver is it? ', 'single', 'double'],
    single: ['img','assets/img/SingleRev.png','Based on your choices, the Single Action revolver is most suitable for you','Ammo Types:.357 Magnum\n\n','Fire Rate:Depends on User\n'],
    double: ['img','assets/img/DoubleRev.webp','Based on your choices, Double Action Revolver is most suitable for you','Ammo Types:.357 Magnum\n\n','Fire Rate:Depends on User\n'],
    'non-revolver': ['q1','What type of pistol would you like? ','machine','semi'],
    machine: ['img','assets/img/MachineP.jpg','Based on your choices, the Machine Pistol is most suitable for you',"Ammo Types:Rimless Cartridge\n\n",'Fire Rate:1,100 to  1,400 rounds per minute\n'],
    semi: ['img','assets/img/Semi.jpg','Based on your choices, the Semi-Automatic Pistol is most suitable for you',"Ammo Types:Rimless Cartridge\n\n",'Fire Rate:400 to 800 rounds per minute\n'],
    shotgun:['img','assets/img/shotgun.png','Based on your choices, the Shotgun is most suitable for you','Ammo Types:buckshot, birdshot, slugs\n\n','Fire Rate:2 shots per second\n']
};

let dogs = {
    start: ['q1','Do you want a small or large dog?','small','large'],
    small: ['q2','Do you want a ferocious or friendly dog?','ferocious','friendly'],
    large: ['q2','Do you want a guard dog or jumpy dog?','guard','jumpy'],
    ferocious: ['img','assets/img/Chihuahua.jpg','You got a chihuahua! A demon dog that will always be angry at you!','Size:small\n\n','Difficulty:Hard\n'],
    friendly: ['img','assets/img/pug.webp','You got a Pug! A dog that will always be kind to you!','Size:small\n\n','Difficulty:Easy\n'],
    guard: ['img','assets/img/dobermann.jpg','You got a Dobermann! A dog that will be loyal to you every step of the way!','Size:large\n\n','Difficulty:Normal\n'],
    jumpy:['img','assets/img/husky.webp','You got a Husky! A dog that is very energetic and make a mess of everything you own!','Size:large\n\n','Difficult:Hard\n']
}



//Shortcuts

function $(id){
    return document.getElementById(id);
  }

function $$(ele,pos){
    return document.getElementsByTagName(ele)[pos];
}

function $$$(ele,pos){
    return document.getElementByClass(ele)[pos];
}

function removeNode(parent, child){
    parent.removeChild(child);
}

// cookies.js
// You can use this code for your projects!
// Derived from the Bill Dortch code at http://www.hidaho.com/cookies/cookie.txt

function getCookieVal (offset) {
	var endstr = document.cookie.indexOf (";", offset);
	if (endstr == -1) { endstr = document.cookie.length; }
	return decodeURIComponent (document.cookie.substring(offset, endstr));
	}

function GetCookie (name) {
	var arg = name + "=";
	var alen = arg.length;
	var clen = document.cookie.length;
	var i = 0;
	while (i < clen) {
		var j = i + alen;
		if (document.cookie.substring(i, j) == arg) {
			return getCookieVal (j);
			}
		i = document.cookie.indexOf(" ", i) + 1;
		if (i == 0) break; 
		}
	return null;
	}

function DeleteCookie (name,path,domain) {
	if (GetCookie(name)) {
		document.cookie = name + "=" +
		((path) ? "; path=" + path : "") +
		((domain) ? "; domain=" + domain : "") +
		"; expires=Thu, 01-Jan-70 00:00:01 GMT";
		}
	}

/////////
// use:
//		SetCookie('name', 'value', 3000);
//		SetCookie('name', 'value', 1000,false,false,false,true);
//		If set the secure (last arg) to true, you MUST be on an https connection!
/////////
function SetCookie (name,value,maxAge,path,domain,sameSite,secure) {
  document.cookie = name + "=" + encodeURIComponent(value) +
    ((maxAge) ? ";max-age=" + maxAge  : "") +
    ((path) ? ";path=" + path  : "") +
    ((domain) ? ";domain=" + domain : "") +
    ((sameSite) ? ";samesite=" + sameSite : ";samesite=strict") +
    ((secure) ? ";secure;" : ";");
}

//Note: If you want to use Animations or move things you have to give elements a type of position 

function init(select,set){
    removeOther(select);
    setTimeout(function(){newQ(select,set)},500);
}
//Function that creates select tags
function newQ(select,set){
    //removes children images if it exist and prints out a new one
    if (set[select][0] == "img"){
        removeOther(select);
        printA(select,set);
    }else{
        //main program that creates the select options
        let div = document.createElement("div");
        div.setAttribute("class","container");
        div.setAttribute("style","position:relative;left:-500px;")

        let lab = document.createElement("label");
        let text1 = document.createTextNode(set[select][1]);
        lab.appendChild(text1);
        lab.setAttribute("for", set[select][0]);
        
        let sel = document.createElement("select");
        sel.setAttribute("id",set[select][0]);
        sel.setAttribute("name",set[select][0]);
        sel.addEventListener("change", function(){
            let next = this.value;
            init(next,set);
        }) 

        let firstop = document.createElement("option");
        firstop.disabled = true;
        firstop.selected = true;
        firstop.appendChild(document.createTextNode("-- select an option --"));
        sel.appendChild(firstop);
        for (let count = 2; count < set[select].length;count++){
            let op = document.createElement("option");
            op.setAttribute("value",set[select][count]);
            op.appendChild(document.createTextNode(set[select][count]));
            sel.appendChild(op);
        }

        div.appendChild(lab);
        div.appendChild(sel);
        document.body.appendChild(div);
        AnimationSlide(div, 30 ,0,false);
    }
}

//function to remove any children in front
function removeOther(select){
    let x = document.getElementsByTagName("select");
    if ($("results")){
        AnimationSlide($("results"), 30, 0, true);
    }
    for(let i = x.length-1;i > 0;i--){
        if (!(x[i].value === select)){
            AnimationSlide(x[i].parentElement, 30, 0, true);
        }else{
            break;
        }
    }
}
//prints out the results and a form for them to fill out
function printA(select, set){
    let div = document.createElement("div");
    let div2 = document.createElement("div");
    let info = document.createElement("h3")
    let para = document.createElement("p")
    div.setAttribute("id","results");
    div.setAttribute("style","position:relative;left:-500px");
    div2.setAttribute("class","text");
    
    let imag = document.createElement("img");
    imag.setAttribute("src",set[select][1]);
    div.appendChild(imag);

    info.appendChild(document.createTextNode(set[select][2]));
    para.appendChild(document.createTextNode(set[select][3]));
    para.appendChild(document.createElement("br"));
    para.appendChild(document.createTextNode(set[select][4]));
    div2.appendChild(info);
    div2.appendChild(para);
    div.appendChild(div2);
    div.appendChild(newF());
    document.body.appendChild(div);
     AnimationSlide(
        div, 30, 0, false
    );


}

//Function that creates the Form
function newF(){
    let key = "store";
    //Creating the Form element
    let form = document.createElement("form");
    form.setAttribute("action","");
    form.setAttribute("method","get");
    form.setAttribute("onsubmit"," return sub();");
    
    //Creating the Labels and inputs

    //First input: First Name
    let label = document.createElement("label");
    let text = document.createTextNode("First Name");
    label.appendChild(text);
    
    //Setting Attributes
    let first = document.createElement("input");
    label.setAttribute("for","fname");
    first.setAttribute("type","text");
    first.setAttribute("id","fname");
    first.setAttribute("name","fname");
    first.setAttribute("placeholder","First Name");
    setI(first,key,0);
    form.appendChild(label);
    form.appendChild(first);

    //Second Input:Last Name
    label = document.createElement("label");
    text = document.createTextNode("Last Name");
    label.appendChild(text);

    //Setting Attributes
    let last = document.createElement("input");
    label.setAttribute("for","lname");
    last.setAttribute("type","text");
    last.setAttribute("id","lname");
    last.setAttribute("name","lname");
    last.setAttribute("placeholder","Last Name");
    setI(last,"store",1);
    form.appendChild(label);
    form.appendChild(last);

    //Third Input:Email
    label = document.createElement("label");
    text = document.createTextNode("Email");
    label.appendChild(text);

    //Setting Attributes
    let ema = document.createElement("input");
    label.setAttribute("for","email");
    ema.setAttribute("type","email");
    ema.setAttribute("id","email");
    ema.setAttribute("name","email");
    ema.setAttribute("placeholder","Email...");
    setI(ema,key,2);
    form.appendChild(label);
    form.appendChild(ema);

    //Fourth Input:Phone Number
    label = document.createElement("label");
    text = document.createTextNode("Phone Number");
    label.appendChild(text);

    //Setting Attributes
    let pho = document.createElement("input");
    label.setAttribute("for","phone");
    pho.setAttribute("type","tel");
    pho.setAttribute("id","phone");
    pho.setAttribute("name","phone");
    pho.setAttribute("placeholder","Phone Number...");
    setI(pho,"store",3);
    form.appendChild(label);
    form.appendChild(pho);

    //Fifth Input:Feedback
    label = document.createElement("label");
    text = document.createTextNode("Feedback");
    label.appendChild(text);
    label.setAttribute("for","feed");

    //Setting Attributes
    let feedback = document.createElement("textarea");
    feedback.setAttribute("id","feed");
    feedback.setAttribute("name","feed");
    feedback.setAttribute("placeholder","Your Response...");
    feedback.setAttribute("rows",4);
    feedback.setAttribute("columns",4);
    setf(feedback,key,4);
    form.appendChild(label);
    form.appendChild(feedback);

    //submit
    let sub = document.createElement("input");
    sub.setAttribute("type","submit");
    sub.setAttribute("value","Submit");
    form.appendChild(sub);
    return form;

}
//function for sub clear localStorage, saves into localStorage, and checks missing inputs in form.
function sub(){
    localStorage.removeItem("store");
    let store = [];
    let correct = true;
    for (let i of document.forms[0].getElementsByTagName("input")){
        if (i.value == ''){
            i.style.borderColor = "red";
            correct = false;
        }else{
            i.style.borderColor = "";
        }
    }

    if(navigator.cookieEnabled && correct == true){
        for (let i of document.forms[0].getElementsByTagName("input")){
            if (!(i.getAttribute("type") == "submit")){
                store.push(i.value);
            }
        }
        store.push($("feed").value);
        SetCookie("store",store,3000);
    }else if (window.localStorage && correct == true){
        for (let i of document.forms[0].getElementsByTagName("input")){
            if (!(i.getAttribute("type") == "submit")){
                store.push(i.value);
            }
        }
        store.push($("feed").value);
        localStorage.setItem("store", JSON.stringify(store));
    }

    return correct;
}
// Citation:
// Duim, C. (n.d.). Easing functions for JavaScript - animation tool: Spicy Yoghurt. Easing Functions for JavaScript - Animation Tool
//  | Spicy Yoghurt. https://spicyyoghurt.com/tools/easing-functions 
function CubicEq(time, begin, change, duration){
    return change *((time = time/duration - 1) * time * time + 1) + begin
}

function AnimationSlide(ele, duration,time, reverse){
    let begin = parseInt(ele.style.left);
    let pos = begin;
    let newTime = time;
    if (reverse != true){
        let num = CubicEq(time, begin, 23, duration);
        newTime++;
        if (!(time === duration)){
            ele.style.left = num + "px";
            requestAnimationFrame(function(){
                AnimationSlide(ele,duration,newTime,reverse);
            });
        }
    }else{
        let num = CubicEq(time, begin, -23, duration);
        newTime++;
        if (time < duration){
            ele.style.left = num + "px";
            requestAnimationFrame(function(){
                AnimationSlide(ele,duration,newTime,reverse);
            });
        }else{
            removeNode(ele.parentElement,ele);
        }
    }
}


function setf(parent, key, index){
    if(GetCookie(key) != null){
        parent.appendChild(document.createTextNode(
            GetCookie(key).split(",")[index]
        ));
    }else if (localStorage.getItem(key) != null){
        parent.appendChild(document.createTextNode(
            JSON.parse(localStorage.getItem(key))[index]
        ));
    }
}

function setI(parent, key, index){
    if(GetCookie(key) != null){
        parent.setAttribute("value", GetCookie(key).split(",")[index]);
    }else if (localStorage.getItem(key) != null){
        parent.setAttribute("value",JSON.parse(localStorage.getItem(key))[index]);
    }
}

