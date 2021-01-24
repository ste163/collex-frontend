// Utils for handling Arrow Icon's svg class
export const ChangeArrowIconClassOnHover = (hoverEvent, isOnMouseOver, isDisabledState) => {

    // Must convert HTMLCollection of SVG elements to an Array to loop through children
    const svgs = Array.from(hoverEvent.currentTarget.firstElementChild.children[1].children)  
    // If isOnMouseOver is true, change classList; if false, revert
    if (isOnMouseOver) {
        svgs.forEach(svg => {                           
            svg.classList.remove("icon__black")
            svg.classList.add("icon__white")
        })      
    } else {
        // On mouseLeave event
        svgs.forEach(svg => {                           
            svg.classList.remove("icon__white")
            svg.classList.add("icon__black")
        })
    }
}