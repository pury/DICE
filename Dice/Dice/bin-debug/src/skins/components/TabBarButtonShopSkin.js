var skins;
(function (skins) {
    var components;
    (function (components) {
        var TabBarButtonShopSkin = (function (_super) {
            __extends(TabBarButtonShopSkin, _super);
            function TabBarButtonShopSkin() {
                _super.call(this);
                this.__s = egret.gui.setProperties;
                this.__s(this, ["height", "minWidth"], [60, 140]);
                this.elementsContent = [this.__7_i(), this.UIA_id_i()];
                this.states = [
                    new egret.gui.State("up", []),
                    new egret.gui.State("down", [
                        new egret.gui.SetProperty("__7", "source", "dice_shop_1_png")
                    ]),
                    new egret.gui.State("disabled", [
                        new egret.gui.SetProperty("__7", "source", "dice_shop_1_png")
                    ]),
                    new egret.gui.State("upAndSelected", [
                        new egret.gui.SetProperty("__7", "source", "dice_shop_1_png")
                    ]),
                    new egret.gui.State("downAndSelected", [
                        new egret.gui.SetProperty("__7", "source", "dice_shop_1_png")
                    ]),
                    new egret.gui.State("disabledAndSelected", [
                        new egret.gui.SetProperty("__7", "source", "dice_shop_1_png")
                    ])
                ];
            }
            var __egretProto__ = TabBarButtonShopSkin.prototype;
            Object.defineProperty(__egretProto__, "skinParts", {
                get: function () {
                    return TabBarButtonShopSkin._skinParts;
                },
                enumerable: true,
                configurable: true
            });
            __egretProto__.__7_i = function () {
                var t = new egret.gui.UIAsset();
                this.__7 = t;
                this.__s(t, ["percentHeight", "source", "percentWidth"], [100, "dice_shop_2_png", 100]);
                return t;
            };
            __egretProto__.UIA_id_i = function () {
                var t = new egret.gui.UIAsset();
                this.UIA_id = t;
                this.__s(t, ["horizontalCenter", "source", "verticalCenter"], [0, "dice_shop_9_png", 0]);
                return t;
            };
            TabBarButtonShopSkin._skinParts = ["UIA_id"];
            return TabBarButtonShopSkin;
        })(egret.gui.Skin);
        components.TabBarButtonShopSkin = TabBarButtonShopSkin;
        TabBarButtonShopSkin.prototype.__class__ = "skins.components.TabBarButtonShopSkin";
    })(components = skins.components || (skins.components = {}));
})(skins || (skins = {}));
