let valorTotal;
limpar();

function adicionar() {
    //1-recuperar valores do nome, quantidade e valor dos produtos
    let recuperandoProdutos = document.getElementById('produto').value;
    //usei o .value pois o valor do produto já está definido no HTML
    let botaoQtd = document.getElementById('quantidade').value;
    let nomeDosProdutos = recuperandoProdutos.split('-')[0];
    let valorUnitario = recuperandoProdutos.split('R$')[1];
    
    //2-calcular o preço/subtotal
    let preco = botaoQtd * valorUnitario;
   
    //3-adicionar no carrinho
    //cada item no carrinho, possui uma tag section; logo, eu preciso criar uma tag section p/ cada produto
    let carrinho = document.getElementById('lista-produtos');
    carrinho.innerHTML = carrinho.innerHTML + `<section class="carrinho__produtos__produto">
          <span class="texto-azul">${botaoQtd}</span> ${nomeDosProdutos} <span class="texto-azul">R$${preco}</span>
        </section>`;
    //precisei colocar carrinho.innerHTML = carrinho.innerHTML + o código pois se n os produtos ficam subscrevendo, ao invés de listarem.
    //isso significa que ao repetir após a igualdade, eu digo que é para manter os códigos e ir adicionando novos (concateno), ao invés
    // de substituir o código(o que substituiria os produtos ao invés de adicionar e listar)
    
    //4-atualizar o valor total 
    valorTotal = valorTotal + preco ;
    let campoDoValorTotal = document.getElementById('valor-total');
    campoDoValorTotal.textContent = `R$${valorTotal}`;   
    document.getElementById('quantidade').value = '';
    //essa linha serve para excluir o campo da quantidade e fica dentro da função pois a cada vez q eu apertar em add, a quantidade deve
    //ser zerada
}

function limpar() {
valorTotal = 0
document.getElementById('lista-produtos').innerHTML = '';
document.getElementById('valor-total').innerHTML = 'R$ 0';
    
}

