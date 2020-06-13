"use strict";

require("dotenv").config();
const APIAI_TOKEN = process.env.APIAI_TOKEN;
const APIAI_SESSION_ID = process.env.APIAI_SESSION_ID;

const express = require("express");
const app = express();

const translate = require("@vitalets/google-translate-api");

app.use(express.static(__dirname + "/views")); // html
app.use(express.static(__dirname + "/public")); // js, css, images

async function translateText(text) {
  await translate(text, { from: "auto", to: "pt" })
    .then((res) => {
      console.log(res.text);
      //=> I speak English
      console.log(res.from.language.iso);
      //=> nl
    })
    .catch((err) => {
      console.error(err);
    });
}

const server = app.listen(process.env.PORT || 5000, () => {
  console.log(
    "Express server listening on port %d in %s mode",
    server.address().port,
    app.settings.env
  );
});

const io = require("socket.io")(server);
io.on("connection", function (socket) {
  console.log("a user connected");
});

const apiai = require("apiai")(APIAI_TOKEN);

// Web UI
app.get("/", (req, res) => {
  res.sendFile("index.html");
});

io.on("connection", function (socket) {
  socket.on("chat message", (text) => {
    console.log("Message: " + text);

    // Get a reply from API.ai

    let apiaiReq = apiai.textRequest(text, {
      sessionId: APIAI_SESSION_ID,
    });

    apiaiReq.on("response", (response) => {
      let aiText = response.result.fulfillment.speech;

      translate(aiText, { from: "auto", to: "pt" })
        .then((res) => {
          console.log(res.text);

          socket.emit("bot translate", res.text);
        })
        .catch((err) => {
          console.error(err);
        });

      console.log("Bot reply: " + aiText);
      socket.emit("bot reply", aiText);
    });

    apiaiReq.on("error", (error) => {
      console.log(error);
    });

    apiaiReq.end();
  });
});
