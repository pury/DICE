module game {
    export class Config{
        public  StageWidth: number;
        public  StageHeight: number;
        private static instance: Config; 

        public constructor(){
            this.StageWidth = 0;
            this.StageHeight = 0;
        }

        public static getInstance(): Config {
            if (this.instance == null) {
                this.instance = new Config();
            }
            return <Config><any>(this.instance);
        }
    }
} 