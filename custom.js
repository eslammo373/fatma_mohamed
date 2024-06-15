// JavaScript code can be added here if needed for interactive features or animations
document.getElementsByClassName("confetti-button")[0].addEventListener("click", ()=>{
    let canvas = document.createElement("canvas");
    canvas.width = 600;
    canvas.height = 600;
    let container = document.getElementsByClassName("button-wrapper")[0];
    container.appendChild(canvas);
     let confetti_button  = confetti.create(canvas);
    confetti_button({
     particleCount: 200,
     spread: 200,
     startVelocity:15,
     scalar:0.9,
     ticks:90
    }).then(() => container.removeChild(canvas) );
 });
 

 document

  window.addEventListener("click", event => {
    const audio = document.querySelector("audio");
    audio.volume = 0.2;
    audio.play();
  });


  var btn_message = document.querySelector(".btn_message");
var message = document.querySelector(".message");
var  close_window = document.querySelector(".close_window");

function myalert(){
  close_window.addEventListener("click",() =>{
    message.classList.toggle("close");

  })
  
  btn_message.addEventListener("click",() =>{
    message.classList.toggle("close");

  })


  
 
}

myalert()

