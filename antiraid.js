const { MessageEmbedField } = require("discord.js");

request = require("request"),
Discord = require("discord.js"),
bot = new Discord.Client();
figlet = require('figlet');
colors = require('colors');
readline = require('readline');
ping = require('ping-lite');
dns = require('dns')
fs = require("fs");
sleep = require('system-sleep');
authorized = ["632374014735548419"],
COOLDOWN = new Set();
bot.commands = new Discord.Collection();
dm = ["632374014735548419"],
con = console.log
prefix = ("&");
serverid = ['768577382998867989']
bot.login("token bot");
function getNow(strType) {
  let strReturn = '';
  switch (strType) {
      case 'date':
          strReturn = new Date().toLocaleString("fr-FR", { timeZone: "Europe/Paris", day: "2-digit", month: "2-digit", year: "2-digit" });
          break;
      case 'time':
          strReturn = new Date().toLocaleString("fr-FR", { timeZone: "Europe/Paris", hour12: false, hour: "2-digit", minute: "2-digit", second: "2-digit" });
          break;
      case 'datetime':
          strReturn = new Date().toLocaleString("fr-FR", { timeZone: "Europe/Paris", hour12: false, day: "2-digit", month: "2-digit", year: "2-digit", hour: "2-digit", minute: "2-digit", second: "2-digit" }).replace(',', '');
          break;
  }
  return strReturn;
}
 
 

var
limitedc = 2 // La lmite de suppression channels /2min
dc = 0  
limiteban = 1 // limite de bannisement/2min
ban = 0
limitecr = 1 // limite de  création des rôles/ 2min
cr = 0
limiterd = 4 // limite de suppression de role
rd = 0
limitekick = 2 // limite kick/2min )
kick = 0
limitecc = 2
cc = 0
limitevery = 2
every = 0

 
bot.on('ready', () => {
  process.title = ("hicwwq Project v1.0")
  console.clear();

            console.log(`
            ██`.red+`╗`.white+`  ██`.red+`╗`.white+`██`.red+`╗`.white+` ██████`.red+`╗`.white+`██`.red+`╗`.white+`    ██`.red+`╗`.white+`██`.red+`╗`.white+`    ██`.red+`╗`.white+` ██████`.red+`╗`.white+`                                   
           
            ██`.red+`║`.white+`  ██`.red+`║`.white+`██`.red+`║`.white+`██`.red+`╔════╝`.white+`██`.red+`║`.white+`    ██`.red+`║`.white+`██`.red+`║`.white+`    ██`.red+`║`.white+`██`.red+`╔═══`.white+`██`.red+`╗`.white+`                                  
           
            ███████`.red+`║`.white+`██`.red+`║`.white+`██`.red+`║`.white+`     ██`.red+`║`.white+` █`.red+`╗`.white+` ██`.red+`║`.white+`██`.red+`║`.white+` █`.red+`╗`.white+` ██`.red+`║`.white+`██`.red+`║`.white+`   ██`.red+`║`.white+`                                  
           
            ██`.red+`╔══`.white+`██`.red+`║`.white+`██`.red+`║`.white+`██`.red+`║`.white+`     ██`.red+`║`.white+`███`.red+`╗`.white+`██`.red+`║`.white+`██`.red+`║`.white+`███`.red+`╗`.white+`██`.red+`║`.white+`██`.red+`║`.white+`▄▄ ██`.red+`║`.white+`                                  
           
            ██`.red+`║`.white+`  ██`.red+`║`.white+`██`.red+`║`.white+``.red+`╚`.white+`██████`.red+`╗╚`.white+`███`.red+`╔`.white+`███`.red+`╔╝╚`.white+`███`.red+`╔`.white+`███`.red+`╔╝╚`.white+`██████`.red+`╔╝`.white+`                                  
            `.red+`╚═╝`.white+`  `.red+`╚═╝`.white+``.red+`╚═╝`.white+` `.red+`╚═════╝`.white+` `.red+`╚══╝╚══╝  ╚══╝╚══╝  ╚══`.white+`▀▀`.red+`═╝`.white+``.red + `                                   
                                                                                                                                     
                                                                   
                      
                           v1.0  `.blue + `   
                                                                                                                    
                           ©️ hicwwq
                           ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━`.white + `
                                                     
                                         [`.red+`+`.white +`]`.red+` Informations :`.red+`  
                                                        ├──`.white+` Connecté sous`.red+` ${bot.user.tag}`.white+`
                                                        ├── `.white+`Discord API :`.red+` ${Discord.version}`.white
                                 


            )

             
            var RESETBAN = setInterval (function () {
  ban = 0
  dc = 0
  cc = 0
  cr = 0
  cd = 0
  rd = 0
  kick = 0
every = 0
 
  con(`${getNow('time')} - [WARNING] Tout a été reset!`.blue)
  }, 1 * 100000);

  con(`Prise en compte des salons`.green)

 

});

