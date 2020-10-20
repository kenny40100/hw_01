let x = 4
let y = 4
let direction = -1
while (y >= 0) {
    while (x >= 0 && x <= 4) {
        for (let index = 0; index < 5; index++) {
            led.plot(x, y)
            basic.pause(100)
            x += -1
        }
    }
    y += -1
    x = x * direction
}
basic.forever(function () {
	
})
