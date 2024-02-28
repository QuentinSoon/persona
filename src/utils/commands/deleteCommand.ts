const { REST, Routes } = require("@discordjs/rest");
const api = new REST({ version: "10" }).setToken(process.env.TOKEN as string);

/**
 * Delete a command from a guild
 * @param {string} clientId - The bot's client ID
 * @param {string} guildId - The guild ID
 * @param {string} commandId - The command ID
 *  */
module.exports = async function deleteCommandForGuild(
  clientId: string,
  guildId: string,
  commandId: string
) {
  (async () => {
    try {
      await api
        .delete(Routes.applicationGuildCommand(clientId, guildId, commandId))
        .then(() =>
          console.log(
            `Successfully deleted command ${commandId} (Guild: ${guildId})`
          )
        )
        .catch(console.error);
    } catch (error) {
      console.error(error);
    }
  })();
};

/**
 * Delete a command from all guilds
 * @param {string} clientId - The bot's client ID
 * @param {string} commandId - The command ID
 *  */
module.exports = async function deleteCommandForAllGuilds(
  clientId: string,
  commandId: string
) {
  (async () => {
    try {
      await api
        .delete(Routes.applicationCommand(clientId, commandId))
        .then(() =>
          console.log(`Successfully deleted command ${commandId} (ALL Guilds)`)
        )
        .catch(console.error);
    } catch (error) {
      console.error(error);
    }
  })();
};

/**
 * Delete all commands from a guild
 * @param {string} clientId - The bot's client ID
 * @param {string} guildId - The guild ID
 *  */
module.exports = async function deleteAllCommandsForGuild(
  clientId: string,
  guildId: string
) {
  (async () => {
    try {
      await api
        .put(Routes.applicationGuildCommands(clientId, guildId), { body: [] })
        .then(() =>
          console.log(`Successfully deleted all commands (Guild: ${guildId})`)
        )
        .catch(console.error);
    } catch (error) {
      console.error(error);
    }
  })();
};

/**
 * Delete all commands from all guilds
 * @param {string} clientId - The bot's client ID
 *  */
module.exports = async function deleteAllCommandsForAllGuilds(
  clientId: string
) {
  (async () => {
    try {
      await api
        .put(Routes.applicationCommands(clientId), { body: [] })
        .then(() =>
          console.log(`Successfully deleted all commands (ALL Guilds)`)
        )
        .catch(console.error);
    } catch (error) {
      console.error(error);
    }
  })();
};
