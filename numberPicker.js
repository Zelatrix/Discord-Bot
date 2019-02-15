const commando = require('discord.js-commando');

class NumberPicker extends commando.Command
{
    constructor(client)
    {
        super(client,
        {
            name: 'pick',
            group: 'games',
            memberName: 'pick',
            description:  'Picks a random number between 1 and 10.'
        });
    }

    async run(message, args)
    {
        var num = ["1","2","3","4","5","6","7","8", "9", "10"];
        var numLength = num.length;

        var randNum = Math.floor(Math.random() * numLength)

        message.reply("You picked the number " + num[randNum] + "!");
    }
}

module.exports = NumberPicker;