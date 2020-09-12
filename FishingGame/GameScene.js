class GameScene extends Phaser.Scene {
    constructor(){
        super({key: 'GameScene'});

    }
    fishNombres = [];
    rndFish = 0;
    rnd = [];
    text;
    timedEvent;
    life1;
    life2;
    life3;
    aGrid = new AlignGrid({scene: this, rows: 11, cols: 11});
    preload(){
        // this.load.image('jellyfish1', 'assets/Jellyfish1.png');
        // this.load.image('jellyfish2', 'assets/Jellyfish2.png');
        // this.load.image('jellyfish3', 'assets/Jellyfish3.png');
        // this.load.image('jellyfish4', 'assets/Jellyfish4.png');
        // this.load.image('jellyfish5', 'assets/Jellyfish5.png');
        // this.load.image('jellyfish6', 'assets/Jellyfish6.png');
        // this.load.image('fish1', 'assets/fish-1.png');
        // this.load.image('fish2', 'assets/fish-2.png');
        // this.load.image('fish3', 'assets/fish-3.png');
        // this.load.image('fish4', 'assets/fish-4.png');
        // this.load.image('fish5', 'assets/fish-5.png');
        // this.load.image('correct', 'assets/correct.png');
        // this.load.image('incorrect', 'assets/incorrect.png');
        // this.load.image('circle', 'assets/circle.png');
        // this.load.image('bg', 'assets/background.png');
        
    }
    
    create(){
        // Variables
        let alturas = [400, 500, 600, 700, 800];
        let fish1altura = 0;
        let fish2altura = 1;
        let fish3altura = 2;
        let fish4altura = 3;
        let fish5altura = 4;
        let fishImages = ['fish1', 'fish2', 'fish3', 'fish4', 'fish5'];
        // random numeros

        for(let i = 0; i < 50; i++){
            this.rnd.push(Math.floor(Math.random() * 5));
        }
        
     // Parámetros:  altura, 
        
        this.add.image(0, 0, 'bg').setOrigin(0, 0);
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
        // Lifes

        this.life1 =  this.add.sprite(70, 50, 'jellyfish1').play('explosion').setScale(.8);
        this.life2 = this.add.sprite(130, 50, 'jellyfish1').play('explosion').setScale(.8);
        this.life3 = this.add.sprite(190, 50, 'jellyfish1').play('explosion').setScale(.8);

        // Count Down time
        this.initialTime = 20;
        this.text = this.add.text(550, 10, formatTime(this.initialTime), {
            fontSize: '60px',
            color: '#000000'
        });

        // Each 1000 ms call onEvent
        this.timedEvent = this.time.addEvent({ delay: 1000, callback: onEvent, callbackScope: this, loop: true });

        function formatTime(seconds){
            // Minutes
            var minutes = Math.floor(seconds/60);
            // Seconds
            var partInSeconds = seconds%60;
            // Adds left zeros to seconds
            partInSeconds = partInSeconds.toString().padStart(2,'0');
            // Returns formated time
            return `${minutes}:${partInSeconds}`;
        };
        
        
        function onEvent ()
        {
            this.initialTime -= 1; // One second
            if(this.initialTime < 0){
                this.scene.stop('GameScene');
                this.scene.start('EndScene');
            }
            else{
                this.text.setText(formatTime(this.initialTime));
            }
            
        }
  
       gameState.fish1 = this.add.image(-200, alturas[fish1altura], 'fish1').setScale(.1).setInteractive();
       
        let tween = this.tweens.add({
            targets: gameState.fish1,
            x: 1000,
            duration: 2500,
            ease: 'Linear',
            repeat: -1,
            delay: 600,
            yoyo: true,
            flipX: true,
            onYoyo: function () {
                fish1altura++;
                if(fish1altura == 4){
                    fish1altura = 0;
                }
                gameState.fish1.setPosition(-100, alturas[fish1altura]);
                gameState.fish1.setActive(true).setVisible(true);
             
            },
        });
        
        gameState.fish2 = this.add.image(1000, alturas[fish2altura], 'fish2').setScale(.1).setInteractive();
        gameState.fish2.flipX = true;
       this.tweens.add({
        targets: gameState.fish2,
        x: -200,
        duration: 3000,
        ease: 'Linear',
        repeat: -1,
        delay: 600,
        yoyo: true,
        flipX: true,
        onYoyo: function () {
            fish2altura++;
            if(fish2altura == 4){
                fish2altura = 0;
            }
            gameState.fish2.setPosition(-100, alturas[fish2altura]);
            gameState.fish2.setActive(true).setVisible(true);
        },
    });
    gameState.fish3 = this.add.image(-200,  alturas[fish3altura], 'fish3').setScale(.8).setInteractive();

       this.tweens.add({
        targets: gameState.fish3,
        x: 1000,
        duration: 3000,
        ease: 'Linear',
        repeat: -1,
        delay: 600,
        yoyo: true,
        flipX: true,
        onYoyo: function () {
            fish3altura++;
            if(fish3altura == 4){
                fish3altura = 0;
            }
            gameState.fish3.setPosition(-100, alturas[fish3altura]);
            gameState.fish3.setActive(true).setVisible(true);
        },
    });
    gameState.fish4 = this.add.image(1000, alturas[fish4altura], 'fish4').setScale(.8).setInteractive();
    gameState.fish4.flipX = true;
       this.tweens.add({
        targets: gameState.fish4,
        x: -200,
        duration: 2500,
        ease: 'Linear',
        repeat: -1,
        delay: 600,
        yoyo: true,
        flipX: true,
        onYoyo: function () {
            fish4altura++;
            if(fish4altura == 4){
                fish4altura = 0;
            }
            gameState.fish4.setPosition(-100, alturas[fish4altura]);
            gameState.fish4.setActive(true).setVisible(true);
        },
    });
    gameState.fish5 = this.add.image(1000, alturas[fish5altura], 'fish5').setScale(.8).setInteractive();
    gameState.fish5.flipX = true;
       this.tweens.add({
        targets: gameState.fish5,
        x: -200,
        duration: 2000,
        ease: 'Linear',
        repeat: -1,
        delay: 600,
        yoyo: true,
        flipX: true,
        onYoyo: function () {
            fish5altura++;
            if(fish5altura > 4){
                fish5altura = 0;
            }
            gameState.fish5.setPosition(-100, alturas[fish5altura]);
            gameState.fish5.setActive(true).setVisible(true);
        },
    });

    gameState.fish1.setName('fish1');
    gameState.fish2.setName('fish2');
    gameState.fish3.setName('fish3');
    gameState.fish4.setName('fish4');
    gameState.fish5.setName('fish5');

    this.fishArray = [];
// Fish a pescar
    let circle = this.add.image(600, 700, 'circle').setScale(0.11); // circle
    

    // Guardamos fishes en Array
    for(let i = 0; i < 5; i++){
       
        let answer; answer = this.add.image(600, 700, 'fish' + (i+1));
        if(i < 2){
            answer.setScale(.09);
        }
        else if (i == 3){
            answer.setScale(.5);
        }
        else{
            answer.setScale(.7);
        }
        this.fishArray.push(answer);
        this.fishNombres.push('fish'+(i+1));
    }

   this.hideFish();


this.turnFishOn(this.rnd[this.rndFish]);
  // GRID

     this.aGrid.placeAtIndex(104, circle);
     this.aGrid.placeAtIndex(104, gameState.answer);
     this.aGrid.placeAtIndex(8, this.text);

           // interaction
    gameState.fish1.on('pointerup', () => {
        this.matchFish(gameState.fish1);
    });
    gameState.fish2.on('pointerup', () => {
        this.matchFish(gameState.fish2);

    });
    gameState.fish3.on('pointerup', () => {
        this.matchFish(gameState.fish3);
    });
    gameState.fish4.on('pointerup', () => {
        this.matchFish(gameState.fish4);

    });
    gameState.fish5.on('pointerup', () => {
        this.matchFish(gameState.fish5);

});

    } // end CREATE
   


    update(){
  
    }   // end update

    // functions

    turnFishOn(index){
        gameState.answer = this.fishArray[index];
        //this.aGrid2 = new AlignGrid({scene: this, rows: 11, cols: 11});
        this.aGrid.placeAtIndex(104, gameState.answer);
        gameState.answer.visible = true;
        gameState.answer.setName(this.fishNombres[index]);
       
    }
    hideFish(){
        for(let i = 0; i < 5; i++){
            this.fishArray[i].visible = false;
        }
       
    }
    matchFish(fish){
        // +1 point in score
        
        gameState.score++;

        fish.setActive(false).setVisible(false);
        this.hideFish();
        this.rndFish++;
        if(fish.name === gameState.answer.name){
        //this.aGrid3 = new AlignGrid({scene: this, rows: 11, cols: 11});
            let correcto = this.add.image(0, 0, 'correct');
            
            this.aGrid.placeAtIndex(16, correcto);
           
            correcto.setScale(.05);
            
            this.tweens.add({
                targets: correcto,
                y: 100,
                duration: 500,
                ease: 'Power4',
                repeat: 0,
                delay: 1,
                yoyo: true,
                onComplete: function () {
                    correcto.destroy();
                },
            });
           
        }
        else{
            // lifes
            gameState.lifes--;
            if(gameState.lifes === 2){
                this.life3.destroy();
                
                
            }
            else if(gameState.lifes === 1){
                this.life2.destroy();
            }
            else if(gameState.lifes === 0){
                this.life1.destroy();
                gameState.lifes = 3;
                this.scene.stop('GameScene');
                this.scene.start('EndScene');
            }
            //-1 point in score
            gameState.score--;
          //  this.aGrid4 = new AlignGrid({scene: this, rows: 11, cols: 11});
            let incorrect = this.add.image(600, 130, 'incorrect');
            this.aGrid.placeAtIndex(16, incorrect);
            incorrect.setScale(.05);
            
            this.tweens.add({
                targets: incorrect,
                y: 100,
                duration: 500,
                ease: 'Power4',
                repeat: 0,
                delay: 1,
                yoyo: true,
                onComplete: function () {
                    incorrect.destroy();
                },
            });
        }
        
        this.turnFishOn(this.rnd[this.rndFish]);
      
    }// end matchfish

} // end class