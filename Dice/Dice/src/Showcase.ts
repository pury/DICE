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
class Showcase extends egret.gui.SkinnableComponent {

    public constructor() {
        super();

        //  指定当前类的皮肤名称
        //  Assign the skin name used by this Component
        this.skinName = "skins.scene.ShowcaseSkin";
        this.initListData();
    }



    /*
        在皮肤中（skins/scene/ShowcaseSkin.exml），如果组件有 id 属性，
        那么皮肤中的这个组件会被赋值给逻辑类（Showcase）中与这个 id 同名
        的属性（皮肤部件）。
        由于皮肤绑定的过程是延迟处理的，在构造函数并不能访问这些属性。
        你可以在 "childrenCreated" 方法中使用这些组件。
      
        Components in the skin（skins/scene/ShowcaseSkin.exml） with "id" 
        will be assigned to the properties with the same name （aka Skin Parts） 
        in the logic class（Showcase）.
        As the skin is created after the constructor, you should not use 
        them in the constructor. You can use these components in the 
        "childrenCreated" method.
    */

    /**
     * [SkinPart] 
     *  点击显示 list 中选择的数据
     *  A button, click to show the selection of the list
     *
     *      "ShowcaseSkin.exml" :
     *      <e:Button id="btnShowMessage" label="click" y="539" horizontalCenter="0"/>
     */
    public btnShowMessage: egret.gui.Button;
 
    
    /**
     * [SkinPart] 
     *  List 组件
     *  A list to show some data
     *
     *      "ShowcaseSkin.exml" :
     *      <e:List id="list"  height="255"  skinName="skins.simple.ListSkin" y="141" ...
     */
    public list: egret.gui.List;

    public mData: string[] = [
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
        "23608c90-302f-43fc-938c-2f901d77f03b"];
    private dataSource: Array<any> = [];
    private initListData(): void {
        for (var i: number = 0; i < 20; i++) {
          //  var name = "Name:" + i + "  " + this.mData[i].substr(0, 8);
           // console.log("123123" + this.mData[i]);
            this.dataSource.push({ label: "[Name"+i+"] "+this.mData[i] });
        }
    }



    /**  
        所有子项和皮肤中的组件都已经创建完毕并完成测量，可以使用
      
        All the components in the children and skin have been 
        created and measured, you can use them now.
    */
    public childrenCreated() {
        this.btnShowMessage.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onButtonClick, this);
        this.list.addEventListener(egret.gui.IndexChangeEvent.CHANGE, this.onListSelectionChange, this);
    }

    /**
        partAdded 是皮肤部件赋值到逻辑类的入口，你可以在这里进行
        必要的初始化操作。比如需要随屏幕改变组件的尺寸，写在这里
        可以避免写在 childrenCreated 中修改造成的多次测量。
        
      
        The method "partAdded" will be called just after the
        skin parts is assigned to the property. You can make 
        changes will effect to the layout or other components.
    */
    public partAdded(partName: string, instance: any): void {
        super.partAdded(partName, instance);
        if (instance == this.list) {
            this.list.height = this.stage.stageHeight - 300;
            this.list.dataProvider = new egret.gui.ArrayCollection(this.dataSource);
        }
    }

    private onButtonClick(event: egret.TouchEvent): void {
        var selection = this.list.selectedItem ? this.list.selectedItem.label : "nothing";
       // egret.gui.Alert.show("You have selected " + this.list.selectedIndex);
        if (this.list.selectedIndex >= 0) {
            game.GameUI.getInstance().alertMag("你选择了账号：   " + this.list.selectedIndex, 1);
          //  Main.getInstance().test(this.list.selectedIndex);
            this.visible = false;
        }
        else {
            game.GameUI.getInstance().alertMag("请选择一个账号哈！",1,3,1);
        }
    }

    private onListSelectionChange(event: egret.gui.IndexChangeEvent): void {
        console.log("You have selected " + this.list.selectedItem.label);
    }
}