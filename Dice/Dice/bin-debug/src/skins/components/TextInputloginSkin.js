var skins;
(function (skins) {
    var components;
    (function (components) {
        var TextInputloginSkin = (function (_super) {
            __extends(TextInputloginSkin, _super);
            function TextInputloginSkin() {
                _super.call(this);
                this.__s = egret.gui.setProperties;
                this.__s(this, ["minHeight", "minWidth"], [70, 100]);
                this.elementsContent = [this.textDisplay_i()];
                this.states = [
                    new egret.gui.State("normal", [
                        new egret.gui.SetProperty("textDisplay", "size", 44),
                        new egret.gui.SetProperty("textDisplay", "textColor", 0xFFFFFF)
                    ]),
                    new egret.gui.State("disabled", [
                        new egret.gui.SetProperty("textDisplay", "size", 44),
                        new egret.gui.SetProperty("textDisplay", "textColor", 0xFFFFFF)
                    ])
                ];
            }
            var __egretProto__ = TextInputloginSkin.prototype;
            Object.defineProperty(__egretProto__, "skinParts", {
                get: function () {
                    return TextInputloginSkin._skinParts;
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
            TextInputloginSkin._skinParts = ["textDisplay"];
            return TextInputloginSkin;
        })(egret.gui.Skin);
        components.TextInputloginSkin = TextInputloginSkin;
        TextInputloginSkin.prototype.__class__ = "skins.components.TextInputloginSkin";
    })(components = skins.components || (skins.components = {}));
})(skins || (skins = {}));
