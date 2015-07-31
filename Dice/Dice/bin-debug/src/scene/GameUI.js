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
var game;
(function (game) {
    /**All panels in this container.*/
    var GameUI = (function (_super) {
        __extends(GameUI, _super);
        function GameUI() {
            _super.call(this);
            this.flag = false;
            this.flagDice = false;
            this.lastX = 0;
            this.lastY = 0;
            this.lastZ = 0;
            this.mHelp = false;
            this.mShake = false;
            this.init();
        }
        var __egretProto__ = GameUI.prototype;
        __egretProto__.init = function () {
            this.panelLogin = new game.PanelLogin();
            this.panelResult = new game.PanelResult();
            this.panelRoom = new game.PanelRoom();
            this.panelSet = new game.PanelSet();
            this.panelRegister = new game.PanelRegister();
            this.panelRole = new game.PanelRole();
            this.panelHelp = new game.PanelHelp();
            this.panelMoreGames = new game.PanelMoreGames();
            this.PanelRate = new game.PanelRate();
            this.panelShop = new game.PanelShop();
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
        };
        __egretProto__.addLogin = function () {
            this.addElement(this.panelLogin);
        };
        __egretProto__.addHelp = function () {
            this.addElement(this.panelHelp);
            this.panelHelp.openPanel();
        };
        GameUI.getInstance = function () {
            if (this.instance == null) {
                this.instance = new GameUI();
            }
            return (this.instance);
        };
        /**
          *@ name: panelname
          *@ value: open or close panel
          *@ flag: true -> removeAllElements
          */
        __egretProto__.manage_panel = function (name, value, flag) {
            if (flag === void 0) { flag = false; }
            var panel = this.ALLPANEL[name];
            if (panel) {
                if (value == "open") {
                    if (name != "panelRegister" && name != "panelLogin") {
                        if (!game.NetCenter.getInstance().NET_FLAG) {
                            return;
                        }
                    }
                    if (flag) {
                        this.removeAllElements();
                    }
                    if (name == "panelRoom") {
                        this.flag = false;
                        if (this.panelRoom) {
                            if (!game.GameLayer.getInstance().mFlagRoom) {
                                this.panelRoom.visible = false;
                            }
                            else {
                                this.panelRoom.visible = true;
                            }
                        }
                    }
                    this.addElement(panel);
                    panel.openPanel();
                    if (name == "panelLogin" || name == "panelRegister") {
                        game.GameLayer.getInstance().setBackGround(1);
                    }
                    if (name == "panelRole") {
                        panel.updateRoleInfo(game.NetCenter.getInstance().mPlayerRole);
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
        };
        __egretProto__.setRoomVisible = function () {
            if (this.panelRoom && this.contains(this.panelRoom)) {
                this.panelRoom.visible = true;
                game.GameLayer.getInstance().setBackGround(2);
            }
        };
        __egretProto__.handleRotation = function (x, y, z) {
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
        };
        __egretProto__.testSound = function () {
            if (this.mDiceTimer == null) {
                game.GameLayer.getInstance().addDice();
                //  SoundManager.getInstance().controlMusic("dice_5", true);
                this.mDiceTimer = new egret.Timer(1000, 2);
                this.mDiceTimer.addEventListener(egret.TimerEvent.TIMER, this.handleDice, this);
                this.mDiceTimer.addEventListener(egret.TimerEvent.TIMER_COMPLETE, this.completeDice, this);
                this.mDiceTimer.start();
            }
        };
        __egretProto__.handleDice = function (e) {
            if (this.panelRoom) {
            }
        };
        __egretProto__.completeDice = function (e) {
            this.mDiceTimer.removeEventListener(egret.TimerEvent.TIMER, this.handleDice, this);
            this.mDiceTimer.removeEventListener(egret.TimerEvent.TIMER_COMPLETE, this.completeDice, this);
            this.mDiceTimer.stop();
            this.mDiceTimer = null;
            game.GameLayer.getInstance().removeDice();
            // SoundManager.getInstance().controlMusic("dice_5", false);
            this.mShake = true;
            game.NetCenter.getInstance().ctsPlayerDices();
        };
        /**alert
          *@ color:0  #FFFFFF   white
          *@ color:1  #EE0000   red
          *@ y:0  this.mAlert.y  down
          *@ y:1  this.mAlert.y  middle
          */
        __egretProto__.alertMag = function (msg, color, cout, y) {
            if (color === void 0) { color = 0; }
            if (cout === void 0) { cout = 3; }
            if (y === void 0) { y = 1; }
            if (this.mAlert == null) {
                this.mAlert = new egret.gui.Label();
            }
            this.mAlert.touchEnabled = false;
            this.mAlert.textColor = color == 1 ? 0xEE0000 : 0xFFFFFF;
            this.mAlert.size = 28;
            this.mAlert.fontFamily = game.ConstString.mFont;
            this.mAlert.horizontalCenter = 0;
            var yy = y == 0 ? (this.stage.stageHeight - 40) : this.stage.stageHeight / 2;
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
        };
        __egretProto__.removeAlertMsg = function (e) {
            this.mAlertTimer.removeEventListener(egret.TimerEvent.TIMER_COMPLETE, this.removeAlertMsg, this);
            if (this.contains(this.mAlert)) {
                this.removeElement(this.mAlert);
            }
            this.mAlert.text = "";
            this.mAlertTimer.stop();
            this.mAlertTimer = null;
        };
        __egretProto__.transformNumber = function (value) {
            var target = "0";
            var m = "";
            if (value < 10000) {
                target = value.toString();
            }
            else if (value >= 10000 && value < 100000000) {
                m = (value % 10000 == 0) ? "" : (value % 10000).toString();
                target = Math.floor(value / 10000) + "万" + m;
            }
            if (value > 100000000) {
                m = (value % 10000 == 0) ? "" : (value % 10000).toString();
                target = Math.floor(value / 100000000) + "亿" + Math.floor(value % 100000000 / 10000) + "万" + m;
            }
            return target;
        };
        __egretProto__.removeAlertMsgDirect = function () {
        };
        /**0-->true  1-->false*/
        __egretProto__.showExchange = function (value) {
            if (this.mUIA_BG == null) {
                this.mUIA_BG = new egret.gui.UIAsset();
                this.mUIA_BG.source = "dice_table_24_png";
            }
            if (this.mUIA_Exchange == null) {
                this.mUIA_Exchange = new egret.gui.UIAsset();
                this.mUIA_Exchange.source = value == 0 ? "dice_shop_13_png" : "dice_shop_14_png";
            }
            this.mUIA_BG.horizontalCenter = this.mUIA_Exchange.horizontalCenter = 0;
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
        };
        __egretProto__.removeShow = function (e) {
            this.mExchangeTimer.removeEventListener(egret.TimerEvent.TIMER_COMPLETE, this.removeShow, this);
            this.mExchangeTimer.stop();
            this.mExchangeTimer = null;
            this.removeElement(this.mUIA_BG);
            this.removeElement(this.mUIA_Exchange);
        };
        __egretProto__.freshSome = function () {
            if (this.contains(this.panelShop)) {
                this.panelShop.freshCoin();
            }
            if (this.panelRoom) {
                this.panelRoom.freshInfo();
            }
        };
        __egretProto__.dest = function () {
            game.NetCenter.getInstance().mLoginRoleFlag = false;
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
        };
        return GameUI;
    })(egret.gui.UIStage);
    game.GameUI = GameUI;
    GameUI.prototype.__class__ = "game.GameUI";
})(game || (game = {}));
