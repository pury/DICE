var skins;
(function (skins) {
    var components;
    (function (components) {
        var ItemRendererPointsSkin = (function (_super) {
            __extends(ItemRendererPointsSkin, _super);
            function ItemRendererPointsSkin() {
                _super.call(this);
                this.__s = egret.gui.setProperties;
                this.__s(this, ["height", "width"], [74, 116]);
                this.elementsContent = [this.UIA_num1_i(), this.UIA_num2_i()];
                this.states = [
                    new egret.gui.State("up", []),
                    new egret.gui.State("down", []),
                    new egret.gui.State("disabled", [])
                ];
            }
            var __egretProto__ = ItemRendererPointsSkin.prototype;
            Object.defineProperty(__egretProto__, "skinParts", {
                get: function () {
                    return ItemRendererPointsSkin._skinParts;
                },
                enumerable: true,
                configurable: true
            });
            __egretProto__.UIA_num2_i = function () {
                var t = new egret.gui.UIAsset();
                this.UIA_num2 = t;
                this.__s(t, ["source", "x", "y"], ["num1_png", 59, 0]);
                return t;
            };
            __egretProto__.UIA_num1_i = function () {
                var t = new egret.gui.UIAsset();
                this.UIA_num1 = t;
                this.__s(t, ["source", "x", "y"], ["num0_png", 0, 0]);
                return t;
            };
            ItemRendererPointsSkin._skinParts = ["UIA_num1", "UIA_num2"];
            return ItemRendererPointsSkin;
        })(egret.gui.Skin);
        components.ItemRendererPointsSkin = ItemRendererPointsSkin;
        ItemRendererPointsSkin.prototype.__class__ = "skins.components.ItemRendererPointsSkin";
    })(components = skins.components || (skins.components = {}));
})(skins || (skins = {}));
