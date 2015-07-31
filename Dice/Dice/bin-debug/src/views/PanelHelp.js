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
    var PanelHelp = (function (_super) {
        __extends(PanelHelp, _super);
        function PanelHelp() {
            _super.call(this);
            this.name = "panelHelp";
        }
        var __egretProto__ = PanelHelp.prototype;
        __egretProto__.createCompleteEvent = function (event) {
            _super.prototype.createCompleteEvent.call(this, event);
            this.UIA_back.addEventListener(egret.TouchEvent.TOUCH_TAP, this.handleTouchTap, this);
            this.addEventListener(egret.TouchEvent.TOUCH_TAP, this.handleTouchTap, this);
        };
        __egretProto__.openPanel = function () {
            if (this.UIA_back) {
                this.UIA_back.source = game.GameUI.getInstance().mHelp ? "dice_btn_1_png" : "dice_btn_4_png";
            }
        };
        __egretProto__.handleTouchTap = function (e) {
            if (game.GameUI.getInstance().mHelp) {
                game.SoundManager.getInstance().controlMusic("rate", true);
                game.NetCenter.getInstance().mPanel.mPanelRate = true;
                game.NetCenter.getInstance().ctsLoginSpecial(game.NetCenter.getInstance().mTheRequest["retail"], game.NetCenter.getInstance().mTheRequest["uid"], game.NetCenter.getInstance().mTheRequest["group"], game.NetCenter.getInstance().mTheRequest["token"]);
            }
            else {
                game.GameUI.getInstance().manage_panel("panelHelp", "close", true);
            }
        };
        __egretProto__.handleAddStage = function () {
            _super.prototype.handleAddStage.call(this);
        };
        __egretProto__.destPanel = function () {
            this.UIA_back.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.handleTouchTap, this);
        };
        return PanelHelp;
    })(game.PanelHelpUI);
    game.PanelHelp = PanelHelp;
    PanelHelp.prototype.__class__ = "game.PanelHelp";
})(game || (game = {}));
