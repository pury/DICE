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
    export class PanelRate extends PanelRateUI {
        private mContainer: any[];
        private mIndex: number;
        private mData: number[] = [10, 100, 200, 500];

        public constructor() {      
            super();
            this.name = "panelRate";
        }

        public createCompleteEvent(event: egret.gui.UIEvent): void {
            super.createCompleteEvent(event);
            this.mContainer = [this.UIA_mu1, this.UIA_mu2, this.UIA_mu3, this.UIA_mu4];
            this.mIndex = 0;
            this.openPanel();
            this.addEventListener(egret.TouchEvent.TOUCH_TAP, this.handleTouchTap, this);
        }

        public openPanel(): void {
            this.adjustChoose(this.mIndex);
        }

        private adjustChoose(index: number): void {
            if (this.mContainer) {
                var target = this.mContainer[this.mIndex];
                this.UIA_choose.x = target.x + target.width * 1 / 2;
                this.UIA_choose.y = target.y + target.height * 12 / 30;
            }
        }

        private handleTouchTap(e: egret.TouchEvent): void
        {
            var obj: any = e.target;
            var gameUI: GameUI = game.GameUI.getInstance();

            if (obj) {
                switch (obj.name) {
                    case "UIA_mu1":
                    case "UIA_mu2":
                    case "UIA_mu3":
                    case "UIA_mu4":
                        SoundManager.getInstance().controlMusic("dice_3", true);
                        this.mIndex = parseInt(obj.name.substr(6)) - 1;
                        this.adjustChoose(this.mIndex);
                        break;
                    case "UIA_enter":
                        SoundManager.getInstance().controlMusic("music", true);
                        NetCenter.getInstance().mMusicFlag = true;
                        this.getRoomInfo();
                        break;
                    default:
                        break;
                }
            }
        }

        private getRoomInfo(): void {
            NetCenter.getInstance().mPanel.mPanelRoom = true;
            NetCenter.getInstance().mRate = this.mData[this.mIndex];
            NetCenter.getInstance().ctsTableInfo((this.mIndex + 1) + 1000);
        }

        public handleAddStage(): void {
            super.handleAddStage();
            var self = this;
            var scale: number = (self.stage.stageHeight * 9 / 16) / self.stage.stageWidth;
            self.UIA_loading.scaleX = self.UIA_bg.scaleX = 1 / scale;
            self.UIA_loading.horizontalCenter = self.UIA_bg.horizontalCenter = 0;
        }

        public destPanel(): void {
            this.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.handleTouchTap, this);
        }
    }
}
