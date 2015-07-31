var skins;
(function (skins) {
    var components;
    (function (components) {
        var ItemRendererDiceSkin = (function (_super) {
            __extends(ItemRendererDiceSkin, _super);
            function ItemRendererDiceSkin() {
                _super.call(this);
                this.__s = egret.gui.setProperties;
                this.elementsContent = [this.UIA_bg_i(), this.UIA_mydice_i()];
                this.states = [
                    new egret.gui.State("up", []),
                    new egret.gui.State("down", []),
                    new egret.gui.State("disabled", [])
                ];
            }
            var __egretProto__ = ItemRendererDiceSkin.prototype;
            Object.defineProperty(__egretProto__, "skinParts", {
                get: function () {
                    return ItemRendererDiceSkin._skinParts;
                },
                enumerable: true,
                configurable: true
            });
            __egretProto__.UIA_mydice_i = function () {
                var t = new egret.gui.UIAsset();
                this.UIA_mydice = t;
                this.__s(t, ["height", "source", "width", "x", "y"], [126, "room_dice1_png", 118, -3, 7]);
                return t;
            };
            __egretProto__.UIA_bg_i = function () {
                var t = new egret.gui.UIAsset();
                this.UIA_bg = t;
                this.__s(t, ["horizontalCenter", "source", "verticalCenter"], [0, "dice_room_5_png", 0]);
                return t;
            };
            ItemRendererDiceSkin._skinParts = ["UIA_bg", "UIA_mydice"];
            return ItemRendererDiceSkin;
        })(egret.gui.Skin);
        components.ItemRendererDiceSkin = ItemRendererDiceSkin;
        ItemRendererDiceSkin.prototype.__class__ = "skins.components.ItemRendererDiceSkin";
    })(components = skins.components || (skins.components = {}));
})(skins || (skins = {}));
