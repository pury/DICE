var skins;
(function (skins) {
    var components;
    (function (components) {
        var ButtonReturnSkin = (function (_super) {
            __extends(ButtonReturnSkin, _super);
            function ButtonReturnSkin() {
                _super.call(this);
                this.__s = egret.gui.setProperties;
                this.__s(this, ["minHeight", "minWidth"], [60, 140]);
                this.elementsContent = [this.__4_i()];
                this.states = [
                    new egret.gui.State("up", []),
                    new egret.gui.State("down", [
                        new egret.gui.SetProperty("__4", "source", "return_png")
                    ]),
                    new egret.gui.State("disabled", [
                        new egret.gui.SetProperty("__4", "source", "return_png")
                    ])
                ];
            }
            var __egretProto__ = ButtonReturnSkin.prototype;
            __egretProto__.__4_i = function () {
                var t = new egret.gui.UIAsset();
                this.__4 = t;
                this.__s(t, ["percentHeight", "source", "percentWidth"], [100, "return_png", 100]);
                return t;
            };
            return ButtonReturnSkin;
        })(egret.gui.Skin);
        components.ButtonReturnSkin = ButtonReturnSkin;
        ButtonReturnSkin.prototype.__class__ = "skins.components.ButtonReturnSkin";
    })(components = skins.components || (skins.components = {}));
})(skins || (skins = {}));
//# sourceMappingURL=ButtonReturnSkin.js.map