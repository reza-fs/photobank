const getFilePath = require('./get_file_path')
const path = require('path')

const getImagesInDir = function (folder) {
    const pa = path.resolve(__dirname, 'public', folder);

    const paths = getFilePath(pa);

    return paths.map(file => file.replace(pa, ''));
}

module.exports = getImagesInDir;