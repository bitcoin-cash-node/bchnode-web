<div align="center">
  <img src="app/static/img/logomark.svg" width="80">
</div>

<div align="center">
  <h3>
    <a href="https://bitcoincashnode.org">BitcoinCashNode.org</a>
  </h3>
</div>

<div align="center">
  <img src="https://api.netlify.com/api/v1/badges/27419879-7ae8-4f7b-ad2e-117fe78ce814/deploy-status" alt="Netlify Deploy">
  <img src="https://travis-ci.org/bitcoin-cash-node/bchnode-web.svg?branch=master" alt="Build">
  <a title="Crowdin" target="_blank" href="https://crowdin.com/project/bchnode-web"><img src="https://badges.crowdin.net/bchnode-web/localized.svg"></a>
  <img src="https://www.codefactor.io/repository/github/bitcoin-cash-node/bchnode-web/badge">
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

##### HTML

HTML files are found in `/app/`.

##### CSS

To add styles, edit the files in `/scss/` - use [Sass](https://sass-lang.com) if possible (regular CSS will work too).

##### JavaScript

JavaScript files are located in `/js/`. All files will be concatenated in alphabetical order unless specified otherwise.

##### Version number

Simply edit the `latest` version number in `/app/data/versions.json` and the download links will automatically update.

## Writing an article

In `/blog/`, copy the `example.md` file and replace the content. Run `gulp` to preview the article in the browser (located at http://localhost:3000/en/newsroom/filename).

## Translating

Translations are managed through [Crowdin](https://crowdin.com). If you wish to translate this website into your own language, please open an issue at this repo.

Pull requests are automatically created when a translation is updated.

## License

The files in this repository are licensed under MIT license. See [LICENSE](https://github.com/bitcoin-cash-node/bchnode-web/blob/master/LICENSE).
