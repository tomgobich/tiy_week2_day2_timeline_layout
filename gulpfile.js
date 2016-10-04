// var gulp = require('gulp');

// // requires the gulp-sass plugin
// var sass = require('gulp-sass');

// // requires browser-sync to update the browser on save
// var browserSync = require('browser-sync').create();

// // requires run-squence to order how tasks are run
// var runSequence = require('run-sequence');

// // --------------------------------------------------
// // Development Processes
// // --------------------------------------------------

// gulp.task('browserSync', function() {
// 	browserSync.init({
// 		server: {
// 			baseDir: 'app'
// 		},
// 	})
// })

// gulp.task('sass', function() {
// 	return gulp.src('app/scss/**/*.scss')
// 		.pipe(sass().on('error', sass.logError)) // converts sass to css using gulp-sass
// 		.pipe(gulp.dest('app/css'))
// 		.pipe(browserSync.reload({
// 			stream: true
// 		}))
// });

// // --------------------------------------------------
// // Task Watcher
// // --------------------------------------------------

// gulp.task('watch', ['browserSync', 'sass'],  function() {
// 	gulp.watch('app/sass/**/*.scss', ['sass']);
// 	// reloads the browser whenever HTML or JS files change
// 	gulp.watch('app/*.html', browserSync.reload);
// 	gulp.watch('app/js/**/*.js', browserSync.reload);
// });

// // --------------------------------------------------
// // Build Sequences
// // --------------------------------------------------

// gulp.task('default', function(callback) {
// 	runSequence(['sass', 'browserSync', 'watch'],
// 		callback
// 	)
// });


'use strict';
 
var gulp = require('gulp');
var sass = require('gulp-sass');
var browserSync = require('browser-sync').create();

gulp.task('sass', function () {
  return gulp.src('app/sass/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('app/css'))
    .pipe(browserSync.reload({
      stream: true
    })
    )});


gulp.task('browserSync', function() {
  browserSync.init({
    server: {
      baseDir: 'app'
    },
  })
})
 
gulp.task('watch',['browserSync','sass'], function () {
  gulp.watch(['app/sass/*.scss','app/*.html'], ['sass']);
});






