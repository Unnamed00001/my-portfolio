import * as cartSerice from "./services/cart.js" 
import createItem from "./services/item.js"

const myCart = []
// items
const item1 = await createItem("Teclado",60.00, 1);
const item2 = await createItem("Fonte", 120, 1);
const item3 = await createItem("Mouse", 40.80, 1)
const item4 = await createItem("Fone", 30.30, 5)


// add items no carrinho
await cartSerice.addItem(myCart, item1)
await cartSerice.addItem(myCart, item2)
await cartSerice.addItem(myCart, item3)
await cartSerice.addItem(myCart, item4)

// deleta um item do carrinho
await cartSerice.deletItem(myCart, item2.name)

// remove um item do carrinho 
await cartSerice.removeItem(myCart, item4)


// exibe o carrinho 
console.log("Shopee cart list: ")
await cartSerice.displyCart(myCart)

// valor total do carrinho 
console.log("Shopee cart total is:")
await cartSerice.calculateTotal(myCart)

