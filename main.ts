input.onButtonPressed(Button.A, function () {
    if (Number2 > 0) {
        Number2 += -1
        basic.showNumber(Number2)
    }
})
input.onButtonPressed(Button.AB, function () {
    CountDown(Number2)
})
input.onButtonPressed(Button.B, function () {
    Number2 += 2
    basic.showNumber(Number2)
})
function CountDown (num: number) {
    for (let index = 0; index <= num; index++) {
        basic.showNumber(num - index)
        music.playTone(262, music.beat(BeatFraction.Quarter))
    }
    music.playTone(392, music.beat(BeatFraction.Half))
    basic.showString("GO")
}
let Number2 = 0
Number2 = 0
