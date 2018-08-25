const path = require('path'); // Node built-in utility for constructing/finding directory paths

const gulp = require('gulp');
const browserSync = require('browser-sync').create();
const babel = require('gulp-babel');
const uglify = require('gulp-uglify');
const del = require('del');
const cssnano = require('gulp-cssnano');

const distFolder = 'dist'; // define for code resilience

// generate live server for development purposes
function serveDev (done) {
  browserSync.init({
    server: {
      baseDir: 'app'
    }
  });
  done();
}

function reload (done) {
  browserSync.reload(['app/*.html', 'app/js/**/*.js', 'app/css/**/*.css']);
  console.log('reloaded');
  done();
}

// generate live server to check production site
function serveProd (done) {
  browserSync.init({
    server: {
      baseDir: 'dist'
    }
  });
  done();
}

// function definitions for tasks
function minifyCss () {
  return gulp.src('app/css/*')
    .pipe(cssnano())
    .pipe(gulp.dest(path.join(distFolder, 'css')));
}

function resetDist () {
  return del([distFolder]);
}

function buildJs () {
  return gulp.src('app/js/*')
    .pipe(babel({
      presets: ['env']
    }))
    .pipe(uglify())
    .pipe(gulp.dest(path.join(distFolder, 'js')));
}

function moveStatics () {
  return gulp.src(['app/*.html', 'app/data/*', 'app/img/*'], { base: 'app/' }) // 'base' preserves folder structure
    .pipe(gulp.dest(distFolder));
}

function watch () {
  return gulp.watch(['app/*.html', 'app/js/**/*.js', 'app/css/**/*.css'], gulp.series(reload));
}

// exporting allows access through Gulp-CLI, accessed through package.json since it's locally installed
exports.dev = gulp.series(serveDev, watch); // live serve for development
exports.build = gulp.series(resetDist, gulp.parallel(minifyCss, buildJs, moveStatics)); // build to dist file
exports.serveProd = gulp.series(exports.build, serveProd); // test production site
