import discord
import asyncio
from discord.ext import commands

TOKEN = 'MTIyNTcwMzE3NTI3ODAzNTAxNA.GOALxr.0bkDEUBrmggSNDxtJShGe1GyKqctWzUIqXrfvw'

intents = discord.Intents.default()
intents.typing = False
intents.presences = False

client = commands.Bot(command_prefix='!', intents=intents)

async def send_message():
    channel = client.get_channel(1223285789228797955)  # ここにチャンネルIDを入力
    await channel.send("メッセージを送信します")

@client.event
async def on_ready():
    print(f'Logged in as {client.user}')
    
    # 定期的にメッセージを送信する
    while True:
        await send_message()
        await asyncio.sleep(10)  # 送信間隔を設定 (60秒ごとにメッセージを送信)

client.run(TOKEN)

