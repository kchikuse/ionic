var gulp = require('gulp'),
  jshint = require('gulp-jshint'),
  concat = require('gulp-concat'),  
  rename = require('gulp-rename'),
  uglify = require('gulp-uglify'),
  addStream = require('add-stream'),
  stylish = require('jshint-stylish'),
  minifyCSS = require('gulp-minify-css'),
  ngAnnotate = require('gulp-ng-annotate'),
  minifyHTML = require('gulp-minify-html'),
  angularTemplateCache = require('gulp-angular-templatecache');

function prepareTemplates() {
  return gulp.src('www/views/**/*.html')
    .pipe(minifyHTML({ quotes: true }))
    .pipe(angularTemplateCache());
}

gulp.task('js', function() {
  return gulp.src([
      'www/js/lib/ionic.bundle.js',
      'www/js/lib/underscore.js',
      'www/js/lib/taffy.js',
      'www/js/app.js',
      'www/js/controllers.js',
      'www/js/services.js'
    ])
    .pipe(ngAnnotate())
    .pipe(jshint())
    .pipe(jshint.reporter(stylish))
    .pipe(addStream.obj(prepareTemplates()))
    .pipe(concat('all.js'))
    .pipe(uglify())
    .pipe(rename('app.min.js'))
    .pipe(gulp.dest('www/dist'));
});

gulp.task('css', function() {
  return gulp.src('www/css/**/*.css')
    .pipe(concat('all.css'))
    .pipe(minifyCSS())
    .pipe(rename('app.min.css'))
    .pipe(gulp.dest('www/dist'));
});

gulp.task('default', ['js', 'css']);

gulp.task('watch', function() {
  //gulp.watch([
  //  'www/js/**/*.js', 
  //  'www/css/**/*.css', 
  //  'www/templates/**/*.html'], ['js', 'css']);
});