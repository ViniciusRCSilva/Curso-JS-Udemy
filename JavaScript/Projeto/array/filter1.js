const produtos = [
    { nome: 'Notebook', preco: 2499, fragil: true },
    { nome: 'iPad Pro', preco: 4199, fragil: true },
    { nome: 'Copo de vidro', preco: 12.49, fragil: true },
    { nome: 'Copo de plástico', preco: 18.99, fragil: false }
]

console.log(produtos.filter(function(p){
    return false
}))

const caro = produto => produto.preco >= 500

const fragil = produto => produto.fragil == true

const produtoCaroFragil = produtos.filter(caro, fragil)

console.log(produtoCaroFragil)