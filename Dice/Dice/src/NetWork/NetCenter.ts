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
    /**Use Html5 WebSocket.*/
    export class NetCenter extends egret.EventDispatcher{
        public static EGRET_PACKET_MAX_SIZE: number = 1500;
        public static EGRET_PACKET_MAX_SIZE_TCP: number = 1460;
        public DICE_IP = "127.0.0.1";//"121.40.197.72";192.168.4.102;127.0.0.1
        public URL = "http://h5.quukk.com/dice/";
        public URL_BEER = "http://h5.quukk.com/beer/";
        public DICE_PORT = 9798;
        public mWebSocket: any;
        public mRole: game.NetRole;
        private static instance: NetCenter;
        public mRoomPlayers: any[];
        public mRoomRealPlayers: any[];
        /**my real position*/
        public mRealPosition: number;
        public user_create_try: number = 0;
        public device_id: string = "";
        public mStartFlag: boolean = false;
        public mHostPos: number = 0;
        public mTableStatus: number = 0;
        public mResult: any;
        public mPlayerRole: NetRole;
        public NET_FLAG: boolean = false;
        public mCallDiceFlag: boolean = false;
        public mAccount: string;
        public mPassWord: string;
        public mCode: string;
        public mIsRegister: boolean;
        public mLoginRoleFlag: boolean;
        public mTheRequest: Object;
        public mPanel: NetPanel;
        /**The rule 
          *@ param mNeedCallDice[0] --> m
          *@ param mNeedCallDice[1] --> n
          */
        public mNeedCallDice: number[];
        /**With the first time*/
        public mFirstCall: boolean;
        /**The room rete*/
        public mRate: number;
        /**The background music*/
        public mMusicFlag: boolean = false;
        /**The table visible*/
        public mTableFlag: boolean = false;
        public mRequest: Object;
        /**dice sound*/
        public mSoundDice: boolean = false;
        public retailid = "";
        public retailuser = "";
        public retailgroup = "";
        public token = "";
        public mLoginFlag = false;
        public mMMM: boolean;
        public mTimerOpen: egret.Timer;
        public PassportId = "";
        public mCon: boolean;
        public constructor() {
            super();
            this.mRole = new game.NetRole();
            this.mPlayerRole = new game.NetRole();
            this.mPanel = new NetPanel();
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

        public init(): void
        {
            try {
                Scut.Net.setSignKey('3f261d4f2f8941ea90552cf7507f021b');
                Scut.Net.setUrl("ws://" + this.DICE_IP + ":" + this.DICE_PORT + "/test", this.stcReceive);
                Scut.Net.regOpenCallback(this.onOpen);
                Scut.Net.regClosedCallback(this.onClose);
                Scut.Net.regErrorCallback(this.onRrror);
                Scut.Net.connect();
                this.addEvent(NetProcotol.npClientCall, this.stcCallDice);
                this.addEvent(NetProcotol.npClientOpen, this.stcOpenResult);
                this.addEvent(NetProcotol.npClientStart, this.stcStart);
                this.addEvent(NetProcotol.npClientPass, this.stcRegister);
                this.addEvent(NetProcotol.npClientLogin, this.stcLogin);
                this.addEvent(NetProcotol.npClientRegister, this.stcRegisterNormal);
                this.addEvent(NetProcotol.npServerRoom, this.stcRoomInfo);
                this.addEvent(NetProcotol.npClientCreate, this.stcCreate);
                this.addEvent(NetProcotol.npClietnPlayerDices, this.stcPlayerDices);
                //this.addEvent(NetProcotol.npClientGetRole, this.stcGetRole);
                this.addEvent(NetProcotol.npClientRole, this.stcRole);
                this.addEvent(NetProcotol.npClientTable, this.stcTable);
                this.addEvent(NetProcotol.npClientExchange, this.stcExchange);
                this.addEvent(NetProcotol.npClientBackRate, this.stcBackRate);
                this.addEvent(NetProcotol.npClietnCallEnd, this.stcCallEnd);
            }
            catch (e) {
                console.error("Failed To Create Html5 WebSocket!"); 
                return;
            };
        }

        /***********************************SERVER TO CLIENT************************************************/
        private stcReceive(data: any): void {
            Scut.Action.receive(data);
            console.log("receive: " + data);
        }

        private stcRegister(data: any): void {
            if (data.getErrorCode() == 0) {
                console.log("action1002:" + data.toString());
                var pid = data.getData().PassportId;
                var pwd = data.getData().Password;
                console.log("通行证注册成功:[" + pid + "](" + pwd + ")");
                NetCenter.getInstance().ctsLogin(pid, pwd);
            }	
        }

        private stcRegisterNormal(data: any): void {
            if (data.getErrorCode() == 0) {
                console.log("action1003:" + data.toString());
                //var pid = data.getData().PassportId;
                //var pwd = data.getData().Password;
                if (data.getErrorCode() == 0) {
                    console.log("通行证注册成功!");
                    NetCenter.getInstance().ctsLogin(NetCenter.getInstance().mAccount, NetCenter.getInstance().mPassWord);
                }
            }
        }

        private stcLogin(_data: any): void {
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
                GameUI.getInstance().alertMag("服务器繁忙，请稍后进入...",1,20,1);
                console.log("登录失败:(" + _data.getErrorCode() + ")  " + _data.getError() );
            }
         }

        private  stcCreate(_data:any): void {
            if (_data.getErrorCode() == 0) {
                console.log("角色创建成功:" + _data.toString());
                var data = _data.getData();
                if (data != null) {
                    //var nickname = data.NickName;
                    //var headicon = data.HeadIcon;
                    //var userlv = data.UserLv;
                    //var viplv = data.VipLv;
                    //var sex = data.Sex;
                    //var gamecoin = data.GameCoin;
                    //var gameticket = data.GameTicket;
                    //var winnum = data.WinNum;
                    //var failnum = data.FailMum;
                    //var scorenum = data.ScoreNum;
                    //var userid = data.UserId;
                    //var sessionid = data.SessionId;
                    //NetCenter.getInstance().mPlayerRole.mUserId = data.UserId;
                    //NetCenter.getInstance().mPlayerRole.mName = data.NickName;
                    //NetCenter.getInstance().mPlayerRole.mIcon = data.HeadIcon;
                    //NetCenter.getInstance().mPlayerRole.mGender = data.Sex;
                    //NetCenter.getInstance().mPlayerRole.mCoin = data.GameCoin;
                    //NetCenter.getInstance().mPlayerRole.mGift = data.GiftCoin;
                    //NetCenter.getInstance().loadRes();
                }
            }else{
                console.log("角色创建失败，请尝试重新创建");
            }
        }

        private stcRoomInfo(_data: any): void
        {
            if (_data.getErrorCode() == 0)
            {
                console.log("房间信息加载成功:" + _data.toString());
                var data = _data.getData();

                if (data != null)
                {
                    NetCenter.getInstance().mRoomPlayers = [];
                    NetCenter.getInstance().mRoomRealPlayers = [];
                    NetCenter.getInstance().mHostPos = data.HostPos;
                    NetCenter.getInstance().mTableStatus = data.TableStatus;

                    var ii: number = 0;

                    for (var i in data.Data)
                    {
                        NetCenter.getInstance().mRoomPlayers.push(data.Data[i]);

                        if (data.Data[i].UserId > 0)
                        {
                            if (data.Data[i].UserId == NetCenter.getInstance().mRole.mUserId)
                            {
                                NetCenter.getInstance().mRealPosition = ii;
                            }

                            NetCenter.getInstance().mRoomRealPlayers.push(data.Data[i]);
                            ii++;
                        }

                        if (data.Data[i].UserId == NetCenter.getInstance().mRole.mUserId)
                        {
                            NetCenter.getInstance().mRole.mName = data.Data[i].NickName;
                            NetCenter.getInstance().mRole.mCoin = data.Data[i].GameCoin;
                            NetCenter.getInstance().mRole.mPos = data.Data[i].Position;
                        }
                    }
                }

                NetCenter.getInstance().goLogin();

                if (NetCenter.getInstance().mTableFlag) {
                    NetCenter.getInstance().dispatchEvent(new NetEvent(NetEvent.EVENT_ROOMPLAYER, NetCenter.getInstance().mRoomPlayers));
                }
            }
            else
            {
                GameUI.getInstance().alertMag("房间信息加载失败!");
                console.log("房间信息加载失败！");
            }
        }

        private stcStart(_data:any): void {
            if (_data.getErrorCode() == 0) {
                game.GameUI.getInstance().flag = true;
                NetCenter.getInstance().dispatchEvent(new NetEvent(NetEvent.EVENT_START, []));
                console.log("开局成功！");
            } else {
                console.log("开局失败！");
            }
        }

        private stcPlayerDices(_data:any): void {
            if (_data.getErrorCode() == 0) {
                var data = _data.getData();
                NetCenter.getInstance().dispatchEvent(new NetEvent(NetEvent.EVENT_PLAYERDICES , data))
            }
            else {
                console.log("摇失败了:" + _data.getError());
            }
        }

        private stcCallDice(_data:any): void {
            if (_data.getErrorCode() == 0) {
                var data = _data.getData();
                if (data != null) {
                    NetCenter.getInstance().mNeedCallDice[0] = data.Count;
                    NetCenter.getInstance().mNeedCallDice[1] = data.Point;
                    console.log("玩家[" + data.NickName + "](" + data.UserId + ")叫了" + data.Count + "个" + data.Point);
                    NetCenter.getInstance().dispatchEvent(new NetEvent(NetEvent.EVENT_CALLDICE, data));
                }
            }
            else {
                console.log("叫骰失败:(" + _data.getErrorCode() + ")" + _data.getError());
            }
        }

        private stcOpenResult(_data:any): void {
            if (_data.getErrorCode() == 0) {
                var data = _data.getData();
                NetCenter.getInstance().mResult = data;
                game.GameUI.getInstance().manage_panel("panelResult", "open", false);
                NetCenter.getInstance().dispatchEvent(new NetEvent(NetEvent.EVENT_OPENRESULT, data));
            }
            else {
                console.log("结果异常！" + _data.getErrorCode() + "    " + _data.getError());
            }
        }

        private stcGetRole(_data:any): void {
            if (_data.getErrorCode() == 0) {
                var data = _data.getData();
                if (data != null) {
                    NetCenter.getInstance().mPlayerRole.mUserId = data.UserId;
                    NetCenter.getInstance().mPlayerRole.mName = data.NickName;
                    NetCenter.getInstance().mPlayerRole.mIcon = data.HeadIcon;
                    NetCenter.getInstance().mPlayerRole.mGender = data.Sex;
                    NetCenter.getInstance().mPlayerRole.mCoin = data.GameCoin;
                    NetCenter.getInstance().mPlayerRole.mGift = data.GiftCoin;
                    GameUI.getInstance().manage_panel("panelRole", "open", false);
                    if (game.GameUI.getInstance().mRoleInfo != null) {
                        GameUI.getInstance().manage_panel("panelSet", "close", false);
                    }
                }
            } else {
                console.log("获取玩家数据异常！" + _data.getErrorCode() + "    " + _data.getError());
            }
        }

        private stcRole(_data: any): void {

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

                    GameUI.getInstance().freshSome();

                    if (NetCenter.getInstance().mPanel.mPanelRate) {
                        game.GameUI.getInstance().manage_panel("panelHelp", "close");
                        NetCenter.getInstance().loadRes();
                    }

                    if (NetCenter.getInstance().mPanel.mPanelRole) {
                        NetCenter.getInstance().mPanel.mPanelRole = false;
                        GameUI.getInstance().manage_panel("panelRole", "open", false);
                        if (game.GameUI.getInstance().mRoleInfo != null) {
                            GameUI.getInstance().manage_panel("panelSet", "close", false);
                        }
                    }
                }
            } else {
                console.log("获取玩家数据异常！" + _data.getErrorCode() + "    " + _data.getError());
            }
        }

        private stcTable(_data: any): void {
            if (_data.getErrorCode() == 0) {
                var data = _data.getData();
                if (data != null) {

                }
            } else {
               // GameUI.getInstance().alertMag("进去桌子异常");
                console.log("进去桌子异常！" + _data.getErrorCode());
            }
        }

        private stcExchange(_data: any): void {
            if (_data.getErrorCode() == 0) {
                //GameUI.getInstance().alertMag("兑换成功！", 0, 3, 1);
                GameUI.getInstance().showExchange(0);
                var data = _data.getData();
                if (data != null) {
                    
                }
            } else {
                console.log("兑换失败！" + _data.getErrorCode());
                GameUI.getInstance().showExchange(1);
               // GameUI.getInstance().alertMag("兑换失败！",1);
            }
        }

        private stcBackRate(_data: any): void {
            if (_data.getErrorCode() == 0) {
                //GameUI.getInstance().alertMag("兑换成功！", 0, 3, 1);
                if (NetCenter.getInstance().mPanel.mPanelRate) {
                    NetCenter.getInstance().mPanel.mPanelRate = false;
                    SoundManager.getInstance().controlMusic("rate", true);
                    GameUI.getInstance().manage_panel("panelRate","open",true);
                }
                var data = _data.getData();
                if (data != null) {

                }
            } else {
                console.log("返回选择倍率！" + _data.getErrorCode());
               // GameUI.getInstance().alertMag("兑换失败！", 1);
            }
        }

        public stcCallEnd(_data:any): void
        {
            if (_data.getErrorCode() == 0)
            {
                console.log("叫骰子阶段结束！");

                if (NetCenter.getInstance().mTableFlag)
                {
                    NetCenter.getInstance().dispatchEvent(new NetEvent(NetEvent.EVENT_CALLEND, []));
                }
            }
            else
            {
                console.log("叫骰子结束阶段异常！ " + _data.getErrorCode());
            }
        }

        /***********************************CLIENT TO SERVER************************************************/
        public reg(device: string): void {
            this.device_id = device;
            Scut.Net.connect();
            //game.GameLayer.getInstance().addLoading();
            GameUI.getInstance().alertMag("连接服务器中...", 1, 10, 0);
        }

        public register(account:string,password:string,code:string,isRegister:boolean): void {
            this.mAccount = account;
            this.mPassWord = password;
            this.mCode = code;
            this.mIsRegister = isRegister;
            if (Scut.Net.isConnect()) {
                this.start();
            } else {
                Scut.Net.connect();
                //game.GameLayer.getInstance().addLoading();
                GameUI.getInstance().alertMag("连接服务器中...", 1, 10, 0);
            }

        }

        public ctsRegister(device:string): void {
            console.log("[action1002]通行证接口 .....");
            this.sendMsg({
                ActionId: NetProcotol.npClientPass,
                DeviceID: this.device_id,
            });
        }

        public ctsRegisterNormal(): void {
            console.log("[action1003]通行证接口 .....");
            this.sendMsg({
                ActionId: NetProcotol.npClientRegister, // 必带
                UserName: this.mAccount, // 必带
                Password: this.mPassWord, // 必带
                Authcode: this.mCode,
            });
        }

        public ctsLogin(pid, pwd): void {
            console.log("[action1004]尝试进行登录 ....");
            this.mIsRegister = false;
            this.sendMsg({
                ActionId: NetProcotol.npClientLogin,// 必带
               // RetailID: "leyan",          // 必带
                PassportId: pid,      // 必带
                Password: pwd,			// 必带
            });
        }

        public ctsLoginSpecial(retailid, retailuser, retailgroup, token): void {

            this.retailid = retailid;
            this.retailuser = retailuser;
            this.retailgroup = retailgroup;
            this.token = token;

            if (Scut.Net.isConnect()) {
                this.start();
            } else {
                Scut.Net.connect();
                GameUI.getInstance().alertMag("连接服务器中...", 1, 10, 0);
            }
        }

        public ctsTableInfo(roomid:number): void {
            this.sendMsg({
                ActionId: NetProcotol.npClientTable,
                RoomId: roomid
            });
        }

        public ctsRoomInfo(): void {
            this.sendMsg({
                ActionId:NetProcotol.npServerRoom
            });
        }

        public ctsStart(): void {
            //this.addEvent(NetProcotol.npClientStart, this.stcStart);
            this.sendMsg({
                ActionId: NetProcotol.npClientStart
            });
        }

        public ctsPlayerDices(): void {
            this.sendMsg({
                ActionId: NetProcotol.npClietnPlayerDices
            });
        }

        public ctsCallDice(point:number,count:number): void {
            this.sendMsg({
                ActionId: NetProcotol.npClientCall,
                Point: point,
                Count: count,
            });
        }

        public ctsOpenResult(): void {
            this.sendMsg({
                ActionId:NetProcotol.npClientOpen
            });
        }

        public ctsGetRole(userid:number): void {
            this.sendMsg({
                ActionId: NetProcotol.npClientGetRole,
                UserId:userid
            });
        }

        public ctsRole(userid: number): void {
            this.sendMsg({
                ActionId: NetProcotol.npClientRole,
                UserId: userid
            });
        }

        public ctsExchange(count): void {
            this.sendMsg({
                ActionId: NetProcotol.npClientExchange,
                Count: count
            });  
        }

        public ctsBackRate(): void {
            this.sendMsg({
                ActionId: NetProcotol.npClientBackRate
               // Count: count
            });
        }

        public pushEvent(protocol:string,param:any): void {
            NetCenter.getInstance().dispatchEvent(new NetEvent(protocol, param));
        }

        private addEvent(id: number, event: any): void {
            //console.log("addEvent: id = " + id);
            Scut.Action.events.add(id,event);
        }

        private sendMsg(msg): void {
            if (msg && msg != "") {
                try {
                    Scut.Net.Instance().send(Scut.Net.Params.extend(msg));
                } catch(e) {
                    GameUI.getInstance().alertMag("连接服务器中...", 1, 10, 0);
                }
            }
        }

        /***************************************************************************************************/

        private loadRes(): void {
            LoadManager.getInstance().loadResource("progress");
        }

        public selectRate(): void {
            if (this.mPanel.mPanelRate) {
                this.mPanel.mPanelRate = false;
                game.GameUI.getInstance().manage_panel("panelRate", "open", true);
            }
        }


        private goLogin(): void
        {
            if (NetCenter.getInstance().mPanel.mPanelRoom)
            {
                NetCenter.getInstance().mPanel.mPanelRoom = false;
                game.GameUI.getInstance().manage_panel("panelRoom", "open", true);

                if (!GameLayer.getInstance().mFlagRoom) {
                    GameLayer.getInstance().showProgress();
                }
            }
        }

        public creatNewRole(passportId):void {
            var pid = passportId;
            var randomname: string = RandomName.getRandomName();
            console.log("为账号[" + pid + "]创建新的游戏角色(action1005) ....");

            this.sendMsg(Scut.Net.Params.extend({
                ActionId: NetProcotol.npClientCreate,
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
        }

        /**websocket is open*/
        public start(): void {
            this.sendMsg({
                ActionId: NetProcotol.npClientLogin,// 必带
                RetailID: NetCenter.getInstance().retailid, // 必带
                RetailUser: NetCenter.getInstance().retailuser, // 必带
                RetailGroup: NetCenter.getInstance().retailgroup, // 必带
                Token: NetCenter.getInstance().token
            });
        }

        onOpen = function (): void {
            console.info("Connection Successful!");
            NetCenter.getInstance().mLoginFlag = true;
            NetCenter.getInstance().NET_FLAG = true;
            if (GameUI.getInstance().mAlert && GameUI.getInstance().contains(GameUI.getInstance().mAlert)) {
               // GameUI.getInstance().removeElement(GameUI.getInstance().mAlert);
            }
            if (NetCenter.getInstance().mMMM) {
                NetCenter.getInstance().mMMM = false;
              //  NetCenter.getInstance().start();
            }
           
           // GameLayer.getInstance().removeLoading();
        }
        
        onRrror = function(e:any): void {
            Scut.Action.error();
            console.error("Connection Error:" );
        }

        onMessage = function(e): void {
           
        }

        onClose = function(): void {
            Scut.Action.close();
            if (!NetCenter.getInstance().mCon) {
                var request = NetCenter.getInstance().mTheRequest;
                var url = NetCenter.getInstance().URL + "?retail=" + request["retail"] + "&uid=" + request["uid"] + "&token=" + request["token"];
                window.open(url, "_self");
                console.info("Connection Close!");
            }
        }

        public testEvent(): void {
            var obj: any = new Object();
            obj.cool = "cool_event";
            this.dispatchEvent(new NetEvent(NetEvent.EVENT_TEST,obj));
        }

        public testUnRealRoomPlayers(): void {
            var ran: number = Math.floor(Math.random() * 7);
            for (var i: number = 0; i < 8; i++){
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
        }

        public enterGame(): void {
            this.mRole = new game.NetRole();
            this.mRole.mName = "酷比牛仔";
            this.mRole.mGender = false;
        }

        public static getInstance(): NetCenter {
            if (this.instance == null) {
                this.instance = new NetCenter();
            }
            return <NetCenter><any>(this.instance);
        }

        //public sendMsg(msg): void {
        //    this.mWebSocket.send(msg);
        //}

        public dest(): void {
            this.mRole = null;
            this.mWebSocket = null;
        }
    }
}