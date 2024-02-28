require("dotenv").config();
import { Client, Events, IntentsBitField } from "discord.js";

// import { createCommandsForGuild } from "./utils/commands/createCommand";

const client = new Client({
  intents: [
    IntentsBitField.Flags.Guilds,
    IntentsBitField.Flags.GuildMembers,
    IntentsBitField.Flags.GuildMessages,
    IntentsBitField.Flags.MessageContent,
  ],
});

client.once(Events.ClientReady, async () => {
  console.log(`✅ Bot (${client.user?.tag}) connected ! \n`);
  console.log("=> Connection to servers :");
  for (const guild of client.guilds.cache) {
    console.log(
      `🏰 ${guild[1].name} (${guild[1].id}) (${guild[1].memberCount - 1} users)`
    );
  }
  // createCommandsForGuild(
  //   process.env.CLIENT_ID as string,
  //   process.env.GUILD_ID as string,
  //   [
  //     {
  //       name: "ping",
  //       description: "Replies with Pong!",
  //     },
  //   ]
  // );
});

// client.on("interactionCreate", async (interaction) => {
//   if (!interaction.isCommand()) {
//     return;
//   }
//   const { commandName } = interaction;
//   if (commands[commandName as keyof typeof commands]) {
//     commands[commandName as keyof typeof commands].execute(interaction);
//   }
// });

client.login(process.env.TOKEN);
