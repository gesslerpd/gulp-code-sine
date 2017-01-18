var gulp = require('gulp');
var gulpCodeSine = require('../');

gulp.task('default', function () {
    return gulp.src('src/**/*.html')
        .pipe(gulpCodeSine())
        .pipe(gulp.dest('dist'));
});
