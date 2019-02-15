// This class is a demonstration class for this Discord Bot
const commando = require('discord.js-commando');

class CoinFlip extends commando.Command
{
    constructor(client)
    {
        super(client,
        {
            name: 'flip',
            group: 'games',
            memberName: 'flip',
            description:  'Flips a coin, landing on either heads or tails'
        });
    }

    async run(message, args)
    {
        var chance = Math.floor(Math.random() * 2);
        if(chance == 0)
        {
            message.reply("Your coin was Heads!");
        }
        else
        {
            message.reply("Your coin was Tails!");
        }
    }
}

module.exports = CoinFlip;