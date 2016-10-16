var through = require('through2');
var gutil = require('gulp-util');
var PluginError = gutil.PluginError;

const PLUGIN_NAME = 'gulp-code-sine';

function generateSpaces(index, options) {
    var sineValue = Math.round(-1 * options.amplitude *
        Math.cos(Math.PI * 2 * index / options.period) + options.amplitude);
    var spaces = '';
    for (var i = 0; i < sineValue; i++) {
        spaces += ' ';
    }
    return spaces;
}

function codeSineStream(options) {

    var stream = through(function (chunk, enc, callback) {
        var rm = true;
        var removeList = [];
        var lineCount = 0;
        for (var i = 0; i < chunk.length; i++) {
            var char = chunk[i];
            if (rm && (char === 9 || char === 32)) {
                removeList.push(i);
            }
            else if (char === 10) {
                lineCount++;
                removeList.push(new Buffer(generateSpaces(lineCount, options)));
                rm = true;
            }
            else {
                rm = false;
            }
        }
        var lIndex = 0;

        this.push(Buffer.concat(removeList.map(function (index) {
            if (Buffer.isBuffer(index)) {
                return index;
            }
            else {
                var partition = chunk.slice(lIndex, index);
                lIndex = index + 1;
                return partition;
            }
        })));
        callback();
    });

    return stream;
}

function gulpCodeSine(options) {

    if (options && (typeof options !== 'object')) {
        throw new PluginError(PLUGIN_NAME, 'Options must be an object');
    }

    options = options || {};
    options.amplitude = options.amplitude || 10;
    options.period = options.period || 16;

    return through.obj(function (file, enc, cb) {
        if (file.isNull()) {
            return cb(null, file);
        }
        if (file.isBuffer()) {
            var str = file.contents.toString();
            var lines = str.split('\n');
            lines.forEach(function (line, index) {
                var newLine = line.trim();
                lines[index] = generateSpaces(index, options) + newLine;
            });
            file.contents = new Buffer(lines.join('\n'));
        }
        if (file.isStream()) {
            gutil.log(gutil.colors.yellow(PLUGIN_NAME, 'warning: Streams are experimental'));
            file.contents = file.contents.pipe(codeSineStream(options));
        }

        cb(null, file);
    });

}

module.exports = gulpCodeSine;
