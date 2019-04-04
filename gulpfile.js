// Include gulp
var gulp = require('gulp');

// Include Our Plugins
var bs = require('browser-sync');
var clean = require('gulp-clean');
var nunj = require('gulp-nunjucks-render');
var sass = require('gulp-sass');

var root = './';
var dest = './app';

var css = {
  source: './sass/**/*.scss',
  out: dest + '/css/',
  watch: './sass/**/*.scss',
  bundle: 'bundle.min.css'
};

var pages = {
  source: './pages/**/*.njk',
  out: dest,
  watch: './pages/**/*.njk'
};

// Task: Clean build files
gulp.task('clean', function () {
  return gulp.src(dest, {
      read: false
    })
    .pipe(clean({
      force: true
    }))
});

// Compile Nunjucks files
gulp.task('nunj', function () {
  var options = {
    "indent_size": 2,
    "indent_char": " ",
    "indent_level": 0,
    "preserve_newlines": true,
  };
  return gulp.src(pages.source)
    .pipe(nunj({
      path: [root]
    }))
    .pipe(gulp.dest(dest))
});

// Compile Our Sass
gulp.task('sass', function () {
  return gulp.src(css.source)
    .pipe(sass())
    .pipe(gulp.dest(css.out))
    .pipe(bs.stream());
});

// Browser sync
gulp.task('serve', function () {
  bs.init({
    server: {
      baseDir: dest
    }
  });
  gulp.watch(pages.watch, gulp.series('nunj')).on('change', reload);
  gulp.watch(css.watch, gulp.series('sass'));
});

// Launch project
gulp.task('default',
  gulp.series(
    'clean',
    'sass',
    'nunj',
    'serve'
  ));