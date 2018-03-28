const Discord = require("discord.js");
const homunculus = new Discord.Client();
const fs = require("fs");
const sql = require("sqlite");
sql.open("./score.sqlite");
const config = require("./config.json");

// This loop reads the /events/ folder and attaches each event file to the appropriate event.
fs.readdir("./events/", (err, files) => {
  if (err) return console.error(err);
  files.forEach(file => {
    let eventFunction = require(`./events/${file}`);
    let eventName = file.split(".")[0];
    // super-secret recipe to call events with all their proper arguments *after* the `client` var.
    homunculus.on(eventName, (...args) => eventFunction.run(homunculus, ...args));
  });
});
//botception and prefix
homunculus.on("message", message => {
  if (message.author.bot) return;
  if(message.content.indexOf(config.prefix) !== 0) return;

  // This is the best way to define args. Trust me.
  const args = message.content.slice(config.prefix.length).trim().split(/ +/g);
  const command = args.shift().toLowerCase();

  // The list of if/else is replaced with those simple 2 lines:
  try {
    let commandFile = require(`./commands/${command}.js`);
    commandFile.run(homunculus, message, args);
  } catch (err) {
    console.error(err);
  }
});

//nasty tech tree table
sql.get(`SELECT * FROM discoveries WHERE userId ="${message.author.id}"`).then(row => {
  if (!row) {
    sql.run("INSERT INTO disoveries (userId, d1, d2, d3, d4, d5, d6, d7, d8, d9, d10) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)", [message.author.id, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
  ) => {
    sql.run("CREATE TABLE IF NOT EXISTS stats (userId TEXT, d1 INTEGER, d2 INTEGER , d3 INTEGER, d3 INTEGER, d4 INTEGER, d5 INTEGER, d6 INTEGER, d7 INTEGER, d8 INTEGER, d9 INTEGER, d10 INTEGER)").then(() => {
    sql.run("INSERT INTO stats (userId, d1, d2, d3, d4, d5, d6, d7, d8, d9, d10) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)", [message.author.id, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
  });
  //nasty stat table
sql.get(`SELECT * FROM stats WHERE userId ="${message.author.id}"`).then(row => {
  if (!row) {
    sql.run("INSERT INTO stats (userId, health, sanity, logic, conviction, fame, infamy, goldpieces, lifestyle) VALUES (? ?, ?, ?, ?, ?, ?, ?, ?)", [message.author.id, 10, 10, 1, 1, 1, 1, 20, 2]);
  ) => {
    sql.run("CREATE TABLE IF NOT EXISTS stats (userId TEXT, health INTEGER, sanity INTEGER , logic INTEGER, conviction INTEGER, fame INTEGER, infamy INTEGER, goldpieces INTEGER, lifestyle INTEGER,)").then(() => {
    sql.run("INSERT INTO stats (userId, health, sanity, logic, conviction, fame, infamy, goldpieces, lifestyle) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)", [message.author.id, 10, 10, 1, 1, 1, 1, 20, 2]);
  });
});
});

//nasty token table
sql.get(`SELECT * FROM tokens WHERE userId ="${message.author.id}"`).then(row => {
    if (!row) {
      sql.run("INSERT INTO tokens (userId, idle, lessons, bursary, alchemy, apparatus,  fire, earth, water, wind, mercury, salt, sulfur, lead, tin, iron, gold, copper, silver, antimony, arsenic, bismuth, boron, magnesium, phosphorus, platinum, potassium, stone, sulfur, zinc, sal ammoniac, aqua fortis, aqua regia, aqua vitae, amalgam, cinnabar, vitriol, biomass, albedo, rubedo, nigredo, citrinitas) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)", [message.author.id, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,]);
    } else {
      sql.run(`UPDATE tokens SET points = ${row.points + 1} WHERE userId = ${message.author.id}`);
    }
  }).catch(() => {
    console.error;
    sql.run("CREATE TABLE IF NOT EXISTS tokens (userId TEXT, idle INTEGER, lessons INTEGER, bursary INTEGER, alchemy INTEGER, apparatus INTEGER, research INTEGER, reputation INTEGER, discovery INTEGER, goldpieces INTEGER, fire INTEGER, earth INTEGER, water INTEGER, wind INTEGER, mercury INTEGER, salt INTEGER, sulfur INTEGER, lead INTEGER, tin INTEGER, iron INTEGER, gold INTEGER, copper INTEGER, silver INTEGER, antimony INTEGER, arsenic INTEGER, bismuth INTEGER, boron INTEGER, magnesium INTEGER, phosphorous INTEGER, platinum INTEGER, potassium INTEGER, stone INTEGER, sulfur INTEGER,  zinc INTEGER, sal ammoniac INTEGER, aqua fortis INTEGER, aqua regia INTEGER, aqua vitae INTEGER, amalgam INTEGER, cinnabar INTEGER, vitriol INTEGER,  biomass INTEGER, albedo INTEGER, rubedo INTEGER, nigredo INTEGER, citrinitas INTEGER)").then(() => {
      sql.run("INSERT INTO tokens (userId, idle, lessons, bursary, alchemy, apparatus, fire, earth, water, wind, mercury, salt, sulfur, lead, tin, iron, gold, copper, silver, antimony, arsenic, bismuth, boron, magnesium, phosphorus, platinum, potassium, stone, sulfur, zinc, sal ammoniac, aqua fortis, aqua regia, aqua vitae, amalgam, cinnabar, vitriol, biomass, albedo, rubedo, nigredo, citrinitas) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)", [message.author.id, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,]);
    });
  });
});
homunculus.login(config.token);
