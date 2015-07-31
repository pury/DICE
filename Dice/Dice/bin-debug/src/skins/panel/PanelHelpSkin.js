var skins;
(function (skins) {
    var panel;
    (function (panel) {
        var PanelHelpSkin = (function (_super) {
            __extends(PanelHelpSkin, _super);
            function PanelHelpSkin() {
                _super.call(this);
                this.__s = egret.gui.setProperties;
                this.__s(this, ["height", "width"], [1280, 720]);
                this.elementsContent = [this.__3_i(), this.__4_i(), this.__5_i(), this.__6_i(), this.__7_i(), this.__8_i(), this.UIA_back_i()];
                this.states = [
                    new egret.gui.State("normal", []),
                    new egret.gui.State("disabled", [])
                ];
            }
            var __egretProto__ = PanelHelpSkin.prototype;
            Object.defineProperty(__egretProto__, "skinParts", {
                get: function () {
                    return PanelHelpSkin._skinParts;
                },
                enumerable: true,
                configurable: true
            });
            __egretProto__.__3_i = function () {
                var t = new egret.gui.UIAsset();
                this.__s(t, ["horizontalCenter", "source", "y"], [0.5, "dice_table_22_png", 159]);
                return t;
            };
            __egretProto__.__4_i = function () {
                var t = new egret.gui.UIAsset();
                this.__s(t, ["horizontalCenter", "source", "y"], [0, "extra_win_bg_white_png", 231]);
                return t;
            };
            __egretProto__.__5_i = function () {
                var t = new egret.gui.UIAsset();
                this.__s(t, ["horizontalCenter", "source", "y"], [0, "extra_help_png", 173]);
                return t;
            };
            __egretProto__.__6_i = function () {
                var t = new egret.gui.Label();
                this.__s(t, ["fontFamily", "horizontalCenter", "lineSpacing", "size", "text", "textColor", "verticalCenter", "width"], ["黑体", -4, 10, 26, "    游戏流程：1. 首位进入房间的玩家成为庄家，人数达到2-8人后，庄家可以开始游戏。2. 游戏开始后，玩家通过摇动手机来转动骰子，当所有人确定骰子后，从庄家开始叫点。", 0x000000, -286.5, 506]);
                return t;
            };
            __egretProto__.__7_i = function () {
                var t = new egret.gui.Label();
                this.__s(t, ["fontFamily", "lineSpacing", "size", "text", "textColor", "verticalCenter", "width", "x"], ["黑体", 10, 26, "    游戏规则：1.庄家叫点无限制2.后续叫点的玩家，叫骰子的个数不能小于上家。当叫点的个数一样时，点数必须超过上家；当叫的个数大于上家时，点数无限制。3.当玩家不相信上家叫点时，可以选择“开”，让系统判定输赢4.当没有玩家叫过点数“1”时，“1”可作为赖子充当任意点数。骰子后，从庄家开始叫点。", 0x000000, -42.5, 506, 101]);
                return t;
            };
            __egretProto__.__8_i = function () {
                var t = new egret.gui.Label();
                this.__s(t, ["fontFamily", "horizontalCenter", "lineSpacing", "size", "text", "textColor", "verticalCenter", "width", "x"], ["黑体", 1, 10, 26, "    举例：场上无人叫过“1”，玩家甲叫4个“2”，玩家乙不信选择“开”，开出3个“2”、2个“1”，系统判定场上有5个“2”，玩家甲是正确的，所以甲获得了胜利。", 0x000000, 180.5, 506, 20]);
                return t;
            };
            __egretProto__.UIA_back_i = function () {
                var t = new egret.gui.UIAsset();
                this.UIA_back = t;
                this.__s(t, ["horizontalCenter", "name", "source", "y"], [0, "btn_close", "dice_btn_4_png", 961]);
                return t;
            };
            PanelHelpSkin._skinParts = ["UIA_back"];
            return PanelHelpSkin;
        })(egret.gui.Skin);
        panel.PanelHelpSkin = PanelHelpSkin;
        PanelHelpSkin.prototype.__class__ = "skins.panel.PanelHelpSkin";
    })(panel = skins.panel || (skins.panel = {}));
})(skins || (skins = {}));
