document.querySelector(".ham").addEventListener("click", function(){
    document.querySelector(".q").classList.toggle("a");
    document.querySelector(".w").classList.toggle("b");
    document.querySelector(".e").classList.toggle("c");
})

function burgerclick(){
    document.querySelector(".menuContainer").classList.toggle("show");
}

// BUG/ERROR TESTER
window.addEventListener('click' , (e) => {
    const target = e.target.className; 
    console.log(target);
})