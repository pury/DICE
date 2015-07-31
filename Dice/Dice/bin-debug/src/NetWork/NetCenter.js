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
    /**Use Html5 WebSocket.*/
    var NetCenter = (function (_super) {
        __extends(NetCenter, _super);
        function NetCenter() {
            _super.call(this);
            this.DICE_IP = "127.0.0.1"; //"121.40.197.72";192.168.4.102;127.0.0.1
            this.URL = "http://h5.quukk.com/dice/";
            this.URL_BEER = "http://h5.quukk.com/beer/";
            this.DICE_PORT = 9798;
            this.user_create_try = 0;
            this.device_id = "";
            this.mStartFlag = false;
            this.mHostPos = 0;
            this.mTableStatus = 0;
            this.NET_FLAG = false;
            this.mCallDiceFlag = false;
            /**The background music*/
            this.mMusicFlag = false;
            /**The table visible*/
            this.mTableFlag = false;
            /**dice sound*/
            this.mSoundDice = false;
            this.retailid = "";
            this.retailuser = "";
            this.retailgroup = "";
            this.token = "";
            this.mLoginFlag = false;
            this.PassportId = "";
            this.onOpen = function () {
                console.info("Connection Successful!");
                NetCenter.getInstance().mLoginFlag = true;
                NetCenter.getInstance().NET_FLAG = true;
                if (game.GameUI.getInstance().mAlert && game.GameUI.getInstance().contains(game.GameUI.getInstance().mAlert)) {
                }
                if (NetCenter.getInstance().mMMM) {
                    NetCenter.getInstance().mMMM = false;
                }
                // GameLayer.getInstance().removeLoading();
            };
            this.onRrror = function (e) {
                Scut.Action.error();
                console.error("Connection Error:");
            };
            this.onMessage = function (e) {
            };
            this.onClose = function () {
                Scut.Action.close();
                if (!NetCenter.getInstance().mCon) {
                    var request = NetCenter.getInstance().mTheRequest;
                    var url = NetCenter.getInstance().URL + "?retail=" + request["retail"] + "&uid=" + request["uid"] + "&token=" + request["token"];
                    window.open(url, "_self");
                    console.info("Connection Close!");
                }
            };
            this.mRole = new game.NetRole();
            this.mPlayerRole = new game.NetRole();
            this.mPanel = new game.NetPanel();
            this.mRoomPlayers = [];
            this.mRoomRealPlayers = [];
            this.mAccount = this.mPassWord = this.mCode = "";
            this.mIsRegister = false;
            this.mTheRequest = new Object();
            this.mLoginRoleFlag = false;
            this.mNeedCallDice = [1, 1];
            this.mFirstCall = false;
            this.mRealPosition = 0;
            this.mRequest = new Object();
            this.mRate = 10;
            this.mMMM = false;
            this.mCon = false;
        }
        var __egretProto__ = NetCenter.prototype;
        __egretProto__.init = function () {
            try {
                Scut.Net.setSignKey('3f261d4f2f8941ea90552cf7507f021b');
                Scut.Net.setUrl("ws://" + this.DICE_IP + ":" + this.DICE_PORT + "/test", this.stcReceive);
                Scut.Net.regOpenCallback(this.onOpen);
                Scut.Net.regClosedCallback(this.onClose);
                Scut.Net.regErrorCallback(this.onRrror);
                Scut.Net.connect();
                this.addEvent(game.NetProcotol.npClientCall, this.stcCallDice);
                this.addEvent(game.NetProcotol.npClientOpen, this.stcOpenResult);
                this.addEvent(game.NetProcotol.npClientStart, this.stcStart);
                this.addEvent(game.NetProcotol.npClientPass, this.stcRegister);
                this.addEvent(game.NetProcotol.npClientLogin, this.stcLogin);
                this.addEvent(game.NetProcotol.npClientRegister, this.stcRegisterNormal);
                this.addEvent(game.NetProcotol.npServerRoom, this.stcRoomInfo);
                this.addEvent(game.NetProcotol.npClientCreate, this.stcCreate);
                this.addEvent(game.NetProcotol.npClietnPlayerDices, this.stcPlayerDices);
                //this.addEvent(NetProcotol.npClientGetRole, this.stcGetRole);
                this.addEvent(game.NetProcotol.npClientRole, this.stcRole);
                this.addEvent(game.NetProcotol.npClientTable, this.stcTable);
                this.addEvent(game.NetProcotol.npClientExchange, this.stcExchange);
                this.addEvent(game.NetProcotol.npClientBackRate, this.stcBackRate);
                this.addEvent(game.NetProcotol.npClietnCallEnd, this.stcCallEnd);
            }
            catch (e) {
                console.error("Failed To Create Html5 WebSocket!");
                return;
            }
            ;
        };
        /***********************************SERVER TO CLIENT************************************************/
        __egretProto__.stcReceive = function (data) {
            Scut.Action.receive(data);
            console.log("receive: " + data);
        };
        __egretProto__.stcRegister = function (data) {
            if (data.getErrorCode() == 0) {
                console.log("action1002:" + data.toString());
                var pid = data.getData().PassportId;
                var pwd = data.getData().Password;
                console.log("通行证注册成功:[" + pid + "](" + pwd + ")");
                NetCenter.getInstance().ctsLogin(pid, pwd);
            }
        };
        __egretProto__.stcRegisterNormal = function (data) {
            if (data.getErrorCode() == 0) {
                console.log("action1003:" + data.toString());
                //var pid = data.getData().PassportId;
                //var pwd = data.getData().Password;
                if (data.getErrorCode() == 0) {
                    console.log("通行证注册成功!");
                    NetCenter.getInstance().ctsLogin(NetCenter.getInstance().mAccount, NetCenter.getInstance().mPassWord);
                }
            }
        };
        __egretProto__.stcLogin = function (_data) {
            if (_data.getErrorCode() != 10000) {
                console.log("action1004 " + _data.toString());
                var data = _data.getData();
                if (data != null) {
                    if (NetCenter.getInstance().mRole) {
                        NetCenter.getInstance().mRole.mUserId = data.UserId;
                    }
                    var sessionId = data.SessionId;
                    var userId = data.UserId;
                    var userType = data.UserType;
                    var loginTime = data.LoginTime;
                    var guideId = data.GuideId;
                    var passportId = data.PassportId;
                    NetCenter.getInstance().PassportId = passportId.split("@")[0].toLowerCase();
                    console.log("登录成功:[" + passportId + "]" + "        _data.getErrorCode() == " + _data.getErrorCode() + "  userId= " + userId);
                }
            }
            else {
                game.GameUI.getInstance().alertMag("服务器繁忙，请稍后进入...", 1, 20, 1);
                console.log("登录失败:(" + _data.getErrorCode() + ")  " + _data.getError());
            }
        };
        __egretProto__.stcCreate = function (_data) {
            if (_data.getErrorCode() == 0) {
                console.log("角色创建成功:" + _data.toString());
                var data = _data.getData();
                if (data != null) {
                }
            }
            else {
                console.log("角色创建失败，请尝试重新创建");
            }
        };
        __egretProto__.stcRoomInfo = function (_data) {
            if (_data.getErrorCode() == 0) {
                console.log("房间信息加载成功:" + _data.toString());
                var data = _data.getData();
                if (data != null) {
                    NetCenter.getInstance().mRoomPlayers = [];
                    NetCenter.getInstance().mRoomRealPlayers = [];
                    NetCenter.getInstance().mHostPos = data.HostPos;
                    NetCenter.getInstance().mTableStatus = data.TableStatus;
                    var ii = 0;
                    for (var i in data.Data) {
                        NetCenter.getInstance().mRoomPlayers.push(data.Data[i]);
                        if (data.Data[i].UserId > 0) {
                            if (data.Data[i].UserId == NetCenter.getInstance().mRole.mUserId) {
                                NetCenter.getInstance().mRealPosition = ii;
                            }
                            NetCenter.getInstance().mRoomRealPlayers.push(data.Data[i]);
                            ii++;
                        }
                        if (data.Data[i].UserId == NetCenter.getInstance().mRole.mUserId) {
                            NetCenter.getInstance().mRole.mName = data.Data[i].NickName;
                            NetCenter.getInstance().mRole.mCoin = data.Data[i].GameCoin;
                            NetCenter.getInstance().mRole.mPos = data.Data[i].Position;
                        }
                    }
                }
                NetCenter.getInstance().goLogin();
                if (NetCenter.getInstance().mTableFlag) {
                    NetCenter.getInstance().dispatchEvent(new game.NetEvent(game.NetEvent.EVENT_ROOMPLAYER, NetCenter.getInstance().mRoomPlayers));
                }
            }
            else {
                game.GameUI.getInstance().alertMag("房间信息加载失败!");
                console.log("房间信息加载失败！");
            }
        };
        __egretProto__.stcStart = function (_data) {
            if (_data.getErrorCode() == 0) {
                game.GameUI.getInstance().flag = true;
                NetCenter.getInstance().dispatchEvent(new game.NetEvent(game.NetEvent.EVENT_START, []));
                console.log("开局成功！");
            }
            else {
                console.log("开局失败！");
            }
        };
        __egretProto__.stcPlayerDices = function (_data) {
            if (_data.getErrorCode() == 0) {
                var data = _data.getData();
                NetCenter.getInstance().dispatchEvent(new game.NetEvent(game.NetEvent.EVENT_PLAYERDICES, data));
            }
            else {
                console.log("摇失败了:" + _data.getError());
            }
        };
        __egretProto__.stcCallDice = function (_data) {
            if (_data.getErrorCode() == 0) {
                var data = _data.getData();
                if (data != null) {
                    NetCenter.getInstance().mNeedCallDice[0] = data.Count;
                    NetCenter.getInstance().mNeedCallDice[1] = data.Point;
                    console.log("玩家[" + data.NickName + "](" + data.UserId + ")叫了" + data.Count + "个" + data.Point);
                    NetCenter.getInstance().dispatchEvent(new game.NetEvent(game.NetEvent.EVENT_CALLDICE, data));
                }
            }
            else {
                console.log("叫骰失败:(" + _data.getErrorCode() + ")" + _data.getError());
            }
        };
        __egretProto__.stcOpenResult = function (_data) {
            if (_data.getErrorCode() == 0) {
                var data = _data.getData();
                NetCenter.getInstance().mResult = data;
                game.GameUI.getInstance().manage_panel("panelResult", "open", false);
                NetCenter.getInstance().dispatchEvent(new game.NetEvent(game.NetEvent.EVENT_OPENRESULT, data));
            }
            else {
                console.log("结果异常！" + _data.getErrorCode() + "    " + _data.getError());
            }
        };
        __egretProto__.stcGetRole = function (_data) {
            if (_data.getErrorCode() == 0) {
                var data = _data.getData();
                if (data != null) {
                    NetCenter.getInstance().mPlayerRole.mUserId = data.UserId;
                    NetCenter.getInstance().mPlayerRole.mName = data.NickName;
                    NetCenter.getInstance().mPlayerRole.mIcon = data.HeadIcon;
                    NetCenter.getInstance().mPlayerRole.mGender = data.Sex;
                    NetCenter.getInstance().mPlayerRole.mCoin = data.GameCoin;
                    NetCenter.getInstance().mPlayerRole.mGift = data.GiftCoin;
                    game.GameUI.getInstance().manage_panel("panelRole", "open", false);
                    if (game.GameUI.getInstance().mRoleInfo != null) {
                        game.GameUI.getInstance().manage_panel("panelSet", "close", false);
                    }
                }
            }
            else {
                console.log("获取玩家数据异常！" + _data.getErrorCode() + "    " + _data.getError());
            }
        };
        __egretProto__.stcRole = function (_data) {
            console.log("receive1014: _data.getErrorCode() = " + _data.getErrorCode());
            if (_data.getErrorCode() == 0) {
                var data = _data.getData();
                if (data != null) {
                    if (data.UserId == NetCenter.getInstance().mRole.mUserId) {
                        NetCenter.getInstance().mRole.mName = data.NickName;
                        NetCenter.getInstance().mRole.mIcon = data.HeadIcon;
                        NetCenter.getInstance().mRole.mGender = data.Sex;
                        NetCenter.getInstance().mRole.mCoin = data.GameCoin;
                        NetCenter.getInstance().mRole.mGift = data.GameTicket;
                    }
                    NetCenter.getInstance().mPlayerRole.mUserId = data.UserId;
                    NetCenter.getInstance().mPlayerRole.mName = data.NickName;
                    NetCenter.getInstance().mPlayerRole.mIcon = data.HeadIcon;
                    NetCenter.getInstance().mPlayerRole.mGender = data.Sex;
                    NetCenter.getInstance().mPlayerRole.mCoin = data.GameCoin;
                    NetCenter.getInstance().mPlayerRole.mGift = data.GameTicket;
                    game.GameUI.getInstance().freshSome();
                    if (NetCenter.getInstance().mPanel.mPanelRate) {
                        game.GameUI.getInstance().manage_panel("panelHelp", "close");
                        NetCenter.getInstance().loadRes();
                    }
                    if (NetCenter.getInstance().mPanel.mPanelRole) {
                        NetCenter.getInstance().mPanel.mPanelRole = false;
                        game.GameUI.getInstance().manage_panel("panelRole", "open", false);
                        if (game.GameUI.getInstance().mRoleInfo != null) {
                            game.GameUI.getInstance().manage_panel("panelSet", "close", false);
                        }
                    }
                }
            }
            else {
                console.log("获取玩家数据异常！" + _data.getErrorCode() + "    " + _data.getError());
            }
        };
        __egretProto__.stcTable = function (_data) {
            if (_data.getErrorCode() == 0) {
                var data = _data.getData();
                if (data != null) {
                }
            }
            else {
                // GameUI.getInstance().alertMag("进去桌子异常");
                console.log("进去桌子异常！" + _data.getErrorCode());
            }
        };
        __egretProto__.stcExchange = function (_data) {
            if (_data.getErrorCode() == 0) {
                //GameUI.getInstance().alertMag("兑换成功！", 0, 3, 1);
                game.GameUI.getInstance().showExchange(0);
                var data = _data.getData();
                if (data != null) {
                }
            }
            else {
                console.log("兑换失败！" + _data.getErrorCode());
                game.GameUI.getInstance().showExchange(1);
            }
        };
        __egretProto__.stcBackRate = function (_data) {
            if (_data.getErrorCode() == 0) {
                //GameUI.getInstance().alertMag("兑换成功！", 0, 3, 1);
                if (NetCenter.getInstance().mPanel.mPanelRate) {
                    NetCenter.getInstance().mPanel.mPanelRate = false;
                    game.SoundManager.getInstance().controlMusic("rate", true);
                    game.GameUI.getInstance().manage_panel("panelRate", "open", true);
                }
                var data = _data.getData();
                if (data != null) {
                }
            }
            else {
                console.log("返回选择倍率！" + _data.getErrorCode());
            }
        };
        __egretProto__.stcCallEnd = function (_data) {
            if (_data.getErrorCode() == 0) {
                console.log("叫骰子阶段结束！");
                if (NetCenter.getInstance().mTableFlag) {
                    NetCenter.getInstance().dispatchEvent(new game.NetEvent(game.NetEvent.EVENT_CALLEND, []));
                }
            }
            else {
                console.log("叫骰子结束阶段异常！ " + _data.getErrorCode());
            }
        };
        /***********************************CLIENT TO SERVER************************************************/
        __egretProto__.reg = function (device) {
            this.device_id = device;
            Scut.Net.connect();
            //game.GameLayer.getInstance().addLoading();
            game.GameUI.getInstance().alertMag("连接服务器中...", 1, 10, 0);
        };
        __egretProto__.register = function (account, password, code, isRegister) {
            this.mAccount = account;
            this.mPassWord = password;
            this.mCode = code;
            this.mIsRegister = isRegister;
            if (Scut.Net.isConnect()) {
                this.start();
            }
            else {
                Scut.Net.connect();
                //game.GameLayer.getInstance().addLoading();
                game.GameUI.getInstance().alertMag("连接服务器中...", 1, 10, 0);
            }
        };
        __egretProto__.ctsRegister = function (device) {
            console.log("[action1002]通行证接口 .....");
            this.sendMsg({
                ActionId: game.NetProcotol.npClientPass,
                DeviceID: this.device_id,
            });
        };
        __egretProto__.ctsRegisterNormal = function () {
            console.log("[action1003]通行证接口 .....");
            this.sendMsg({
                ActionId: game.NetProcotol.npClientRegister,
                UserName: this.mAccount,
                Password: this.mPassWord,
                Authcode: this.mCode,
            });
        };
        __egretProto__.ctsLogin = function (pid, pwd) {
            console.log("[action1004]尝试进行登录 ....");
            this.mIsRegister = false;
            this.sendMsg({
                ActionId: game.NetProcotol.npClientLogin,
                // RetailID: "leyan",          // 必带
                PassportId: pid,
                Password: pwd,
            });
        };
        __egretProto__.ctsLoginSpecial = function (retailid, retailuser, retailgroup, token) {
            this.retailid = retailid;
            this.retailuser = retailuser;
            this.retailgroup = retailgroup;
            this.token = token;
            if (Scut.Net.isConnect()) {
                this.start();
            }
            else {
                Scut.Net.connect();
                game.GameUI.getInstance().alertMag("连接服务器中...", 1, 10, 0);
            }
        };
        __egretProto__.ctsTableInfo = function (roomid) {
            this.sendMsg({
                ActionId: game.NetProcotol.npClientTable,
                RoomId: roomid
            });
        };
        __egretProto__.ctsRoomInfo = function () {
            this.sendMsg({
                ActionId: game.NetProcotol.npServerRoom
            });
        };
        __egretProto__.ctsStart = function () {
            //this.addEvent(NetProcotol.npClientStart, this.stcStart);
            this.sendMsg({
                ActionId: game.NetProcotol.npClientStart
            });
        };
        __egretProto__.ctsPlayerDices = function () {
            this.sendMsg({
                ActionId: game.NetProcotol.npClietnPlayerDices
            });
        };
        __egretProto__.ctsCallDice = function (point, count) {
            this.sendMsg({
                ActionId: game.NetProcotol.npClientCall,
                Point: point,
                Count: count,
            });
        };
        __egretProto__.ctsOpenResult = function () {
            this.sendMsg({
                ActionId: game.NetProcotol.npClientOpen
            });
        };
        __egretProto__.ctsGetRole = function (userid) {
            this.sendMsg({
                ActionId: game.NetProcotol.npClientGetRole,
                UserId: userid
            });
        };
        __egretProto__.ctsRole = function (userid) {
            this.sendMsg({
                ActionId: game.NetProcotol.npClientRole,
                UserId: userid
            });
        };
        __egretProto__.ctsExchange = function (count) {
            this.sendMsg({
                ActionId: game.NetProcotol.npClientExchange,
                Count: count
            });
        };
        __egretProto__.ctsBackRate = function () {
            this.sendMsg({
                ActionId: game.NetProcotol.npClientBackRate
            });
        };
        __egretProto__.pushEvent = function (protocol, param) {
            NetCenter.getInstance().dispatchEvent(new game.NetEvent(protocol, param));
        };
        __egretProto__.addEvent = function (id, event) {
            //console.log("addEvent: id = " + id);
            Scut.Action.events.add(id, event);
        };
        __egretProto__.sendMsg = function (msg) {
            if (msg && msg != "") {
                try {
                    Scut.Net.Instance().send(Scut.Net.Params.extend(msg));
                }
                catch (e) {
                    game.GameUI.getInstance().alertMag("连接服务器中...", 1, 10, 0);
                }
            }
        };
        /***************************************************************************************************/
        __egretProto__.loadRes = function () {
            game.LoadManager.getInstance().loadResource("progress");
        };
        __egretProto__.selectRate = function () {
            if (this.mPanel.mPanelRate) {
                this.mPanel.mPanelRate = false;
                game.GameUI.getInstance().manage_panel("panelRate", "open", true);
            }
        };
        __egretProto__.goLogin = function () {
            if (NetCenter.getInstance().mPanel.mPanelRoom) {
                NetCenter.getInstance().mPanel.mPanelRoom = false;
                game.GameUI.getInstance().manage_panel("panelRoom", "open", true);
                if (!game.GameLayer.getInstance().mFlagRoom) {
                    game.GameLayer.getInstance().showProgress();
                }
            }
        };
        __egretProto__.creatNewRole = function (passportId) {
            var pid = passportId;
            var randomname = game.RandomName.getRandomName();
            console.log("为账号[" + pid + "]创建新的游戏角色(action1005) ....");
            this.sendMsg(Scut.Net.Params.extend({
                ActionId: game.NetProcotol.npClientCreate,
                UserName: randomname,
                Sex: 0,
                HeadID: "sunwukong",
                RetailID: "leyan",
                Pid: pid,
                MobileType: 0,
                ScreenX: 480,
                ScreenY: 960,
                ClientAppVersion: 1,
                DeviceID: this.device_id,
                GameID: 100,
                ServerID: 100,
            }));
        };
        /**websocket is open*/
        __egretProto__.start = function () {
            this.sendMsg({
                ActionId: game.NetProcotol.npClientLogin,
                RetailID: NetCenter.getInstance().retailid,
                RetailUser: NetCenter.getInstance().retailuser,
                RetailGroup: NetCenter.getInstance().retailgroup,
                Token: NetCenter.getInstance().token
            });
        };
        __egretProto__.testEvent = function () {
            var obj = new Object();
            obj.cool = "cool_event";
            this.dispatchEvent(new game.NetEvent(game.NetEvent.EVENT_TEST, obj));
        };
        __egretProto__.testUnRealRoomPlayers = function () {
            var ran = Math.floor(Math.random() * 7);
            for (var i = 0; i < 8; i++) {
                if (i == ran) {
                    if (this.mRole == null) {
                        this.mRole = new game.NetRole();
                    }
                    this.mRoomPlayers.push(this.mRole);
                }
                else {
                    var role = new game.NetRole();
                    role.mName = game.RandomName.getRandomName();
                    role.mCoin = i * 111111;
                    this.mRoomPlayers.push(role);
                }
            }
        };
        __egretProto__.enterGame = function () {
            this.mRole = new game.NetRole();
            this.mRole.mName = "酷比牛仔";
            this.mRole.mGender = false;
        };
        NetCenter.getInstance = function () {
            if (this.instance == null) {
                this.instance = new NetCenter();
            }
            return (this.instance);
        };
        //public sendMsg(msg): void {
        //    this.mWebSocket.send(msg);
        //}
        __egretProto__.dest = function () {
            this.mRole = null;
            this.mWebSocket = null;
        };
        NetCenter.EGRET_PACKET_MAX_SIZE = 1500;
        NetCenter.EGRET_PACKET_MAX_SIZE_TCP = 1460;
        return NetCenter;
    })(egret.EventDispatcher);
    game.NetCenter = NetCenter;
    NetCenter.prototype.__class__ = "game.NetCenter";
})(game || (game = {}));
