let y = 4
let x = 4
for (let index = 0; index < 5; index++) {
    led.plot(x, y)
    basic.pause(100)
    x = x - 1
}
y = y - 1
for (let index = 0; index < 6; index++) {
    led.plot(x, y)
    basic.pause(100)
    x = x + 1
}
y = y - 1
for (let index = 0; index < 6; index++) {
    led.plot(x, y)
    basic.pause(100)
    x = x - 1
}
y = y - 1
for (let index = 0; index < 6; index++) {
    led.plot(x, y)
    basic.pause(100)
    x = x + 1
}
y = y - 1
for (let index = 0; index < 6; index++) {
    led.plot(x, y)
    basic.pause(100)
    x = x - 1
}
basic.forever(function () {
	
})
