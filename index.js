let ul=document.querySelector("ul")
let open=document.querySelector(".open")
let close=document.querySelector(".close")

open.addEventListener("click",function(){
    open.style.display="none"
    close.style.display="block"
    ul.classList.add("show-menu")
})
close.addEventListener("click",function(){
    open.style.display="block"
    close.style.display="none"
    ul.classList.remove("show-menu")
})
