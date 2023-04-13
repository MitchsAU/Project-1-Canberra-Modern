//This is the javascript that i used to make the hamburger menu change from the 3 lines to an X when clicked. The hamburger menu is still fully functional without this javasript but thought it would add a nice addition  to the site.
document.querySelector(".ham").addEventListener("click", function(){
    document.querySelector(".q").classList.toggle("a");
    document.querySelector(".w").classList.toggle("b");
    document.querySelector(".e").classList.toggle("c");
})

//This is the javascript that is responsible for making the hamburger menu pop up on the screen when clicked, it access the '.menucontainer. class and changes it the the '.menucontainer show' version in the css.
function burgerclick(){
    document.querySelector(".menuContainer").classList.toggle("show");
}

//This is not apart of the website but thought i would leave it in as this is what i used to fix bugs and errors that i came across. When clicking on the website it will proved the class name in the console log
//This would tell me if something was above the class that i wanted to be clicking on. Usually resulting in changing the z-index in the css. As sometimes classes would be in the way of the hamburger drop down.
window.addEventListener('click' , (e) => {
    const target = e.target.className; 
    console.log(target);
})