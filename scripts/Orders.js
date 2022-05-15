import { getOrders, getMetals, addCustomOrder } from "./database.js"

const buildOrderListItem = (order) => {

    const metals = getMetals()

    const metPrice = metals.find(
        (metal) => {
            if (metal.id === order.metalId) {
                let metalPrice = metal.price.toLocaleString("en-US", {
                    style: "currency",
                    currency: "USD"
                })
                return metalPrice

            }
        }
    )
   // const totalCost = foundMetal.price


   // const costString = totalCost.toLocaleString("en-US", {
    //    style: "currency",
     //   currency: "USD"
    //})
    //return
    //`<li>
      //      Order #${order.id} cost ${costString}
       /// </li>`

}

export const Orders = () => {
    const orders = getOrders()
    let html = "<ul>"

    const listItems = orders.map(buildOrderListItem)

    html += listItems.join("")
    html += `</ul>`

    return html
}









document.addEventListener(
    "change",
    (event) => {
        if (event.target.id === "orderButton") {
            Orders()
            addCustomOrder()
        }
    }
)


