var skins;
(function (skins) {
    var panel;
    (function (panel) {
        var PanelRoleSkin = (function (_super) {
            __extends(PanelRoleSkin, _super);
            function PanelRoleSkin() {
                _super.call(this);
                this.__s = egret.gui.setProperties;
                this.__s(this, ["height", "width"], [1280, 720]);
                this.elementsContent = [this.UIA_bg_i(), this.__3_i(), this.__4_i(), this.__5_i(), this.label_role_gold_i(), this.label_role_gift_i(), this.ti_role_name_i(), this.__7_i(), this.UIA_avatar_i(), this.__8_i(), this.__14_i(), this.label_gender_i(), this.label_name_i()];
                this.states = [
                    new egret.gui.State("normal", []),
                    new egret.gui.State("disabled", [])
                ];
            }
            var __egretProto__ = PanelRoleSkin.prototype;
            Object.defineProperty(__egretProto__, "skinParts", {
                get: function () {
                    return PanelRoleSkin._skinParts;
                },
                enumerable: true,
                configurable: true
            });
            __egretProto__.UIA_bg_i = function () {
                var t = new egret.gui.UIAsset();
                this.UIA_bg = t;
                this.__s(t, ["source", "x", "y"], ["bg_png", 0, 0]);
                return t;
            };
            __egretProto__.__10_i = function () {
                var t = new egret.gui.UIAsset();
                this.__s(t, ["source", "x", "y"], ["dice_role_3_png", 10, 75]);
                return t;
            };
            __egretProto__.__11_i = function () {
                var t = new egret.gui.UIAsset();
                this.__s(t, ["source", "x", "y"], ["dice_role_2_png", 14, 110]);
                return t;
            };
            __egretProto__.__12_i = function () {
                var t = new egret.gui.UIAsset();
                this.__s(t, ["source", "x", "y"], ["dice_role_1_png", 22, 164]);
                return t;
            };
            __egretProto__.__13_i = function () {
                var t = new egret.gui.VerticalLayout();
                t.gap = 60;
                return t;
            };
            __egretProto__.__14_i = function () {
                var t = new egret.gui.Group();
                this.__s(t, ["height", "width", "x", "y"], [270, 108, 170, 490]);
                t.layout = this.__13_i();
                t.elementsContent = [this.__9_i(), this.__10_i(), this.__11_i(), this.__12_i()];
                return t;
            };
            __egretProto__.__3_i = function () {
                var t = new egret.gui.UIAsset();
                this.__s(t, ["horizontalCenter", "source", "y"], [0.5, "dice_mu5_png", 175]);
                return t;
            };
            __egretProto__.__4_i = function () {
                var t = new egret.gui.UIAsset();
                this.__s(t, ["horizontalCenter", "source", "y"], [0, "extra_info_png", 147]);
                return t;
            };
            __egretProto__.__5_i = function () {
                var t = new egret.gui.UIAsset();
                this.__s(t, ["horizontalCenter", "source", "y"], [0, "extra_bg_avatar_png", 272]);
                return t;
            };
            __egretProto__.__6_i = function () {
                var t = new egret.gui.HorizontalLayout();
                t.gap = 55;
                return t;
            };
            __egretProto__.__7_i = function () {
                var t = new egret.gui.Group();
                this.__s(t, ["height", "visible", "width", "x", "y"], [40, false, 220, 311, 547]);
                t.layout = this.__6_i();
                t.elementsContent = [this.rb_man_i(), this.rb_woman_i()];
                return t;
            };
            __egretProto__.__8_i = function () {
                var t = new egret.gui.UIAsset();
                this.__s(t, ["horizontalCenter", "name", "source", "y"], [0, "btn_close", "dice_btn_4_png", 927]);
                return t;
            };
            __egretProto__.__9_i = function () {
                var t = new egret.gui.UIAsset();
                this.__s(t, ["source", "x", "y"], ["dice_role_4_png", 0, 0]);
                return t;
            };
            __egretProto__.label_gender_i = function () {
                var t = new egret.gui.Label();
                this.label_gender = t;
                this.__s(t, ["text", "x", "y"], ["男", 345, 604]);
                return t;
            };
            __egretProto__.label_name_i = function () {
                var t = new egret.gui.Label();
                this.label_name = t;
                this.__s(t, ["maxDisplayedLines", "text", "textAlign", "width", "x", "y"], [1, "最多无盒子", "left", 268, 332, 500]);
                return t;
            };
            __egretProto__.label_role_gift_i = function () {
                var t = new egret.gui.Label();
                this.label_role_gift = t;
                this.__s(t, ["bold", "text", "textColor", "width", "x", "y"], [true, "加载中", 0xD3D626, 170, 342, 815]);
                return t;
            };
            __egretProto__.label_role_gold_i = function () {
                var t = new egret.gui.Label();
                this.label_role_gold = t;
                this.__s(t, ["bold", "text", "textColor", "width", "x", "y"], [true, "加载中", 0xD3D626, 170, 342, 710]);
                return t;
            };
            __egretProto__.rb_man_i = function () {
                var t = new egret.gui.RadioButton();
                this.rb_man = t;
                t.setStyle("bold", true);
                this.__s(t, ["label", "name", "selected", "skinName", "touchEnabled", "x", "y"], ["男", "rb_man", true, skins.components.RadioButtonGenderSkin, false, 0, -16]);
                return t;
            };
            __egretProto__.rb_woman_i = function () {
                var t = new egret.gui.RadioButton();
                this.rb_woman = t;
                t.setStyle("bold", true);
                this.__s(t, ["label", "name", "skinName", "touchEnabled", "x", "y"], ["女", "rb_woman", skins.components.RadioButtonGenderSkin, false, 85, -16]);
                return t;
            };
            __egretProto__.UIA_avatar_i = function () {
                var t = new egret.gui.UIAsset();
                this.UIA_avatar = t;
                this.__s(t, ["height", "horizontalCenter", "source", "width", "y"], [167, 0, "role_boy_png", 167, 279]);
                return t;
            };
            __egretProto__.ti_role_name_i = function () {
                var t = new egret.gui.TextInput();
                this.ti_role_name = t;
                this.__s(t, ["skinName", "text", "touchChildren", "touchEnabled", "visible", "x", "y"], [skins.components.TextInputRoleSkin, "最多五个字", false, false, false, 402, 345]);
                return t;
            };
            PanelRoleSkin._skinParts = ["UIA_bg", "label_role_gold", "label_role_gift", "ti_role_name", "rb_man", "rb_woman", "UIA_avatar", "label_gender", "label_name"];
            return PanelRoleSkin;
        })(egret.gui.Skin);
        panel.PanelRoleSkin = PanelRoleSkin;
        PanelRoleSkin.prototype.__class__ = "skins.panel.PanelRoleSkin";
    })(panel = skins.panel || (skins.panel = {}));
})(skins || (skins = {}));
