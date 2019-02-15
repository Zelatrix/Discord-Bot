const commando = require('discord.js-commando');

class clearMessages extends commando.Command
{
    constructor(client)
    {
        super(client,
        {
            name: 'empty',
            group: 'simple',
            memberName: 'empty',
            description:  'Clears all messages within a certain range, in the channel ' + 
                          'that the bot is in.'
        });
    }

    async run(message, args)
    {
        var count = 0;
        
        //If the message was sent in a channel, increment the counter by one. 
        while(message.content != null)
        {
            if(message.channel.type == 'text' && !message.channel.name == undefined)
            {
                count++
            }
        }

        for(var i = 0; i < count; i++)  
        {
            message.delete();
            message.reply("Messages deleted!");
        }
    }
}

module.exports = clearMessages;