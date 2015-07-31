var skins;
(function (skins) {
    var panel;
    (function (panel) {
        var PanelShopSkin = (function (_super) {
            __extends(PanelShopSkin, _super);
            function PanelShopSkin() {
                _super.call(this);
                this.__s = egret.gui.setProperties;
                this.__s(this, ["height", "width"], [1280, 720]);
                this.elementsContent = [this.__3_i(), this.__4_i(), this.TB_shop_i(), this.VS_shop_i(), this.UIA_back_i()];
                this.states = [
                    new egret.gui.State("normal", []),
                    new egret.gui.State("disabled", [])
                ];
            }
            var __egretProto__ = PanelShopSkin.prototype;
            Object.defineProperty(__egretProto__, "skinParts", {
                get: function () {
                    return PanelShopSkin._skinParts;
                },
                enumerable: true,
                configurable: true
            });
            __egretProto__.UIA_back_i = function () {
                var t = new egret.gui.UIAsset();
                this.UIA_back = t;
                this.__s(t, ["name", "source", "x", "y"], ["UIA_back", "dice_btn_4_png", 238, 920]);
                return t;
            };
            __egretProto__.VS_shop_i = function () {
                var t = new egret.gui.ViewStack();
                this.VS_shop = t;
                this.__s(t, ["height", "selectedIndex", "width", "x", "y"], [521, 1, 627, 47, 366]);
                t.elementsContent = [this.__27_i(), this.__46_i()];
                return t;
            };
            __egretProto__.__10_i = function () {
                var t = new egret.gui.UIAsset();
                this.__s(t, ["source", "x", "y"], ["dice_table_23_png", -8, 99]);
                return t;
            };
            __egretProto__.__11_i = function () {
                var t = new egret.gui.UIAsset();
                this.__s(t, ["source", "x", "y"], ["dice_table_23_png", -6, 201]);
                return t;
            };
            __egretProto__.__12_i = function () {
                var t = new egret.gui.UIAsset();
                this.__s(t, ["source", "x", "y"], ["dice_table_23_png", -8, 307]);
                return t;
            };
            __egretProto__.__13_i = function () {
                var t = new egret.gui.UIAsset();
                this.__s(t, ["source", "x", "y"], ["dice_table_23_png", -8, 409]);
                return t;
            };
            __egretProto__.__14_i = function () {
                var t = new egret.gui.UIAsset();
                this.__s(t, ["source", "x", "y"], ["dice_shop_5_png", 1, 69]);
                return t;
            };
            __egretProto__.__15_i = function () {
                var t = new egret.gui.UIAsset();
                this.__s(t, ["source", "x", "y"], ["dice_shop_6_png", -4, 179]);
                return t;
            };
            __egretProto__.__16_i = function () {
                var t = new egret.gui.UIAsset();
                this.__s(t, ["source", "x", "y"], ["dice_shop_7_png", 9, 291]);
                return t;
            };
            __egretProto__.__17_i = function () {
                var t = new egret.gui.UIAsset();
                this.__s(t, ["source", "x", "y"], ["dice_shop_8_png", 9, 408]);
                return t;
            };
            __egretProto__.__18_i = function () {
                var t = new egret.gui.Label();
                this.__s(t, ["fontFamily", "text", "textColor", "x", "y"], ["黑体", "1元     = 1万   金币", 0x3B2D2D, 137, 109]);
                return t;
            };
            __egretProto__.__19_i = function () {
                var t = new egret.gui.UIAsset();
                this.__s(t, ["height", "name", "source", "width", "x", "y"], [58, "buy1", "dice_shop_4_png", 147, 458, 96]);
                return t;
            };
            __egretProto__.__20_i = function () {
                var t = new egret.gui.Label();
                this.__s(t, ["fontFamily", "text", "textColor", "x", "y"], ["黑体", "10元    = 10万  金币", 0x3B2D2D, 137, 212]);
                return t;
            };
            __egretProto__.__21_i = function () {
                var t = new egret.gui.UIAsset();
                this.__s(t, ["height", "name", "source", "width", "x", "y"], [58, "buy2", "dice_shop_4_png", 147, 460, 199]);
                return t;
            };
            __egretProto__.__22_i = function () {
                var t = new egret.gui.Label();
                this.__s(t, ["fontFamily", "text", "textColor", "x", "y"], ["黑体", "30元    = 30万  金币", 0x3B2D2D, 137, 315]);
                return t;
            };
            __egretProto__.__23_i = function () {
                var t = new egret.gui.UIAsset();
                this.__s(t, ["height", "name", "source", "width", "x", "y"], [58, "buy3", "dice_shop_4_png", 147, 458, 302]);
                return t;
            };
            __egretProto__.__24_i = function () {
                var t = new egret.gui.Label();
                this.__s(t, ["fontFamily", "text", "textColor", "x", "y"], ["黑体", "100元   = 100万 金币", 0x3B2D2D, 137, 418]);
                return t;
            };
            __egretProto__.__25_i = function () {
                var t = new egret.gui.UIAsset();
                this.__s(t, ["height", "name", "source", "width", "x", "y"], [58, "buy4", "dice_shop_4_png", 147, 459, 405]);
                return t;
            };
            __egretProto__.__26_i = function () {
                var t = new egret.gui.Label();
                this.__s(t, ["fontFamily", "text", "textColor", "x", "y"], ["黑体", "赠送10万", 0x3B2D2D, 143, 467]);
                return t;
            };
            __egretProto__.__27_i = function () {
                var t = new egret.gui.Group();
                this.__s(t, ["percentHeight", "name", "percentWidth"], [100, "视图", 100]);
                t.elementsContent = [this.__9_i(), this.__10_i(), this.__11_i(), this.__12_i(), this.__13_i(), this.__14_i(), this.__15_i(), this.__16_i(), this.__17_i(), this.__18_i(), this.__19_i(), this.__20_i(), this.__21_i(), this.__22_i(), this.__23_i(), this.__24_i(), this.__25_i(), this.__26_i(), this.label_buy_i()];
                return t;
            };
            __egretProto__.__28_i = function () {
                var t = new egret.gui.UIAsset();
                this.__s(t, ["source", "x", "y"], ["dice_shop_12_png", 22, 21]);
                return t;
            };
            __egretProto__.__29_i = function () {
                var t = new egret.gui.UIAsset();
                this.__s(t, ["source", "x", "y"], ["dice_table_23_png", -8, 99]);
                return t;
            };
            __egretProto__.__30_i = function () {
                var t = new egret.gui.UIAsset();
                this.__s(t, ["source", "x", "y"], ["dice_table_23_png", -8, 201]);
                return t;
            };
            __egretProto__.__31_i = function () {
                var t = new egret.gui.UIAsset();
                this.__s(t, ["source", "x", "y"], ["dice_table_23_png", -8, 307]);
                return t;
            };
            __egretProto__.__32_i = function () {
                var t = new egret.gui.UIAsset();
                this.__s(t, ["source", "x", "y"], ["dice_table_23_png", -8, 409]);
                return t;
            };
            __egretProto__.__33_i = function () {
                var t = new egret.gui.UIAsset();
                this.__s(t, ["source", "x", "y"], ["dice_shop_5_png", 1, 69]);
                return t;
            };
            __egretProto__.__34_i = function () {
                var t = new egret.gui.UIAsset();
                this.__s(t, ["source", "x", "y"], ["dice_shop_6_png", -4, 179]);
                return t;
            };
            __egretProto__.__35_i = function () {
                var t = new egret.gui.UIAsset();
                this.__s(t, ["source", "x", "y"], ["dice_shop_7_png", 9, 291]);
                return t;
            };
            __egretProto__.__36_i = function () {
                var t = new egret.gui.UIAsset();
                this.__s(t, ["source", "x", "y"], ["dice_shop_8_png", 9, 408]);
                return t;
            };
            __egretProto__.__37_i = function () {
                var t = new egret.gui.Label();
                this.__s(t, ["fontFamily", "text", "textColor", "width", "x", "y"], ["黑体", "1钻石   = 1万   金币", 0x3B2D2D, 321, 137, 109]);
                return t;
            };
            __egretProto__.__38_i = function () {
                var t = new egret.gui.UIAsset();
                this.__s(t, ["height", "name", "source", "width", "x", "y"], [58, "exchange1", "dice_shop_3_png", 147, 458, 96]);
                return t;
            };
            __egretProto__.__39_i = function () {
                var t = new egret.gui.Label();
                this.__s(t, ["fontFamily", "text", "textColor", "width", "x", "y"], ["黑体", "10钻石  = 10万  金币", 0x3B2D2D, 311, 137, 212]);
                return t;
            };
            __egretProto__.__3_i = function () {
                var t = new egret.gui.UIAsset();
                this.__s(t, ["horizontalCenter", "source", "y"], [0, "dice_table_22_png", 159]);
                return t;
            };
            __egretProto__.__40_i = function () {
                var t = new egret.gui.UIAsset();
                this.__s(t, ["height", "name", "source", "width", "x", "y"], [58, "exchange2", "dice_shop_3_png", 147, 460, 199]);
                return t;
            };
            __egretProto__.__41_i = function () {
                var t = new egret.gui.Label();
                this.__s(t, ["fontFamily", "text", "textColor", "width", "x", "y"], ["黑体", "30钻石  = 30万  金币", 0x3B2D2D, 321, 137, 315]);
                return t;
            };
            __egretProto__.__42_i = function () {
                var t = new egret.gui.UIAsset();
                this.__s(t, ["height", "name", "source", "width", "x", "y"], [58, "exchange3", "dice_shop_3_png", 147, 458, 302]);
                return t;
            };
            __egretProto__.__43_i = function () {
                var t = new egret.gui.Label();
                this.__s(t, ["fontFamily", "text", "textColor", "width", "x", "y"], ["黑体", "100钻石 = 100万 金币", 0x3B2D2D, 311, 137, 418]);
                return t;
            };
            __egretProto__.__44_i = function () {
                var t = new egret.gui.UIAsset();
                this.__s(t, ["height", "name", "source", "width", "x", "y"], [58, "exchange4", "dice_shop_3_png", 147, 459, 405]);
                return t;
            };
            __egretProto__.__45_i = function () {
                var t = new egret.gui.Label();
                this.__s(t, ["fontFamily", "text", "textColor", "x", "y"], ["黑体", "赠送10万", 0x3B2D2D, 143, 467]);
                return t;
            };
            __egretProto__.__46_i = function () {
                var t = new egret.gui.Group();
                this.__s(t, ["percentHeight", "name", "percentWidth"], [100, "视图", 100]);
                t.elementsContent = [this.__28_i(), this.__29_i(), this.__30_i(), this.__31_i(), this.__32_i(), this.__33_i(), this.__34_i(), this.__35_i(), this.__36_i(), this.__37_i(), this.__38_i(), this.__39_i(), this.__40_i(), this.__41_i(), this.__42_i(), this.__43_i(), this.__44_i(), this.__45_i(), this.label_exchange_i()];
                return t;
            };
            __egretProto__.__4_i = function () {
                var t = new egret.gui.UIAsset();
                this.__s(t, ["horizontalCenter", "source", "y"], [0, "dice_shop_11_png", 156]);
                return t;
            };
            __egretProto__.__5_i = function () {
                var t = {};
                t.label = "数据1";
                return t;
            };
            __egretProto__.__6_i = function () {
                var t = {};
                t.label = "数据2";
                return t;
            };
            __egretProto__.__8_i = function () {
                var t = new egret.gui.ArrayCollection();
                t.source = [this.__5_i(), this.__6_i()];
                return t;
            };
            __egretProto__.__9_i = function () {
                var t = new egret.gui.UIAsset();
                this.__s(t, ["source", "x", "y"], ["dice_shop_12_png", 22, 21]);
                return t;
            };
            __egretProto__.label_buy_i = function () {
                var t = new egret.gui.Label();
                this.label_buy = t;
                this.__s(t, ["bold", "fontFamily", "size", "text", "textAlign", "textColor", "width", "x", "y"], [true, "黑体", 36, "10万", "left", 0x421C1C, 305, 194, 24]);
                return t;
            };
            __egretProto__.label_exchange_i = function () {
                var t = new egret.gui.Label();
                this.label_exchange = t;
                this.__s(t, ["bold", "fontFamily", "size", "text", "textAlign", "textColor", "width", "x", "y"], [true, "黑体", 36, "10万", "left", 0x421C1C, 305, 194, 24]);
                return t;
            };
            __egretProto__.TB_shop_i = function () {
                var t = new egret.gui.TabBar();
                this.TB_shop = t;
                this.__s(t, ["horizontalCenter", "itemRendererSkinName", "name", "y"], [0, skins.components.TabBarButtonShopSkin, "TB_shop", 301]);
                t.dataProvider = this.__8_i();
                return t;
            };
            PanelShopSkin._skinParts = ["TB_shop", "label_buy", "label_exchange", "VS_shop", "UIA_back"];
            return PanelShopSkin;
        })(egret.gui.Skin);
        panel.PanelShopSkin = PanelShopSkin;
        PanelShopSkin.prototype.__class__ = "skins.panel.PanelShopSkin";
    })(panel = skins.panel || (skins.panel = {}));
})(skins || (skins = {}));
