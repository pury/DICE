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
var game;
(function (game) {
    var PanelLogin = (function (_super) {
        __extends(PanelLogin, _super);
        function PanelLogin() {
            _super.call(this);
            this.name = "panelLogin";
            this.tt_name = new egret.TextField();
            this.tt_name.text = "请输入手机号";
            this.tt_name.type = egret.TextFieldType.INPUT;
            this.tt_name.touchEnabled = true;
            // this.tt_name.displayAsPassword = true;
        }
        var __egretProto__ = PanelLogin.prototype;
        __egretProto__.createCompleteEvent = function (event) {
            _super.prototype.createCompleteEvent.call(this, event);
            // this.addElement(this.tt_name);
            this.tt_name['_inputUtils']['stageText'].addEventListener("blur", this.onBlur, this);
            this.tt_name['_inputUtils']['stageText'].addEventListener("focus", this.onFocus, this);
            this.tt_name['_inputUtils']['stageText'].addEventListener("updateText", this.onUpdateText, this);
            this.addEventListener(egret.TouchEvent.TOUCH_TAP, this.handleTouchTap, this);
            this.ti_name.addEventListener(egret.TouchEvent.TOUCH_TAP, this.change, this);
            this.ti_password.addEventListener(egret.TouchEvent.TOUCH_TAP, this.change2, this);
        };
        __egretProto__.openPanel = function () {
            // this.ti_password.text = "";
            // this.label_pass.visible = true;
        };
        __egretProto__.onBlur = function (evt) {
            console.log("onBlur");
        };
        __egretProto__.onFocus = function (evt) {
            console.log("onFocus");
        };
        __egretProto__.onUpdateText = function (evt) {
            console.log("onUpdateText", this.tt_name['_inputUtils']['_getText']());
        };
        __egretProto__.focusInHandler = function (e) {
            console.log(222);
        };
        __egretProto__.focusOutHandler = function (e) {
            console.log(222);
        };
        __egretProto__.enterFrame = function (e) {
            console.log(222);
        };
        __egretProto__.change = function (e) {
            console.log(11);
            this.checkName(1);
            this.checkPass(0);
        };
        __egretProto__.change2 = function (e) {
            console.log(11);
            this.checkName(0);
            this.checkPass(1);
        };
        __egretProto__.handleTouchTap = function (e) {
            var obj = e.target;
            if (obj) {
                switch (obj.name) {
                    case "btn_login":
                        break;
                    case "btn_visitor":
                        game.GameUI.getInstance().manage_panel("panelRoom", "open", true);
                        break;
                    case "btn_register":
                    case "label_forget":
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
                        break;
                }
            }
        };
        __egretProto__.checkName = function (value) {
            if (value == 0) {
                this.label_name.visible = this.ti_name.text == "" ? true : false;
            }
            else if (value == 1) {
                this.label_name.visible = false;
            }
        };
        __egretProto__.checkPass = function (value) {
            if (value == 0) {
                this.label_pass.visible = this.ti_password.text == "" ? true : false;
            }
            else if (value == 1) {
                this.label_pass.visible = false;
            }
        };
        __egretProto__.checkLogin = function () {
            var alert = "";
            var reg = /^\d+$/g;
            var regPW = /^[A-Za-z0-9]+$/g;
            if (!reg.test(this.ti_name.text) || this.ti_name.text.length != 11 || this.ti_name.text.charAt(0) != "1") {
                alert = game.ConstString.mPhone;
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
                game.GameUI.getInstance().alertMag(alert, 1, 3, 0);
                return false;
            }
            return true;
        };
        __egretProto__.loginGO = function () {
            // if (this.checkLogin()) {
            /// this.ti_name.text = this.ti_name.text == "" ? "123456" : this.ti_name.text;
            game.NetCenter.getInstance().mPanel.mPanelRate = true;
            //game.GameUI.getInstance().manage_panel("panelRoom", "open", true);
            if (this.ti_name && this.ti_password) {
                game.NetCenter.getInstance().register(this.ti_name.text, this.ti_password.text, "", false);
            }
            // }
        };
        __egretProto__.handleAddStage = function () {
            _super.prototype.handleAddStage.call(this);
            var self = this;
            var scale = (self.stage.stageHeight * 9 / 16) / self.stage.stageWidth;
            self.UIA_bg.scaleX = 1 / scale;
            self.UIA_bg.horizontalCenter = 0;
        };
        __egretProto__.destPanel = function () {
            this.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.handleTouchTap, this);
            this.tt_name['_inputUtils']['stageText'].removeEventListener("blur", this.onBlur, this);
            this.tt_name['_inputUtils']['stageText'].removeEventListener("focus", this.onFocus, this);
            this.tt_name['_inputUtils']['stageText'].removeEventListener("updateText", this.onUpdateText, this);
        };
        return PanelLogin;
    })(game.PanelLoginUI);
    game.PanelLogin = PanelLogin;
    PanelLogin.prototype.__class__ = "game.PanelLogin";
})(game || (game = {}));
