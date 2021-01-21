const { Guild } = require("discord.js")

module.exports = {
    name: "create",
    category: "Building",
    aliases: ["add", "c"],
    cooldown: 0,
    usage: "", 
    description: "create a channel",


    run: async (client, message, args, user, text, prefix) => {
        if(args[0] == 'v'){
            message.guild.channels.create(args.slice(1).join(' '), {type: 'voice', reason: 'Needed a cool new channel' })
            message.channel.send(`Voice Channel <${args.slice(1).join(' ')}> created!`)
            .then(console.log)
            .catch(console.error);
        }else{
            message.guild.channels.create(args.join(' '), {reason: 'Needed a cool new channel' })
            message.channel.send(`Channel <${args.join(' ')}> created!`)
            .then(console.log)
            .catch(console.error);
        }
    }
}