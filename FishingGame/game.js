const gameState = {
	score: 0,
	lifes: 3
};

const config = {
	type: Phaser.AUTO,
	width: 760,
	height: 1150,
	backgroundColor: "b9eaff",
	physics: {
		default: 'arcade',
		arcade: {
			gravity: { y: 200 },
			enableBody: true,
		}
	},
	scale: {
        mode: Phaser.Scale.FIT,
        parent: 'phaser-example',
        autoCenter: Phaser.Scale.CENTER_BOTH,
        width: 760,
        height: 1150
    },
	scene: [PreloadScene, StartScene, GameScene, EndScene]
};


const game = new Phaser.Game(config);