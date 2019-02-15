const commando = require('discord.js-commando');

class RockPaperScissors extends commando.Command
{
    constructor(client)
    {
        super(client,
        {
            name: 'rps',
            group: 'games',
            memberName: 'rps',
            description:  'Plays a game of rock, paper, scissors.'
        });
    }

    async run(message, args)
    {
        var choices = ["rock","paper","scissors"];
        var myChoiceValue = Math.floor(Math.random() * choices.length)
        message.reply("You picked " + choices[myChoiceValue] + "!");
    }
}

module.exports = RockPaperScissors;