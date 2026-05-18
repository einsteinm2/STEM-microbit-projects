// Digital vs Analog Signals on micro:bit
// Reads touch (P0), potentiometer (P1), and light level,
// then streams values to the serial plotter.

basic.forever(function () {
    let touchP0 = input.pinIsPressed(TouchPin.P0) ? 1 : 0
    let analogP1 = pins.analogReadPin(AnalogPin.P1)
    let lightLevel = input.lightLevel()

    serial.writeValue("touchP0", touchP0)
    serial.writeValue("analogP1", analogP1)
    serial.writeValue("light", lightLevel)

    basic.pause(100)
})
