// adding event listners to all the buttons
// first access all the buttons by calculating no of buttons and a loop with each pass click event is listned which opens two moore functions

let numbrOfButtons = document.querySelectorAll(".button").length;

for(let i=0; i<numbrOfButtons; i++){
    document.querySelectorAll(".button")[i].addEventListener("click",()=>{
        let buttonstyle = this.innerHTML;
        sound(buttonstyle);
        animation(buttonstyle);
    });
}

document.addEventListener("keypress", function(event) { 
    sound(event.key); 
    animation(event.key); 
  }); 

function sound(key) { 
    switch (key) { 
      case "7": 
        var sound1 = new Audio("audio/crash.mp3"); 
        sound1.play(); 
        break; 
    
      case "8": 
      var sound2 = new Audio("audio/kick-bass.mp3"); 
      sound2.play(); 
        break; 
    
      case "9": 
        var sound3 = new Audio('audio/snare.mp3'); 
        sound3.play(); 
        break; 
    
      case "4": 
        var sound4 = new Audio('audio/tom-1.mp3'); 
        sound4.play(); 
        break; 
    
      case "5": 
        var sound5 = new Audio('audio/tom-2.mp3'); 
        sound5.play(); 
        break; 
    
      case "6": 
        var sound6 = new Audio('audio/tom-3.mp3'); 
        sound6.play(); 
        break; 
    
      case "2": 
        var sound7 = new Audio('audio/tom-4.mp3'); 
        sound7.play(); 
        break; 
    
      default: console.log(key); 
    } 
  } 

  function animation(currentKey) { 
    const activeButton = document.querySelector("." + currentKey); 
    
    activeButton.classList.add("animation"); 
    
    setTimeout(function() { 
      activeButton.classList.remove("animation"); 
    }, 100); 
  } 