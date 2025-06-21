const config = require('../config')
const { cmd, commands } = require('../command');
const os = require("os")
const {runtime} = require('../lib/functions')
const axios = require('axios')
// Constants
const DEFAULT_PARTICIPANT = '0@s.whatsapp.net';
const DEFAULT_REMOTE_JID = 'status@broadcast';
const DEFAULT_THUMBNAIL_URL = 'https://telegra.ph/file/dcce2ddee6cc7597c859a.jpg';
const DEFAULT_TITLE = "BELTAH-MD MENU";
const DEFAULT_BODY = "Your AI Assistant Chuddy Buddy";

// Default message configuration
const fgg = {
  key: {
    fromMe: false,
    participant: DEFAULT_PARTICIPANT,
    remoteJid: DEFAULT_REMOTE_JID,
  },
  message: {
    contactMessage: {
      displayName: `Beltah Tech Info`,
      vcard: `BEGIN:VCARD\nVERSION:3.0\nN:;BELTAH MD;;;\nFN:BELTAH MD\nitem1.TEL;waid=${DEFAULT_PARTICIPANT.split('@')[0]}:${DEFAULT_PARTICIPANT.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD`,
    },
  },
};

/**
 * Construct contextInfo object for messages.
 * @param {string} title - Title for the external ad reply.
 * @param {string} userJid - User JID to mention.
 * @param {string} thumbnailUrl - Thumbnail URL.
 * @returns {object} - ContextInfo object.
 */
function getContextInfo(title = DEFAULT_TITLE, userJid = DEFAULT_PARTICIPANT, thumbnailUrl = DEFAULT_THUMBNAIL_URL) {
  try {
    return {
      mentionedJid: [userJid],
      forwardingScore: 999,
      isForwarded: true,
      forwardedNewsletterMessageInfo: {
         newsletterJid: "120363249464136503@newsletter",
         newsletterName: "🤖 𝐁𝐄𝐋𝐓𝐀𝐇 𝐀𝐈 𝐂𝐇𝐀𝐓𝐁𝐎𝐓 🤖",
         serverMessageId: Math.floor(100000 + Math.random() * 900000),
     },
      externalAdReply: {
        showAdAttribution: true,
        title,
        body: DEFAULT_BODY,
        thumbnailUrl,
        sourceUrl: settings.GURL || '',
      },
    };
  } catch (error) {
    console.error(`Error in getContextInfo: ${error.message}`);
    return {}; // Prevent breaking on error
  }
}

