function once(fn){
    let called = false;

    return function (...args){
        if (!called){
            called = true;
            return fn(...args);
        }

        return undefined;
    }
}
//creating a function once whose primary goal is too return a e=new function
// as it's arggument

//inside once we can use closure by creating a variable called,
// which is a flag to tell us that the original fuction har]s been run yet

//