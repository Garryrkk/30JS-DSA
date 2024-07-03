var cancellabe = function(fn, args,t){
    let timeout = setTimeout(()=> {
        fn(...args)
    },t)
    return function(){
        clearTimeout(timeout)
    }
};

/* 
var cancellabe = function(fn, args,t)
this line declares a function called cancllable, it takes 3 arguments 
fn: a function whic is cancellable
args: array like obj contining arguments that will be passed on fn
t represents time delay in ms before fn is executed

 let timeout = setTimeout(()=> {
        fn(...args)
    },t)

    here a variable named timeut is declared
    setTimeout is used to schedule the execution of an anonymus fuction after a specified delay
    the anonymus function takes no arguments and calls fn with the arguments passed in args

    return function(){
        clearTimeout(timeout)
    
        the cancellable func returns another func. this return func is responsible for cancelling the timeout

        clearTimeout:
        It is abuilt-in js func whic the clearTimeout method cancels a timeout that was set with the setTimeout method.
*/