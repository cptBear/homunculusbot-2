const Discord = require("discord.js");
//call Discord lib
const homunculus = new Discord.Client();
//this is a homunculus, son
const prefix = "?";
//sets the prefix

homunculus.on("ready", () => {
  console.log("I am ready!");
});
//lets the console know the Homunculus is awake

homunculus.on("message", (message) => {
  // Exit and stop if it's not there
  if (!message.content.startsWith(prefix)) return;

  //bulk toys
homunculus.on("message", (message) => {
  if (message.content.startsWith(prefix + "Good Homunculus")) {
    message.channel.send("SQUEAL! It thanks the kind master! We really tries!");
  }
  //giving me the ability to make rudimentary life was a mistake
});
homunculus.login("NDI4NTQwMTcxNjUxMTIxMTUz.DZ0krQ.n3zuvHa1LY30RoUxlI5ePVhemxE");
