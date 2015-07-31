var skins;
(function (skins) {
    var components;
    (function (components) {
        var ItemRendererNumberSkin = (function (_super) {
            __extends(ItemRendererNumberSkin, _super);
            function ItemRendererNumberSkin() {
                _super.call(this);
                this.__s = egret.gui.setProperties;
                this.__s(this, ["height", "width"], [132, 132]);
                this.elementsContent = [this.label_num_i()];
                this.states = [
                    new egret.gui.State("up", []),
                    new egret.gui.State("down", []),
                    new egret.gui.State("disabled", [])
                ];
            }
            var __egretProto__ = ItemRendererNumberSkin.prototype;
            Object.defineProperty(__egretProto__, "skinParts", {
                get: function () {
                    return ItemRendererNumberSkin._skinParts;
                },
                enumerable: true,
                configurable: true
            });
            __egretProto__.label_num_i = function () {
                var t = new egret.gui.Label();
                this.label_num = t;
                this.__s(t, ["bottom", "fontFamily", "left", "right", "size", "text", "textAlign", "textColor", "top", "verticalAlign"], [0, "黑体", 0, 0, 120, "3", "center", 0xFFFFFF, 0, "bottom"]);
                return t;
            };
            ItemRendererNumberSkin._skinParts = ["label_num"];
            return ItemRendererNumberSkin;
        })(egret.gui.Skin);
        components.ItemRendererNumberSkin = ItemRendererNumberSkin;
        ItemRendererNumberSkin.prototype.__class__ = "skins.components.ItemRendererNumberSkin";
    })(components = skins.components || (skins.components = {}));
})(skins || (skins = {}));
