/**
 * Copyright (c) 2014,Egret-Labs.org
 * All rights reserved.
 * Redistribution and use in source and binary forms, with or without
 * modification, are permitted provided that the following conditions are met:
 *
 *     * Redistributions of source code must retain the above copyright
 *       notice, this list of conditions and the following disclaimer.
 *     * Redistributions in binary form must reproduce the above copyright
 *       notice, this list of conditions and the following disclaimer in the
 *       documentation and/or other materials provided with the distribution.
 *     * Neither the name of the Egret-Labs.org nor the
 *       names of its contributors may be used to endorse or promote products
 *       derived from this software without specific prior written permission.
 *
 * THIS SOFTWARE IS PROVIDED BY EGRET-LABS.ORG AND CONTRIBUTORS "AS IS" AND ANY
 * EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED
 * WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE
 * DISCLAIMED. IN NO EVENT SHALL EGRET-LABS.ORG AND CONTRIBUTORS BE LIABLE FOR ANY
 * DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES
 * (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES;
 * LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND
 * ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT
 * (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS
 * SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
 */

module game {
    /**All panels in this container.*/
    export class GameUI extends egret.gui.UIStage {
        private static instance: GameUI; 
        public panelLogin: PanelLogin;
        public panelResult: PanelResult;
        public panelRoom: PanelRoom;
        public panelSet: PanelSet;
        public panelRegister: PanelRegister;
        public panelRole: PanelRole;
        public panelHelp: PanelHelp;
        public panelMoreGames: PanelMoreGames;
        public PanelRate: PanelRate;
        public panelShop: PanelShop;
        public ALLPANEL: Object;
        public flag: boolean = false;
        public flagDice: boolean = false;
        public lastX: number = 0;
        public lastY: number = 0;
        public lastZ: number = 0;
        public mAlert: egret.gui.Label;
        public mAlertTimer: egret.Timer;
        public mDiceTimer: egret.Timer;
        public mExchangeTimer: egret.Timer;
        public mRoleInfo: NetRole;
        public mSetFlag: boolean;
        public mSetType: string;
        public mHelp: boolean = false;
        public mUIA_BG: egret.gui.UIAsset;
        public mUIA_Exchange: egret.gui.UIAsset;
        public mShake: boolean = false;

        public constructor() {
            super();
            this.init();
        }

        private init(): void
        {
            this.panelLogin = new PanelLogin();
            this.panelResult = new PanelResult();
            this.panelRoom = new PanelRoom();
            this.panelSet = new PanelSet();
            this.panelRegister = new PanelRegister();
            this.panelRole = new PanelRole();
            this.panelHelp = new PanelHelp();
            this.panelMoreGames = new PanelMoreGames();
            this.PanelRate = new PanelRate();
            this.panelShop = new PanelShop();
            this.ALLPANEL = new Object();
            this.ALLPANEL["panelLogin"] = this.panelLogin;
            this.ALLPANEL["panelResult"] = this.panelResult;
            this.ALLPANEL["panelRoom"] = this.panelRoom;
            this.ALLPANEL["panelSet"] = this.panelSet;
            this.ALLPANEL["panelRegister"] = this.panelRegister;
            this.ALLPANEL["panelRole"] = this.panelRole;
            this.ALLPANEL["panelHelp"] = this.panelHelp;
            this.ALLPANEL["panelMoreGames"] = this.panelMoreGames;
            this.ALLPANEL["panelRate"] = this.PanelRate;
            this.ALLPANEL["panelShop"] = this.panelShop;
           
            game.NetCenter.getInstance().init();
        }

        public addLogin(): void {
            this.addElement(this.panelLogin);
        }

        public addHelp(): void {
            this.addElement(this.panelHelp);
            this.panelHelp.openPanel();
        }

        public static getInstance():GameUI
        {
            if (this.instance == null)
            {
                this.instance = new GameUI();
            }
            return <GameUI><any>(this.instance);
        }

