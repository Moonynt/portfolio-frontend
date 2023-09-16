const bar = document.querySelector('.bar-container');

function barOpacity(){
    if(bar.style.display == "none"){
        barMostrar();
    }
    else{
        barOcultar();
    }

}

function barMostrar(){
    bar.style.display == "block"
}

function barOcultar(){
    bar.style.display == "none"
}