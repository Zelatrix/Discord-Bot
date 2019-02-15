const commando = require('discord.js-commando');

class tradeCommand extends commando.Command
{
    constructor(client)
    {
        super(client, 
        {
            name: 'trade',
            group: 'simple',
            memberName: 'trade',
            description: 'Allows a user to trade items with another user'
        });
    }

    async run(message, args)
    {
        var items = ['shield','sword','axe','pair of gauntlets','pair of boots','chain mail vest'];
        var size = items.length;

        var itemsNum = Math.floor(Math.random() * size)
        if(itemsNum == 0)
        {
            message.reply("You got a " + items[0] + "!")
        }
        else if(itemsNum == 1)
        {
            message.reply("You got a " + items[1] + "!")
        }
        else if(itemsNum == 2)
        {
            message.reply("You got an " + items[2] + "!")
        }
        else if(itemsNum == 3)
        {
            message.reply("You got a " + items[3] + "!")
        }
        else if(itemsNum == 4)
        {
            message.reply("You got a " + items[4] + "!")
        }
        else if(itemsNum == 5)
        {
            message.reply("You got a " + items[5] + "!")
        }

        /*switch(itemsNum)
        {
            case(itemsNum == 0): 
            {
                message.reply("You got a " + items[0])
                break;
            }
            case(1):
            {
                message.reply("You got a " + items[1])
                break;
            } 
            case(2):
            {
                message.reply("You got an " + items[2])
                break;
            } 
            case(3):
            {
                message.reply("You got a " + items[3])
                break;
            } 
            case(4):
            {
                message.reply("You got a " + items[4])
                break;
            } 
            case(5):
            {
                message.reply("You got a " + items[5])
                break;
            } 
        }*/

    }
}

module.exports = tradeCommand;