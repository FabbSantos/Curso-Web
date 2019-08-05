const nome = 'Rebeca'
const concat = "Olá " + nome + '!'

const template = `
    Olá
    ${nome}!`
console.log(concat, template)

//expressoes

console.log(`1 + 1  = ${1 + 1}`)

const up = text => text.toUpperCase() // função arrow

console.log(`Ei... ${up('cuidado')}!`)