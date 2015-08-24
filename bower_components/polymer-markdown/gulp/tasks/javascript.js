var config = require('../config');

var gulp = require('gulp');

var jshint = require('gulp-jshint');
var uglify = require('gulp-uglify');

gulp.task('javascripts:build', function() {
    return gulp.src(config.SRC + '/' + config.COMPONENT_NAME + '.js')
        .pipe(jshint())
        .pipe(jshint.reporter('jshint-stylish'))
        .pipe(uglify())
        .pipe(gulp.dest(config.DEST));
});
