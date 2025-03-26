const fs = require('fs');

function readFileAsync(fileName, callback) {
    fs.readFile(fileName, 'utf8', (err, data) => {
        if (err) {
            callback(err, null);
        } else {
            callback(null, data);
        }
    });
}

// Using the function
readFileAsync('example.txt', (err, data) => {
    if (err) {
        console.log('Error reading file:', err.message);
    } else {
        console.log('File content:', data);
    }
});
