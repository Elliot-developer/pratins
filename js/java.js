var i =0,text
text = "A loja de prato mais foda nessa caceta"


function typing() {

if(i<text.length){
 document.getElementById("text").innerHTML += text.charAt(i); 
 i++;
 setTimeout(typing,80);
}
}
typing();


function toggle() {
     var blur = document.getElementById('blur')
     blur.classList.toggle('active')
     var popup = document.getElementById('popup')
     popup.classList.toggle('active')
     
}

var typed = new Typed(".auto-type", {
     strings: ["Programmer", "Developer", "Student", "Designer",],
     typeSpeed: 2,
     backSpeed: 2,
     loop: true

})