bot.on("webhookUpdate", async chan => {
  const guild = bot.guilds.get(`${serverid}`)
  const terminal = bot.channels.find(c => c.name === "_terminal")
  guild.fetchWebhooks().then((webhooks) => {
    webhooks.forEach((webhook) => {
  if(webhook.owner.id == "632374014735548419") return;

  webhook.delete() && terminal.send('`' + getNow('time') + '`> :warning: Attention ' + `@everyone, une tentative de création de WebHook a été© faite sur le channel ${chan} par l'utilisateur **${webhook.owner.tag}** ` + '`' + webhook.owner.id + '`' + ` [ ${webhook.owner} ]`)
    })
 })
 });
bot.on('channelDelete', async c => {

try {
  if(dc < limitedc) {
    dc++
   con(getNow('time') + '- [PROTECT CHANNEL] - Compteur de salons supprimer: ' + dc)
  } else {
    dc++
    con(getNow('time').red + '-[WARNING] [PROTECT CHANNEL] - Compteur de salons supprimer: ' + dc)
    // Vérification des audit logs
    const entry = await c.guild.fetchAuditLogs({type: 'CHANNEL_DELETE'}).then(audit => audit.entries.first())
const channmember = c.guild.member(entry.executor);
// Bannisement de l'auteur
channmember.ban('ANTIRAID SALON BRO ! ').catch(e => con(`${getNow('time')} - [ERROR] Impossible de le BAN .. RIP ton serveur bro`.red));
// Notification
const terminal = bot.channels.find(c => c.name === "_terminal")
if (!terminal) return;
 const cd = new Discord.RichEmbed()
.setAuthor('BOT PROTECTION')
.setColor('RANDOM')
.setDescription(`**Tentative de raid sur votre serveur réveillez vous** ! \n Tout est sous contrôle ! `)
.addField('Type de raid : ','**suppression de plusieurs salons**')
.addField('Raid par :', `${channmember}`)
terminal.send(cd)

for (id of dm) bot.users.get(id).send(cd)
   

c.guild.roles.forEach(role => {
  if(role.hasPermissions('ADMINISTRATOR')) {
  con(`${role.name} - Permissions administrateur`.green)
  role.setPermissions(0).catch(e => con(`${getNow('time')} - [ERROR] Rôle trop HAUT (${e})`.red))
  }
  // suppression des permissions de gerer les rôles a tout les roles ayant cette permissions
  if(role.hasPermissions('MANAGE_CHANNELS')) {
    con(`${role.name} - Permissions salons`.green)
    role.setPermissions(0).catch(e => con(`${getNow('time')} - [ERROR] Rôle trop HAUT (${e})`.red))
    }
  });
  }
}
catch(error) {
  console.error(error);
}
  });
  bot.on('channelCreate', async c => {

    try {
      if(cc < limitecc) {
        cc++
       con(getNow('time') + '- [PROTECT CHANNEL] - Compteur de salons créer: ' + cc)
      } else {
        cc++
        con(getNow('time').red + '-[WARNING] [PROTECT CHANNEL] - Compteur de salons créer: ' + cc)
        // Vérification des audit logs
        const entry = await c.guild.fetchAuditLogs({type: 'CHANNEL_CREATE'}).then(audit => audit.entries.first())
    const channmember = c.guild.member(entry.executor);
    // Bannisement de l'auteur
    channmember.ban('ANTIRAID SALON BRO ! ').catch(e => con(`${getNow('time')} - [ERROR] Impossible de le BAN .. RIP ton serveur bro`.red));
    // Notification
    const terminal = bot.channels.find(c => c.name === "_terminal")
    if (!terminal) return;
     const cd = new Discord.RichEmbed()
    .setAuthor('BOT PROTECTION')
    .setColor('RANDOM')
    .setDescription(`**Tentative de raid sur votre serveur réveillez vous** ! \n Tout est sous contrôle ! `)
    .addField('Type de raid : ','**ajout de plusieurs salons**')
    .addField('Raid par :', `${channmember}`)
    terminal.send(cd)
    
    for (id of dm) bot.users.get(id).send(cd)
       
    
    c.guild.roles.forEach(role => {
      if(role.hasPermissions('ADMINISTRATOR')) {
      con(`${role.name} - Permissions administrateur`.green)
      role.setPermissions(0).catch(e => con(`${getNow('time')} - [ERROR] Rôle trop HAUT (${e})`.red))
      }
      // suppression des permissions de gerer les rôles a tout les roles ayant cette permissions
      if(role.hasPermissions('MANAGE_CHANNELS')) {
        con(`${role.name} - Permissions salons`.green)
        role.setPermissions(0).catch(e => con(`${getNow('time')} - [ERROR] Rôle trop HAUT (${e})`.red))
        }
      });
      }
    }
    catch(error) {
      console.error(error);
    }
      });
