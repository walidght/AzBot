import DiscordJs, { Intents } from "discord.js";
import dotenv from "dotenv";
dotenv.config();

const client = new DiscordJs.Client({
  intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES],
});

client.on("ready", () => {
  console.log("AzBot-Beta Online");
});

client.login(process.env.TOKEN);
