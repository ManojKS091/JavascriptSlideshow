var i,z;
var n;
var img=document.querySelectorAll(".thumbnail img");
var slides=document.querySelectorAll(".slideshow img");
var txtdis=document.querySelector(".caption");


img[0].onclick=function(){
    for(i=0;i<slides.length;i++){
    slides[i].style.display="none";
}
    slides[0].style.display="block";
    txtdis.textContent=img[0].getAttribute("alt");
}
img[1].onclick=function(){
    for(i=0;i<slides.length;i++){
    slides[i].style.display="none";
}
    slides[1].style.display="block";
    txtdis.textContent=img[1].getAttribute("alt");
}
img[2].onclick=function(){
    for(i=0;i<slides.length;i++){
    slides[i].style.display="none";
}
    slides[2].style.display="block";
    txtdis.textContent=img[2].getAttribute("alt");
}
img[3].onclick=function(){
    for(i=0;i<slides.length;i++){
    slides[i].style.display="none";
}
    slides[3].style.display="block";
    txtdis.textContent=img[3].getAttribute("alt");
}
img[4].onclick=function(){
    for(i=0;i<slides.length;i++){
    slides[i].style.display="none";
}
    slides[4].style.display="block";
    txtdis.textContent=img[4].getAttribute("alt");
}
img[5].onclick=function(){
    for(i=0;i<slides.length;i++){
    slides[i].style.display="none";
}
    slides[5].style.display="block";
    txtdis.textContent=img[5].getAttribute("alt");
}
//img[6].onclick=function(){
//    for(i=0;i<slides.length;i++){
//    slides[i].style.display="none";
//}
//    slides[6].style.display="block";
//    txtdis.textContent=img[6].getAttribute("alt");
//}

//we could have used
//for(i=0;i<img.length;i++){
//img[i].onclick=function(){
//    
//}
//}but use it when same thing has to done everytime, not that it should be different. or use it with event target


//make sure not to use hidden rather none in display property. else the slide wont change back and forth
//img[0].onclick=function(){
//    slides[0].style.display="block";
//    slides[1].style.display="none";
//    slides[2].style.display="none";
//}
//img[1].onclick=function(){
//    slides[0].style.display="none";
//    slides[1].style.display="block";
//    slides[2].style.display="none";
//}
//img[2].onclick=function(){
//    slides[0].style.display="none";
//    slides[1].style.display="none";
//    slides[2].style.display="block";
//}