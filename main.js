const Discord = require('discord.js');
const client = new Discord.Client();

//Replies with bot's name and tag in console when active.
client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

//Replies with "Ready and reporting for duty" in a specified channel when ready
client.on('ready', () => {
  client.channels.cache.get('channel_here').send('Ready and reporting for duty')
});


//Use this to test if the bot is working.
//Sends ping when it sees pong. 
client.on('message', msg => {
  if (msg.content === '&ping') {
    msg.channel.send('Pong!');
  }
});

/*----------------The fun starts here----------------*/

//Sends current version of the Bot into a channel
client.on('message', msg => {
  if (msg.content === '&info') {
    msg.channel.send('Dorito-Bot version 2.0.1 by DefinitelyNotAlex#4178');
  }
});

//Sends "*Comencing Barrel Roll*" into a channel
client.on('message', msg => {
  if (msg.content === '&roll') {
    msg.channel.send('*Comencing Barrel Roll*');
  }
});

//Drops dorritos at an interval in milliseconds
client.on('message', msg => {
  if (msg.content === '&startdrop') {
    msg.channel.send('I will now drop doritos every 1h 30m')
    setInterval(() => {
      msg.channel.send('▼ ◄ ▲ ► ▼ ◄ ▲ ▼ ◄ ▲ ► ▼ ◄ ▲ ▼ ◄ ▲ ► ▼ ◄ ▲ ▼ ◄ ▲ ► ▼ ◄ ▲ ▼ ◄ ▲ ► ▼ ◄ ▲ ► ▼ ◄ ▲ ► ▼ ◄ ▲ ▼ ◄ ▲▼ ◄ ▲ ► ▼ ◄ ▲ ▼ ◄ ▲ ▲▼ ◄ ▲ Sorry, I dropped my doritos again.▼ ◄ ▲ ► ▼ ◄ ▲ ▲▼ ◄ ▲ ► ▼ ◄ ▲ ▼ ◄ ▲ ► ▼ ◄ ▲ ▼ ◄ ▲ ► ▼ ◄ ▲ ▼ ◄ ▲ ► ▼ ◄ ▲ ▼ ◄ ▲ ► ▼ ◄ ▲ ▼ ◄ ▲ ► ▼ ◄ ▲ ▼ ◄ ▲ ► ▼ ◄ ▲ ▼ ◄ ▲ ► ▼ ◄ ▲ ◄ ▲ ► ▼ ◄ ▲ ▼ ◄ ▲ ► ▼ ◄ ▲ ▼ ◄ ▲ ► ▼ ◄ ▲ ▼ ◄ ▲ ► ▼ ◄ ▲')
    },/*Interval in ms here*/ 5400000)
  }
});

//Drops doritos into a channel
client.on('message', msg => {
  if (msg.content === '&drop') {
    msg.channel.send('▼ ◄ ▲ ► ▼ ◄ ▲ ▼ ◄ ▲ ► ▼ ◄ ▲ ▼ ◄ ▲ ► ▼ ◄ ▲ ▼ ◄ ▲ ► ▼ ◄ ▲ ▼ ◄ ▲ ► ▼ ◄ ▲ ► ▼ ◄ ▲ ► ▼ ◄ ▲ ▼ ◄ ▲▼ ◄ ▲ ► ▼ ◄ ▲ ▼ ◄ ▲ ▲▼ ◄ ▲ Sorry, I dropped my doritos again.▼ ◄ ▲ ► ▼ ◄ ▲ ▲▼ ◄ ▲ ► ▼ ◄ ▲ ▼ ◄ ▲ ► ▼ ◄ ▲ ▼ ◄ ▲ ► ▼ ◄ ▲ ▼ ◄ ▲ ► ▼ ◄ ▲ ▼ ◄ ▲ ► ▼ ◄ ▲ ▼ ◄ ▲ ► ▼ ◄ ▲ ▼ ◄ ▲ ► ▼ ◄ ▲ ▼ ◄ ▲ ► ▼ ◄ ▲ ◄ ▲ ► ▼ ◄ ▲ ▼ ◄ ▲ ► ▼ ◄ ▲ ▼ ◄ ▲ ► ▼ ◄ ▲ ▼ ◄ ▲ ► ▼ ◄ ▲');
  }
});




/*----------------The fun ends here----------------*/
//Bot's token, make sure this is valid.
client.login('token_here');