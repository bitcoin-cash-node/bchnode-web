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
  <a title="Crowdin" target="_blank" href="https://crowdin.com/project/bchnode-web"><img src="https://badges.crowdin.net/bchnode-web/localized.svg"></a>
</div>

---

### Table of contents

- [Run the development server](#-run-the-development-server)
- [Deploy](#-deploy)
- [Contribute](#-contribute)
- [Translate](#-translate)

---


## Run the development server

You will need [nodeJS](https://nodejs.org/en/) installed on your machine, then run the following once:

```shell
npm install
```

Run the following every time you want to start the development server:

```shell
npm start
```

Hit `ctrl + C` to stop the server.

## Deploy

To build the production website, run:

```shell
npm run build
```

## Contribute

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

##### Write an article

In `/blog/`, copy the `example.md` file and replace the content. Run `npm start` to preview the article in the browser (located at http://localhost:3000/en/newsroom/filename).

To caption an image, use thie `figure` and `figcaption` tags:

```html
<figure>
  <img src="image.jpg" alt="Something">
  <figcaption>This is a caption</figcaption>
</figure>
```

## Translate

Translations are managed through [Crowdin](https://crowdin.com). If you wish to translate this website into your own language, please open an issue at this repo.

Pull requests are automatically created when a translation is updated.

## License

The files in this repository are licensed under MIT license. See [LICENSE](https://gitlab.com/bitcoin-cash-node/BCHN-SW/bchnode-web/blob/master/LICENSE).
