// this gulpfile runs a less task and the hugo server, should be alright

var gulp = require('gulp'); // the gulp runner
var less = require('gulp-less'); // compile less
var shell = require('gulp-shell'); // run the 'hugo server' command from gulp

// grabs less files and compiles them
gulp.task('less', function() {
    // grab all the less files
    gulp.src('static/less/*.less')
        .pipe(less())
        // dump it into the same directory for hugo server to process
        .pipe(gulp.dest('static/css/'))
})

// runs the hugo server, gulp-shell shorthand
gulp.task('server', shell.task([
	// run hugo server (has )
    'hugo server --buildDrafts'
]))

// watch less files for changes
gulp.watch('static/less/*.less', ['less'])

// run on 'gulp'
gulp.task('default', [
	'less', 
	'server'
])