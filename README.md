# Discord SimpleRPC
## By Al-Kohollik
A simple custom Discord Rich Presence Client to have any "Playing a Game" status.
At least for now, [Node.js](https://nodejs.org/en/) is needed to be installed in order to run this.

This is a WIP and I am planning on making it easier to customize and use.

I'm just making this for fun, but I would really like to know what any of you think so please don't hesitate to DM me on Discord about anything or join me [here](https://discord.gg/ejMgVqFd) (just a random community server I'm active and mod in) :)


### Setup
1. Create an application on the [Discord Developer Portal](https://discord.com/developers/applications) with whatever name you want "game" in your status to be.
2. Go to the "rich presence art assets" tab and click "add images" to add 2 images for a big image and a small icon to use in the Playing status.
3. Download this repo, open `config.ini` with any text editor (Notepad++ for example) and edit `clientID` with the value of the client ID from the Discord Application created in step 1.
4. Add in the rest of the values in `config.ini` (`details, state, largeImageKey, smallImageKey` and optional `largeImageText, smallImageText, startTimestamp, endTimestamp`) and save. `largeImageKey` should be the name of the image you added in step 2 for the main status picture, while `smallImageKey` should be the name of the image you added for the smaller icon in the corner of the main picture.
5. Run the `install.bat` file.
### How to Use
1. Run the `start.bat` file.
2. The Playing status will stay as long as the command prompt window is open.
3. Turn off the status by either pressing Ctrl+C while in the window or closing the command prompt.

### Help/Contact
Create an issue or contact me on Discord at `Al Kohollik#7268`