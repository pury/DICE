var skins;
(function (skins) {
    var components;
    (function (components) {
        var TextAreaWhiteSkin = (function (_super) {
            __extends(TextAreaWhiteSkin, _super);
            function TextAreaWhiteSkin() {
                _super.call(this);
                this.__s = egret.gui.setProperties;
                this.__s(this, ["minHeight", "minWidth"], [30, 100]);
                this.elementsContent = [this.textDisplay_i()];
                this.states = [
                    new egret.gui.State("normal", []),
                    new egret.gui.State("disabled", [
                        new egret.gui.SetProperty("textDisplay", "textColor", 0x000000)
                    ])
                ];
            }
            var __egretProto__ = TextAreaWhiteSkin.prototype;
            Object.defineProperty(__egretProto__, "skinParts", {
                get: function () {
                    return TextAreaWhiteSkin._skinParts;
                },
                enumerable: true,
                configurable: true
            });
            __egretProto__.textDisplay_i = function () {
                var t = new egret.gui.EditableText();
                this.textDisplay = t;
                this.__s(t, ["bottom", "percentHeight", "left", "right", "size", "textColor", "top", "percentWidth"], [8, 100, 10, 10, 20, 0x000000, 8, 100]);
                return t;
            };
            TextAreaWhiteSkin._skinParts = ["textDisplay"];
            return TextAreaWhiteSkin;
        })(egret.gui.Skin);
        components.TextAreaWhiteSkin = TextAreaWhiteSkin;
        TextAreaWhiteSkin.prototype.__class__ = "skins.components.TextAreaWhiteSkin";
    })(components = skins.components || (skins.components = {}));
})(skins || (skins = {}));
//# sourceMappingURL=TextAreaWhiteSkin.js.map