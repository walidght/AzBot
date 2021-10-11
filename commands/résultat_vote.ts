import {
  DiscordAPIError,
  Emoji,
  Message,
  MessageEmbed,
  User,
} from "discord.js";
import DiscordJs from "discord.js";
import { ICommand } from "wokcommands";

import dotenv from "dotenv";
import { Channel } from "discord.js";
dotenv.config();

export default {
  category: "Vote",
  description: "Cloturer un vote et retourner le résultat",
  permissions: ["ADMINISTRATOR"],
  slash: true,
  testOnly: true,
  options: [
    {
      name: "id_vote",
      description: "l'identifiant du message de vote",
      required: true,
      type: 3,
    },
  ],

  callback: async ({ interaction, channel }) => {
    let myMessage = await channel.messages.fetch("896411302992441395");
    let myReactions = myMessage.reactions.cache;

    let myUsers = await Promise.all(
      myReactions.map(async (reactions) =>
        (await reactions.users.fetch()).map((user) => user.username)
      )
    );

    let myEmojis = myReactions.map((reaction) => reaction.emoji.name);

    let finalArray = myEmojis.map((e, i) => {
      return { reaction: e, users: myUsers[i].sort() };
    });

    console.log(finalArray);
    interaction.reply("test done");
  },
} as ICommand;
