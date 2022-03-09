let sasso = 0
input.onGesture(Gesture.Shake, function () {
    let carta = 0
    sasso = randint(1, 3)
    if (sasso == 1) {
        basic.showLeds(`
            # # # # #
            # # # # #
            # # # # #
            # # # # #
            # # # # #
            `)
    } else if (carta == 2) {
        basic.showLeds(`
            . . . . .
            . # # # .
            . # # # .
            . # # # .
            . . . . .
            `)
    } else {
        let forbici = 0
        if (forbici == 3) {
            basic.showLeds(`
                # # . . #
                # # . # .
                . . # . .
                # # . # .
                # # . . #
                `)
        }
    }
})
basic.forever(function () {
	
})
