// put the client ID from your application in https://discord.com/developers/applications here and edit the things in the updatePresence block
const clientID = '123456789102345678'

const client = require('discord-rich-presence')(clientID);
client.updatePresence({
  details: "RPC line1 details",
  state: "RPC line2 state",
  largeImageKey: 'large image key from rich presence asset',
  largeImageText: "large image toolip",
  smallImageKey: 'small image key from rich presence asset',
  smallImageText: "small image toolip",
  instance: true,
  /**
  * Unix time converter: https://www.epochconverter.com/
  * Don't use spaces in the timestamps
  * For elapsed time, only enter startTimestamp and comment out endTimestamp
  * For time left, enter both timestamps
  **/
  startTimestamp: 1607447950,
  //endTimestamp: 
});