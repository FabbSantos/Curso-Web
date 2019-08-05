const prod1 = {}
prod1.nome = 'Celular top'
prod1.preco = 4000.90
prod1['desconto legal'] = 0.40 //evitar atributos com espaço

console.log(prod1)

const prod2 = {
    nome: 'Camisa Polo',
    preco: 70.00,
    obj: {
        eu: 'eu',
        obj: {
            euAi: 'euAi'
        }
    }
}

console.log(prod2)