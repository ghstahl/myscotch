var gulp = require('gulp');

gulp.task('default', [
    'styles:example',
    'styles:dev',
    'browser-sync',
    'watch'
]);
