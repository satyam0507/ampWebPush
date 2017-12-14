'use strict';

const express = require('express');

const app = express();


// app.use('/static', express.static('static'));
// app.use('/bower_components', express.static('bower_components'));

app.get('/:name', function(req, res) {

    var options = {
        root: __dirname + '/',
        headers: {
            'x-timestamp': Date.now(),
            'x-sent': true
        }
    };

    var fileName = req.params.name;
    res.sendFile(fileName, options, function(err) {
        if (err) {
            console.log(err);
        } else {
            console.log('Sent:', fileName);
        }
    });
});

app.set('port', (process.env.PORT || 5010));
app.listen(app.get('port'), function() {
    console.log('Example app listening on port ' + app.get('port'));
})