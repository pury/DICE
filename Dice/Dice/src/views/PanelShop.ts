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
    export class PanelShop extends PanelShopUI {
        private mBuyIndex: number;
        private mExchangeIndex: number;
        private mDataBuy: number[] = [1, 10, 30, 100];
        private mDateMeau: string[] = ["10000","100000","300000","1100000"];
        private mDataExchange: number[] = [1, 10, 30, 100];
        public constructor() {      
            super();
            this.name = "panelShop";
        }

        public createCompleteEvent(event: egret.gui.UIEvent): void {
            super.createCompleteEvent(event);
            this.mBuyIndex = 0;
            this.mExchangeIndex = 0;
            this.TB_shop.itemRenderer = new egret.gui.ClassFactory(ItemRenderShop);
            this.TB_shop.dataProvider = new egret.gui.ArrayCollection([{ num: 1 }, { num: 0 }]);
            this.addEventListener(egret.TouchEvent.TOUCH_TAP, this.handleTouchTap, this);
            this.TB_shop.addEventListener(egret.TouchEvent.TOUCH_TAP, this.handleTouchTapShop, this);
        }

        public openPanel(): void {
            this.label_buy.text = this.label_exchange.text = GameUI.getInstance().transformNumber(NetCenter.getInstance().mRole.mCoin);
        }

        private handleTouchTap(e: egret.TouchEvent): void {
            var obj: any = e.target;
            if (obj) {
                this.VS_shop.selectedIndex = this.TB_shop.selectedIndex;
                switch (obj.name) {
                    case "UIA_back":
                        SoundManager.getInstance().controlMusic("dice_3", true);
                        game.GameUI.getInstance().manage_panel("panelShop", "close");
                        game.GameUI.getInstance().manage_panel("panelRoom", "open",true);
                        break;
                    case "TB_shop":
                        
                        break;
                    case "buy1":
                    case "buy2":
                    case "buy3":
                    case "buy4":
                        SoundManager.getInstance().controlMusic("dice_3", true);
                        this.pay(this.mDataBuy, parseInt(obj.name.substr(3)) - 1);
                        break;
                    case "exchange1":
                    case "exchange2":
                    case "exchange3":
                    case "exchange4":
                        SoundManager.getInstance().controlMusic("dice_3", true);
                        this.handleGO(this.mDataExchange, parseInt(obj.name.substr(8)) -1);
                        break;
                    default:
                        break;
                }
            }
        }

        private handleTouchTapShop(e: egret.TouchEvent): void {
            SoundManager.getInstance().controlMusic("dice_3", true);
        }

        private handleGO(data,index): void {
            if (index >= 0) {
                NetCenter.getInstance().ctsExchange(data[index]);
            }
        }

        public handleAddStage(): void {
            super.handleAddStage();
            var self = this;
            var scale: number = (self.stage.stageHeight * 9 / 16) / self.stage.stageWidth;
            //self.UIA_bg.scaleX = 1 / scale;
            //self.UIA_bg.horizontalCenter = 0;
        }

        public pay(data,money:number): void {
            var url: string = "http://h5.leyan8.com:8081";
            var myDate = new Date();
            //myDate.getFullYear();    //获取完整的年份(4位,1970-????)
            //myDate.getMonth();       //获取当前月份(0-11,0代表1月)
            //myDate.getDate();        //获取当前日(1-31)
            //myDate.getDay();         //获取当前星期X(0-6,0代表星期天)
            //myDate.getTime();        //获取当前时间(从1970.1.1开始的毫秒数)
            //myDate.getHours();       //获取当前小时数(0-23)
            //myDate.getMinutes();     //获取当前分钟数(0-59)
            //myDate.getSeconds();     //获取当前秒数(0-59)
            //myDate.getMilliseconds();    //获取当前毫秒数(0-999)
            //myDate.toLocaleDateString();     //获取当前日期
            var out_trade_no: string = NetCenter.getInstance().mRole.mUserId.toString();
            out_trade_no += ""+ myDate.getFullYear() + myDate.getMonth() + myDate.getDate() + myDate.getHours() + myDate.getMinutes() + myDate.getSeconds();
            var subject: string = "Dice Game" + data[money] + " yuan to buy" + this.mDateMeau[money] + "coins";
            var price = data[money];
            url += "?out_trade_no=" + out_trade_no + "&subject=" + subject + "&price=" + price;
            window.open(url);
           // window.location.href = url;
        }

        public freshCoin(): void {
            if (this.label_buy) {
                this.label_buy.text = this.label_exchange.text= NetCenter.getInstance().mRole.mCoin.toString();
            }
        }

        public destPanel(): void {
            this.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.handleTouchTap, this);
            this.TB_shop.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.handleTouchTapShop, this);
        }
    }
}