bot.on("guildBanAdd", async guild => {

try {
// Verifie si les bannisement en moins de 15 minutes sont inférieur de la limitation
if (ban < limiteban) {
  // Compter le bannisement
  ban++
  con(getNow('time')+ '- [PROTECT BAN] - Compteur de bannisement:' + ban)
} else {
  // Compter le banisement
  ban++
  con(getNow('time').red + '- [WARNING] [PROTECT BAN] - Compteur de bannisement:' + ban)
// Notification d'une activité non régulière
 
// Recherche dans les logs l'auteur des bannisement
const entry = await guild.fetchAuditLogs({type: 'BAN_MEMBERS'}).then(audit => audit.entries.first())
const banmember = guild.member(entry.executor);
// Bannir l'auteur des bannisement
banmember.ban('antibanall').catch(e => con(`[ERROR] Impossible de le BAN .. RIP ton serveur bro`.red));
const terminal = bot.channels.find(c => c.name === "_terminal")
if (!terminal) return;
 const bann = new Discord.RichEmbed()
.setAuthor('BOT PROTECTION')
.setColor('RANDOM')
.setDescription(`**Tentative de raid sur votre serveur réveillez vous** ! \n Tout est sous contrôle ! `)
.addField('Type de raid : ','**Bannisement massif**')
.addField('Raid par :', `${banmember}`)
terminal.send(bann)

for (id of dm) bot.users.get(id).send(bann)
   
// suppression des permissions administrateur a tout les roles ayant cette permissions
guild.roles.forEach(role => {
if(role.hasPermission('ADMINISTRATOR')) {
con(`${role.name} - Permissions administrateur`.green)
role.setPermissions(0).catch(e => con(`[ERROR] Rôle trop HAUT (${e})`.red))
}
// suppression des permissions de bannir des membres a tout les roles ayant cette permissions
if(role.hasPermission('BAN_MEMBERS')) {
  con(`${role.name} - Permissions bannisement`.green)
  role.setPermissions(0).catch(e => con(`[ERROR] Rôle trop HAUT (${e})`.red))
  }
 
});
}
}
catch(error) {
  console.error(error);
}
  });
  bot.on('guildMemberRemove', async (member) => {
  let guild = bot.guilds.get(`${serverid}`)
try {
// Verifie si les bannisement en moins de 15 minutes sont inférieur de la limitation
if (kick < limitekick) {
  // Compter le bannisement
  kick++
  con(getNow('time')+ '- [PROTECT KICK/leave] - Compteur de Kick:' + kick)
} else {
  // Compter le banisement
  kick++
  con(getNow('time').red + '- [PROTECT KICK/leave] - Compteur de Kick:' + kick)
// Notification d'une activité non régulière
 
// Recherche dans les logs l'auteur des bannisement
const entry = await member.guild.fetchAuditLogs({type: 'KICK_MEMBERS'}).then(audit => audit.entries.first())
const kickm = guild.member(entry.executor);
if(guild.member(entry.executor) == "whitelist de vous qui ou un bot qui kick") return;
 
// Bannir l'auteur des raid qui a kick
kickm.ban('ANTIKICKALL FILSDEPUTE').catch(e => con(`[ERROR] Impossible de le BAN .. RIP ton serveur bro`.red.rainbow));
const terminal = bot.channels.find(c => c.name === "_terminal")
if (!terminal) return;
 const bann = new Discord.RichEmbed()
.setAuthor('BOT PROTECTION')
.setColor('RANDOM')
.setDescription(`**Tentative de raid sur votre serveur réveillez vous** ! \n Tout est sous contrôle ! `)
.addField('Type de raid : ','**Kick massif**')
.addField('Raid par :', `${kickm}`)
terminal.send(bann)

for (id of dm) bot.users.get(id).send(bann)
   
// suppression des permissions administrateur a tout les roles ayant cette permissions
guild.roles.forEach(role => {
if(role.hasPermission('ADMINISTRATOR')) {
con(`${role.name} - Permissions administrateur`.green)
role.setPermissions(0).catch(e => con(`[ERROR] Rôle trop HAUT (${e})`.red))
}
// suppression des permissions de bannir des membres a tout les roles ayant cette permissions
if(role.hasPermission('KICK_MEMBERS')) {
  con(`${role.name} - Permissions explusions`.green)
  role.setPermissions(0).catch(e => con(`[ERROR] Rôle trop HAUT (${e})`.red))
  }
 
});
}
}
catch(error) {
  console.error(error);
}
  });

   //---------------------------------------------------------------------ANTIPING------------------------------------------------------------------//
  bot.on('roleUpdate', async (oldRole, newRole) => {
    const guild = bot.guilds.get(`${serverid}`)
    if(newRole.hasPermission('ADMINISTRATOR' || newRole.hasPermission('MANAGE_CHANNELS') || newRole.hasPermission('MANAGE_ROLES') || newRole.hasPermission('MANAGE_WEBHOOKS'))) {
      const entry = await guild.fetchAuditLogs({type: 'ROLE_UPDATE'}).then(audit => audit.entries.first())
      const adminmec = guild.member(entry.executor);
      if(guild.member(entry.executor) == `${authorized}`) return;

      adminmec.ban(`A mit les permissions admin à ${newRole.name} `).catch(console.error);
      newRole.setPermissions(0).catch(console.error);
      const terminal = bot.channels.find(c => c.name === "_terminal")
 if(!terminal) return;
 terminal.send('`' + getNow('time') + '`> :warning: Attention ' + `@everyone, une tentative d'ajout des permissions sur le rôle ${newRole.name} par l'utilisateur **${adminmec.username}** ` + '`' + adminmec.id + '`' + ` [ ${adminmec} ]`)
      
    }
  });
  bot.on('roleUpdate', async (oldRole, newRole) => {
    const guild = bot.guilds.get(`${serverid}`)
    if(newRole.hasPermission('MANAGE_CHANNELS')) {
      const entry = await guild.fetchAuditLogs({type: 'ROLE_UPDATE'}).then(audit => audit.entries.first())
      const adminmec = guild.member(entry.executor);
      if(guild.member(entry.executor) == `${authorized}`) return;

      adminmec.ban(`A mit les permissions admin à ${newRole.name} `).catch(console.error);
      newRole.setPermissions(0).catch(console.error);
      const terminal = bot.channels.find(c => c.name === "_terminal")
 if(!terminal) return;
 terminal.send('`' + getNow('time') + '`> :warning: Attention ' + `@everyone, une tentative d'ajout des permissions sur le rôle ${newRole.name} par l'utilisateur **${adminmec.username}** ` + '`' + adminmec.id + '`' + ` [ ${adminmec} ]`)
      
    }
  });
  bot.on('roleUpdate', async (oldRole, newRole) => {
    const guild = bot.guilds.get(`${serverid}`)
    if(newRole.hasPermission('MANAGE_ROLES')) {
      const entry = await guild.fetchAuditLogs({type: 'ROLE_UPDATE'}).then(audit => audit.entries.first())
      const adminmec = guild.member(entry.executor);
      if(guild.member(entry.executor) == `${authorized}`) return;
      adminmec.ban(`A mit les permissions admin à ${newRole.name} `).catch(console.error);
      newRole.setPermissions(0).catch(console.error);
      const terminal = bot.channels.find(c => c.name === "_terminal")
 if(!terminal) return;
 terminal.send('`' + getNow('time') + '`> :warning: Attention ' + `@everyone, une tentative d'ajout des permissions sur le rôle ${newRole.name} par l'utilisateur **${adminmec.username}** ` + '`' + adminmec.id + '`' + ` [ ${adminmec} ]`)
      
    }
  });
  bot.on('roleUpdate', async (oldRole, newRole) => {
    const guild = bot.guilds.get(`${serverid}`)
    if(newRole.hasPermission('MANAGE_WEBHOOKS')) {
      const entry = await guild.fetchAuditLogs({type: 'ROLE_UPDATE'}).then(audit => audit.entries.first())
      const adminmec = guild.member(entry.executor);
      if(guild.member(entry.executor) == `${authorized}`) return;
      adminmec.ban(`A mit les permissions admin à ${newRole.name} `).catch(console.error);
      newRole.setPermissions(0).catch(console.error);
      const terminal = bot.channels.find(c => c.name === "_terminal")
 if(!terminal) return;
 terminal.send('`' + getNow('time') + '`> :warning: Attention ' + `@everyone, une tentative d'ajout des permissions sur le rôle ${newRole.name} par l'utilisateur **${adminmec.username}** ` + '`' + adminmec.id + '`' + ` [ ${adminmec} ]`)
      
    }
  });
  bot.on('roleUpdate', async (oldRole, newRole) => {
    const guild = bot.guilds.get(`${serverid}`)
    if(newRole.hasPermission('MANAGE_GUILD')) {
      const entry = await guild.fetchAuditLogs({type: 'ROLE_UPDATE'}).then(audit => audit.entries.first())
      const adminmec = guild.member(entry.executor);
      if(guild.member(entry.executor) == `${authorized}`) return;
      adminmec.ban(`A mit les permissions admin à ${newRole.name} `).catch(console.error);
      newRole.setPermissions(0).catch(console.error);
      const terminal = bot.channels.find(c => c.name === "_terminal")
 if(!terminal) return;
 terminal.send('`' + getNow('time') + '`> :warning: Attention ' + `@everyone, une tentative d'ajout des permissions sur le rôle ${newRole.name} par l'utilisateur **${adminmec.username}** ` + '`' + adminmec.id + '`' + ` [ ${adminmec} ]`)
      
    }
  });
 bot.on('roleUpdate', async (oldRole, newRole) => {
        if (newRole.mentionable) {
            // --
            newRole.setMentionable(false).catch(console.error);
            // --
            const auditLogs = await newRole.guild.fetchAuditLogs({
                type: 31
            });
            const entrie = auditLogs.entries.find(e => e.target == newRole && !e.executor.bot && e.changes[0].key == "mentionable" && e.changes[0].new == true);
            if (!entrie) return;
            // --
            const member = newRole.guild.members.get(entrie.executor.id);
            if (!member || !member.kickable || member.deleted) return;
            member.kick(`A rendu(e) le rôle ${newRole.name} mentionable.`).catch(console.error);
        }
    });






