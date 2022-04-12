let sprite: game.LedSprite = null
for (let index = 0; index < 3; index++) {
    sprite = game.createSprite(4, 0)
    basic.pause(200)
    for (let index = 0; index < 4; index++) {
        sprite.change(LedSpriteProperty.X, -1)
        basic.pause(200)
    }
    for (let index = 0; index < 4; index++) {
        sprite.change(LedSpriteProperty.X, 1)
        sprite.change(LedSpriteProperty.Y, 1)
        basic.pause(200)
    }
    for (let index = 0; index < 4; index++) {
        sprite.change(LedSpriteProperty.Y, -1)
        basic.pause(200)
    }
    for (let index = 0; index < 4; index++) {
        sprite.change(LedSpriteProperty.Y, 1)
        sprite.change(LedSpriteProperty.X, -1)
        basic.pause(200)
    }
    for (let index = 0; index < 4; index++) {
        sprite.change(LedSpriteProperty.Y, -1)
        basic.pause(200)
    }
    sprite.delete()
}
basic.showIcon(IconNames.Happy)
basic.forever(function () {
	
})
