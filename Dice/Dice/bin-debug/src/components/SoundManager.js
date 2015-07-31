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
    var SoundManager = (function () {
        function SoundManager() {
            RES.addEventListener(RES.ResourceEvent.GROUP_COMPLETE, this.onResourceLoadComplete, this);
            RES.addEventListener(RES.ResourceEvent.GROUP_LOAD_ERROR, this.onResourceLoadError, this);
            RES.addEventListener(RES.ResourceEvent.GROUP_PROGRESS, this.onResourceProgress, this);
            RES.loadGroup("soundload");
        }
        var __egretProto__ = SoundManager.prototype;
        __egretProto__.onResourceLoadComplete = function (event) {
            if (event.groupName == "soundload") {
                RES.removeEventListener(RES.ResourceEvent.GROUP_COMPLETE, this.onResourceLoadComplete, this);
                RES.removeEventListener(RES.ResourceEvent.GROUP_LOAD_ERROR, this.onResourceLoadError, this);
                RES.removeEventListener(RES.ResourceEvent.GROUP_PROGRESS, this.onResourceProgress, this);
                this.sound = RES.getRes("music");
                this.sound.play(true);
            }
        };
        __egretProto__.onResourceLoadError = function (event) {
            //TODO
            console.warn("Group:" + event.groupName + " has failed to load");
            //忽略加载失败的项目
            //ignore loading failed projects
            this.onResourceLoadComplete(event);
        };
        __egretProto__.onResourceProgress = function (event) {
            if (event.groupName == "soundload") {
            }
        };
        SoundManager.getInstance = function () {
            if (this.instance == null) {
                this.instance = new SoundManager();
            }
            return (this.instance);
        };
        __egretProto__.controlMusic = function (value) {
            this.sound = RES.getRes("music");
            if (this.sound && this.sound != null) {
                if (value) {
                    this.sound.play(true);
                }
                else {
                    this.sound.pause();
                }
            }
        };
        return SoundManager;
    })();
    game.SoundManager = SoundManager;
    SoundManager.prototype.__class__ = "game.SoundManager";
})(game || (game = {}));
//# sourceMappingURL=SoundManager.js.map