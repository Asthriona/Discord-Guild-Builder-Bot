module.exports = {
    name: "delete",
    category: "Building",
    aliases: ["remove", "d"],
    cooldown: 0,
    usage: "", 
    description: "Delete the channel you are currently talking into",


    run: async (client, message, args, user, text, prefix) => {
        message.channel.delete()
        .then(console.log)
        .catch(message.channel.send());
    }
}