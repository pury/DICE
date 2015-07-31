var skins;
(function (skins) {
    var components;
    (function (components) {
        var ButtonQuitSkin = (function (_super) {
            __extends(ButtonQuitSkin, _super);
            function ButtonQuitSkin() {
                _super.call(this);
                this.__s = egret.gui.setProperties;
                this.__s(this, ["minHeight", "minWidth"], [60, 140]);
                this.elementsContent = [this.__4_i()];
                this.states = [
                    new egret.gui.State("up", []),
                    new egret.gui.State("down", [
                        new egret.gui.SetProperty("__4", "source", "quit_png")
                    ]),
                    new egret.gui.State("disabled", [
                        new egret.gui.SetProperty("__4", "source", "quit_png")
                    ])
                ];
            }
            var __egretProto__ = ButtonQuitSkin.prototype;
            __egretProto__.__4_i = function () {
                var t = new egret.gui.UIAsset();
                this.__4 = t;
                this.__s(t, ["percentHeight", "source", "percentWidth"], [100, "quit_png", 100]);
                return t;
            };
            return ButtonQuitSkin;
        })(egret.gui.Skin);
        components.ButtonQuitSkin = ButtonQuitSkin;
        ButtonQuitSkin.prototype.__class__ = "skins.components.ButtonQuitSkin";
    })(components = skins.components || (skins.components = {}));
})(skins || (skins = {}));
//# sourceMappingURL=ButtonQuitSkin.js.map