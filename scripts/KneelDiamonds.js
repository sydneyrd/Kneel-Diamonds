
import { DiamondSizes } from "./DiamondSizes.js"
import { JewelryStyles } from "./JewelryStyles.js"
import { Orders } from "./Orders.js"
import { Metals } from "./Metals.js"
import { addCustomOrder } from "./database.js"


//this click event should add the transient order to the database
document.addEventListener(
    "click",
    (event) => {
        if (event.target.id === "orderButton") {
            addCustomOrder()
            
            
            const orderHTML = document.querySelector(".orders")
             orderHTML.innerHTML += Orders()
            
           
            const ckbxs = document.querySelectorAll('input[name="type"], input[name="metal"], input[name="size"], input[name="style"]' )
            ckbxs.forEach(ckbx => ckbx.checked = false)
        }
    }
)


export const KneelDiamonds = () => {
    return `
        <h1>Kneel Diamonds</h1>

        <article class="choices">
            <section class="choices__metals options">
                <h2>Metals</h2>
                ${Metals()}
            </section>
            <section class="choices__sizes options">
                <h2>Sizes</h2>
                ${DiamondSizes()}
            </section>
            <section class="choices__styles options">
                <h2>Styles</h2>
                ${JewelryStyles()}
            </section>
        </article>

        <article id="orders">
            <button id="orderButton">Create Custom Order</button>
            
        </article>

        <article class="customOrders">
            <h2>Custom Jewelry Orders</h2>
            
            <ul class="orders"></ul>
        </article>
    `
}

