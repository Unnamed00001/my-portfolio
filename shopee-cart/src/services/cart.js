// O que meu carrinho pode fazer? 



// -> adicionar item no carrinho 
async function addItem(userCart,item) {
    userCart.push(item)

}

// -> calcular o total do carrinho
async function calculateTotal(userCart) {
   
const result = userCart.reduce((total, item) => total + item.subtotal(), 0)
console.log(`Total: ${result}`)
    
}

// -> deleter items do carrinho 
async function deletItem(userCart, name) {
    const index = userCart.findIndex((item) => item.name === name)

    if (index !== -1) {
        userCart.splice(index, 1)
    }
    
}

/* -> remover um item - dimunui um item
async function removeItem(userCart, index, ) {

    // trasforma o indice visual do usuario, para o indice do backende
    const deleteIndex = index - 1

    //é maior do que zero e se é menor do que o tamanho do carrinho 
    if (index >= 0 && index < userCart.length){
        userCart.splice(deleteIndex, 1)
    }
    
}*/

// -> remover um item - dimunui um item
async function removeItem(userCart, item) {

    // 1. encontrar o indice do item 
    const indexFound = userCart.findIndex((p) => p.name === item.name)

    // 2. caso não encontre o item
    if (indexFound == -1){
        console.log("item não encontrado")
        return;
    }

    // 3. item > 1 subtrarir um item, item = 1 deletar
    if (userCart[indexFound].quantity > 1){
        userCart[indexFound].quantity -=1
        return
    }

    // 4. caso item = 1 deletar o item 
    if (userCart[indexFound].quantity == 1){
        userCart.splice(indexFound, 1)
        return
    }
}

async function displyCart(userCart) {
    
    userCart.forEach((item, index) => {
        console.log(`${index + 1 }. ${item.name} - R$: ${item.price} | ${item.quantity}x | Subtotal: ${item.subtotal()}`)
    })
    
}

export {

    addItem,
    calculateTotal,
    deletItem,
    removeItem,
    displyCart
}


