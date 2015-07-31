var skins;
(function (skins) {
    var components;
    (function (components) {
        var ButtonStartGameSkin = (function (_super) {
            __extends(ButtonStartGameSkin, _super);
            function ButtonStartGameSkin() {
                _super.call(this);
                this.__s = egret.gui.setProperties;
                this.elementsContent = [this.__4_i()];
                this.states = [
                    new egret.gui.State("up", []),
                    new egret.gui.State("down", [
                        new egret.gui.SetProperty("__4", "source", "dice_table_9_png")
                    ]),
                    new egret.gui.State("disabled", [
                        new egret.gui.SetProperty("__4", "source", "dice_table_8_png")
                    ])
                ];
            }
            var __egretProto__ = ButtonStartGameSkin.prototype;
            __egretProto__.__4_i = function () {
                var t = new egret.gui.UIAsset();
                this.__4 = t;
                this.__s(t, ["percentHeight", "source", "percentWidth"], [100, "dice_table_8_png", 100]);
                return t;
            };
            return ButtonStartGameSkin;
        })(egret.gui.Skin);
        components.ButtonStartGameSkin = ButtonStartGameSkin;
        ButtonStartGameSkin.prototype.__class__ = "skins.components.ButtonStartGameSkin";
    })(components = skins.components || (skins.components = {}));
})(skins || (skins = {}));
