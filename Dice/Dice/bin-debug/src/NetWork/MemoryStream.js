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
    var MemoryStream = (function () {
        function MemoryStream(size) {
            this.mBegin = 0;
            this.mEnd = 0;
            this.mBuffer = new ArrayBuffer(size);
        }
        MemoryStream.prototype.msSpaceLeft = function () {
            return this.mBuffer.byteLength - this.mEnd;
        };
        MemoryStream.prototype.msGetBufferContent = function () {
            return this.mBuffer.slice(this.mBegin, this.mEnd);
        };
        MemoryStream.prototype.msReadInt8 = function () {
            var buffer = new Int8Array(this.mBuffer, this.mBegin, 1);
            this.mBegin += 1;
            return buffer[0];
        };
        MemoryStream.prototype.msReadUint8 = function () {
            var buffer = new Uint8Array(this.mBuffer, this.mBegin, 1);
            this.mBegin += 1;
            return buffer[0];
        };
        MemoryStream.prototype.msReadString = function () {
            var buffer = new Uint8Array(this.mBuffer, this.mBegin);
            var index = 0;
            var ss = "";
            while (true) {
                if (buffer[index] != 0) {
                    ss += String.fromCharCode(buffer[index]);
                }
                else {
                    index++;
                    break;
                }
                index++;
                if (this.mBegin + index >= this.mBuffer.byteLength) {
                    throw (new Error("MEMORYSTREAM::msReadString: mbegin(" + this.mBegin + index + ")>=" + this.mBuffer.byteLength + " overflow!!"));
                }
            }
            this.mBegin += index;
            return ss;
        };
        MemoryStream.prototype.msWriteInt8 = function (n) {
            var buffer = new Int8Array(this.mBuffer, this.mEnd, 1);
            buffer[0] = n;
            this.mEnd += 1;
        };
        MemoryStream.prototype.msWriteUint8 = function (n) {
            var buffer = new Uint8Array(this.mBuffer, this.mEnd, 1);
            buffer[0] = n;
            this.mEnd += 1;
        };
        MemoryStream.prototype.msWriteString = function (s) {
            if (s.length > this.msSpaceLeft()) {
                console.error("MEMROYSTREAM::msWriteString : no free space!");
                return;
            }
            var buffer = new Uint8Array(this.mBuffer, this.mEnd);
            var index = 0;
            for (var i = 0; i <= s.length; i++) {
                buffer[index++] = s.charCodeAt(i);
            }
            buffer[index++] = 0;
            this.mEnd += index;
        };
        return MemoryStream;
    })();
    game.MemoryStream = MemoryStream;
})(game || (game = {}));
//# sourceMappingURL=MemoryStream.js.map