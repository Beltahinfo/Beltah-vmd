const { cmd, commands } = require('../command');
const os = require("os");
const { runtime } = require('../lib/functions');

cmd({
    pattern: "alive",
    alias: ["av", "runtime", "uptime"],
    desc: "Check uptime and system status",
    category: "main",
    react: "📟",
    filename: __filename
},
async (conn, mek, m, { from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply }) => {
    try {
        // Get system info
        const platform = "Heroku Platform"; // Fixed deployment platform
        const release = os.release(); // OS version
        const cpuModel = os.cpus()[0].model; // CPU info
        const totalMem = (os.totalmem() / 1024 / 1024).toFixed(2); // Total RAM in MB
        const usedMem = (process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2); // Used RAM in MB

        // Compact and attractive system status message
        const status = `┌─〔 *BELTAH-MD ALIVE* 〕─⬣
│ ⏱ *Uptime:* ${runtime(process.uptime())}
│ 📦 *RAM:* ${usedMem}MB / ${totalMem}MB
│ 🖥 *Platform:* ${platform}
│ 👑 *Owner:* Beltahinfo 
│ 🧪 *Version:* 1.6.0 BETA
└───────────────⬣`;

        // Send caption + audio
        await conn.sendMessage(from, { 
            caption: status,
            contextInfo: {
                mentionedJid: [m.sender],
                forwardingScore: 999,
                isForwarded: true,
                forwardedNewsletterMessageInfo: {
                    newsletterJid: '120363249464136503@newsletter',
                    newsletterName: 'Beltah Tech Info',
                    serverMessageId: 143
                }
            }
        }, { quoted: mek });

        // Send audio
        await conn.sendMessage(from, { 
            audio: { url: 'https://files.catbox.moe/5df4ei.m4v' },
            mimetype: 'audio/mp4',
            ptt: true 
        }, { quoted: mek });

    } catch (e) {
        console.error("Error in alive command:", e);
        reply(`🚨 *An error occurred:* ${e.message}`);
    }
});
