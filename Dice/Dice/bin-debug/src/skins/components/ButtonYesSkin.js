var skins;
(function (skins) {
    var components;
    (function (components) {
        var ButtonYesSkin = (function (_super) {
            __extends(ButtonYesSkin, _super);
            function ButtonYesSkin() {
                _super.call(this);
                this.__s = egret.gui.setProperties;
                this.elementsContent = [this.__4_i()];
                this.states = [
                    new egret.gui.State("up", []),
                    new egret.gui.State("down", [
                        new egret.gui.SetProperty("__4", "source", "dice_btn_1_png")
                    ]),
                    new egret.gui.State("disabled", [
                        new egret.gui.SetProperty("__4", "source", "dice_btn_1_png")
                    ])
                ];
            }
            var __egretProto__ = ButtonYesSkin.prototype;
            __egretProto__.__4_i = function () {
                var t = new egret.gui.UIAsset();
                this.__4 = t;
                this.__s(t, ["percentHeight", "source", "percentWidth"], [100, "dice_btn_1_png", 100]);
                return t;
            };
            return ButtonYesSkin;
        })(egret.gui.Skin);
        components.ButtonYesSkin = ButtonYesSkin;
        ButtonYesSkin.prototype.__class__ = "skins.components.ButtonYesSkin";
    })(components = skins.components || (skins.components = {}));
})(skins || (skins = {}));
