var game;
(function (game) {
    /**panel flag -- open or close.*/
    var NetPanel = (function () {
        function NetPanel() {
            this.mPanelLogin = false;
            this.mPanelRegister = false;
            this.mPanelRate = false;
            this.mPanelRoom = false;
            this.mPanelSet = false;
            this.mPanelHelp = false;
            this.mPanelMoreGames = false;
            this.mPanelResult = false;
            this.mPanelRole = false;
        }
        var __egretProto__ = NetPanel.prototype;
        return NetPanel;
    })();
    game.NetPanel = NetPanel;
    NetPanel.prototype.__class__ = "game.NetPanel";
})(game || (game = {}));
