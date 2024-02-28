/* All guilds */
/**
 * Create a command for all guilds
 * @param {string} clientId - The bot's client ID
 * @param {string} commandId - The command ID
 *  */
module.exports = async function deleteGuildsCommand(
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
 * Delete all commands from all guilds
 * @param {string} clientId - The bot's client ID
 */
module.exports = async function deleteAllGuildsCommands(clientId: string) {
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

/* End all guilds */
