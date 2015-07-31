var skins;
(function (skins) {
    var components;
    (function (components) {
        var TextInputRoleSkin = (function (_super) {
            __extends(TextInputRoleSkin, _super);
            function TextInputRoleSkin() {
                _super.call(this);
                this.__s = egret.gui.setProperties;
                this.__s(this, ["height", "minHeight", "minWidth", "width"], [61, 30, 100, 250]);
                this.elementsContent = [this.__3_i(), this.textDisplay_i()];
                this.states = [
                    new egret.gui.State("normal", [
                        new egret.gui.SetProperty("textDisplay", "textColor", 0xFFFFFF)
                    ]),
                    new egret.gui.State("disabled", [
                        new egret.gui.SetProperty("textDisplay", "textColor", 0xFFFFFF)
                    ])
                ];
            }
            var __egretProto__ = TextInputRoleSkin.prototype;
            Object.defineProperty(__egretProto__, "skinParts", {
                get: function () {
                    return TextInputRoleSkin._skinParts;
                },
                enumerable: true,
                configurable: true
            });
            __egretProto__.__3_i = function () {
                var t = new egret.gui.UIAsset();
                return t;
            };
            __egretProto__.textDisplay_i = function () {
                var t = new egret.gui.EditableText();
                this.textDisplay = t;
                this.__s(t, ["bottom", "left", "right", "size", "text", "textAlign", "textColor", "top"], [7, 9, 11, 30, "最多五个字", "center", 0xFFFFFF, 11]);
                return t;
            };
            TextInputRoleSkin._skinParts = ["textDisplay"];
            return TextInputRoleSkin;
        })(egret.gui.Skin);
        components.TextInputRoleSkin = TextInputRoleSkin;
        TextInputRoleSkin.prototype.__class__ = "skins.components.TextInputRoleSkin";
    })(components = skins.components || (skins.components = {}));
})(skins || (skins = {}));
