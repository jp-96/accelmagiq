let estimated: number[] = []
basic.showString("Hello!")
basic.forever(function () {
    estimated = accelmagiq.estimate()
    serial.writeNumbers(estimated)
})
