const express = require("express");
const { Client, RichEmbed } = require("discord.js");
const app = express();
function sleep(milliseconds) {
  var start = new Date().getTime();
  for (var i = 0; i < 1e7; i++) {
    if (new Date().getTime() - start > milliseconds) {
      break;
    }
  }
}
const http = require("http");
app.get("/", (request, response) => {
  console.log(Date.now() + "");
  response.sendStatus(200);
});
app.listen(process.env.PORT);
setInterval(() => {
  http.get(`http://${process.env.PROJECT_DOMAIN}.glitch.me/`);
}, 280000);
const Discord = require("discord.js");
const client = new Discord.Client();
const data = new Map();

client.on("message", async msg => {
  if (msg.channel.type === "dm") {
    if (msg.author.id === client.user.id) {
    } else {
      if (msg.author.bot) {
      } else {
        let fyukas = await data.get(msg.author.id);

        if (fyukas === 1) {
        } else {
          await data.set(msg.author.id, 1);
          await sleep(5000);
          await msg.channel.send("j4j go");
          await sleep(4000);
          await msg.channel.send("SUNUCUNUZUN LİNKİ");
          await sleep(10000);
          await msg.channel.send("done :) thx");
        }
      }
    }
  }
});

client.on('message', msg => {
  if (msg.content === 'j4j') {
    msg.channel.send('j4j dm');
  }
});

client.on('message', msg => {
  if (msg.content === 'j4j dm') {
    msg.channel.send('J4J DM FAST!!');
  }
});

client.login("TOKEN");