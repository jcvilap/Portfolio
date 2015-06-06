'use strict';

var gulp = require('gulp'),
    sass = require('gulp-sass'),
    concat = require('gulp-concat'),
    minifyCSS = require('gulp-minify-css'),
    templateCache = require('gulp-angular-templatecache'),
    minifyHtml = require('gulp-minify-html'),
    rename    = require('gulp-rename');

// Sass Concat/Minify CSS
gulp.task('sass', function () {
    gulp.src('./client/**/*.scss')
        .pipe(sass())
        .pipe(concat('style.css'))
        .pipe(gulp.dest('./build'))
        .pipe(minifyCSS())
        .pipe(rename('style.min.css'))
        .pipe(gulp.dest('./build'));
});

// HTML Templates Cache/Minify
gulp.task('templateCache', function () {
    gulp.src('./client/**/*.tpl.html')
        .pipe(minifyHtml({empty: true}))
        .pipe(templateCache( 'app.templates.js', {
            module: 'PortfolioApp',
            root: './client',
            standAlone: false

        }))
        .pipe(gulp.dest('./build'));
});

// Watch Sass and Html files
gulp.task('watch', function () {
    gulp.watch('./client/**/*.scss', ['sass']);
    gulp.watch('./client/**/*tpl.html', ['templateCache']);
});

gulp.task('default', ['sass', 'templateCache', 'watch']);