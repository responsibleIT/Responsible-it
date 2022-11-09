const purgecss = require('@fullhuman/postcss-purgecss')({
  content: ['./hugo_stats.json'],
  defaultExtractor: (content) => {
    const els = JSON.parse(content).htmlElements
    return els.tags.concat(els.classes, els.ids)
  }
})

const gulp = require('gulp')

const concat = require('gulp-concat')

gulp.task('styles', function () {
  return gulp.src('./themes/responsibleItTheme/static/css')
    .pipe(concat('style.js'))
    .pipe(gulp.dest('./assets/css/'))
})

module.exports = {
  plugins: [
    require('autoprefixer'),
    require('cssnano')({
      preset: 'default'
    })
  ]
}
