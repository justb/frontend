var postcss = require('gulp-postcss');
var gulp = require('gulp');
 
gulp.task('css', function () {
    return gulp.src('./cssnext/*.css')
        .pipe(postcss())
        .pipe(gulp.dest('./cssnext/dest'));
});

gulp.task('watch', function() {
    gulp.watch('./cssnext/*.css', ['css']);
});