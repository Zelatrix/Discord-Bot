const commando = require('discord.js-commando');
var correctGuessed = correctGuessed || [];   
var wrongGuessed = wrongGuessed || [];

class HangMan extends commando.Command
{
    constructor(client)
    {
        super(client,
        {
            name: 'hang',
            group: 'games',
            memberName: 'hang',
            description:  'Starts to play a game of Hangman. When you guess the' 
                           + ' word, let me know and I\'ll change the code!' 
        });
    }

    async run(message, args)
    {
        var word = "ALPHABET";
        var wordLength = word.length;
        var choices = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L",
                      "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", 
                      "Y", "Z"];
        var guessCount = 0;

        function guessVal()
        {
            var guess = Math.floor(Math.random() * choices.length);
            var value = choices[guess].valueOf();
            return value;
        }
        var funcVal = guessVal();

        function countVal(myVal)
        {
            myVal == funcVal;
        }

        function guessCheck()
        {
            //Each time the player makes a guess, right or wrong, increment the counter 
            if(guessCount < 10)
            {
                //Increments the number of guesses the player has made
                ++guessCount;
                message.channel.send("You have made " + guessCount + " guesses!");
            }

            //If the number of guesses reaches 10, the game is over.
            if(wrongGuessed.length == 10)
            {
                message.channel.send("You lose! Better luck next time!");
            }

            //If the number of guesses made is equal to the word length
            //then the word must have been guessed. If this is the case,
            //inform the player that they have won.  
            if(correctGuessed.length == word.length)
            {
                message.channel.send("You guessed the word! The word is " + word + "!");
            }

            //If the guessed letter is in either array, prompt another guess.
            //if(correctGuessed.includes(funcVal) || wrongGuessed.includes(funcVal))

            var countGuess = choices.filter(countVal).length;
            if(countGuess > 1)
            {
                message.channel.send("Letter has already been guessed! Please guess again!");
                message.delete(funcVal);
            }
            
            //else if(correctGuessed.length == 0 || wrongGuessed.length == 0)
            //{
                //message.channel.send("Carry on!");
            //}
        }

        //Start the game with a word length and a letter guess
        message.reply("I am thinking of a " + wordLength + " letter word.");
        message.channel.send("My guess is " + funcVal);

        //If the guess was correct
        if(word.includes(funcVal))
        {
            //Send a congratulatory message and push the letter onto
            //the end of the array so it cannot be guessed again. 
            message.channel.send("Your guess was correct! Guess again!");
            correctGuessed.push(funcVal);
            console.log(correctGuessed);
            guessCheck();
        }

        //If the guess was wrong
        if(!word.includes(funcVal))
        {
            message.channel.send("Your guess was incorrect!");
            wrongGuessed.push(funcVal);
            console.log(wrongGuessed);
            guessCheck();
        }
    }
}

module.exports = HangMan;