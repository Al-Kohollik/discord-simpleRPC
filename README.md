# Discord SimpleRPC
## By Al-Kohollik
A simple custom Discord Rich Presence Client to have any "Playing a Game" status you want. This is fully customizable and allows you to set your Game Status to be exactly the same as a real game! This client needs to be running on the same computer that is running your Discord client (like how a normal game runs while Discord is also open).

## Setup
### Required
1. Create an application on the [Discord Developer Portal](https://discord.com/developers/applications) with whatever name you want "game" in your status to be. This is not a permanant choice; you can change it whenever you want.
2. Download the correct folder for your operating system (discord-simplerpc-windows for if you use Windows, etc.), open `config.ini` with any text editor (Notepad for example), and edit `clientID` with the value of the client ID/application ID from the Discord Application created in step 1.

### Optional

3. Go to the "rich presence art assets" tab and click "add images" to add 2 images for a big image and a small icon to use in the Game status.
5. Add which ever of the OPTIONAL values in `config.ini` (`details, state, largeImageKey, smallImageKey, largeImageText, smallImageText, startTimestamp, endTimestamp`) or leave them blank and save.
`largeImageKey` should be the name of the image you added in step 2 for the main status picture, while `smallImageKey` should be the name of the image you added for the smaller icon in the corner of the main picture.

## How to Use
1. Run the `discord-simplerpc` file.
2. The Playing status will stay as long as the terminal (the window that opens when SimpleRPC is started) is open on the same computer with your running Discord Client.
3. You can edit any of the values in the `config.ini` file at any time, and the status will update after you save the new config and restart SimpleRPC (shut down the client and open a new one)
4. Shut down the client and get rid of your status by either pressing Ctrl+C while in the window or exiting like a normal window.

## Help/Contact
Create an issue or contact me on Discord @ `alkohollik`