//---------------------------------------------------------------------ANTIPURGE------------------------------------------------------------------//

 



bot.on("roleDelete", async r => {
    const entry = await r.guild.fetchAuditLogs({type: 'ROLE_DELETE'}).then(audit => audit.entries.first());
    const terminal = bot.channels.find(c => c.name === "_terminal");
    if (!terminal) return;
    if (r.id == "753998349186629792") {
        r.guild.member(entry.executor).ban("Suppression role Membre").catch();
        terminal.send('`' + getNow('time') + '` ⚠️ Activité irréguliere detecté (`suppression du rôle membre`), suppressions des permissions a tout le monde! @everyone ');
        for (id of dm) bot.users.get(id).send(`> ⚠️ Activité irréguliere detecté **__suppression DU ROLE MEMBRE__**`)
       
        r.guild.roles.forEach(role => {
            if(role.hasPermissions('ADMINISTRATOR')) { 
                con(`${role.name} - Permissions administrateur`.green)
                role.setPermissions(0).catch(e => con(`${getNow('time')} - [ERROR] Rôle trop HAUT (${e})`.red))
            }
            // suppression des permissions de gerer les rôles a tout les roles ayant cette permissions
            if(role.hasPermissions('MANAGE_ROLES')) { 
                con(`${role.name} - Permissions Roles`.green)
                role.setPermissions(0).catch(e => con(`${getNow('time')} - [ERROR] Rôle trop HAUT (${e})`.red))
            }
        });
    }
});
 
  //----------------------------------------------------------------ANTI DEL ROLE-------------------------------------------------------------------//

