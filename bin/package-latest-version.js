const path                          = require('path');
const fs                            = require('fs');
const archiver                      = require('archiver');

let output = fs.createWriteStream(`${__dirname}/../dist/morning-ui.latest.zip`);
let archive = archiver('zip', {
    zlib: {
        level: 9
    }
});

output.on('close', () => {

    console.log(archive.pointer() + ' total bytes');
    console.log('archiver has been finalized and the output file descriptor has closed.');

});

output.on('end', function() {
    
    console.log('Data has been drained');

});

archive.on('warning', function(err) {
  
  if (err.code === 'ENOENT') {
        
        console.log(err);

  } else {
  
      throw err;
  
  }

});

archive.on('error', function(err) {
    
    throw err;

});

archive.pipe(output);
archive.append(fs.createReadStream(`${__dirname}/../dist/morning-ui.css`), { name: 'morning-ui.css' });
archive.append(fs.createReadStream(`${__dirname}/../dist/morning-ui.js`), { name: 'morning-ui.js' })
archive.append(fs.createReadStream(`${__dirname}/../dist/morning-ui.min.css`), { name: 'morning-ui.min.css' })
archive.append(fs.createReadStream(`${__dirname}/../dist/morning-ui.min.js`), { name: 'morning-ui.min.js' })
archive.finalize();
