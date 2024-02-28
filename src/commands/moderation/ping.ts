import { Client, CommandInteraction, SlashCommandBuilder } from "discord.js";

export default {
  data: new SlashCommandBuilder().setName("ping").setDescription("Pong!"),
  callback: (client: Client, interaction: CommandInteraction) => {
    interaction.reply(`Pong! ${client.ws.ping}ms`);
  },
};
