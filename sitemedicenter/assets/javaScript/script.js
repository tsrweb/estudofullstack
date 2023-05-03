window.onload = function (){
    document.querySelector(".menuMobile").addEventListener("click", function(){
        if(document.querySelector("nav ul").style.display == 'flex') {
            document.querySelector("nav ul").style.display = 'none';
        } else {
            document.querySelector("nav ul").style.display = 'flex';
        }
    });
};