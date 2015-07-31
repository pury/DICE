var skins;
(function (skins) {
    var panel;
    (function (panel) {
        var PanelMoreGamesSkin = (function (_super) {
            __extends(PanelMoreGamesSkin, _super);
            function PanelMoreGamesSkin() {
                _super.call(this);
                this.__s = egret.gui.setProperties;
                this.__s(this, ["height", "width"], [1280, 720]);
                this.elementsContent = [this.__3_i(), this.__4_i(), this.__5_i(), this.__6_i(), this.__7_i()];
                this.states = [
                    new egret.gui.State("normal", []),
                    new egret.gui.State("disabled", [])
                ];
            }
            var __egretProto__ = PanelMoreGamesSkin.prototype;
            __egretProto__.__3_i = function () {
                var t = new egret.gui.UIAsset();
                this.__s(t, ["horizontalCenter", "source", "y"], [0, "dice_mu5_png", 208]);
                return t;
            };
            __egretProto__.__4_i = function () {
                var t = new egret.gui.UIAsset();
                this.__s(t, ["horizontalCenter", "source", "y"], [0, "extra_more_games_png", 185]);
                return t;
            };
            __egretProto__.__5_i = function () {
                var t = new egret.gui.UIAsset();
                this.__s(t, ["name", "source", "x", "y"], ["UIA_beer", "extra_beer_png", 141, 629]);
                return t;
            };
            __egretProto__.__6_i = function () {
                var t = new egret.gui.UIAsset();
                this.__s(t, ["horizontalCenter", "name", "source", "y"], [0, "btn_close", "dice_btn_4_png", 885]);
                return t;
            };
            __egretProto__.__7_i = function () {
                var t = new egret.gui.UIAsset();
                this.__s(t, ["name", "source", "x", "y"], ["UIA_dice", "extra_dice_png", 141, 409]);
                return t;
            };
            return PanelMoreGamesSkin;
        })(egret.gui.Skin);
        panel.PanelMoreGamesSkin = PanelMoreGamesSkin;
        PanelMoreGamesSkin.prototype.__class__ = "skins.panel.PanelMoreGamesSkin";
    })(panel = skins.panel || (skins.panel = {}));
})(skins || (skins = {}));
