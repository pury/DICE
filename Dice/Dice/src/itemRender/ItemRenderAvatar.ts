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
    export class ItemRenderAvatar extends egret.gui.ItemRenderer {
        private UIA_ghosticon: egret.gui.UIAsset;
        private label_ghostname: egret.gui.Label;
        private label_ghostcoin: egret.gui.Label;
        private UIA_bgbg: egret.gui.UIAsset;
        private UIA_master: egret.gui.UIAsset;
        private UIA_high: egret.gui.UIAsset;

        public constructor() {      
            super();  
        }

        public dataChanged(): void {
            super.dataChanged();
            if (this.data.DDflag) {
                this.visible = false;
                return;
            }
            this.visible = true;
            this.UIA_high.visible = false;
            this.UIA_bgbg.visible = true;
            this.UIA_master.visible = false;
            this.UIA_bgbg.source = "avatar_shelter_png";
            if (this.data.DDuserid == 0) {
                this.UIA_ghosticon.visible = this.label_ghostcoin.visible = this.UIA_master.visible = this.label_ghostname.visible = false;
                return;
            }
            if (this.data.DDhigh) {
                this.UIA_high.visible = true;
            } 
            this.UIA_master.visible = this.data.DDmaster > 0 ? true : false;
            this.UIA_ghosticon.visible = this.label_ghostcoin.visible = this.label_ghostname.visible = true;
            this.UIA_ghosticon.source = this.data.DDicon;
            this.label_ghostname.text = this.data.DDname;
            this.label_ghostcoin.text = this.data.DDcoin.toString();
        }
    }
}
