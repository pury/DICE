//class SkinAdapter implements egret.gui.ISkinAdapter {
//    public getSkin(skinName: any, hostComponentKey: string): any{
//        if (!skinName)
//            return null;
//        if (skinName.prototype) {
//            return new skinName();
//        }
//        else if (typeof (skinName) == "string") {
//            var clazz = egret.getDefinitionByName(skinName);
//            if (clazz) {
//                return new clazz();
//            }
//            else {
//                return null;
//            }
//        }
//        else {
//            return skinName;
//        }
//    }
//} 
var SkinAdapter = (function () {
    /**
     * 构造函数
     * @method egret.gui.DefaultSkinAdapter#constructor
     */
    function SkinAdapter() {
    }
    var __egretProto__ = SkinAdapter.prototype;
    /**
     * 获取皮肤显示对象
     * @method egret.gui.ISkinAdapter#getSkin
     * @param skinName {any} 待解析的皮肤标识符
     * @param hostComponentKey {string} 主机组件标识符
     * @returns {any} 皮肤对象实例
     */
    __egretProto__.getSkin = function (skinName, hostComponentKey) {
        if (skinName) {
            if (skinName.prototype) {
                return new skinName();
            }
            else if (typeof (skinName) == "string") {
                var clazz = egret.getDefinitionByName(skinName);
                if (clazz) {
                    return new clazz();
                }
                else {
                    return null;
                }
            }
            else {
                return skinName;
            }
        }
        return this.getDefaultSkin(hostComponentKey);
    };
    __egretProto__.getDefaultSkin = function (hostComponentKey) {
        var skin;
        switch (hostComponentKey) {
        }
        return skin;
    };
    return SkinAdapter;
})();
SkinAdapter.prototype.__class__ = "SkinAdapter";
