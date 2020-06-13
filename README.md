<h1 align="center"> 
	:construction: BOT - MisterBrown 🚀 in progress.. :construction:
</h1>
<p align="center">
  <img alt="GitHub language count" src="https://img.shields.io/github/languages/count/benits/MisterBrown?color=%2304D361">

  <img alt="Repository size" src="https://img.shields.io/github/repo-size/benits/MisterBrown">
	
  <a href="https://www.linkedin.com/in/benites-amorim/">
    <img alt="Made by Matheus Benites" src="https://img.shields.io/badge/made%20by-MatheusBenites-%2304D361">
  </a>

  <a href="https://github.com/benits/MisterBrown/commits/master">
    <img alt="GitHub last commit" src="https://img.shields.io/github/last-commit/benits/MisterBrown">
  </a>

  <img alt="License" src="https://img.shields.io/badge/license-MIT-brightgreen">
   <a href="https://github.com/benits/MisterBrown/stargazers">
    <img alt="Stargazers" src="https://img.shields.io/github/stars/benits/MisterBrown?style=social">
  </a>
</p>

<p align="center">
  <a href="#-MisterBrown">BOT MisterBrown</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#rocket-Technologies">Technologies</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#how-to-use">How To Use</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#memo-license">License</a>
</p>

## :information_source: BOT MisterBrown?

the Mister Brown was developed, with the idea of ​​being used to practice conversational English.

This demo uses an experimental web speech API, which is currently supported only by browsers created in Blink,
including Chrome 25+, Opera 27+, Samsung Internet, QQ Browser and Baidu Browser.

See the demo [Here]

This is how this web application works:

- Using a SpeechRecognition interface from the Web Speech API to hear your voice through a microphone
- Send your message to API.ai (a natural language processing platform) as a text string
- After the API.ai AI returns the response text, use the SpeechSynthesis interface to obtain a synthetic voice.

## :rocket: Technologies

This project was developed with the following technologies:

- [HTML](https://www.w3schools.com/html/)
- [NPM](https://docs.npmjs.com/)
- [ApiAi](https://cloud.google.com/dialogflow/docs/)
- [Google Translate](https://www.npmjs.com/package/@vitalets/google-translate-api)
- [dotEnv](https://www.npmjs.com/package/dotenv)
- [express](https://expressjs.com/pt-br/)
- [Socket.io](https://socket.io/get-started/chat/)
- [NodeJs][nodejs]

## :information_source: How To Use

To clone and run this application, you'll need [Git][git], [NodeJs][nodejs] installed on your computer.

Rename the `.env.local` to `.env` and fill the env vars:

```
APIAI_TOKEN=
APIAI_SESSION_ID=some_unique_session_id
```

The first one is an API.ai API key (Please get one by sign up with [API.ai](https://api.ai)), and the second one is a session ID,
which is an arbitrary string (we could make this unique within the app, but that's beyond the scope of this demo).

Or use this Heroku button to deploy to Heroku server. You just need to fill out the env vars with the API key and a session ID.
No need to create an `.env` file.

Then from your command line:

### Install

```bash
# Clone this repository
$ git clone https://github.com/benits/papode.dev.git

# Go into the repository
$ cd MisterBrown

# Install dependencies
$ npm install

# Start
$ yarn start ou  npm start

# running on port 5000
```

[![Deploy](https://www.herokucdn.com/deploy/button.svg)](https://heroku.com/deploy?template=https://github.com/benits/MisterBrown)

## :memo: License

This project is under the MIT license. See the [LICENSE](https://github.com/benits/MisterBrown/blob/master/LICENSE) for details.

Made with ♥ by Matheus Benites :wave: [Get in touch!](https://www.linkedin.com/in/benites-amorim/)

[nodejs]: https://nodejs.org/
[git]: https://git-scm.com
[gatsbyjs]: https://www.gatsbyjs.org/
[gatsby-cli]: https://www.gatsbyjs.org/docs/quick-start/
[typescript]: https://www.typescriptlang.org/
[expo]: https://expo.io/
[reactjs]: https://reactjs.org
[rn]: https://facebook.github.io/react-native/
[yarn]: https://yarnpkg.com/
[vs]: https://code.visualstudio.com/
[vceditconfig]: https://marketplace.visualstudio.com/items?itemName=EditorConfig.EditorConfig
[vceslint]: https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint
[prettier]: https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode
[marckdown]: https://www.markdownguide.org/basic-syntax/
