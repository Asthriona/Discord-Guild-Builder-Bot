const { Guild } = require("discord.js")

module.exports = {
    name: "masscreate",
    category: "Building",
    aliases: ["mcreate", "mc"],
    cooldown: 0,
    usage: "", 
    description: "create a shit load of channel",


    run: async (client, message, args, user, text, prefix) => {
        args.forEach(chan => {
            message.guild.channels.create(chan, {reason: 'rebuilds' })
            message.channel.send(`Channel <${chan}> created!`)
            .then(console.log("channel has been created"))
            .catch(console.error);
        });
    }
}
