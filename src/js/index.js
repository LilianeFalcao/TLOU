const botao = document.querySelector(".btnPlataforma");

const elementosPlataforma = document.querySelector(".btnPlataforma .plataformas");

botao.addEventListener("click", ( ) => {
    const botaoAberto = elementosPlataforma.classList.contains("ativo");

    if(botaoAberto){
        elementosPlataforma.classList.remove("ativo");
    }else{
        elementosPlataforma.classList.add("ativo");
    }
});