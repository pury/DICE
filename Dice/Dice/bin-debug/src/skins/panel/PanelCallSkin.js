var skins;
(function (skins) {
    var panel;
    (function (panel) {
        var PanelCallSkin = (function (_super) {
            __extends(PanelCallSkin, _super);
            function PanelCallSkin() {
                _super.call(this);
                this.__s = egret.gui.setProperties;
                this.__s(this, ["height", "width"], [1280, 720]);
                this.elementsContent = [this.UIA_bg_white_select_i(), this.__11_i(), this.__20_i(), this.__28_i(), this.UIA_ge_i(), this.btn_call_call_i(), this.btn_call_open_i(), this.__29_i(), this.UIA_pro_i(), this.label_pro_i(), this.UIA_last_i(), this.group_last_i(), this.UIA_call_reminder_i()];
                this.states = [
                    new egret.gui.State("normal", []),
                    new egret.gui.State("disabled", [])
                ];
            }
            var __egretProto__ = PanelCallSkin.prototype;
            Object.defineProperty(__egretProto__, "skinParts", {
                get: function () {
                    return PanelCallSkin._skinParts;
                },
                enumerable: true,
                configurable: true
            });
            __egretProto__.UIA_call_reminder_i = function () {
                var t = new egret.gui.UIAsset();
                this.UIA_call_reminder = t;
                this.__s(t, ["horizontalCenter", "source", "y"], [0, "dice_call_open_png", 376]);
                return t;
            };
            __egretProto__.UIA_dice0_i = function () {
                var t = new egret.gui.UIAsset();
                this.UIA_dice0 = t;
                this.__s(t, ["name", "source", "x", "y"], ["UIA_dice", "bg_select_png", 0, 0]);
                return t;
            };
            __egretProto__.UIA_ge_i = function () {
                var t = new egret.gui.UIAsset();
                this.UIA_ge = t;
                this.__s(t, ["horizontalCenter", "source", "y"], [98.5, "word_png", 598]);
                return t;
            };
            __egretProto__.UIA_last_i = function () {
                var t = new egret.gui.UIAsset();
                this.UIA_last = t;
                this.__s(t, ["name", "source", "x", "y"], ["UIA_last", "dice_table_24_png", 0, 238]);
                return t;
            };
            __egretProto__.UIA_last_point_i = function () {
                var t = new egret.gui.UIAsset();
                this.UIA_last_point = t;
                this.__s(t, ["height", "source", "width", "x", "y"], [86, "dice1_png", 82, 596, 1]);
                return t;
            };
            __egretProto__.UIA_number_left_i = function () {
                var t = new egret.gui.UIAsset();
                this.UIA_number_left = t;
                this.__s(t, ["source", "x", "y"], ["num3_png", 388, 6]);
                return t;
            };
            __egretProto__.UIA_number_right_i = function () {
                var t = new egret.gui.UIAsset();
                this.UIA_number_right = t;
                this.__s(t, ["source", "x", "y"], ["num0_png", 443, 6]);
                return t;
            };
            __egretProto__.UIA_pro_i = function () {
                var t = new egret.gui.UIAsset();
                this.UIA_pro = t;
                this.__s(t, ["source", "x", "y"], ["dice_table_20_png", 186, 811]);
                return t;
            };
            __egretProto__.__10_i = function () {
                var t = new egret.gui.Group();
                this.__s(t, ["height", "width"], [132, 144]);
                t.layout = this.__4_i();
                t.elementsContent = [this.list_call_num1_i()];
                return t;
            };
            __egretProto__.__11_i = function () {
                var t = new egret.gui.Group();
                this.__s(t, ["height", "left", "width", "y"], [202, 30, 162, 549]);
                t.elementsContent = [this.__3_i(), this.scro_num1_i()];
                return t;
            };
            __egretProto__.__12_i = function () {
                var t = new egret.gui.UIAsset();
                this.__s(t, ["source", "x", "y"], ["bg_select_png", 0, 0]);
                return t;
            };
            __egretProto__.__13_i = function () {
                var t = new egret.gui.VerticalLayout();
                t.gap = 0;
                return t;
            };
            __egretProto__.__14_i = function () {
                var t = new egret.gui.VerticalLayout();
                t.gap = 0;
                return t;
            };
            __egretProto__.__15_i = function () {
                var t = {};
                t.label = "1";
                return t;
            };
            __egretProto__.__16_i = function () {
                var t = {};
                t.label = "3";
                return t;
            };
            __egretProto__.__18_i = function () {
                var t = new egret.gui.ArrayCollection();
                t.source = [this.__15_i(), this.__16_i()];
                return t;
            };
            __egretProto__.__19_i = function () {
                var t = new egret.gui.Group();
                this.__s(t, ["height", "width"], [132, 144]);
                t.layout = this.__13_i();
                t.elementsContent = [this.list_call_num2_i()];
                return t;
            };
            __egretProto__.__20_i = function () {
                var t = new egret.gui.Group();
                this.__s(t, ["height", "left", "width", "y"], [202, 196, 162, 549]);
                t.elementsContent = [this.__12_i(), this.scro_num2_i()];
                return t;
            };
            __egretProto__.__21_i = function () {
                var t = new egret.gui.VerticalLayout();
                t.gap = 0;
                return t;
            };
            __egretProto__.__22_i = function () {
                var t = {};
                t.label = "数据1";
                return t;
            };
            __egretProto__.__23_i = function () {
                var t = {};
                t.label = "1";
                return t;
            };
            __egretProto__.__25_i = function () {
                var t = new egret.gui.ArrayCollection();
                t.source = [this.__22_i(), this.__23_i()];
                return t;
            };
            __egretProto__.__26_i = function () {
                var t = new egret.gui.VerticalLayout();
                t.gap = 0;
                return t;
            };
            __egretProto__.__27_i = function () {
                var t = new egret.gui.Group();
                t.width = 150;
                t.layout = this.__21_i();
                t.elementsContent = [this.list_call_selectdice_i()];
                return t;
            };
            __egretProto__.__28_i = function () {
                var t = new egret.gui.Group();
                this.__s(t, ["height", "right", "width", "y"], [202, 11, 162, 549]);
                t.elementsContent = [this.UIA_dice0_i(), this.scro_dice_i()];
                return t;
            };
            __egretProto__.__29_i = function () {
                var t = new egret.gui.UIAsset();
                this.__s(t, ["source", "x", "y"], ["dice_table_19_png", 186, 811]);
                return t;
            };
            __egretProto__.__30_i = function () {
                var t = new egret.gui.UIAsset();
                this.__s(t, ["source", "x", "y"], ["dice_table_21_png", 78, -1]);
                return t;
            };
            __egretProto__.__31_i = function () {
                var t = new egret.gui.UIAsset();
                this.__s(t, ["source", "x", "y"], ["mutiple_sign_png", 525, 14]);
                return t;
            };
            __egretProto__.__3_i = function () {
                var t = new egret.gui.UIAsset();
                this.__s(t, ["source", "x", "y"], ["bg_select_png", 0, 0]);
                return t;
            };
            __egretProto__.__4_i = function () {
                var t = new egret.gui.VerticalLayout();
                t.gap = 0;
                return t;
            };
            __egretProto__.__5_i = function () {
                var t = new egret.gui.VerticalLayout();
                t.gap = 0;
                return t;
            };
            __egretProto__.__6_i = function () {
                var t = {};
                t.label = "1";
                return t;
            };
            __egretProto__.__7_i = function () {
                var t = {};
                t.label = "3";
                return t;
            };
            __egretProto__.__9_i = function () {
                var t = new egret.gui.ArrayCollection();
                t.source = [this.__6_i(), this.__7_i()];
                return t;
            };
            __egretProto__.btn_call_call_i = function () {
                var t = new egret.gui.Button();
                this.btn_call_call = t;
                this.__s(t, ["enabled", "horizontalCenter", "label", "name", "skinName", "y"], [true, 162, "按钮", "btn_call_call", skins.components.ButtonCallSkin, 886]);
                return t;
            };
            __egretProto__.btn_call_open_i = function () {
                var t = new egret.gui.Button();
                this.btn_call_open = t;
                this.__s(t, ["enabled", "horizontalCenter", "label", "name", "skinName", "y"], [true, -162, "按钮", "btn_call_open", skins.components.ButtonOpenSkin, 886]);
                return t;
            };
            __egretProto__.group_last_i = function () {
                var t = new egret.gui.Group();
                this.group_last = t;
                this.__s(t, ["height", "horizontalCenter", "width", "y"], [254, 1, 720, 238]);
                t.elementsContent = [this.__30_i(), this.__31_i(), this.UIA_number_right_i(), this.UIA_number_left_i(), this.UIA_last_point_i()];
                return t;
            };
            __egretProto__.label_pro_i = function () {
                var t = new egret.gui.Label();
                this.label_pro = t;
                this.__s(t, ["text", "textAlign", "x", "y"], ["20", "center", 512, 799]);
                return t;
            };
            __egretProto__.list_call_num1_i = function () {
                var t = new egret.gui.List();
                this.list_call_num1 = t;
                t.setStyle("bold", true);
                this.__s(t, ["itemRendererSkinName", "x", "y"], [skins.components.ItemRendererNumberSkin, 277, 360]);
                t.layout = this.__5_i();
                t.dataProvider = this.__9_i();
                return t;
            };
            __egretProto__.list_call_num2_i = function () {
                var t = new egret.gui.List();
                this.list_call_num2 = t;
                t.setStyle("bold", true);
                this.__s(t, ["itemRendererSkinName", "x", "y"], [skins.components.ItemRendererNumberSkin, 277, 360]);
                t.layout = this.__14_i();
                t.dataProvider = this.__18_i();
                return t;
            };
            __egretProto__.list_call_selectdice_i = function () {
                var t = new egret.gui.List();
                this.list_call_selectdice = t;
                this.__s(t, ["itemRendererSkinName", "x", "y"], [skins.components.ItemRendererSelectDiceSkin, -5, -29]);
                t.layout = this.__26_i();
                t.dataProvider = this.__25_i();
                return t;
            };
            __egretProto__.scro_dice_i = function () {
                var t = new egret.gui.Scroller();
                this.scro_dice = t;
                this.__s(t, ["height", "width", "x", "y"], [150, 153, 6, 29]);
                t.viewport = this.__27_i();
                return t;
            };
            __egretProto__.scro_num1_i = function () {
                var t = new egret.gui.Scroller();
                this.scro_num1 = t;
                this.__s(t, ["height", "width", "x", "y"], [132, 148, 10, 31]);
                t.viewport = this.__10_i();
                return t;
            };
            __egretProto__.scro_num2_i = function () {
                var t = new egret.gui.Scroller();
                this.scro_num2 = t;
                this.__s(t, ["height", "width", "x", "y"], [132, 148, 10, 31]);
                t.viewport = this.__19_i();
                return t;
            };
            __egretProto__.UIA_bg_white_select_i = function () {
                var t = new egret.gui.UIAsset();
                this.UIA_bg_white_select = t;
                this.__s(t, ["horizontalCenter", "source", "y"], [0, "dice_selcect_bg_white_png", 512]);
                return t;
            };
            PanelCallSkin._skinParts = ["UIA_bg_white_select", "list_call_num1", "scro_num1", "list_call_num2", "scro_num2", "UIA_dice0", "list_call_selectdice", "scro_dice", "UIA_ge", "btn_call_call", "btn_call_open", "UIA_pro", "label_pro", "UIA_last", "UIA_number_right", "UIA_number_left", "UIA_last_point", "group_last", "UIA_call_reminder"];
            return PanelCallSkin;
        })(egret.gui.Skin);
        panel.PanelCallSkin = PanelCallSkin;
        PanelCallSkin.prototype.__class__ = "skins.panel.PanelCallSkin";
    })(panel = skins.panel || (skins.panel = {}));
})(skins || (skins = {}));
