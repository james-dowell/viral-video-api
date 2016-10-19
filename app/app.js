'use strict';

var google = require('googleapis'),
    mongoose = require('mongoose'),
    jwtClient = new google.auth.JWT(
        '1066187192093-hms4jdrf5c6trptsvdkp7bbpjujdi33j@developer.gserviceaccount.com',
        './key.pem',
         null,
        ['https://www.googleapis.com/auth/youtube']
    );


function getOneWeekAgo() {
    var oneWeekAgo = new Date();
    oneWeekAgo.setDate(oneWeekAgo.getDate() - 7);
    return oneWeekAgo.toISOString();
}

function dbConnectedInitApp() {
    jwtClient.authorize(function(err, tokens) {
        if (err) {
            console.log(err);
            return;
        }

        var params = {
            part: 'snippet',
            auth: jwtClient,
            q: '',
            maxResults: 50,
            order: 'viewCount',
            videoEmbeddable: 'true',
            type: 'video',
            publishedAfter: getOneWeekAgo()
        };

        // setInterval(function () {
            google.youtube('v3').search.list(params, function (err, res) {
                console.log(res.items);
                res.items.forEach(function (item) {
                    console.log('thumbs', item.snippet.thumbnails);
                })
            });
        // }, 2000);

    });

}

dbConnectedInitApp();

// mongoose.connect('mongodb://127.0.0.1:27017/video');
//
// mongoose.connection.on('connected', function (err) {
//
//     if (err) {
//         console.log('error', err);
//         return;
//     }
//     console.log('we connected bitches');
//
// });

// db.on('error', console.error.bind(console, 'connection error:'));
// db.once('open', function (callback) {
//   console.log('Yay');
// });
