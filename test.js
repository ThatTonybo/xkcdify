const xkcd = require('./index');

xkcd('latest').then(response => {
    console.log(`Latest comic title: ${response.title.safe}`);
});

xkcd('random').then(response => {
    console.log(`Random comic title: ${response.title.safe}`);
});