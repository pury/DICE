var skins;
(function (skins) {
    var panel;
    (function (panel) {
        var PanelRoomRollSkin = (function (_super) {
            __extends(PanelRoomRollSkin, _super);
            function PanelRoomRollSkin() {
                _super.call(this);
                this.__s = egret.gui.setProperties;
                this.width = 720;
                this.elementsContent = [this.UIA_roll_bg_i(), this.list_dice_i(), this.UIA_roll_no_i(), this.UIA_roll_ok_i(), this.label_reminder_i()];
                this.states = [
                    new egret.gui.State("normal", []),
                    new egret.gui.State("disabled", [
                        new egret.gui.SetProperty("", "height", 295)
                    ])
                ];
            }
            var __egretProto__ = PanelRoomRollSkin.prototype;
            Object.defineProperty(__egretProto__, "skinParts", {
                get: function () {
                    return PanelRoomRollSkin._skinParts;
                },
                enumerable: true,
                configurable: true
            });
            __egretProto__.UIA_roll_no_i = function () {
                var t = new egret.gui.UIAsset();
                this.UIA_roll_no = t;
                this.__s(t, ["name", "source", "x", "y"], ["UIA_roll_no", "dice_btn_2_png", 49, 271]);
                return t;
            };
            __egretProto__.UIA_roll_ok_i = function () {
                var t = new egret.gui.UIAsset();
                this.UIA_roll_ok = t;
                this.__s(t, ["name", "source", "x", "y"], ["UIA_roll_ok", "dice_btn_1_png", 410, 271]);
                return t;
            };
            __egretProto__.__10_i = function () {
                var t = new egret.gui.HorizontalLayout();
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
            __egretProto__.__9_i = function () {
                var t = new egret.gui.ArrayCollection();
                t.source = [this.__3_i(), this.__4_i(), this.__5_i(), this.__6_i(), this.__7_i()];
                return t;
            };
            __egretProto__.label_reminder_i = function () {
                var t = new egret.gui.Label();
                this.label_reminder = t;
                this.__s(t, ["horizontalCenter", "size", "text", "textAlign", "y"], [0, 80, "10", "center", 173]);
                return t;
            };
            __egretProto__.list_dice_i = function () {
                var t = new egret.gui.List();
                this.list_dice = t;
                this.__s(t, ["horizontalCenter", "itemRendererSkinName", "y"], [0, skins.components.ItemRendererDiceSkin, 27]);
                t.layout = this.__10_i();
                t.dataProvider = this.__9_i();
                return t;
            };
            __egretProto__.UIA_roll_bg_i = function () {
                var t = new egret.gui.UIAsset();
                this.UIA_roll_bg = t;
                this.__s(t, ["height", "source", "x", "y"], [385, "black_bg_png", 0, 0]);
                return t;
            };
            PanelRoomRollSkin._skinParts = ["UIA_roll_bg", "list_dice", "UIA_roll_no", "UIA_roll_ok", "label_reminder"];
            return PanelRoomRollSkin;
        })(egret.gui.Skin);
        panel.PanelRoomRollSkin = PanelRoomRollSkin;
        PanelRoomRollSkin.prototype.__class__ = "skins.panel.PanelRoomRollSkin";
    })(panel = skins.panel || (skins.panel = {}));
})(skins || (skins = {}));
