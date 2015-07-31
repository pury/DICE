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
    export class PanelSet extends PanelSetUI {
        private _type: string;
        public constructor() {      
            super();
            this.name = "panelSet";
        }

        public createCompleteEvent(event: egret.gui.UIEvent): void {
            super.createCompleteEvent(event);
            var state: string = game.GameUI.getInstance().mSetType != "" ? game.GameUI.getInstance().mSetType : "normal";
            this.setWindowType(state);
            this.addEventListener(egret.TouchEvent.TOUCH_TAP, this.handleTouchTap, this);
            this.group_set.cacheAsBitmap = true;
        }

        public openPanel(): void {
            this.UIA_sound.source = SoundManager.getInstance().musicFlag ? "dice_set_2_png" : "dice_set_3_png";
        }

        private handleTouchTap(e: egret.TouchEvent): void {
            var obj: any = e.target;
            var gameUI: GameUI = game.GameUI.getInstance();
            if (obj) {
                switch (obj.name) {
                    case "btn_back_setting":
                        SoundManager.getInstance().controlMusic("dice_3", true);
                        //this.setWindowType("setting");
                        gameUI.manage_panel("panelSet", "close");
                        gameUI.manage_panel("panelMoreGames", "close");
                        break;
                    case "btn_info":
                        SoundManager.getInstance().controlMusic("dice_3", true);
                        game.GameUI.getInstance().mRoleInfo = NetCenter.getInstance().mRole;
                        NetCenter.getInstance().mPanel.mPanelRole = true;
                        NetCenter.getInstance().ctsRole(NetCenter.getInstance().mRole.mUserId);
                        break;
                    case "btn_charge":
                        SoundManager.getInstance().controlMusic("dice_3", true);
                        this.setWindowType("normal");
                        break;
                    case "btn_help":
                        SoundManager.getInstance().controlMusic("dice_3", true);
                        gameUI.manage_panel("panelHelp", "open", false);
                        gameUI.manage_panel("panelSet", "close", false);
                        break;
                    case "btn_switch":
                        gameUI.manage_panel("panelSet", "close", false);
                        NetCenter.getInstance().mPanel.mPanelRate = true;
                        NetCenter.getInstance().ctsBackRate();
                        //gameUI.manage_panel("panelRate", "open", false);
                        SoundManager.getInstance().controlMusic("music", false);
                        NetCenter.getInstance().mMusicFlag = false;
                        SoundManager.getInstance().controlMusic("dice_3", true);
                        //this.setWindowType("quit");
                        //gameUI.manage_panel("panelLogin", "open", true);
                        //game.SoundManager.getInstance().controlMusic(false);
                        break;
                    case "btn_moregames":
                        SoundManager.getInstance().controlMusic("dice_3", true);
                        gameUI.manage_panel("panelMoreGames", "open", false);
                        break;
                    case "btn_direct_buy":
                        SoundManager.getInstance().controlMusic("dice_3", true);
                        break;
                    case "btn_sing_exchange":
                        SoundManager.getInstance().controlMusic("dice_3", true);
                        break;
                    case "btn_exchange":
                        SoundManager.getInstance().controlMusic("dice_3", true);
                        break;
                    case "btn_back_room":
                        SoundManager.getInstance().controlMusic("dice_3", true);
                        gameUI.manage_panel("panelSet", "close");
                        break;
                    case "UIA_sound":
                        SoundManager.getInstance().controlMusic("dice_3", true);
                        this.UIA_sound.source = (this.UIA_sound.source == "dice_set_2_png") ? "dice_set_3_png" : "dice_set_2_png";
                        var flag: boolean = (this.UIA_sound.source == "dice_set_2_png") ? true : false;
                        game.SoundManager.getInstance().controlMusic("music",flag);
                        break;
                    case "btn_quit":
                        GameLayer.getInstance().removeCup();
                        SoundManager.getInstance().controlMusic("dice_3", true);
                        this.quitGame();
                        break;
                    case "btn_back_game":
                        SoundManager.getInstance().controlMusic("dice_3", true);
                       // if (!game.GameUI.getInstance().mSetFlag) {
                        //    gameUI.manage_panel("panelRoom", "open", true);
                       // } else {
                            this.setWindowType("normal");
                        //}
                        break;
                    default:
                        break;
                }
            }

        }

        public quitGame(): void {
            GameUI.getInstance().dest();
            GameUI.getInstance().manage_panel("panelLogin", "open", true);
            game.SoundManager.getInstance().controlMusic("music", false);
            game.SoundManager.getInstance().controlMusic("dice_5", false);

        }

        public setWindowType(type: string): void {
            this._type = type;
            this.invalidateSkinState();
        }

        public handleAddStage(): void {
            super.handleAddStage();
            var self = this;
            var scale: number = (self.stage.stageHeight * 9 / 16) / self.stage.stageWidth;
            //self.btn_back_setting.scaleX = self.btn_back_room.scaleX = self.UIA_sound.scaleX = scale;
            self.btn_back_room.horizontalCenter = -(self.width / scale - self.btn_back_room.width - 20) / 2;
            self.btn_back_setting.horizontalCenter = -(self.width / scale - self.btn_back_setting.width - 20) / 2;
            self.UIA_sound.horizontalCenter = (self.width / scale - self.UIA_sound.width - 50) / 2;
            self.btn_back_setting.horizontalCenter = -(self.width / scale - self.btn_back_setting.width - 50) / 2;
            self.UIA_bg.scaleX = 1 / scale;
            self.UIA_bg.horizontalCenter = 0;
        }

        public getCurrentSkinState(): string {
            return this._type;
        }

        public destPanel(): void {
            this.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.handleTouchTap, this);
        }
    }
}