        /**
          *@ name: panelname
          *@ value: open or close panel
          *@ flag: true -> removeAllElements
          */
        public manage_panel(name: string, value: string,flag:boolean=false): void
        {
            var panel = this.ALLPANEL[name];
            if (panel) {
                if (value == "open") {
                    if (name != "panelRegister" && name != "panelLogin") {
                        if (!NetCenter.getInstance().NET_FLAG) {
                            return;
                        }
                    }
                    if (flag) {
                        this.removeAllElements();
                    }
                    if (name == "panelRoom") {
                        this.flag = false;
                        if (this.panelRoom)
                        { 
                            if (!GameLayer.getInstance().mFlagRoom)
                            {
                                this.panelRoom.visible = false;
                            }
                            else
                            {
                                this.panelRoom.visible = true;
                            }
                        }
                    }
                    this.addElement(panel);
                    panel.openPanel();
                    if (name == "panelLogin" || name == "panelRegister") {
                        GameLayer.getInstance().setBackGround(1);
                    }
                    if (name == "panelRole") {
                        panel.updateRoleInfo(NetCenter.getInstance().mPlayerRole);
                    }
                    if (name == "panelSet") {
                        if (this.mSetType != "") {
                            panel.setWindowType(this.mSetType);
                        }
                    }
                }
                else if (value == "close") {
                    if (this.contains(panel)) {
                        this.removeElement(panel);
                    }
                    if (name == "panelRoom") {
                        this.flag = false;
                    }
                }
            }
        }

        public setRoomVisible(): void {
            if (this.panelRoom && this.contains(this.panelRoom)) {
                this.panelRoom.visible = true;
                GameLayer.getInstance().setBackGround(2);
            }
        }

        public handleRotation(x: number, y: number, z: number): void {
            var self = this;
            if (self.flag) {
               
                if (self.lastX != x || self.lastY != y || self.lastZ != z) {
                    if (Math.abs(self.lastX - x) >= 20 || Math.abs(self.lastX - x) >= 20 || Math.abs(self.lastX - x) >= 20) {
                        //SoundManager.getInstance().controlMusic("dice_5", true);
                        //if (self.mDiceTimer == null) {
                        //    GameLayer.getInstance().addDice();
                        //  //  SoundManager.getInstance().controlMusic("dice_5", true);
                        //    self.mDiceTimer = new egret.Timer(1000, 3);
                        //    self.mDiceTimer.addEventListener(egret.TimerEvent.TIMER,this.handleDice,this);
                        //    self.mDiceTimer.addEventListener(egret.TimerEvent.TIMER_COMPLETE, this.completeDice, this);
                        //    self.mDiceTimer.start();
                        //}
                        this.testSound();
                        self.lastX = x;
                        self.lastY = y;
                        self.lastZ = z;
                    }
                }
           }
        }

        public testSound(): void {
            if (this.mDiceTimer == null) {
                GameLayer.getInstance().addDice();
                //  SoundManager.getInstance().controlMusic("dice_5", true);
                this.mDiceTimer = new egret.Timer(1000, 2);
                this.mDiceTimer.addEventListener(egret.TimerEvent.TIMER, this.handleDice, this);
                this.mDiceTimer.addEventListener(egret.TimerEvent.TIMER_COMPLETE, this.completeDice, this);
                this.mDiceTimer.start();
            }
        }

        private handleDice(e: egret.TimerEvent): void {
            if (this.panelRoom) {
             //   this.panelRoom.handleGetRandomDices();
            }
        }

        private completeDice(e: egret.TimerEvent): void {
            this.mDiceTimer.removeEventListener(egret.TimerEvent.TIMER, this.handleDice, this);
            this.mDiceTimer.removeEventListener(egret.TimerEvent.TIMER_COMPLETE, this.completeDice, this);
            this.mDiceTimer.stop();
            this.mDiceTimer = null;
            GameLayer.getInstance().removeDice();
           // SoundManager.getInstance().controlMusic("dice_5", false);
            this.mShake = true;
            NetCenter.getInstance().ctsPlayerDices();
        }

