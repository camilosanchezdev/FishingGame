class PreloadScene extends Phaser.Scene {
    constructor(){
        super({key: 'PreloadScene'});

    }
    preload() {
        var progressBar = this.add.graphics();
        var progressBox = this.add.graphics();
        progressBox.fillStyle(0x222222, 0.8);
        progressBox.fillRect(240, 270, 320, 50);


        this.load.image('circle', 'assets/circle.png');
        this.load.image('bg', 'assets/background.png');
        this.load.image('jellyfish1', 'assets/Jellyfish1.png');
        this.load.image('jellyfish2', 'assets/Jellyfish2.png');
        this.load.image('jellyfish3', 'assets/Jellyfish3.png');
        this.load.image('jellyfish4', 'assets/Jellyfish4.png');
        this.load.image('jellyfish5', 'assets/Jellyfish5.png');
        this.load.image('jellyfish6', 'assets/Jellyfish6.png');
        this.load.image('logo', 'assets/logo.png');
        this.load.image('play', 'assets/play.png');
        this.load.image('fish1', 'assets/fish-1.png');
        this.load.image('fish2', 'assets/fish-2.png');
        this.load.image('fish3', 'assets/fish-3.png');
        this.load.image('fish4', 'assets/fish-4.png');
        this.load.image('fish5', 'assets/fish-5.png');
        this.load.image('correct', 'assets/correct.png');
        this.load.image('incorrect', 'assets/incorrect.png');
        this.load.image('gameover', 'assets/gameover4.png');
        this.load.image('home', 'assets/home.png');

        this.cameras.main.setBackgroundColor('#000000');
        this.load.on('progress', function (value) {
           // console.log(value);
            progressBar.clear();
            progressBar.fillStyle(0xffffff, 1);
            progressBar.fillRect(250, 280, 300 * value, 30);
        });
        // this.load.on('fileprogress', function (file) {
        //     console.log(file.src);
        // });
        this.load.on('complete', function () {
            progressBar.destroy();
            progressBox.destroy();
            loadingText.setText('Ready!');
           // this.scene.start('StartScene');
        });

       

                var width = this.cameras.main.width;
        var height = this.cameras.main.height;
        var loadingText = this.make.text({
            x: width / 2,
            y: height / 2 - 50,
            text: 'Loading...',
            style: {
                font: '20px monospace',
                fill: '#ffffff'
            }
        });
        loadingText.setOrigin(0.5, 0.5);
        
        // var percentText = this.make.text({
        //     x: width / 2,
        //     y: height / 2 - 5,
        //     text: '0%',
        //     style: {
        //         font: '18px monospace',
        //         fill: '#ffffff'
        //     }
        // });
        // percentText.setOrigin(0.5, 0.5);
        // percentText.setText(parseInt(value * 100) + '%');
        // this.scene.stop('PreloadScene');
        //     this.scene.start('StartScene');
    }

    create() {
        // let play = this.add.image(600, 700, 'play').setScale(.199).setInteractive();
        // play.on('pointerup', () => {
        //     this.scene.stop('StartScene');
        //     this.scene.start('GameScene');
        //   });
          this.scene.stop('PreloadScene');
            this.scene.start('StartScene');
    }
} // end class