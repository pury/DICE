var skins;
(function (skins) {
    var components;
    (function (components) {
        var ButtonloginSkin = (function (_super) {
            __extends(ButtonloginSkin, _super);
            function ButtonloginSkin() {
                _super.call(this);
                this.__s = egret.gui.setProperties;
                this.__s(this, ["minHeight", "minWidth"], [60, 140]);
                this.elementsContent = [this.__4_i()];
                this.states = [
                    new egret.gui.State("up", []),
                    new egret.gui.State("down", [
                        new egret.gui.SetProperty("__4", "source", "dice_btn_3_png")
                    ]),
                    new egret.gui.State("disabled", [
                        new egret.gui.SetProperty("__4", "source", "dice_btn_3_png")
                    ])
                ];
            }
            var __egretProto__ = ButtonloginSkin.prototype;
            __egretProto__.__4_i = function () {
                var t = new egret.gui.UIAsset();
                this.__4 = t;
                this.__s(t, ["percentHeight", "source", "percentWidth"], [100, "dice_btn_3_png", 100]);
                return t;
            };
            return ButtonloginSkin;
        })(egret.gui.Skin);
        components.ButtonloginSkin = ButtonloginSkin;
        ButtonloginSkin.prototype.__class__ = "skins.components.ButtonloginSkin";
    })(components = skins.components || (skins.components = {}));
})(skins || (skins = {}));
