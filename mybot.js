const Discord = require("discord.js");
const client = new Discord.Client();


client.on("ready", () => {
  console.log("I am ready!");
  message.channel.send("Your bidding, master?");
});
client.on("message", (message) => {
  if (message.content.startsWith("Good Homunculus!")) {
    message.channel.send("SQUEAL! Thankyou kind master! We tries.");
  }
});

client.login("NDI4NTQwMTcxNjUxMTIxMTUz.DZ0krQ.n3zuvHa1LY30RoUxlI5ePVhemxE");
