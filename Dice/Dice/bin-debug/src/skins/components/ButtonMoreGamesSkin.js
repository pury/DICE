var skins;
(function (skins) {
    var components;
    (function (components) {
        var ButtonMoreGamesSkin = (function (_super) {
            __extends(ButtonMoreGamesSkin, _super);
            function ButtonMoreGamesSkin() {
                _super.call(this);
                this.__s = egret.gui.setProperties;
                this.elementsContent = [this.__4_i()];
                this.states = [
                    new egret.gui.State("up", []),
                    new egret.gui.State("down", [
                        new egret.gui.SetProperty("__4", "source", "more_games_png")
                    ]),
                    new egret.gui.State("disabled", [
                        new egret.gui.SetProperty("__4", "source", "more_games_png")
                    ])
                ];
            }
            var __egretProto__ = ButtonMoreGamesSkin.prototype;
            __egretProto__.__4_i = function () {
                var t = new egret.gui.UIAsset();
                this.__4 = t;
                this.__s(t, ["percentHeight", "source", "percentWidth"], [100, "more_games_png", 100]);
                return t;
            };
            return ButtonMoreGamesSkin;
        })(egret.gui.Skin);
        components.ButtonMoreGamesSkin = ButtonMoreGamesSkin;
        ButtonMoreGamesSkin.prototype.__class__ = "skins.components.ButtonMoreGamesSkin";
    })(components = skins.components || (skins.components = {}));
})(skins || (skins = {}));
