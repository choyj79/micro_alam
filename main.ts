input.onButtonPressed(Button.A, function () {
    음악정지 = 1
})
input.onButtonPressed(Button.B, function () {
    OLED.writeNumNewLine(조도값)
})
let 조도값 = 0
let 음악정지 = 0
basic.clearScreen()
let 기준값 = 50
음악정지 = 0
basic.forever(function () {
    조도값 = pins.analogReadPin(AnalogPin.P2)
    if (조도값 > 기준값) {
        if (음악정지 == 0) {
            basic.showLeds(`
                # . # . #
                . # # # .
                # # # # #
                . # # # .
                # . # . #
                `)
            music.startMelody(music.builtInMelody(Melodies.Prelude), MelodyOptions.Once)
            pins.digitalWritePin(DigitalPin.P1, 0)
        } else {
            if (음악정지 > 0) {
                basic.showLeds(`
                    # . # . #
                    . # # # .
                    # # # # #
                    . # # # .
                    # . # . #
                    `)
                music.stopAllSounds()
            }
        }
    } else {
        if (조도값 < 기준값) {
            basic.showIcon(IconNames.Heart)
            pins.digitalWritePin(DigitalPin.P1, 1)
            music.stopAllSounds()
        }
    }
})
basic.forever(function () {
    조도값 = pins.analogReadPin(AnalogPin.P2)
    if (조도값 > 기준값) {
        if (음악정지 == 0) {
            basic.showLeds(`
                # . # . #
                . # # # .
                # # # # #
                . # # # .
                # . # . #
                `)
            music.startMelody(music.builtInMelody(Melodies.Prelude), MelodyOptions.Once)
            pins.digitalWritePin(DigitalPin.P1, 0)
        } else {
            if (음악정지 > 0) {
                basic.showLeds(`
                    # . # . #
                    . # # # .
                    # # # # #
                    . # # # .
                    # . # . #
                    `)
                music.stopAllSounds()
            }
        }
    } else {
        if (조도값 < 기준값) {
            음악정지 = 0
            basic.showIcon(IconNames.Heart)
            pins.digitalWritePin(DigitalPin.P1, 1)
            music.stopAllSounds()
        }
    }
})
