const fs = require('fs');

//  Read the JSON file
fs.readFile('data.json', 'utf8', (err, data) => {
    if (err) {
        console.error(' Error reading file:', err.message);
        return;
    }

    try {
        //  Safely parse JSON data
        let jsonData = JSON.parse(data);
        console.log('Original Data:', jsonData);

        //  Modify JSON data
        jsonData.age = 30;  // Updating the 'age' property

        //  Write the modified data back to the file
        fs.writeFile('data.json', JSON.stringify(jsonData, null, 2), (writeErr) => {
            if (writeErr) {
                console.error(' Error writing file:', writeErr.message);
                return;
            }
            console.log(' Data updated successfully');
        });

    } catch (parseErr) {
        console.error(' Error parsing JSON:', parseErr.message);
    }
});
