var skins;
(function (skins) {
    var components;
    (function (components) {
        var ButtonBackGameSkin = (function (_super) {
            __extends(ButtonBackGameSkin, _super);
            function ButtonBackGameSkin() {
                _super.call(this);
                this.__s = egret.gui.setProperties;
                this.__s(this, ["minHeight", "minWidth"], [60, 140]);
                this.elementsContent = [this.__4_i()];
                this.states = [
                    new egret.gui.State("up", []),
                    new egret.gui.State("down", [
                        new egret.gui.SetProperty("__4", "source", "room_return_png")
                    ]),
                    new egret.gui.State("disabled", [
                        new egret.gui.SetProperty("__4", "source", "room_return_png")
                    ])
                ];
            }
            var __egretProto__ = ButtonBackGameSkin.prototype;
            __egretProto__.__4_i = function () {
                var t = new egret.gui.UIAsset();
                this.__4 = t;
                this.__s(t, ["percentHeight", "source", "percentWidth"], [100, "room_return_png", 100]);
                return t;
            };
            return ButtonBackGameSkin;
        })(egret.gui.Skin);
        components.ButtonBackGameSkin = ButtonBackGameSkin;
        ButtonBackGameSkin.prototype.__class__ = "skins.components.ButtonBackGameSkin";
    })(components = skins.components || (skins.components = {}));
})(skins || (skins = {}));
//# sourceMappingURL=ButtonBackGameSkin.js.map