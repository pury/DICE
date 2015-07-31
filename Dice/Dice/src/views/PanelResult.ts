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
    export class PanelResult extends PanelResultUI {
        private mCollect: egret.gui.ArrayCollection;
        private mCollect0: egret.gui.ArrayCollection;

        public constructor() {
            super();
            this.name = "panelResult";
        }

        public createCompleteEvent(event: egret.gui.UIEvent): void {
            super.createCompleteEvent(event);
            this.mCollect = new egret.gui.ArrayCollection([]);
            this.mCollect0 = new egret.gui.ArrayCollection([]);
            this.list_result.dataProvider = this.mCollect;
            this.list_result0.dataProvider = this.mCollect0;
            this.list_result.itemRenderer = new egret.gui.ClassFactory(game.ItemRenderPoints);
            this.list_result0.itemRenderer = new egret.gui.ClassFactory(game.ItemRenderPoints);
            if (NetCenter.getInstance().mResult) {
                this.handleResult(NetCenter.getInstance().mResult);
            }
            this.addEventListener(egret.TouchEvent.TOUCH_TAP, this.handleTouchTap, this);
            NetCenter.getInstance().addEventListener(NetEvent.EVENT_OPENRESULT, this.handleOpenResult, this);
            this.group_gift.visible = false;
            this.list_result.cacheAsBitmap = true;
            this.list_result0.cacheAsBitmap = true;
            this.group_dice.cacheAsBitmap = true;
            this.group_dice0.cacheAsBitmap = true;
            this.group_gift.cacheAsBitmap = true;
        }

        public openPanel(): void {
            this.group_gift.visible = false;
        }

        private handleOpenResult(e:NetEvent): void {
            var param = e.mParam;
            if (param) {
                this.handleResult(param);
            }
        }

        private handleResult(param): void {
            var source: string = param.DiceCount;
            var result: string = "";
            var data: number[] = [];
            var data0: number[] = [];
            var name: string[] = [];
            var gold: string[] = [];
            var gift: boolean = false;
            var tai: number = param.PersonalCharge;
            var num: string = param.WinnerDailyWin.toString();
            for (var i = 0; i <= 5; i++) {
                data.push(parseInt(source.charAt(2 * i) + source.charAt(2 * i + 1)));
            }
            name[0] = param.WinnerName;
            name[1] = param.LoserName;
            gold[0] = param.WinGameCoin;
            gold[1] = param.LoseGameCoin;
            var myID = NetCenter.getInstance().mRole.mUserId;
            if (myID == param.WinnerId) {
                result = "win_png";
            } else if (myID == param.LoserId) {
                result = "lost_png";
            } else {
                result = "dice_result_4_png";
            }
            if (param.WinGameGift > 0 && result =="win_png") {
                gift = true;
            }
            this.handleCollect(data, data0, name, gold, result, gift, num, tai);
        }

        /**The Result
          *@ param data list_reslut and list_result0
          *@ param name name[0] -->winner name[1]-->loser
          *@ param gold gold[0] -->winner gold[1]-->loser
          *@ param result UIA_reslut win-lose-other
          *@ param gift group_gift visible
          */
        private handleCollect(data: number[], data0: number[],name:string[],gold:string[],result:string,gift:boolean,num:string,tai:number): void {
            var source: number[] = [];
            this.mCollect.removeAll();
            this.mCollect0.removeAll();
            for (var i: number = 0; i < data.length; i++){
                if (i < 3) {
                    this.mCollect.addItem({ num: data[i] });
                } else {
                    this.mCollect0.addItem({ num: data[i] });
                }
            } 
            this.mCollect.refresh();   
            this.mCollect0.refresh();   
            this.label_win.text = name[0];
            this.label_lose.text = name[1];
            this.label_win_gold.text = "＋" + gold[0];
            this.label_lose_gold.text = "－" + gold[1];
            this.label_num.text = num;
            this.label_tai.text = "-" + tai + "台费";
            this.UIA_result.source = result;
            this.group_gift.visible = gift;
        }

        private handleTouchTap(e: egret.TouchEvent): void {
            var obj: any = e.target;
            var gameUI: GameUI = game.GameUI.getInstance();
            if (obj) {
                switch (obj.name) {
                    case "btn_back":
                        gameUI.manage_panel("panelResult", "close", true);
                        break;
                    default:
                        break;
                }
            }
        }

        public handleAddStage(): void {
            super.handleAddStage();
            var self = this;
            var scale: number = (self.stage.stageHeight * 9 / 16) / self.stage.stageWidth;
            self.UIA_bg.scaleX = 1 / scale;
            self.UIA_bg.horizontalCenter = 0;
        }

        public partAdded(partName: string, instance: any): void {
            super.partAdded(partName, instance);
        }

        public destPanel(): void {
            this.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.handleTouchTap, this);
            NetCenter.getInstance().removeEventListener(NetEvent.EVENT_OPENRESULT, this.handleOpenResult, this);
        }
    }
}
