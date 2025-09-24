btnMenu=document.querySelector("#btn-menu");
menu=document.querySelector(".nav");
linkNav=document.querySelectorAll("#link-nav");
btnMenu.addEventListener("click",()=>{
    btnMenu.classList.toggle("girar");
    menu.classList.toggle("mostrar");
});


linkNav.forEach(i=>{
    i.addEventListener("click",()=>{
        btnMenu.classList.remove("girar");
        menu.classList.remove("mostrar");
    })});