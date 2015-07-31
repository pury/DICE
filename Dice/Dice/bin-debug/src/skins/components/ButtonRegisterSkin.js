var skins;
(function (skins) {
    var components;
    (function (components) {
        var ButtonRegisterSkin = (function (_super) {
            __extends(ButtonRegisterSkin, _super);
            function ButtonRegisterSkin() {
                _super.call(this);
                this.__s = egret.gui.setProperties;
                this.__s(this, ["minHeight", "minWidth"], [60, 140]);
                this.elementsContent = [this.__4_i()];
                this.states = [
                    new egret.gui.State("up", []),
                    new egret.gui.State("down", [
                        new egret.gui.SetProperty("__4", "source", "dice_btn_5_png")
                    ]),
                    new egret.gui.State("disabled", [
                        new egret.gui.SetProperty("__4", "source", "dice_btn_5_png")
                    ])
                ];
            }
            var __egretProto__ = ButtonRegisterSkin.prototype;
            __egretProto__.__4_i = function () {
                var t = new egret.gui.UIAsset();
                this.__4 = t;
                this.__s(t, ["percentHeight", "source", "percentWidth"], [100, "dice_btn_5_png", 100]);
                return t;
            };
            return ButtonRegisterSkin;
        })(egret.gui.Skin);
        components.ButtonRegisterSkin = ButtonRegisterSkin;
        ButtonRegisterSkin.prototype.__class__ = "skins.components.ButtonRegisterSkin";
    })(components = skins.components || (skins.components = {}));
})(skins || (skins = {}));
