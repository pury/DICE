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
    export class PanelRole extends PanelRoleUI {
        public constructor() {      
            super();
            this.name = "panelRole";
        }

        public createCompleteEvent(event: egret.gui.UIEvent): void {
            super.createCompleteEvent(event);         
            NetCenter.getInstance().addEventListener(NetEvent.EVENT_TEST,this.testEvent,this);
            this.addEventListener(egret.TouchEvent.TOUCH_TAP, this.handleTouchTap, this);
        }

        private openPanel(): void {

        }

        private testEvent(e:NetEvent): void {
            console.log("test event: " + e.mParam.cool);
        }

        private handleTouchTap(e: egret.TouchEvent): void {
            game.NetCenter.getInstance().testEvent();
            var obj: any = e.target;
            if (obj) {
                switch (obj.name) {
                    case "btn_close":
                        SoundManager.getInstance().controlMusic("dice_3", true);
                        game.GameUI.getInstance().manage_panel("panelRole", "close");
                        if (game.GameUI.getInstance().mRoleInfo == NetCenter.getInstance().mRole){
                            game.GameUI.getInstance().manage_panel("panelSet", "open", false);
                        }
                        break;
                    case "rb_woman":
                    case "rb_man":
                        //if (game.GameUI.getInstance().mRoleInfo == NetCenter.getInstance().mRole) {
                        //    this.changeAvatar();
                        //}
                        break;
                    default:
                        break;
                }
            }
        }

        private changeAvatar(): void {
            this.UIA_avatar.source = this.rb_man.selected? "role_boy_png" : "role_girl_png";
        }

        public updateRoleInfo(role:game.NetRole): void {
            if (role){
                //var flag: boolean = (NetCenter.getInstance().mRole == role) ? true : false;
                //this.rb_man.enabled = flag;
                //this.rb_woman.enabled = flag;
               // this.UIA_avatar.source = !role.mGender ? "role_boy_png" : "role_girl_png";
                this.UIA_avatar.source = role.mGender? "role_boy_png" : "role_girl_png";
                this.label_name.text = role.mName;
                //this.rb_man.selected = role.mGender ? true : false;
                //this.rb_woman.selected = role.mGender ? false : true;
                this.label_role_gold.text = role.mCoin.toString();
                this.label_role_gift.text = role.mGift.toString();
                this.label_gender.text = role.mGender ? "男" : "女";
            }
        }

        public handleAddStage(): void {
            super.handleAddStage();
            var self = this;
            var scale: number = (self.stage.stageHeight * 9 / 16) / self.stage.stageWidth;
            self.UIA_bg.scaleX = 1 / scale;
            self.UIA_bg.horizontalCenter = 0;
        }

        public destPanel(): void {
            NetCenter.getInstance().removeEventListener(NetEvent.EVENT_TEST, this.testEvent, this);
            this.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.handleTouchTap, this);
        }
    }
}
