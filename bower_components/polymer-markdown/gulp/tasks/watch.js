var config = require('../config');

var gulp = require('gulp');

gulp.task('watch', function() {
    gulp.watch([config.SRC + '/*.html', config.SRC + '/*.js'], ['reload']);
    gulp.watch([config.SRC + '/*.scss'], ['styles:dev']);
    gulp.watch(['./*.scss'], ['styles:example']);
});
