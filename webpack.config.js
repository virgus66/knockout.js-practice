const path = require('path');

module.expots = {
    entry: '.src/app.js',
    output: {
        path: path.join(__dirname, '/dist'),
        filename: 'bundle.js'
    },
}