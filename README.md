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
    console.log(`The latest comic is "${comic.title.safe}"!`);
    // => The latest comic is "New Phone Thread"!
});
```
Getting a random comic:
```js
xkcd('random').then(comic => {
    console.log(`A random comic called "${comic.title.safe}", sounds nice.`);
    // => A random comic called "Fixing Problems", sounds nice.
});
```
Maybe you want a specific comic?
```js
xkcd('614').then(response => {
    console.log(`Did you know that comic's title is "${response.title.safe}"?`);
    // => Did you know that comic's title is "Woodpecker"?
});
```
  
Made by ThatTonybo. You can get help on my Discord server [here](https://discord.gg/nnpPGRy) if you need it.