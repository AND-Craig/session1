async function helloAsync() {
    return "hi";
}

// console.log(helloAsync());

function equivAA() {
    return Promise.resolve("hi");
}

// console.log(equivAA());

/**
*/

async function hello() {
    return await "his";
}

function hello2() {
    return Promise.resolve("hi").then(() => console.log("hi"));
} 

hello().then(res => console.log(res));
console.log(hello2())

/**
    Benefits of async await.
 */

// function doesSomething(value) {
//     return new Promise((res,rej) => {
//         if(value === 3) {rej('I hate the number 3.')}
//         res('thank you.');
//     })
// }

// async function foo(value) {
//         const res = doesSomething(value);
//         return res;
// }

// foo(2);

/**
 */

//  async function bar(value) {
//     try {
//         const res = await doesSomething(value);
//         return res;
//     } catch (err) {
//         console.error(err);
//     }
// }

// bar(3);

/**
 */

//  async function baz(value) {
//     try {
//         const res = await doesSomething(value);
//         return res;
//     } catch (err) {
//         console.error(err);
//     } finally {
//         console.log("I always run")
//     }
// }

// baz(3);

// async function craig() {
//     return promise1();
// }

// craig().then(res => console.log(res));