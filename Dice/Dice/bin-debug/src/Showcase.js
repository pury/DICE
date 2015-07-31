/*
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
/**
 *  GUI 组件示例
 *  逻辑类:    src/scene/Showcase.ts
 *  皮肤:      src/skins/scene/ShowcaseSkin.exml
 *
 *  GUI component showcase
 *  Logic class:    src/scene/Showcase.ts
 *  Skin:           src/skins/scene/ShowcaseSkin.exml
 */
var Showcase = (function (_super) {
    __extends(Showcase, _super);
    function Showcase() {
        _super.call(this);
        this.mData = [
            "0cfe1930-d319-49ca-a9d6-10a9fb549082",
            "0d87e74e-6628-451e-ab51-067c71f0f2c8",
            "0e00cf38-8802-40d8-9c2e-fee7fdf625fe",
            "10428311-fb89-41ef-8d31-d730422b5f5f",
            "11d4cd61-83d9-4d2f-8bf0-f1c99352d92f",
            "12f10ed7-3c5c-47dd-9afd-770039670a9a",
            "16c3dcc0-21f5-4d9c-b7ce-8f397d7892a3",
            "186ecbed-773e-4d03-aa6c-0f62b574632c",
            "18903190-c073-492a-b46f-d042314cf51c",
            "18b5cfde-1b14-4d74-83e6-a629a0c426f2",
            "192f778c-095e-4277-a659-b8e254f82ef4",
            "1a1a2d33-56ab-4f3c-92e5-19ccbe7c6fc1",
            "1bb23523-2eda-4f90-947e-f3b6535ebdea",
            "1d93419f-19cb-4468-ae50-39ec3303c4f1",
            "1e1a0cd6-baed-4730-a271-40c94a203092",
            "1f851882-b099-40da-867f-441692b18b83",
            "1f8fd7fd-61c8-43da-b00f-7b54d5d6d05f",
            "22a8b411-037d-443d-bbd9-52da22a05a5d",
            "22ac1e79-ae0e-494b-9c9a-2cc5e6f9fb54",
            "23608c90-302f-43fc-938c-2f901d77f03b"
        ];
        this.dataSource = [];
        //  指定当前类的皮肤名称
        //  Assign the skin name used by this Component
        this.skinName = "skins.scene.ShowcaseSkin";
        this.initListData();
    }
    var __egretProto__ = Showcase.prototype;
    __egretProto__.initListData = function () {
        for (var i = 0; i < 20; i++) {
            //  var name = "Name:" + i + "  " + this.mData[i].substr(0, 8);
            // console.log("123123" + this.mData[i]);
            this.dataSource.push({ label: "[Name" + i + "] " + this.mData[i] });
        }
    };
    /**
        所有子项和皮肤中的组件都已经创建完毕并完成测量，可以使用
      
        All the components in the children and skin have been
        created and measured, you can use them now.
    */
    __egretProto__.childrenCreated = function () {
        this.btnShowMessage.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onButtonClick, this);
        this.list.addEventListener(egret.gui.IndexChangeEvent.CHANGE, this.onListSelectionChange, this);
    };
    /**
        partAdded 是皮肤部件赋值到逻辑类的入口，你可以在这里进行
        必要的初始化操作。比如需要随屏幕改变组件的尺寸，写在这里
        可以避免写在 childrenCreated 中修改造成的多次测量。
        
      
        The method "partAdded" will be called just after the
        skin parts is assigned to the property. You can make
        changes will effect to the layout or other components.
    */
    __egretProto__.partAdded = function (partName, instance) {
        _super.prototype.partAdded.call(this, partName, instance);
        if (instance == this.list) {
            this.list.height = this.stage.stageHeight - 300;
            this.list.dataProvider = new egret.gui.ArrayCollection(this.dataSource);
        }
    };
    __egretProto__.onButtonClick = function (event) {
        var selection = this.list.selectedItem ? this.list.selectedItem.label : "nothing";
        // egret.gui.Alert.show("You have selected " + this.list.selectedIndex);
        if (this.list.selectedIndex >= 0) {
            game.GameUI.getInstance().alertMag("你选择了账号：   " + this.list.selectedIndex, 1);
            //  Main.getInstance().test(this.list.selectedIndex);
            this.visible = false;
        }
        else {
            game.GameUI.getInstance().alertMag("请选择一个账号哈！", 1, 3, 1);
        }
    };
    __egretProto__.onListSelectionChange = function (event) {
        console.log("You have selected " + this.list.selectedItem.label);
    };
    return Showcase;
})(egret.gui.SkinnableComponent);
Showcase.prototype.__class__ = "Showcase";
