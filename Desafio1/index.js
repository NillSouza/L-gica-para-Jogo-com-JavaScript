
const nome = 'escudo'

let info = [
    {nomes:'escudo' , quantidade: 1}
];

let inventario = [
    { nome: 'espada', quantidade: 1 },
    { nome: 'escudo', quantidade: 1 },
    { nome: 'poção de cura', quantidade: 6 },
    { nome: 'poção de mana', quantidade: 4 },
	{ nome: 'pergaminho', quantidade: 3 }
];

let item = inventario.find(item => item.nome === nome);

console.log(item)
console.log(info)

if((info.nomes == item.nome) && (info.quantidade >= item.quantidade) ){
    console.log("Disponível")
}else{
    console.log("Indisponível")
}