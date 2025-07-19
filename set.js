
// change only what you are ask to change else bit won't work thanks for your understanding 
const fs = require('fs'), 
      dotenv = fs.existsSync('config.env') ? require('dotenv').config({ path: '/.env' }) : undefined,
      convertToBool = (text, fault = 'true') => text === fault;


global.sessionServer = "https://sessions-r8cn.onrender.com";
global.session = "https://session-id-8pge.onrender.com"; 
 
 
module.exports = {
SESSION_ID: process.env.SESSION_ID || "PRINCE-MD~H4sIAAAAAAAAA5VU25KiSBT8l3rVGEFuSkRHLDfvIjQK6sY+lFBAydWiEGHCf9+ge3p6HnZne9+K4kSePJl56jvIC1yhNWqB/B2UBN8hRf2RtiUCMlDrMEQEDEEAKQQywHppdvVCe4RtLd543dHmZM2wl+N8tFOL0Z1Vo0PjYpMzkhfwHIKyvqTY/w3gjrsflZmeb31yG58m3a1rtPFd0s/SIWPwcmmcHXoVPMb1/Bfw7BEhJjiPjDJGGSIwXaPWgph8jb6z3rLuJfCTjRFsuKM6s8d7zeNESlP+FKZMcnZW2e4QWHn0Nfo+OXPspnPSojHKZsEGUyPZ3mcu3czuluIKCywlYuY9Dln0Tr/CUY6CZYByimn7Zd1tc8Vv7GmXmDl1obmMeH7KbVh1Y1DRGKxGTWvVAS9GK9b/GvERW9zy2fTixYvB1r2tH3FwHNdsjAdMo9nMct1QlqyqTs+VX4lb5CMryf/RvTUVn6qBtBICW5/x+LJwREvrxDL34sc5sfAj4iwz3rtfjU3gTaHujZtXvzqIKMzYE9H266PtsbaUV1yc38ni5CzYSFl+0oe0Jr9jGWewmZwkI73QVoOYSYhGToNJOb60h8axWXQVkqIuJGM8CI8zBx5ROClpUl5bcVUeZ2WY3x/KbpstquOKXCrVZEIpbl7eJkpQuwyAzD6HgKAIV5RAiou8v+OZIYDB3UE+QfRNXbBLpe3CPRd72Fb7V1WoVUcdtGYQF4ltMdDzEsJuZyHDwugFDEFJCh9VFQoWuKIFabeoqmCEKiD/+dcQ5OhB333ru3HsEISYVPSQ12VawODD1I+f0PeLOqdOm/taf0AEyMznNaIU51HVy1jnkPgxviMthrQCcgjTCv0cEBEUAJmSGv1cWq0Iet3F9cy1xksGDEH25gcOgAym7ISRhPF0wgu8LEl/VN+aHhaW5bccUTAE6VsZLwjMVJgyU16YcEJf2N8/fxLs8QJEIU4rIAPN1IpJsFUNM+ekyXY+14xI0SIFfA70EYx35fnZ7ng7eOUuTzhlpC/HZ8VSDeYq8GTHX8uVVE8fhO7mpNu+/AMIkIFyrXTKbKdR0mGdXpZo8DovmWDjL8QTe6w2SrgvR8Uyo7WahYxlmIiNr3bbBeLsjEPPHQl6/Og4V6H+XVMXR1VcNbr90ncL0B376NdmyTWY+G5zsFfp3IvncM6PJoazbdq1M8iUG0cft0G7GhxfT2u8Wmkude1z1/k6D0fXMCDheI2Y/fo4r7lXpo5qrz2MH9h+j+zbyqQ/nir8lqbeqv4zxOht83PYG/jf1r0T7xPGPIe/YPx4S/5lH1Wk7lMxnd32pWA2VtOama03r+ZygNZdvRQdJN19KO3j26QDz+dfQ1CmkIYFyYAMYB6QAgdgCEhR95Fd5mHxm2aacljqPyZPYUWVzzXY4wxVFGYlkNl+TEGYSNx7lUWKcgGrGMhgvJ2tLRs8/wa0jT1CUwcAAA==", // Add sess Id here espwcially when deploying on panels else use app.json and .env file...
SUDO_NUMBERS: process.env.SUDO_NUMBERS || "917736321747", //Add multiple Numbers with Country Codes without (+) Separated by Comma...
ANTI_DELETE: process.env.ANTI_DELETE || "inboxonly", // can be set to inboxonly/allchats/true/false
AUTO_READ_STATUS: process.env.AUTO_READ_STATUS || "true",
AUTO_LIKE_STATUS: process.env.AUTO_LIKE_STATUS || "true",
AUTO_LIKE_EMOJIS: process.env.AUTO_LIKE_EMOJIS || "💛,❤️,💜,🤍,💙", //Input Yours Custom...Can be one Emoji or Multiple Emojis Separated by Commas
AUTO_REPLY_STATUS: process.env.AUTO_REPLY_STATUS || "false",
STATUS_REPLY_MSG: process.env.STATUS_REPLY_MSG || "✅️ Status Viewed by prince-mdx", // // Input Yours custom...
MODE: process.env.MODE || "public", // Put private or public or inbox or groups
OWNER_NUMBER: process.env.OWNER_NUMBER || "918075298454", // Only 1 owner Number Here, others Add to sudo numbers...
OWNER_NAME: process.env.OWNER_NAME || "𝐑𝐎𝐘𝐀𝐋", // Input Yours custom...(Maintain font for Flow)
PACK_AUTHOR: process.env.PACK_AUTHOR || "𝐑𝐎𝐘𝐀𝐋 𝐒𝐄𝐑", // Added // Input Yours custom...
PACK_NAME: process.env.PACK_NAME || "💙", // Added // Input Yours custom...
PREFIX: process.env.PREFIX || ".",
VERSION: process.env.VERSION || "3.0.0",
ANTILINK: process.env.ANTILINK || "true", //  Enter true to kick automatically or delete to delete without kicking or warn to warn before kicking
ANTICALL: process.env.ANTICALL || "false",
ANTIBAD: process.env.ANTIBAD || "false",
BAD_WORDS: process.env.BAD_WORDS || "fuck, pussy, anus, idiot", // Add Yours Separated by Comma(will be deleted if ANTIBAD is set to true)
ANTICALL_MSG: process.env.ANTICALL_MSG || "*_📞 📵 No Calls Allowed!_*",
AUTO_REACT: process.env.AUTO_REACT || "false",
BOT_NAME: process.env.BOT_NAME || "𝐏𝐑𝐈𝐍𝐂𝐄 𝐌𝐃𝐗", //  don't change 
BOT_PIC: process.env.BOT_PIC || "https://raw.githubusercontent.com/Mayelprince/url/main/menun.jpg", //  don't change 
AUTO_AUDIO: process.env.AUTO_AUDIO || "false",
AUTO_BIO: process.env.AUTO_BIO || "false",
AUTO_BIO_QUOTE: process.env.AUTO_BIO_QUOTE || "ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴘʀɪɴᴄᴇ ᴍᴅx ",
CHAT_BOT: process.env.CHAT_BOT || "false", // Put value to true to enablle for all chats only or inbox to ebanle in pm chats only or groups to enable in groups only else false
WELCOME: process.env.WELCOME || "false",
GOODBYE: process.env.GOODBYE || "false",    
AUTO_READ_MESSAGES: process.env.AUTO_READ_MESSAGES || "false", // Enter value to true for blueticking all messages, or commands for blueticking only commands else false
AUTO_BLOCK: process.env.AUTO_BLOCK || "333,799", // Add Multiple Country Codes Separated by Comma...
PRESENCE: process.env.PRESENCE || "online", // Choose one: typing, recording, online, null
TIME_ZONE: process.env.TIME_ZONE || "Africa/Douala", // Enter yours else leave blank if not sure
};

let file = require.resolve(__filename); 
fs.watchFile(file, () => { fs.unwatchFile(file); console.log(`Update '${__filename}'`); delete require.cache[file]; require(file); });
// That's All...
