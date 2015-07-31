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
    export class SoundManager{
        private sound: egret.Sound;
        private sound_bg: egret.Sound;
        private sound_dice: egret.Sound;
        private static instance: SoundManager; 
        public musicFlag: boolean = false;
        public constructor() {
        }

        public static getInstance(): SoundManager {
            if (this.instance == null) {
                this.instance = new SoundManager();
            }
            return <SoundManager><any>(this.instance);
        }

        /**
          *@dice_1   
          *@dice_2 
          *@dice_3 
          *@dice_4 
          *@dice_5  dice
          */
        public  controlMusic(name:string ,value:boolean = false): void
        {
            if (name == "music" || name == "rate") {
                if (this.sound_bg) {
                    this.sound_bg.stop();
                    this.sound_bg = null;
                }
                this.sound_bg = RES.getRes(name);
                this.sound_bg.type = "music";
                if (this.sound_bg && this.sound_bg != null) {
                    this.musicFlag = value;
                    if (value) {
                        console.log(123);
                        this.sound_bg.play(true);
                    }
                    else {
                        this.sound_bg.pause();
                    }
                }
            } else if (name == "dice_5") {
                if (this.sound_dice == null) {
                    this.sound_dice = RES.getRes(name);
                } else {
                    this.sound_dice.load();
                }
                if (this.sound_dice && this.sound_dice != null) {
                   // GameUI.getInstance().alertMag("value :" + value,1);
                    if (value) {
                        this.sound_dice.play(true);
                    }
                    else {
                        this.sound_dice.pause();
                    }
                }
            }
            else {
                if (this.sound) {
                    this.sound.stop();
                    this.sound = null;
                }
               // if (this.sound == null) {
                    this.sound = RES.getRes(name);
              //  } else {
                    //this.sound.load();
               // }
                if (this.sound && this.sound != null) {
                    if (value) {
                        this.sound.play();
                    }
                    else {
                        this.sound.pause();
                    }
                }
            }
        }

    }
}
