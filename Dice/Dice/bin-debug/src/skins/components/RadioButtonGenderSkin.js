var skins;
(function (skins) {
    var components;
    (function (components) {
        var RadioButtonGenderSkin = (function (_super) {
            __extends(RadioButtonGenderSkin, _super);
            function RadioButtonGenderSkin() {
                _super.call(this);
                this.__s = egret.gui.setProperties;
                this.elementsContent = [this.__5_i()];
                this.states = [
                    new egret.gui.State("up", []),
                    new egret.gui.State("upAndSelected", [
                        new egret.gui.SetProperty("__4", "source", "extra_gender_select_png")
                    ])
                ];
            }
            var __egretProto__ = RadioButtonGenderSkin.prototype;
            Object.defineProperty(__egretProto__, "skinParts", {
                get: function () {
                    return RadioButtonGenderSkin._skinParts;
                },
                enumerable: true,
                configurable: true
            });
            __egretProto__.__4_i = function () {
                var t = new egret.gui.UIAsset();
                this.__4 = t;
                this.__s(t, ["fillMode", "height", "source", "verticalCenter", "width"], ["scale", 24, "extra_select_png", 1, 24]);
                return t;
            };
            __egretProto__.__5_i = function () {
                var t = new egret.gui.Group();
                this.__s(t, ["percentHeight", "percentWidth"], [100, 100]);
                t.layout = this.__3_i();
                t.elementsContent = [this.labelDisplay_i(), this.__4_i()];
                return t;
            };
            __egretProto__.labelDisplay_i = function () {
                var t = new egret.gui.Label();
                this.labelDisplay = t;
                this.__s(t, ["fontFamily", "maxDisplayedLines", "size", "textAlign", "textColor", "verticalAlign"], ["Tahoma", 1, 26, "center", 0xFFFFFF, "middle"]);
                return t;
            };
            __egretProto__.__3_i = function () {
                var t = new egret.gui.HorizontalLayout();
                t.verticalAlign = "middle";
                return t;
            };
            RadioButtonGenderSkin._skinParts = ["labelDisplay"];
            return RadioButtonGenderSkin;
        })(egret.gui.Skin);
        components.RadioButtonGenderSkin = RadioButtonGenderSkin;
        RadioButtonGenderSkin.prototype.__class__ = "skins.components.RadioButtonGenderSkin";
    })(components = skins.components || (skins.components = {}));
})(skins || (skins = {}));
