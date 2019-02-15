const commando = require('discord.js-commando');

class CardPick extends commando.Command
{
    constructor(client)
    {
        super(client,
        {
            name: 'draw',
            group: 'games',
            memberName: 'draw',
            description:  'Draws a random card from a deck of 52 cards.'
        });
    }

    async run(message, args)
    {
        //var chance = Math.floor(Math.random() * 52);
        var suit = ["hearts","clubs","spades","diamonds"];
        var value = ["2","3","4","5","6","7","8", "9", "10", "ace","king","queen","jack"];

        var suitLength = suit.length;
        var valLength = value.length;

        var randSuit = Math.floor(Math.random() * suitLength)
        var randNum = Math.floor(Math.random() * valLength)

        message.reply("Your card is the " + value[randNum] + " of " + suit[randSuit]);
    }
}

module.exports = CardPick;