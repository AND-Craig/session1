// standard callback
const callbackfunction = (cb) => {
    return cb();
}

// a blocking function
const blockingCode = (resolve, reject) => {
    setTimeout(() => resolve("done2"), 10000);
}

// turning this into a non blocking version
function unblockingVersion() {
    let promise = new Promise((res,rej) => {
        blockingCode(res,rej);
    })
    return promise;
}

// standard promise
const promise1 = () => {
    return new Promise((res,rej) => {
        res(console.log("cb2"));
    });
}

// shorthand resolved promise
const promise2 = () => Promise.resolve(console.log("cb3"));

// using a callback
callbackfunction(() => {
    console.log("cb1")
})

// using 'then' with the promise.
unblockingVersion().then((res) => console.log(res));

promise1();

promise2()
