const input = document.querySelector('input');
const log = document.getElementById('nom');
const name = document.querySelector('.inputdiv');

input.addEventListener('input', updateValue);

function updateValue(e){
    log.textContent = e.target.value; 
}

function inputMostrar(){
  name.style.display = "block";
}

function inputOcultar(){
    name.style.display = "none"
}

function opacityChange(){
    if(name.style.display == "none"){
        inputMostrar();
    }
    else{
        inputOcultar();
    }
}



