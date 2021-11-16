//Require -> Discord.js
const Discord = require('discord.js')
//Require -> File system for logs
const fs = require('fs');
//Start Node.js Server
const client = new Discord.Client()
//Config.json directory
const config = require('./config.json')
//Command.json directory [Yet to be implimented]
const command = require('./command')
//Console.Log to indicate boot success
client.on('ready', () => {
    console.log(
        `======================================
 Bot Event :Connected to API...
======================================
                         ` )
    //Cmd to find API ping , still not done
    command(client, ['ping', 'test'], (message) => {
     
        run: async (client, message, args) => {
            const msg = await message.channel.send("Pinging...");
            const Embed = new MessageEmbed()
                .setTitle("Pong!")
                .setAuthor(`${message.author.username}`, message.author.displayAvatarURL())
                .setDescription(
                    `⌛ Latency is ${Math.floor(
                        msg.createdTimestamp - message.createdTimestamp
                    )}ms\n⏲️ API Ping is ${Math.round(client.tw.ping)}`
                )
                .setColor('#fb644c');
            msg.edit(Embed);
            msg.edit("\u200b");
        }
    
            
            });
            //Cmd to find all servers and number of members ; need to restrict to dev alone
    command(client, 'servers', (message) => {
        client.guilds.cache.forEach((guild) => {
            message.channel.send(
                `${guild.name} has a total of ${guild.memberCount} members`
            )
        })
    })
//Purge Cmd [Perms clear ; need to stop bot from self-purge, logic missing]
    command(client, ['purge'], (message) => {
        //Removes command prefix and name to isolate int.
        const purge = message.content.replace('a!purge', '')
        //Checks if does not  message.member.has perms to manage server and returns error msg
        if (!message.member.hasPermission("MANAGE_MESSAGES")) return message.channel.send("```js\n const Missing key permissions= [Manage_Server]```")
        //Checks if const purge is not a valid int and gives error msg
        if (isNaN(purge)) return message.channel.send('```js\n const int ≠ whole number```\n***note:***\n*Please use  a number/value *');
        //checks if const purge has value of less than 1 or 0, (-)
        if (purge < 1) return message.channel.send("```js\nconst int ≠ Whole number```\n***Note:***\n*Please use a value higher than 0.*");
        //Checks if const int is higher than 100 and gives error msg
        if (purge > 100) return message.channel.send("```js\nconst int > 100```\n***Note:***\n")
        //Executes bullk.delete function if all critereas met.
        if (message.member.hasPermission('MANAGE_MESSAGES')) {
            message.channel.bulkDelete(purge)
        }
    })
    //Help cmnd
    command(client, 'help', (message) => {
//new embed 
        const embed = new Discord.MessageEmbed()

            .setAuthor("Atomic", "https://i.imgur.com/qBnn292.png", "https://google.com")
            .setColor(0x00AE86)
            .setDescription("*Atomic is an under-development ,upcoming discord bot \nwith all the features you would need from a bot packed \ninto one simple and intuitive discord bot*.")
            .addField("`Moderation Commands`", "```a!purge```• Used to purge a large number of messages.\n• The Bot cannot delete msgs older than two weeks.\n```a!kick @Steve```\n• Kicks the mentioned member from the discord.\n• The member is free to rejoin with an invite link.")
            .addField("**Disclaimer**", "`*Most of these features and more features \nto come are under development or testing.`")
            .setFooter("Atomic Bot • Moderator Commands", "https://i.imgur.com/qBnn292.png")
            .setTimestamp()
        message.channel.send({ embed })
    })
//status rpc cmd
    command(client, 'status', (message) => {
        //islotes status from prefix and cmd name
        const content = message.content.replace('a!status ', '')
        //verfies if author is not bot owner and gives error msg
        if (message.author.id != "805412409174654986") return message.channel.send("Client.user.setpresence Denied; ID mismatch")
        //verfies if author is bot owner and gives confirmation msg , logs in console , changes rpc.
        if (message.author.id === "805412409174654986") return message.channel.send("Client.user.setpresence Accepted").then(() => {
            console.log(
                `======================================
 Bot Event : Changing RPC to ${content}... 
======================================`);
            client.user.setPresence({
                activity: {
                    name: content,
                    type: 0,
                },
            })
        })
    })
    //kick cmd
    command(client, 'kick', (message) => {
        //takes const as member , mention as msg
        const { member, mentions } = message
        //takes tag as const for mentions
        const tag = `<@${member.id}>`
        //checks if user has persm and executes kick
        if (
            member.hasPermission('ADMINISTRATOR') ||
            member.hasPermission('KICK_MEMBERS')
        ) {
            //creates const the user mentioned first
            const target = mentions.users.first()
            if (target) {
                //gets target.d from guild.member.cache
                const targetMember = message.guild.members.cache.get(target.id)
                targetMember.kick()
                //confirmation msg
                message.channel.send(`${tag} That user has kicked`)
                //else msg for errors , either no one mentioned or not enough permissions, needs re-coding.
            } else {
                message.channel.send(`${tag} Please specify someone to kick.`)
            }
        } else {
            message.channel.send(
                `${tag} You do not have permission to use this command.`
            )
        }

    })
           //ban cmd
          command(client, 'ban', (message) => {
          //takes const as member , mention as msg
          const { member, mentions } = message
          //takes tag as const for mentions
          const tag = `<@${member.id}>`
          //checks if user does not  perms and executes ban and gives error msg
              if (!message.member.hasPermission('ADMINISTRATOR', 'BAN_MEMBERS')) return message.channel.send('Debug-status-Permission-missing-[ADMIN,BAN]')
              //if user has perms gives confirmation msg and bans
        if (
            member.hasPermission('ADMINISTRATOR') ||
            member.hasPermission('BAN_MEMBERS')
        ) { //creates const the user mentioned first
            const target = mentions.users.first()
            if (target) {
             //gets target.d from guild.member.cache
            const targetMember = message.guild.members.cache.get(target.id)
                targetMember.ban()
                //sends confirmation msg of ban
                message.channel.send(`${mention} That user has been`)
            } else {
                //error msg of function else , wheather no one was mentioned or no perms , needs re-coding
                message.channel.send(`${tag} Please specify someone to ban.`)
            }
        } else {
            message.channel.send(
                `${tag} You do not have permission to use this command.`
            )
        }
    })
    //shutdown cmn
    command(client, 'shutdown', (message) => {
        //checks if user does not have dev id and gives error msg
        message.channel.send(`Verifying User.ID...`);
        
        if (message.author.id != "(config.owner_id)") return message.channel.send('Verifying User.id').then(async (msg) => {
 
            message.channel.send(`Please Verify you have the permission to use this command.`)
        });
        if (message.author.id === "(config.owner_id)") return message.channel.send("Shutting down...").then(() => {
            client.destroy();
                
    console.log(
                    `=======================================
 Bot Event : Shutting down...
======================================
                         ` )
            })
    })

}),

client.login(config.token)  
