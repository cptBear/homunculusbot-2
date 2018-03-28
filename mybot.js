const Discord = require("discord.js");
const homunculus = new Discord.Client();


homunculus.on("ready", () => {
  console.log("I am ready!");
});

homunculus.on("message", (message) => {
  if (message.content.startsWith("Good Homunculus")) {
    message.channel.send("SQUEAL! It thanks the kind master! We really tries!");
  }
});
homunculus.login("NDI4NTQwMTcxNjUxMTIxMTUz.DZ0krQ.n3zuvHa1LY30RoUxlI5ePVhemxE");
