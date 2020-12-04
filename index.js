import { createInterface } from 'readline';


export default class Ezio {

    // asks a question to the user, waits for the user's input, and then returns the input as a promise
    ask(question) {
        return new Promise((resolve, reject) => {
            let input = null;

            const ioInterface = createInterface({
                input: process.stdin,
                output: process.stdout,
                prompt: '',
            });

            ioInterface.question(question.endsWith(' ') ? question : question += ' ', (answer) => {
                input = answer;
                ioInterface.close();
            });

            setInterval(() => {
                if (input) {
                    resolve(input);
                }
            }, 100);
        });
    }


    // why not? ¯\_(ツ)_/¯
    print(message) {
        console.log(message);
    }
}