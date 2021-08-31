const ReadLine = require('readline');
const Rl = ReadLine.createInterface({input : process.stdin,
                                    output : process.stdout});

let num1 = Math.floor((Math.random() * 10 ) + 1);
let num2 = Math.floor((Math.random() * 10) + 1);
let answer = num1 + num2;

Rl.question(`what is ${num1} + ${num2}? \n`, 
(userInput) =>{
     if(userInput.trim() == answer){
         Rl.close();
     }
     else{
         Rl.setPrompt('incorrect. try again \n');
         Rl.prompt();
         Rl.on('line', (userInput)=>{
            if(userInput.trim() == answer){
                Rl.close();
            }
            else{
                Rl.setPrompt(`your answer of ${ userInput } is incorrect.try again \n`)
                Rl.prompt();
            }
         })
     }
}
);

Rl.on('close', ()=>{
    console.log('correct answer');
})

// readline module