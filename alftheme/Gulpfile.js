var gulp = require('gulp');
var sass = require('gulp-sass');
var runSequence = require('run-sequence');
var cleanCSS = require('gulp-clean-css');
var sourcemaps = require('gulp-sourcemaps');
var autoprefixer = require('gulp-autoprefixer');

gulp.task('sass', function () {
    return gulp.src('assets/sass/**/*.scss')
    .pipe(sass())
    .pipe(sourcemaps.init())
    .pipe(cleanCSS())
    .pipe(sourcemaps.write())
    .pipe(autoprefixer({
        browsers: ['last 2 versions'],
        cascade: false
    }))
    .pipe(gulp.dest('static/css'));
});

gulp.task('watch', function () {
    gulp.watch('assets/sass/**/*.scss', ['sass']);
});

gulp.task('default', function (callback) {
    runSequence(['sass']);
});
