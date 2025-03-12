enum RadioMessage {
    message1 = 49434
}
radio.onReceivedString(function (receivedString) {
    control.waitMicros(10000)
    basic.showIcon(IconNames.Yes)
    serial.writeLine(receivedString)
})
serial.onDataReceived(serial.delimiters(Delimiters.NewLine), function () {
    RX_DATA = serial.readUntil(serial.delimiters(Delimiters.NewLine))
    basic.showIcon(IconNames.Yes)
    control.waitMicros(10000)
    radio.sendString(RX_DATA)
})
let RX_DATA = ""
radio.setGroup(1)
radio.setTransmitPower(7)
serial.setBaudRate(BaudRate.BaudRate19200)
basic.forever(function () {
    basic.showIcon(IconNames.No)
})
