const { Guild } = require("discord.js")

module.exports = {
    name: "nuke",
    category: "Building",
    aliases: ["dellall"],
    cooldown: 0,
    usage: "", 
    description: "delete all the shit inside",


    run: async (client, message, args, user, text, prefix) => {
        //message.channel.send("IM NUKING EVERYTHING NOW")
        message.guild.channels.cache.forEach(channel => {
            channel.delete()
        });
    }
}