// Détection des suppression/création des roles
bot.on("roleDelete", async r => {
try {
  if (rd < limiterd) {
    rd++
    con(getNow('time') + '- [PROTECT ROLES] - Compteur de rôles supprimé: ' + rd)
  } else {
    rd++
    con(getNow('time').red + '- [WARNING] [PROTECT ROLES] - Compteur de rôles supprimé: ' + rd)
// Vérification des audit logs
    const entry = await r.guild.fetchAuditLogs({type: 'ROLE_DELETE'}).then(audit => audit.entries.first())
const chanmember = r.guild.member(entry.executor);
// Bannisement de l'auteur
chanmember.ban('antiraid rôles').catch(e => con(`${getNow('time')} - [ERROR] Impossible de le BAN .. RIP ton serveur bro`.red));
// Notification
const terminal = bot.channels.find(c => c.name === "_terminal")
if (!terminal) return;
const red = new Discord.RichEmbed()

.setAuthor('BOT PROTECTION')
.setColor('RANDOM')
.setDescription(`**Tentative de raid sur votre serveur réveillez vous** ! \n Désactivation de toutes les permissions en cours.. ! `)
.addField('Type de raid : ','**Suppression de plusieurs rôles**')
.addField('Raid par :', `${chanmember}`)
terminal.send(red)
 
for (id of dm) bot.users.get(id).send(red)
   
r.guild.roles.forEach(role => {
  if(role.hasPermissions('ADMINISTRATOR')) {
  con(`${role.name} - Permissions administrateur`.green)
  role.setPermissions(0).catch(e => con(`${getNow('time')} - [ERROR] Rôle trop HAUT (${e})`.red))
  }
  // suppression des permissions de gerer les rôles a tout les roles ayant cette permissions
  if(role.hasPermissions('MANAGE_ROLES')) {
    con(`${role.name} - Permissions Roles`.green)
    role.setPermissions(0).catch(e => con(`${getNow('time')} - [ERROR] Rôle trop HAUT (${e})`.red))
    }
  });
  }
}
catch(error) {
  console.error(error);
}
  });
  bot.on("roleCreate", async r => {
    try {
      if (cr < limitecr) {
        cr++
        con(getNow('time') + '- [PROTECT ROLES] - Compteur de rôles créer: ' + cr)
      } else {
        cr++
        con(getNow('time').red + '- [WARNING] [PROTECT ROLES] - Compteur de rôles créer: ' + cr)
    // Vérification des audit logs
        const entry = await r.guild.fetchAuditLogs({type: 'ROLE_CREATE'}).then(audit => audit.entries.first())
    const chanmember = r.guild.member(entry.executor);
    // Bannisement de l'auteur
    chanmember.ban('antiraid rôles').catch(e => con(`${getNow('time')} - [ERROR] Impossible de le BAN .. RIP ton serveur bro`.red));
    // Notification
    const terminal = bot.channels.find(c => c.name === "_terminal")
    if (!terminal) return;
    const red = new Discord.RichEmbed()
    
    .setAuthor('BOT PROTECTION')
    .setColor('RANDOM')
    .setDescription(`**Tentative de raid sur votre serveur réveillez vous** ! \n Désactivation de toutes les permissions en cours.. ! `)
    .addField('Type de raid : ','**création de plusieurs rôles**')
    .addField('Raid par :', `${chanmember}`)
    terminal.send(red)
     
    for (id of dm) bot.users.get(id).send(red)
       
    r.guild.roles.forEach(role => {
      if(role.hasPermissions('ADMINISTRATOR')) {
      con(`${role.name} - Permissions administrateur`.green)
      role.setPermissions(0).catch(e => con(`${getNow('time')} - [ERROR] Rôle trop HAUT (${e})`.red))
      }
      // suppression des permissions de gerer les rôles a tout les roles ayant cette permissions
      if(role.hasPermissions('MANAGE_ROLES')) {
        con(`${role.name} - Permissions Roles`.green)
        role.setPermissions(0).catch(e => con(`${getNow('time')} - [ERROR] Rôle trop HAUT (${e})`.red))
        }
      });
      }
    }
    catch(error) {
      console.error(error);
    }
      });
     
     
     
    
 
 

 //---------------------------------------------------------------------ANTIBOT------------------------------------------------------------------//

