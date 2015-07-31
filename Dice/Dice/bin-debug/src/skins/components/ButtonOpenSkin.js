var skins;
(function (skins) {
    var components;
    (function (components) {
        var ButtonOpenSkin = (function (_super) {
            __extends(ButtonOpenSkin, _super);
            function ButtonOpenSkin() {
                _super.call(this);
                this.__s = egret.gui.setProperties;
                this.elementsContent = [];
                this.__3_i();
                this.__4_i();
                this.states = [
                    new egret.gui.State("up", [
                        new egret.gui.AddItems("__3", "", "last", "")
                    ]),
                    new egret.gui.State("down", [
                        new egret.gui.AddItems("__4", "", "last", "")
                    ])
                ];
            }
            var __egretProto__ = ButtonOpenSkin.prototype;
            __egretProto__.__3_i = function () {
                var t = new egret.gui.UIAsset();
                this.__3 = t;
                this.__s(t, ["source", "x", "y"], ["dice_room_1_png", 0, 0]);
                return t;
            };
            __egretProto__.__4_i = function () {
                var t = new egret.gui.UIAsset();
                this.__4 = t;
                this.__s(t, ["source", "x", "y"], ["dice_room_2_png", 0, 0]);
                return t;
            };
            return ButtonOpenSkin;
        })(egret.gui.Skin);
        components.ButtonOpenSkin = ButtonOpenSkin;
        ButtonOpenSkin.prototype.__class__ = "skins.components.ButtonOpenSkin";
    })(components = skins.components || (skins.components = {}));
})(skins || (skins = {}));
