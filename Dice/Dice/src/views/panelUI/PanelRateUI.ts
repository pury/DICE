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
    export class PanelRateUI extends GamePanel {
        public UIA_choose: egret.gui.UIAsset;
        public UIA_enter: egret.gui.UIAsset;
        public UIA_mu1: egret.gui.UIAsset;
        public UIA_mu2: egret.gui.UIAsset;
        public UIA_mu3: egret.gui.UIAsset;
        public UIA_mu4: egret.gui.UIAsset;
        public UIA_loading: egret.gui.UIAsset;
        public UIA_bg: egret.gui.UIAsset;
        public group_center: egret.gui.Group;
        public constructor() {
            super();
            this.skinName = "skins.panel.PanelRateSkin";
        }

        public handleAddStage(): void {
            if (this.height > 0) {
                this.scaleY = this.stage.stageHeight / this.height;
                this.scaleX = (this.stage.stageHeight * 9 / 16) / this.stage.stageWidth;
                this.horizontalCenter = 0;
            }
        }
    }
}
