var humans = require('humans-generator');
var fs = require('fs');

humans({
    team: [
        {
            "Original Developer": "Rohit Bandooni",
            "Github": "rbandooni"
        }
    ],
    thanks: [
        'WMU Libraries IT Staff'
    ],
    site: {
        'Standards': 'HTML5. CSS3. ES6',
        'Components': 'jQuery, Google MDL, Google Charts, Angular, Bootstrap, LibCal',
        'Softwares': 'SublimeText, Visual Studio Code'
    },
    note: 'Built with love and passion by Rohit Bandooni.'
}, function(err, humans) {
  
    if(err) console.log(err);
    else {
        // console.log(humans.join('\n'));

        var writeStream = fs.createWriteStream('humans.txt');
        writeStream.write(humans.join('\n'));
        // console.log('\n\nBytes Written: '+ writeStream.bytesWritten);
        writeStream.end();
    } 



})