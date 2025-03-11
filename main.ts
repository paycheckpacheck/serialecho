serial.onDataReceived(serial.delimiters(Delimiters.NewLine), function () {
    RX_DATA = serial.readUntil(serial.delimiters(Delimiters.NewLine))
    basic.showIcon(IconNames.Yes)
    control.waitMicros(10000)
    serial.writeLine(RX_DATA)
})
let RX_DATA = ""
serial.setBaudRate(BaudRate.BaudRate19200)
basic.forever(function () {
    basic.showIcon(IconNames.No)
})
