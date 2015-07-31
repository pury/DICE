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
    var PanelSet = (function (_super) {
        __extends(PanelSet, _super);
        function PanelSet() {
            _super.call(this);
            this.name = "panelSet";
        }
        var __egretProto__ = PanelSet.prototype;
        __egretProto__.createCompleteEvent = function (event) {
            _super.prototype.createCompleteEvent.call(this, event);
            var state = game.GameUI.getInstance().mSetType != "" ? game.GameUI.getInstance().mSetType : "normal";
            this.setWindowType(state);
            this.addEventListener(egret.TouchEvent.TOUCH_TAP, this.handleTouchTap, this);
            this.group_set.cacheAsBitmap = true;
        };
        __egretProto__.openPanel = function () {
            this.UIA_sound.source = game.SoundManager.getInstance().musicFlag ? "dice_set_2_png" : "dice_set_3_png";
        };
        __egretProto__.handleTouchTap = function (e) {
            var obj = e.target;
            var gameUI = game.GameUI.getInstance();
            if (obj) {
                switch (obj.name) {
                    case "btn_back_setting":
                        game.SoundManager.getInstance().controlMusic("dice_3", true);
                        //this.setWindowType("setting");
                        gameUI.manage_panel("panelSet", "close");
                        gameUI.manage_panel("panelMoreGames", "close");
                        break;
                    case "btn_info":
                        game.SoundManager.getInstance().controlMusic("dice_3", true);
                        game.GameUI.getInstance().mRoleInfo = game.NetCenter.getInstance().mRole;
                        game.NetCenter.getInstance().mPanel.mPanelRole = true;
                        game.NetCenter.getInstance().ctsRole(game.NetCenter.getInstance().mRole.mUserId);
                        break;
                    case "btn_charge":
                        game.SoundManager.getInstance().controlMusic("dice_3", true);
                        this.setWindowType("normal");
                        break;
                    case "btn_help":
                        game.SoundManager.getInstance().controlMusic("dice_3", true);
                        gameUI.manage_panel("panelHelp", "open", false);
                        gameUI.manage_panel("panelSet", "close", false);
                        break;
                    case "btn_switch":
                        gameUI.manage_panel("panelSet", "close", false);
                        game.NetCenter.getInstance().mPanel.mPanelRate = true;
                        game.NetCenter.getInstance().ctsBackRate();
                        //gameUI.manage_panel("panelRate", "open", false);
                        game.SoundManager.getInstance().controlMusic("music", false);
                        game.NetCenter.getInstance().mMusicFlag = false;
                        game.SoundManager.getInstance().controlMusic("dice_3", true);
                        break;
                    case "btn_moregames":
                        game.SoundManager.getInstance().controlMusic("dice_3", true);
                        gameUI.manage_panel("panelMoreGames", "open", false);
                        break;
                    case "btn_direct_buy":
                        game.SoundManager.getInstance().controlMusic("dice_3", true);
                        break;
                    case "btn_sing_exchange":
                        game.SoundManager.getInstance().controlMusic("dice_3", true);
                        break;
                    case "btn_exchange":
                        game.SoundManager.getInstance().controlMusic("dice_3", true);
                        break;
                    case "btn_back_room":
                        game.SoundManager.getInstance().controlMusic("dice_3", true);
                        gameUI.manage_panel("panelSet", "close");
                        break;
                    case "UIA_sound":
                        game.SoundManager.getInstance().controlMusic("dice_3", true);
                        this.UIA_sound.source = (this.UIA_sound.source == "dice_set_2_png") ? "dice_set_3_png" : "dice_set_2_png";
                        var flag = (this.UIA_sound.source == "dice_set_2_png") ? true : false;
                        game.SoundManager.getInstance().controlMusic("music", flag);
                        break;
                    case "btn_quit":
                        game.GameLayer.getInstance().removeCup();
                        game.SoundManager.getInstance().controlMusic("dice_3", true);
                        this.quitGame();
                        break;
                    case "btn_back_game":
                        game.SoundManager.getInstance().controlMusic("dice_3", true);
                        // if (!game.GameUI.getInstance().mSetFlag) {
                        //    gameUI.manage_panel("panelRoom", "open", true);
                        // } else {
                        this.setWindowType("normal");
                        break;
                    default:
                        break;
                }
            }
        };
        __egretProto__.quitGame = function () {
            game.GameUI.getInstance().dest();
            game.GameUI.getInstance().manage_panel("panelLogin", "open", true);
            game.SoundManager.getInstance().controlMusic("music", false);
            game.SoundManager.getInstance().controlMusic("dice_5", false);
        };
        __egretProto__.setWindowType = function (type) {
            this._type = type;
            this.invalidateSkinState();
        };
        __egretProto__.handleAddStage = function () {
            _super.prototype.handleAddStage.call(this);
            var self = this;
            var scale = (self.stage.stageHeight * 9 / 16) / self.stage.stageWidth;
            //self.btn_back_setting.scaleX = self.btn_back_room.scaleX = self.UIA_sound.scaleX = scale;
            self.btn_back_room.horizontalCenter = -(self.width / scale - self.btn_back_room.width - 20) / 2;
            self.btn_back_setting.horizontalCenter = -(self.width / scale - self.btn_back_setting.width - 20) / 2;
            self.UIA_sound.horizontalCenter = (self.width / scale - self.UIA_sound.width - 50) / 2;
            self.btn_back_setting.horizontalCenter = -(self.width / scale - self.btn_back_setting.width - 50) / 2;
            self.UIA_bg.scaleX = 1 / scale;
            self.UIA_bg.horizontalCenter = 0;
        };
        __egretProto__.getCurrentSkinState = function () {
            return this._type;
        };
        __egretProto__.destPanel = function () {
            this.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.handleTouchTap, this);
        };
        return PanelSet;
    })(game.PanelSetUI);
    game.PanelSet = PanelSet;
    PanelSet.prototype.__class__ = "game.PanelSet";
})(game || (game = {}));
