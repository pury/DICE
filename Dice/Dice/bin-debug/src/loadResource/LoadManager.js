var game;
(function (game) {
    /**The Resource Management Center*/
    var LoadManager = (function () {
        function LoadManager() {
            this.mResTarget = "";
            this.mFlagProgress = false;
            this.mFlagSound = true;
            this.mProgressBar = new game.ProgressBar();
        }
        var __egretProto__ = LoadManager.prototype;
        LoadManager.getInstance = function () {
            if (this.instance == null) {
                this.instance = new LoadManager();
            }
            return (this.instance);
        };
        __egretProto__.loadResource = function (value) {
            if (value != "") {
                this.mResTarget = value;
                this.mProgressBar.reset();
                game.GameLayer.getInstance().addChild(this.mProgressBar);
                game.GameUI.getInstance().visible = false;
                game.NetCenter.getInstance().selectRate();
                RES.addEventListener(RES.ResourceEvent.GROUP_COMPLETE, this.onResourceLoadComplete, this);
                RES.addEventListener(RES.ResourceEvent.GROUP_LOAD_ERROR, this.onResourceLoadError, this);
                RES.addEventListener(RES.ResourceEvent.GROUP_PROGRESS, this.onResourceProgress, this);
                RES.loadGroup(value);
            }
        };
        __egretProto__.onResourceLoadError = function (event) {
            console.warn("Group:" + event.groupName + " has failed to load  " + event.itemsLoaded + "  " + event.itemsLoaded + "   target is  " + event.target);
            game.GameUI.getInstance().alertMag(event.groupName + "error", 1);
            this.onResourceLoadComplete(event);
        };
        __egretProto__.onResourceProgress = function (event) {
            if (event.groupName == this.mResTarget) {
            }
            if (event.groupName == "progress") {
                this.mProgressBar.updateProgress(event.itemsLoaded, event.itemsTotal);
            }
        };
        __egretProto__.onResourceLoadComplete = function (event) {
            if (this.mProgressBar.parent) {
                this.mProgressBar.parent.removeChild(this.mProgressBar);
            }
            game.GameUI.getInstance().visible = true;
            RES.removeEventListener(RES.ResourceEvent.GROUP_COMPLETE, this.onResourceLoadComplete, this);
            RES.removeEventListener(RES.ResourceEvent.GROUP_LOAD_ERROR, this.onResourceLoadError, this);
            RES.removeEventListener(RES.ResourceEvent.GROUP_PROGRESS, this.onResourceProgress, this);
        };
        return LoadManager;
    })();
    game.LoadManager = LoadManager;
    LoadManager.prototype.__class__ = "game.LoadManager";
})(game || (game = {}));
