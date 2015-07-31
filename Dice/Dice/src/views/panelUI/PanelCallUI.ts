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
    export class PanelCallUI extends egret.gui.SkinnableComponent {
        public list_call_selectdice: egret.gui.List;
        public list_call_num1: egret.gui.List;
        public list_call_num2: egret.gui.List;
        public UIA_BG: egret.gui.UIAsset;
        public UIA_bg_white_select: egret.gui.UIAsset;
        public btn_call_call: egret.gui.UIAsset;
        public UIA_call_open: egret.gui.UIAsset;
        public UIA_last: egret.gui.UIAsset;
        public scro_num1: egret.gui.Scroller;
        public scro_num2: egret.gui.Scroller;
        public scro_dice: egret.gui.Scroller;
        public UIA_number_left: egret.gui.UIAsset;
        public UIA_number_right: egret.gui.UIAsset;
        public UIA_last_point: egret.gui.UIAsset;
        public UIA_pro: egret.gui.UIAsset;
        public UIA_call_reminder: egret.gui.UIAsset;
        public label_pro: egret.gui.Label;
        public group_last: egret.gui.Group;

        public constructor() {
            super();
            this.skinName = "skins.panel.PanelCallSkin";
            this.addEventListener(egret.gui.UIEvent.CREATION_COMPLETE, this.createCompleteEvent, this); 

        }

        public createCompleteEvent(event: egret.gui.UIEvent): void {
            this.removeEventListener(egret.gui.UIEvent.CREATION_COMPLETE, this.createCompleteEvent, this);
            //GameLayer.getInstance().removeLoading();
            // this.handleAddStage();
        }

        public partAdded(partName: string, instance: any): void {
            super.partAdded(partName, instance);
        }
    }
}
