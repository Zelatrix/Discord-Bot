// If the prompt in the shell disappears, close VSC and reopen it to 
// bring it back, and allow the bot to run properly.  

// Always remember to activate the bot before you use the commands, 
// or they will not work properly!

const Commando = require('discord.js-commando');
const bot = new Commando.Client();
const token = 'NTQyMzc3MzQwMjk5Mzc4Njk3.DztJAw.SkCzU-PbNXq7XDUM49r7pA6-45U'

bot.registry.registerGroup('simple', 'Simple');
bot.registry.registerGroup('games', 'Games');
bot.registry.registerDefaults();
bot.registry.registerCommandsIn(__dirname + '/commands');

// When a certain message is sent, the bot will post a predetermined reply
// to the server
bot.on('message', function(message)
{
    if(message.content == 'Hello')
    {
        // The standard reply, which puts the mention at 
        // the start of the message
        message.reply('How are you?')
    }
    else if(message.content == 'Hi')
    {
        // If the mention is in the middle of the message
        // e.g "Hello @user, how are you?"
        message.channel.send('Hello ' + message.author + ', how are you?');
    }
    else if(message.content == 'Howdy')
    {
        // If the mention is at the end of the message
        // e.g "Hello @user" 
        message.channel.send('Hello ' + message.author)
    }
});

//If the bot gets deactivated, clear both arrays and reset the game. 
/*bot.on('disconnect', () => 
{
    //correctGuessed.length = 0;
    //wrongGuessed.length = 0;
    console.log("Bot disconnected!"); 
});*/

//This method is used to log the bot into the server. 
bot.login(token);