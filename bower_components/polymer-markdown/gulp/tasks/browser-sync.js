var gulp = require('gulp');

var browserSync = require('browser-sync');

gulp.task('browser-sync', function() {
    browserSync({
        server: {
            baseDir: './'
        }
    });
});

gulp.task('reload', function() {
    browserSync.reload();
});
