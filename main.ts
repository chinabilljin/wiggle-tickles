let item = 0
Tinybit.RGB_Car_Big(Tinybit.enColor.OFF)
Tinybit.RGB_Car_Program().clear()
Tinybit.RGB_Car_Program().show()
input.calibrateCompass()
basic.pause(2000)
basic.showIcon(IconNames.Heart)
let last_m = input.compassHeading()
let now_m = input.compassHeading()
basic.forever(function () {
    last_m = input.compassHeading()
    if (now_m - 15 <= 0) {
        item = 0
    } else {
        item = now_m - 25
    }
    if (last_m < item || last_m > now_m + 15) {
        basic.showIcon(IconNames.Chessboard)
        for (let index = 0; index < 5; index++) {
            Tinybit.CarCtrlSpeed(Tinybit.CarState.Car_SpinLeft, 75)
            basic.pause(30)
            Tinybit.CarCtrlSpeed(Tinybit.CarState.Car_SpinRight, 75)
            basic.pause(30)
        }
        Tinybit.CarCtrlSpeed(Tinybit.CarState.Car_Stop, 0)
        basic.showIcon(IconNames.Heart)
        basic.pause(500)
        now_m = input.compassHeading()
        music.playTone(262, music.beat(BeatFraction.Quarter))
    }
})
basic.forever(function () {
    if (last_m < item || last_m > now_m + 15) {
        Tinybit.RGB_Car_Big2(0, 0, 255)
        Tinybit.RGB_Car_Program().showColor(neopixel.colors(NeoPixelColors.Blue))
        Tinybit.RGB_Car_Program().show()
    } else {
        Tinybit.RGB_Car_Big(Tinybit.enColor.OFF)
        Tinybit.RGB_Car_Program().clear()
        Tinybit.RGB_Car_Program().show()
    }
})
