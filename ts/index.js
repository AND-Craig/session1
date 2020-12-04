"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const importable_1 = require("./importable");
const hello = (cb) => {
    cb();
};
importable_1.hello56();
hello(() => {
    console.log("Hello 1");
});
const promise1 = () => {
    return new Promise((resolve, reject) => {
        resolve("Hello 2");
    });
};
promise1().then(res => console.log(res));
function promise2() {
    return new Promise((resolve, reject) => {
        setTimeout(() => resolve(66), 3000);
        // blocking code.
    });
}
promise2().then(res => console.log(res));
function doesSomething(value) {
    return new Promise((res, rej) => {
        if (value === 3) {
            rej('I hate the number 3.');
        }
        res('thank you.');
    });
}
function bar(value) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const res = yield doesSomething(value);
            return res;
        }
        catch (err) {
            console.error(err);
        }
    });
}
bar(3);