cmd({
    pattern: "menu",
    alias: ["allmenu","popkid"],use: '.menu',
    desc: "menu the bot",
    category: "menu",
    react: "📱",
    filename: __filename
}, 
async (conn, mek, m, { from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply }) => {
    try {
        let dec = `
🌟━━━ *${config.BOT_NAME}* ━━━🌟
╭–––––––––––––––––––––––––
│⚙️ *ʀᴜɴᴛɪᴍᴇ:* ${runtime(process.uptime())}
│🕹️ *ᴍᴏᴅᴇ:* *${config.MODE}*
│🎯 *ᴘʀᴇғɪx:* *${config.PREFIX}*
│💡 *ʀᴀᴍ ᴜsᴇ:* ${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)} GB / ${Math.round(require('os').totalmem / 1024 / 1024)} GB
│🚀 *ᴠᴇʀsɪᴏɴ:* *1.0.0*
╰–––––––––––––––––––––––––
> © 𝙱𝚎𝚕𝚝𝚊𝚑 𝚃𝚎𝚌𝚑 | 𝙽𝚎𝚝 𝚄𝚙𝚍𝚊𝚝𝚎𝚜🎮

---
📚 *DOWNLOAD COMMANDS*
---
* ⚡ .fb
* ⚡ .insta
* ⚡ .video
* ⚡ .gdrive
* ⚡ .twitter
* ⚡ .tt
* ⚡ .mediafire
* ⚡ .play
* ⚡ .song
* ⚡ .video
* ⚡ .spotify
* ⚡ .video4
* ⚡ .img
* ⚡ .lyrics
* ⚡ .apk
* ⚡ .baiscope
* ⚡ .ginisisila

---
🔍 *SEARCH COMMANDS*
---
* 🔎 .yts
* 🔎 .yta
* 🔎 .movie
* 🔎 .romance
* 🔎 .motivate
* 🔎 .aivoice
* 🔎 .google
* 🔎 .weather
* 🔎 .sticksearch

---
🎨 *LOGO COMMANDS*
---
* 🖌️ .3dcomic
* 🖌️ .dragonball
* 🖌️ .deadpool
* 🖌️ .blackpink
* 🖌️ .neonlight
* 🖌️ .cat
* 🖌️ .sadgirl
* 🖌️ .pornhub
* 🖌️ .naruto
* 🖌️ .thor
* 🖌️ .america
* 🖌️ .eraser
* 🖌️ .3dpaper
* 🖌️ .futuristic
* 🖌️ .clouds
* 🖌️ .sans
* 🖌️ .galaxy
* 🖌️ .leaf
* 🖌️ .sunset
* 🖌️ .nigeria
* 🖌️ .devilwings
* 🖌️ .hacker
* 🖌️ .boom
* 🖌️ .luxury
* 🖌️ .zodiac
* 🖌️ .angelwings
* 🖌️ .bulb
* 🖌️ .tattoo
* 🖌️ .castle
* 🖌️ .frozen
* 🖌️ .paint
* 🖌️ .birthday
* 🖌️ .typography
* 🖌️ .bear
* 🖌️ .valorant

---
🧠 *AI COMMANDS*
---
* 🤖 .gpt
* 🤖 .ai
* 🤖 .imagescan
* 🤖 .imagine

---
👑 *OWNER COMMANDS*
---
* ⚙️ .updatecmd
* ⚙️ .settings
* ⚙️ .owner
* ⚙️ .repo
* ⚙️ .system
* ⚙️ .status
* ⚙️ .about
* ⚙️ .block
* ⚙️ .unblock
* ⚙️ .shutdown
* ⚙️ .broadcast
* ⚙️ .jid
* ⚙️ .gjid
* ⚙️ .pair
* ⚙️ .save
* ⚙️ .popkid
* ⚙️ .restart

---
👥 *GROUP COMMANDS*
---
* 👨‍👩‍👧‍👦 .remove
* 👨‍👩‍👧‍👦 .del
* 👨‍👩‍👧‍👦 .add
* 👨‍👩‍👧‍👦 .kick
* 👨‍👩‍👧‍👦 .kickall
* 👨‍👩‍👧‍👦 .promote
* 👨‍👩‍👧‍👦 .demote
* 👨‍👩‍👧‍👦 .tagall
* 👨‍👩‍👧‍👦 .invite
* 👨‍👩‍👧‍👦 .revoke
* 👨‍👩‍👧‍👦 .poll
* 👨‍👩‍👧‍👦 .randomship
* 👨‍👩‍👧‍👦 .newgc
* 👨‍👩‍👧‍👦 .mute
* 👨‍👩‍👧‍👦 .unmute
* 👨‍👩‍👧‍👦 .lockgc
* 👨‍👩‍👧‍👦 .unlockgc
* 👨‍👩‍👧‍👦 .leave
* 👨‍👩‍👧‍👦 .gname
* 👨‍👩‍👧‍👦 .makeadmin
* 👨‍👩‍👧‍👦 .tagadmins
* 👨‍👩‍👧‍👦 .gdesc
* 👨‍👩‍👧‍👦 .join
* 👨‍👩‍👧‍👦 .hidetag
* 👨‍👩‍👧‍👦 .ginfo

---
ℹ️ *INFO COMMANDS*
---
* 💡 .about
* 💡 .alive
* 💡 .request
* 💡 .botinfo
* 💡 .status
* 💡 .ping
* 💡 .system
* 💡 .uptime

---
🤖 *BOT SETTINGS*
---
* ⚙️ .repo
* ⚙️ .popkid
* ⚙️ .menu
* ⚙️ .update
* ⚙️ .mode
* ⚙️ .auto-typing
* ⚙️ .alwaysonline
* ⚙️ .auto-recording
* ⚙️ .autoreadstatus
* ⚙️ .antibad
* ⚙️ .autosticker
* ⚙️ .autoreply
* ⚙️ .autoreact
* ⚙️ .antilink
* ⚙️ .autoread

---
🔄 *CONVERTER COMMANDS*
---
* 🛠️ .sticker
* 🛠️ .take
* 🛠️ .trt
* 🛠️ .tts
* 🛠️ .fancy
* 🛠️ .url
* 🛠️ .age
* 🛠️ .convert
* 🛠️ .tiny
* 🛠️ .movie
* 🛠️ .terminate
* 🛠️ .family
* 🛠️ .trt
* 🛠️ .tts

---
🎲 *RANDOM COMMANDS*
---
* 🍀 .anime
* 🍀 .couplepp
* 🍀 .loli
* 🍀 .waifu
* 🍀 .cosplay
* 🍀 .neko
* 🍀 .randomanime

---
🖼️ *WALLPAPERS COMMANDS*
---
* 🏞️ .img
* 🏞️ .logo
* 🏞️ .ss

---
✨ *OTHER COMMANDS*
---
* 🌐 .trt
* 🌐 .joke
* 🌐 .fact
* 🌐 .github
* 🌐 .gpass
* 🌐 .hack
* 🌐 .vv
* 🌐 .vv2
* 🌐 .spam
* 🌐 .vcard
* 🌐 .srepo
* 🌐 .channelinfo
* 🌐 .system
* 🌐 .rank
* 🌐 .timezone
* 🌐 .define
* 🌐 .dailyfact

> Powered by Beltah Tech🎲`;
        
    const sendername = m.sender ;
        await conn.sendMessage(from, {
             text: desc,
             contextInfo: getContextInfo("BELTAH-MD MAIN MENU",sendername , 'https://telegra.ph/file/dcce2ddee6cc7597c859a.jpg')
         }, { quoted: fgg });

       /* await conn.sendMessage(
            from,
            {
                image: { url: `https://files.catbox.moe/e6rhto.jpg` },
                caption: dec,
                contextInfo: {
                    mentionedJid: [m.sender],
                    forwardingScore: 999,
                    isForwarded: true,
                    forwardedNewsletterMessageInfo: {
                        newsletterJid: '120363290715861418@newsletter',
                        newsletterName: 'PᴏᴘᴋɪᴅXᴛᴇᴄʜ',
                        serverMessageId: 143
                    }
                }
            },
            { quoted: mek }
        );*/

        // Send audio
        await conn.sendMessage(from, {
            audio: { url: 'https://files.catbox.moe/kxdej4.m4a' },
            mimetype: 'audio/mp4',
            ptt: true
        }, { quoted: mek });
        
    } catch (e) {
        console.log(e);
        reply(`${e}`);
    }
});
