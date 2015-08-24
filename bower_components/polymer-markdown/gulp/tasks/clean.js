var config = require('../config');

var gulp = require('gulp');

gulp.task('clean', function(cb) {
    require('del')([config.DEST], {
        force: true
    }, cb);
});
