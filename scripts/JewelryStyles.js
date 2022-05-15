import { getStyles, setStyle } from "./database.js"

const styles = getStyles()

document.addEventListener(
    "change",
    (event) => {
        if (event.target.name === "style"){
            setStyle(parseInt(event.target.value))
        }
    }
)


document.addEventListener(
    "change",
    (event) => {
        if (event.target.name === "style"){
            const style = rightStyle(event.target.value)
            window.alert(`User chose ${style}`)
        }
    }
)


const rightStyle = (styleId) => {
    for (const style of styles){
        if (parseInt(styleId) === style.id){
            return style.style
        }
    }
}


export const JewelryStyles = () => {
    let html = "<ul>"

    const listItems = styles.map(style => {
        return `<li>
        <input type="radio" name="style" value="${style.id}" /> ${style.style}
        </li>`
    })

    html += listItems.join("")

    html += "</ul>"
    return html
}


