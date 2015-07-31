var skins;
(function (skins) {
    var panel;
    (function (panel) {
        var PanelRoomDownSkin = (function (_super) {
            __extends(PanelRoomDownSkin, _super);
            function PanelRoomDownSkin() {
                _super.call(this);
                this.__s = egret.gui.setProperties;
                this.__s(this, ["height", "width"], [1280, 720]);
                this.elementsContent = [this.UIA_bg_table_i(), this.UIA_charge_i(), this.UIA_shop_i(), this.UIA_help_i(), this.UIA_bg_i(), this.__3_i(), this.label_coin_i(), this.label_gift_i(), this.label_id_i(), this.__4_i(), this.label_rate_i(), this.UIA_bg_black_i(), this.list_dice_i(), this.__13_i()];
                this.states = [
                    new egret.gui.State("normal", [
                        new egret.gui.SetProperty("list_dice", "visible", false),
                        new egret.gui.SetProperty("list_dice", "name", "list_dice")
                    ]),
                    new egret.gui.State("disabled", [
                        new egret.gui.SetProperty("UIA_bg", "source", "black_bg_png"),
                        new egret.gui.SetProperty("", "height", 295)
                    ])
                ];
            }
            var __egretProto__ = PanelRoomDownSkin.prototype;
            Object.defineProperty(__egretProto__, "skinParts", {
                get: function () {
                    return PanelRoomDownSkin._skinParts;
                },
                enumerable: true,
                configurable: true
            });
            __egretProto__.UIA_bg_i = function () {
                var t = new egret.gui.UIAsset();
                this.UIA_bg = t;
                this.__s(t, ["height", "name", "source", "x", "y"], [56, "UIA_bg", "black_bg_png", 0, 1224]);
                return t;
            };
            __egretProto__.UIA_bg_table_i = function () {
                var t = new egret.gui.UIAsset();
                this.UIA_bg_table = t;
                this.__s(t, ["name", "source", "x", "y"], ["UIA_bg_table", "dice_table_17_png", 1, 1039]);
                return t;
            };
            __egretProto__.UIA_charge_i = function () {
                var t = new egret.gui.UIAsset();
                this.UIA_charge = t;
                this.__s(t, ["left", "name", "source", "visible", "width", "y"], [-2, "UIA_charge", "dice_table_3_png", true, 137, 1007]);
                return t;
            };
            __egretProto__.UIA_help_i = function () {
                var t = new egret.gui.UIAsset();
                this.UIA_help = t;
                this.__s(t, ["horizontalCenter", "name", "source", "y"], [-2, "UIA_help", "dice_room_3_png", 1039]);
                return t;
            };
            __egretProto__.UIA_icon_bg_i = function () {
                var t = new egret.gui.UIAsset();
                this.UIA_icon_bg = t;
                this.__s(t, ["source", "x", "y"], ["dice_table_15_png", 14, 26]);
                return t;
            };
            __egretProto__.UIA_icon_i = function () {
                var t = new egret.gui.UIAsset();
                this.UIA_icon = t;
                this.__s(t, ["height", "name", "source", "width", "x", "y"], [96, "UIA_icon", "role_girl_png", 96, 21, 38]);
                return t;
            };
            __egretProto__.UIA_master_i = function () {
                var t = new egret.gui.UIAsset();
                this.UIA_master = t;
                this.__s(t, ["source", "x", "y"], ["bg_master_png", 66, 8]);
                return t;
            };
            __egretProto__.UIA_shop_i = function () {
                var t = new egret.gui.UIAsset();
                this.UIA_shop = t;
                this.__s(t, ["name", "right", "source", "y"], ["UIA_shop", -5, "dice_room_4_png", 996]);
                return t;
            };
            __egretProto__.__11_i = function () {
                var t = new egret.gui.ArrayCollection();
                t.source = [this.__5_i(), this.__6_i(), this.__7_i(), this.__8_i(), this.__9_i()];
                return t;
            };
            __egretProto__.__12_i = function () {
                var t = new egret.gui.HorizontalLayout();
                t.gap = -4;
                return t;
            };
            __egretProto__.__13_i = function () {
                var t = new egret.gui.Group();
                this.__s(t, ["height", "width", "x", "y"], [144, 138, 18, 1078]);
                t.elementsContent = [this.UIA_icon_bg_i(), this.UIA_icon_i(), this.UIA_master_i()];
                return t;
            };
            __egretProto__.__3_i = function () {
                var t = new egret.gui.UIAsset();
                this.__s(t, ["source", "x", "y"], ["dice_table_5_png", 443, 1225]);
                return t;
            };
            __egretProto__.__4_i = function () {
                var t = new egret.gui.UIAsset();
                this.__s(t, ["source", "x", "y"], ["dice_table_7_png", 185, 1227]);
                return t;
            };
            __egretProto__.__5_i = function () {
                var t = {};
                t.label = "";
                return t;
            };
            __egretProto__.__6_i = function () {
                var t = {};
                t.label = "";
                return t;
            };
            __egretProto__.__7_i = function () {
                var t = {};
                t.label = "";
                return t;
            };
            __egretProto__.__8_i = function () {
                var t = {};
                t.label = "null";
                return t;
            };
            __egretProto__.__9_i = function () {
                var t = {};
                t.label = "null";
                return t;
            };
            __egretProto__.label_coin_i = function () {
                var t = new egret.gui.Label();
                this.label_coin = t;
                this.__s(t, ["bold", "height", "size", "text", "textAlign", "verticalAlign", "width", "x", "y"], [true, 42, 26, "6666666", "left", "middle", 168, 258, 1232]);
                return t;
            };
            __egretProto__.label_gift_i = function () {
                var t = new egret.gui.Label();
                this.label_gift = t;
                this.__s(t, ["bold", "height", "size", "text", "textAlign", "verticalAlign", "width", "x", "y"], [true, 42, 26, "888888888", "left", "middle", 163, 552, 1232]);
                return t;
            };
            __egretProto__.label_id_i = function () {
                var t = new egret.gui.Label();
                this.label_id = t;
                this.__s(t, ["bold", "fontFamily", "height", "maxDisplayedLines", "maxHeight", "name", "size", "text", "textAlign", "textColor", "verticalAlign", "width", "x", "y"], [true, "黑体", 43, 1, 43, "label_id", 24, "最多五个字", "center", 0xFFFFFF, "middle", 167, 7, 1230]);
                return t;
            };
            __egretProto__.label_rate_i = function () {
                var t = new egret.gui.Label();
                this.label_rate = t;
                this.__s(t, ["name", "size", "text", "x", "y"], ["label_rate", 26, "当前倍率：10", 109, 1056]);
                return t;
            };
            __egretProto__.list_dice_i = function () {
                var t = new egret.gui.List();
                this.list_dice = t;
                this.__s(t, ["itemRendererSkinName", "left", "right", "visible", "y"], [skins.components.ItemRendererDiceSkin, 147, 14, true, 1096]);
                t.layout = this.__12_i();
                t.dataProvider = this.__11_i();
                return t;
            };
            __egretProto__.UIA_bg_black_i = function () {
                var t = new egret.gui.UIAsset();
                this.UIA_bg_black = t;
                this.__s(t, ["height", "name", "source", "touchChildren", "touchEnabled", "visible", "x", "y"], [1280, "UIA_bg_black", "black_bg_png", false, false, false, 0, 0]);
                return t;
            };
            PanelRoomDownSkin._skinParts = ["UIA_bg_table", "UIA_charge", "UIA_shop", "UIA_help", "UIA_bg", "label_coin", "label_gift", "label_id", "label_rate", "UIA_bg_black", "list_dice", "UIA_icon_bg", "UIA_icon", "UIA_master"];
            return PanelRoomDownSkin;
        })(egret.gui.Skin);
        panel.PanelRoomDownSkin = PanelRoomDownSkin;
        PanelRoomDownSkin.prototype.__class__ = "skins.panel.PanelRoomDownSkin";
    })(panel = skins.panel || (skins.panel = {}));
})(skins || (skins = {}));
