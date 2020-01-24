'use strict';

const gulp = require('gulp'),
    babel = require('gulp-babel'),
    concat = require('gulp-concat'),
    uglify = require("gulp-uglify");

// Minify js file
gulp.task('js', () => {
    gulp.src([
        wp_dir + 'src/js/app.js',
    ])
        .on('error', function (err) {
            console.log(err);
        })
        .pipe(babel({
            presets: ['env']
        }))
        .pipe(uglify())
        .pipe(concat('app.min.js'))
        .pipe(gulp.dest(wp_dir + 'dist/js'));
});


// Build files
gulp.task('build', ['js']);


// Watcher
gulp.task('default', ['build'], () => {

    // Watch JS Files
    gulp.watch([wp_dir + "src/js/*.js"], ['js']);

});