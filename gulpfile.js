let gulp = require('gulp'),
    sass = require('gulp-sass'),
    del = require('del'),
    newer = require('gulp-newer'),
    browserSync = require('browser-sync'),
    cleanCSS = require('gulp-clean-css'),
    nunjucksRender = require('gulp-nunjucks-render'),
    i18n = require('gulp-html-i18n'),
    reload = browserSync.reload;


// TASKS
gulp.task('clean', function(done){
  // Deletes all files from dist/
  del.sync('dist/', {force: true});
  done()
});

// Internationalization
gulp.task('i18n', function() {
  return gulp.src('dist-lang/**/*.html')
    .pipe(i18n({
      langDir: 'lang', // takes translations from /lang/
      createLangDirs: true,
      defaultLang: 'en',
      delimiters: ['$(',')$']
    }))
    .pipe(gulp.dest('dist'));
});

// Templating
gulp.task('nunjucks', function() {
  // Gets all .html files in pages
  return gulp.src('app/**/*.html')
  // Renders template with nunjucks
  .pipe(nunjucksRender({
    path: ['app/templates/']
  }))
  // Outputs files in dist-lang folder
  .pipe(gulp.dest('dist-lang'));
});

// Compile Sass into CSS
gulp.task('sass', function(){
  return gulp.src('scss/style.scss')
    .pipe(sass()) // Compiles styles.scss to css
    .pipe(cleanCSS({compatibility: 'ie9'})) // Minifies CSS
    .pipe(gulp.dest('app/static/css'))
    .pipe(reload({
      stream: true
    }))
});

// Copy html files to dist
gulp.task('copy-special', function(){
  return gulp.src(['app/CNAME', 'app/bitcoin.pdf'])
    .pipe(newer('dist/')) // Only get the modified files
    .pipe(gulp.dest('dist/'))
});

// Copy all static files
gulp.task('copy-static', function(){
  return gulp.src('app/static/**/*.*', {base: './app/static/'})
    .pipe(gulp.dest('dist/static/'));
});

gulp.task('reload', function(done){
  reload();
  done();
});

// Watch for changes
gulp.task('watch', function(done){
  // Watch HTML pages
  gulp.watch('app/**/*.html', gulp.series('copy-special', 'nunjucks', 'i18n',
    'copy-static', 'reload'));
  // Watch Nunjucks templates
  gulp.watch('app/templates/', gulp.series('nunjucks', 'copy-static', 'i18n',
    'reload'));
  // Watch SCSS files
  gulp.watch('scss/**/*.scss', gulp.series('sass'));
  // Watch static files
  gulp.watch('app/static/**/*.*', gulp.series('copy-static', 'reload'));
  done();
});

// Starts browserSync
gulp.task('serve', function(done){
  browserSync({
    server: {
      baseDir: './dist',
      index: "index.html",
      serveStaticOptions: {
        extensions: ['html']
      }
    }
  });
  done();
});


// Default task
gulp.task('default', gulp.series('clean', 'nunjucks', 'i18n', 'sass',
  'copy-special', 'copy-static', 'serve', 'watch'));

// Deployment task
gulp.task('build', gulp.series('clean', 'nunjucks', 'i18n', 'sass',
  'copy-special', 'copy-static'));
