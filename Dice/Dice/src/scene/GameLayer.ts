module game {
    /**Game scene layer, the game content related to the scene can be placed inside this layer.*/
    export class GameLayer extends egret.DisplayObjectContainer {
        private static instance: GameLayer; 
        private mc1: egret.MovieClip;
        private Dice: egret.MovieClip;
        private mBackGround: egret.Bitmap;
        private mLogo: egret.Bitmap;
        public WW: number = 0;
        public HH: number = 0;
        public cup_cup: egret.Bitmap;
        public mFlagRoom: boolean = false;
        private mProgressBar: ProgressBar;
        private mTimer: egret.Timer;
        private mCount: number;

        public constructor() {
            super();
            this.WW = Config.getInstance().StageWidth;
            this.HH = Config.getInstance().StageHeight;
            this.mBackGround = new egret.Bitmap();
            this.mLogo = new egret.Bitmap();
            this.setBackGround(1);
            if (this.mBackGround) {
                this.mBackGround.width = this.WW;
                this.mBackGround.height = this.HH;
                // this.mBackGround.addEventListener(egret);
                this.addChild(this.mBackGround);
            }
            this.mLogo.texture = RES.getRes("icon_png");
            this.mProgressBar = new ProgressBar();
            this.mCount = 0;
        }

        public addLoading(): void {
            if (this.mc1 == null) {
                var data = RES.getRes("dice_move_json");
                var txtr = RES.getRes("dice_move_png");
                if (data && txtr) {
                    var mcFactory: egret.MovieClipDataFactory = new egret.MovieClipDataFactory(data, txtr);
                    this.mc1 = new egret.MovieClip(mcFactory.generateMovieClipData("载入圈圈"));
                }
            }
            if (this.mc1 == null){
                return;
            }
            this.removeLoading();
            this.mc1.x = (this.WW - this.mc1.width) / 2;
            this.mc1.y = (this.HH - this.mc1.height) / 2;
            this.addChild(this.mc1);
            this.mc1.play(-1);
        }

        public removeLoading(): void {
            if (this.contains(this.mc1)) {
                this.mc1.stop();
                this.removeChild(this.mc1);
            }
        }

        public addDice(): void {
            if (this.Dice == null) {
                var data = RES.getRes("dice_cup_json");
                var txtr = RES.getRes("dice_cup2_png");
                if (data && txtr) {
                    var mcFactory: egret.MovieClipDataFactory = new egret.MovieClipDataFactory(data, txtr);
                    this.Dice = new egret.MovieClip(mcFactory.generateMovieClipData("骰盅"));
                }
            }
            if (this.Dice == null) {
                return;
            }
            //this.removeDice();
            this.Dice.x = (this.WW - this.Dice.width) / 2;
            this.Dice.y = (this.HH - this.Dice.height) / 2;
            this.addChild(this.Dice);
            this.removeCup();
            this.Dice.play(-1);
            SoundManager.getInstance().controlMusic("dice_5", true);
        }

        public removeDice(): void {
            if (this.Dice && this.contains(this.Dice)) {
                this.Dice.stop();
                this.removeChild(this.Dice);
            }
          //  this.removeCup();
            SoundManager.getInstance().controlMusic("dice_5", false);
            this.addCup();
        }

        public addCup(): void {
            if (this.cup_cup == null) {
                this.cup_cup = new egret.Bitmap();
                this.cup_cup.texture = RES.getRes("dice_table_11_png");
            }
            this.cup_cup.x = (this.WW - this.cup_cup.width) / 2;
            this.cup_cup.y = (this.HH - this.cup_cup.height) / 2;
            if (!this.contains(this.cup_cup)) {
                this.addChild(this.cup_cup);
            }
        }

        public removeCup(): void {
            if (this.cup_cup && this.contains(this.cup_cup)) {
                this.removeChild(this.cup_cup);
            }
        }

        /**
          *@ param 1 --> loading_bg_png
          *@ param 2 --> bgImage
          */
        public setBackGround(value: number): void {
            this.mBackGround.texture = value == 1 ? RES.getRes("loading_bg_png") : RES.getRes("bgImage");
        }

        public showProgress(): void {
            if (this.mTimer) {
                this.mTimer.stop();
                this.mTimer.removeEventListener(egret.TimerEvent.TIMER, this.progressUpdate, this);
                this.mTimer.removeEventListener(egret.TimerEvent.TIMER_COMPLETE, this.removeShow, this);
            }
            this.mCount = 0;
            this.mTimer = new egret.Timer(50, 15);
            this.mTimer.addEventListener(egret.TimerEvent.TIMER_COMPLETE, this.removeShow, this);
            this.mTimer.addEventListener(egret.TimerEvent.TIMER, this.progressUpdate, this);
            this.mTimer.start();
            this.mProgressBar.reset();
            if (!this.contains(this.mProgressBar)) {
                this.addChild(this.mProgressBar);
            }
        }

        private progressUpdate(e: egret.TimerEvent): void {
            this.mCount++;
            this.mProgressBar.updateProgress(this.mCount, 15);
        }

        private removeShow(e: egret.TimerEvent): void {
            this.mTimer.removeEventListener(egret.TimerEvent.TIMER_COMPLETE, this.removeShow, this);
            this.mTimer.removeEventListener(egret.TimerEvent.TIMER, this.progressUpdate, this);
            this.mTimer.stop();
            this.mTimer = null;
            this.mFlagRoom = true;
            GameUI.getInstance().setRoomVisible();
            if (this.mProgressBar.parent) {
                this.mProgressBar.parent.removeChild(this.mProgressBar);
            }
        }

        public forceRemove(): void {
            if (this.contains(this.mProgressBar)) {
                this.removeChild(this.mProgressBar);
            }
        }

        public static getInstance(): GameLayer {
            if (this.instance == null) {
                this.instance = new GameLayer();
            }
            return <GameLayer><any>(this.instance);
        }
    }
}