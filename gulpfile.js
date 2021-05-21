const gulp = require('gulp');
const sass = require('gulp-sass');
const del = require('del');

const mainFolder = './src/scss/*.scss';
const moduleFolder = './src/scss/**/*.scss';
const destFolder = './src/css/';

gulp.task('styles', () => {
    return gulp.src(mainFolder)
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest(destFolder));
});

gulp.task('clean', () => {
    return del([
        './css/*.css',
    ]);
});

gulp.task('default', gulp.series(['clean', 'styles']));

gulp.task('watch', function () {
    gulp.watch(mainFolder, gulp.series('styles'));
    gulp.watch(moduleFolder, gulp.series('styles'));
});