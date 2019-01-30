const Discord = require('discord.js');
const bot_client = new Discord.Client();
const settings = require('./settings.json');

var prefix = '!';

var bot_channel;

function roll(diceNumber, diceSize, channel){
	if(!isNaN(diceNumber) && !isNaN(diceSize)){
        var total = 0;
        var resultString = '';

        for (var i = 0; i < diceNumber; i++) {
          let roll = Math.floor(Math.random() * diceSize) + 1;
          total += roll;
          resultString += roll.toString() + ' ';
        }
        channel.send('Checking your luck...');
        channel.send('```Rolled: ' + resultString + '```');
        channel.send('```Total: ' + total + '```');
      } else {
        console.log('Format error');
        channel.send('Format error');
      }
}

bot_client.on('ready', () => {
    console.log('A wild Kitsune appeared!\nTry to catch her.');
});

bot_client.on('message', message => {
  let msg = message.content;
  let sender = message.author;

  if(!msg.startsWith(prefix)) return;
  if(sender.bot) return;

  let args = msg.slice(prefix.length).split(" ");
  //let arguments = args.slice(1);
  //console.log('message detected');

    if(msg.startsWith(prefix + 'ping')) {
      //message.channel.send(`Nya ${Date.now() - message.createdTimestamp} ms`);
      message.channel.send(`Nya`);
    } else

    if(msg.startsWith(prefix + 'roll')) {
      console.log(args[1]);
      if(typeof args[1] !== "undefined"){
      	let dicetower = args[1].split("d");
      	roll(dicetower[0], dicetower[1], message.channel);
      } else {
      	roll(3, 6, message.channel);
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
