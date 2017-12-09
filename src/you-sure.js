const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const options = {
    minRandomValue: 100,
    maxRandomValue: 500,
    defaultQuestion: 'Are you sure?'
}

module.exports = function(text){
    return new Promise((resolve, reject) => {
        const val = Math.floor(Math.random() * (options.maxRandomValue - options.minRandomValue) + options.minRandomValue);
        const question = test == null ? options.defaultQuestion : text;

        rl.question(`${question} (y:${val}/n) `, (answer) => {
            if (parseInt(answer) === val){
                resolve()
            } else {
                reject()
            }
        })
    })
}