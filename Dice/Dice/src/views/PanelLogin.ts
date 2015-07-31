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
    export class PanelLogin extends PanelLoginUI {
        private tt_name: egret.TextField;
        public constructor() {
            super();
            this.name = "panelLogin";
            this.tt_name = new egret.TextField();
            this.tt_name.text = "请输入手机号";
            this.tt_name.type = egret.TextFieldType.INPUT;
            this.tt_name.touchEnabled = true;
           // this.tt_name.displayAsPassword = true;
        }

        public createCompleteEvent(event: egret.gui.UIEvent): void {
            super.createCompleteEvent(event);
           // this.addElement(this.tt_name);
            this.tt_name['_inputUtils']['stageText'].addEventListener("blur", this.onBlur, this);
            this.tt_name['_inputUtils']['stageText'].addEventListener("focus", this.onFocus, this);
            this.tt_name['_inputUtils']['stageText'].addEventListener("updateText", this.onUpdateText, this);
            this.addEventListener(egret.TouchEvent.TOUCH_TAP, this.handleTouchTap, this);
            this.ti_name.addEventListener(egret.TouchEvent.TOUCH_TAP, this.change, this);
            this.ti_password.addEventListener(egret.TouchEvent.TOUCH_TAP, this.change2, this);

        }

        public openPanel(): void {
           // this.ti_password.text = "";
           // this.label_pass.visible = true;
        }

        public onBlur(evt: egret.Event) {
            console.log("onBlur");
        }

        public onFocus(evt: egret.Event) {
            console.log("onFocus");
        }

        public onUpdateText(evt: egret.Event) {
            console.log("onUpdateText", this.tt_name['_inputUtils']['_getText']());
        }

        private focusInHandler(e:Event): void {
            console.log(222);
        }

        private focusOutHandler(e: Event): void {
            console.log(222);
        }
        private enterFrame(e: egret.Event): void {
            console.log(222);

        }

        private change(e:egret.TouchEvent): void {
            console.log(11);
            this.checkName(1);
            this.checkPass(0);
        }

        private change2(e: egret.TouchEvent): void {
            console.log(11);
            this.checkName(0);
            this.checkPass(1);
        }

        private handleTouchTap(e: egret.TouchEvent): void {
            var obj: any = e.target;
            if (obj) {
                switch (obj.name) {
                    case "btn_login":
                        //game.GameUI.getInstance().manage_panel("panelRate", "open", true);
                      //  this.loginGO();
                        break;
                    case "btn_visitor":
                        game.GameUI.getInstance().manage_panel("panelRoom", "open", true);
                        break;
                    case "btn_register":
                    case "label_forget":
                    //    game.GameUI.getInstance().manage_panel("panelRegister", "open", true);
                        break;
                    case "ti_name":
                        if (this.ti_name.text == "请输入手机号") {
                            this.ti_name.text = "";
                        }
                        break;
                    case "UIA_bg":
                    case "UIA_logo":
                    case "UIA_1":
                    case "UIA_2":
                    case "UIA_11":
                    case "UIA_22":
                        this.checkName(0);
                        this.checkPass(0);
                        break;
                    default:
                        //if (this.ti_name.text == "") {
                        //    this.ti_name.text = "请输入手机号";
                        //}
                        break;
                }
            }
        }

        private checkName(value: number): void {
            if (value == 0) {
                this.label_name.visible = this.ti_name.text == "" ? true : false;
            } else if (value == 1) {
                this.label_name.visible = false;
            }
        }

        private checkPass(value: number): void {
            if (value == 0) {
                this.label_pass.visible = this.ti_password.text == "" ? true : false;
            } else if (value == 1) {
                this.label_pass.visible = false;
            }
        }

        private checkLogin(): boolean {
            var alert: string = "";
            var reg: RegExp = /^\d+$/g;
            var regPW: RegExp = /^[A-Za-z0-9]+$/g;
            if (!reg.test(this.ti_name.text) || this.ti_name.text.length != 11 || this.ti_name.text.charAt(0) != "1") {
                alert = ConstString.mPhone;
            }          
            //if (this.ti_password.text == "") {
            //    alert = (alert == "") ? ConstString.mPW1 : alert;
            //}
            //if (this.ti_password.text.length < 6) {
            //    alert = (alert == "") ? ConstString.mPW2 : alert;
            //}
            //if (!regPW.test(this.ti_password.text)) {
            //    alert = (alert == "") ? ConstString.mPW3 : alert;
            //}
            if (alert != "") {
                GameUI.getInstance().alertMag(alert, 1, 3, 0);
                return false;
            }
            return true;
        }

        public loginGO(): void {
           // if (this.checkLogin()) {
           /// this.ti_name.text = this.ti_name.text == "" ? "123456" : this.ti_name.text;
            NetCenter.getInstance().mPanel.mPanelRate = true;
            //game.GameUI.getInstance().manage_panel("panelRoom", "open", true);
            if (this.ti_name && this.ti_password) {
                NetCenter.getInstance().register(this.ti_name.text, this.ti_password.text, "", false);
            }
           // }
        }

        public handleAddStage(): void {
            super.handleAddStage();
            var self = this;
            var scale: number = (self.stage.stageHeight * 9 / 16) / self.stage.stageWidth;
            self.UIA_bg.scaleX = 1 / scale;
            self.UIA_bg.horizontalCenter = 0;
        }

        public destPanel(): void {
            this.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.handleTouchTap, this);
            this.tt_name['_inputUtils']['stageText'].removeEventListener("blur", this.onBlur, this);
            this.tt_name['_inputUtils']['stageText'].removeEventListener("focus", this.onFocus, this);
            this.tt_name['_inputUtils']['stageText'].removeEventListener("updateText", this.onUpdateText, this);
        }
    }
}