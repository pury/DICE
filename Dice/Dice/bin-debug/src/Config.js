var game;
(function (game) {
    var Config = (function () {
        function Config() {
            this.StageWidth = 0;
            this.StageHeight = 0;
        }
        var __egretProto__ = Config.prototype;
        Config.getInstance = function () {
            if (this.instance == null) {
                this.instance = new Config();
            }
            return (this.instance);
        };
        return Config;
    })();
    game.Config = Config;
    Config.prototype.__class__ = "game.Config";
})(game || (game = {}));
