var skins;
(function (skins) {
    var components;
    (function (components) {
        var ItemRendererTransparentSkin = (function (_super) {
            __extends(ItemRendererTransparentSkin, _super);
            function ItemRendererTransparentSkin() {
                _super.call(this);
                this.__s = egret.gui.setProperties;
                this.__s(this, ["height", "width"], [31, 262]);
                this.elementsContent = [this.label_name_i()];
                this.states = [
                    new egret.gui.State("up", []),
                    new egret.gui.State("down", []),
                    new egret.gui.State("disabled", [])
                ];
            }
            var __egretProto__ = ItemRendererTransparentSkin.prototype;
            Object.defineProperty(__egretProto__, "skinParts", {
                get: function () {
                    return ItemRendererTransparentSkin._skinParts;
                },
                enumerable: true,
                configurable: true
            });
            __egretProto__.label_name_i = function () {
                var t = new egret.gui.Label();
                this.label_name = t;
                this.__s(t, ["height", "size", "text", "textAlign", "textColor", "verticalAlign", "width", "x", "y"], [31, 22, "最多五个字叫了19个6点", "left", 0x020000, "middle", 262, 0, 0]);
                return t;
            };
            ItemRendererTransparentSkin._skinParts = ["label_name"];
            return ItemRendererTransparentSkin;
        })(egret.gui.Skin);
        components.ItemRendererTransparentSkin = ItemRendererTransparentSkin;
        ItemRendererTransparentSkin.prototype.__class__ = "skins.components.ItemRendererTransparentSkin";
    })(components = skins.components || (skins.components = {}));
})(skins || (skins = {}));
