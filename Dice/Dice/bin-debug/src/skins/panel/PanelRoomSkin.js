var skins;
(function (skins) {
    var panel;
    (function (panel) {
        var PanelRoomSkin = (function (_super) {
            __extends(PanelRoomSkin, _super);
            function PanelRoomSkin() {
                _super.call(this);
                this.__s = egret.gui.setProperties;
                this.__s(this, ["height", "width"], [1280, 720]);
                this.elementsContent = [this.list_real_players_i(), this.btn_return_i(), this.group_dialog_i(), this.group_alarm_i(), this.UIA_sound_i(), this.UIA_game_start_i(), this.list_avatar_i(), this.UIA_master_i(), this.PanelRoomDownUI_i(), this.PanelCallUI_i(), this.PanelRoomRollUI_i(), this.PanelRoomReminderUI_i(), this.UIA_up_i(), this.scro_info_i(), this.UIA_hint_i()];
                this.states = [
                    new egret.gui.State("normal", []),
                    new egret.gui.State("disabled", [])
                ];
            }
            var __egretProto__ = PanelRoomSkin.prototype;
            Object.defineProperty(__egretProto__, "skinParts", {
                get: function () {
                    return PanelRoomSkin._skinParts;
                },
                enumerable: true,
                configurable: true
            });
            __egretProto__.PanelCallUI_i = function () {
                var t = new game.PanelCallUI();
                this.PanelCallUI = t;
                this.__s(t, ["height", "right", "skinName", "visible", "width", "y"], [1280, 0, skins.panel.PanelCallSkin, false, 720, 0]);
                return t;
            };
            __egretProto__.PanelRoomDownUI_i = function () {
                var t = new game.PanelRoomDownUI();
                this.PanelRoomDownUI = t;
                this.__s(t, ["skinName", "x", "y"], [skins.panel.PanelRoomDownSkin, 0, 0]);
                return t;
            };
            __egretProto__.PanelRoomReminderUI_i = function () {
                var t = new game.PanelRoomReminderUI();
                this.PanelRoomReminderUI = t;
                this.__s(t, ["height", "skinName", "visible", "width", "x", "y"], [250, skins.panel.PanelRoomReminderSkin, false, 720, 0, 222]);
                return t;
            };
            __egretProto__.PanelRoomRollUI_i = function () {
                var t = new game.PanelRoomRollUI();
                this.PanelRoomRollUI = t;
                this.__s(t, ["height", "horizontalCenter", "skinName", "visible", "width", "y"], [385, 0, skins.panel.PanelRoomRollSkin, false, 720, 222]);
                return t;
            };
            __egretProto__.UIA_alarm_i = function () {
                var t = new egret.gui.UIAsset();
                this.UIA_alarm = t;
                this.__s(t, ["height", "source", "width", "x", "y"], [84, "bg_timer_png", 84, 0, 0]);
                return t;
            };
            __egretProto__.UIA_dialogbg_i = function () {
                var t = new egret.gui.UIAsset();
                this.UIA_dialogbg = t;
                this.__s(t, ["height", "source", "width", "x", "y"], [161, "dice_table_18_png", 313, 1, -2]);
                return t;
            };
            __egretProto__.UIA_dialogdice_i = function () {
                var t = new egret.gui.UIAsset();
                this.UIA_dialogdice = t;
                this.__s(t, ["height", "source", "width", "x", "y"], [102, "room_dice1_png", 97, 172, -1]);
                return t;
            };
            __egretProto__.UIA_game_start_i = function () {
                var t = new egret.gui.Button();
                this.UIA_game_start = t;
                this.__s(t, ["horizontalCenter", "label", "name", "skinName", "y"], [0, "按钮", "UIA_game_start", skins.components.ButtonStartGameSkin, 766]);
                return t;
            };
            __egretProto__.UIA_hint_i = function () {
                var t = new egret.gui.UIAsset();
                this.UIA_hint = t;
                this.__s(t, ["horizontalCenter", "name", "source", "y"], [0, "UIA_hint", "dice_table_12_png", 831]);
                return t;
            };
            __egretProto__.UIA_master_i = function () {
                var t = new egret.gui.UIAsset();
                this.UIA_master = t;
                this.__s(t, ["source", "x", "y"], ["bg_master_png", 84, 805]);
                return t;
            };
            __egretProto__.UIA_number_left_i = function () {
                var t = new egret.gui.UIAsset();
                this.UIA_number_left = t;
                this.__s(t, ["source", "x", "y"], ["num3_png", 7, 10]);
                return t;
            };
            __egretProto__.UIA_number_right_i = function () {
                var t = new egret.gui.UIAsset();
                this.UIA_number_right = t;
                this.__s(t, ["source", "x", "y"], ["num3_png", 62, 10]);
                return t;
            };
            __egretProto__.UIA_sound_i = function () {
                var t = new egret.gui.UIAsset();
                this.UIA_sound = t;
                this.__s(t, ["name", "source", "width", "x", "y"], ["UIA_sound", "dice_set_2_png", 64, 632, 31]);
                return t;
            };
            __egretProto__.UIA_up_i = function () {
                var t = new egret.gui.UIAsset();
                this.UIA_up = t;
                this.__s(t, ["horizontalCenter", "source", "y"], [0, "dice_table_6_png", 0]);
                return t;
            };
            __egretProto__.__10_i = function () {
                var t = {};
                t.label = "null";
                return t;
            };
            __egretProto__.__11_i = function () {
                var t = {};
                t.label = "null";
                return t;
            };
            __egretProto__.__13_i = function () {
                var t = new egret.gui.ArrayCollection();
                t.source = [this.__3_i(), this.__4_i(), this.__5_i(), this.__6_i(), this.__7_i(), this.__8_i(), this.__9_i(), this.__10_i(), this.__11_i()];
                return t;
            };
            __egretProto__.__14_i = function () {
                var t = new egret.gui.TileLayout();
                this.__s(t, ["horizontalGap", "requestedColumnCount", "requestedRowCount", "verticalGap"], [164, 3, 3, 80]);
                return t;
            };
            __egretProto__.__15_i = function () {
                var t = new egret.gui.UIAsset();
                this.__s(t, ["source", "x", "y"], ["mutiple_sign_png", 122, 20]);
                return t;
            };
            __egretProto__.__16_i = function () {
                var t = new egret.gui.BasicLayout();
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
            __egretProto__.__20_i = function () {
                var t = {};
                t.label = "null";
                return t;
            };
            __egretProto__.__21_i = function () {
                var t = {};
                t.label = "null";
                return t;
            };
            __egretProto__.__22_i = function () {
                var t = {};
                t.label = "null";
                return t;
            };
            __egretProto__.__23_i = function () {
                var t = {};
                t.label = "null";
                return t;
            };
            __egretProto__.__24_i = function () {
                var t = {};
                t.label = "null";
                return t;
            };
            __egretProto__.__26_i = function () {
                var t = new egret.gui.ArrayCollection();
                t.source = [this.__17_i(), this.__18_i(), this.__19_i(), this.__20_i(), this.__21_i(), this.__22_i(), this.__23_i(), this.__24_i()];
                return t;
            };
            __egretProto__.__27_i = function () {
                var t = new egret.gui.TileLayout();
                this.__s(t, ["requestedColumnCount", "requestedRowCount"], [4, 2]);
                return t;
            };
            __egretProto__.__28_i = function () {
                var t = {};
                t.label = "数据1";
                return t;
            };
            __egretProto__.__29_i = function () {
                var t = {};
                t.label = "数据2";
                return t;
            };
            __egretProto__.__30_i = function () {
                var t = {};
                t.label = "数据3";
                return t;
            };
            __egretProto__.__32_i = function () {
                var t = new egret.gui.ArrayCollection();
                t.source = [this.__28_i(), this.__29_i(), this.__30_i()];
                return t;
            };
            __egretProto__.__33_i = function () {
                var t = new egret.gui.VerticalLayout();
                this.__s(t, ["gap", "paddingTop"], [2, 5]);
                return t;
            };
            __egretProto__.__34_i = function () {
                var t = new egret.gui.VerticalLayout();
                return t;
            };
            __egretProto__.__35_i = function () {
                var t = new egret.gui.Group();
                this.__s(t, ["height", "width"], [108, 262]);
                t.layout = this.__34_i();
                t.elementsContent = [this.list_information_i()];
                return t;
            };
            __egretProto__.__3_i = function () {
                var t = {};
                t.label = "数据1";
                return t;
            };
            __egretProto__.__4_i = function () {
                var t = {};
                t.label = "数据2";
                return t;
            };
            __egretProto__.__5_i = function () {
                var t = {};
                t.label = "数据3";
                return t;
            };
            __egretProto__.__6_i = function () {
                var t = {};
                t.label = "null";
                return t;
            };
            __egretProto__.__7_i = function () {
                var t = {};
                t.label = "null";
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
            __egretProto__.btn_return_i = function () {
                var t = new egret.gui.Button();
                this.btn_return = t;
                this.__s(t, ["label", "left", "name", "skinName", "top", "width"], ["按钮", 24, "btn_return", skins.components.ButtonMeauSkin, 29, 64]);
                return t;
            };
            __egretProto__.group_alarm_i = function () {
                var t = new egret.gui.Group();
                this.group_alarm = t;
                this.__s(t, ["height", "visible", "width", "x", "y"], [84, true, 84, 550, 705]);
                t.elementsContent = [this.UIA_alarm_i(), this.label_alarm_i()];
                return t;
            };
            __egretProto__.group_dialog_i = function () {
                var t = new egret.gui.Group();
                this.group_dialog = t;
                this.__s(t, ["height", "visible", "width", "x", "y"], [158, false, 319, 245, 618]);
                t.layout = this.__16_i();
                t.elementsContent = [this.UIA_dialogbg_i(), this.Group_mini_i()];
                return t;
            };
            __egretProto__.label_alarm_i = function () {
                var t = new egret.gui.Label();
                this.label_alarm = t;
                this.__s(t, ["height", "text", "textAlign", "textColor", "verticalAlign", "width", "x", "y"], [84, "9", "center", 0x000000, "middle", 84, 1, 3]);
                return t;
            };
            __egretProto__.list_avatar_i = function () {
                var t = new egret.gui.List();
                this.list_avatar = t;
                this.__s(t, ["horizontalCenter", "itemRendererSkinName", "y"], [0, skins.components.ItemRendererRoomPlayersSkin, 216]);
                t.dataProvider = this.__26_i();
                t.layout = this.__27_i();
                return t;
            };
            __egretProto__.list_information_i = function () {
                var t = new egret.gui.List();
                this.list_information = t;
                this.__s(t, ["height", "itemRendererSkinName", "x", "y"], [102, skins.components.ItemRendererTransparentSkin, 0, 3]);
                t.layout = this.__33_i();
                t.dataProvider = this.__32_i();
                return t;
            };
            __egretProto__.list_real_players_i = function () {
                var t = new egret.gui.List();
                this.list_real_players = t;
                this.__s(t, ["itemRendererSkinName", "visible", "y"], [skins.components.ItemRendererRoomPlayersSkin, false, 194]);
                t.dataProvider = this.__13_i();
                t.layout = this.__14_i();
                return t;
            };
            __egretProto__.scro_info_i = function () {
                var t = new egret.gui.Scroller();
                this.scro_info = t;
                t.setStyle("textAlign", "center");
                this.__s(t, ["height", "horizontalCenter", "width", "y"], [102, 3, 262, 55]);
                t.viewport = this.__35_i();
                return t;
            };
            __egretProto__.Group_mini_i = function () {
                var t = new egret.gui.Group();
                this.Group_mini = t;
                this.__s(t, ["height", "width", "x", "y"], [95, 268, 44, 33]);
                t.elementsContent = [this.UIA_dialogdice_i(), this.UIA_number_right_i(), this.UIA_number_left_i(), this.__15_i()];
                return t;
            };
            PanelRoomSkin._skinParts = ["list_real_players", "btn_return", "UIA_dialogbg", "UIA_dialogdice", "UIA_number_right", "UIA_number_left", "Group_mini", "group_dialog", "UIA_alarm", "label_alarm", "group_alarm", "UIA_sound", "UIA_game_start", "list_avatar", "UIA_master", "PanelRoomDownUI", "PanelCallUI", "PanelRoomRollUI", "PanelRoomReminderUI", "UIA_up", "list_information", "scro_info", "UIA_hint"];
            return PanelRoomSkin;
        })(egret.gui.Skin);
        panel.PanelRoomSkin = PanelRoomSkin;
        PanelRoomSkin.prototype.__class__ = "skins.panel.PanelRoomSkin";
    })(panel = skins.panel || (skins.panel = {}));
})(skins || (skins = {}));
