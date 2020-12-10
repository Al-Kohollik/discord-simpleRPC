const fs = require('fs');
const ini = require('ini');

const config = ini.parse(fs.readFileSync('./config.ini', 'utf-8'));
const client = require('discord-rich-presence')(config.clientID);

if (config.Timestamps.startTimestamp == ''){

  client.updatePresence({
    details: config.Main.details,
    state: config.Main.state,
    largeImageKey: config.Assets.largeImageKey,
    largeImageText: config.Assets.largeImageText,
    smallImageKey: config.Assets.smallImageKey,
    smallImageText: config.Assets.smallImageText,
    endTimestamp: parseInt(config.Timestamps.endTimestamp)
  });

} else if (config.Timestamps.endTimestamp == ''){

  client.updatePresence({
    details: config.Main.details,
    state: config.Main.state,
    largeImageKey: config.Assets.largeImageKey,
    largeImageText: config.Assets.largeImageText,
    smallImageKey: config.Assets.smallImageKey,
    smallImageText: config.Assets.smallImageText,
    startTimestamp: parseInt(config.Timestamps.startTimestamp)
  });

} else {
  
  client.updatePresence({
    details: config.Main.details,
    state: config.Main.state,
    largeImageKey: config.Assets.largeImageKey,
    largeImageText: config.Assets.largeImageText,
    smallImageKey: config.Assets.smallImageKey,
    smallImageText: config.Assets.smallImageText,
    startTimestamp: parseInt(config.Timestamps.startTimestamp),
    endTimestamp: parseInt(config.Timestamps.endTimestamp)
  });

}
