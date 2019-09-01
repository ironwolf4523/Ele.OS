//Welcome to The Ele.OS Discord Bot!
//I made this so i could teach my self how discord bots work and How Discord.js Works 
//So if the code is terrible Don't Judge me 
//and Yes The Code is all in One Document; I dont know how to seprate the code into diffrent documets yet.
//im new to codeing in Javscript!

//*The code start Here*

//This Code is needed So The Bot Works And comes online!, and So Bot Activity is Displayed Propley
require('dotenv').config()
const {Client, RichEmbed, Attachment } = require('discord.js');
const client = new Client();
const PREFEX = 'Ele ';
client.on('ready', message => {
    console.log('Logged in to Your Server!')
    console.log(`Logged in as ${client.user.tag}`)
    console.log('Thanks For using my Bot')
    console.log('//IronWolf\\')
    client.user.setActivity('Reboot Me Feat. Eleanor Forte', { type: 'LISTENING'});

});
//For Rich Embeds!
//The Code Below Is for The Bot To Watch Chat So it's Aware What Been Typed and Respond Acordingly!
client.on('message', message => {
        let args = message.content.substring(PREFEX.length).split(" ");
        switch (args[0]) {
            case 'who':
            if(args[1] === 'made')
            if(args[2] === 'you?')
            message.reply('That would be Ally\'s dad, he programed me!')
            break;
            case 'who\'s':
            if(args[1] === 'your')
            if(args[2] === 'favourite')
            if(args[3] === 'program?')
            message.reply('I Think that\'s probably ...')
            message.channel.send('Err ... ...')
            message.channel.send('I, I, cant find him...')
            message.channel.send('Trash Can .exe Where is he?')
            case 'DSsdert3hJKC':
             message.channel.send('theres noting wrong.')
             break;   
             case 'whats':
                 if(args[1] === 'your')
                 if(args[2] === 'favourite')
                 if(args[3] === 'song?') {
                    const embed = new RichEmbed()
                    .setTitle('My Favourite Song is Reboot Me!')
                    .setColor(0x33cccc)
                    .setDescription('My Song was Made by best friend Jakeneutron')
                    .setURL('https://www.youtube.com/watch?v=Ex5ZkWI76Wc&list=PLNzAbQKI5RwGvxtk3ZvkXHyT11o01yKol&index=1')
                    message.channel.send(embed);
                 }

            break;         
        }
    } 
)
//This String Needs To Be at The End So it Gets Your Logon Token (Placed In the .ENV File After the 'Bot_Token=', You Can Get a Bot Token By Going to discordapp.com/developers/applications/)
client.login(process.env.Bot_Token)