# xkcdify
A simple node.js wrapper for getting latest/random/specific xkcd comics. This is unmaintained, but works fine and can be used if wanted.

## Install
```
This has been removed off npmjs.com
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
xkcd('614').then(comic => {
    console.log(`Did you know that comic's title is "${comic.title.safe}"?`);
    // => Did you know that comic's title is "Woodpecker"?
});
```

## Extras
xkcdify returns a promise, so you can use async/await:
```js
const comic = await xkcd('614');
console.log(`Using async/await, I found "${comic.title.safe}"!`);
// => Using async/await, I found "$Woodpecker"!
```
It also returns *all* raw data that the xkcd API gives, as well as some extras to help. Here's an example response from the `latest` method:
```js
{
    title: {
        normal: 'Light Hacks',
        safe: 'Light Hacks',
    },
    description: 'Life hack: Wait for an advanced civilization to be briefly distracted, then sneak in and construct a slightly smaller Dyson sphere inside theirs.',
    date: {
        year: 2018,
        month: 7,
        day: 25,
    },
    number: 2024,
    url: 'https://xkcd.com/2024/',
    image: 'https://imgs.xkcd.com/comics/light_hacks.png'
}
```

## Licence
(c) 2018 - 2019 ThatTonybo. This project is not licenced under any official licences.
