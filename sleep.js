async function sleep(millis){
    await new Promise(resolve=> setTimeout(resolve,millis));
}

/*
declaration: 
aync function sleep(mills){
}
async funftion: this keyword declares ans asynchronous function named sleep

Asynchrous function:
these allow code to continue execution without waiting for operations hat migh take time, like network requests or waiting 
for user input without blocking the main thread.

mills represent the no. of milliseconds to wait

 await new Promise(resolve=> 
      await new Promise(resolve=> setTimeout(resolve,millis));
}
      this line creates anew promise object . The promise construtor takes a function argument (the executor functio)
      it has 2 arameters resolve and reject

set timeout:
it is abuiltin js func that scheduldes a function to be executed after a specified delay
when the timeout completesthe resolve function is called.this signals that the promise has been successfully fulfille 
*/    