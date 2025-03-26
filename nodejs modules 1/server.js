const http = require('http');
const myModule = require('./myModule');  // Import custom module

const server = http.createServer((req, res) => {
    res.writeHead(200, {'Content-Type': 'text/plain'});

    // Using the greet function with your name
    res.write(myModule.greet('Kavipriya'));

    // Using the add function
    res.write('\nSum: ' + myModule.add(10, 20));

    res.end();
});

// Start the server
server.listen(3000, () => {
    console.log('Server running at http://localhost:3000');
});
