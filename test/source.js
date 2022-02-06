"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Hello = exports.concat = exports.add = void 0;
let a = 5;
let b = 6;
const add = (x, y) => x + y;
exports.add = add;
const concat = (x, y) => x + y;
exports.concat = concat;
class Hello {
    constructor() {
        this.word = x => x;
    }
}
exports.Hello = Hello;
if (a != b)
    console.log('not equal');
