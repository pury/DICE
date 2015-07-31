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
    export class PanelRoomDownUI extends egret.gui.SkinnableComponent {
        public UIA_master: egret.gui.UIAsset;
        public UIA_charge: egret.gui.UIAsset;
        public UIA_icon: egret.gui.UIAsset;
        public UIA_tabel: egret.gui.UIAsset;
        public UIA_bg: egret.gui.UIAsset;
        public UIA_icon_bg: egret.gui.UIAsset;
        public UIA_bg_table: egret.gui.UIAsset;
        public UIA_help: egret.gui.UIAsset;
        public UIA_shop: egret.gui.UIAsset;
        public UIA_bg_black: egret.gui.UIAsset;
        public label_coin: egret.gui.Label;
        public label_gift: egret.gui.Label;
        public label_id: egret.gui.Label;
        public list_dice: egret.gui.List;
        public label_rate: egret.gui.Label;

        public constructor() {
            super();
            this.skinName = "skins.panel.PanelRoomDownSkin";
        }

        public partAdded(partName: string, instance: any): void {
            super.partAdded(partName, instance);
        }
    }
}
