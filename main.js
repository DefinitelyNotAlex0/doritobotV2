const Discord = require('discord.js');
const client = new Discord.Client();

//Replies with bot's name and tag in console when active.
client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

//Replies with "Ready and reporting for duty" in a specified channel when ready
client.on('ready', () => {
  client.channels.cache.get('channel_id_here').send('Ready and reporting for duty!')
});


//Use this to test if the bot is working.
//Sends ping when it sees pong. 
client.on('message', msg => {
  if (msg.content === '&ping') {
    msg.channel.send('Pong!');
  }
});

/*----------------The fun starts here----------------*/

//Big ass E M B E D
//Creates an embed with all usable commands
//Please update this if you add anything
client.on('message', msg => {
  if (msg.content === '&help') {
    msg.channel.send(
      {
  
        "embed": {
          "title": "Commands",
          "description": "Here's a list of all available commands.",
          "color": 15641368, 
          "thumbnail": {
            "url": "http://www.spectr.ga/dorito.png"
          },
          "author": {
            "name": "Dorito-Bot"
          },
          "fields": [
            {
              "name": "&help",
              "value": "Displays this embed"
            },
            {
              "name": "&info",
              "value": "Displays current version of Dorito-Bot"
            },
            {
              "name": "&drop",
              "value": "'Drops Doritos' into the channel after command is sent"
            },
            {
              "name": "&startdrop",
              "value": "Will 'Drop Doritos' every 1 hour and 30 minutes after the command is sent"
            },
            {
              "name": "&roll",
              "value": "Dorito-Bot will do a barrel roll"
            },
            {
              "name": "&nice",
              "value": "nice"
            }          
          ]
        }
      } 
    )
  }
})

//Sends current version of the Bot into a channel
client.on('message', msg => {
  if (msg.content === '&info') {
    msg.channel.send('Dorito-Bot version 2.1.1 by DefinitelyNotAlex#4178');
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

//nice
client.on('message', msg => {
  if (msg.content === '&nice') {
    msg.channel.send('nice')
  }
});


/*----------------The fun ends here----------------*/
//Bot's token, make sure this is valid.
client.login('token_here');