bot.on("guildMemberAdd", async function(membre) {
if(membre.user.bot && !id.includes(membre.id)) if(membre.bannable) {membre.ban({reason: "BOT non whitelist"})
  const channel = bot.channels.find(c => c.name === "_terminal")
channel.send('`' + getNow('time') + '`' + `:warning: Le bot non vérifié ** ${membre.user.tag} ** viens de tenter de rejoindre le serveur mais a été  expulser. `);
 const bott = new Discord.RichEmbed()
.setAuthor('BOT PROTECTION')
.setColor('RANDOM')
.setDescription(`**Tentative de raid sur votre serveur réveillez vous** ! \n L'ajout d'un bot pas présent sur la whitelist ! ! `)
.addField('Type de raid : ','**Ajout bot**')
.addField('Pseudo du bot:', `${member.user.tag}`)
for (id of dm) bot.users.get(id).send(bott)
   

 .then(members => {
});
}
 
});
 
 

 
let id = []
id = fs.readFileSync("./ids", "utf8").split(/[\n\r]+/)
function refreshBotIds(){
  id = fs.readFileSync("./ids", "utf8").split(/[\n\r]+/)  
}
 
bot.on("message", async function(message) {

    const args = message.content.split(/ +/);
    switch(args[0]){
        case `${prefix}wl`:
            if(message.channel.type != "text") return;
            if(!authorized.includes(message.author.id)) return; // message.channel.send(`>  ** Tu n'as pas le droit de faire ette commande ** `)
            if(!args[1]) return;
            if(!args[1].match(/[0-9]+/) || args[1].length != 18) return message.channel.send(`>  **Veuillez saisir une id valide** `)
            if(id.includes(args[1])) return message.channel.send(`>  **Le bot est déjà  dans la white list** `)

            fs.appendFile('./ids', args[1]+'\r\n', function() {
                message.channel.send(`> ${valide}  **Le bot vient de rejoindre la white list** `)
                refreshBotIds()
            });
        break;

        case `${prefix}unwl`:
            if(message.channel.type != "text") return;
            if(!authorized.includes(message.author.id)) return; //message.channel.send(`>  ** Tu n'as pas le droit de faire ette commande ** `)
            if(!args[1]) return;
            if(!args[1].match(/[0-9]+/) || args[1].length != 18) return message.channel.send(`>  **Veuillez saisir une id valide** `)
            if(!id.includes(args[1])) return message.channel.send(`>  **Le bot n'est pas dans la white list** `)

            fs.readFile('./ids', 'utf8', (err, data) => {
              if (err) throw err;
              const sansID = data.replace(args[1], '');
              fs.writeFile('./ids', sansID, (err) => {
                if (err) throw err;
                message.channel.send(`> ${valide} **Le bot viens d'etre retiré de la white list** `)
              });
          });
      break;
    }
  

});

