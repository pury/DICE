var skins;
(function (skins) {
    var components;
    (function (components) {
        var ItemRendererSelectDiceSkin = (function (_super) {
            __extends(ItemRendererSelectDiceSkin, _super);
            function ItemRendererSelectDiceSkin() {
                _super.call(this);
                this.__s = egret.gui.setProperties;
                this.__s(this, ["height", "width"], [150, 144]);
                this.elementsContent = [this.UIA_dice_i()];
                this.states = [
                    new egret.gui.State("up", []),
                    new egret.gui.State("down", []),
                    new egret.gui.State("disabled", [])
                ];
            }
            var __egretProto__ = ItemRendererSelectDiceSkin.prototype;
            Object.defineProperty(__egretProto__, "skinParts", {
                get: function () {
                    return ItemRendererSelectDiceSkin._skinParts;
                },
                enumerable: true,
                configurable: true
            });
            __egretProto__.UIA_dice_i = function () {
                var t = new egret.gui.UIAsset();
                this.UIA_dice = t;
                this.__s(t, ["source", "x", "y"], ["room_dice1_png", 0, -1]);
                return t;
            };
            ItemRendererSelectDiceSkin._skinParts = ["UIA_dice"];
            return ItemRendererSelectDiceSkin;
        })(egret.gui.Skin);
        components.ItemRendererSelectDiceSkin = ItemRendererSelectDiceSkin;
        ItemRendererSelectDiceSkin.prototype.__class__ = "skins.components.ItemRendererSelectDiceSkin";
    })(components = skins.components || (skins.components = {}));
})(skins || (skins = {}));
