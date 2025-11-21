function gammaAdjust (value: number, gamma: number) {
    normalized = value / 255
    corrected = normalized ** gamma * 255
    return Math.min(Math.max(Math.round(corrected), 0), 255)
}
let aB = 0
let aG = 0
let aR = 0
let b = 0
let g = 0
let r = 0
let corrected = 0
let normalized = 0
let strip = neopixel.create(DigitalPin.P15, 8, NeoPixelMode.RGB)
strip.setBrightness(50)
let gamma = 2.6
basic.forever(function () {
    r = envirobit.getRed()
    g = envirobit.getGreen()
    b = envirobit.getBlue()
    aR = gammaAdjust(r, gamma)
    aG = gammaAdjust(g, gamma)
    aB = gammaAdjust(b, gamma)
    strip.showColor(neopixel.rgb(aR, aG, aB))
})