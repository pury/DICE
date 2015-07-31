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
    /**The basic information of the player.*/
    export class NetRole {
        public mName: string ;
        public mCoin: number ;
        public mGender: boolean ;
        public mGift: number ;
        public mIcon: string;

        public mDices: any[];
        /**
          *@param 0 dice
          *@param 1 num left
          *@param 2 num right
          */
        public mCallDice: number[];
        public mLevel: number;
        public mUserId: number;
        public mPos: number;

        public constructor() {
            this.mName = "大酷比牛仔";
            this.mCoin = 66666;
            this.mGender = false;
            this.mGift = 77777;
            this.mIcon = "";
            this.mDices = [];
            this.mCallDice = [];
            this.mCallDice[0] = 1;
            this.mCallDice[1] = 0;
            this.mCallDice[2] = 0;
            this.mLevel = 0;
            this.mUserId = 0;
            this.mPos = 0;
        }
    }
}