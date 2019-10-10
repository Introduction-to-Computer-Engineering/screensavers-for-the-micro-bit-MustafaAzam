basic.forever(function () {

    if (input.buttonIsPressed(Button.A)) {
        basic.clearScreen()
        input.onGesture(Gesture.Shake, function () {
            for (let a = 0; a < 5; a++) {
                basic.clearScreen()
                led.plotBrightness(0, 0, 255)
                led.plotBrightness(1, 0, 255)
                led.plotBrightness(2, 0, 255)
                led.plotBrightness(3, 0, 255)
                led.plotBrightness(4, 0, 255)
                basic.pause(100)
                led.plotBrightness(0, 1, 150)
                led.plotBrightness(1, 1, 150)
                led.plotBrightness(2, 1, 150)
                led.plotBrightness(3, 1, 150)
                led.plotBrightness(4, 1, 150)
                basic.pause(100)
                led.plotBrightness(0, 2, 100)
                led.plotBrightness(1, 2, 100)
                led.plotBrightness(2, 2, 100)
                led.plotBrightness(3, 2, 100)
                led.plotBrightness(4, 2, 100)
                basic.pause(100)
                led.plotBrightness(0, 3, 50)
                led.plotBrightness(1, 3, 50)
                led.plotBrightness(2, 3, 50)
                led.plotBrightness(3, 3, 50)
                led.plotBrightness(4, 3, 50)
                basic.pause(100)
                led.plotBrightness(0, 4, 10)
                led.plotBrightness(1, 4, 10)
                led.plotBrightness(2, 4, 10)
                led.plotBrightness(3, 4, 10)
                led.plotBrightness(4, 4, 10)
                basic.pause(100)
                led.unplot(0, 0)
                led.unplot(1, 0)
                led.unplot(2, 0)
                led.unplot(3, 0)
                led.unplot(4, 0)
                basic.pause(100)
                led.unplot(0, 1)
                led.unplot(1, 1)
                led.unplot(2, 1)
                led.unplot(3, 1)
                led.unplot(4, 1)
                basic.pause(100)
                led.unplot(0, 2)
                led.unplot(1, 2)
                led.unplot(2, 2)
                led.unplot(3, 2)
                led.unplot(4, 2)
                basic.pause(100)
                led.unplot(0, 3)
                led.unplot(1, 3)
                led.unplot(2, 3)
                led.unplot(3, 3)
                led.unplot(4, 3)
                basic.pause(100)
                led.unplot(0, 4)
                led.unplot(1, 4)
                led.unplot(2, 4)
                led.unplot(3, 4)
                led.unplot(4, 4)
            }
        })

        input.onGesture(Gesture.LogoUp, function () {
            for (let b = 0; b < 5; b++) {
                basic.clearScreen()
                led.plotBrightness(0, 0, 10)
                basic.pause(100)
                led.plotBrightness(1, 0, 20)
                basic.pause(100)
                led.plotBrightness(2, 0, 30)
                basic.pause(100)
                led.plotBrightness(3, 0, 40)
                basic.pause(100)
                led.plotBrightness(4, 0, 50)
                basic.pause(100)

                led.plotBrightness(4, 1, 60)
                basic.pause(100)
                led.plotBrightness(4, 2, 70)
                basic.pause(100)
                led.plotBrightness(4, 3, 80)
                basic.pause(100)
                led.plotBrightness(4, 4, 90)
                basic.pause(100)

                led.plotBrightness(3, 4, 100)
                basic.pause(100)
                led.plotBrightness(2, 4, 110)
                basic.pause(100)
                led.plotBrightness(1, 4, 120)
                basic.pause(100)
                led.plotBrightness(0, 4, 130)
                basic.pause(100)

                led.plotBrightness(0, 3, 140)
                basic.pause(100)
                led.plotBrightness(0, 2, 150)
                basic.pause(100)
                led.plotBrightness(0, 1, 160)
                basic.pause(100)

                led.plotBrightness(1, 1, 170)
                basic.pause(100)
                led.plotBrightness(2, 1, 180)
                basic.pause(100)
                led.plotBrightness(3, 1, 190)
                basic.pause(100)

                led.plotBrightness(3, 2, 200)
                basic.pause(100)
                led.plotBrightness(3, 3, 210)
                basic.pause(100)

                led.plotBrightness(2, 3, 220)
                basic.pause(100)

                led.plotBrightness(1, 3, 230)
                basic.pause(100)

                led.plotBrightness(1, 2, 240)
                basic.pause(100)

                led.plotBrightness(2, 2, 255)
                basic.pause(100)

                //-------------------------------------

                led.unplot(0, 0)
                basic.pause(100)
                led.unplot(1, 0)
                basic.pause(100)
                led.unplot(2, 0)
                basic.pause(100)
                led.unplot(3, 0)
                basic.pause(100)
                led.unplot(4, 0)
                basic.pause(100)

                led.unplot(4, 1)
                basic.pause(100)
                led.unplot(4, 2)
                basic.pause(100)
                led.unplot(4, 3)
                basic.pause(100)
                led.unplot(4, 4)
                basic.pause(100)

                led.unplot(3, 4)
                basic.pause(100)
                led.unplot(2, 4)
                basic.pause(100)
                led.unplot(1, 4)
                basic.pause(100)
                led.unplot(0, 4)
                basic.pause(100)

                led.unplot(0, 3)
                basic.pause(100)
                led.unplot(0, 2)
                basic.pause(100)
                led.unplot(0, 1)
                basic.pause(100)

                led.unplot(1, 1)
                basic.pause(100)
                led.unplot(2, 1)
                basic.pause(100)
                led.unplot(3, 1)
                basic.pause(100)

                led.unplot(3, 2)
                basic.pause(100)
                led.unplot(3, 3)
                basic.pause(100)

                led.unplot(2, 3)
                basic.pause(100)

                led.unplot(1, 3)
                basic.pause(100)

                led.unplot(1, 2)
                basic.pause(100)

                led.unplot(2, 2)
                basic.pause(100)
            }

        })

        input.onGesture(Gesture.TiltLeft, function () {
            for (let c = 0; c < 5; c++) {
                basic.clearScreen()
                led.plotBrightness(2, 2, 255)
                basic.pause(100)
                led.plotBrightness(3, 3, 255)
                basic.pause(100)
                led.plotBrightness(4, 4, 255)
                basic.pause(100)
                led.plotBrightness(3, 4, 255)
                basic.pause(100)
                led.plotBrightness(2, 4, 255)
                basic.pause(100)
                led.plotBrightness(1, 4, 255)
                basic.pause(100)
                led.plotBrightness(0, 4, 255)
                basic.pause(100)
                led.plotBrightness(1, 3, 255)
                basic.pause(100)
                led.plotBrightness(2, 2, 255)
                basic.pause(100)
                led.plotBrightness(3, 1, 255)
                basic.pause(100)
                led.plotBrightness(4, 0, 255)
                basic.pause(100)
                led.plotBrightness(3, 0, 255)
                basic.pause(100)
                led.plotBrightness(2, 0, 255)
                basic.pause(100)
                led.plotBrightness(1, 0, 255)
                basic.pause(100)
                led.plotBrightness(0, 0, 255)
                basic.pause(100)
                led.plotBrightness(1, 1, 255)
                basic.pause(100)

                //-------------------

                led.unplot(2, 2)
                basic.pause(100)
                led.unplot(3, 3)
                basic.pause(100)
                led.unplot(4, 4)
                basic.pause(100)
                led.unplot(3, 4)
                basic.pause(100)
                led.unplot(2, 4)
                basic.pause(100)
                led.unplot(1, 4)
                basic.pause(100)
                led.unplot(0, 4)
                basic.pause(100)
                led.unplot(1, 3)
                basic.pause(100)
                led.unplot(2, 2)
                basic.pause(100)
                led.unplot(3, 1)
                basic.pause(100)
                led.unplot(4, 0)
                basic.pause(100)
                led.unplot(3, 0)
                basic.pause(100)
                led.unplot(2, 0)
                basic.pause(100)
                led.unplot(1, 0)
                basic.pause(100)
                led.unplot(0, 0)
                basic.pause(100)
                led.unplot(1, 1)
                basic.pause(100)
            }

        })

        input.onGesture(Gesture.TiltRight, function () {
            for (let d = 0; d < 5; d++) {
                basic.clearScreen()
                led.plotBrightness(2, 2, 150)

                led.plot(0, 0)
                led.plot(1, 1)
                led.plot(4, 4)
                led.plot(3, 3)
                basic.pause(100)
                led.unplot(0, 0)
                led.unplot(1, 1)
                led.unplot(4, 4)
                led.unplot(3, 3)

                led.plot(2, 0)
                led.plot(2, 1)
                led.plot(2, 4)
                led.plot(2, 3)
                basic.pause(100)
                led.unplot(2, 0)
                led.unplot(2, 1)
                led.unplot(2, 4)
                led.unplot(2, 3)

                led.plot(4, 0)
                led.plot(3, 1)
                led.plot(0, 4)
                led.plot(1, 3)
                basic.pause(100)
                led.unplot(4, 0)
                led.unplot(3, 1)
                led.unplot(0, 4)
                led.unplot(1, 3)

                led.plot(4, 2)
                led.plot(3, 2)
                led.plot(0, 2)
                led.plot(1, 2)
                basic.pause(100)
                led.unplot(4, 2)
                led.unplot(0, 2)
                led.unplot(3, 2)
                led.unplot(1, 2)

                led.plot(4, 4)
                led.plot(3, 3)
                led.plot(0, 0)
                led.plot(1, 1)
                basic.pause(100)
                led.unplot(4, 4)
                led.unplot(3, 3)
                led.unplot(0, 0)
                led.unplot(1, 1)

                led.plot(2, 4)
                led.plot(2, 3)
                led.plot(2, 0)
                led.plot(2, 1)
                basic.pause(100)
                led.unplot(2, 4)
                led.unplot(2, 3)
                led.unplot(2, 0)
                led.unplot(2, 1)

                led.plot(0, 4)
                led.plot(1, 3)
                led.plot(4, 0)
                led.plot(3, 1)
                basic.pause(100)
                led.unplot(0, 4)
                led.unplot(1, 3)
                led.unplot(4, 0)
                led.unplot(3, 1)

                led.plot(0, 2)
                led.plot(1, 2)
                led.plot(4, 2)
                led.plot(3, 2)
                basic.pause(100)
                led.unplot(0, 2)
                led.unplot(1, 2)
                led.unplot(4, 2)
                led.unplot(3, 2)
            }

        })

        input.onGesture(Gesture.LogoDown, function () {
            for (let e = 0; e < 5; e++) {
                basic.clearScreen()
                led.plot(2, 2)

                basic.pause(500)
                led.unplot(2, 2)

                led.plot(1, 1)
                led.plot(2, 1)
                led.plot(3, 1)
                led.plot(1, 2)
                led.plot(3, 2)
                led.plot(1, 3)
                led.plot(2, 3)
                led.plot(3, 3)

                basic.pause(500)
                led.unplot(1, 1)
                led.unplot(2, 1)
                led.unplot(3, 1)
                led.unplot(1, 2)
                led.unplot(3, 2)
                led.unplot(1, 3)
                led.unplot(2, 3)
                led.unplot(3, 3)

                led.plot(0, 0)
                led.plot(1, 0)
                led.plot(2, 0)
                led.plot(3, 0)
                led.plot(4, 0)
                led.plot(0, 1)
                led.plot(0, 2)
                led.plot(0, 3)
                led.plot(0, 4)
                led.plot(4, 1)
                led.plot(4, 2)
                led.plot(4, 3)
                led.plot(4, 4)
                led.plot(1, 4)
                led.plot(2, 4)
                led.plot(3, 4)

                basic.pause(500)

                led.unplot(0, 0)
                led.unplot(1, 0)
                led.unplot(2, 0)
                led.unplot(3, 0)
                led.unplot(4, 0)
                led.unplot(0, 1)
                led.unplot(0, 2)
                led.unplot(0, 3)
                led.unplot(0, 4)
                led.unplot(4, 1)
                led.unplot(4, 2)
                led.unplot(4, 3)
                led.unplot(4, 4)
                led.unplot(1, 4)
                led.unplot(2, 4)
                led.unplot(3, 4)
            }

        })

    }
    else if (input.buttonIsPressed(Button.B)) {
        basic.clearScreen()
        basic.showString("Awake")
    }

})