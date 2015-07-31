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
    var ConstString = (function () {
        function ConstString() {
        }
        var __egretProto__ = ConstString.prototype;
        ConstString.mCall = "叫了";
        ConstString.mNumber = "个";
        ConstString.mCount = "点";
        ConstString.mGameStart = "游戏已开始，请摇动手机:";
        ConstString.mSecond = "秒";
        ConstString.mFont = "Adobe 黑体 Std R";
        ConstString.mPhone = "请输入正确的手机号！";
        ConstString.mPW1 = "密码不能为空！";
        ConstString.mPW2 = "密码不能少于6个字符！";
        ConstString.mPW3 = "密码包含非法字符！";
        ConstString.mPW4 = "两次输入密码不一致！";
        ConstString.mCoin = "金币:";
        ConstString.mPass = "验证码错误！";
        return ConstString;
    })();
    game.ConstString = ConstString;
    ConstString.prototype.__class__ = "game.ConstString";
})(game || (game = {}));
