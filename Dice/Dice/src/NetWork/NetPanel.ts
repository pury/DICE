module game {
    /**panel flag -- open or close.*/
    export class NetPanel {
        public mPanelLogin: boolean; 
        public mPanelRegister: boolean; 
        public mPanelRate: boolean; 
        public mPanelRoom: boolean; 
        public mPanelSet: boolean; 
        public mPanelHelp: boolean; 
        public mPanelMoreGames: boolean; 
        public mPanelResult: boolean;
        public mPanelRole: boolean;
        public constructor() {
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
    }
}