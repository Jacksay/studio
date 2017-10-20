var gulp = require('gulp'),
    shell = require('gulp-shell'),
    sass = require('gulp-sass')
    ;

gulp.task('compile:slide', function(){
  console.log('Compilation des slides');
  gulp.src('src/slides/*.md', { read: false })
    .pipe(shell(
      ['pandoc --variable revealjs-url="../libs/reveal.js" --template=src/templates/revealjs.html --standalone --section-divs --variable theme="simple" --variable transition="default" -s -i -t revealjs <%= file.path %> -o <%= f(file.path) %>'],
      { templateData: { f: function(s){
        console.log(s);
        return s.replace(/\.md/, '.html').replace(/\/src\//, '/public/')}}}
    ));
})

gulp.task('compile:article', function(){
  console.log('Compilation des articles');
  gulp.src('src/articles/*.md', { read: false })
    .pipe(shell(
      ['pandoc --toc --no-highlight --variable theme="articles.css" --template=src/templates/article.html --standalone --section-divs -s -i -t revealjs <%= file.path %> -o <%= f(file.path) %>'],
      { templateData: { f: function(s){
        console.log(s);
        return s.replace(/\.md/, '.html').replace(/\/src\//, '/public/')}}}
    ));
})

gulp.task('compile:sass', function(){
  console.log('Compilation des sass');
  gulp.src('public/css/*.scss')
    .pipe(sass())
    .pipe(gulp.dest('public/css/'));
})

gulp.task('html', function(){
  console.log('Copie du home');
  gulp.src('src/*.html')
    .pipe(gulp.dest('public/'));
})

gulp.task('default', ['html', 'compile:article', 'compile:slide', 'compile:sass', 'watch']);

gulp.task('watch', function(){
   gulp.watch(['src/*.html'], ['html']);
  gulp.watch(['public/css/*.scss'], ['compile:sass']);
  gulp.watch(['src/slides/*.md','src/templates/revealjs.html'], ['compile:slide']);
  gulp.watch(['src/articles/*.md','src/templates/article.html'], ['compile:article']);
})
