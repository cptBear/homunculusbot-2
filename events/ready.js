exports.run = (homunculus) => {
  console.log(`Ready to serve in ${homunculus.channels.size} channels on ${homunculus.guilds.size} servers, for a total of ${homunculus.users.size} users.`);
}
