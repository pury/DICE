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
    export class PanelHelp extends PanelHelpUI {
        public constructor() {      
            super();
            this.name = "panelHelp";
        }

        public createCompleteEvent(event: egret.gui.UIEvent): void {
            super.createCompleteEvent(event);
            this.UIA_back.addEventListener(egret.TouchEvent.TOUCH_TAP, this.handleTouchTap, this);
            this.addEventListener(egret.TouchEvent.TOUCH_TAP, this.handleTouchTap, this);
        }

        public openPanel(): void {
            if (this.UIA_back) {
                this.UIA_back.source = GameUI.getInstance().mHelp ? "dice_btn_1_png" : "dice_btn_4_png";
            }
        }

        private handleTouchTap(e: egret.TouchEvent): void {
            if (GameUI.getInstance().mHelp) {
                SoundManager.getInstance().controlMusic("rate", true);
                game.NetCenter.getInstance().mPanel.mPanelRate = true;
                game.NetCenter.getInstance().ctsLoginSpecial(NetCenter.getInstance().mTheRequest["retail"], NetCenter.getInstance().mTheRequest["uid"], NetCenter.getInstance().mTheRequest["group"],NetCenter.getInstance().mTheRequest["token"]);
            } else {
                game.GameUI.getInstance().manage_panel("panelHelp", "close", true);
            }
        }

        public handleAddStage(): void {
            super.handleAddStage();
        }

        public destPanel(): void {
            this.UIA_back.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.handleTouchTap, this);
        }
    }
}
