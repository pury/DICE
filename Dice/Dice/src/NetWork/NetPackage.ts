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
    /**Manage the communication package.*/
    export class NetPackage {
        public mStream: game.MemoryStream;
        public mStreamArray = new Array();
        public mMsgLength: number = 0;

        public constructor() {
            this.mStream = new game.MemoryStream(game.NetCenter.EGRET_PACKET_MAX_SIZE_TCP);
        }

        public npBuildMessage(): void {

        }

        public npCheckStream(len:number): void {
            if (len > this.mStream.msSpaceLeft()) {
                this.mStreamArray.push(this.mStream);
                this.mStream = new game.MemoryStream(game.NetCenter.EGRET_PACKET_MAX_SIZE_TCP);
            } 
            this.mMsgLength += len;
        }

        public npSend(): void{
            for (var i: number = 0; i < this.mStreamArray.length; i++) {
                var stream:game.MemoryStream = this.mStreamArray[i]; 
                var buffer: ArrayBuffer = stream.msGetBufferContent();
                //game.NetCenter.getInstance().sendMsg(buffer);
            }
            this.mStreamArray = new Array();
            this.mStream = new game.MemoryStream(game.NetCenter.EGRET_PACKET_MAX_SIZE_TCP);
        }
    }
}