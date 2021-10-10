import { DiscordAPIError, Emoji, Message, MessageEmbed } from "discord.js";
import { ICommand } from "wokcommands";

export default {
  category: "Vote",
  description: "Créer un vote",
  permissions: ["ADMINISTRATOR"],
  slash: true,
  testOnly: true,
  options: [
    {
      name: "question",
      description: "Sujet du sondage",
      required: true,
      type: 3,
    },
    {
      name: "choix_multiples",
      description: "Si oui ou non les choix multiples sont authorisé",
      required: true,
      choices: [
        {
          name: "oui",
          value: "true",
        },
        {
          name: "non",
          value: "false",
        },
      ],
      type: 3,
    },
    {
      name: "choix1",
      description: "choix #1",
      required: true,
      type: 3,
    },
    {
      name: "choix2",
      description: "choix #2",
      required: true,
      type: 3,
    },
    {
      name: "choix3",
      description: "choix #3",
      required: false,
      type: 3,
    },
    {
      name: "choix4",
      description: "choix #4",
      required: false,
      type: 3,
    },
    {
      name: "choix5",
      description: "choix #5",
      required: false,
      type: 3,
    },
    {
      name: "choix6",
      description: "choix #6",
      required: false,
      type: 3,
    },
    {
      name: "choix7",
      description: "choix #7",
      required: false,
      type: 3,
    },
    {
      name: "choix8",
      description: "choix #8",
      required: false,
      type: 3,
    },
    {
      name: "choix9",
      description: "choix #9",
      required: false,
      type: 3,
    },
    {
      name: "choix10",
      description: "choix #10",
      required: false,
      type: 3,
    },
  ],

  callback: ({ interaction, guild }) => {
    let myFields = [
      {
        name: "Question",
        value: String(interaction.options.data[0].value),
      },
    ];

    let choiceValue = `:regional_indicator_a: ${String(
      interaction.options.data[2].value
    )}\n:regional_indicator_b: ${String(interaction.options.data[3].value)}`;

    for (let i = 4; i < interaction.options.data.length; i++) {
      choiceValue +=
        `\n:regional_indicator_${String.fromCharCode(95 + i)}: ` +
        String(interaction.options.data[i].value);
    }

    myFields.push({
      name: "Choix",
      value: choiceValue,
    });

    myFields.push({
      name: "\u200b",
      value:
        interaction.options.data[1].value === "true"
          ? ":white_check_mark: choix multiples"
          : ":no_entry: pas de choix multiples",
    });

    const embed = new MessageEmbed().setColor(15150381).addFields(myFields);
    const myEmojiList = [
      "🇦",
      "🇧",
      "🇨",
      "🇩",
      "🇪",
      "🇫",
      "🇬",
      "🇭",
      "🇮",
      "🇯",
      "🇰",
      "🇱",
      "🇲",
      "🇳",
      "🇴",
      "🇵",
      "🇶",
      "🇷",
      "🇸",
      "🇹",
      "🇺",
      "🇻",
      "🇼",
      "🇽",
      "🇾",
      "🇿",
    ];

    interaction.channel?.send({ embeds: [embed] }).then((sentMessage) => {
      for (let i = 0; i < interaction.options.data.length - 2; i++) {
        sentMessage.react(myEmojiList[i]);
      }
    });

    interaction.reply({
      content: "Votre vote a bien été créé",
      ephemeral: true,
    });
  },
} as ICommand;
