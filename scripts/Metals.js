import { getMetals, setMetal } from "./database.js"
document.addEventListener(
    "change",
    (event) => {
        if (event.target.name === "metal") {
            setMetal(parseInt(event.target.value))
        }
    }
)



const metals = getMetals()

document.addEventListener(
    "change",
    (event) => {
        if(event.target.name === "metal"){
           // const metal = rightMetal(event.target.value)
           // window.alert(`User chose ${metal}`)
            setMetal(parseInt(event.target.value))
        }
    }
)

//this function finds the metal name for a pop up when selected
const rightMetal = (metalId) => {
    for (const metal of metals) {
        if (parseInt(metalId) === metal.id) {
            return metal.metal
        }
    }
}

export const Metals = () => {
    let html = "<ul>"

    // This is how you have been converting objects to <li> elements
    for (const metal of metals) {
        html += `<li>
            <input type="radio" name="metal" value="${metal.id}" /> ${metal.metal}
        </li>`
    }

    html += "</ul>"
    return html
}



