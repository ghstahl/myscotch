var config = require('../config');

var gulp = require('gulp');
var sass = require('gulp-sass');
var autoprefixer = require('gulp-autoprefixer');
var minify = require('gulp-minify-css');

var reload = require('browser-sync').reload;


gulp.task('styles:dev', function() {
    return gulp.src(config.SRC + '/' + config.COMPONENT_NAME + '.scss')
        .pipe(sass())
        .pipe(autoprefixer())
        .pipe(gulp.dest(config.SRC))
        .pipe(reload({
            stream: true
        }));
});

gulp.task('styles:example', function() {
    return gulp.src('./example.scss')
        .pipe(sass())
        .pipe(autoprefixer())
        .pipe(gulp.dest('./'))
        .pipe(reload({
            stream: true
        }));
});

gulp.task('styles:build', function() {
    return gulp.src(config.SRC + '/' + config.COMPONENT_NAME + '.scss')
        .pipe(sass())
        .pipe(autoprefixer())
        .pipe(minify({
            debug: true,
            keepSpecialComments: 0
        }))
        .pipe(gulp.dest(config.DEST));
});
