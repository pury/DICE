var skins;
(function (skins) {
    var components;
    (function (components) {
        var ButtonDirectBuySkin = (function (_super) {
            __extends(ButtonDirectBuySkin, _super);
            function ButtonDirectBuySkin() {
                _super.call(this);
                this.__s = egret.gui.setProperties;
                this.elementsContent = [this.__4_i()];
                this.states = [
                    new egret.gui.State("up", []),
                    new egret.gui.State("down", [
                        new egret.gui.SetProperty("__4", "source", "buy_png")
                    ]),
                    new egret.gui.State("disabled", [
                        new egret.gui.SetProperty("__4", "source", "buy_png")
                    ])
                ];
            }
            var __egretProto__ = ButtonDirectBuySkin.prototype;
            __egretProto__.__4_i = function () {
                var t = new egret.gui.UIAsset();
                this.__4 = t;
                this.__s(t, ["percentHeight", "source", "percentWidth"], [100, "buy_png", 100]);
                return t;
            };
            return ButtonDirectBuySkin;
        })(egret.gui.Skin);
        components.ButtonDirectBuySkin = ButtonDirectBuySkin;
        ButtonDirectBuySkin.prototype.__class__ = "skins.components.ButtonDirectBuySkin";
    })(components = skins.components || (skins.components = {}));
})(skins || (skins = {}));
