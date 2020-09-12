class StartScene extends Phaser.Scene {
    constructor(){
        super({key: 'StartScene'});

    }
    preload(){
        // this.load.image('circle', 'assets/circle.png');
        // this.load.image('bg', 'assets/background.png');
        // this.load.image('jellyfish1', 'assets/Jellyfish1.png');
        // this.load.image('jellyfish2', 'assets/Jellyfish2.png');
        // this.load.image('jellyfish3', 'assets/Jellyfish3.png');
        // this.load.image('jellyfish4', 'assets/Jellyfish4.png');
        // this.load.image('jellyfish5', 'assets/Jellyfish5.png');
        // this.load.image('jellyfish6', 'assets/Jellyfish6.png');
        // this.load.image('logo', 'assets/logo.png');
        // this.load.image('play', 'assets/play.png');
    }
    
    create(){
        this.add.image(0, 0, 'bg').setOrigin(0, 0);
        let circle = this.add.image(600, 700, 'circle').setScale(0.11); // circulo
        this.anims.create({
            key: 'explosion',
            frames: [
                { key: 'jellyfish1' },
                { key: 'jellyfish2' },
                { key: 'jellyfish3' },
                { key: 'jellyfish4' },
                { key: 'jellyfish5' },
                { key: 'jellyfish6' }
            ],
            frameRate: 10,
            repeat: -1
        });
        let jelly1 = this.add.sprite(200, 300, 'jellyfish1').play('explosion');
        let jelly2 = this.add.sprite(800, 600, 'jellyfish1').play('explosion');
        let logo = this.add.image(600, 300, 'logo');
        let play = this.add.image(600, 700, 'play').setScale(.199).setInteractive();
        play.on('pointerdown', () => {
            this.scene.stop('StartScene');
            this.scene.start('GameScene');
          });
          // GRID
          this.aGrid = new AlignGrid({scene: this, rows: 11, cols: 11});
          //this.aGrid.showNumbers();
          this.aGrid.placeAtIndex(34, jelly1);
          this.aGrid.placeAtIndex(95, jelly2);
          this.aGrid.placeAtIndex(49, logo);
          this.aGrid.placeAtIndex(104, circle);
          this.aGrid.placeAtIndex(104, play);

    }

    update(){
        
    }   
}