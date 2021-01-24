// Util for handling hover class changes for SVG arrows, specifically. Should work for any with some tweaking
export const ChangeSvgClassOnHover = (hoverEvent, isOnMouseOver) => {

    // Must convert HTMLCollection of SVG elements to an Array to loop through children
    const svgs = Array.from(hoverEvent.currentTarget.firstElementChild.children[1].children)  
    // If isOnMouseOver is true, change classList; if false, revert
    if (isOnMouseOver) {
        svgs.forEach(line => {                           
            line.classList.remove("icon__black")
            line.classList.add("icon__white")
        })      
    } else {
        svgs.forEach(line => {                           
            line.classList.remove("icon__white")
            line.classList.add("icon__black")
        })  
    }
}