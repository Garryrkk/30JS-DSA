// a memoize functio is a function that will never be called twice with the same inputs

// first we will create a memoize function . It rtakes another function (fn) as an input
// to memoize we need to have a CACHE  a plain js object wich will act as our storage for 
//remebered results

/// In the inner function we create a unique key by converting it into arguments into a sring.

//This is how we will check our 'memory' to see if we have done this calculation before. We use if(key in the cache) 
// to dot the checking

// if it is in te cache already we immediately return the stores result , skipping the potentially expensive calculation.

// if it is not in the cache we will calcultae and gr the result by callin function memoize(fn){
    // fn(..args) before returning the result we save it in the cache first
    const cache = {};

    return function (...args){
        //inner function
        const key = String(args);

        if (key in cache){
            return cache[key];
        }
        const result = fn(...args);
        cache[key] = result;
        return result;
    }
}