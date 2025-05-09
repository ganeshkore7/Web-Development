console.log("script.js initializing")
let boxes = Document.querySelector(".container").children

function getRandomColor() {
    return 'rgb(${val1}, ${val2}, ${val3})'

}
Array.from(boxes).forEach(e => {
    e.style.backgroundColor = getRandomColor()
    e.style.color = getRandomColor()

})