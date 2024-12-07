from googletrans import Translator
import discord

TOKEN = "TOKEN HERE"

translator = Translator()

def detect_and_translate(text):
    detection = translator.detect(text)
    lang = detection.lang
    translated_text = translator.translate(text, src=lang, dest='en').text
    return lang, translated_text

def translate_to_target(text, target_language):
    translation = translator.translate(text, dest=target_language)
    return translation.text

client = discord.Client(intents=discord.Intents.all())

@client.event
async def on_ready():
    print(f"Bot is ready! [{client.user.name}]")

@client.event
async def on_message(message):  
    if message.author.bot or message.attachments:
        return

    if message.reference:
        referenced_message = await message.channel.fetch_message(message.reference.message_id)
        if referenced_message.author == client.user:
            
            lang = referenced_message.content.split('\n')[-1].split('**')[1].lower()
            if lang == 'en': return

            await message.delete()  
            origsender = referenced_message.content.split('\n')[0].split(' ')[0]
            translated_text = translate_to_target(message.content, lang)
            await message.channel.send(
                f"{origsender}, {message.author.mention} said: `{translated_text}`\n\n-# Translated from **EN**"
            )
            return
    
    lang, translated_text = detect_and_translate(message.content)
    if lang.lower() != 'en':
        await message.delete()
        await message.channel.send(
            f"{message.author.mention} said: `{translated_text}`\n\nReply to this message in English to automatically translate your reply.\n-# Translated from **{lang.upper()}**"
        )

client.run(TOKEN)