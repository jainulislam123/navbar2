let menuList =document.querySelector(".menulist");
let menuIcon =document.querySelector(".menuIcon");
menuList.style.maxHeight="0px";
function show(){
    if(menuList.style.maxHeight=="0px"){
        menuList.style.maxHeight="500px";
        menuIcon.innerHTML="❌"
    }else{
        menuList.style.maxHeight="0px";
        menuIcon.innerHTML='<i class="fa-solid fa-bars"></i>'
    }
    menuList.style.display="block" ;
   
}