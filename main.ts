input.onButtonPressed(Button.A, function () {
    hajo.move(-1)
})
input.onGesture(Gesture.Shake, function () {
	
})
input.onButtonPressed(Button.AB, function () {
    tűz = game.createSprite(randint(0, 4), 4)
})
input.onButtonPressed(Button.B, function () {
    hajo.move(1)
})
let tűz: game.LedSprite = null
let hajo: game.LedSprite = null
let ellenseg = game.createSprite(randint(0, 4), 0)
hajo = game.createSprite(randint(0, 4), 4)
let beton = game.createSprite(randint(0, 4), 1)
basic.forever(function () {
    beton.move(1)
    if (beton.isTouchingEdge()) {
        beton.ifOnEdgeBounce()
        basic.pause(600)
    }
    if (ellenseg.isTouchingEdge()) {
        ellenseg.ifOnEdgeBounce()
        basic.pause(100)
    }
    ellenseg.move(1)
    if (tűz) {
        if (tűz.isTouching(beton)) {
            game.gameOver()
        }
        if (tűz.isTouching(hajo)) {
            tűz.turn(Direction.Left, 90)
            tűz.move(1)
            basic.pause(200)
            tűz.move(1)
            basic.pause(200)
            tűz.move(1)
            basic.pause(200)
            tűz.move(1)
        }
        if (ellenseg.isTouching(tűz)) {
            ellenseg.delete()
            tűz.delete()
            ellenseg = game.createSprite(randint(0, 4), 0)
            game.addScore(1)
            if (tűz.isTouching(tűz)) {
                game.gameOver()
            }
            if (ellenseg.isTouching(tűz)) {
                game.gameOver()
            }
        }
    }
    if (game.score() > 35) {
        basic.showString("nyertel")
    }
})
