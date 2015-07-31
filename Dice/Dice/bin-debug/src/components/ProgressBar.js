var game;
(function (game) {
    var ProgressBar = (function (_super) {
        __extends(ProgressBar, _super);
        function ProgressBar() {
            _super.call(this);
            this.touchEnabled = this.touchChildren = false;
            this.WW = 507;
            this.HH = 39;
            this._rectX = 0;
            this._rectY = 0;
            this._progressLogo = new egret.Bitmap();
            this._progressLogo.texture = RES.getRes("icon_png");
            //this._progressBeauty = new egret.gui.UIAsset();
            //this._progressBeauty.source = "loading_bg_png";
            this._progressBg = new egret.Bitmap();
            this._progressBg.texture = RES.getRes("loading_black_png");
            this._progressFront = new egret.Bitmap();
            this._progressFront.texture = RES.getRes("loading_pro_png");
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
            this._progressLogo.x = (game.Config.getInstance().StageWidth - 616) / 2;
            this._progressBg.x = (game.Config.getInstance().StageWidth - this.WW) / 2;
            this._progressBg.y = (game.Config.getInstance().StageHeight - this.HH) / 2;
            this._progressFront.y = this._progressBg.y + 1;
            this._progressFront.x = this._progressValue = this._progressBg.x;
            this._progressLabel.x = (game.Config.getInstance().StageWidth - this._progressLabel.width) / 2;
            this._progressLabel.y = (game.Config.getInstance().StageHeight - this.HH) / 2 + 50;
            this._progressFront.mask = this._rect;
        }
        var __egretProto__ = ProgressBar.prototype;
        __egretProto__.reset = function () {
            this._progressLabel.text = "";
            this._rect.width = this._rectX;
        };
        __egretProto__.updateProgress = function (current, total) {
            this._progressLabel.text = "正在加载..." + Math.floor(current / total * 100) + "%";
            this._rect.width = this._rectX + this.WW * current / total;
        };
        return ProgressBar;
    })(egret.Sprite);
    game.ProgressBar = ProgressBar;
    ProgressBar.prototype.__class__ = "game.ProgressBar";
})(game || (game = {}));
