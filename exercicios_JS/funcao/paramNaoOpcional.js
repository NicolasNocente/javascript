function area(largura, altura){
    const area = largura*altura
    if(area >20){
        console.log(`Valor acima do permitido: ${area}m2.`)
    } else{
        return area
    }
}

const teste = area(5,4)
console.log(teste)
area(6,5)
console.log(area(5,4))