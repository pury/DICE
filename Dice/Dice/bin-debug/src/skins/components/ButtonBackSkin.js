var skins;
(function (skins) {
    var components;
    (function (components) {
        var ButtonBackSkin = (function (_super) {
            __extends(ButtonBackSkin, _super);
            function ButtonBackSkin() {
                _super.call(this);
                this.__s = egret.gui.setProperties;
                this.elementsContent = [this.__4_i()];
                this.states = [
                    new egret.gui.State("up", []),
                    new egret.gui.State("down", [
                        new egret.gui.SetProperty("__4", "source", "dice_table_4_png")
                    ]),
                    new egret.gui.State("disabled", [
                        new egret.gui.SetProperty("__4", "source", "dice_table_4_png")
                    ])
                ];
            }
            var __egretProto__ = ButtonBackSkin.prototype;
            __egretProto__.__4_i = function () {
                var t = new egret.gui.UIAsset();
                this.__4 = t;
                this.__s(t, ["percentHeight", "source", "percentWidth"], [100, "dice_table_4_png", 100]);
                return t;
            };
            return ButtonBackSkin;
        })(egret.gui.Skin);
        components.ButtonBackSkin = ButtonBackSkin;
        ButtonBackSkin.prototype.__class__ = "skins.components.ButtonBackSkin";
    })(components = skins.components || (skins.components = {}));
})(skins || (skins = {}));
