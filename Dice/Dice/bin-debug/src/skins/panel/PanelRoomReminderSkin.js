var skins;
(function (skins) {
    var panel;
    (function (panel) {
        var PanelRoomReminderSkin = (function (_super) {
            __extends(PanelRoomReminderSkin, _super);
            function PanelRoomReminderSkin() {
                _super.call(this);
                this.__s = egret.gui.setProperties;
                this.__s(this, ["height", "width"], [385, 720]);
                this.elementsContent = [this.UIA_BG_i(), this.__3_i(), this.label_reminder_i()];
                this.states = [
                    new egret.gui.State("normal", []),
                    new egret.gui.State("disabled", [
                        new egret.gui.SetProperty("", "height", 295)
                    ])
                ];
            }
            var __egretProto__ = PanelRoomReminderSkin.prototype;
            Object.defineProperty(__egretProto__, "skinParts", {
                get: function () {
                    return PanelRoomReminderSkin._skinParts;
                },
                enumerable: true,
                configurable: true
            });
            __egretProto__.__3_i = function () {
                var t = new egret.gui.UIAsset();
                this.__s(t, ["horizontalCenter", "source", "y"], [0, "dice_table_14_png", 53]);
                return t;
            };
            __egretProto__.label_reminder_i = function () {
                var t = new egret.gui.Label();
                this.label_reminder = t;
                this.__s(t, ["horizontalCenter", "size", "text", "textAlign", "y"], [0, 80, "10", "center", 216]);
                return t;
            };
            __egretProto__.UIA_BG_i = function () {
                var t = new egret.gui.UIAsset();
                this.UIA_BG = t;
                this.__s(t, ["height", "source", "x", "y"], [385, "black_bg_png", 0, 0]);
                return t;
            };
            PanelRoomReminderSkin._skinParts = ["UIA_BG", "label_reminder"];
            return PanelRoomReminderSkin;
        })(egret.gui.Skin);
        panel.PanelRoomReminderSkin = PanelRoomReminderSkin;
        PanelRoomReminderSkin.prototype.__class__ = "skins.panel.PanelRoomReminderSkin";
    })(panel = skins.panel || (skins.panel = {}));
})(skins || (skins = {}));
