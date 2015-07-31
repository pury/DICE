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
    var PanelRoom = (function (_super) {
        __extends(PanelRoom, _super);
        function PanelRoom() {
            _super.call(this);
            this.mMaxDice = 6;
            this.mMaxNum = 9;
            this.DATA_POSITION = [3, 4, 5, 2, 0, 6, 1, 0, 7];
            this.DATA_DIALOG = [6, 3, 0, 1, 2, 5, 8];
            this.mRealPlayers = 0;
            this.mTouchDiceMove = false;
            this.mPOSITION_3 = [[2, 1], [0, 2], [1, 0]];
            this.mPosition = -1;
            this.name = "panelRoom";
            this.mRoomLayout = 2;
            this.mCallDiceFlag = false;
            this.mCallCount = 0;
        }
        var __egretProto__ = PanelRoom.prototype;
        __egretProto__.onAddToStage = function (e) {
            _super.prototype.onAddToStage.call(this, e);
        };
        __egretProto__.createCompleteEvent = function (event) {
            _super.prototype.createCompleteEvent.call(this, event);
            game.NetCenter.getInstance().mTableFlag = true;
        };
        __egretProto__.childrenCreated = function () {
            console.log("create completed!");
        };
        __egretProto__.handleAddStage = function () {
            _super.prototype.handleAddStage.call(this);
            var self = this;
            if (self.height > 0) {
                var scale = (game.Config.getInstance().StageHeight * 9 / 16) / game.Config.getInstance().StageWidth;
                self.scaleY = game.Config.getInstance().StageHeight / self.height;
                self.scaleX = scale;
                self.horizontalCenter = 0;
                self.PanelRoomDownUI.scaleX = 1 / scale;
                var numChild = self.PanelRoomDownUI.numChildren;
                for (var i = 0; i < numChild; i++) {
                    var child = self.PanelRoomDownUI.getChildAt(i);
                    if (child.name != "UIA_bg" && child.name != "UIA_bg_table" && child.name != "UIA_bg_black") {
                        child.scaleX = scale;
                    }
                }
                self.PanelCallUI.UIA_bg_white_select.scaleX = 1 / scale;
                self.PanelCallUI.UIA_bg_white_select.horizontalCenter = 0;
                self.PanelCallUI.UIA_last.scaleX = 1 / scale;
                self.PanelCallUI.UIA_last.horizontalCenter = 0;
                self.PanelRoomRollUI.UIA_roll_bg.scaleX = 1 / scale;
                self.PanelRoomRollUI.UIA_roll_bg.horizontalCenter = 0;
                self.PanelRoomReminderUI.UIA_BG.scaleX = 1 / scale;
                self.PanelRoomReminderUI.UIA_BG.horizontalCenter = 0;
                self.PanelRoomDownUI.horizontalCenter = 0;
                self.btn_return.horizontalCenter = -(self.width / scale - self.btn_return.width - 50) / 2;
                self.UIA_sound.horizontalCenter = (self.width / scale - self.UIA_sound.width - 50) / 2;
                var tile = (self.list_real_players.layout);
                self.mGapW = (game.Config.getInstance().StageWidth - 131 * 3 * scale) / scale / 2;
                self.mGapH = tile.verticalGap;
                tile.horizontalGap = self.mGapW;
                self.list_real_players.horizontalCenter = 0;
            }
            this.init();
        };
        __egretProto__.init = function () {
            var self = this;
            self.mNumSlide = new Slide();
            self.mNumSlide2 = new Slide();
            self.mDiceSlide = new Slide();
            self.mTimerNum = new egret.Timer(50);
            self.mTimerNum2 = new egret.Timer(50);
            self.mTimerDice = new egret.Timer(50);
            self.mCollect = new egret.gui.ArrayCollection([]);
            self.mAvatarCollection = new egret.gui.ArrayCollection([]);
            self.mAvatarCollectionReal = new egret.gui.ArrayCollection([]);
            self.mDiceCollection = new egret.gui.ArrayCollection([]);
            self.list_information.dataProvider = self.mCollect;
            self.list_avatar.dataProvider = self.mAvatarCollection;
            self.list_real_players.dataProvider = self.mAvatarCollectionReal;
            self.PanelRoomRollUI.list_dice.dataProvider = self.mDiceCollection;
            self.PanelRoomDownUI.list_dice.dataProvider = self.mDiceCollection;
            self.PanelRoomRollUI.list_dice.itemRenderer = new egret.gui.ClassFactory(game.ItemRenderDice);
            self.PanelRoomDownUI.list_dice.itemRenderer = new egret.gui.ClassFactory(game.ItemRenderDice);
            self.PanelCallUI.list_call_num1.itemRenderer = new egret.gui.ClassFactory(game.ItemRenderNumber);
            self.PanelCallUI.list_call_num2.itemRenderer = new egret.gui.ClassFactory(game.ItemRenderNumber);
            self.PanelCallUI.list_call_selectdice.itemRenderer = new egret.gui.ClassFactory(game.ItemRenderSelectDice);
            self.list_information.itemRenderer = new egret.gui.ClassFactory(game.ItemRenderTransparent);
            self.list_avatar.itemRenderer = new egret.gui.ClassFactory(game.ItemRenderAvatar);
            self.list_real_players.itemRenderer = new egret.gui.ClassFactory(game.ItemRenderAvatar);
            self.handleSelect(4, self.PanelCallUI.list_call_num1, 0);
            self.handleSelect(self.mMaxNum, self.PanelCallUI.list_call_num2, 0);
            self.handleSelect(self.mMaxDice, self.PanelCallUI.list_call_selectdice, 1);
            self.handleGetRandomDices();
            self.handleRoomPlayer();
            self.addEventListener(egret.TouchEvent.TOUCH_TAP, self.handleTouchTap, self);
            self.list_avatar.dataGroup.addEventListener(egret.TouchEvent.TOUCH_TAP, self.handleAvatar, self);
            self.PanelCallUI.list_call_selectdice.dataGroup.addEventListener(egret.TouchEvent.TOUCH_TAP, self.handleSelectDice, self);
            self.PanelCallUI.list_call_num1.dataGroup.addEventListener(egret.TouchEvent.TOUCH_TAP, self.handleSelectNum, self);
            self.PanelCallUI.list_call_num2.dataGroup.addEventListener(egret.TouchEvent.TOUCH_TAP, self.handleSelectNum2, self);
            self.PanelCallUI.scro_dice.addEventListener(egret.TouchEvent.TOUCH_END, self.handleTouchEnd, self);
            self.PanelCallUI.scro_dice.addEventListener(egret.TouchEvent.TOUCH_RELEASE_OUTSIDE, self.handleTouchEnd, self);
            self.PanelCallUI.scro_num1.addEventListener(egret.TouchEvent.TOUCH_END, self.handleTouchEndNum, self);
            self.PanelCallUI.scro_num1.addEventListener(egret.TouchEvent.TOUCH_RELEASE_OUTSIDE, self.handleTouchEndNum, self);
            self.PanelCallUI.scro_num2.addEventListener(egret.TouchEvent.TOUCH_END, self.handleTouchEndNum2, self);
            self.PanelCallUI.scro_num2.addEventListener(egret.TouchEvent.TOUCH_RELEASE_OUTSIDE, self.handleTouchEndNum2, self);
            game.NetCenter.getInstance().addEventListener(game.NetEvent.EVENT_ROOMPLAYER, self.handleRoom, self);
            game.NetCenter.getInstance().addEventListener(game.NetEvent.EVENT_START, self.handleStart, self);
            game.NetCenter.getInstance().addEventListener(game.NetEvent.EVENT_PLAYERDICES, self.handlePlayerDices, self);
            game.NetCenter.getInstance().addEventListener(game.NetEvent.EVENT_CALLDICE, self.handleCallDice, self);
            game.NetCenter.getInstance().addEventListener(game.NetEvent.EVENT_CALLEND, self.handleCallEnd, self);
            self.list_avatar.cacheAsBitmap = true;
            self.list_real_players.cacheAsBitmap = true;
            self.PanelRoomDownUI.list_dice.cacheAsBitmap = true;
            self.PanelCallUI.list_call_num1.cacheAsBitmap = true;
            self.PanelCallUI.list_call_num2.cacheAsBitmap = true;
            self.PanelCallUI.list_call_selectdice.cacheAsBitmap = true;
            // self.list_selectdice.cacheAsBitmap = true;
            self.PanelRoomDownUI.cacheAsBitmap = true;
            //self.PanelCallUI.list_call_num1.cacheAsBitmap = true;
            //self.PanelCallUI.list_call_num2.cacheAsBitmap = true;
            //self.PanelCallUI.list_call_selectdice.cacheAsBitmap = true;
            //this.PanelCallUI.visible = true;
            self.UIA_master.visible = self.list_real_players.visible = false;
            //self.UIA_cup_cup.visible = false;
            self.PanelRoomDownUI.UIA_bg_black.visible = false;
            self.group_alarm.visible = false;
            //self.UIA_hint.visible = false;
            self.UIA_sound.source = game.NetCenter.getInstance().mMusicFlag ? "dice_set_2_png" : "dice_set_3_png";
        };
        PanelRoom.getInstance = function () {
            if (this.instance == null) {
                this.instance = new PanelRoom();
            }
            return (this.instance);
        };
        __egretProto__.freshInfo = function () {
            if (this.PanelRoomDownUI && this.PanelRoomDownUI.label_id && this.PanelRoomDownUI.label_coin && this.PanelRoomDownUI.label_gift) {
                this.PanelRoomDownUI.label_id.text = game.NetCenter.getInstance().mRole.mName;
                this.PanelRoomDownUI.label_coin.text = game.GameUI.getInstance().transformNumber(game.NetCenter.getInstance().mRole.mCoin);
                this.PanelRoomDownUI.label_gift.text = game.GameUI.getInstance().transformNumber(game.NetCenter.getInstance().mRole.mGift);
            }
        };
        __egretProto__.openPanel = function () {
            if (this.UIA_sound) {
                this.UIA_sound.source = game.NetCenter.getInstance().mMusicFlag ? "dice_set_2_png" : "dice_set_3_png";
            }
            if (this.PanelRoomDownUI && this.PanelRoomDownUI.label_rate) {
                this.PanelRoomDownUI.label_rate.text = "当前倍率：" + game.NetCenter.getInstance().mRate.toString();
                this.PanelRoomDownUI.label_id.text = game.NetCenter.getInstance().mRole.mName;
                this.PanelRoomDownUI.label_coin.text = game.GameUI.getInstance().transformNumber(game.NetCenter.getInstance().mRole.mCoin);
                this.PanelRoomDownUI.label_gift.text = game.GameUI.getInstance().transformNumber(game.NetCenter.getInstance().mRole.mGift);
            }
        };
        __egretProto__.resetStates = function () {
            if (this.mCollect) {
                this.mCollect.removeAll();
                this.mCollect.refresh();
            }
            if (this.mAlarmTimer) {
                this.mAlarmTimer.removeEventListener(egret.TimerEvent.TIMER, this.handleAlarmPro, this);
                this.mAlarmTimer.removeEventListener(egret.TimerEvent.TIMER_COMPLETE, this.handleAlarmCom, this);
                this.mAlarmTimer.stop();
                this.mAlarmCount = 0;
                this.mAlarmTimer = null;
                this.group_alarm.visible = false;
            }
            if (this.list_avatar) {
                this.list_avatar.visible = true;
            }
            if (this.UIA_master) {
                this.UIA_master.visible = false;
            }
            if (this.list_real_players) {
                this.list_real_players.visible = false;
            }
            game.SoundManager.getInstance().controlMusic("dice_5", false);
            if (this.mDiceCollection) {
                this.handleGetRandomDices();
            }
            if (this.UIA_hint) {
                this.UIA_hint.source = "dice_table_12_png";
            }
            game.GameLayer.getInstance().removeCup();
        };
        __egretProto__.handlePlayerDices = function (e) {
            var param = e.mParam;
            if (param.Dices && param.Dices.length == 5) {
                this.mDiceCollection.removeAll();
                for (var i = 0; i < param.Dices.length; i++) {
                    this.mDiceCollection.addItem({ name: param.Dices.charAt(i) });
                    this.mDiceCollection.refresh();
                }
                this.PanelRoomReminderUI.visible = false;
                if (game.GameUI.getInstance().mShake) {
                    game.GameUI.getInstance().mShake = false;
                    this.PanelRoomRollUI.visible = this.mCallDiceFlag ? false : true;
                }
                else {
                    this.PanelRoomRollUI.visible = false;
                }
                game.GameUI.getInstance().flag = false;
            }
        };
        __egretProto__.handleCallDice = function (e) {
            game.NetCenter.getInstance().mCallDiceFlag = true;
            var param = e.mParam;
            if (param) {
                var nickname = param.NickName.length > 6 ? param.NickName.substr(0, 5) : param.NickName;
                var content = nickname + game.ConstString.mCall + param.Count + game.ConstString.mNumber + param.Point + game.ConstString.mCount;
                if (this.mCollect) {
                    this.mCollect.addItem({ name: content });
                    if (this.mCollect.length > 8) {
                        this.mCollect.removeItemAt(0);
                    }
                    this.mCollect.refresh();
                    if (this.mCollect.length > 3) {
                        this.list_information.validateNow();
                        this.list_information.dataGroup.verticalScrollPosition = this.list_information.dataGroup.contentHeight - this.list_information.height;
                    }
                }
                var posDialog = this.getCurrentPosition(param.Position);
                var posClock = this.getCurrentPosition(param.NextPostion);
                if (posDialog != 7) {
                    this.attachmDialogTimer(param.Count, param.Point, posDialog);
                }
                if (param.NextPostion != game.NetCenter.getInstance().mRole.mPos) {
                    this.exchangeHigh(param.NextPostion);
                }
                this.attachAlarmClock(posClock);
                this.PanelCallUI.UIA_last_point.source = "dice" + param.Point + "_png";
                this.manageLastCount(this.PanelCallUI, param.Count);
                this.PanelCallUI.visible = this.PanelRoomDownUI.UIA_bg_black.visible = param.NextPostion == game.NetCenter.getInstance().mRole.mPos ? true : false;
                if (this.PanelCallUI.visible) {
                    this.manageRaminder(0);
                    this.PanelCallUI.group_last.visible = true;
                    this.PanelCallUI.UIA_last.visible = true;
                }
                this.UIA_hint.visible = !this.PanelCallUI.visible;
                var dice_height = this.PanelCallUI.list_call_selectdice.height / this.PanelCallUI.list_call_selectdice.dataProvider.length;
                var num1_height = this.PanelCallUI.list_call_num1.height / this.PanelCallUI.list_call_num1.dataProvider.length;
                var num2_height = this.PanelCallUI.list_call_num2.height / this.PanelCallUI.list_call_num2.dataProvider.length;
                var aa = 0;
                var bb = 0;
                var cc = 0;
                if (param.Point >= 6 && param.Count >= 40) {
                    return;
                }
                if (param.Point < 6) {
                    aa = param.Point + 1;
                    bb = Math.floor(param.Count / 10);
                    cc = param.Count % 10;
                }
                else {
                    aa = 1;
                    bb = Math.floor((param.Count + 1) / 10);
                    cc = (param.Count + 1) % 10;
                }
                this.PanelCallUI.scro_dice.throwVertically((aa - 1) * dice_height, 40);
                this.PanelCallUI.scro_num1.throwVertically(bb * num1_height, 40);
                this.PanelCallUI.scro_num2.throwVertically(cc * num2_height, 40);
                game.NetCenter.getInstance().mRole.mCallDice[0] = aa;
                game.NetCenter.getInstance().mRole.mCallDice[1] = bb;
                game.NetCenter.getInstance().mRole.mCallDice[2] = cc;
            }
        };
        __egretProto__.getCurrentPosition = function (value) {
            var pos = 7;
            var len = game.NetCenter.getInstance().mRoomRealPlayers.length;
            var my = game.NetCenter.getInstance().mRole.mPos;
            if (value == my) {
                return 7;
            }
            var index = 0;
            for (var target in this.mAvatarCollectionReal.source) {
                if (this.mAvatarCollectionReal.source[target].DDposition == value) {
                    index = target;
                }
            }
            return index;
        };
        __egretProto__.attachmDialogTimer = function (value, value2, pos) {
            var self = this;
            self.group_dialog.visible = true;
            self.handleAdjustDialog(value, value2, pos);
            if (self.mDialogTimer) {
                self.mDialogTimer.removeEventListener(egret.TimerEvent.TIMER_COMPLETE, this.handleAlarmCom, this);
                this.mDialogTimer.stop();
            }
            self.mDialogTimer = new egret.Timer(1000, 3);
            self.mDialogTimer.addEventListener(egret.TimerEvent.TIMER_COMPLETE, this.handleDialogCom, this);
            self.mDialogTimer.start();
        };
        __egretProto__.handleDialogCom = function (e) {
            this.mDialogTimer.removeEventListener(egret.TimerEvent.TIMER_COMPLETE, this.handleDialogCom, this);
            this.mDialogTimer.stop();
            this.mDialogTimer = null;
            this.group_dialog.visible = false;
        };
        /**other players*/
        __egretProto__.attachAlarmClock = function (pos) {
            var self = this;
            self.group_alarm.visible = true;
            self.label_alarm.text = "20";
            self.handleAdjustAlarm(pos);
            self.mAlarmCount = 20;
            self.PanelCallUI.label_pro.text = "20";
            self.PanelCallUI.UIA_pro.width = 323;
            if (self.mAlarmTimer) {
                self.mAlarmTimer.removeEventListener(egret.TimerEvent.TIMER, this.handleAlarmPro, this);
                self.mAlarmTimer.removeEventListener(egret.TimerEvent.TIMER_COMPLETE, this.handleAlarmCom, this);
                this.mAlarmTimer.stop();
            }
            self.mAlarmTimer = new egret.Timer(1000, 20);
            self.mAlarmTimer.addEventListener(egret.TimerEvent.TIMER, this.handleAlarmPro, this);
            self.mAlarmTimer.addEventListener(egret.TimerEvent.TIMER_COMPLETE, this.handleAlarmCom, this);
            self.mAlarmTimer.start();
        };
        __egretProto__.handleAlarmPro = function (e) {
            this.mAlarmCount--;
            if (this.mAlarmCount >= 0) {
                this.PanelCallUI.UIA_pro.width = 323 * this.mAlarmCount / 20;
                this.PanelCallUI.label_pro.text = this.label_alarm.text = this.mAlarmCount.toString();
            }
        };
        __egretProto__.handleAlarmCom = function (e) {
            this.mAlarmTimer.removeEventListener(egret.TimerEvent.TIMER, this.handleAlarmPro, this);
            this.mAlarmTimer.removeEventListener(egret.TimerEvent.TIMER_COMPLETE, this.handleAlarmCom, this);
            this.mAlarmTimer.stop();
            this.mAlarmCount = 0;
            this.mAlarmTimer = null;
            this.group_alarm.visible = false;
        };
        __egretProto__.handleStart = function (e) {
            this.gameStart();
        };
        __egretProto__.handleRoom = function (e) {
            if (game.NetCenter.getInstance().mTableStatus == 1 || game.NetCenter.getInstance().mTableStatus == 2) {
                return;
            }
            console.log("status: " + game.NetCenter.getInstance().mTableStatus);
            this.handleRoomPlayer();
        };
        __egretProto__.handleRoomPlayerPlus = function () {
            this.resetStates();
            var netcenter = game.NetCenter.getInstance();
            if (netcenter.mRoomPlayers && netcenter.mRoomPlayers.length > 0 && this.mAvatarCollection) {
                this.mAvatarCollection.removeAll();
                this.mRealPlayers = 0;
                for (var j = 0; j < 8; j++) {
                    var player = netcenter.mRoomPlayers[j];
                    if (player.UserId > 0) {
                        this.mRealPlayers++;
                    }
                    var headicon = player.Sex ? "role_boy_png" : "role_girl_png";
                    var master = player.Position == netcenter.mHostPos ? 1 : 0;
                    var coin = game.GameUI.getInstance().transformNumber(player.GameCoin);
                    this.mAvatarCollection.addItem({
                        DDflag: false,
                        DDicon: headicon,
                        DDname: player.NickName,
                        DDcoin: coin,
                        DDuserid: player.UserId,
                        DDmaster: master,
                        DDhigh: false
                    });
                }
                this.mAvatarCollection.refresh();
                this.list_avatar.dataProviderRefreshed();
                this.PanelRoomDownUI.UIA_icon.source = game.NetCenter.getInstance().mRole.mGender ? "role_boy_png" : "role_girl_png";
                ;
                this.PanelRoomDownUI.label_id.text = game.NetCenter.getInstance().mRole.mName;
                this.PanelRoomDownUI.label_coin.text = game.GameUI.getInstance().transformNumber(game.NetCenter.getInstance().mRole.mCoin);
                this.PanelRoomDownUI.label_gift.text = game.GameUI.getInstance().transformNumber(game.NetCenter.getInstance().mRole.mGift);
                this.PanelRoomDownUI.list_dice.visible = true;
                this.PanelCallUI.visible = this.PanelRoomDownUI.UIA_bg_black.visible = false;
                this.PanelRoomReminderUI.visible = false;
                this.PanelRoomRollUI.visible = false;
                this.UIA_game_start.visible = this.PanelRoomDownUI.UIA_master.visible = netcenter.mRole.mPos == netcenter.mHostPos;
                this.UIA_hint.visible = !this.UIA_game_start.visible;
            }
        };
        __egretProto__.handleRoomPlayer = function () {
            var self = this;
            var netcenter = game.NetCenter.getInstance();
            var len = netcenter.mRoomRealPlayers.length;
            var player = null;
            var RP = netcenter.mRealPosition;
            self.mPosition = -1;
            if (netcenter.mRoomRealPlayers && netcenter.mRoomRealPlayers.length > 1 && self.mAvatarCollectionReal) {
                self.mAvatarCollectionReal.removeAll();
                for (var j = 0; j < 9; j++) {
                    player = null;
                    if (len == 2) {
                        if (j == 1) {
                            player = netcenter.mRoomRealPlayers[Math.abs(RP - 1)];
                        }
                    }
                    if (len == 3) {
                        if (j == 3 || j == 5) {
                            if (j == 3) {
                                player = netcenter.mRoomRealPlayers[(RP - 1 >= 0) ? (RP - 1) : (RP + 2)];
                            }
                            else {
                                player = netcenter.mRoomRealPlayers[(RP + 1) <= 2 ? (RP + 1) : 0];
                            }
                        }
                    }
                    if (len == 4) {
                        if (j == 1 || j == 3 || j == 5) {
                            if (j == 1) {
                                player = netcenter.mRoomRealPlayers[(RP - 2 >= 0) ? (RP - 2) : (RP + 2)];
                            }
                            else if (j == 3) {
                                player = netcenter.mRoomRealPlayers[(RP - 1 >= 0) ? (RP - 1) : (RP + 3)];
                            }
                            else {
                                player = netcenter.mRoomRealPlayers[(RP + 1 <= 3) ? (RP + 1) : 0];
                            }
                        }
                    }
                    if (len == 5) {
                        if (j == 0 || j == 2 || j == 6 || j == 8) {
                            if (j == 0) {
                                player = netcenter.mRoomRealPlayers[(RP - 3 >= 0) ? (RP - 3) : (RP + 2)];
                            }
                            else if (j == 2) {
                                player = netcenter.mRoomRealPlayers[(RP + 3 <= 4) ? (RP + 3) : (RP - 2)];
                            }
                            else if (j == 6) {
                                player = netcenter.mRoomRealPlayers[(RP - 1 >= 0) ? (RP - 1) : (RP + 4)];
                            }
                            else {
                                player = netcenter.mRoomRealPlayers[(RP + 1 <= 4) ? (RP + 1) : 0];
                            }
                        }
                    }
                    if (len == 6) {
                        if (j == 1 || j == 3 || j == 5 || j == 6 || j == 8) {
                            if (j == 1) {
                                player = netcenter.mRoomRealPlayers[(RP - 3 >= 0) ? (RP - 3) : (RP + 3)];
                            }
                            else if (j == 3) {
                                player = netcenter.mRoomRealPlayers[(RP - 2 >= 0) ? (RP - 2) : (RP + 4)];
                            }
                            else if (j == 5) {
                                player = netcenter.mRoomRealPlayers[(RP + 2 <= 5) ? (RP + 2) : (RP - 4)];
                            }
                            else if (j == 6) {
                                player = netcenter.mRoomRealPlayers[(RP - 1 >= 0) ? (RP - 1) : (RP + 5)];
                            }
                            else {
                                player = netcenter.mRoomRealPlayers[(RP + 1 <= 5) ? (RP + 1) : 0];
                            }
                        }
                    }
                    if (len == 7) {
                        if (j == 0 || j == 2 || j == 3 || j == 5 || j == 6 || j == 8) {
                            if (j == 0) {
                                player = netcenter.mRoomRealPlayers[(RP - 3 >= 0) ? (RP - 3) : (RP + 4)];
                            }
                            else if (j == 2) {
                                player = netcenter.mRoomRealPlayers[(RP + 3 <= 6) ? (RP + 3) : (RP - 4)];
                            }
                            else if (j == 3) {
                                player = netcenter.mRoomRealPlayers[(RP - 2 >= 0) ? (RP - 2) : (RP + 5)];
                            }
                            else if (j == 5) {
                                player = netcenter.mRoomRealPlayers[(RP + 2 <= 6) ? (RP + 2) : (RP - 5)];
                            }
                            else if (j == 6) {
                                player = netcenter.mRoomRealPlayers[(RP - 1 >= 0) ? (RP - 1) : (RP + 6)];
                            }
                            else {
                                player = netcenter.mRoomRealPlayers[(RP + 1 <= 6) ? (RP + 1) : 0];
                            }
                        }
                    }
                    if (len == 8) {
                        if (j == 0 || j == 1 || j == 2 || j == 3 || j == 5 || j == 6 || j == 8) {
                            if (j == 0) {
                                player = netcenter.mRoomRealPlayers[(RP - 3 >= 0) ? (RP - 3) : (RP + 5)];
                            }
                            else if (j == 1) {
                                player = netcenter.mRoomRealPlayers[(RP - 4 >= 0) ? (RP - 4) : (RP + 4)];
                            }
                            else if (j == 2) {
                                player = netcenter.mRoomRealPlayers[(RP + 3 <= 7) ? (RP + 3) : (RP - 5)];
                            }
                            else if (j == 3) {
                                player = netcenter.mRoomRealPlayers[(RP - 2 >= 0) ? (RP - 2) : (RP + 6)];
                            }
                            else if (j == 5) {
                                player = netcenter.mRoomRealPlayers[(RP + 2 <= 7) ? (RP + 2) : (RP - 6)];
                            }
                            else if (j == 6) {
                                player = netcenter.mRoomRealPlayers[(RP - 1 >= 0) ? (RP - 1) : (RP + 7)];
                            }
                            else {
                                player = netcenter.mRoomRealPlayers[(RP + 1 <= 7) ? (RP + 1) : 0];
                            }
                        }
                    }
                    if (player) {
                        if (self.mPosition == -1) {
                            self.mPosition = player.Position == game.NetCenter.getInstance().mHostPos ? j : -1;
                        }
                        var headicon = player.Sex ? "role_boy_png" : "role_girl_png";
                        var coin = game.GameUI.getInstance().transformNumber(player.GameCoin);
                        self.mAvatarCollectionReal.addItem({
                            DDflag: false,
                            DDicon: headicon,
                            DDname: player.NickName,
                            DDcoin: coin,
                            DDuserid: player.UserId,
                            DDposition: player.Position,
                            DDmaster: 0,
                            DDhigh: false
                        });
                    }
                    else {
                        self.mAvatarCollectionReal.addItem({ DDflag: true, DDicon: "", DDname: "", DDcoin: 0, DDuserid: 0, DDposition: -1, DDmaster: 0, DDhigh: false });
                    }
                }
                if (this.mPosition > 0) {
                    this.handleAdjustMaster(this.mPosition);
                    self.mPosition = -1;
                }
                this.mAvatarCollectionReal.refresh();
                this.list_real_players.dataProviderRefreshed();
            }
            this.handleRoomPlayerPlus();
        };
        __egretProto__.handleSelect = function (_max, _list, value) {
            var source = [];
            for (var i = value; i <= _max; i++) {
                source.push({ name: i });
            }
            _list.dataProvider = new egret.gui.ArrayCollection(source);
        };
        __egretProto__.timerDice = function (e) {
            this.getState(this.mDiceSlide, this.PanelCallUI.list_call_selectdice, this.PanelCallUI.scro_dice, this.mMaxDice, this.mTimerDice, this.timerDice, 0);
        };
        __egretProto__.timerNum = function (e) {
            this.getState(this.mNumSlide, this.PanelCallUI.list_call_num1, this.PanelCallUI.scro_num1, 5, this.mTimerNum, this.timerNum, 1);
        };
        __egretProto__.timerNum2 = function (e) {
            this.getState(this.mNumSlide2, this.PanelCallUI.list_call_num2, this.PanelCallUI.scro_num2, this.mMaxNum + 1, this.mTimerNum2, this.timerNum2, 2);
        };
        __egretProto__.getState = function (_slide, _list, _scroller, _maxnum, _timer, _fun, _flag) {
            if (_slide.value != _scroller.verticalScrollBar.value) {
                _slide.value = _scroller.verticalScrollBar.value;
                _slide.num = 0;
                _slide.flag = false;
            }
            else {
                _slide.num++;
            }
            if (_slide.num > 3) {
                _slide.num = 0;
                var call = this.handleAdjustPosition(_list, _scroller, _maxnum, _flag);
                game.NetCenter.getInstance().mRole.mCallDice[_flag] = call;
                console.log("slow dowm~~~~~~~~" + _flag + "  " + call);
                _timer.removeEventListener(egret.TimerEvent.TIMER, _fun, this);
                _timer.stop();
                _slide.flag = true;
            }
        };
        __egretProto__.onResourceLoadComplete = function (event) {
            if (event.groupName == "room") {
            }
        };
        __egretProto__.onResourceLoadError = function (event) {
            console.warn("Group:" + event.groupName + " has failed to load");
            //ignore loading failed projects
            this.onResourceLoadComplete(event);
        };
        __egretProto__.onResourceProgress = function (event) {
        };
        __egretProto__.exchangeHigh = function (pos) {
            var list = this.list_real_players;
            var collect = this.mAvatarCollectionReal;
            var another = new egret.gui.ArrayCollection([]);
            for (var i = 0; i < collect.length; i++) {
                var high = (pos == collect.getItemAt(i).DDposition && this.list_real_players.visible == true) ? true : false;
                another.addItem({
                    DDflag: collect.getItemAt(i).DDflag,
                    DDicon: collect.getItemAt(i).DDicon,
                    DDname: collect.getItemAt(i).DDname,
                    DDcoin: collect.getItemAt(i).DDcoin,
                    DDuserid: collect.getItemAt(i).DDuserid,
                    DDposition: collect.getItemAt(i).DDposition,
                    DDmaster: 0,
                    DDhigh: high
                });
            }
            console.log(123);
            this.mAvatarCollectionReal.removeAll();
            this.mAvatarCollectionReal.source = another.source;
            this.mAvatarCollectionReal.refresh();
            this.list_real_players.dataProviderRefreshed();
        };
        __egretProto__.handleTouchTap = function (e) {
            var obj = e.target;
            if (obj) {
                switch (obj.name) {
                    case "btn_return":
                        game.SoundManager.getInstance().controlMusic("dice_3", true);
                        game.GameUI.getInstance().mSetFlag = false;
                        game.GameUI.getInstance().mSetType = "normal";
                        game.GameUI.getInstance().manage_panel("panelSet", "open", false);
                        break;
                    case "btn_set":
                        game.SoundManager.getInstance().controlMusic("dice_3", true);
                        game.GameUI.getInstance().mSetFlag = true;
                        game.GameUI.getInstance().mSetType = "setting";
                        game.GameUI.getInstance().manage_panel("panelSet", "open", false);
                        break;
                    case "btn_call":
                        this.handleCall();
                        break;
                    case "btn_call_open":
                        game.SoundManager.getInstance().controlMusic("dice_3", true);
                        if (game.NetCenter.getInstance().mCallDiceFlag) {
                            game.NetCenter.getInstance().mCallDiceFlag = false;
                            game.NetCenter.getInstance().ctsOpenResult();
                        }
                        else {
                            game.GameUI.getInstance().alertMag("您当前不能打开!", 0, 3, 0);
                        }
                        break;
                    case "UIA_game_start":
                        game.SoundManager.getInstance().controlMusic("dice_4", true);
                        if (this.mRealPlayers >= 2) {
                            if (game.NetCenter.getInstance().mRole.mPos == game.NetCenter.getInstance().mHostPos) {
                                game.NetCenter.getInstance().ctsStart();
                            }
                            else {
                                game.GameUI.getInstance().alertMag("对不起，您不是庄家!");
                            }
                        }
                        else {
                            game.GameUI.getInstance().alertMag("房间内至少2位玩家!");
                        }
                        break;
                    case "UIA_roll_no":
                        game.GameUI.getInstance().flag = true;
                        this.PanelRoomRollUI.visible = false;
                        game.SoundManager.getInstance().controlMusic("dice_3", true);
                        if (!game.NetCenter.getInstance().mSoundDice) {
                            game.NetCenter.getInstance().mSoundDice = true;
                            game.GameUI.getInstance().testSound();
                        }
                        this.PanelRoomReminderUI.visible = true;
                        break;
                    case "UIA_roll_ok":
                        game.GameUI.getInstance().flag = false;
                        this.PanelRoomDownUI.list_dice.visible = true;
                        this.PanelRoomRollUI.visible = false;
                        this.PanelRoomReminderUI.visible = false;
                        game.SoundManager.getInstance().controlMusic("dice_3", true);
                        break;
                    case "btn_call_call":
                        game.SoundManager.getInstance().controlMusic("dice_4", true);
                        this.handleCall();
                        break;
                    case "UIA_icon":
                        game.NetCenter.getInstance().mPanel.mPanelRole = true;
                        game.NetCenter.getInstance().ctsRole(game.NetCenter.getInstance().mRole.mUserId);
                        break;
                    case "UIA_help":
                        game.GameUI.getInstance().mHelp = false;
                        game.SoundManager.getInstance().controlMusic("dice_3", true);
                        game.GameUI.getInstance().manage_panel("panelHelp", "open", false);
                        game.GameUI.getInstance().manage_panel("panelSet", "close", false);
                        break;
                    case "UIA_sound":
                        game.SoundManager.getInstance().controlMusic("dice_3", true);
                        this.UIA_sound.source = (this.UIA_sound.source == "dice_set_2_png") ? "dice_set_3_png" : "dice_set_2_png";
                        var flag = (this.UIA_sound.source == "dice_set_2_png") ? true : false;
                        game.NetCenter.getInstance().mMusicFlag = flag;
                        game.SoundManager.getInstance().controlMusic("music", flag);
                        break;
                    case "UIA_shop":
                        game.SoundManager.getInstance().controlMusic("dice_3", true);
                        game.GameUI.getInstance().manage_panel("panelShop", "open", false);
                        break;
                    case "UIA_charge":
                        this.goCharge();
                        break;
                    default:
                        break;
                }
            }
        };
        __egretProto__.goCharge = function () {
            var url = "http://app.yanchang8.cn/partner/exchangeRequest";
            var myDate = new Date();
            var out_trade_no = game.NetCenter.getInstance().mRole.mUserId.toString();
            out_trade_no += "" + myDate.getFullYear() + myDate.getMonth() + myDate.getDate() + myDate.getHours() + myDate.getMinutes() + myDate.getSeconds();
            var userid = game.NetCenter.getInstance().mRole.mUserId.toString();
            var gift = game.NetCenter.getInstance().mRole.mGift.toString();
            var key = "123456";
            var playerId = game.NetCenter.getInstance().mTheRequest["uid"];
            var appId = 1;
            var act = 2;
            var uid = game.NetCenter.getInstance().mTheRequest["uid"];
            var count = game.NetCenter.getInstance().mRole.mGift;
            var signature = 123;
            var trade_no = out_trade_no;
            url = url + "?playerId=" + playerId + "&appId=" + appId + "&act=" + act + "&uid=" + uid + "&count=" + count + "&signature=" + signature + "&trade_no=" + trade_no;
            window.open(url);
        };
        __egretProto__.manageLastCount = function (target, value) {
            if (value > 0) {
                var m = Math.floor(value / 10);
                var n = value % 10;
                if (m == 0) {
                    target.UIA_number_left.visible = false;
                }
                else {
                    target.UIA_number_left.visible = true;
                    target.UIA_number_left.source = "num" + m + "_png";
                }
                // this.PanelCallUI.UIA_number_left.source = m == 0 ? "" : ();
                target.UIA_number_right.source = "num" + n + "_png";
            }
        };
        /**
          *@ state = 0 :  visible = true and rotation = 0
          *@ state = 1 :  visible = true and rotation = -45
          *@ state = 2 :  visible = false
          */
        __egretProto__.manageGroupOpen = function (state) {
            switch (state) {
                case 0:
                    break;
                case 1:
                    this.group_open.visible = true;
                    this.UIA_open.x = -90;
                    this.UIA_open.y = 90;
                    this.UIA_open.rotation = -45;
                    break;
                case 2:
                    break;
                default:
                    break;
            }
        };
        __egretProto__.gameStart = function () {
            game.NetCenter.getInstance().mNeedCallDice = [1, 1];
            this.UIA_game_start.visible = false;
            game.GameLayer.getInstance().addCup();
            this.list_avatar.visible = false;
            this.UIA_master.visible = this.list_real_players.visible = true;
            if (this.PanelRoomDownUI.UIA_master.visible) {
                this.UIA_master.visible = false;
            }
            game.GameUI.getInstance().flag = true;
            game.GameUI.getInstance().manage_panel("panelResult", "close", false);
            this.gameStartPre("", 0, 20);
            this.UIA_hint.source = "dice_table_13_png";
            this.UIA_hint.visible = true;
            this.attachAlarmClock(7);
            this.PanelRoomReminderUI.visible = true;
            this.mCallDiceFlag = false;
        };
        __egretProto__.handleAdjustAvatarBig = function () {
            var self = this;
            var scale = (self.stage.stageHeight * 9 / 16) / self.stage.stageWidth;
            var tile = (self.list_avatar.layout);
            var down = self.PanelRoomDownUI.height;
            var up = self.UIA_up.height;
            tile.requestedRowCount = tile.requestedColumnCount = 3;
            self.mGapW = (self.stage.stageWidth - 131 * 3 * scale) / scale / 2;
            self.mGapH = (self.stage.stageHeight - (down + up) - 3 * 190 * scale) / scale / 2;
            tile.horizontalGap = self.mGapW;
            tile.verticalGap = self.mGapH;
            self.list_avatar.horizontalCenter = 0;
        };
        __egretProto__.handleAdjustAvatarSmall = function () {
            var self = this;
            var scale = (self.stage.stageHeight * 9 / 16) / self.stage.stageWidth;
            var tile = (self.list_avatar.layout);
            var down = self.PanelRoomDownUI.height;
            var up = self.UIA_up.height;
            tile.requestedColumnCount = 4;
            tile.requestedRowCount = 2;
            self.mGapW = 6;
            self.mGapH = 6;
            tile.horizontalGap = self.mGapW;
            tile.verticalGap = self.mGapH;
            self.list_avatar.horizontalCenter = 0;
        };
        __egretProto__.gameStartPre = function (msg, color, cout) {
            if (msg === void 0) { msg = ""; }
            if (color === void 0) { color = 0; }
            if (cout === void 0) { cout = 3; }
            this.mCount = cout;
            if (this.mAlertTimer) {
                this.mAlertTimer.stop();
                this.mAlertTimer = null;
            }
            this.PanelRoomReminderUI.label_reminder.text = this.PanelRoomRollUI.label_reminder.text = "20";
            this.mAlertTimer = new egret.Timer(1000, cout);
            this.mAlertTimer.addEventListener(egret.TimerEvent.TIMER_COMPLETE, this.removeAlertMsg, this);
            this.mAlertTimer.addEventListener(egret.TimerEvent.TIMER, this.changeTimer, this);
            this.mAlertTimer.start();
        };
        __egretProto__.changeTimer = function (e) {
            this.mCount--;
            this.PanelRoomRollUI.label_reminder.text = this.PanelRoomReminderUI.label_reminder.text = this.mCount.toString();
        };
        __egretProto__.removeAlertMsg = function (e) {
            this.mAlertTimer.removeEventListener(egret.TimerEvent.TIMER, this.removeAlertMsg, this);
            this.mAlertTimer.removeEventListener(egret.TimerEvent.TIMER_COMPLETE, this.removeAlertMsg, this);
            this.mAlertTimer.stop();
            this.mAlertTimer = null;
            this.mCount = 0;
        };
        __egretProto__.handleCallEnd = function (e) {
            var self = this;
            if (self.mAlertTimer) {
                self.mAlertTimer.removeEventListener(egret.TimerEvent.TIMER, this.removeAlertMsg, this);
                self.mAlertTimer.removeEventListener(egret.TimerEvent.TIMER_COMPLETE, this.removeAlertMsg, this);
                self.mAlertTimer.stop();
                self.mAlertTimer = null;
            }
            self.mCount = 0;
            self.mCallDiceFlag = true;
            game.GameUI.getInstance().flag = false;
            game.NetCenter.getInstance().mCallDiceFlag = false;
            this.PanelRoomDownUI.list_dice.visible = true;
            this.PanelRoomReminderUI.visible = false;
            this.PanelRoomRollUI.visible = false;
            this.PanelRoomDownUI.UIA_bg_black.visible = this.PanelCallUI.visible = game.NetCenter.getInstance().mRole.mPos == game.NetCenter.getInstance().mHostPos ? true : false;
            var posClock = this.getCurrentPosition(game.NetCenter.getInstance().mHostPos);
            if (game.NetCenter.getInstance().mHostPos != game.NetCenter.getInstance().mRole.mPos) {
                this.exchangeHigh(game.NetCenter.getInstance().mHostPos);
            }
            this.attachAlarmClock(posClock);
            this.UIA_hint.source = "dice_table_12_png";
            this.UIA_hint.visible = !this.PanelCallUI.visible;
            if (this.PanelCallUI.visible) {
                this.manageRaminder(0);
                game.NetCenter.getInstance().mFirstCall = true;
                this.PanelCallUI.group_last.visible = false;
                this.PanelCallUI.UIA_last.visible = false;
                var height = this.PanelCallUI.list_call_num2.height / this.PanelCallUI.list_call_num2.dataProvider.length;
                var num = game.NetCenter.getInstance().mRoomRealPlayers.length;
                this.PanelCallUI.scro_num1.throwVertically(0, 40);
                this.PanelCallUI.scro_num2.throwVertically((num + 1) * height, 40);
                this.PanelCallUI.scro_dice.throwVertically(0, 40);
                game.NetCenter.getInstance().mRole.mCallDice[0] = 1;
                game.NetCenter.getInstance().mRole.mCallDice[1] = 0;
                game.NetCenter.getInstance().mRole.mCallDice[2] = num + 1;
            }
            else {
                game.NetCenter.getInstance().mFirstCall = false;
            }
        };
        __egretProto__.manageRaminder = function (value) {
            if (this.PanelCallUI.visible) {
                this.PanelCallUI.UIA_call_reminder.source = value == 0 ? "dice_call_open_png" : "dice_table_25_png";
                this.PanelCallUI.UIA_call_reminder.visible = true;
                if (this.mReminderTimer) {
                    this.mReminderTimer.removeEventListener(egret.TimerEvent.TIMER_COMPLETE, this.reminderCom, this);
                    this.mReminderTimer.stop();
                    this.mReminderTimer = null;
                }
                this.mReminderTimer = new egret.Timer(1000, 2);
                this.mReminderTimer.addEventListener(egret.TimerEvent.TIMER_COMPLETE, this.reminderCom, this);
                this.mReminderTimer.start();
            }
        };
        __egretProto__.reminderCom = function (e) {
            this.mReminderTimer.removeEventListener(egret.TimerEvent.TIMER_COMPLETE, this.reminderCom, this);
            this.mReminderTimer.stop();
            this.mReminderTimer = null;
            this.PanelCallUI.UIA_call_reminder.visible = false;
            this.PanelCallUI.UIA_call_reminder.source = "dice_call_open_png";
        };
        __egretProto__.handleCall = function () {
            var netcenter = game.NetCenter.getInstance();
            var name = netcenter.mRole.mName + ":";
            var calldice = netcenter.mRole.mCallDice;
            var ok = false;
            if (!netcenter.mFirstCall) {
                if ((calldice[1] * 10 + calldice[2]) == netcenter.mNeedCallDice[0]) {
                    if (calldice[0] <= netcenter.mNeedCallDice[1]) {
                        ok = true;
                    }
                }
                else if ((calldice[1] * 10 + calldice[2]) < netcenter.mNeedCallDice[0]) {
                    ok = true;
                }
                else {
                    ok = false;
                }
            }
            else {
                if ((calldice[1] * 10 + calldice[2]) < game.NetCenter.getInstance().mRoomRealPlayers.length + 1) {
                    ok = true;
                    game.GameUI.getInstance().alertMag("骰子个数需要大于玩家个数！", 0, 3, 0);
                }
            }
            if (ok) {
                this.manageRaminder(1);
                return;
            }
            if (!this.mNumSlide.flag || !this.mDiceSlide.flag || !this.mNumSlide2.flag) {
                game.GameUI.getInstance().alertMag("请稍后...", 0, 3, 0);
            }
            else {
                if (netcenter.mFirstCall) {
                    netcenter.mFirstCall = false;
                }
                if (calldice[1] * 10 + calldice[2] <= 40) {
                    if (((calldice[1] * 10 + calldice[2]) == 40) && (calldice[0] == 6)) {
                        game.NetCenter.getInstance().mCallDiceFlag = false;
                        game.NetCenter.getInstance().ctsOpenResult();
                    }
                    else {
                        game.NetCenter.getInstance().ctsCallDice(calldice[0], calldice[1] * 10 + calldice[2]);
                    }
                }
                else {
                    game.GameUI.getInstance().alertMag("骰子数量上限为40个哈！", 0, 3, 0);
                }
            }
        };
        __egretProto__.handleAdjustDialog = function (value, value2, pos) {
            var self = this;
            var xx;
            var yy;
            var flag = false;
            this.manageLastCount(this, value);
            //self.label_dialognum.text = value.toString() + game.ConstString.mNumber;
            self.UIA_dialogdice.source = "room_dice" + value2 + "_png";
            if (pos == 0 || pos == 3 || pos == 6) {
                xx = self.list_real_players.x + 131;
                yy = self.list_real_players.y + (190 + self.mGapH) * (pos / 3) + 40;
            }
            else if (pos == 2 || pos == 5 || pos == 8) {
                flag = true;
                xx = self.list_real_players.x + (131 + self.mGapW) * 2 - self.group_dialog.width - 30;
                yy = self.list_real_players.y + (190 + self.mGapH) * ((pos - 2) / 3) + 40;
            }
            else {
                xx = self.list_real_players.x + (131 * 2 + self.mGapW);
                yy = self.list_real_players.y + 40;
            }
            self.group_dialog.x = xx;
            self.group_dialog.y = yy;
            self.Group_mini.x = value >= 10 ? 44 : 23;
            if (flag) {
                if (self.UIA_dialogbg.scaleX != -1) {
                    self.UIA_dialogbg.scaleX = -1;
                    self.UIA_dialogbg.x = self.UIA_dialogbg.width + 45;
                }
            }
            else {
                if (self.UIA_dialogbg.scaleX == -1) {
                    self.UIA_dialogbg.scaleX = 1;
                    self.UIA_dialogbg.x = 1;
                }
            }
        };
        __egretProto__.handleAdjustAlarm = function (pos) {
            var self = this;
            var xx;
            var yy;
            var flag = true;
            if (pos == 0 || pos == 3 || pos == 6) {
                xx = self.list_real_players.x + 131;
                yy = self.list_real_players.y + (190 + self.mGapH) * (pos / 3) + 90;
            }
            else if (pos == 2 || pos == 5 || pos == 8) {
                xx = self.list_real_players.x + (131 + self.mGapW) * 2 - self.group_alarm.width - 10;
                yy = self.list_real_players.y + (190 + self.mGapH) * ((pos - 2) / 3) + 90;
            }
            else if (pos == 1) {
                xx = self.list_real_players.x + (131 * 2 + self.mGapW);
                yy = self.list_real_players.y + 90;
            }
            else {
                xx = (self.stage.stageWidth - self.group_alarm.width) / 2;
                yy = self.UIA_hint.y + 100;
                flag = false;
            }
            if (flag) {
            }
            self.group_alarm.x = xx;
            self.group_alarm.y = yy;
        };
        __egretProto__.handleAdjustMaster = function (pos) {
            var self = this;
            var xx;
            var yy;
            console.log("list x == " + self.list_real_players.x);
            if (pos == 0 || pos == 3 || pos == 6) {
                xx = self.list_real_players.x + 131;
                yy = self.list_real_players.y + (190 + self.mGapH) * (pos / 3) + 10;
            }
            else if (pos == 2 || pos == 5 || pos == 8) {
                xx = self.list_real_players.x + (131 + self.mGapW) * 2 - self.UIA_master.width - 10;
                yy = self.list_real_players.y + (190 + self.mGapH) * ((pos - 2) / 3) + 10;
            }
            else if (pos == 1) {
                xx = self.list_real_players.x + (131 * 2 + self.mGapW);
                yy = self.list_real_players.y + 10;
            }
            else {
                xx = (self.stage.stageWidth - self.UIA_master.width) / 2;
            }
            self.UIA_master.x = xx;
            self.UIA_master.y = yy;
        };
        __egretProto__.handleMasterTimer = function (e) {
            this.mMasterTimer.removeEventListener(egret.TimerEvent.TIMER_COMPLETE, this.handleMasterTimer, this);
            this.mMasterTimer.stop();
            this.mMasterTimer = null;
            this.handleAdjustMaster(this.mMasterPos);
        };
        __egretProto__.handleAvatar = function (e) {
            var self = this;
            var index = self.list_avatar.selectedIndex;
            game.SoundManager.getInstance().controlMusic("dice_3", true);
            if (index >= 0) {
                game.GameUI.getInstance().mRoleInfo = null;
                var target = this.mAvatarCollection.getItemAt(index);
                if (target && target.DDuserid > 0) {
                    game.NetCenter.getInstance().mPanel.mPanelRole = true;
                    game.NetCenter.getInstance().ctsRole(target.DDuserid);
                }
            }
            console.log("selected :  " + index);
        };
        __egretProto__.handleSelectDice = function (e) {
            game.SoundManager.getInstance().controlMusic("dice_4", true);
            var self = this;
            var index = self.PanelCallUI.list_call_selectdice.selectedIndex;
            var height = self.PanelCallUI.list_call_selectdice.height / self.PanelCallUI.list_call_selectdice.dataProvider.length;
            if (index >= 0) {
                if (self.mDiceSlide.flag) {
                    var calldice = game.NetCenter.getInstance().mRole.mCallDice;
                    var dice = calldice[0];
                    dice = dice == self.mMaxDice ? 0 : (dice);
                    self.PanelCallUI.scro_dice.throwVertically(dice * height, 40);
                }
            }
        };
        __egretProto__.handleSelectNum = function (e) {
            game.SoundManager.getInstance().controlMusic("dice_4", true);
            var self = this;
            var index = self.PanelCallUI.list_call_num1.selectedIndex;
            var height = self.PanelCallUI.list_call_num1.height / self.PanelCallUI.list_call_num1.dataProvider.length;
            if (index >= 0) {
                if (self.mNumSlide.flag) {
                    var calldice = game.NetCenter.getInstance().mRole.mCallDice;
                    var dice = calldice[1];
                    dice = dice == 4 ? 0 : (dice + 1);
                    self.PanelCallUI.scro_num1.throwVertically(dice * height, 40);
                }
            }
        };
        __egretProto__.handleSelectNum2 = function (e) {
            game.SoundManager.getInstance().controlMusic("dice_4", true);
            var self = this;
            var index = self.PanelCallUI.list_call_num2.selectedIndex;
            var height = self.PanelCallUI.list_call_num2.height / self.PanelCallUI.list_call_num2.dataProvider.length;
            if (index >= 0) {
                if (self.mNumSlide2.flag) {
                    var calldice = game.NetCenter.getInstance().mRole.mCallDice;
                    var dice = calldice[2];
                    dice = dice == self.mMaxNum ? 0 : (dice + 1);
                    self.PanelCallUI.scro_num2.throwVertically(dice * height, 40);
                }
            }
        };
        __egretProto__.handleTouchEnd = function (e) {
            // if (this.mTouchDiceMove) {
            //     this.mTouchDiceMove = false;
            this.mTimerDice.addEventListener(egret.TimerEvent.TIMER, this.timerDice, this);
            this.mTimerDice.start();
            //  }
        };
        __egretProto__.handleTouchMove = function (e) {
            this.mTouchDiceMove = true;
        };
        __egretProto__.handleTouchMoveNum1 = function (e) {
            // this.mTouchNumMove = true;
        };
        __egretProto__.handleTouchMoveNum2 = function (e) {
            // this.mTouchNumMove2 = true;
        };
        __egretProto__.handleTouchEndNum = function (e) {
            this.mTimerNum.addEventListener(egret.TimerEvent.TIMER, this.timerNum, this);
            this.mTimerNum.start();
        };
        __egretProto__.handleTouchEndNum2 = function (e) {
            this.mTimerNum2.addEventListener(egret.TimerEvent.TIMER, this.timerNum2, this);
            this.mTimerNum2.start();
        };
        /**Sliding stopped, adjusting to a specific loaction*/
        __egretProto__.handleAdjustPosition = function (_list, _scroller, _MaxNum, _flag) {
            var height = _list.height / _list.dataProvider.length;
            var position = _scroller.verticalScrollBar.value;
            for (var i = height; i < _MaxNum * height;) {
                if (position <= i) {
                    var pos = ((i - position) <= height / 2) ? i : i - height;
                    _scroller.throwVertically(pos, 300);
                    console.log("pos: " + pos / height);
                    if (_flag == 0) {
                        return pos / height + 1;
                    }
                    else {
                        return pos / height;
                    }
                }
                i += height;
            }
            return 0;
        };
        /**
          *There are repetitions of random number five
          */
        __egretProto__.handleGetRandomDices = function () {
            var sourceArr = game.NetCenter.getInstance().mRole.mDices;
            var ran = [];
            this.mDiceCollection.removeAll();
            for (var i = 0; i <= 5; i++) {
                if (i >= 5) {
                    if (this.checkRandom(ran)) {
                        break;
                    }
                    else {
                        ran = [];
                        i = 0;
                    }
                }
                ran[i] = Math.floor(Math.random() * 5 + 1);
            }
            sourceArr = [];
            for (i = 0; i < 5; i++) {
                this.mDiceCollection.addItem({ name: 0 });
            }
            this.mDiceCollection.refresh();
        };
        __egretProto__.checkRandom = function (value) {
            for (var i = 0; i < value.length; i++) {
                for (var j = i + 1; j < value.length; j++) {
                    if (value[i] == value[j]) {
                        return true;
                    }
                }
            }
            return false;
        };
        __egretProto__.destPanel = function () {
            this.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.handleTouchTap, this);
            //this.scro_num.removeEventListener(egret.TouchEvent.TOUCH_END, this.handleTouchEndNum, this);
            // this.scro_num.removeEventListener(egret.TouchEvent.TOUCH_RELEASE_OUTSIDE, this.handleTouchEndNum, this);
            this.list_avatar.dataGroup.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.handleAvatar, this);
            this.list_selectdice.dataGroup.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.handleSelectDice, this);
            this.list_num.dataGroup.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.handleSelectNum, this);
            // this.scro_dice.removeEventListener(egret.TouchEvent.TOUCH_END, this.handleTouchEnd, this);
            // this.scro_dice.removeEventListener(egret.TouchEvent.TOUCH_RELEASE_OUTSIDE, this.handleTouchEnd, this);
            game.NetCenter.getInstance().removeEventListener(game.NetEvent.EVENT_ROOMPLAYER, this.handleRoom, this);
            game.NetCenter.getInstance().removeEventListener(game.NetEvent.EVENT_START, this.handleStart, self);
            game.NetCenter.getInstance().removeEventListener(game.NetEvent.EVENT_PLAYERDICES, this.handlePlayerDices, self);
            game.NetCenter.getInstance().removeEventListener(game.NetEvent.EVENT_CALLDICE, this.handleCallDice, this);
            if (this.mAlarmTimer) {
                this.mAlarmTimer.removeEventListener(egret.TimerEvent.TIMER, this.handleAlarmPro, this);
                this.mAlarmTimer.removeEventListener(egret.TimerEvent.TIMER_COMPLETE, this.handleAlarmCom, this);
                this.mAlarmTimer.stop();
                this.mAlarmTimer = null;
            }
            if (this.mAlertTimer) {
                this.mAlertTimer.removeEventListener(egret.TimerEvent.TIMER, this.removeAlertMsg, this);
                this.mAlertTimer.removeEventListener(egret.TimerEvent.TIMER_COMPLETE, this.removeAlertMsg, this);
                this.mAlertTimer.stop();
                this.mAlertTimer = null;
                if (game.GameUI.getInstance().contains(this.mAlert)) {
                    game.GameUI.getInstance().removeElement(this.mAlert);
                }
            }
        };
        return PanelRoom;
    })(game.PanelRoomUI);
    game.PanelRoom = PanelRoom;
    PanelRoom.prototype.__class__ = "game.PanelRoom";
})(game || (game = {}));
var Slide = (function () {
    function Slide() {
        this.value = 0;
        this.num = 0;
        this.flag = true;
    }
    var __egretProto__ = Slide.prototype;
    return Slide;
})();
Slide.prototype.__class__ = "Slide";
