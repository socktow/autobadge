const whitehall = require("../../index.js");
const config = require("../../config.json");
const ms = require("ms");

whitehall.once('ready', async () => {
  console.log(`[whitehall] ${whitehall.user.tag} - ${whitehall.guilds.cache.size} servers and ${whitehall.users.cache.size} uses.`);

  whitehall.user.setActivity(`-help | /help | -languageset En-US | -languageset vi-VN `)
});