const { get } = require('snekfetch');

module.exports = async (method) => {
    switch(method) {
        case 'latest':
            /* get the latest comic */
            let { body: latest_comic } = await get('https://xkcd.com/info.0.json');

            let latest_response = {
                title: {
                    normal: latest_comic.title,
                    safe: latest_comic.safe_title,
                },
                description: latest_comic.alt,
                date: {
                    year: latest_comic.year,
                    month: latest_comic.month,
                    day: latest_comic.day,
                },
                number: latest_comic.num,
                url: `https://xkcd.com/${latest_comic.num}/`,
                image: latest_comic.img
            }

            return latest_response;
        break;
        case 'random':
            /* get a random comic */
            let { body: data } = await get('https://xkcd.com/info.0.json');
            let min = 1, max = data.num;

            let comicNum = Math.floor(Math.random() * (max - min)) + min;

            let { body: random_comic } = await get(`https://xkcd.com/${comicNum}/info.0.json`);

            let random_response = {
                title: {
                    normal: random_comic.title,
                    safe: random_comic.safe_title,
                },
                description: random_comic.alt,
                date: {
                    year: random_comic.year,
                    month: random_comic.month,
                    day: random_comic.day,
                },
                number: random_comic.num,
                url: `https://xkcd.com/${random_comic.num}/`,
                image: random_comic.img
            }

            return random_response;
        break;
        default: 
            /* get a specific comic from id */
            let { body: specific_comic } = await get(`https://xkcd.com/${method}/info.0.json`);

            if (!specific_comic) throw new Error('Comic doesn\'t exist');

            let specific_response = {
                title: {
                    normal: specific_comic.title,
                    safe: specific_comic.safe_title,
                },
                description: specific_comic.alt,
                date: {
                    year: specific_comic.year,
                    month: specific_comic.month,
                    day: specific_comic.day,
                },
                number: specific_comic.num,
                url: `https://xkcd.com/${specific_comic.num}/`,
                image: specific_comic.img
            }

            return specific_response;
        break;
    }
}