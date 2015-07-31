var skins;
(function (skins) {
    var panel;
    (function (panel) {
        var PanelRegisterSkin = (function (_super) {
            __extends(PanelRegisterSkin, _super);
            function PanelRegisterSkin() {
                _super.call(this);
                this.__s = egret.gui.setProperties;
                this.__s(this, ["height", "width"], [1280, 720]);
                this.elementsContent = [this.UIA_bg_i(), this.__2_i(), this.__3_i(), this.__4_i(), this.__5_i(), this.UIA_i(), this.__7_i(), this.ti_name_i(), this.ti_pass_i(), this.ti_pw_i(), this.ti_pw2_i(), this.__8_i(), this.__9_i(), this.__10_i(), this.__11_i(), this.__12_i(), this.label_name_i(), this.label_pw_i(), this.label_pw2_i()];
                this.states = [
                    new egret.gui.State("normal", [])
                ];
            }
            var __egretProto__ = PanelRegisterSkin.prototype;
            Object.defineProperty(__egretProto__, "skinParts", {
                get: function () {
                    return PanelRegisterSkin._skinParts;
                },
                enumerable: true,
                configurable: true
            });
            __egretProto__.UIA_i = function () {
                var t = new egret.gui.UIAsset();
                this.UIA = t;
                this.__s(t, ["horizontalCenter", "name", "source", "y"], [0, "UIA_logo", "icon_png", 6]);
                return t;
            };
            __egretProto__.__10_i = function () {
                var t = new egret.gui.UIAsset();
                this.__s(t, ["name", "source", "x", "y"], ["UIA_3", "dice_label_1_png", 117, 827]);
                return t;
            };
            __egretProto__.__11_i = function () {
                var t = new egret.gui.UIAsset();
                this.__s(t, ["name", "source", "x", "y"], ["UIA_4", "dice_label_1_png", 117, 947]);
                return t;
            };
            __egretProto__.__12_i = function () {
                var t = new egret.gui.Group();
                this.__s(t, ["height", "width", "x", "y"], [72, 205, 424, 698]);
                t.elementsContent = [this.btn_code_i(), this.label_second_i()];
                return t;
            };
            __egretProto__.__2_i = function () {
                var t = new egret.gui.UIAsset();
                this.__s(t, ["name", "source", "x", "y"], ["UIA_11", "dice_input_1_png", 98, 576]);
                return t;
            };
            __egretProto__.__3_i = function () {
                var t = new egret.gui.UIAsset();
                this.__s(t, ["name", "source", "x", "y"], ["UIA_22", "dice_code_1_png", 98, 693]);
                return t;
            };
            __egretProto__.__4_i = function () {
                var t = new egret.gui.UIAsset();
                this.__s(t, ["name", "source", "x", "y"], ["UIA_33", "dice_input_1_png", 98, 809]);
                return t;
            };
            __egretProto__.__5_i = function () {
                var t = new egret.gui.UIAsset();
                this.__s(t, ["name", "source", "x", "y"], ["UIA_44", "dice_input_1_png", 98, 925]);
                return t;
            };
            __egretProto__.__6_i = function () {
                var t = new egret.gui.HorizontalLayout();
                t.gap = 25;
                return t;
            };
            __egretProto__.__7_i = function () {
                var t = new egret.gui.Group();
                this.__s(t, ["height", "width", "x", "y"], [96, 546, 90, 1087]);
                t.layout = this.__6_i();
                t.elementsContent = [this.btn_back_i(), this.btn_ok_i()];
                return t;
            };
            __egretProto__.__8_i = function () {
                var t = new egret.gui.UIAsset();
                this.__s(t, ["name", "source", "x", "y"], ["UIA_2", "dice_label_2_png", 117, 710]);
                return t;
            };
            __egretProto__.__9_i = function () {
                var t = new egret.gui.UIAsset();
                this.__s(t, ["name", "source", "x", "y"], ["UIA_1", "dice_label_3_png", 117, 592]);
                return t;
            };
            __egretProto__.btn_back_i = function () {
                var t = new egret.gui.Button();
                this.btn_back = t;
                this.__s(t, ["label", "name", "skinName", "x", "y"], ["按钮", "btn_back", skins.components.ButtonNoSkin, -30, 39]);
                return t;
            };
            __egretProto__.btn_code_i = function () {
                var t = new egret.gui.Button();
                this.btn_code = t;
                this.__s(t, ["label", "name", "skinName", "x", "y"], ["按钮", "btn_code", skins.components.ButtonCodeSkin, -6, 2]);
                return t;
            };
            __egretProto__.btn_ok_i = function () {
                var t = new egret.gui.Button();
                this.btn_ok = t;
                this.__s(t, ["label", "name", "skinName", "x", "y"], ["按钮", "btn_ok", skins.components.ButtonYesSkin, 266, 103]);
                return t;
            };
            __egretProto__.label_name_i = function () {
                var t = new egret.gui.Label();
                this.label_name = t;
                this.__s(t, ["name", "size", "text", "textAlign", "textColor", "touchEnabled", "x", "y"], ["label_name", 42, "请输入手机号", "left", 0xC2C2C2, false, 264, 596]);
                return t;
            };
            __egretProto__.label_pw2_i = function () {
                var t = new egret.gui.Label();
                this.label_pw2 = t;
                this.__s(t, ["name", "size", "text", "textAlign", "textColor", "touchEnabled", "x", "y"], ["label_name", 42, "请重复密码", "left", 0xC2C2C2, false, 264, 950]);
                return t;
            };
            __egretProto__.label_pw_i = function () {
                var t = new egret.gui.Label();
                this.label_pw = t;
                this.__s(t, ["name", "size", "text", "textAlign", "textColor", "touchEnabled", "x", "y"], ["label_name", 42, "请设置密码", "left", 0xC2C2C2, false, 264, 831]);
                return t;
            };
            __egretProto__.label_second_i = function () {
                var t = new egret.gui.Label();
                this.label_second = t;
                this.__s(t, ["bold", "fontFamily", "name", "size", "text", "textAlign", "touchEnabled", "verticalCenter", "x"], [true, "黑体", "label_second", 32, "(60)", "left", false, 2, 125]);
                return t;
            };
            __egretProto__.UIA_bg_i = function () {
                var t = new egret.gui.UIAsset();
                this.UIA_bg = t;
                this.__s(t, ["name", "source", "x", "y"], ["UIA_bg", "loading_bg_png", 0, 0]);
                return t;
            };
            __egretProto__.ti_name_i = function () {
                var t = new egret.gui.TextInput();
                this.ti_name = t;
                t.setStyle("fontFamily", "黑体");
                t.setStyle("size", 22);
                t.setStyle("textAlign", "left");
                this.__s(t, ["restrict", "skinName", "textColor", "width", "x", "y"], ["0-9", skins.components.TextInputloginSkin, 0xCEC1C1, 369, 239, 581]);
                return t;
            };
            __egretProto__.ti_pass_i = function () {
                var t = new egret.gui.TextInput();
                this.ti_pass = t;
                t.setStyle("fontFamily", "黑体");
                t.setStyle("size", 30);
                t.setStyle("textAlign", "left");
                this.__s(t, ["restrict", "skinName", "text", "textColor", "width", "x", "y"], ["0-9", skins.components.TextInputloginSkin, "1212", 0xCEC1C1, 131, 264, 699]);
                return t;
            };
            __egretProto__.ti_pw2_i = function () {
                var t = new egret.gui.TextInput();
                this.ti_pw2 = t;
                t.setStyle("fontFamily", "黑体");
                t.setStyle("textAlign", "left");
                this.__s(t, ["displayAsPassword", "restrict", "skinName", "textColor", "width", "x", "y"], [true, "0-9 a-z A-z @", skins.components.TextInputloginSkin, 0xCEC1C1, 369, 239, 937]);
                return t;
            };
            __egretProto__.ti_pw_i = function () {
                var t = new egret.gui.TextInput();
                this.ti_pw = t;
                t.setStyle("fontFamily", "黑体");
                t.setStyle("textAlign", "left");
                this.__s(t, ["displayAsPassword", "restrict", "skinName", "textColor", "width", "x", "y"], [true, "0-9 a-z A-z @", skins.components.TextInputloginSkin, 0xCEC1C1, 369, 239, 820]);
                return t;
            };
            PanelRegisterSkin._skinParts = ["UIA_bg", "UIA", "btn_back", "btn_ok", "ti_name", "ti_pass", "ti_pw", "ti_pw2", "btn_code", "label_second", "label_name", "label_pw", "label_pw2"];
            return PanelRegisterSkin;
        })(egret.gui.Skin);
        panel.PanelRegisterSkin = PanelRegisterSkin;
        PanelRegisterSkin.prototype.__class__ = "skins.panel.PanelRegisterSkin";
    })(panel = skins.panel || (skins.panel = {}));
})(skins || (skins = {}));
