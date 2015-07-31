var skins;
(function (skins) {
    var components;
    (function (components) {
        var ButtonTouristSkin = (function (_super) {
            __extends(ButtonTouristSkin, _super);
            function ButtonTouristSkin() {
                _super.call(this);
                this.__s = egret.gui.setProperties;
                this.__s(this, ["minHeight", "minWidth"], [60, 140]);
                this.elementsContent = [this.__4_i()];
                this.states = [
                    new egret.gui.State("up", []),
                    new egret.gui.State("down", [
                        new egret.gui.SetProperty("__4", "source", "green_png")
                    ]),
                    new egret.gui.State("disabled", [
                        new egret.gui.SetProperty("__4", "source", "green_png")
                    ])
                ];
            }
            var __egretProto__ = ButtonTouristSkin.prototype;
            __egretProto__.__4_i = function () {
                var t = new egret.gui.UIAsset();
                this.__4 = t;
                this.__s(t, ["percentHeight", "source", "percentWidth"], [100, "green_png", 100]);
                return t;
            };
            return ButtonTouristSkin;
        })(egret.gui.Skin);
        components.ButtonTouristSkin = ButtonTouristSkin;
        ButtonTouristSkin.prototype.__class__ = "skins.components.ButtonTouristSkin";
    })(components = skins.components || (skins.components = {}));
})(skins || (skins = {}));
//# sourceMappingURL=ButtonTouristSkin.js.map