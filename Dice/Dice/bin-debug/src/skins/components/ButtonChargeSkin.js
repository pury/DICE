var skins;
(function (skins) {
    var components;
    (function (components) {
        var ButtonChargeSkin = (function (_super) {
            __extends(ButtonChargeSkin, _super);
            function ButtonChargeSkin() {
                _super.call(this);
                this.__s = egret.gui.setProperties;
                this.elementsContent = [this.__4_i()];
                this.states = [
                    new egret.gui.State("up", []),
                    new egret.gui.State("down", [
                        new egret.gui.SetProperty("__4", "source", "recharge_png")
                    ]),
                    new egret.gui.State("disabled", [
                        new egret.gui.SetProperty("__4", "source", "recharge_png")
                    ])
                ];
            }
            var __egretProto__ = ButtonChargeSkin.prototype;
            __egretProto__.__4_i = function () {
                var t = new egret.gui.UIAsset();
                this.__4 = t;
                this.__s(t, ["percentHeight", "source", "percentWidth"], [100, "recharge_png", 100]);
                return t;
            };
            return ButtonChargeSkin;
        })(egret.gui.Skin);
        components.ButtonChargeSkin = ButtonChargeSkin;
        ButtonChargeSkin.prototype.__class__ = "skins.components.ButtonChargeSkin";
    })(components = skins.components || (skins.components = {}));
})(skins || (skins = {}));
