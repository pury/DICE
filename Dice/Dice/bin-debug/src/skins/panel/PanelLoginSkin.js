var skins;
(function (skins) {
    var panel;
    (function (panel) {
        var PanelLoginSkin = (function (_super) {
            __extends(PanelLoginSkin, _super);
            function PanelLoginSkin() {
                _super.call(this);
                this.__s = egret.gui.setProperties;
                this.__s(this, ["height", "width"], [1280, 720]);
                this.elementsContent = [this.UIA_bg_i(), this.__2_i(), this.__3_i(), this.__4_i(), this.btn_register_i(), this.ti_name_i(), this.label_pass_i(), this.ti_password_i(), this.label_forget_i(), this.__5_i(), this.__6_i(), this.label_name_i()];
                this.btn_login_i();
                this.states = [
                    new egret.gui.State("normal", [
                        new egret.gui.AddItems("btn_login", "", "before", "btn_register")
                    ])
                ];
            }
            var __egretProto__ = PanelLoginSkin.prototype;
            Object.defineProperty(__egretProto__, "skinParts", {
                get: function () {
                    return PanelLoginSkin._skinParts;
                },
                enumerable: true,
                configurable: true
            });
            __egretProto__.__2_i = function () {
                var t = new egret.gui.UIAsset();
                this.__s(t, ["horizontalCenter", "name", "source", "y"], [0, "UIA_11", "dice_input_1_png", 576]);
                return t;
            };
            __egretProto__.__3_i = function () {
                var t = new egret.gui.UIAsset();
                this.__s(t, ["horizontalCenter", "name", "source", "y"], [0, "UIA_22", "dice_input_1_png", 693]);
                return t;
            };
            __egretProto__.__4_i = function () {
                var t = new egret.gui.UIAsset();
                this.__s(t, ["horizontalCenter", "name", "source", "y"], [0, "UIA_logo", "icon_png", 6]);
                return t;
            };
            __egretProto__.__5_i = function () {
                var t = new egret.gui.UIAsset();
                this.__s(t, ["name", "source", "x", "y"], ["UIA_1", "dice_label_3_png", 117, 592]);
                return t;
            };
            __egretProto__.__6_i = function () {
                var t = new egret.gui.UIAsset();
                this.__s(t, ["name", "source", "x", "y"], ["UIA_2", "dice_label_1_png", 117, 710.5]);
                return t;
            };
            __egretProto__.btn_login_i = function () {
                var t = new egret.gui.Button();
                this.btn_login = t;
                this.__s(t, ["bottom", "horizontalCenter", "label", "name", "skinName"], [288, -2, "按钮", "btn_login", skins.components.ButtonloginSkin]);
                return t;
            };
            __egretProto__.btn_register_i = function () {
                var t = new egret.gui.Button();
                this.btn_register = t;
                this.__s(t, ["label", "name", "skinName", "x", "y"], ["按钮", "btn_register", skins.components.ButtonRegisterSkin, 89, 1067]);
                return t;
            };
            __egretProto__.label_forget_i = function () {
                var t = new egret.gui.Label();
                this.label_forget = t;
                this.__s(t, ["bold", "name", "text", "textColor", "x", "y"], [false, "label_forget", "忘记密码", 0xFFFFFF, 490, 808]);
                return t;
            };
            __egretProto__.label_name_i = function () {
                var t = new egret.gui.Label();
                this.label_name = t;
                this.__s(t, ["name", "size", "text", "textColor", "touchEnabled", "x", "y"], ["label_name", 42, "请输入手机号", 0xC2C2C2, false, 264, 596]);
                return t;
            };
            __egretProto__.label_pass_i = function () {
                var t = new egret.gui.Label();
                this.label_pass = t;
                this.__s(t, ["size", "text", "textColor", "touchEnabled", "x", "y"], [42, "请输入密码", 0xC2C2C2, false, 264, 715]);
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
                this.__s(t, ["name", "restrict", "skinName", "textColor", "touchEnabled", "width", "x", "y"], ["ti_name", "0-9", skins.components.TextInputloginSkin, 0xC2C2C2, true, 368, 243, 583]);
                return t;
            };
            __egretProto__.ti_password_i = function () {
                var t = new egret.gui.TextInput();
                this.ti_password = t;
                this.__s(t, ["displayAsPassword", "name", "restrict", "skinName", "width", "x", "y"], [true, "ti_password", "0-9 a-z A-z @", skins.components.TextInputloginSkin, 365, 243, 699]);
                return t;
            };
            PanelLoginSkin._skinParts = ["UIA_bg", "btn_login", "btn_register", "ti_name", "label_pass", "ti_password", "label_forget", "label_name"];
            return PanelLoginSkin;
        })(egret.gui.Skin);
        panel.PanelLoginSkin = PanelLoginSkin;
        PanelLoginSkin.prototype.__class__ = "skins.panel.PanelLoginSkin";
    })(panel = skins.panel || (skins.panel = {}));
})(skins || (skins = {}));
