<div align="center">
  <img src="app/static/img/logomark.svg" width="80">
</div>

<div align="center">
  <h3>
    <a href="https://bitcoincashnode.org">BitcoinCashNode.org</a>
  </h3>
</div>

<div align="center">
  <img src="https://travis-ci.com/merc1er/bchnode-web.svg?branch=master" alt="Build">
  <a title="Crowdin" target="_blank" href="https://crowdin.com/project/bchnode-web"><img src="https://badges.crowdin.net/bchnode-web/localized.svg"></a>
</div>

## Run the develoment server

You will need [nodeJS](https://nodejs.org/en/) installed on your machine, then run the following once:

```shell
npm install -g gulp-cli
npm install
```

Run the following every time you want to start the development server:

```shell
gulp
```

Hit `ctrl + C` to stop the server.

## Contributing

Use the coding style recommended by [codeguide.co](https://codeguide.co).  
Open issues and pull requests at this repo.

#### HTML

HTML files are found in `/app/`.

#### CSS

To add styles, edit the files in `/scss/` - use [Sass](https://sass-lang.com) if possible (regular CSS will work too).

#### JavaScript

Edit `/app/static/js/custom.js` *(this will change in the future)*. jQuery is available.

## Translating

Translations are managed through [Crowdin](https://crowdin.com). If you wish to translate this website into your own language, please open an issue at this repo.

Pull requests are automatically created when a translation is updated.

## License

The files in this repository are licensed under MIT license. See [LICENSE](https://github.com/bitcoin-cash-node/bchnode-web/blob/master/LICENSE).
