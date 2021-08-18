const fs = require('fs');
const ini = require('ini');

const config = ini.parse(fs.readFileSync('./config.ini', 'utf-8'));
const client = require('discord-rich-presence')(config.clientID);


/** config options from config.ini **/
var Details = undefined;
var State = undefined;
var LargeImageKey = undefined;
var LargeImageText = undefined;
var SmallImageKey = undefined;
var SmallImageText = undefined;
var StartTimestamp = undefined;
var EndTimestamp = undefined;

// Details
if (config.Main.details != "") {  Details = config.Main.details;  }
// State
if (config.Main.state != "") {  State = config.Main.state;  }
// LargeImageKey
if (config.Assets.largeImageKey != "") {  LargeImageKey = config.Assets.largeImageKey;  }
// LargeImageKey
if (config.Assets.largeImageText != "") {  LargeImageText = config.Assets.largeImageText;  }
// SmallImageKey
if (config.Assets.smallImageKey != "") {  SmallImageKey = config.Assets.smallImageKey;  }
// SmallImageText
if (config.Assets.smallImageText != "") {  SmallImageText = config.Assets.smallImageText;  }
// StartTimestamp
if (config.Timestamps.startTimestamp != "") {  StartTimestamp = parseInt(config.Timestamps.startTimestamp);  }
// EndTimestamp
if (config.Timestamps.endTimestamp != "") {  EndTimestamp = parseInt(config.Timestamps.endTimestamp);  }


/** Send all config options into Presence object **/
client.updatePresence({
  details: Details,
  state: State,
  largeImageKey: LargeImageKey,
  largeImageText: LargeImageText,
  smallImageKey: SmallImageKey,
  smallImageText: SmallImageText,
  startTimestamp: StartTimestamp,
  endTimestamp: EndTimestamp
});


// Console messages after client starts up
var figlet = require('figlet');

figlet('SimpleRPC', function(err, msg) {
  if (err) {
    console.log('(Should only be a text error) Something went wrong with figlet...');
    console.dir(err);
    return;
  }
  console.log(msg);
  console.log("has started up. Check your Discord status!");
  console.log("Don't forget to check the README for customization instructions.");
});