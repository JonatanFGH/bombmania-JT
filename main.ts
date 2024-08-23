tiles.setCurrentTilemap(tilemap`level2`)
for (let index = 0; index <= 4; index++) {
	
}
tiles.setTileAt(tiles.getTileLocation(4, 5), assets.tile`myTile`)
let mySprite2 = sprites.create(img`
    . . . . f f f f f f . . 
    . . f f e e e e f 2 f . 
    . f f e e e e f 2 2 2 f 
    . f e e e f f e e e e f 
    . f f f f e e 2 2 2 2 e 
    . f e 2 2 2 f f f f e 2 
    f f f f f f f e e e f f 
    f f e 4 4 e b f 4 4 e e 
    `, SpriteKind.Player)
let mySprite3 = sprites.create(img`
    . . . . . 6 e e e e e e 
    . . . . 6 7 7 6 e e e e 
    . . . 6 7 7 6 6 6 6 e e 
    . . 6 7 7 6 e e 7 7 7 7 
    . . . 6 6 8 c e 7 7 6 8 
    . . . . . . c e 7 7 e e 
    . . . . . . e e e e e e 
    . . . . . . e e e e e e 
    `, SpriteKind.Player)
let mySprite4 = sprites.create(img`
    . . . . f f f f f f . . 
    . . f f e e e e f 2 f . 
    . f f e e e e f 2 2 2 f 
    . f e e e f f e e e e f 
    . f f f f e e 2 2 2 2 e 
    . f e 2 2 2 f f f f e 2 
    f f f f f f f e e e f f 
    f f e 4 4 e b f 4 4 e e 
    `, SpriteKind.Player)
let mySprite5 = sprites.create(img`
    . . . . . . . . . . . . 
    . . . 2 2 2 2 2 . . . . 
    . . . . . 2 . . . . . . 
    . . . . . 2 . . . . . . 
    . . . . 2 2 2 . . . . . 
    . . . 2 2 2 2 2 . . . . 
    . . . . . . . . . . . . 
    . . . . . . . . . . . . 
    `, SpriteKind.Player)
mySprite2.setPosition(4, 5)
mySprite3.setPosition(147, 5)
mySprite4.setPosition(7, 107)
mySprite5.setPosition(141, 106)
let mySprite = 0
controller.player1.moveSprite(mySprite3)
controller.player2.moveSprite(mySprite2)
controller.player3.moveSprite(mySprite4)
controller.player4.moveSprite(mySprite5)
