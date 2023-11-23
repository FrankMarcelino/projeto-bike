// ativar menu-header 

const links = document.querySelectorAll(".header-menu a");

function ativarLink(link) {
    const url = window.location.href
    const href = link.href
    if (url.includes(href)){
        link.classList.add('ativo')
    }
}

links.forEach(ativarLink)

// Ativar items do Orçamento

const paramentros = new URLSearchParams(location.search)

function ativarProduto(parametro){
    const elemento = document.getElementById(parametro)
    if (elemento) {
        elemento.checked = true
    }
    console.log(location.search)
}

paramentros.forEach(ativarProduto)
console.log(paramentros)
