var config = require('../config');

var gulp = require('gulp');

var replace = require('gulp-replace');

gulp.task('replace', function() {
    return gulp.src(config.SRC + '/*.html')
        .pipe(replace('bower_components', '..'))
        .pipe(gulp.dest(config.DEST));
});
