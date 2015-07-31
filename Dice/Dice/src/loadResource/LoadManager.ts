module game {
    /**The Resource Management Center*/
    export class LoadManager {
        public mResTarget; string;
        public mFlagProgress: boolean;
        public mFlagSound: boolean;
        private static instance: LoadManager; 
        private mProgressBar: ProgressBar;

        public constructor() {
            this.mResTarget = "";
            this.mFlagProgress = false;
            this.mFlagSound = true;
            this.mProgressBar = new ProgressBar();
        }

        public static getInstance(): LoadManager {
            if (this.instance == null) {
                this.instance = new LoadManager();
            }
            return <LoadManager><any>(this.instance);
        }

        public loadResource(value: string): void
        {
            if (value != "")
            {
                this.mResTarget = value;
                this.mProgressBar.reset();
                GameLayer.getInstance().addChild(this.mProgressBar);

                GameUI.getInstance().visible = false;
                NetCenter.getInstance().selectRate();

                RES.addEventListener(RES.ResourceEvent.GROUP_COMPLETE, this.onResourceLoadComplete, this);
                RES.addEventListener(RES.ResourceEvent.GROUP_LOAD_ERROR, this.onResourceLoadError, this);
                RES.addEventListener(RES.ResourceEvent.GROUP_PROGRESS, this.onResourceProgress, this);
                RES.loadGroup(value);
            }
        }

        private onResourceLoadError(event: RES.ResourceEvent): void {
            console.warn("Group:" + event.groupName + " has failed to load  " + event.itemsLoaded + "  " +event.itemsLoaded + "   target is  " + event.target);
            GameUI.getInstance().alertMag(event.groupName + "error", 1);
            this.onResourceLoadComplete(event);
        }

        private onResourceProgress(event: RES.ResourceEvent): void
        {
            if (event.groupName == this.mResTarget) {

            }

            if (event.groupName == "progress") {
                this.mProgressBar.updateProgress(event.itemsLoaded, event.itemsTotal);
            }
        }

        private onResourceLoadComplete(event: RES.ResourceEvent): void
        {
            if (this.mProgressBar.parent)
            {
                this.mProgressBar.parent.removeChild(this.mProgressBar);
            }

            GameUI.getInstance().visible = true;

            RES.removeEventListener(RES.ResourceEvent.GROUP_COMPLETE, this.onResourceLoadComplete, this);
            RES.removeEventListener(RES.ResourceEvent.GROUP_LOAD_ERROR, this.onResourceLoadError, this);
            RES.removeEventListener(RES.ResourceEvent.GROUP_PROGRESS, this.onResourceProgress, this);        
        }
    }
}