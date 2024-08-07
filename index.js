const canvas = document.getElementById("backgroundgrid")
const canvascontext = canvas.getContext("2d")
const cellsize = 25
const snake = {
    size: cellsize - 2,
    x: canvas.width / 2,
    y: canvas.height / 2,
    length: 1,
}
let movedirection = "right"

window.addEventListener("keydown", (event) => {
    switch (event.key) {
        case "ArrowUp":
            if (movedirection != "down") {
                movedirection = "up"
            }
            break
        case "ArrowDown":
            if (movedirection != "up") {
                movedirection = "down"
            }
            break
        case "ArrowLeft":
            if (movedirection != "right") {
                movedirection = "left"
            }
            break
        case "ArrowRight":
            if (movedirection != "left") {
                movedirection = "right"
            }
            break
        default:
            break
    }
})