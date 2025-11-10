let angle = 0
let strip = robotbit.rgb()
// MakeCode JavaScript (TypeScript-based)
// Requires Robot:bit extension

strip.setBrightness(50)
strip.showColor(neopixel.colors(NeoPixelColors.Blue))
let whale = images.createBigImage(`
    . . . . . . . . . .
    . # # . . . # . # .
    # . # # . . # # # .
    # # # # # . . # . .
    # # # # # # # # . .
    `)
basic.forever(function () {
    // Subir ángulo de 60 a 120
    for (let i = 0; i <= 70; i++) {
        angle = 70 + i
        robotbit.Servo(robotbit.Servos.S1, angle)
        basic.pause(10)
    }
    // Bajar ángulo de 120 a 60
    for (let j = 0; j <= 70; j++) {
        angle = 130 - j
        robotbit.Servo(robotbit.Servos.S1, angle)
        basic.pause(10)
    }
    whale.scrollImage(1, 50)
})
basic.forever(function () {
    whale.scrollImage(1, 1000)
})
