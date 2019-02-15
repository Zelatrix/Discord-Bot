const commando = require('discord.js-commando');

class DiceRoll extends commando.Command
{
    constructor(client)
    {
        super(client,
        {
            name: 'roll',
            group: 'games',
            memberName: 'roll',
            description:  'Rolls a dice, and lands on one of the six faces.'
        });
    }

    async run(message, args)
    {
        var chance = Math.floor(Math.random() * 6) + 1;
        if(chance == 1)
        {
            message.reply("You rolled a 1!");
        }
        else if(chance == 2)
        {
            message.reply("You rolled a 2!");
        }
        else if(chance == 3)
        {
            message.reply("You rolled a 3!");
        }
        else if(chance == 4)
        {
            message.reply("You rolled a 4!");
        }
        else if(chance == 5)
        {
            message.reply("You rolled a 5!");
        }
        else if(chance == 6)
        {
            message.reply("You rolled a 6!");
        }
    }
}

module.exports = DiceRoll;