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
    export class PanelRoomUI extends GamePanel {
        public label_coin: egret.gui.Label;
        public label_id: egret.gui.Label;
        //public label_dialognum: egret.gui.Label;
       // public Label_test: egret.gui.Label;
        public label_alarm: egret.gui.Label;
       // public label_gamestart: egret.gui.Label;
        public btn_return: egret.gui.Button;
       // public btn_set: egret.gui.Button;
       // public scro_dice: egret.gui.Scroller;
      //  public scro_num: egret.gui.Scroller;
        public scro_info: egret.gui.Scroller;
        public btn_call: egret.gui.Button;
        public UIA_open: egret.gui.UIAsset;
        public UIA_dice1: egret.gui.UIAsset;
        public UIA_dice2: egret.gui.UIAsset;
        public UIA_dice3: egret.gui.UIAsset;
        public UIA_dice4: egret.gui.UIAsset;
        public UIA_dice5: egret.gui.UIAsset;
        public UIA_bgwhite: egret.gui.UIAsset;
        public UIA_dialogdice: egret.gui.UIAsset;
        public UIA_dialogbg: egret.gui.UIAsset;
        public UIA_game_start: egret.gui.UIAsset;
        public UIA_alarm: egret.gui.UIAsset;
        public UIA_ge: egret.gui.UIAsset;
        public UIA_master: egret.gui.UIAsset;
        public UIA_up: egret.gui.UIAsset;
        public UIA_cup_cup: egret.gui.UIAsset;
        public UIA_blue: egret.gui.UIAsset;
        public UIA_sound: egret.gui.UIAsset;
        public UIA_number_left: egret.gui.UIAsset;
        public UIA_number_right: egret.gui.UIAsset;
        public UIA_hint: egret.gui.UIAsset;

        public list_dice: egret.gui.List;
        public list_selectdice: egret.gui.List;
        public list_num: egret.gui.List;
        public list_information: egret.gui.List;
        public list_avatar: egret.gui.List;
        public list_real_players: egret.gui.List;
        public group_dialog: egret.gui.Group;
        public group_open: egret.gui.Group;
        public group_alarm: egret.gui.Group;
        public group_down: egret.gui.Group;
        public group_content: egret.gui.Group;
        public Group_mini: egret.gui.Group;
        public PanelRoomDownUI: game.PanelRoomDownUI;
        public PanelCallUI: game.PanelCallUI;
        public PanelRoomReminderUI: game.PanelRoomReminderUI;
        public PanelRoomRollUI: game.PanelRoomRollUI;

        public ti_test: egret.gui.TextInput;

        public constructor() {
            super();
            this.skinName = "skins.panel.PanelRoomSkin";
        }
    }
}
