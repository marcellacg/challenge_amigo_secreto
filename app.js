let listaDeSorteados = [];


function adicionarAmigo() {
    let amigo = document.querySelector('input').value;
    
    if (amigo == '' || !isNaN(amigo)){ //validando input
        alert('Insira um nome válido. ');
    } else {
        listaDeSorteados.push(amigo); //adicionando amigos em uma lista
        listaDeAmigos();
    }
    limparInput();
}


function limparInput() {
    amigo = document.querySelector('input');
    amigo.value = '';
}


function listaDeAmigos() {
    let campoListagem = document.getElementById('listaAmigos'); //listagem de amigos
    campoListagem.innerHTML = listaDeSorteados.join('<br>');
    
}


function sortearAmigo() {
    
    if (listaDeSorteados != ''){ //validação. lista cheia faz o sorteio, senão, lista é esvaziada sem possibilidade de re-sorteio
        let numeroIndice = Math.floor(Math.random() * listaDeSorteados.length)
        
        let sorteado = document.getElementById('resultado');
        sorteado.innerHTML = 'O meu amigo secreto sorteado é: ' + listaDeSorteados[numeroIndice];
        limparListaTela();
    }
    listaDeSorteados = '';
}


function limparListaTela() {
    let listagem = document.getElementById('listaAmigos');
    listagem.innerHTML = '';
}
