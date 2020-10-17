let y = 4
let x = 4
let z = 0
let w = 4
basic.forever(function () {
    if (x >= z) {
        for (let index = 0; index < 5; index++) {
            led.plot(x, y)
            basic.pause(100)
            x = x - 1
        }
    } else if (x <= w) {
        y = y - 1
        for (let index = 0; index < 5; index++) {
            led.plot(x, y)
            basic.pause(100)
            x = x + 1
        }
    }
})
