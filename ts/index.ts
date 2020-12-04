import { hello56 } from './importable';

const hello = (cb: () => void) => {
    cb();
}

hello56();

hello(() => {
    console.log("Hello 1");
})

const promise1 = (): Promise<string> => {
    return new Promise((resolve, reject) => {
        resolve("Hello 2");
    })
}

promise1().then(res => console.log(res));

function promise2(): Promise<number> {
    return new Promise((resolve, reject) => {
        setTimeout(() => resolve(66), 3000);
        // blocking code.
    })
}

promise2().then(res => console.log(res));


function doesSomething(value: number): Promise<string> {
    return new Promise((res, rej) => {
        if (value === 3) { rej('I hate the number 3.') }
        res('thank you.');
    })
}

async function bar(value: number): Promise<string | void> {
    try {
        const res = await doesSomething(value);
        return res;
    } catch (err) {
        console.error(err);
    }
}

bar(3);