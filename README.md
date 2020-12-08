# Discord SimpleRPC
## By Al-Kohollik
A simple custom Discord Rich Presence Client to have any "Playing a Game" status.
At least for now, Node.js is needed to be installed in order to run this.

This is a WIP and I am planning on making it easier to customize and use.

### Setup
1. Create an application on the [Discord Developer Portal](https://discord.com/developers/applications) with whatever name you want "game" in your status to be.
2. Go to the "rich presence art assets" tab and click "add images" to add 2 images for a big image and a small icon to use in the Playing status.
3. Download the source for this repo and open `index.js` with any text editor (Notepad++ for example) and edit the `const clientID` to have the value of the client ID from the Discord Application created in step 1.
4. Edit the block within "updatePresence" (`details, state, largeImageKey, smallImageKey` and optional `largeImageText, smallImageText, startTimestamp, endTimestamp`) and save.

### How to Use
1. Open a terminal (i.e. command prompt) leading to the folder that this source code is in and run `npm start`.
2. The Playing status will stay as long as the command prompt window is open.
3. Turn off the status by either pressing Ctrl+C while in the window or closing the command prompt.

### Help/Contact
Create an issue or contact me at `Al Kohollik#7268`
