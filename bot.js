const Discord = require("discord.js");

const PREFIX = "<3";

var bot = new Discord.Client();

bot.on('ready', () => {
    console.log(`Ready!`);
});

bot.on('message', message => {
    if (!message.content.startsWith(PREFIX)) {
        return;
    }

    var commands = message.content.substring(PREFIX.length).split(" ");

    switch (commands[0].toLowerCase()) {

        case "sharky":
            var fortune = Math.floor(Math.random() * 4);

            if (fortune == 0) {
                message.channel.sendMessage("You break me heart Sharky </3");
            }
            else if (fortune == 1) {
                message.channel.sendMessage("I love youuuuu Sharkyyyy!!!");
            }
            else if (fortune == 2) {
                message.channel.sendMessage("Sharky, Why are you even here :(");
            }
            else if (fortune == 3) {
                message.channel.sendMessage("Marry meeee Sharkyyyy!!!!");
            }
            break;
    }
        });

bot.login(process.env.BOT_TOKEN);
