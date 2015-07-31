var skins;
(function (skins) {
    var components;
    (function (components) {
        var ButtonCloseSkin = (function (_super) {
            __extends(ButtonCloseSkin, _super);
            function ButtonCloseSkin() {
                _super.call(this);
                this.__s = egret.gui.setProperties;
                this.elementsContent = [this.__4_i()];
                this.states = [
                    new egret.gui.State("up", []),
                    new egret.gui.State("down", [
                        new egret.gui.SetProperty("__4", "source", "extra_close_png")
                    ]),
                    new egret.gui.State("disabled", [
                        new egret.gui.SetProperty("__4", "source", "extra_close_png")
                    ])
                ];
            }
            var __egretProto__ = ButtonCloseSkin.prototype;
            __egretProto__.__4_i = function () {
                var t = new egret.gui.UIAsset();
                this.__4 = t;
                this.__s(t, ["percentHeight", "source", "percentWidth"], [100, "extra_close_png", 100]);
                return t;
            };
            return ButtonCloseSkin;
        })(egret.gui.Skin);
        components.ButtonCloseSkin = ButtonCloseSkin;
        ButtonCloseSkin.prototype.__class__ = "skins.components.ButtonCloseSkin";
    })(components = skins.components || (skins.components = {}));
})(skins || (skins = {}));
//# sourceMappingURL=ButtonCloseSkin.js.map