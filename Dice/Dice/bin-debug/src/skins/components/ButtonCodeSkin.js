var skins;
(function (skins) {
    var components;
    (function (components) {
        var ButtonCodeSkin = (function (_super) {
            __extends(ButtonCodeSkin, _super);
            function ButtonCodeSkin() {
                _super.call(this);
                this.__s = egret.gui.setProperties;
                this.__s(this, ["minHeight", "minWidth"], [60, 140]);
                this.elementsContent = [this.__4_i()];
                this.states = [
                    new egret.gui.State("up", []),
                    new egret.gui.State("down", [
                        new egret.gui.SetProperty("__4", "source", "dice_code_2_png")
                    ]),
                    new egret.gui.State("disabled", [
                        new egret.gui.SetProperty("__4", "source", "dice_code_3_png")
                    ])
                ];
            }
            var __egretProto__ = ButtonCodeSkin.prototype;
            __egretProto__.__4_i = function () {
                var t = new egret.gui.UIAsset();
                this.__4 = t;
                this.__s(t, ["percentHeight", "source", "percentWidth"], [100, "dice_code_2_png", 100]);
                return t;
            };
            return ButtonCodeSkin;
        })(egret.gui.Skin);
        components.ButtonCodeSkin = ButtonCodeSkin;
        ButtonCodeSkin.prototype.__class__ = "skins.components.ButtonCodeSkin";
    })(components = skins.components || (skins.components = {}));
})(skins || (skins = {}));
