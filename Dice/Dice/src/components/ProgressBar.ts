module game {
    export class ProgressBar extends egret.Sprite{
        /**background asset*/
        private _progressBg: egret.Bitmap;
        /**front asset*/
        private _progressFront: egret.Bitmap;
        private _progressLabel: egret.TextField;
        //private _progressBeauty: egret.Bitmap;
        private _progressLogo: egret.Bitmap;
        private _rect: egret.Rectangle;
        private _rectX: number;
        private _rectY: number;
        private _progressValue: number;
        private WW: number;
        private HH: number;

        public constructor() {
            super();
            this.touchEnabled = this.touchChildren = false;
            this.WW = 507;
            this.HH = 39;
            this._rectX = 0;
            this._rectY = 0;
            this._progressLogo = new egret.Bitmap();
            this._progressLogo.texture = RES.getRes( "icon_png");
            //this._progressBeauty = new egret.gui.UIAsset();
            //this._progressBeauty.source = "loading_bg_png";
            this._progressBg = new egret.Bitmap();
            this._progressBg.texture = RES.getRes("loading_black_png");
            this._progressFront = new egret.Bitmap();
            this._progressFront.texture = RES.getRes( "loading_pro_png");
            this._progressLabel = new egret.TextField();
            this.addChild(this._progressLogo);
            this.addChild(this._progressBg);
            this.addChild(this._progressFront);
            this.addChild(this._progressLabel);
            this._progressLabel.text = "";
            this._progressLabel.width = 250;
            this._progressLabel.textAlign = "center";
            this._rect = new egret.Rectangle(this._rectX, this._rectY, this.WW, this.HH);
          //  this.addChild(this._progressBeauty);

            //this._progressBeauty.x = 0;
           // this._progressBeauty.y = 0;
           // this._progressBeauty.height = Config.getInstance().StageHeight;
            this._progressLogo.x = (Config.getInstance().StageWidth - 616) / 2;
            this._progressBg.x = (Config.getInstance().StageWidth - this.WW) / 2;
            this._progressBg.y = (Config.getInstance().StageHeight - this.HH) / 2 ;
            this._progressFront.y = this._progressBg.y+1;
            this._progressFront.x = this._progressValue = this._progressBg.x;
            this._progressLabel.x = (Config.getInstance().StageWidth - this._progressLabel.width ) / 2;
            this._progressLabel.y = (Config.getInstance().StageHeight - this.HH) / 2 + 50;
            this._progressFront.mask = this._rect;
        }

        public reset(): void {
            this._progressLabel.text = "";
            this._rect.width = this._rectX;
        }

        public updateProgress(current, total): void {
            this._progressLabel.text = "正在加载..." + Math.floor(current / total * 100) + "%";
            this._rect.width = this._rectX + this.WW * current / total;
        }
    }
}