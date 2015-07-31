var skins;
(function (skins) {
    var panel;
    (function (panel) {
        var PanelSetSkin = (function (_super) {
            __extends(PanelSetSkin, _super);
            function PanelSetSkin() {
                _super.call(this);
                this.__s = egret.gui.setProperties;
                this.__s(this, ["currentState", "height", "width"], ["setting", 1280, 720]);
                this.elementsContent = [this.UIA_bg_i()];
                this.__4_i();
                this.btn_back_game_i();
                this.btn_quit_i();
                this.__6_i();
                this.btn_back_room_i();
                this.UIA_sound_i();
                this.group_set_i();
                this.btn_back_setting_i();
                this.__9_i();
                this.states = [
                    new egret.gui.State("normal", [
                        new egret.gui.AddItems("btn_back_setting", "", "last", ""),
                        new egret.gui.AddItems("__9", "", "last", ""),
                        new egret.gui.SetProperty("UIA_bg", "y", 0)
                    ]),
                    new egret.gui.State("quit", [
                        new egret.gui.AddItems("__4", "", "last", ""),
                        new egret.gui.AddItems("btn_back_game", "__6", "first", ""),
                        new egret.gui.AddItems("btn_quit", "__6", "last", ""),
                        new egret.gui.AddItems("__6", "", "last", ""),
                        new egret.gui.SetProperty("UIA_bg", "y", 0)
                    ]),
                    new egret.gui.State("setting", [
                        new egret.gui.AddItems("btn_back_room", "", "last", ""),
                        new egret.gui.AddItems("UIA_sound", "", "last", ""),
                        new egret.gui.AddItems("group_set", "", "last", ""),
                        new egret.gui.SetProperty("UIA_bg", "y", 0)
                    ])
                ];
            }
            var __egretProto__ = PanelSetSkin.prototype;
            Object.defineProperty(__egretProto__, "skinParts", {
                get: function () {
                    return PanelSetSkin._skinParts;
                },
                enumerable: true,
                configurable: true
            });
            __egretProto__.UIA_sound_i = function () {
                var t = new egret.gui.UIAsset();
                this.UIA_sound = t;
                this.__s(t, ["name", "source", "width", "x", "y"], ["UIA_sound", "dice_set_2_png", 78, 614, 28]);
                return t;
            };
            __egretProto__.__4_i = function () {
                var t = new egret.gui.UIAsset();
                this.__4 = t;
                this.__s(t, ["horizontalCenter", "source", "y"], [0, "dice_set_1_png", 215]);
                return t;
            };
            __egretProto__.__5_i = function () {
                var t = new egret.gui.HorizontalLayout();
                return t;
            };
            __egretProto__.__6_i = function () {
                var t = new egret.gui.Group();
                this.__6 = t;
                this.__s(t, ["height", "horizontalCenter", "width", "y"], [108, 0, 523, 755]);
                t.layout = this.__5_i();
                t.elementsContent = [];
                return t;
            };
            __egretProto__.__7_i = function () {
                var t = new egret.gui.VerticalLayout();
                t.gap = 40;
                return t;
            };
            __egretProto__.__8_i = function () {
                var t = new egret.gui.VerticalLayout();
                t.gap = 70;
                return t;
            };
            __egretProto__.__9_i = function () {
                var t = new egret.gui.Group();
                this.__9 = t;
                this.__s(t, ["height", "width", "x", "y"], [418, 386, 168, 321]);
                t.layout = this.__8_i();
                t.elementsContent = [this.btn_charge_i(), this.btn_switch_i(), this.btn_moregames_i()];
                return t;
            };
            __egretProto__.btn_back_game_i = function () {
                var t = new egret.gui.UIAsset();
                this.btn_back_game = t;
                this.__s(t, ["name", "source", "x", "y"], ["btn_back_game", "dice_btn_4_png", 43, 15]);
                return t;
            };
            __egretProto__.btn_back_room_i = function () {
                var t = new egret.gui.Button();
                this.btn_back_room = t;
                this.__s(t, ["label", "name", "skinName", "x", "y"], ["按钮", "btn_back_room", skins.components.ButtonBackSkin, 24, 28]);
                return t;
            };
            __egretProto__.btn_back_setting_i = function () {
                var t = new egret.gui.Button();
                this.btn_back_setting = t;
                this.__s(t, ["label", "left", "name", "skinName", "top", "width"], ["按钮", 24, "btn_back_setting", skins.components.ButtonBackSkin, 29, 64]);
                return t;
            };
            __egretProto__.btn_charge_i = function () {
                var t = new egret.gui.Button();
                this.btn_charge = t;
                this.__s(t, ["label", "name", "skinName", "visible", "x", "y"], ["按钮", "btn_charge", skins.components.ButtonChargeSkin, false, 4, 94]);
                return t;
            };
            __egretProto__.btn_direct_buy_i = function () {
                var t = new egret.gui.Button();
                this.btn_direct_buy = t;
                this.__s(t, ["label", "name", "skinName", "x", "y"], ["按钮", "btn_direct_buy", skins.components.ButtonDirectBuySkin, 166, 295]);
                return t;
            };
            __egretProto__.btn_exchange_i = function () {
                var t = new egret.gui.Button();
                this.btn_exchange = t;
                this.__s(t, ["label", "name", "skinName", "x", "y"], ["按钮", "btn_exchange", skins.components.ButtonExchangeSkin, 120, 263]);
                return t;
            };
            __egretProto__.btn_help_i = function () {
                var t = new egret.gui.Button();
                this.btn_help = t;
                this.__s(t, ["label", "name", "skinName", "x", "y"], ["按钮", "btn_help", skins.components.ButtonHelpSkin, 174, 260]);
                return t;
            };
            __egretProto__.btn_info_i = function () {
                var t = new egret.gui.Button();
                this.btn_info = t;
                this.__s(t, ["label", "name", "skinName", "visible", "x", "y"], ["按钮", "btn_info", skins.components.ButtonInfoSkin, true, 314, 134]);
                return t;
            };
            __egretProto__.btn_moregames_i = function () {
                var t = new egret.gui.Button();
                this.btn_moregames = t;
                this.__s(t, ["label", "name", "skinName", "x", "y"], ["按钮", "btn_moregames", skins.components.ButtonMoreGamesSkin, 262, 268]);
                return t;
            };
            __egretProto__.btn_quit_i = function () {
                var t = new egret.gui.UIAsset();
                this.btn_quit = t;
                this.__s(t, ["name", "source", "x", "y"], ["btn_quit", "dice_btn_1_png", 277, 23]);
                return t;
            };
            __egretProto__.btn_sing_exchange_i = function () {
                var t = new egret.gui.Button();
                this.btn_sing_exchange = t;
                this.__s(t, ["label", "name", "skinName", "x", "y"], ["按钮", "btn_sing_exchange", skins.components.ButtonExchangeSingSkin, 242, 327]);
                return t;
            };
            __egretProto__.btn_switch_i = function () {
                var t = new egret.gui.Button();
                this.btn_switch = t;
                this.__s(t, ["label", "name", "skinName", "x", "y"], ["按钮", "btn_switch", skins.components.ButtonSwitchSkin, 198, 344]);
                return t;
            };
            __egretProto__.group_set_i = function () {
                var t = new egret.gui.Group();
                this.group_set = t;
                this.__s(t, ["height", "horizontalCenter", "width", "y"], [612, 0, 386, 336]);
                t.layout = this.__7_i();
                t.elementsContent = [this.btn_info_i(), this.btn_help_i(), this.btn_sing_exchange_i(), this.btn_exchange_i(), this.btn_direct_buy_i()];
                return t;
            };
            __egretProto__.UIA_bg_i = function () {
                var t = new egret.gui.UIAsset();
                this.UIA_bg = t;
                this.__s(t, ["source", "y"], ["bg_png", -4]);
                return t;
            };
            PanelSetSkin._skinParts = ["UIA_bg", "btn_back_game", "btn_quit", "btn_back_room", "UIA_sound", "btn_info", "btn_help", "btn_sing_exchange", "btn_exchange", "btn_direct_buy", "group_set", "btn_back_setting", "btn_charge", "btn_switch", "btn_moregames"];
            return PanelSetSkin;
        })(egret.gui.Skin);
        panel.PanelSetSkin = PanelSetSkin;
        PanelSetSkin.prototype.__class__ = "skins.panel.PanelSetSkin";
    })(panel = skins.panel || (skins.panel = {}));
})(skins || (skins = {}));
