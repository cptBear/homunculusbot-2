const Discord = require("discord.js");
//call Discord lib
const homunculus = new Discord.Client();
//this is a homunculus, son
const config = require("./config.json");
//sets the prefix

homunculus.on("ready", () => {
  console.log("I am ready!");
});
//lets the console know the Homunculus is awake

homunculus.on("message", (message) => {
  // Exit and stop if it's not there
  if (!message.content.startsWith(config.prefix)) return;
});
  //bulk message handler
homunculus.on("message", (message) => {
    if (!message.content.startsWith(config.prefix) || message.author.bot) return;
  //botception guard
  if (message.content.startsWith(config.prefix + "Good Homunculus")) {
    message.channel.send("SQUEAL! It thanks the kind master! We really tries!");
  }
  //giving me the ability to make rudimentary life was a mistake
});
homunculus.login(config.token);
