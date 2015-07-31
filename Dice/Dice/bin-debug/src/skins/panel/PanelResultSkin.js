var skins;
(function (skins) {
    var panel;
    (function (panel) {
        var PanelResultSkin = (function (_super) {
            __extends(PanelResultSkin, _super);
            function PanelResultSkin() {
                _super.call(this);
                this.__s = egret.gui.setProperties;
                this.__s(this, ["height", "width"], [1280, 720]);
                this.elementsContent = [this.UIA_bg_i(), this.__3_i(), this.UIA_result_i(), this.group_dice_i(), this.btn_back_i(), this.list_result_i(), this.list_result0_i(), this.group_dice0_i(), this.__29_i(), this.__30_i(), this.__31_i(), this.label_win_i(), this.__32_i(), this.label_win_gold_i(), this.label_lose_i(), this.__33_i(), this.label_lose_gold_i(), this.label_tai_i(), this.__34_i(), this.__35_i(), this.group_gift_i(), this.__39_i()];
                this.states = [
                    new egret.gui.State("normal", []),
                    new egret.gui.State("disabled", [])
                ];
            }
            var __egretProto__ = PanelResultSkin.prototype;
            Object.defineProperty(__egretProto__, "skinParts", {
                get: function () {
                    return PanelResultSkin._skinParts;
                },
                enumerable: true,
                configurable: true
            });
            __egretProto__.UIA_result_i = function () {
                var t = new egret.gui.UIAsset();
                this.UIA_result = t;
                this.__s(t, ["horizontalCenter", "source", "y"], [16.5, "win_png", 1]);
                return t;
            };
            __egretProto__.__10_i = function () {
                var t = new egret.gui.BasicLayout();
                return t;
            };
            __egretProto__.__11_i = function () {
                var t = {};
                t.label = "数据1";
                return t;
            };
            __egretProto__.__12_i = function () {
                var t = {};
                t.label = "数据2";
                return t;
            };
            __egretProto__.__13_i = function () {
                var t = {};
                t.label = "数据3";
                return t;
            };
            __egretProto__.__15_i = function () {
                var t = new egret.gui.ArrayCollection();
                t.source = [this.__11_i(), this.__12_i(), this.__13_i()];
                return t;
            };
            __egretProto__.__16_i = function () {
                var t = new egret.gui.VerticalLayout();
                t.gap = 48;
                return t;
            };
            __egretProto__.__17_i = function () {
                var t = {};
                t.label = "数据1";
                return t;
            };
            __egretProto__.__18_i = function () {
                var t = {};
                t.label = "数据2";
                return t;
            };
            __egretProto__.__19_i = function () {
                var t = {};
                t.label = "数据3";
                return t;
            };
            __egretProto__.__21_i = function () {
                var t = new egret.gui.ArrayCollection();
                t.source = [this.__17_i(), this.__18_i(), this.__19_i()];
                return t;
            };
            __egretProto__.__22_i = function () {
                var t = new egret.gui.VerticalLayout();
                t.gap = 48;
                return t;
            };
            __egretProto__.__23_i = function () {
                var t = new egret.gui.UIAsset();
                this.__s(t, ["source", "x", "y"], ["dice4_png", 0, 0]);
                return t;
            };
            __egretProto__.__24_i = function () {
                var t = new egret.gui.UIAsset();
                this.__s(t, ["source", "x", "y"], ["dice5_png", 0, 119]);
                return t;
            };
            __egretProto__.__25_i = function () {
                var t = new egret.gui.UIAsset();
                this.__s(t, ["source", "x", "y"], ["dice6_png", 0, 238]);
                return t;
            };
            __egretProto__.__26_i = function () {
                var t = new egret.gui.UIAsset();
                this.__s(t, ["source", "x", "y"], ["mutiple_sign_png", 119, 29]);
                return t;
            };
            __egretProto__.__27_i = function () {
                var t = new egret.gui.UIAsset();
                this.__s(t, ["source", "x", "y"], ["mutiple_sign_png", 119, 152]);
                return t;
            };
            __egretProto__.__28_i = function () {
                var t = new egret.gui.UIAsset();
                this.__s(t, ["source", "x", "y"], ["mutiple_sign_png", 119, 273]);
                return t;
            };
            __egretProto__.__29_i = function () {
                var t = new egret.gui.UIAsset();
                this.__s(t, ["horizontalCenter", "source", "y"], [0.5, "dice_table_23_png", 567]);
                return t;
            };
            __egretProto__.__30_i = function () {
                var t = new egret.gui.UIAsset();
                this.__s(t, ["source", "x", "y"], ["dice_table_23_png", 41, 671]);
                return t;
            };
            __egretProto__.__31_i = function () {
                var t = new egret.gui.Label();
                this.__s(t, ["bold", "fontFamily", "text", "textColor", "x", "y"], [true, "黑体", "用户名", 0x2A2424, 129, 577]);
                return t;
            };
            __egretProto__.__32_i = function () {
                var t = new egret.gui.Label();
                this.__s(t, ["fontFamily", "text", "textAlign", "textColor", "x", "y"], ["黑体", "胜", "center", 0x2A2424, 549, 628]);
                return t;
            };
            __egretProto__.__33_i = function () {
                var t = new egret.gui.Label();
                this.__s(t, ["fontFamily", "text", "textAlign", "textColor", "x", "y"], ["黑体", "负", "center", 0x2A2424, 549, 682]);
                return t;
            };
            __egretProto__.__34_i = function () {
                var t = new egret.gui.Label();
                this.__s(t, ["bold", "fontFamily", "text", "textColor", "x", "y"], [true, "黑体", "结算", 0x2A2424, 361, 577]);
                return t;
            };
            __egretProto__.__35_i = function () {
                var t = new egret.gui.Label();
                this.__s(t, ["bold", "fontFamily", "text", "textColor", "x", "y"], [true, "黑体", "胜负", 0x2A2424, 529, 577]);
                return t;
            };
            __egretProto__.__36_i = function () {
                var t = new egret.gui.UIAsset();
                this.__s(t, ["source", "width", "x", "y"], ["dice_table_24_png", 639, 0, 38]);
                return t;
            };
            __egretProto__.__37_i = function () {
                var t = new egret.gui.UIAsset();
                this.__s(t, ["source", "x", "y"], ["dice_result_3_png", 8, -14]);
                return t;
            };
            __egretProto__.__38_i = function () {
                var t = new egret.gui.UIAsset();
                this.__s(t, ["horizontalCenter", "source", "y"], [1, "dice_result_6_png", 52]);
                return t;
            };
            __egretProto__.__39_i = function () {
                var t = new egret.gui.UIAsset();
                this.__s(t, ["source", "x", "y"], ["dice_result_5_png", 51, 620]);
                return t;
            };
            __egretProto__.__3_i = function () {
                var t = new egret.gui.UIAsset();
                this.__s(t, ["horizontalCenter", "source", "y"], [0.5, "dice_table_22_png", 122]);
                return t;
            };
            __egretProto__.__4_i = function () {
                var t = new egret.gui.UIAsset();
                this.__s(t, ["source", "x", "y"], ["dice1_png", 0, 0]);
                return t;
            };
            __egretProto__.__5_i = function () {
                var t = new egret.gui.UIAsset();
                this.__s(t, ["source", "x", "y"], ["dice2_png", 0, 119]);
                return t;
            };
            __egretProto__.__6_i = function () {
                var t = new egret.gui.UIAsset();
                this.__s(t, ["source", "x", "y"], ["dice3_png", 0, 238]);
                return t;
            };
            __egretProto__.__7_i = function () {
                var t = new egret.gui.UIAsset();
                this.__s(t, ["source", "x", "y"], ["mutiple_sign_png", 119, 29]);
                return t;
            };
            __egretProto__.__8_i = function () {
                var t = new egret.gui.UIAsset();
                this.__s(t, ["source", "x", "y"], ["mutiple_sign_png", 121, 152]);
                return t;
            };
            __egretProto__.__9_i = function () {
                var t = new egret.gui.UIAsset();
                this.__s(t, ["source", "x", "y"], ["mutiple_sign_png", 119, 273]);
                return t;
            };
            __egretProto__.btn_back_i = function () {
                var t = new egret.gui.Button();
                this.btn_back = t;
                this.__s(t, ["horizontalCenter", "label", "name", "skinName", "y"], [0, "按钮", "btn_back", skins.components.ButtonNoSkin, 938]);
                return t;
            };
            __egretProto__.group_dice0_i = function () {
                var t = new egret.gui.Group();
                this.group_dice0 = t;
                this.__s(t, ["height", "width", "x", "y"], [360, 198, 359, 205]);
                t.elementsContent = [this.__23_i(), this.__24_i(), this.__25_i(), this.__26_i(), this.__27_i(), this.__28_i()];
                return t;
            };
            __egretProto__.group_dice_i = function () {
                var t = new egret.gui.Group();
                this.group_dice = t;
                this.__s(t, ["height", "width", "x", "y"], [360, 200, 52, 205]);
                t.layout = this.__10_i();
                t.elementsContent = [this.__4_i(), this.__5_i(), this.__6_i(), this.__7_i(), this.__8_i(), this.__9_i()];
                return t;
            };
            __egretProto__.group_gift_i = function () {
                var t = new egret.gui.Group();
                this.group_gift = t;
                this.__s(t, ["height", "horizontalCenter", "width", "y"], [140, 0.5, 639, 784]);
                t.elementsContent = [this.__36_i(), this.__37_i(), this.__38_i(), this.label_num_i()];
                return t;
            };
            __egretProto__.label_lose_gold_i = function () {
                var t = new egret.gui.Label();
                this.label_lose_gold = t;
                this.__s(t, ["fontFamily", "text", "textAlign", "textColor", "x", "y"], ["黑体", "-1000", "center", 0x2A2424, 354, 682]);
                return t;
            };
            __egretProto__.label_lose_i = function () {
                var t = new egret.gui.Label();
                this.label_lose = t;
                this.__s(t, ["fontFamily", "maxDisplayedLines", "text", "textAlign", "textColor", "width", "x", "y"], ["黑体", 1, "最多大个子", "center", 0x2A2424, 156, 102, 682]);
                return t;
            };
            __egretProto__.label_num_i = function () {
                var t = new egret.gui.Label();
                this.label_num = t;
                this.__s(t, ["bold", "fontFamily", "height", "size", "text", "textAlign", "textColor", "verticalAlign", "width", "x", "y"], [true, "幼圆", 46, 34, "99", "center", 0xC70A0A, "middle", 46, 160, 57]);
                return t;
            };
            __egretProto__.label_tai_i = function () {
                var t = new egret.gui.Label();
                this.label_tai = t;
                this.__s(t, ["bold", "fontFamily", "horizontalCenter", "text", "textColor", "y"], [true, "黑体", 0, "-200台费", 0x2A2424, 747]);
                return t;
            };
            __egretProto__.label_win_gold_i = function () {
                var t = new egret.gui.Label();
                this.label_win_gold = t;
                this.__s(t, ["fontFamily", "text", "textAlign", "textColor", "x", "y"], ["黑体", "+1000", "center", 0x2A2424, 354, 628]);
                return t;
            };
            __egretProto__.label_win_i = function () {
                var t = new egret.gui.Label();
                this.label_win = t;
                this.__s(t, ["fontFamily", "maxDisplayedLines", "text", "textAlign", "textColor", "width", "x", "y"], ["黑体", 1, "最多大个子", "center", 0x2A2424, 156, 102, 628]);
                return t;
            };
            __egretProto__.list_result0_i = function () {
                var t = new egret.gui.List();
                this.list_result0 = t;
                this.__s(t, ["itemRendererSkinName", "x", "y"], [skins.components.ItemRendererPointsSkin, 544, 226]);
                t.layout = this.__22_i();
                t.dataProvider = this.__21_i();
                return t;
            };
            __egretProto__.list_result_i = function () {
                var t = new egret.gui.List();
                this.list_result = t;
                this.__s(t, ["itemRendererSkinName", "x", "y"], [skins.components.ItemRendererPointsSkin, 234, 226]);
                t.layout = this.__16_i();
                t.dataProvider = this.__15_i();
                return t;
            };
            __egretProto__.UIA_bg_i = function () {
                var t = new egret.gui.UIAsset();
                this.UIA_bg = t;
                this.__s(t, ["source", "x", "y"], ["bg_png", 0, 0]);
                return t;
            };
            PanelResultSkin._skinParts = ["UIA_bg", "UIA_result", "group_dice", "btn_back", "list_result", "list_result0", "group_dice0", "label_win", "label_win_gold", "label_lose", "label_lose_gold", "label_tai", "label_num", "group_gift"];
            return PanelResultSkin;
        })(egret.gui.Skin);
        panel.PanelResultSkin = PanelResultSkin;
        PanelResultSkin.prototype.__class__ = "skins.panel.PanelResultSkin";
    })(panel = skins.panel || (skins.panel = {}));
})(skins || (skins = {}));
