var skins;
(function (skins) {
    var components;
    (function (components) {
        var ButtonInfoSkin = (function (_super) {
            __extends(ButtonInfoSkin, _super);
            function ButtonInfoSkin() {
                _super.call(this);
                this.__s = egret.gui.setProperties;
                this.__s(this, ["minHeight", "minWidth"], [60, 140]);
                this.elementsContent = [this.__4_i()];
                this.states = [
                    new egret.gui.State("up", []),
                    new egret.gui.State("down", [
                        new egret.gui.SetProperty("__4", "source", "info_png")
                    ]),
                    new egret.gui.State("disabled", [
                        new egret.gui.SetProperty("__4", "source", "info_png")
                    ])
                ];
            }
            var __egretProto__ = ButtonInfoSkin.prototype;
            __egretProto__.__4_i = function () {
                var t = new egret.gui.UIAsset();
                this.__4 = t;
                this.__s(t, ["percentHeight", "source", "percentWidth"], [100, "info_png", 100]);
                return t;
            };
            return ButtonInfoSkin;
        })(egret.gui.Skin);
        components.ButtonInfoSkin = ButtonInfoSkin;
        ButtonInfoSkin.prototype.__class__ = "skins.components.ButtonInfoSkin";
    })(components = skins.components || (skins.components = {}));
})(skins || (skins = {}));
