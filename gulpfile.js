// GULP variable declarations
require('es6-promise').polyfill();

// GULP variable declarations
var gulp = require('gulp');
var sass = require('gulp-sass');
var sourcemaps = require('gulp-sourcemaps');
var autoprefixer = require('gulp-autoprefixer');
var notify = require('gulp-notify');
var concat = require('gulp-concat');
var babel = require('gulp-babel');
var rename = require('gulp-rename');
var minifycss = require('gulp-minify-css');
var uglify = require('gulp-uglify');

// Explicitly define the sass compiler
sass.compiler = require('node-sass');

// File path variable declarations
var themeBase = 'assets/';
var outputDir = 'tmp/';
var jsDir = themeBase + 'js/**/*.js';

var scssThemeFile = themeBase + 'scss/theme/theme.scss';
var scssThemeWatchFiles = themeBase + 'scss/theme/**/*.scss';

var scssFABrandsFile = themeBase + 'scss/vendor/fontawesome/brands.scss';
var scssFAFontawesomeFile = themeBase + 'scss/vendor/fontawesome/fontawesome.scss';
var scssFARegularFile = themeBase + 'scss/vendor/fontawesome/regular.scss';
var scssFASolidFile = themeBase + 'scss/vendor/fontawesome/solid.scss';
var scssFAShimsFile = themeBase + 'scss/vendor/fontawesome/v4-shims.scss';
var scssFAWatchFiles = themeBase + 'scss/vendor/fontawesome/**/*.scss';

// Process JS
gulp.task('scripts', function() {
  return gulp.src(jsDir)
    .pipe(babel({ presets: ['@babel/env'] }))
    .pipe(concat('js/script.js'))
    .pipe(gulp.dest(outputDir))
    .pipe(uglify())
    .pipe(rename('js/script.js.min'))
    .pipe(gulp.dest(outputDir))
    .pipe(notify({
      title: "JS Theme Processing",
      message: "Theme JS has been babelfied.",
      onLast: true
    }));
});

// Process SASS
gulp.task('theme-scss', function() {
  return gulp.src(scssThemeFile)
    .pipe(sourcemaps.init())
    .pipe(sass.sync({ outputStyle: 'expanded' }).on('error', sass.logError))
    .pipe(autoprefixer())
    .pipe(sourcemaps.write())
    .pipe(concat('css/theme.css'))
    .pipe(gulp.dest(outputDir))
    .pipe(minifycss())
    .pipe(rename('css/theme.css.min'))
    .pipe(gulp.dest(outputDir))
    .pipe(notify({
      title: "Theme SASS Processing",
      message: "Theme SASS has completed processing.",
      onLast: true
    }));
});

// Process Fontawesome SASS
gulp.task('fontawesome-brands-scss', function() {
  return gulp.src(scssFABrandsFile)
    .pipe(sourcemaps.init())
    .pipe(sass.sync({ outputStyle: 'expanded' }).on('error', sass.logError))
    .pipe(autoprefixer())
    .pipe(sourcemaps.write())
    .pipe(concat('css/fa-brands.css'))
    .pipe(gulp.dest(outputDir))
    .pipe(minifycss())
    .pipe(rename('css/fa-brands.css.min'))
    .pipe(gulp.dest(outputDir))
    .pipe(notify({
      title: "Fontawesome Brands SASS Processing",
      message: "Fontawesome Brands SASS has completed processing.",
      onLast: true
    }));
});

// Process Fontawesome SASS
gulp.task('fontawesome-base-scss', function() {
  return gulp.src(scssFAFontawesomeFile)
    .pipe(sourcemaps.init())
    .pipe(sass.sync({ outputStyle: 'expanded' }).on('error', sass.logError))
    .pipe(autoprefixer())
    .pipe(sourcemaps.write())
    .pipe(concat('css/fa-base.css'))
    .pipe(gulp.dest(outputDir))
    .pipe(minifycss())
    .pipe(rename('css/fa-base.css.min'))
    .pipe(gulp.dest(outputDir))
    .pipe(notify({
      title: "Fontawesome base SASS Processing",
      message: "Fontawesome base SASS has completed processing.",
      onLast: true
    }));
});

// Process Fontawesome SASS
gulp.task('fontawesome-regular-scss', function() {
  return gulp.src(scssFARegularFile)
    .pipe(sourcemaps.init())
    .pipe(sass.sync({ outputStyle: 'expanded' }).on('error', sass.logError))
    .pipe(autoprefixer())
    .pipe(sourcemaps.write())
    .pipe(concat('css/fa-regular.css'))
    .pipe(gulp.dest(outputDir))
    .pipe(minifycss())
    .pipe(rename('css/fa-regular.css.min'))
    .pipe(gulp.dest(outputDir))
    .pipe(notify({
      title: "Fontawesome regular SASS Processing",
      message: "Fontawesome regular SASS has completed processing.",
      onLast: true
    }));
});

// Process Fontawesome SASS
gulp.task('fontawesome-solid-scss', function() {
  return gulp.src(scssFASolidFile)
    .pipe(sourcemaps.init())
    .pipe(sass.sync({ outputStyle: 'expanded' }).on('error', sass.logError))
    .pipe(autoprefixer())
    .pipe(sourcemaps.write())
    .pipe(concat('css/fa-solid.css'))
    .pipe(gulp.dest(outputDir))
    .pipe(minifycss())
    .pipe(rename('css/fa-solid.css.min'))
    .pipe(gulp.dest(outputDir))
    .pipe(notify({
      title: "Fontawesome regular SASS Processing",
      message: "Fontawesome regular SASS has completed processing.",
      onLast: true
    }));
});

// Process Fontawesome SASS
gulp.task('fontawesome-shims-scss', function() {
  return gulp.src(scssFAShimsFile)
    .pipe(sourcemaps.init())
    .pipe(sass.sync({ outputStyle: 'expanded' }).on('error', sass.logError))
    .pipe(autoprefixer())
    .pipe(sourcemaps.write())
    .pipe(concat('css/fa-shims.css'))
    .pipe(gulp.dest(outputDir))
    .pipe(minifycss())
    .pipe(rename('css/fa-shims.css.min'))
    .pipe(gulp.dest(outputDir))
    .pipe(notify({
      title: "Fontawesome shims SASS Processing",
      message: "Fontawesome shims SASS has completed processing.",
      onLast: true
    }));
});

// Setup the gulp WATCH functionality
gulp.task('default', [
  'scripts',
  'theme-scss',
  'fontawesome-brands-scss',
  'fontawesome-base-scss',
  'fontawesome-regular-scss',
  'fontawesome-solid-scss',
  'fontawesome-shims-scss',
], function() {
  gulp.watch(scssThemeWatchFiles, ['theme-scss']);
  gulp.watch(scssFAWatchFiles, [
    'fontawesome-brands-scss',
    'fontawesome-base-scss',
    'fontawesome-regular-scss',
    'fontawesome-solid-scss',
    'fontawesome-shims-scss',
  ]);
  gulp.watch(jsDir, ['scripts']);
});
