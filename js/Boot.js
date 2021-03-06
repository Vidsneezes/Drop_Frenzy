BasicGame = {};

BasicGame.Boot = function (game) {

};

BasicGame.Boot.prototype = {

        preload: function () {

                //        Here we load the assets required for our preloader (in this case a background and a loading bar)
                this.load.image('preloaderbkg', 'assets/placeholder/preloader/preloader_background.png');
				this.load.image('preloaderbar', 'assets/placeholder/preloader/preloader_bar.png');
				
				this.load.image('flip','assets/placeholder/sprites/bkgFlipPhone.png');

        },

        create: function () {

                //        Unless you specifically know your game needs to support multi-touch I would recommend setting this to 1
                this.game.input.maxPointers = 1;

                //        Phaser will automatically pause if the browser tab the game is in loses focus. You can disable that here:
                this.game.stage.disableVisibilityChange = true;

            if (this.game.device.desktop)
            {
                        //        If you have any desktop specific settings, they can go in here
					this.game.stage.scaleMode = Phaser.StageScaleMode.SHOW_ALL;
					this.game.stage.scale.minWidth = 320;
                    this.game.stage.scale.minHeight = 480;
                    this.game.stage.scale.maxWidth = 640;
                    this.game.stage.scale.maxHeight = 960;
					this.game.stage.scale.pageAlignHorizontally = true;
					this.game.stage.scale.startFullScreen();
					this.game.stage.scale.setScreenSize(true);
					this.game.stage.scale.refresh();
            }
            else
            {
                        //        Same goes for mobile settings.
                        //        In this case we're saying "scale the game, no lower than 480x260 and no higher than 1024x768"
                    this.game.stage.scaleMode = Phaser.StageScaleMode.SHOW_ALL;
					this.game.stage.scale.minWidth = 320;
                    this.game.stage.scale.minHeight = 480;
                    this.game.stage.scale.maxWidth = 640;
                    this.game.stage.scale.maxHeight = 960;
					this.game.stage.scale.pageAlignHorizontally = true;
					this.game.stage.scale.forceOrientation(false,true,'flip');
					this.game.stage.scale.refresh();
					this.game.stage.scale.setScreenSize(true);
					this.game.stage.scale.startFullScreen();
            }

            //        By this point the preloader assets have loaded to the cache, we've set the game settings
            //        So now let's start the real preloader going
                this.game.state.start('Preloader');

        }

};