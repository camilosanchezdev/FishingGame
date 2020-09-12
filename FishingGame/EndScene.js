class EndScene extends Phaser.Scene {
    constructor(){
        super({key: 'EndScene'});

    }
    preload(){
    }
    
    create(){

        this.add.image(0, 0, 'bg').setOrigin(0, 0);
        let circle1 = this.add.image(500, 700, 'circle').setScale(0.11); // circulo 1
        let circle2 =  this.add.image(650, 700, 'circle').setScale(0.11); // circulo 2
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
        let gameover =  this.add.image(600, 300, 'gameover');
        let play = this.add.image(650, 700, 'play').setScale(.199).setInteractive();
        play.on('pointerdown', () => {
            gameState.score = 0;
            this.scene.stop('EndScene');
            this.scene.start('GameScene');
          });
          let home = this.add.image(500, 700, 'home').setScale(.199).setInteractive();
          home.on('pointerdown', () => {
            gameState.score = 0;
            this.scene.stop('EndScene');
            this.scene.start('StartScene');
          });
          // show score
         let scorepoint =  this.text = this.add.text(0, 0, gameState.score, {
            fontSize: '60px',
            color: '#1a92e6',
            fontFamily: 'Arial'
        });
          // GRID
  this.aGrid = new AlignGrid({scene: this, rows: 11, cols: 11});
 // this.aGrid.showNumbers();
   this.aGrid.placeAtIndex(60, gameover);
   this.aGrid.placeAtIndex(34, jelly1);
   this.aGrid.placeAtIndex(95, jelly2);
   this.aGrid.placeAtIndex(102, home);
   this.aGrid.placeAtIndex(102, circle1);
   this.aGrid.placeAtIndex(105, play);
   this.aGrid.placeAtIndex(105, circle2);
   this.aGrid.placeAtIndex(73, scorepoint);
    }

    update(){
        
    }   
}