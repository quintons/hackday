var gulp = require('gulp');
var server = require('gulp-webserver');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var rename = require('gulp-rename');

/* script specific tasks */
gulp.task('scripts', function() {
    gulp.src(['./src/js/utils.js', './src/js/form.js', './src/js/login.js', './src/js/sitemap.js'])
        .pipe(concat('main.js'))
        //.pipe(uglify())
        .pipe(rename('main.min.js'))
        .pipe(gulp.dest('./dist/js/'));
    gulp.src('./src/js/vendor/**/*.min.*')
        .pipe(gulp.dest('./dist/js/vendor/'));
});

/* copy tasks */
gulp.task('css', function(){
    return gulp.src('./src/css/**/*.css')
        .pipe(gulp.dest('./dist/css'));
});

gulp.task('fonts', function(){
    return gulp.src('./src/fonts/**/*.*')
        .pipe(gulp.dest('./dist/fonts'));
});

gulp.task('index', function(){
    return gulp.src('./src/index.html')
        .pipe(gulp.dest('./dist/'));
});

gulp.task("watch", function() {
    gulp.watch(["./src/index.html"], ["index"]);
    gulp.watch(["./src/fonts/**/*.*"], ["fonts"]);
    gulp.watch(["./src/css/**/*.css"], ["css"]);
    gulp.watch(["./src/js/*.js", "./src/js/vendor/**/*.min.*"], ["scripts"]);
});

gulp.task('bower', function() {
    return gulp.src('./bower_components/*/dist/**/*.*')
        .pipe(gulp.dest('./dist/vendor'));
});

/* webserver */
gulp.task('webserver', function() {
    gulp.src('dist')
        .pipe(server({
            port:'8080',
            livereload: true,
            open: true
        }));
});

gulp.task('copy', ['css', 'fonts', 'index', 'bower'])
gulp.task('default', ['scripts', 'copy', 'watch', 'webserver']);