var skins;
(function (skins) {
    var components;
    (function (components) {
        var ButtonHelpSkin = (function (_super) {
            __extends(ButtonHelpSkin, _super);
            function ButtonHelpSkin() {
                _super.call(this);
                this.__s = egret.gui.setProperties;
                this.elementsContent = [this.__4_i()];
                this.states = [
                    new egret.gui.State("up", []),
                    new egret.gui.State("down", [
                        new egret.gui.SetProperty("__4", "source", "help_png")
                    ]),
                    new egret.gui.State("disabled", [
                        new egret.gui.SetProperty("__4", "source", "help_png")
                    ])
                ];
            }
            var __egretProto__ = ButtonHelpSkin.prototype;
            __egretProto__.__4_i = function () {
                var t = new egret.gui.UIAsset();
                this.__4 = t;
                this.__s(t, ["percentHeight", "source", "percentWidth"], [100, "dice_btn_help_png", 100]);
                return t;
            };
            return ButtonHelpSkin;
        })(egret.gui.Skin);
        components.ButtonHelpSkin = ButtonHelpSkin;
        ButtonHelpSkin.prototype.__class__ = "skins.components.ButtonHelpSkin";
    })(components = skins.components || (skins.components = {}));
})(skins || (skins = {}));
