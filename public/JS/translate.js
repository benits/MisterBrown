const translate = require("@vitalets/google-translate-api");

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

module.exports = translateText;
