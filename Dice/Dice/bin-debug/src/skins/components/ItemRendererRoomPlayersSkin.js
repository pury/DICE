var skins;
(function (skins) {
    var components;
    (function (components) {
        var ItemRendererRoomPlayersSkin = (function (_super) {
            __extends(ItemRendererRoomPlayersSkin, _super);
            function ItemRendererRoomPlayersSkin() {
                _super.call(this);
                this.__s = egret.gui.setProperties;
                this.__s(this, ["height", "width"], [190, 131]);
                this.elementsContent = [this.UIA_bgbg_i(), this.label_ghostname_i(), this.label_ghostcoin_i(), this.UIA_ghosticon_i(), this.UIA_master_i(), this.UIA_high_i()];
                this.states = [
                    new egret.gui.State("up", []),
                    new egret.gui.State("down", []),
                    new egret.gui.State("disabled", [])
                ];
            }
            var __egretProto__ = ItemRendererRoomPlayersSkin.prototype;
            Object.defineProperty(__egretProto__, "skinParts", {
                get: function () {
                    return ItemRendererRoomPlayersSkin._skinParts;
                },
                enumerable: true,
                configurable: true
            });
            __egretProto__.UIA_ghosticon_i = function () {
                var t = new egret.gui.UIAsset();
                this.UIA_ghosticon = t;
                t.setStyle("textAlign", "center");
                this.__s(t, ["height", "source", "width", "x", "y"], [116, "role_boy_png", 116, 8, 8]);
                return t;
            };
            __egretProto__.UIA_high_i = function () {
                var t = new egret.gui.UIAsset();
                this.UIA_high = t;
                this.__s(t, ["height", "source", "width", "x", "y"], [187, "dice_table_1_png", 129, 1, 1]);
                return t;
            };
            __egretProto__.UIA_master_i = function () {
                var t = new egret.gui.UIAsset();
                this.UIA_master = t;
                this.__s(t, ["height", "source", "width", "x", "y"], [46, "bg_master_png", 46, 86, -3]);
                return t;
            };
            __egretProto__.label_ghostcoin_i = function () {
                var t = new egret.gui.Label();
                this.label_ghostcoin = t;
                this.__s(t, ["size", "text", "textAlign", "textColor", "width", "x", "y"], [22, "12123123", "center", 0xDCDCDC, 131, 0, 161]);
                return t;
            };
            __egretProto__.label_ghostname_i = function () {
                var t = new egret.gui.Label();
                this.label_ghostname = t;
                this.__s(t, ["maxDisplayedLines", "size", "text", "textAlign", "textColor", "width", "x", "y"], [1, 22, "酷炫小钻风", "center", 0xE3E3E3, 131, 0, 133]);
                return t;
            };
            __egretProto__.UIA_bgbg_i = function () {
                var t = new egret.gui.UIAsset();
                this.UIA_bgbg = t;
                this.__s(t, ["source", "x", "y"], ["avatar_shelter_png", 0, 0]);
                return t;
            };
            ItemRendererRoomPlayersSkin._skinParts = ["UIA_bgbg", "label_ghostname", "label_ghostcoin", "UIA_ghosticon", "UIA_master", "UIA_high"];
            return ItemRendererRoomPlayersSkin;
        })(egret.gui.Skin);
        components.ItemRendererRoomPlayersSkin = ItemRendererRoomPlayersSkin;
        ItemRendererRoomPlayersSkin.prototype.__class__ = "skins.components.ItemRendererRoomPlayersSkin";
    })(components = skins.components || (skins.components = {}));
})(skins || (skins = {}));
