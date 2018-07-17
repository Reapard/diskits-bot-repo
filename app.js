const Discord = require('discord.js');
const bot_client = new Discord.Client();
const settings = require('./settings.json');

var prefix = '!';

var bot_channel;

bot_client.on('ready', () => {
    console.log('A wild Kitsune appeared!\nTry to catch her.');
});

bot_client.on('message', message => {
  let msg = message.content;
  let sender = message.author;

  if(!msg.startsWith(prefix)) return;
  if(sender.bot) return;

  let content = msg.slice(prefix.length).split(" ");
  //let arguments = content.slice(1);
  //console.log('message detected');

    if(msg.startsWith(prefix + 'ping')) {
      //message.channel.send(`Nya ${Date.now() - message.createdTimestamp} ms`);
      message.channel.send(`Nya`);
    } else

    if(msg.startsWith(prefix + 'roll')) {
      console.log(content[1]);
      let dicetower = content[1].split("d");
      if(!isNaN(dicetower[0]) && !isNaN(dicetower[1])){
        var total = 0;
        var resultString = '';
        for (var i = 0; i < dicetower[0]; i++) {
          let roll = Math.floor(Math.random() * dicetower[1]) + 1;
          total += roll;
          resultString += roll.toString() + ' ';
          //console.log(typeof(dicetower[0]));
          //console.log(typeof(dicetower[1]));
        }
        message.channel.send('Checking your luck...');
        message.channel.send('```Rolled: ' + resultString + '```');
        message.channel.send('```Total: ' + total + '```');
      } else {
        console.log('Format error');
      }
    } else

    if(msg.startsWith(prefix + 'help')) {
      message.channel.send(`This is empty for now. You can use \n **roll** to throw dices for now.`);
    } else

    if(msg.startsWith(prefix + 'aux')) {
      bot_client.channels.get('468714873094799370').send('Now you see me');
    } else

    if(msg.startsWith(prefix + 'headpat')) {
      message.channel.send('Blush');
    }
});

bot_client.login(settings.token);
