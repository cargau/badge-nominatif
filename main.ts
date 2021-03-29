function ridicule () {
    tapisBarriere()
}
input.onButtonPressed(Button.A, function () {
    ScrolText.showString(
    "12345",
    SCROLL_DIR.LEFT,
    SCROLL_ROTATE.SR_0,
    100
    )
})
input.onButtonPressed(Button.AB, function () {
    ridicule()
})
function tapisBarriere () {
    basic.showString("Les barriere peuvent avoir un ou des tapis par-dessus cela permet de sauter par-dessus;sans qu'il passe")
    images.createImage(`
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        . . # . .
        `).showImage(0)
}
input.onButtonPressed(Button.B, function () {
    ScrolText.showString(
    "tapisBarriere",
    SCROLL_DIR.RIGHT,
    SCROLL_ROTATE.SR_0,
    100
    )
})
