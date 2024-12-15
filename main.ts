let note = 0
input.onButtonEvent(Button.A, input.buttonEventClick(), function () {
    note = randint(1, 2)
    basic.showNumber(note)
})
