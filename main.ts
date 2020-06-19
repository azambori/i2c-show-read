pins.setPull(DigitalPin.P19, PinPullMode.PullUp)
pins.setPull(DigitalPin.P20, PinPullMode.PullUp)
basic.showIcon(IconNames.Heart)
basic.pause(500)
pins.i2cWriteNumber(
111,
0,
NumberFormat.UInt8LE,
true
)
pins.i2cWriteNumber(
111,
128,
NumberFormat.UInt8LE,
false
)
basic.forever(function () {
    while (true) {
        basic.showIcon(IconNames.SmallHeart)
        basic.pause(200)
        pins.i2cWriteNumber(
        111,
        0,
        NumberFormat.UInt8LE,
        false
        )
        basic.showString("" + pins.i2cReadNumber(111, NumberFormat.UInt8LE, false) + pins.i2cReadNumber(111, NumberFormat.UInt8LE, false) + pins.i2cReadNumber(111, NumberFormat.UInt8LE, false) + pins.i2cReadNumber(111, NumberFormat.UInt8LE, false) + pins.i2cReadNumber(111, NumberFormat.UInt8LE, false) + pins.i2cReadNumber(111, NumberFormat.UInt8LE, false) + pins.i2cReadNumber(111, NumberFormat.UInt8LE, false))
    }
})
