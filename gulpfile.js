let gulp = require('gulp'),
sass = require('gulp-sass'),
rename = require('gulp-rename');

gulp.task('sass', function(){
 return gulp.src('app/scss/style.scss')
        .pipe(rename({suffix : '.min'}))
        .pipe(gulp.dest('app/css'))
});
gulp.task('watch', function(){
	gulp.watch('app/scss/style.scss', gulp.parallel('sass'));
});