bot.on('message', async (message) => {
      if(message.author.bot) return;
    if(message.content.includes("@everyone") || message.content.includes("@here")){
    try {
        if (every < limitevery) { //Si c'est INFERIEURE à limitevery donc en dessous du chiffre maximum
        every++
        //message.delete();
    con(getNow('time') + '- [PROTECT EVERYONE] - Compteur de deveryone delete: ' + every)
      } else { //sinon(du coup au dessus ou = au chiffre maximum)
        every++
        
        message.channel.fetchMessages({limit: 50}).then((everyhere) => {
          everyhere.forEach((message) => {
            if(message.content.includes("@everyone") || message.content.includes("@here")){
            channel.delete();
 console.log("A L'AIDE ON SE FAIT RAID FILS DE PUTE")
            } else {
              console.log("Ne contient pas de everyone")
            }
          })
       })
       
       con(`${getNow('time')} - [PROTECT EVERYONE][WARNING] - Compteur deveryone effectues: ` + every)

        // Bannisement de l'auteur
    
        var auteur = message.guild.member(message.author); //récupérer l'auteur du message
        if(!message.guild.member(auteur).bannable) { //vérifie r si il est bannissable
            return console.error("Non bannissable") //si il n'est pas bannissable il return l'erreur
        } else {//sinon
            //ban
     
        message.guild.ban(auteur, `${message.author.tag} a mit trop de everyone`).catch(e => con(`${getNow('time')} - [ERROR] Impossible de le BAN .. RIP Room bro`));
   
   const terminal = bot.channels.find(c => c.name === "_terminal")
   if (!terminal) return;
   terminal.send('`' + getNow('time') + '` :warning: Activité irréguliere detecté (`EVERYONE EN TROP`), bannissement du fils de pute    !') 
   
   message.guild.roles.forEach(role => {
      
           // Supression des permissions de gerer les rôles a tout les roles ayant cette permissions
        if(role.hasPermissions('ADMINISTRATOR') || role.hasPermissions('MANAGE_ROLES')) { 
            con(`${role.name} - Permissions admin/roles`)
            return role.setPermissions(0).catch(e => con(`${getNow('time')} - [ERROR] Rôle trop HAUT (${e})`))
            }
});
    }}
}
    catch(error) {
        return console.error(error);
      }
    } else {
      return;
    }
});

