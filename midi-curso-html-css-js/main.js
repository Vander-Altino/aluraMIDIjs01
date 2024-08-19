function tocaSom (elementoAudio) {
    let elemento = document.querySelector(elementoAudio);
    console.log(elemento.localName === 'audio');
    if(elemento != null && elemento.localName === 'audio'){
        elemento.play();
    }else{
        console.log("Elemento ou tag seletor invalido");
    }
}

const listaDeTeclas = document.querySelectorAll('.tecla');

//para
for (let contador = 0; contador < listaDeTeclas.length; contador++) {

    const tecla = listaDeTeclas[contador];
    const instrumento = tecla.classList[1];
    const idAudio = `#som_${instrumento}`; //template string

    tecla.onclick = function () {
        tocaSom(idAudio);
    }

    tecla.onkeydown = function(evento){
        console.log(evento);
        if(evento.code === "Enter" || evento.code === "Space") {
            tecla.classList.add('ativa');
        }
    }

    tecla.onkeyup = function(){
        tecla.classList.remove('ativa');
    }

}
