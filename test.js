const xkcd = require('./index');
// https://github.com/ThatTonybo/xkcdify

xkcd('latest').then(response => {
    console.log(`Latest comic title: ${response.title.safe}`);
});

xkcd('random').then(response => {
    console.log(`Random comic title: ${response.title.safe}`);
});

xkcd('614').then(response => {
    console.log(`Specific comic title: ${response.title.safe}`);
});