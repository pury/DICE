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
    var PanelRate = (function (_super) {
        __extends(PanelRate, _super);
        function PanelRate() {
            _super.call(this);
            this.mData = [10, 100, 200, 500];
            this.name = "panelRate";
        }
        var __egretProto__ = PanelRate.prototype;
        __egretProto__.createCompleteEvent = function (event) {
            _super.prototype.createCompleteEvent.call(this, event);
            this.mContainer = [this.UIA_mu1, this.UIA_mu2, this.UIA_mu3, this.UIA_mu4];
            this.mIndex = 0;
            this.openPanel();
            this.addEventListener(egret.TouchEvent.TOUCH_TAP, this.handleTouchTap, this);
        };
        __egretProto__.openPanel = function () {
            this.adjustChoose(this.mIndex);
        };
        __egretProto__.adjustChoose = function (index) {
            if (this.mContainer) {
                var target = this.mContainer[this.mIndex];
                this.UIA_choose.x = target.x + target.width * 1 / 2;
                this.UIA_choose.y = target.y + target.height * 12 / 30;
            }
        };
        __egretProto__.handleTouchTap = function (e) {
            var obj = e.target;
            var gameUI = game.GameUI.getInstance();
            if (obj) {
                switch (obj.name) {
                    case "UIA_mu1":
                    case "UIA_mu2":
                    case "UIA_mu3":
                    case "UIA_mu4":
                        game.SoundManager.getInstance().controlMusic("dice_3", true);
                        this.mIndex = parseInt(obj.name.substr(6)) - 1;
                        this.adjustChoose(this.mIndex);
                        break;
                    case "UIA_enter":
                        game.SoundManager.getInstance().controlMusic("music", true);
                        game.NetCenter.getInstance().mMusicFlag = true;
                        this.getRoomInfo();
                        break;
                    default:
                        break;
                }
            }
        };
        __egretProto__.getRoomInfo = function () {
            game.NetCenter.getInstance().mPanel.mPanelRoom = true;
            game.NetCenter.getInstance().mRate = this.mData[this.mIndex];
            game.NetCenter.getInstance().ctsTableInfo((this.mIndex + 1) + 1000);
        };
        __egretProto__.handleAddStage = function () {
            _super.prototype.handleAddStage.call(this);
            var self = this;
            var scale = (self.stage.stageHeight * 9 / 16) / self.stage.stageWidth;
            self.UIA_loading.scaleX = self.UIA_bg.scaleX = 1 / scale;
            self.UIA_loading.horizontalCenter = self.UIA_bg.horizontalCenter = 0;
        };
        __egretProto__.destPanel = function () {
            this.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.handleTouchTap, this);
        };
        return PanelRate;
    })(game.PanelRateUI);
    game.PanelRate = PanelRate;
    PanelRate.prototype.__class__ = "game.PanelRate";
})(game || (game = {}));
