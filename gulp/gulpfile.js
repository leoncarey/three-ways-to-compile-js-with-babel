'use strict';

const gulp = require('gulp'),
    babel = require('gulp-babel'),
    concat = require('gulp-concat'),
    uglify = require("gulp-uglify");

// Minify js file
gulp.task('js', () => {
    gulp.src([
        'src/js/app.js',
    ])
        .on('error', function (err) {
            console.log(err);
        })
        .pipe(babel({
            presets: ['env']
        }))
        // .pipe(uglify()) // If you want minify JS files uncomment this line
        .pipe(concat('app.min.js'))
        .pipe(gulp.dest('dist/js'));
});


// Build files
gulp.task('build', ['js']);


// Watcher
gulp.task('default', ['build'], () => {

    // Watch JS Files
    gulp.watch(["src/js/*.js"], ['js']);

});