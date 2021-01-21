# YDT Server Creation helper

Heya!
Thanks for your interest to this code!
This is the Yukiko Dev Team's Discord Guilds Creation helper or YDTDGCH for short... yeah Im bad at naming.

This is a discord bot thats use to help you create a guild. there is no template or anything, Juste create a temp channel and type your commands.  
For now this bot can:
+ Create channel one by one
+ Delete channel one by one
+ Mass create channel
+ Delete all channel at once.

## Instalation: 
You need NodeJS (bot build on NodeJS 12 but may work on newer version (Not tested))  
Once nodeJS is installed:  
  
install all the package needed  
```
npm i // To install all the packages needed
```
Edit the `config.json` file with your bot token and the prefix (`..` by default)  
Start the bot
```
npm run dev
```
your bot is online!  
I recommand to give it the admin permissions and I **STRONGLY RECOMMAND** to not use it on active server. The bot dont check what permission the user have, so anyone can use it!  
  
## Commands
+ `create` Create a single channel Eg: `create channel name`
+ `delete` Delete the channel you are talking in Eg: `delete`
+ `masscreate` Create a lot of channel at once Eg: `masscreate general exemple-channel-multiple-word` to create 2 channels
+ `nuke` ***Delete ALL THE CHANNELS***