let header= document.getElementById("header");
let ms = document.getElementById("PORSCHE");
let m3 = document.getElementById("AUDI");
let mx = document.getElementById("BMW");
let my= document.getElementById("MERCEDES");
var model= document.getElementById("model");
var mph= document.getElementById("mph");
var speed= document.getElementById("speed");
var range= document.getElementById("range");

ms.onclick=function(){
    header.style.backgroundImage="url(https://images.unsplash.com/photo-1503376780353-7e6692767b70?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)";
    model.innerHTML="PORSCHE";
    mph.innerHTML="1.5s";
    speed.innerHTML="300 mph";
    range.innerHTML="400 mi";
}
m3.onclick=function(){
    header.style.backgroundImage="url(https://images.unsplash.com/photo-1606152421802-db97b9c7a11b?q=80&w=2074&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)";
    model.innerHTML="AUDI";
    mph.innerHTML="1.7s";
    speed.innerHTML="350 mph";
    range.innerHTML="500 mi";
}
mx.onclick=function(){
    header.style.backgroundImage="url(https://images.unsplash.com/photo-1555215695-3004980ad54e?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)";
    model.innerHTML="BMW";
    mph.innerHTML="2.5s";
    speed.innerHTML="420 mph";
    range.innerHTML="450 mi";
}
my.onclick=function(){
    header.style.backgroundImage="url(https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)";
    model.innerHTML="MERCEDES";
    mph.innerHTML="3.5s";
    speed.innerHTML="450 mph";
    range.innerHTML="350 mi";
}