        /**alert 
          *@ color:0  #FFFFFF   white
          *@ color:1  #EE0000   red
          *@ y:0  this.mAlert.y  down
          *@ y:1  this.mAlert.y  middle
          */
        public alertMag(msg: string, color: number = 0,cout:number = 3,y:number = 1): void {
            if (this.mAlert == null) {
                this.mAlert = new egret.gui.Label();
            } 
            this.mAlert.touchEnabled = false;
            this.mAlert.textColor = color == 1 ? 0xEE0000 : 0xFFFFFF;
            this.mAlert.size = 28;
            this.mAlert.fontFamily = ConstString.mFont;
            this.mAlert.horizontalCenter = 0;
            var yy: number = y == 0 ? (this.stage.stageHeight - 40) : this.stage.stageHeight / 2;
            this.mAlert.y = yy;
            this.mAlert.text = msg;
            this.addElement(this.mAlert);
            if (this.mAlertTimer) {
                this.mAlertTimer.stop();
                this.mAlertTimer = null;
            }
            this.mAlertTimer = new egret.Timer(1000, cout);
            this.mAlertTimer.addEventListener(egret.TimerEvent.TIMER_COMPLETE, this.removeAlertMsg, this);
            this.mAlertTimer.start();
        }
        
        private removeAlertMsg(e: egret.TimerEvent): void {
            this.mAlertTimer.removeEventListener(egret.TimerEvent.TIMER_COMPLETE, this.removeAlertMsg, this);
            if (this.contains(this.mAlert)) {
                this.removeElement(this.mAlert);
            }
            this.mAlert.text = "";
            this.mAlertTimer.stop();
            this.mAlertTimer = null;
        }

        public transformNumber(value:number): string {
            var target: string = "0";
            var m = "";
            if (value < 10000) {
                target = value.toString();
            } else if (value >= 10000 && value < 100000000) {
                m = (value % 10000 == 0) ? "" : (value % 10000).toString();
                target = Math.floor(value / 10000) + "万" + m;
            } if (value > 100000000) {
                m = (value % 10000 == 0) ? "" : (value % 10000).toString();
                target = Math.floor(value / 100000000) + "亿" + Math.floor(value % 100000000 / 10000) + "万" + m;
            }
            return target;
        }

        public removeAlertMsgDirect(): void {

        }

        /**0-->true  1-->false*/
        public showExchange(value): void {
            if (this.mUIA_BG == null) {
                this.mUIA_BG = new egret.gui.UIAsset();
                this.mUIA_BG.source = "dice_table_24_png";
            }
            if (this.mUIA_Exchange == null) {
                this.mUIA_Exchange = new egret.gui.UIAsset();
                this.mUIA_Exchange.source = value == 0 ? "dice_shop_13_png" :"dice_shop_14_png";
            }
            this.mUIA_BG.horizontalCenter= this.mUIA_Exchange.horizontalCenter = 0;
            this.mUIA_BG.verticalCenter = this.mUIA_Exchange.verticalCenter = 0;
            if (this.mExchangeTimer) {
                this.mExchangeTimer.stop();
                this.mExchangeTimer.removeEventListener(egret.TimerEvent.TIMER_COMPLETE, this.removeShow, this);
            }
            this.mExchangeTimer = new egret.Timer(1000, 3);
            this.mExchangeTimer.addEventListener(egret.TimerEvent.TIMER_COMPLETE, this.removeShow, this);
            this.mExchangeTimer.start();
            this.addElement(this.mUIA_BG);
            this.addElement(this.mUIA_Exchange);
        }

        private removeShow(e: egret.TimerEvent): void {
            this.mExchangeTimer.removeEventListener(egret.TimerEvent.TIMER_COMPLETE, this.removeShow, this);
            this.mExchangeTimer.stop();
            this.mExchangeTimer = null;
            this.removeElement(this.mUIA_BG);
            this.removeElement(this.mUIA_Exchange);
        }

        public freshSome(): void {
            if (this.contains(this.panelShop)) {
                this.panelShop.freshCoin();
            }
            if (this.panelRoom) {
                this.panelRoom.freshInfo();
            }
        }

        public dest(): void {
            NetCenter.getInstance().mLoginRoleFlag = false;
            Scut.Net.Instance().close();
           // NetCenter.getInstance().NET_FLAG = false;
            //var panel: any;
            //for (var i in this.ALLPANEL) {
            //    panel = this.ALLPANEL[i];
            //    if (panel.name != "panelLogin") {
            //        try {
            //            panel.destPanel();
            //        }
            //        catch (e) {
            //            console.log("panel is not found!");
            //        }
            //    }
            //}
        }
    }
}