namespace SpriteKind {
    export const slope = SpriteKind.create()
    export const slope2 = SpriteKind.create()
    export const slope3 = SpriteKind.create()
    export const slope4 = SpriteKind.create()
    export const slope5 = SpriteKind.create()
    export const slope6 = SpriteKind.create()
    export const logo = SpriteKind.create()
    export const upstairs = SpriteKind.create()
    export const tree = SpriteKind.create()
}
controller.B.onEvent(ControllerButtonEvent.Pressed, function () {
    color.Brighten.startScreenEffect(100)
})
scene.onOverlapTile(SpriteKind.Player, sprites.builtin.forestTiles0, function (sprite, location) {
    tiles.destroySpritesOfKind(SpriteKind.tree)
    tiles.destroySpritesOfKind(SpriteKind.upstairs)
    tiles.destroySpritesOfKind(SpriteKind.Enemy)
    tiles.setCurrentTilemap(tilemap`level6`)
    tiles.placeOnRandomTile(mySprite3, assets.tile`myTile50`)
    tiles.coverAllTiles(assets.tile`myTile50`, assets.tile`myTile57`)
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile24`, function (sprite, location) {
    tiles.setCurrentTilemap(tilemap`level1`)
    tiles.coverAllTiles(sprites.builtin.forestTiles0, assets.tile`myTile36`)
    tiles.placeOnRandomTile(mySprite3, assets.tile`myTile58`)
    for (let value5 of tiles.getTilesByType(assets.tile`myTile28`)) {
        mySprite2 = sprites.create(img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . 6 6 6 6 
            . . . . . . . . . . . 6 7 7 7 7 
            . . . . . . . 6 6 6 6 6 7 7 7 7 
            . . . . . . . 6 6 6 6 6 7 7 7 7 
            . . . . . . 6 7 7 7 6 6 6 6 6 7 
            . . . . . . 6 7 7 7 6 7 7 7 7 7 
            . . . 6 6 6 6 6 6 6 7 7 7 7 7 7 
            . 6 6 6 6 6 7 7 6 6 7 7 7 7 7 7 
            . 6 6 6 6 6 7 7 6 6 7 7 7 7 7 7 
            6 6 6 6 6 7 7 7 6 6 7 7 7 7 7 5 
            . 6 6 6 6 7 7 6 7 7 7 7 7 7 7 7 
            . c 6 7 7 6 6 7 7 7 7 6 7 7 7 7 
            . c 6 7 7 6 6 7 7 7 7 6 7 7 7 7 
            c c 7 7 7 6 6 6 6 6 6 7 7 7 7 7 
            c c 7 6 6 6 6 6 6 6 7 7 7 7 7 7 
            `, SpriteKind.Enemy)
        tiles.placeOnTile(mySprite2, value5)
        characterAnimations.loopFrames(
        mySprite2,
        [img`
            . . . . f f f f . . . . . 
            . . f f 7 7 7 7 f f . . . 
            . f f 7 7 7 7 7 7 f f . . 
            f 7 7 7 7 7 7 7 7 7 f f . 
            f 7 7 7 7 7 7 7 7 7 7 f . 
            f 7 7 7 7 7 7 7 7 7 7 f . 
            f 7 7 7 7 7 7 7 7 7 7 f . 
            f 7 7 7 7 7 7 7 7 7 7 f . 
            f 7 7 7 7 7 7 7 7 7 7 f . 
            . f 7 7 7 7 7 7 7 7 f . . 
            . f 7 7 7 7 7 7 7 7 f . . 
            f e f f f f f f f f e f . 
            e 4 f 7 7 7 7 7 7 c 4 e . 
            e e f 6 6 6 6 6 6 f e e . 
            . . . f f f f f f . . . . 
            . . . f f . . f f . . . . 
            `],
        100,
        characterAnimations.rule(Predicate.NotMoving, Predicate.FacingUp)
        )
        characterAnimations.loopFrames(
        mySprite2,
        [img`
            . . . . . f f f f f . . . 
            . . . f f f f f f f f f . 
            . . f f f c f f f f f f . 
            . . f f c f f f c f f f f 
            f f c c f f f c c f f c f 
            f f f f f e f f f f c c f 
            . f f f e e f f f f f f f 
            . . f f e e f 2 f e e f f 
            . . . f 4 4 f 2 e 4 e f . 
            . . . f 4 4 4 4 e f f f . 
            . . . f f e e e e e f . . 
            . . . f 7 7 7 e 4 4 e . . 
            . . . f 7 7 7 e 4 4 e . . 
            . . . f 6 6 6 f e e f . . 
            . . . . f f f f f f . . . 
            . . . . . . f f f . . . . 
            `],
        100,
        characterAnimations.rule(Predicate.NotMoving, Predicate.FacingLeft)
        )
        characterAnimations.loopFrames(
        mySprite2,
        [img`
            . . . . f f f f . . . . . 
            . . f f f f f f f f . . . 
            . f f f f f f c f f f . . 
            f f f f f f c c f f f c . 
            f f f c f f f f f f f c . 
            c c c f f f e e f f c c . 
            f f f f f e e f f c c f . 
            f f f 2 f e e f 2 f f f . 
            . f 4 2 f 4 4 f 2 4 f . . 
            . f e 4 4 4 4 4 4 e f . . 
            . f f f e e e e f f f . . 
            f e f b 7 7 7 7 b f e f . 
            e 4 f 7 7 7 7 7 7 f 4 e . 
            e e f 6 6 6 6 6 6 f e e . 
            . . . f f f f f f . . . . 
            . . . f f . . f f . . . . 
            `],
        100,
        characterAnimations.rule(Predicate.NotMoving, Predicate.FacingDown)
        )
        characterAnimations.loopFrames(
        mySprite2,
        [img`
            . . . f f f f f . . . . . 
            . f f f f f f f f f . . . 
            . f f f f f f c f f f . . 
            f f f f c f f f c f f . . 
            f c f f c c f f f c c f f 
            f c c f f f f e f f f f f 
            f f f f f f f e e f f f . 
            f f e e f 2 f e e f f . . 
            . f e 4 e 2 f 4 4 f . . . 
            . f f f e 4 4 4 4 f . . . 
            . . f e e e e e f f . . . 
            . . e 4 4 e 7 7 7 f . . . 
            . . e 4 4 e 7 7 7 f . . . 
            . . f e e f 6 6 6 f . . . 
            . . . f f f f f f . . . . 
            . . . . f f f . . . . . . 
            `],
        100,
        characterAnimations.rule(Predicate.NotMoving, Predicate.FacingRight)
        )
        characterAnimations.loopFrames(
        mySprite2,
        [img`
            . . . f f f f f . . . . . 
            . f f f f f f f f f . . . 
            . f f f f f f c f f f . . 
            f f f f c f f f c f f . . 
            f c f f c c f f f c c f f 
            f c c f f f f e f f f f f 
            f f f f f f f e e f f f . 
            f f e e f 2 f e e f f . . 
            . f e 4 e 2 f 4 4 f . . . 
            . f f f e 4 4 4 4 f . . . 
            . . f e e e e e f f . . . 
            . . e 4 4 e 7 7 7 f . . . 
            . . e 4 4 e 7 7 7 f . . . 
            . . f e e f 6 6 6 f . . . 
            . . . f f f f f f . . . . 
            . . . . f f f . . . . . . 
            `,img`
            . . . . . . . . . . . . . 
            . . . f f f f f f . . . . 
            . f f f f f f f f f . . . 
            . f f f f f f c f f f . . 
            f f f f c f f f c f f f . 
            f c f f c c f f f c c f f 
            f c c f f f f e f f f f f 
            f f f f f f f e e f f f . 
            f f e e f 2 f e e f f . . 
            . f e 4 e 2 f 4 4 f f . . 
            . f f f e e 4 4 4 f . . . 
            . . f e 4 4 e e f f . . . 
            . . f e 4 4 e 7 7 f . . . 
            . f f f e e f 6 6 f f . . 
            . f f f f f f f f f f . . 
            . . f f . . . f f f . . . 
            `,img`
            . . . . . . . . . . . . . 
            . . . f f f f f f . . . . 
            . f f f f f f f f f . . . 
            . f f f f f f c f f f . . 
            f f f f c f f f c f f f . 
            f c f f c c f f f c c f f 
            f c c f f f f e f f f f f 
            f f f f f f f e e f f f . 
            f f e e f 2 f e e f f f . 
            f f e 4 e 2 f 4 4 f f . . 
            . f f f e 4 4 4 4 f . . . 
            . 4 4 4 e e e e f f . . . 
            . e 4 4 e 7 7 7 7 f . . . 
            . f e e f 6 6 6 6 f f . . 
            . f f f f f f f f f f . . 
            . . f f . . . f f f . . . 
            `],
        100,
        characterAnimations.rule(Predicate.Moving, Predicate.FacingRight)
        )
        characterAnimations.loopFrames(
        mySprite2,
        [img`
            . . . . . f f f f f . . . 
            . . . f f f f f f f f f . 
            . . f f f c f f f f f f . 
            . . f f c f f f c f f f f 
            f f c c f f f c c f f c f 
            f f f f f e f f f f c c f 
            . f f f e e f f f f f f f 
            . . f f e e f 2 f e e f f 
            . . . f 4 4 f 2 e 4 e f . 
            . . . f 4 4 4 4 e f f f . 
            . . . f f e e e e e f . . 
            . . . f 7 7 7 e 4 4 e . . 
            . . . f 7 7 7 e 4 4 e . . 
            . . . f 6 6 6 f e e f . . 
            . . . . f f f f f f . . . 
            . . . . . . f f f . . . . 
            `,img`
            . . . . . . . . . . . . . 
            . . . . f f f f f f . . . 
            . . . f f f f f f f f f . 
            . . f f f c f f f f f f . 
            . f f f c f f f c f f f f 
            f f c c f f f c c f f c f 
            f f f f f e f f f f c c f 
            . f f f e e f f f f f f f 
            . . f f e e f 2 f e e f f 
            . . f f 4 4 f 2 e 4 e f . 
            . . . f 4 4 4 e e f f f . 
            . . . f f e e 4 4 e f . . 
            . . . f 7 7 e 4 4 e f . . 
            . . f f 6 6 f e e f f f . 
            . . f f f f f f f f f f . 
            . . . f f f . . . f f . . 
            `,img`
            . . . . . . . . . . . . . 
            . . . . f f f f f f . . . 
            . . . f f f f f f f f f . 
            . . f f f c f f f f f f . 
            . f f f c f f f c f f f f 
            f f c c f f f c c f f c f 
            f f f f f e f f f f c c f 
            . f f f e e f f f f f f f 
            . f f f e e f 2 f e e f f 
            . . f f 4 4 f 2 e 4 e f f 
            . . . f 4 4 4 4 e f f f . 
            . . . f f e e e e 4 4 4 . 
            . . . f 7 7 7 7 e 4 4 e . 
            . . f f 6 6 6 6 f e e f . 
            . . f f f f f f f f f f . 
            . . . f f f . . . f f . . 
            `],
        100,
        characterAnimations.rule(Predicate.Moving, Predicate.FacingLeft)
        )
        characterAnimations.loopFrames(
        mySprite2,
        [img`
            . . . . f f f f . . . . . 
            . . f f c c c c f f . . . 
            . f f c c c c c c f f . . 
            f f c c c c c c c c f f . 
            f f c c f c c c c c c f . 
            f f f f f c c c f c c f . 
            f f f f c c c f c c f f . 
            f f f f f f f f f f f f . 
            f f f f f f f f f f f f . 
            . f f f f f f f f f f . . 
            . f f f f f f f f f f . . 
            f e f f f f f f f f e f . 
            e 4 f 7 7 7 7 7 7 c 4 e . 
            e e f 6 6 6 6 6 6 f e e . 
            . . . f f f f f f . . . . 
            . . . f f . . f f . . . . 
            `,img`
            . . . . . . . . . . . . . 
            . . . . . f f f f . . . . 
            . . . f f c c c c f f . . 
            . f f f c c c c c c f f . 
            f f c c c c c c c c c f f 
            f c c c c f c c c c c c f 
            . f f f f c c c c f c c f 
            . f f f f c c f c c c f f 
            . f f f f f f f f f f f f 
            . f f f f f f f f f f f f 
            . . f f f f f f f f f f . 
            . . e f f f f f f f f f . 
            . . e f f f f f f f f e f 
            . . 4 c 7 7 7 7 7 e 4 4 e 
            . . e f f f f f f f e e . 
            . . . f f f . . . . . . . 
            `,img`
            . . . . . . . . . . . . . 
            . . . . . f f f f . . . . 
            . . . f f c c c c f f . . 
            . . f f c c c c c c f f . 
            . f f f c c c c c c c f f 
            f f f c c c c c c c c c f 
            f f c c c f c c c c c c f 
            . f f f f f c c c f c f f 
            . f f f f c c f f c f f f 
            . . f f f f f f f f f f f 
            . . f f f f f f f f f f . 
            . . f f f f f f f f f e . 
            . f e f f f f f f f f e . 
            . e 4 4 e 7 7 7 7 7 c 4 . 
            . . e e f f f f f f f e . 
            . . . . . . . . f f f . . 
            `],
        100,
        characterAnimations.rule(Predicate.Moving, Predicate.FacingUp)
        )
        characterAnimations.loopFrames(
        mySprite2,
        [img`
            . . . . f f f f . . . . . 
            . . f f f f f f f f . . . 
            . f f f f f f c f f f . . 
            f f f f f f c c f f f c . 
            f f f c f f f f f f f c . 
            c c c f f f e e f f c c . 
            f f f f f e e f f c c f . 
            f f f 2 f e e f 2 f f f . 
            . f 4 2 f 4 4 f 2 4 f . . 
            . f e 4 4 4 4 4 4 e f . . 
            . f f f e e e e f f f . . 
            f e f b 7 7 7 7 b f e f . 
            e 4 f 7 7 7 7 7 7 f 4 e . 
            e e f 6 6 6 6 6 6 f e e . 
            . . . f f f f f f . . . . 
            . . . f f . . f f . . . . 
            `,img`
            . . . . . . . . . . . . . 
            . . . . . f f f f . . . . 
            . . . f f f f f f f f . . 
            . . f f f f f f c f f f . 
            f f f f f f f c c f f f c 
            f f f f c f f f f f f f c 
            . c c c f f f e e f f c c 
            . f f f f f e e f f c c f 
            . f f f 2 f e e f 2 f f f 
            . f f 4 2 f 4 4 f 2 4 f f 
            . . f e 4 4 4 4 4 e e f e 
            . f e f b 7 7 7 e 4 4 4 e 
            . e 4 f 7 7 7 7 e 4 4 e . 
            . . . f 6 6 6 6 6 e e . . 
            . . . f f f f f f f . . . 
            . . . f f f . . . . . . . 
            `,img`
            . . . . . . . . . . . . . 
            . . . . f f f f . . . . . 
            . . f f f f f f f f . . . 
            . f f f c f f f f f f . . 
            c f f f c c f f f f f f f 
            c f f f f f f f c f f f f 
            c c f f e e f f f c c c . 
            f c c f f e e f f f f f . 
            f f f 2 f e e f 2 f f f . 
            f f 4 2 f 4 4 f 2 4 f f . 
            e f e e 4 4 4 4 4 e f . . 
            e 4 4 4 e 7 7 7 b f e f . 
            . e 4 4 e 7 7 7 7 f 4 e . 
            . . e e 6 6 6 6 6 f . . . 
            . . . f f f f f f f . . . 
            . . . . . . . f f f . . . 
            `],
        100,
        characterAnimations.rule(Predicate.Moving, Predicate.FacingDown)
        )
        mySprite2.follow(mySprite3, 20)
    }
    for (let value6 of tiles.getTilesByType(assets.tile`myTile25`)) {
        mySprite2 = sprites.create(img`
            ................66666...................
            ............666666677666.66666..........
            ...........6777777777777677776..........
            .......66666777755577775777776666.......
            .......66666777755577775777776666.......
            ......6777666667555575557777677776666...
            ......67776777777555555577777777667776..
            ...6666666777777777757777777776666666...
            .6666677667777775557577555777777767776..
            .6666677667777775557577555777777767776..
            666667776677777557775557555577777677766.
            .666677677777777777755577777777777677666
            .c677667777677777777755777777766777666..
            .c677667777677777777755777777766777666..
            cc7776666667777777777777777777776666666c
            cc7666666677777777777777777777777667776c
            c666667766777777777777777766667776666776
            6666677666667777677777767766776667666666
            6666677666667777677777767766776667666666
            ccc7766777677777666777766766777767766ccc
            cc777667776777767776777676666777677666cc
            .6666c6766667767777666667766666666666cc.
            .6666c6766667767777666667766666666666cc.
            .cccc66677666667766666667766776666ccccc.
            ...cccc777c677676666677667666777666cccc.
            ...ccc6766c777666776677766666666c6666cc.
            .....c6ccc6766c667776777c666c6666cccc...
            .....c6ccc6766c667776777c666c6666cccc...
            .....cccccc6cc6666676667cc66cccc6cccc...
            .......ccccccc66c666c666cccccccccc......
            ........ccc.ccc6c66cccc6ccccc.ccc.......
            ........ccc.ccc6c66cccc6ccccc.ccc.......
            ..............cccccccccccc..............
            ................feeeeeeee...............
            ...............feeeeeeeefe..............
            ...........eeeeeeffeeeeffeee............
            ...........eeeeeeffeeeeffeee............
            ...............fffffeeef..eee...........
            ...................feee.................
            ....................e...................
            `, SpriteKind.tree)
        tiles.placeOnTile(mySprite2, value6)
        mySprite2.z = 1000
    }
    for (let value7 of tiles.getTilesByType(assets.tile`myTile26`)) {
        mySprite2 = sprites.create(img`
            ..................86....................
            ............66888867886.................
            ............866668776888868.............
            .............86887777677768.............
            ..........68866777777766688.............
            .........6776777777777788666............
            ..........677666677676666868............
            ...........86666676676777688............
            ..........866666666666677778............
            .........66776666666666666676...........
            .......66776666776667766667776..........
            .......66776666776667766667776..........
            ......888666777666767776666688..........
            .....67776677766677677777666768.........
            ....67766666666777766777766667766.......
            .....86667776667776667666777767776......
            ......87777666666666777667777766688.....
            ....68877766776667767777777777766776....
            ..88666666677767777777777777666666778...
            .866666666777667776777777666667776668...
            ..886776666666777767767776666677776668..
            ..867766677666666666666666677766666668..
            ..867766677666666666666666677766666668..
            8866666777766667766666677766777666668...
            66686666676667766676776777666776666668..
            888666666666777667767766676666666776668.
            .866688666666766677677666666677666666668
            .866886666666666677666666676677776666688
            .6688666666666666666666666776666666688..
            ..88666886666666666667766677766666668...
            ...8668886666666666667766677766666668...
            ...868866668666666666766666666666888....
            ....888666886686666666666666666668......
            ....888666886686666666666666666668......
            ......866886668666686666686668688.......
            ......888866688666886668888668888.......
            .........88888888688888cce868...........
            ...............ee88e88.eec.8............
            .................eeee..ee...............
            .................ceef.cee...............
            .................ceefcecc...............
            .................feefce.................
            .................fceeec.................
            .................ffceec.................
            ........................................
            `, SpriteKind.tree)
        tiles.placeOnTile(mySprite2, value7)
    }
    for (let value8 of tiles.getTilesByType(assets.tile`myTile23`)) {
        jupp = sprites.create(assets.tile`myTile23`, SpriteKind.upstairs)
        tiles.placeOnTile(jupp, value8)
        jupp.z = -1000
    }
    for (let value9 of tiles.getTilesByType(assets.tile`myTile20`)) {
        jupp = sprites.create(assets.tile`myTile20`, SpriteKind.upstairs)
        tiles.placeOnTile(jupp, value9)
        jupp.z = -1000
    }
    for (let value10 of tiles.getTilesByType(assets.tile`myTile22`)) {
        jupp = sprites.create(assets.tile`myTile22`, SpriteKind.upstairs)
        tiles.placeOnTile(jupp, value10)
        jupp.z = -1000
    }
    characterAnimations.loopFrames(
    mySprite3,
    [img`
        . . . . f f f f . . . . . 
        . . f f c c c c f f . . . 
        . f f c c c c c c f f . . 
        f f c c c c c c c c f f . 
        f f c c f c c c c c c f . 
        f f f f f c c c f c c f . 
        f f f f c c c f c c f f . 
        f f f f f f f f f f f f . 
        f f f f f f f f f f f f . 
        . f f f f f f f f f f . . 
        . f f f f f f f f f f . . 
        f e f f f f f f f f e f . 
        e 4 f 7 7 7 7 7 7 c 4 e . 
        e e f 6 6 6 6 6 6 f e e . 
        . . . f f f f f f . . . . 
        . . . f f . . f f . . . . 
        `],
    100,
    characterAnimations.rule(Predicate.NotMoving, Predicate.FacingUp)
    )
    characterAnimations.loopFrames(
    mySprite3,
    [img`
        . . . . . f f f f f . . . 
        . . . f f f f f f f f f . 
        . . f f f c f f f f f f . 
        . . f f c f f f c f f f f 
        f f c c f f f c c f f c f 
        f f f f f e f f f f c c f 
        . f f f e e f f f f f f f 
        . . f f e e f b f e e f f 
        . . . f 4 4 f 1 e 4 e f . 
        . . . f 4 4 4 4 e f f f . 
        . . . f f e e e e e f . . 
        . . . f 7 7 7 e 4 4 e . . 
        . . . f 7 7 7 e 4 4 e . . 
        . . . f 6 6 6 f e e f . . 
        . . . . f f f f f f . . . 
        . . . . . . f f f . . . . 
        `],
    100,
    characterAnimations.rule(Predicate.NotMoving, Predicate.FacingLeft)
    )
    characterAnimations.loopFrames(
    mySprite3,
    [img`
        . . . . f f f f . . . . . 
        . . f f f f f f f f . . . 
        . f f f f f f c f f f . . 
        f f f f f f c c f f f c . 
        f f f c f f f f f f f c . 
        c c c f f f e e f f c c . 
        f f f f f e e f f c c f . 
        f f f b f e e f b f f f . 
        . f 4 1 f 4 4 f 1 4 f . . 
        . f e 4 4 4 4 4 4 e f . . 
        . f f f e e e e f f f . . 
        f e f b 7 7 7 7 b f e f . 
        e 4 f 7 7 7 7 7 7 f 4 e . 
        e e f 6 6 6 6 6 6 f e e . 
        . . . f f f f f f . . . . 
        . . . f f . . f f . . . . 
        `],
    100,
    characterAnimations.rule(Predicate.NotMoving, Predicate.FacingDown)
    )
    characterAnimations.loopFrames(
    mySprite3,
    [img`
        . . . f f f f f . . . . . 
        . f f f f f f f f f . . . 
        . f f f f f f c f f f . . 
        f f f f c f f f c f f . . 
        f c f f c c f f f c c f f 
        f c c f f f f e f f f f f 
        f f f f f f f e e f f f . 
        f f e e f b f e e f f . . 
        . f e 4 e 1 f 4 4 f . . . 
        . f f f e 4 4 4 4 f . . . 
        . . f e e e e e f f . . . 
        . . e 4 4 e 7 7 7 f . . . 
        . . e 4 4 e 7 7 7 f . . . 
        . . f e e f 6 6 6 f . . . 
        . . . f f f f f f . . . . 
        . . . . f f f . . . . . . 
        `],
    100,
    characterAnimations.rule(Predicate.NotMoving, Predicate.FacingRight)
    )
    characterAnimations.loopFrames(
    mySprite3,
    [img`
        . . . f f f f f . . . . . 
        . f f f f f f f f f . . . 
        . f f f f f f c f f f . . 
        f f f f c f f f c f f . . 
        f c f f c c f f f c c f f 
        f c c f f f f e f f f f f 
        f f f f f f f e e f f f . 
        f f e e f b f e e f f . . 
        . f e 4 e 1 f 4 4 f . . . 
        . f f f e 4 4 4 4 f . . . 
        . . f e e e e e f f . . . 
        . . e 4 4 e 7 7 7 f . . . 
        . . e 4 4 e 7 7 7 f . . . 
        . . f e e f 6 6 6 f . . . 
        . . . f f f f f f . . . . 
        . . . . f f f . . . . . . 
        `,img`
        . . . . . . . . . . . . . 
        . . . f f f f f f . . . . 
        . f f f f f f f f f . . . 
        . f f f f f f c f f f . . 
        f f f f c f f f c f f f . 
        f c f f c c f f f c c f f 
        f c c f f f f e f f f f f 
        f f f f f f f e e f f f . 
        f f e e f b f e e f f . . 
        . f e 4 e 1 f 4 4 f f . . 
        . f f f e e 4 4 4 f . . . 
        . . f e 4 4 e e f f . . . 
        . . f e 4 4 e 7 7 f . . . 
        . f f f e e f 6 6 f f . . 
        . f f f f f f f f f f . . 
        . . f f . . . f f f . . . 
        `,img`
        . . . . . . . . . . . . . 
        . . . f f f f f f . . . . 
        . f f f f f f f f f . . . 
        . f f f f f f c f f f . . 
        f f f f c f f f c f f f . 
        f c f f c c f f f c c f f 
        f c c f f f f e f f f f f 
        f f f f f f f e e f f f . 
        f f e e f b f e e f f f . 
        f f e 4 e 1 f 4 4 f f . . 
        . f f f e 4 4 4 4 f . . . 
        . 4 4 4 e e e e f f . . . 
        . e 4 4 e 7 7 7 7 f . . . 
        . f e e f 6 6 6 6 f f . . 
        . f f f f f f f f f f . . 
        . . f f . . . f f f . . . 
        `],
    100,
    characterAnimations.rule(Predicate.Moving, Predicate.FacingRight)
    )
    characterAnimations.loopFrames(
    mySprite3,
    [img`
        . . . . . f f f f f . . . 
        . . . f f f f f f f f f . 
        . . f f f c f f f f f f . 
        . . f f c f f f c f f f f 
        f f c c f f f c c f f c f 
        f f f f f e f f f f c c f 
        . f f f e e f f f f f f f 
        . . f f e e f b f e e f f 
        . . . f 4 4 f 1 e 4 e f . 
        . . . f 4 4 4 4 e f f f . 
        . . . f f e e e e e f . . 
        . . . f 7 7 7 e 4 4 e . . 
        . . . f 7 7 7 e 4 4 e . . 
        . . . f 6 6 6 f e e f . . 
        . . . . f f f f f f . . . 
        . . . . . . f f f . . . . 
        `,img`
        . . . . . . . . . . . . . 
        . . . . f f f f f f . . . 
        . . . f f f f f f f f f . 
        . . f f f c f f f f f f . 
        . f f f c f f f c f f f f 
        f f c c f f f c c f f c f 
        f f f f f e f f f f c c f 
        . f f f e e f f f f f f f 
        . . f f e e f b f e e f f 
        . . f f 4 4 f 1 e 4 e f . 
        . . . f 4 4 4 e e f f f . 
        . . . f f e e 4 4 e f . . 
        . . . f 7 7 e 4 4 e f . . 
        . . f f 6 6 f e e f f f . 
        . . f f f f f f f f f f . 
        . . . f f f . . . f f . . 
        `,img`
        . . . . . . . . . . . . . 
        . . . . f f f f f f . . . 
        . . . f f f f f f f f f . 
        . . f f f c f f f f f f . 
        . f f f c f f f c f f f f 
        f f c c f f f c c f f c f 
        f f f f f e f f f f c c f 
        . f f f e e f f f f f f f 
        . f f f e e f b f e e f f 
        . . f f 4 4 f 1 e 4 e f f 
        . . . f 4 4 4 4 e f f f . 
        . . . f f e e e e 4 4 4 . 
        . . . f 7 7 7 7 e 4 4 e . 
        . . f f 6 6 6 6 f e e f . 
        . . f f f f f f f f f f . 
        . . . f f f . . . f f . . 
        `],
    100,
    characterAnimations.rule(Predicate.Moving, Predicate.FacingLeft)
    )
    characterAnimations.loopFrames(
    mySprite3,
    [img`
        . . . . f f f f . . . . . 
        . . f f c c c c f f . . . 
        . f f c c c c c c f f . . 
        f f c c c c c c c c f f . 
        f f c c f c c c c c c f . 
        f f f f f c c c f c c f . 
        f f f f c c c f c c f f . 
        f f f f f f f f f f f f . 
        f f f f f f f f f f f f . 
        . f f f f f f f f f f . . 
        . f f f f f f f f f f . . 
        f e f f f f f f f f e f . 
        e 4 f 7 7 7 7 7 7 c 4 e . 
        e e f 6 6 6 6 6 6 f e e . 
        . . . f f f f f f . . . . 
        . . . f f . . f f . . . . 
        `,img`
        . . . . . . . . . . . . . 
        . . . . . f f f f . . . . 
        . . . f f c c c c f f . . 
        . f f f c c c c c c f f . 
        f f c c c c c c c c c f f 
        f c c c c f c c c c c c f 
        . f f f f c c c c f c c f 
        . f f f f c c f c c c f f 
        . f f f f f f f f f f f f 
        . f f f f f f f f f f f f 
        . . f f f f f f f f f f . 
        . . e f f f f f f f f f . 
        . . e f f f f f f f f e f 
        . . 4 c 7 7 7 7 7 e 4 4 e 
        . . e f f f f f f f e e . 
        . . . f f f . . . . . . . 
        `,img`
        . . . . . . . . . . . . . 
        . . . . . f f f f . . . . 
        . . . f f c c c c f f . . 
        . . f f c c c c c c f f . 
        . f f f c c c c c c c f f 
        f f f c c c c c c c c c f 
        f f c c c f c c c c c c f 
        . f f f f f c c c f c f f 
        . f f f f c c f f c f f f 
        . . f f f f f f f f f f f 
        . . f f f f f f f f f f . 
        . . f f f f f f f f f e . 
        . f e f f f f f f f f e . 
        . e 4 4 e 7 7 7 7 7 c 4 . 
        . . e e f f f f f f f e . 
        . . . . . . . . f f f . . 
        `],
    100,
    characterAnimations.rule(Predicate.Moving, Predicate.FacingUp)
    )
    characterAnimations.loopFrames(
    mySprite3,
    [img`
        . . . . f f f f . . . . . 
        . . f f f f f f f f . . . 
        . f f f f f f c f f f . . 
        f f f f f f c c f f f c . 
        f f f c f f f f f f f c . 
        c c c f f f e e f f c c . 
        f f f f f e e f f c c f . 
        f f f b f e e f b f f f . 
        . f 4 1 f 4 4 f 1 4 f . . 
        . f e 4 4 4 4 4 4 e f . . 
        . f f f e e e e f f f . . 
        f e f b 7 7 7 7 b f e f . 
        e 4 f 7 7 7 7 7 7 f 4 e . 
        e e f 6 6 6 6 6 6 f e e . 
        . . . f f f f f f . . . . 
        . . . f f . . f f . . . . 
        `,img`
        . . . . . . . . . . . . . 
        . . . . . f f f f . . . . 
        . . . f f f f f f f f . . 
        . . f f f f f f c f f f . 
        f f f f f f f c c f f f c 
        f f f f c f f f f f f f c 
        . c c c f f f e e f f c c 
        . f f f f f e e f f c c f 
        . f f f b f e e f b f f f 
        . f f 4 1 f 4 4 f 1 4 f f 
        . . f e 4 4 4 4 4 e e f e 
        . f e f b 7 7 7 e 4 4 4 e 
        . e 4 f 7 7 7 7 e 4 4 e . 
        . . . f 6 6 6 6 6 e e . . 
        . . . f f f f f f f . . . 
        . . . f f f . . . . . . . 
        `,img`
        . . . . . . . . . . . . . 
        . . . . f f f f . . . . . 
        . . f f f f f f f f . . . 
        . f f f c f f f f f f . . 
        c f f f c c f f f f f f f 
        c f f f f f f f c f f f f 
        c c f f e e f f f c c c . 
        f c c f f e e f f f f f . 
        f f f b f e e f b f f f . 
        f f 4 1 f 4 4 f 1 4 f f . 
        e f e e 4 4 4 4 4 e f . . 
        e 4 4 4 e 7 7 7 b f e f . 
        . e 4 4 e 7 7 7 7 f 4 e . 
        . . e e 6 6 6 6 6 f . . . 
        . . . f f f f f f f . . . 
        . . . . . . . f f f . . . 
        `],
    100,
    characterAnimations.rule(Predicate.Moving, Predicate.FacingDown)
    )
})
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    color.Darken.startScreenEffect(100)
})
controller.B.onEvent(ControllerButtonEvent.Released, function () {
    controller.moveSprite(mySprite3, 50, 50)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy, function (sprite, otherSprite) {
    sprite.vx = -100
})
let jupp: Sprite = null
let mySprite2: Sprite = null
let mySprite3: Sprite = null
tiles.setCurrentTilemap(tilemap`level1`)
tiles.coverAllTiles(sprites.builtin.forestTiles0, assets.tile`myTile36`)
mySprite3 = sprites.create(img`
    . . . . f f f f . . . . . 
    . . f f f f f f f f . . . 
    . f f f f f f c f f f . . 
    f f f f f f c c f f f c . 
    f f f c f f f f f f f c . 
    c c c f f f e e f f c c . 
    f f f f f e e f f c c f . 
    f f f b f e e f b f f f . 
    . f 4 1 f 4 4 f 1 4 f . . 
    . f e 4 4 4 4 4 4 e f . . 
    . f f f e e e e f f f . . 
    f e f b 7 7 7 7 b f e f . 
    e 4 f 7 7 7 7 7 7 f 4 e . 
    e e f 6 6 6 6 6 6 f e e . 
    . . . f f f f f f . . . . 
    . . . f f . . f f . . . . 
    `, SpriteKind.Player)
scene.cameraFollowSprite(mySprite3)
controller.moveSprite(mySprite3, 50, 50)
characterAnimations.loopFrames(
mySprite3,
[img`
    . . . . f f f f . . . . . 
    . . f f c c c c f f . . . 
    . f f c c c c c c f f . . 
    f f c c c c c c c c f f . 
    f f c c f c c c c c c f . 
    f f f f f c c c f c c f . 
    f f f f c c c f c c f f . 
    f f f f f f f f f f f f . 
    f f f f f f f f f f f f . 
    . f f f f f f f f f f . . 
    . f f f f f f f f f f . . 
    f e f f f f f f f f e f . 
    e 4 f 7 7 7 7 7 7 c 4 e . 
    e e f 6 6 6 6 6 6 f e e . 
    . . . f f f f f f . . . . 
    . . . f f . . f f . . . . 
    `],
100,
characterAnimations.rule(Predicate.NotMoving, Predicate.FacingUp)
)
characterAnimations.loopFrames(
mySprite3,
[img`
    . . . . . f f f f f . . . 
    . . . f f f f f f f f f . 
    . . f f f c f f f f f f . 
    . . f f c f f f c f f f f 
    f f c c f f f c c f f c f 
    f f f f f e f f f f c c f 
    . f f f e e f f f f f f f 
    . . f f e e f b f e e f f 
    . . . f 4 4 f 1 e 4 e f . 
    . . . f 4 4 4 4 e f f f . 
    . . . f f e e e e e f . . 
    . . . f 7 7 7 e 4 4 e . . 
    . . . f 7 7 7 e 4 4 e . . 
    . . . f 6 6 6 f e e f . . 
    . . . . f f f f f f . . . 
    . . . . . . f f f . . . . 
    `],
100,
characterAnimations.rule(Predicate.NotMoving, Predicate.FacingLeft)
)
characterAnimations.loopFrames(
mySprite3,
[img`
    . . . . f f f f . . . . . 
    . . f f f f f f f f . . . 
    . f f f f f f c f f f . . 
    f f f f f f c c f f f c . 
    f f f c f f f f f f f c . 
    c c c f f f e e f f c c . 
    f f f f f e e f f c c f . 
    f f f b f e e f b f f f . 
    . f 4 1 f 4 4 f 1 4 f . . 
    . f e 4 4 4 4 4 4 e f . . 
    . f f f e e e e f f f . . 
    f e f b 7 7 7 7 b f e f . 
    e 4 f 7 7 7 7 7 7 f 4 e . 
    e e f 6 6 6 6 6 6 f e e . 
    . . . f f f f f f . . . . 
    . . . f f . . f f . . . . 
    `],
100,
characterAnimations.rule(Predicate.NotMoving, Predicate.FacingDown)
)
characterAnimations.loopFrames(
mySprite3,
[img`
    . . . f f f f f . . . . . 
    . f f f f f f f f f . . . 
    . f f f f f f c f f f . . 
    f f f f c f f f c f f . . 
    f c f f c c f f f c c f f 
    f c c f f f f e f f f f f 
    f f f f f f f e e f f f . 
    f f e e f b f e e f f . . 
    . f e 4 e 1 f 4 4 f . . . 
    . f f f e 4 4 4 4 f . . . 
    . . f e e e e e f f . . . 
    . . e 4 4 e 7 7 7 f . . . 
    . . e 4 4 e 7 7 7 f . . . 
    . . f e e f 6 6 6 f . . . 
    . . . f f f f f f . . . . 
    . . . . f f f . . . . . . 
    `],
100,
characterAnimations.rule(Predicate.NotMoving, Predicate.FacingRight)
)
characterAnimations.loopFrames(
mySprite3,
[img`
    . . . f f f f f . . . . . 
    . f f f f f f f f f . . . 
    . f f f f f f c f f f . . 
    f f f f c f f f c f f . . 
    f c f f c c f f f c c f f 
    f c c f f f f e f f f f f 
    f f f f f f f e e f f f . 
    f f e e f b f e e f f . . 
    . f e 4 e 1 f 4 4 f . . . 
    . f f f e 4 4 4 4 f . . . 
    . . f e e e e e f f . . . 
    . . e 4 4 e 7 7 7 f . . . 
    . . e 4 4 e 7 7 7 f . . . 
    . . f e e f 6 6 6 f . . . 
    . . . f f f f f f . . . . 
    . . . . f f f . . . . . . 
    `,img`
    . . . . . . . . . . . . . 
    . . . f f f f f f . . . . 
    . f f f f f f f f f . . . 
    . f f f f f f c f f f . . 
    f f f f c f f f c f f f . 
    f c f f c c f f f c c f f 
    f c c f f f f e f f f f f 
    f f f f f f f e e f f f . 
    f f e e f b f e e f f . . 
    . f e 4 e 1 f 4 4 f f . . 
    . f f f e e 4 4 4 f . . . 
    . . f e 4 4 e e f f . . . 
    . . f e 4 4 e 7 7 f . . . 
    . f f f e e f 6 6 f f . . 
    . f f f f f f f f f f . . 
    . . f f . . . f f f . . . 
    `,img`
    . . . . . . . . . . . . . 
    . . . f f f f f f . . . . 
    . f f f f f f f f f . . . 
    . f f f f f f c f f f . . 
    f f f f c f f f c f f f . 
    f c f f c c f f f c c f f 
    f c c f f f f e f f f f f 
    f f f f f f f e e f f f . 
    f f e e f b f e e f f f . 
    f f e 4 e 1 f 4 4 f f . . 
    . f f f e 4 4 4 4 f . . . 
    . 4 4 4 e e e e f f . . . 
    . e 4 4 e 7 7 7 7 f . . . 
    . f e e f 6 6 6 6 f f . . 
    . f f f f f f f f f f . . 
    . . f f . . . f f f . . . 
    `],
100,
characterAnimations.rule(Predicate.Moving, Predicate.FacingRight)
)
characterAnimations.loopFrames(
mySprite3,
[img`
    . . . . . f f f f f . . . 
    . . . f f f f f f f f f . 
    . . f f f c f f f f f f . 
    . . f f c f f f c f f f f 
    f f c c f f f c c f f c f 
    f f f f f e f f f f c c f 
    . f f f e e f f f f f f f 
    . . f f e e f b f e e f f 
    . . . f 4 4 f 1 e 4 e f . 
    . . . f 4 4 4 4 e f f f . 
    . . . f f e e e e e f . . 
    . . . f 7 7 7 e 4 4 e . . 
    . . . f 7 7 7 e 4 4 e . . 
    . . . f 6 6 6 f e e f . . 
    . . . . f f f f f f . . . 
    . . . . . . f f f . . . . 
    `,img`
    . . . . . . . . . . . . . 
    . . . . f f f f f f . . . 
    . . . f f f f f f f f f . 
    . . f f f c f f f f f f . 
    . f f f c f f f c f f f f 
    f f c c f f f c c f f c f 
    f f f f f e f f f f c c f 
    . f f f e e f f f f f f f 
    . . f f e e f b f e e f f 
    . . f f 4 4 f 1 e 4 e f . 
    . . . f 4 4 4 e e f f f . 
    . . . f f e e 4 4 e f . . 
    . . . f 7 7 e 4 4 e f . . 
    . . f f 6 6 f e e f f f . 
    . . f f f f f f f f f f . 
    . . . f f f . . . f f . . 
    `,img`
    . . . . . . . . . . . . . 
    . . . . f f f f f f . . . 
    . . . f f f f f f f f f . 
    . . f f f c f f f f f f . 
    . f f f c f f f c f f f f 
    f f c c f f f c c f f c f 
    f f f f f e f f f f c c f 
    . f f f e e f f f f f f f 
    . f f f e e f b f e e f f 
    . . f f 4 4 f 1 e 4 e f f 
    . . . f 4 4 4 4 e f f f . 
    . . . f f e e e e 4 4 4 . 
    . . . f 7 7 7 7 e 4 4 e . 
    . . f f 6 6 6 6 f e e f . 
    . . f f f f f f f f f f . 
    . . . f f f . . . f f . . 
    `],
100,
characterAnimations.rule(Predicate.Moving, Predicate.FacingLeft)
)
characterAnimations.loopFrames(
mySprite3,
[img`
    . . . . f f f f . . . . . 
    . . f f c c c c f f . . . 
    . f f c c c c c c f f . . 
    f f c c c c c c c c f f . 
    f f c c f c c c c c c f . 
    f f f f f c c c f c c f . 
    f f f f c c c f c c f f . 
    f f f f f f f f f f f f . 
    f f f f f f f f f f f f . 
    . f f f f f f f f f f . . 
    . f f f f f f f f f f . . 
    f e f f f f f f f f e f . 
    e 4 f 7 7 7 7 7 7 c 4 e . 
    e e f 6 6 6 6 6 6 f e e . 
    . . . f f f f f f . . . . 
    . . . f f . . f f . . . . 
    `,img`
    . . . . . . . . . . . . . 
    . . . . . f f f f . . . . 
    . . . f f c c c c f f . . 
    . f f f c c c c c c f f . 
    f f c c c c c c c c c f f 
    f c c c c f c c c c c c f 
    . f f f f c c c c f c c f 
    . f f f f c c f c c c f f 
    . f f f f f f f f f f f f 
    . f f f f f f f f f f f f 
    . . f f f f f f f f f f . 
    . . e f f f f f f f f f . 
    . . e f f f f f f f f e f 
    . . 4 c 7 7 7 7 7 e 4 4 e 
    . . e f f f f f f f e e . 
    . . . f f f . . . . . . . 
    `,img`
    . . . . . . . . . . . . . 
    . . . . . f f f f . . . . 
    . . . f f c c c c f f . . 
    . . f f c c c c c c f f . 
    . f f f c c c c c c c f f 
    f f f c c c c c c c c c f 
    f f c c c f c c c c c c f 
    . f f f f f c c c f c f f 
    . f f f f c c f f c f f f 
    . . f f f f f f f f f f f 
    . . f f f f f f f f f f . 
    . . f f f f f f f f f e . 
    . f e f f f f f f f f e . 
    . e 4 4 e 7 7 7 7 7 c 4 . 
    . . e e f f f f f f f e . 
    . . . . . . . . f f f . . 
    `],
100,
characterAnimations.rule(Predicate.Moving, Predicate.FacingUp)
)
characterAnimations.loopFrames(
mySprite3,
[img`
    . . . . f f f f . . . . . 
    . . f f f f f f f f . . . 
    . f f f f f f c f f f . . 
    f f f f f f c c f f f c . 
    f f f c f f f f f f f c . 
    c c c f f f e e f f c c . 
    f f f f f e e f f c c f . 
    f f f b f e e f b f f f . 
    . f 4 1 f 4 4 f 1 4 f . . 
    . f e 4 4 4 4 4 4 e f . . 
    . f f f e e e e f f f . . 
    f e f b 7 7 7 7 b f e f . 
    e 4 f 7 7 7 7 7 7 f 4 e . 
    e e f 6 6 6 6 6 6 f e e . 
    . . . f f f f f f . . . . 
    . . . f f . . f f . . . . 
    `,img`
    . . . . . . . . . . . . . 
    . . . . . f f f f . . . . 
    . . . f f f f f f f f . . 
    . . f f f f f f c f f f . 
    f f f f f f f c c f f f c 
    f f f f c f f f f f f f c 
    . c c c f f f e e f f c c 
    . f f f f f e e f f c c f 
    . f f f b f e e f b f f f 
    . f f 4 1 f 4 4 f 1 4 f f 
    . . f e 4 4 4 4 4 e e f e 
    . f e f b 7 7 7 e 4 4 4 e 
    . e 4 f 7 7 7 7 e 4 4 e . 
    . . . f 6 6 6 6 6 e e . . 
    . . . f f f f f f f . . . 
    . . . f f f . . . . . . . 
    `,img`
    . . . . . . . . . . . . . 
    . . . . f f f f . . . . . 
    . . f f f f f f f f . . . 
    . f f f c f f f f f f . . 
    c f f f c c f f f f f f f 
    c f f f f f f f c f f f f 
    c c f f e e f f f c c c . 
    f c c f f e e f f f f f . 
    f f f b f e e f b f f f . 
    f f 4 1 f 4 4 f 1 4 f f . 
    e f e e 4 4 4 4 4 e f . . 
    e 4 4 4 e 7 7 7 b f e f . 
    . e 4 4 e 7 7 7 7 f 4 e . 
    . . e e 6 6 6 6 6 f . . . 
    . . . f f f f f f f . . . 
    . . . . . . . f f f . . . 
    `],
100,
characterAnimations.rule(Predicate.Moving, Predicate.FacingDown)
)
Notification.notify("started apocalypse", 5, img`
    . 6 6 6 6 3 3 . 
    6 7 7 7 7 7 3 3 
    6 7 f 7 7 f 7 3 
    6 7 6 7 7 6 7 6 
    6 7 7 7 7 7 7 6 
    6 7 f f f f 7 6 
    6 7 7 2 2 2 7 6 
    . 6 6 6 2 6 6 . 
    `)
for (let value11 of tiles.getTilesByType(assets.tile`myTile28`)) {
    mySprite2 = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . 6 6 6 6 
        . . . . . . . . . . . 6 7 7 7 7 
        . . . . . . . 6 6 6 6 6 7 7 7 7 
        . . . . . . . 6 6 6 6 6 7 7 7 7 
        . . . . . . 6 7 7 7 6 6 6 6 6 7 
        . . . . . . 6 7 7 7 6 7 7 7 7 7 
        . . . 6 6 6 6 6 6 6 7 7 7 7 7 7 
        . 6 6 6 6 6 7 7 6 6 7 7 7 7 7 7 
        . 6 6 6 6 6 7 7 6 6 7 7 7 7 7 7 
        6 6 6 6 6 7 7 7 6 6 7 7 7 7 7 5 
        . 6 6 6 6 7 7 6 7 7 7 7 7 7 7 7 
        . c 6 7 7 6 6 7 7 7 7 6 7 7 7 7 
        . c 6 7 7 6 6 7 7 7 7 6 7 7 7 7 
        c c 7 7 7 6 6 6 6 6 6 7 7 7 7 7 
        c c 7 6 6 6 6 6 6 6 7 7 7 7 7 7 
        `, SpriteKind.Enemy)
    tiles.placeOnTile(mySprite2, value11)
    characterAnimations.loopFrames(
    mySprite2,
    [img`
        . . . . f f f f . . . . . 
        . . f f 7 7 7 7 f f . . . 
        . f f 7 7 7 7 7 7 f f . . 
        f 7 7 7 7 7 7 7 7 7 f f . 
        f 7 7 7 7 7 7 7 7 7 7 f . 
        f 7 7 7 7 7 7 7 7 7 7 f . 
        f 7 7 7 7 7 7 7 7 7 7 f . 
        f 7 7 7 7 7 7 7 7 7 7 f . 
        f 7 7 7 7 7 7 7 7 7 7 f . 
        . f 7 7 7 7 7 7 7 7 f . . 
        . f 7 7 7 7 7 7 7 7 f . . 
        f e f f f f f f f f e f . 
        e 4 f 7 7 7 7 7 7 c 4 e . 
        e e f 6 6 6 6 6 6 f e e . 
        . . . f f f f f f . . . . 
        . . . f f . . f f . . . . 
        `],
    100,
    characterAnimations.rule(Predicate.NotMoving, Predicate.FacingUp)
    )
    characterAnimations.loopFrames(
    mySprite2,
    [img`
        . . . . . f f f f f . . . 
        . . . f f f f f f f f f . 
        . . f f f c f f f f f f . 
        . . f f c f f f c f f f f 
        f f c c f f f c c f f c f 
        f f f f f e f f f f c c f 
        . f f f e e f f f f f f f 
        . . f f e e f 2 f e e f f 
        . . . f 4 4 f 2 e 4 e f . 
        . . . f 4 4 4 4 e f f f . 
        . . . f f e e e e e f . . 
        . . . f 7 7 7 e 4 4 e . . 
        . . . f 7 7 7 e 4 4 e . . 
        . . . f 6 6 6 f e e f . . 
        . . . . f f f f f f . . . 
        . . . . . . f f f . . . . 
        `],
    100,
    characterAnimations.rule(Predicate.NotMoving, Predicate.FacingLeft)
    )
    characterAnimations.loopFrames(
    mySprite2,
    [img`
        . . . . f f f f . . . . . 
        . . f f f f f f f f . . . 
        . f f f f f f c f f f . . 
        f f f f f f c c f f f c . 
        f f f c f f f f f f f c . 
        c c c f f f e e f f c c . 
        f f f f f e e f f c c f . 
        f f f 2 f e e f 2 f f f . 
        . f 4 2 f 4 4 f 2 4 f . . 
        . f e 4 4 4 4 4 4 e f . . 
        . f f f e e e e f f f . . 
        f e f b 7 7 7 7 b f e f . 
        e 4 f 7 7 7 7 7 7 f 4 e . 
        e e f 6 6 6 6 6 6 f e e . 
        . . . f f f f f f . . . . 
        . . . f f . . f f . . . . 
        `],
    100,
    characterAnimations.rule(Predicate.NotMoving, Predicate.FacingDown)
    )
    characterAnimations.loopFrames(
    mySprite2,
    [img`
        . . . f f f f f . . . . . 
        . f f f f f f f f f . . . 
        . f f f f f f c f f f . . 
        f f f f c f f f c f f . . 
        f c f f c c f f f c c f f 
        f c c f f f f e f f f f f 
        f f f f f f f e e f f f . 
        f f e e f 2 f e e f f . . 
        . f e 4 e 2 f 4 4 f . . . 
        . f f f e 4 4 4 4 f . . . 
        . . f e e e e e f f . . . 
        . . e 4 4 e 7 7 7 f . . . 
        . . e 4 4 e 7 7 7 f . . . 
        . . f e e f 6 6 6 f . . . 
        . . . f f f f f f . . . . 
        . . . . f f f . . . . . . 
        `],
    100,
    characterAnimations.rule(Predicate.NotMoving, Predicate.FacingRight)
    )
    characterAnimations.loopFrames(
    mySprite2,
    [img`
        . . . f f f f f . . . . . 
        . f f f f f f f f f . . . 
        . f f f f f f c f f f . . 
        f f f f c f f f c f f . . 
        f c f f c c f f f c c f f 
        f c c f f f f e f f f f f 
        f f f f f f f e e f f f . 
        f f e e f 2 f e e f f . . 
        . f e 4 e 2 f 4 4 f . . . 
        . f f f e 4 4 4 4 f . . . 
        . . f e e e e e f f . . . 
        . . e 4 4 e 7 7 7 f . . . 
        . . e 4 4 e 7 7 7 f . . . 
        . . f e e f 6 6 6 f . . . 
        . . . f f f f f f . . . . 
        . . . . f f f . . . . . . 
        `,img`
        . . . . . . . . . . . . . 
        . . . f f f f f f . . . . 
        . f f f f f f f f f . . . 
        . f f f f f f c f f f . . 
        f f f f c f f f c f f f . 
        f c f f c c f f f c c f f 
        f c c f f f f e f f f f f 
        f f f f f f f e e f f f . 
        f f e e f 2 f e e f f . . 
        . f e 4 e 2 f 4 4 f f . . 
        . f f f e e 4 4 4 f . . . 
        . . f e 4 4 e e f f . . . 
        . . f e 4 4 e 7 7 f . . . 
        . f f f e e f 6 6 f f . . 
        . f f f f f f f f f f . . 
        . . f f . . . f f f . . . 
        `,img`
        . . . . . . . . . . . . . 
        . . . f f f f f f . . . . 
        . f f f f f f f f f . . . 
        . f f f f f f c f f f . . 
        f f f f c f f f c f f f . 
        f c f f c c f f f c c f f 
        f c c f f f f e f f f f f 
        f f f f f f f e e f f f . 
        f f e e f 2 f e e f f f . 
        f f e 4 e 2 f 4 4 f f . . 
        . f f f e 4 4 4 4 f . . . 
        . 4 4 4 e e e e f f . . . 
        . e 4 4 e 7 7 7 7 f . . . 
        . f e e f 6 6 6 6 f f . . 
        . f f f f f f f f f f . . 
        . . f f . . . f f f . . . 
        `],
    100,
    characterAnimations.rule(Predicate.Moving, Predicate.FacingRight)
    )
    characterAnimations.loopFrames(
    mySprite2,
    [img`
        . . . . . f f f f f . . . 
        . . . f f f f f f f f f . 
        . . f f f c f f f f f f . 
        . . f f c f f f c f f f f 
        f f c c f f f c c f f c f 
        f f f f f e f f f f c c f 
        . f f f e e f f f f f f f 
        . . f f e e f 2 f e e f f 
        . . . f 4 4 f 2 e 4 e f . 
        . . . f 4 4 4 4 e f f f . 
        . . . f f e e e e e f . . 
        . . . f 7 7 7 e 4 4 e . . 
        . . . f 7 7 7 e 4 4 e . . 
        . . . f 6 6 6 f e e f . . 
        . . . . f f f f f f . . . 
        . . . . . . f f f . . . . 
        `,img`
        . . . . . . . . . . . . . 
        . . . . f f f f f f . . . 
        . . . f f f f f f f f f . 
        . . f f f c f f f f f f . 
        . f f f c f f f c f f f f 
        f f c c f f f c c f f c f 
        f f f f f e f f f f c c f 
        . f f f e e f f f f f f f 
        . . f f e e f 2 f e e f f 
        . . f f 4 4 f 2 e 4 e f . 
        . . . f 4 4 4 e e f f f . 
        . . . f f e e 4 4 e f . . 
        . . . f 7 7 e 4 4 e f . . 
        . . f f 6 6 f e e f f f . 
        . . f f f f f f f f f f . 
        . . . f f f . . . f f . . 
        `,img`
        . . . . . . . . . . . . . 
        . . . . f f f f f f . . . 
        . . . f f f f f f f f f . 
        . . f f f c f f f f f f . 
        . f f f c f f f c f f f f 
        f f c c f f f c c f f c f 
        f f f f f e f f f f c c f 
        . f f f e e f f f f f f f 
        . f f f e e f 2 f e e f f 
        . . f f 4 4 f 2 e 4 e f f 
        . . . f 4 4 4 4 e f f f . 
        . . . f f e e e e 4 4 4 . 
        . . . f 7 7 7 7 e 4 4 e . 
        . . f f 6 6 6 6 f e e f . 
        . . f f f f f f f f f f . 
        . . . f f f . . . f f . . 
        `],
    100,
    characterAnimations.rule(Predicate.Moving, Predicate.FacingLeft)
    )
    characterAnimations.loopFrames(
    mySprite2,
    [img`
        . . . . f f f f . . . . . 
        . . f f c c c c f f . . . 
        . f f c c c c c c f f . . 
        f f c c c c c c c c f f . 
        f f c c f c c c c c c f . 
        f f f f f c c c f c c f . 
        f f f f c c c f c c f f . 
        f f f f f f f f f f f f . 
        f f f f f f f f f f f f . 
        . f f f f f f f f f f . . 
        . f f f f f f f f f f . . 
        f e f f f f f f f f e f . 
        e 4 f 7 7 7 7 7 7 c 4 e . 
        e e f 6 6 6 6 6 6 f e e . 
        . . . f f f f f f . . . . 
        . . . f f . . f f . . . . 
        `,img`
        . . . . . . . . . . . . . 
        . . . . . f f f f . . . . 
        . . . f f c c c c f f . . 
        . f f f c c c c c c f f . 
        f f c c c c c c c c c f f 
        f c c c c f c c c c c c f 
        . f f f f c c c c f c c f 
        . f f f f c c f c c c f f 
        . f f f f f f f f f f f f 
        . f f f f f f f f f f f f 
        . . f f f f f f f f f f . 
        . . e f f f f f f f f f . 
        . . e f f f f f f f f e f 
        . . 4 c 7 7 7 7 7 e 4 4 e 
        . . e f f f f f f f e e . 
        . . . f f f . . . . . . . 
        `,img`
        . . . . . . . . . . . . . 
        . . . . . f f f f . . . . 
        . . . f f c c c c f f . . 
        . . f f c c c c c c f f . 
        . f f f c c c c c c c f f 
        f f f c c c c c c c c c f 
        f f c c c f c c c c c c f 
        . f f f f f c c c f c f f 
        . f f f f c c f f c f f f 
        . . f f f f f f f f f f f 
        . . f f f f f f f f f f . 
        . . f f f f f f f f f e . 
        . f e f f f f f f f f e . 
        . e 4 4 e 7 7 7 7 7 c 4 . 
        . . e e f f f f f f f e . 
        . . . . . . . . f f f . . 
        `],
    100,
    characterAnimations.rule(Predicate.Moving, Predicate.FacingUp)
    )
    characterAnimations.loopFrames(
    mySprite2,
    [img`
        . . . . f f f f . . . . . 
        . . f f f f f f f f . . . 
        . f f f f f f c f f f . . 
        f f f f f f c c f f f c . 
        f f f c f f f f f f f c . 
        c c c f f f e e f f c c . 
        f f f f f e e f f c c f . 
        f f f 2 f e e f 2 f f f . 
        . f 4 2 f 4 4 f 2 4 f . . 
        . f e 4 4 4 4 4 4 e f . . 
        . f f f e e e e f f f . . 
        f e f b 7 7 7 7 b f e f . 
        e 4 f 7 7 7 7 7 7 f 4 e . 
        e e f 6 6 6 6 6 6 f e e . 
        . . . f f f f f f . . . . 
        . . . f f . . f f . . . . 
        `,img`
        . . . . . . . . . . . . . 
        . . . . . f f f f . . . . 
        . . . f f f f f f f f . . 
        . . f f f f f f c f f f . 
        f f f f f f f c c f f f c 
        f f f f c f f f f f f f c 
        . c c c f f f e e f f c c 
        . f f f f f e e f f c c f 
        . f f f 2 f e e f 2 f f f 
        . f f 4 2 f 4 4 f 2 4 f f 
        . . f e 4 4 4 4 4 e e f e 
        . f e f b 7 7 7 e 4 4 4 e 
        . e 4 f 7 7 7 7 e 4 4 e . 
        . . . f 6 6 6 6 6 e e . . 
        . . . f f f f f f f . . . 
        . . . f f f . . . . . . . 
        `,img`
        . . . . . . . . . . . . . 
        . . . . f f f f . . . . . 
        . . f f f f f f f f . . . 
        . f f f c f f f f f f . . 
        c f f f c c f f f f f f f 
        c f f f f f f f c f f f f 
        c c f f e e f f f c c c . 
        f c c f f e e f f f f f . 
        f f f 2 f e e f 2 f f f . 
        f f 4 2 f 4 4 f 2 4 f f . 
        e f e e 4 4 4 4 4 e f . . 
        e 4 4 4 e 7 7 7 b f e f . 
        . e 4 4 e 7 7 7 7 f 4 e . 
        . . e e 6 6 6 6 6 f . . . 
        . . . f f f f f f f . . . 
        . . . . . . . f f f . . . 
        `],
    100,
    characterAnimations.rule(Predicate.Moving, Predicate.FacingDown)
    )
    mySprite2.follow(mySprite3, 20)
}
for (let value12 of tiles.getTilesByType(assets.tile`myTile25`)) {
    mySprite2 = sprites.create(img`
        ................66666...................
        ............666666677666.66666..........
        ...........6777777777777677776..........
        .......66666777755577775777776666.......
        .......66666777755577775777776666.......
        ......6777666667555575557777677776666...
        ......67776777777555555577777777667776..
        ...6666666777777777757777777776666666...
        .6666677667777775557577555777777767776..
        .6666677667777775557577555777777767776..
        666667776677777557775557555577777677766.
        .666677677777777777755577777777777677666
        .c677667777677777777755777777766777666..
        .c677667777677777777755777777766777666..
        cc7776666667777777777777777777776666666c
        cc7666666677777777777777777777777667776c
        c666667766777777777777777766667776666776
        6666677666667777677777767766776667666666
        6666677666667777677777767766776667666666
        ccc7766777677777666777766766777767766ccc
        cc777667776777767776777676666777677666cc
        .6666c6766667767777666667766666666666cc.
        .6666c6766667767777666667766666666666cc.
        .cccc66677666667766666667766776666ccccc.
        ...cccc777c677676666677667666777666cccc.
        ...ccc6766c777666776677766666666c6666cc.
        .....c6ccc6766c667776777c666c6666cccc...
        .....c6ccc6766c667776777c666c6666cccc...
        .....cccccc6cc6666676667cc66cccc6cccc...
        .......ccccccc66c666c666cccccccccc......
        ........ccc.ccc6c66cccc6ccccc.ccc.......
        ........ccc.ccc6c66cccc6ccccc.ccc.......
        ..............cccccccccccc..............
        ................feeeeeeee...............
        ...............feeeeeeeefe..............
        ...........eeeeeeffeeeeffeee............
        ...........eeeeeeffeeeeffeee............
        ...............fffffeeef..eee...........
        ...................feee.................
        ....................e...................
        `, SpriteKind.tree)
    tiles.placeOnTile(mySprite2, value12)
    mySprite2.z = 1000
}
for (let value13 of tiles.getTilesByType(assets.tile`myTile26`)) {
    mySprite2 = sprites.create(img`
        ..................86....................
        ............66888867886.................
        ............866668776888868.............
        .............86887777677768.............
        ..........68866777777766688.............
        .........6776777777777788666............
        ..........677666677676666868............
        ...........86666676676777688............
        ..........866666666666677778............
        .........66776666666666666676...........
        .......66776666776667766667776..........
        .......66776666776667766667776..........
        ......888666777666767776666688..........
        .....67776677766677677777666768.........
        ....67766666666777766777766667766.......
        .....86667776667776667666777767776......
        ......87777666666666777667777766688.....
        ....68877766776667767777777777766776....
        ..88666666677767777777777777666666778...
        .866666666777667776777777666667776668...
        ..886776666666777767767776666677776668..
        ..867766677666666666666666677766666668..
        ..867766677666666666666666677766666668..
        8866666777766667766666677766777666668...
        66686666676667766676776777666776666668..
        888666666666777667767766676666666776668.
        .866688666666766677677666666677666666668
        .866886666666666677666666676677776666688
        .6688666666666666666666666776666666688..
        ..88666886666666666667766677766666668...
        ...8668886666666666667766677766666668...
        ...868866668666666666766666666666888....
        ....888666886686666666666666666668......
        ....888666886686666666666666666668......
        ......866886668666686666686668688.......
        ......888866688666886668888668888.......
        .........88888888688888cce868...........
        ...............ee88e88.eec.8............
        .................eeee..ee...............
        .................ceef.cee...............
        .................ceefcecc...............
        .................feefce.................
        .................fceeec.................
        .................ffceec.................
        ........................................
        `, SpriteKind.tree)
    tiles.placeOnTile(mySprite2, value13)
}
forever(function () {
    if (mySprite3.tileKindAt(TileDirection.Center, assets.tile`myTile0`)) {
        controller.moveSprite(mySprite3, 35, 35)
    } else if (mySprite3.tileKindAt(TileDirection.Center, assets.tile`myTile14`)) {
        controller.moveSprite(mySprite3, 20, 15)
    } else if (mySprite3.tileKindAt(TileDirection.Center, assets.tile`myTile18`)) {
        controller.moveSprite(mySprite3, 20, 15)
    } else if (mySprite3.tileKindAt(TileDirection.Center, assets.tile`myTile19`)) {
        controller.moveSprite(mySprite3, 20, 15)
    } else {
        controller.moveSprite(mySprite3, 50, 50)
    }
})
