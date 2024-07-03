// given two promises p1 and p2, return a new promise. p1 and p2 will both rsolve with a number
//the return promise should resolve with a number the returned promise should resolve with
// the sum of two numbers

// to tackle this we use p1and p2p1.p2 takes an array of promises .

//using then Pn([p1,p2]) this creaye a new opromise that waits for both input promises to resolve

// then handler recieves an aray ([r1, r2]) containing the resolved values

// we use destructuring to extract them .we return the sum r1+r2

var addtwopromises = async function(promise1, promise2){
    return Promise.all([promise1, promise2]).then(([r1, r2]) => {
        return r1 + r2
    });

};

// the second way is using async/await. an async function always
// returns a promise the awaits keywoard inside an async function pauses
// execution until the awaited promise resolves or rejects
// to do this way we need to declare add2 promises as an async function
// the await Promise.all([promise1, promise2]) ensures both promises resolve before continuing.
//After getting result1 and result2, we return the sum.

var addtwopromises= async function (promise1, promise2){
    const [result1, result2]= await Promise.all([promise1, promise2]);
    return result1 + result2;
  };
