var skins;
(function (skins) {
    var components;
    (function (components) {
        var ButtonMeauSkin = (function (_super) {
            __extends(ButtonMeauSkin, _super);
            function ButtonMeauSkin() {
                _super.call(this);
                this.__s = egret.gui.setProperties;
                this.elementsContent = [this.__4_i()];
                this.states = [
                    new egret.gui.State("up", []),
                    new egret.gui.State("down", [
                        new egret.gui.SetProperty("__4", "source", "dice_table_10_png")
                    ]),
                    new egret.gui.State("disabled", [
                        new egret.gui.SetProperty("__4", "source", "dice_table_10_png")
                    ])
                ];
            }
            var __egretProto__ = ButtonMeauSkin.prototype;
            __egretProto__.__4_i = function () {
                var t = new egret.gui.UIAsset();
                this.__4 = t;
                this.__s(t, ["percentHeight", "source", "percentWidth"], [100, "dice_table_10_png", 100]);
                return t;
            };
            return ButtonMeauSkin;
        })(egret.gui.Skin);
        components.ButtonMeauSkin = ButtonMeauSkin;
        ButtonMeauSkin.prototype.__class__ = "skins.components.ButtonMeauSkin";
    })(components = skins.components || (skins.components = {}));
})(skins || (skins = {}));
