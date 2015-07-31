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
var Main = (function (_super) {
    __extends(Main, _super);
    function Main() {
        _super.call(this);
        this.flag = false;
        this.theRequest = new Object();
        this.showcase = new Showcase();
        this.addEventListener(egret.Event.ADDED_TO_STAGE, this.onAddToStage, this);
    }
    var __egretProto__ = Main.prototype;
    __egretProto__.onAddToStage = function (event) {
        //inject the custom material parser
        //注入自定义的素材解析器
        console.log("WW: " + this.stage.stageWidth + "  HH: " + this.stage.stageHeight);
        game.Config.getInstance().StageWidth = this.stage.stageWidth;
        game.Config.getInstance().StageHeight = this.stage.stageHeight;
        egret.Injector.mapClass("egret.gui.IAssetAdapter", AssetAdapter);
        egret.Injector.mapClass("egret.gui.ISkinAdapter", SkinAdapter);
        // load skin theme configuration file, you can manually modify the file. And replace the default skin.
        //加载皮肤主题配置文件,可以手动修改这个文件。替换默认皮肤。
        egret.gui.Theme.load("resource/theme.thm");
        //Config loading process interface
        //设置加载进度界面
        // initialize the Resource loading library
        //初始化Resource资源加载库
        RES.addEventListener(RES.ResourceEvent.CONFIG_COMPLETE, this.onConfigComplete, this);
        RES.loadConfig("resource/resource.json", "resource/");
    };
    /**
     * 配置文件加载完成,开始预加载preload资源组。
     * Loading of configuration file is complete, start to pre-load the preload resource group
     */
    __egretProto__.onConfigComplete = function (event) {
        RES.removeEventListener(RES.ResourceEvent.CONFIG_COMPLETE, this.onConfigComplete, this);
        RES.addEventListener(RES.ResourceEvent.GROUP_COMPLETE, this.onResourceLoadComplete, this);
        RES.addEventListener(RES.ResourceEvent.GROUP_LOAD_ERROR, this.onResourceLoadError, this);
        RES.addEventListener(RES.ResourceEvent.GROUP_PROGRESS, this.onResourceProgress, this);
        RES.loadGroup("preload");
    };
    /**
     * preload资源组加载完成
     * preload resource group is loaded
     */
    __egretProto__.onResourceLoadComplete = function (event) {
        if (event.groupName == "preload") {
            RES.removeEventListener(RES.ResourceEvent.GROUP_COMPLETE, this.onResourceLoadComplete, this);
            RES.removeEventListener(RES.ResourceEvent.GROUP_LOAD_ERROR, this.onResourceLoadError, this);
            RES.removeEventListener(RES.ResourceEvent.GROUP_PROGRESS, this.onResourceProgress, this);
            this.createScene();
        }
    };
    /**
    * 资源组加载出错
     * Resource group loading failed
    */
    __egretProto__.onResourceLoadError = function (event) {
        //TODO
        console.warn("Group:" + event.groupName + " has failed to load");
        //忽略加载失败的项目
        //ignore loading failed projects
        this.onResourceLoadComplete(event);
    };
    /**
     * preload资源组加载进度
     * loading process of preload resource
     */
    __egretProto__.onResourceProgress = function (event) {
        if (event.groupName == "preload") {
        }
    };
    Main.getInstance = function () {
        if (this.instance == null) {
            this.instance = new Main();
        }
        return (this.instance);
    };
    __egretProto__.createScene = function () {
        game.NetCenter.getInstance().mCon = true;
        this.addChild(game.GameLayer.getInstance());
        this.addChild(game.GameUI.getInstance());
        game.GameUI.getInstance().alertMag("DICE版本：0.6.3", 0, 4, 2);
        var url = location.search;
        var theRequest = new Object();
        var flag = false;
        if (url.indexOf("?") != -1) {
            var str = url.substr(1);
            var strs = str.split("&");
            var source = ["retail", "uid", "group", "token"];
            if (strs.length == 4) {
                for (var i = 0; i < strs.length; i++) {
                    var index = strs[i].split("=")[0];
                    var target = strs[i].split("=")[1];
                    if (index == source[i]) {
                        theRequest[index] = target;
                    }
                    else {
                        break;
                    }
                    if (i == 3) {
                        flag = true;
                    }
                }
            }
        }
        if (flag) {
            game.NetCenter.getInstance().URL = window.location.href.split("?")[0];
            game.GameUI.getInstance().mHelp = true;
            game.NetCenter.getInstance().mTheRequest = theRequest;
            game.GameUI.getInstance().addHelp();
        }
        else {
            game.GameUI.getInstance().alertMag("请选择正确的入口登录！", 0, 20, 1);
        }
        //egret.Profiler.getInstance().run();
        this.flag = true;
        //在GUI范围内一律使用addElement等方法替代addChild等方法。
        //Within GUI scope, addChild methods should be replaced by addElement methods.
        // this.guiLayer.addElement(panelLogin);
    };
    __egretProto__.onClick = function (evt) {
        // this.testText['_inputUtils']['stageText'].addEventListener("blur", this.onBlur, this);
        //  this.testText['_inputUtils']['stageText'].addEventListener("focus", this.onFocus, this);
        //  this.testText['_inputUtils']['stageText'].addEventListener("updateText", this.onUpdateText, this);
    };
    __egretProto__.onBlur = function (evt) {
        console.log("onBlur");
        //    this.testText['_inputUtils']['stageText'].addEventListener("blur", this.onBlur, this);
        //    this.testText['_inputUtils']['stageText'].addEventListener("focus", this.onFocus, this);
        //    this.testText['_inputUtils']['stageText'].addEventListener("updateText", this.onUpdateText, this);
    };
    __egretProto__.onFocus = function (evt) {
        console.log("onFocus");
    };
    __egretProto__.onUpdateText = function (evt) {
        //  console.log("onUpdateText", this.testText['_inputUtils']['_getText']());
    };
    __egretProto__.onPostComplete = function (event) {
        var loader = event.target;
        var data = loader.data;
        console.log(data.toString());
    };
    __egretProto__.onRotation = function (angleX, angleY, angleZ) {
        if (this.flag) {
            game.GameUI.getInstance().handleRotation(angleX, angleY, angleZ);
        }
    };
    return Main;
})(egret.DisplayObjectContainer);
Main.prototype.__class__ = "Main";
