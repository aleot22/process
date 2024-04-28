const fs = require('fs');

const filePath = process.argv[2];

fs.readFile(filePath, 'utf8', function(err, data) {
    if (err) {
        return console.error(err);
    }

    const newlineCount = data.split('\n').length - 1;
    console.log(newlineCount);
});