import { getOrders, getMetals, getSizes, getStyles, addCustomOrder } from "./database.js"

const buildOrderListItem = (order) => {

    const metals = getMetals()
    const sizes = getSizes()
    const styles = getStyles()

    const foundMetal = metals.find(
        (metal) => {

            return metal.id === order.metalId
        })

    const foundSizes = sizes.find((style) => {
        return style.id === order.sizeId
    })
    const foundStyles = styles.find((style) => {
        return style.id === order.styleId
    })
    const totalCost = (foundMetal.price + foundSizes.price + foundStyles.price) 
    const costString = totalCost.toLocaleString("en-US", {
        style: "currency",
        currency: "USD"
    })
    return `<li> Order#${order.id} cost ${costString}</li>`
      
}
export const Orders = () => {
    /*
        Can you explain why the state variable has to be inside
        the component function for Orders, but not the others?
    */
   // gets copy of the 'orders' array from database.js
    const orders = getOrders()
let html = "<ul>"
    const listItems = orders.map(buildOrderListItem)
    ////const listItem = orders.join(listItems)
html += listItems.join("")
   html +=  "</ul>"

    return html
}







//idk why this is even here it was supposed to do the same thing, idk why i'm saving it.  just in case i guess.
//document.addEventListener(
  //  "change",
    //(event) => {
      //  if (event.target.id === "orderButton") {
        //    addCustomOrder()
          //  Orders()
       // }
   // }
//)


