# Atomic

Atomic is a [d.js](https://www.npmjs.com/package/discord.js) bot that i work on my free time to learn coding and as a stress buster.

## Requirements

What you will need to run this bot :
```list
01. Node.js
02. Discord.js
03. node-fetch
04. c-log
05. d.jserror
06. Nodemon or pm2 [optional]
07. Discord-buttons
08. Discordjs/uws
09. A registered Discord bot 
10. A hosting service or local hosting
```

## Installations
| Download LTS | __[Download LTS](https://nodejs.org/en/)__ |
|--------------|--------------------------------------------|

### __Node Package Manager__
```
npm i discord.js c-log @discordjs/uws node-fetch discord-buttons d.jserror 
```
*make sure to make a package.json and use a linter outside of src before installation*
### __Optional Dependencies__

```npm
npm i nodemon 
npm i pm2
 ```
*Choose either one depending on preference*

### Discord Bot Account
- To register a Discord Account, read the following guide :

- [Google Docs](https://docs.google.com/document/d/16WLJAR1oiliiLwgeVwigXy6RWf5KP6aaz4IxDgVWdGY/edit?usp=sharing)
## Setting up Config.json

*Your File Directory should look something like this*
```js
Atomic/
├── slappey.json/
├── node_modules/
├── package.json/
├── package-lock.json/
├── src/
│   ├── commands/
│   ├── events/
│   └── utils/
│   └── .gitattributes/
│   └── .gitignore/
│   └── LICENSE/
│   └── README.md/
│   └── index.js/
```

`//name the file as slappey.json and put it outside src [dont copy this line]`
```json
{
  "name": "<your name>",
  "language": "javascript",
  "manager": "npm",
  "token": "<your token>",
  "prefix": "<your prefix>"
}
```

## Running the Bot


```list
1. node .             [None of the Optional Dependencies]
2. nodemon            [Nodemon]
3. pm2 start index.js [pm2]
```

## Contributing
Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

Please make sure to update tests as appropriate.

## License
[MIT](https://choosealicense.com/licenses/mit/)
