var menu=document.querySelector(".menu")
var hoverLinks=document.querySelector(".hover-links");
var cross=document.querySelector(".cross")


menu.addEventListener("click",()=>{
   
    hoverLinks.style.display="block";
    menu.style.display="none";
    cross.style.display="block";
})

cross.addEventListener("click",()=>{
    hoverLinks.style.display="none";
    menu.style.display="block";
    cross.style.display="none";
})