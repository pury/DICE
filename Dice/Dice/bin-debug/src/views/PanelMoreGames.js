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
    var PanelMoreGames = (function (_super) {
        __extends(PanelMoreGames, _super);
        function PanelMoreGames() {
            _super.call(this);
            this.name = "panelMoreGames";
        }
        var __egretProto__ = PanelMoreGames.prototype;
        __egretProto__.createCompleteEvent = function (event) {
            _super.prototype.createCompleteEvent.call(this, event);
            this.addEventListener(egret.TouchEvent.TOUCH_TAP, this.handleTouchTap, this);
        };
        __egretProto__.openPanel = function () {
        };
        __egretProto__.handleTouchTap = function (e) {
            var obj = e.target;
            if (obj) {
                switch (obj.name) {
                    case "btn_close":
                        game.SoundManager.getInstance().controlMusic("dice_3", true);
                        game.GameUI.getInstance().manage_panel("panelMoreGames", "close");
                        break;
                    case "UIA_dice":
                        game.SoundManager.getInstance().controlMusic("dice_3", true);
                        var request = game.NetCenter.getInstance().mTheRequest;
                        var url = game.NetCenter.getInstance().URL + "?retail=" + request["retail"] + "&uid=" + request["uid"] + "&token=" + request["token"];
                        //window.open(url, "_self");
                        game.GameUI.getInstance().alertMag("您正在《大话骰子》游戏中哦~", 0, 3, 0);
                        break;
                    case "UIA_beer":
                        game.SoundManager.getInstance().controlMusic("dice_3", true);
                        var request = game.NetCenter.getInstance().mTheRequest;
                        var url = game.NetCenter.getInstance().URL_BEER + "?retail=" + request["retail"] + "&uid=" + request["uid"] + "&token=" + request["token"];
                        window.open(url, "_self");
                        break;
                    case "UIA_cow":
                        game.SoundManager.getInstance().controlMusic("dice_3", true);
                        game.GameUI.getInstance().alertMag("敬请期待！", 0, 3, 0);
                        break;
                    default:
                        break;
                }
            }
        };
        __egretProto__.destPanel = function () {
            this.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.handleTouchTap, this);
        };
        return PanelMoreGames;
    })(game.PanelMoreGamesUI);
    game.PanelMoreGames = PanelMoreGames;
    PanelMoreGames.prototype.__class__ = "game.PanelMoreGames";
})(game || (game = {}));
