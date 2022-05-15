import { getSizes, setSize } from "./database.js"

const sizes = getSizes()


document.addEventListener(
    "change",
    (event) => {
    if (event.target.name === "size"){
        setSize(parseInt(event.target.value))
    }}
)



document.addEventListener(
    "change",
    (event) => {
        if (event.target.name === "size") {
            const size = rightSize(event.target.value)
            window.alert(`User has chosen ${size} carats`)
           } 
            }   
)



let rightSize = (idNumber) => {
    for (const size of sizes) {
        if (parseInt(idNumber) === size.id) {
            return size.carets

        }
    } 
} 

export const DiamondSizes = () => {
    let html = "<ul>"

    // Use .map() for converting objects to <li> elements
    const listItems = sizes.map(size => {
        return `<li>
            <input type="radio" name="size" value="${size.id}" /> ${size.carets}
        </li>`
    })

    html += listItems.join("")
    html += "</ul>"

    return html
}

