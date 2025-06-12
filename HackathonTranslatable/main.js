const { Client } = require("discord.js");
const { execSync } = require("child_process");
const emojiRegex = require('emoji-regex');

const Token = "";

function decodeBase64(encodedText) { 
    const decodedBuffer = Buffer.from(encodedText, 'base64');
    return decodedBuffer.toString('utf-8');
}

const urlRegex = /(?:https?:\/\/)?(?:www\.)?[^\s]+\.[^\s]+/g;

function ContainsEMOJI(text) {
    if (emojiRegex().test(text)) {
        return true;
    }
}

function isURL(text) {
    const containsURL = text.match(urlRegex);
    if (containsURL) {
        return true;
    }
}

function replytranslate(text, lang) {
    try {
        const result = execSync(`python replytranslate.py "${text}" "${lang}"`).toString().trim();
        return result;
    } catch (error) {
        console.error('Error executing Python script:', error);
        return false;
    }
}

function detectLanguage(text) {
    try {
        const result = execSync(`python translate.py "${text}"`).toString().trim().split(' ');
        const lang = result[0];
        const translatedText = result.slice(1).join(' '); 
        return [lang, translatedText]
    } catch (error) {
        console.error('Error executing Python script:', error);
        return false;
    }
}

const client = new Client({
    intents: [
        "GUILDS",
        "GUILD_MESSAGES",
        "GUILD_MEMBERS",
        "GUILD_MESSAGE_CONTENT",
        "GUILD_MESSAGE_REACTIONS",
    ]
});

client.login(Token);

console.log("Loading Translatable (HACKATHON)..")

client.on("ready", () => {
    console.log("Bot is ready\n["+ client.user.tag + "]");
});

client.on("message", (message) => {

    if (ContainsEMOJI(message.content)) return; 
    if (isURL(message.content)) return;
    if (message.attachments.size > 0) return; 
    if (message.author.bot) return;

    isEnglish = false;
    const msg = detectLanguage(message.content);
    Language = msg[0].toUpperCase();
    translatedmsg = msg[1];
    if (Language == "EN") { 
        isEnglish = true;
    }
    if (!isEnglish) {
        if (isNaN(message.content)) {
            message.delete();
            message.channel.send(`TR/${message.author.toString()} said: `+ translatedmsg + ` |` + Language + "|\n\n" + "Reply to this message in english to automatically reply!"); 
        }
    }
});

client.on("message", async (message) => {

    if (ContainsEMOJI(message.content)) return; 
    if (message.attachments.size > 0) return; 
    if (isURL(message.content)) return; 
    if (message.author.bot) return;

    if (message.reference && message.reference.messageID) {
        const repliedMessageID = message.reference.messageID;
        const repliedMessage = await message.channel.messages.fetch(repliedMessageID); 
        const rpl = repliedMessage.content.split('/');
        if (rpl[0] != "TR") { 
            return;
        }
        const msg = repliedMessage.content.split('|');
        const Language = msg[1]; 
        translatedbfr = replytranslate(message.content, Language);
        translatedmsg = decodeBase64(translatedbfr);
        if (translatedmsg) { 
            message.delete(); 
            oringinaluser = rpl[1].split(' ')[0]; 
            message.channel.send(`${oringinaluser}, ${message.author.toString()} replied: ` + translatedmsg)
        }
    }
});
