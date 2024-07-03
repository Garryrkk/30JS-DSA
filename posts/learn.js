function greet(name = 'Guest'){
return 'Hello, ${name}!';
}

console.log(greet());//output: Hello, Guest!
console.log(greet('Alice')); //output: Hello, Alice!