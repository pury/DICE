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
    /**All panels in this container.*/
    var GameUI = (function (_super) {
        __extends(GameUI, _super);
        function GameUI() {
            _super.call(this);
            this.init();
        }
        var __egretProto__ = GameUI.prototype;
        __egretProto__.init = function () {
            this.panelLogin = new game.PanelLogin();
            this.panelResult = new PanelResult();
            this.panelRoom = new game.PanelRoom();
            this.panelSet = new game.PanelSet();
            this.panelRegister = new game.PanelRegister();
            this.panelRole = new game.PanelRole();
            this.panelHelp = new game.PanelHelp();
            this.panelMoreGames = new game.PanelMoreGames();
            this.ALLPANEL = new Object();
            this.ALLPANEL["panelLogin"] = this.panelLogin;
            this.ALLPANEL["panelResult"] = this.panelResult;
            this.ALLPANEL["panelRoom"] = this.panelRoom;
            this.ALLPANEL["panelSet"] = this.panelSet;
            this.ALLPANEL["panelRegister"] = this.panelRegister;
            this.ALLPANEL["panelRole"] = this.panelRole;
            this.ALLPANEL["panelHelp"] = this.panelHelp;
            this.ALLPANEL["panelMoreGames"] = this.panelMoreGames;
            this.addElement(this.panelLogin);
        };
        GameUI.getInstance = function () {
            if (this.instance == null) {
                this.instance = new GameUI();
            }
            return (this.instance);
        };
        __egretProto__.manage_panel = function (name, value, flag) {
            if (flag === void 0) { flag = false; }
            var panel = this.ALLPANEL[name];
            if (panel) {
                if (value == "open") {
                    if (flag) {
                        this.removeAllElements();
                    }
                    this.addElement(panel);
                    // panel.scaleY = this.stage.height / panel.height;
                    console.log(panel.height);
                }
                else if (value == "close") {
                    if (this.contains(panel)) {
                        this.removeElement(panel);
                    }
                }
            }
        };
        return GameUI;
    })(egret.gui.UIStage);
    game.GameUI = GameUI;
    GameUI.prototype.__class__ = "game.GameUI";
})(game || (game = {}));
//# sourceMappingURL=GameUI.js.map