let gulp = require('gulp'),
    sass = require('gulp-sass'),
    del = require('del'),
    newer = require('gulp-newer'),
    browserSync = require('browser-sync'),
    cleanCSS = require('gulp-clean-css'),
    nunjucksRender = require('gulp-nunjucks-render'),
    i18n = require('gulp-html-i18n'),
    data = require('gulp-data'),
    Techy = require('techy').gulp({root: 'blog/'}),
    concat = require('gulp-concat'),
    terser = require('gulp-terser'),
    reload = browserSync.reload;


// TASKS
gulp.task('clean', function(done){
  // Deletes all files from dist/
  del.sync(['dist/', 'dist-lang/'], {force: true});
  del.sync('app/static/css/style.css');
  done()
});

// Internationalization
gulp.task('i18n', function(){
  return gulp.src('dist-lang/**/*.html')
    .pipe(i18n({
      langDir: 'lang', // takes translations from /lang/
      createLangDirs: true,
      defaultLang: 'en',
      fallback: 'en',
      delimiters: ['$(',')$']
    }))
    .pipe(gulp.dest('dist'));
});

// Templating
gulp.task('nunjucks', function(){
  // Gets all .html files in pages
  return gulp.src('app/**/*.html')
  // Adds data from newsroom.json
  .pipe(data(function() {
    return require('./app/data/newsroom.json')
  }))
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

// Concat and minify JavaScript
gulp.task('js', function() {
  const files = [
    'node_modules/jquery/dist/jquery.slim.min.js',
    'node_modules/bootstrap/dist/js/bootstrap.bundle.min.js',
    'node_modules/aos/dist/aos.js',
    'node_modules/@fancyapps/fancybox/dist/jquery.fancybox.min.js',
    'js/*.js'
  ];
  return gulp.src(files)
    .pipe(concat('scripts.js'))
    // Minify JS
    .pipe(terser())
    .pipe(gulp.dest('dist/static/js/'));
});

// Copy all static files
gulp.task('copy-static', function(done){
  // Add AOS library from node_modules
  gulp.src('node_modules/aos/dist/aos.js')
    .pipe(gulp.dest('dist/static/js/'));
  // Add Fancybox CSS
  gulp.src(['app/static/css/style.css',
    'node_modules/@fancyapps/fancybox/dist/jquery.fancybox.min.css'])
    .pipe(concat('style.css'))
    .pipe(gulp.dest('dist/static/css/'))
  // Copy everything from app/static
  gulp.src('app/static/**/*.*', {ignore: ['app/static/js/custom.js',
                                          'app/static/css/*']})
    .pipe(gulp.dest('dist/static/'));
  done();
});

gulp.task('reload', function(done){
  reload();
  done();
});

// Techy CMS
gulp.task('techy', function(done){
  gulp.src(['blog/**/*.md', '!blog/example.md'])
    .pipe(Techy())
    .pipe(gulp.dest('./app/newsroom/'));
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
  gulp.watch('scss/**/*.scss', gulp.series('sass', 'copy-static'));
  // Watch static files
  gulp.watch('app/static/**/*.*', gulp.series('copy-static',
    'reload'));
  // Watch translations
  gulp.watch('lang/**/*.yaml', gulp.series('i18n', 'reload'));
  // Watch Techy CMS files
  gulp.watch('blog/**/*.md', gulp.series('techy', 'nunjucks', 'i18n'));
  // Watch JS files
  gulp.watch('js/*.js', gulp.series('js', 'reload'));
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
gulp.task('default', gulp.series('clean', 'techy', 'sass', 'nunjucks', 'i18n',
  'copy-static', 'copy-special', 'js', 'serve', 'watch'));

// Deployment task
gulp.task('build', gulp.series('clean', 'techy', 'sass', 'nunjucks', 'i18n',
  'copy-static', 'copy-special', 'js'));
