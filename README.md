# xkcdify
A simple API for getting latest/random/specific xkcd comics.

## Install
```
npm i xkcdify
```

## Usage
First, require the package somewhere in your code:
```js
const xkcd = require('xkcdify');
```
An example of getting the latest comic:
```js
xkcd('latest').then(comic => {
    console.log(`The latest comic is "${comic.title.safe}"`);
});
```
Getting a random comic:
```js
xkcd('random').then(comic => {
    console.log(`A random comic called "${comic.title.safe}", sounds nice`);
});
```
  
Made with :heart: and :coffee: by ThatTonybo.