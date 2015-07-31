var skins;
(function (skins) {
    var panel;
    (function (panel) {
        var PanelRateSkin = (function (_super) {
            __extends(PanelRateSkin, _super);
            function PanelRateSkin() {
                _super.call(this);
                this.__s = egret.gui.setProperties;
                this.__s(this, ["height", "width"], [1280, 720]);
                this.elementsContent = [this.UIA_loading_i(), this.UIA_bg_i(), this.group_center_i()];
                this.states = [
                    new egret.gui.State("normal", []),
                    new egret.gui.State("disabled", [])
                ];
            }
            var __egretProto__ = PanelRateSkin.prototype;
            Object.defineProperty(__egretProto__, "skinParts", {
                get: function () {
                    return PanelRateSkin._skinParts;
                },
                enumerable: true,
                configurable: true
            });
            __egretProto__.UIA_choose_i = function () {
                var t = new egret.gui.UIAsset();
                this.UIA_choose = t;
                this.__s(t, ["enabled", "name", "source", "x", "y"], [false, "UIA_choose", "dice_mu6_png", 193, 276]);
                return t;
            };
            __egretProto__.UIA_enter_i = function () {
                var t = new egret.gui.UIAsset();
                this.UIA_enter = t;
                this.__s(t, ["horizontalCenter", "name", "source", "y"], [0, "UIA_enter", "dice_btn_1_png", 712]);
                return t;
            };
            __egretProto__.UIA_loading_i = function () {
                var t = new egret.gui.UIAsset();
                this.UIA_loading = t;
                this.__s(t, ["source", "x", "y"], ["loading_bg_png", 0, 0]);
                return t;
            };
            __egretProto__.UIA_mu1_i = function () {
                var t = new egret.gui.UIAsset();
                this.UIA_mu1 = t;
                this.__s(t, ["height", "name", "source", "width", "x", "y"], [224, "UIA_mu1", "dice_mu1_png", 213, 94, 188]);
                return t;
            };
            __egretProto__.UIA_mu2_i = function () {
                var t = new egret.gui.UIAsset();
                this.UIA_mu2 = t;
                this.__s(t, ["height", "name", "source", "width", "x", "y"], [224, "UIA_mu2", "dice_mu2_png", 213, 344, 188]);
                return t;
            };
            __egretProto__.UIA_mu3_i = function () {
                var t = new egret.gui.UIAsset();
                this.UIA_mu3 = t;
                this.__s(t, ["height", "name", "source", "width", "x", "y"], [224, "UIA_mu3", "dice_mu3_png", 213, 94, 439]);
                return t;
            };
            __egretProto__.UIA_mu4_i = function () {
                var t = new egret.gui.UIAsset();
                this.UIA_mu4 = t;
                this.__s(t, ["height", "name", "source", "width", "x", "y"], [224, "UIA_mu4", "dice_mu4_png", 213, 344, 439]);
                return t;
            };
            __egretProto__.__3_i = function () {
                var t = new egret.gui.UIAsset();
                this.__s(t, ["horizontalCenter", "source", "y"], [0, "dice_mu5_png", 6]);
                return t;
            };
            __egretProto__.__4_i = function () {
                var t = new egret.gui.UIAsset();
                this.__s(t, ["source", "x", "y"], ["dice_mu7_png", 190, -24]);
                return t;
            };
            __egretProto__.__5_i = function () {
                var t = new egret.gui.UIAsset();
                this.__s(t, ["horizontalCenter", "source", "y"], [0, "dice_mu8_png", 81]);
                return t;
            };
            __egretProto__.group_center_i = function () {
                var t = new egret.gui.Group();
                this.group_center = t;
                this.__s(t, ["height", "horizontalCenter", "width", "y"], [922, 0, 648, 224]);
                t.elementsContent = [this.__3_i(), this.__4_i(), this.UIA_enter_i(), this.UIA_mu1_i(), this.UIA_mu2_i(), this.UIA_mu3_i(), this.UIA_mu4_i(), this.UIA_choose_i(), this.__5_i()];
                return t;
            };
            __egretProto__.UIA_bg_i = function () {
                var t = new egret.gui.UIAsset();
                this.UIA_bg = t;
                this.__s(t, ["height", "source", "x", "y"], [1280, "black_bg_png", 0, 0]);
                return t;
            };
            PanelRateSkin._skinParts = ["UIA_loading", "UIA_bg", "UIA_enter", "UIA_mu1", "UIA_mu2", "UIA_mu3", "UIA_mu4", "UIA_choose", "group_center"];
            return PanelRateSkin;
        })(egret.gui.Skin);
        panel.PanelRateSkin = PanelRateSkin;
        PanelRateSkin.prototype.__class__ = "skins.panel.PanelRateSkin";
    })(panel = skins.panel || (skins.panel = {}));
})(skins || (skins = {}));
