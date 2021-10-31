input.onSound(DetectedSound.Loud, function () {
    music.setVolume(200)
    music.playMelody("C E G C5 C5 C5 C5 C5 ", 226)
    basic.showIcon(IconNames.Surprised)
    basic.pause(300)
    basic.clearScreen()
})
soundExpression.happy.play()
basic.forever(function () {
	
})
