const { src, dest } = require('gulp')
const concat = require('gulp-concat')

// requiring path and fs modules
const path = require('path')
const fs = require('fs')

const directoryPath = 'css'

fs.readdir(directoryPath, function (err, files) {
  // handling error
  if (err) {
    return console.log('Unable to scan directory: ' + err)
  }
  // listing all files using forEach
  files.forEach(function (file) {
    // Do whatever you want to do with the file
    console.log(file)
  })
})
const cssBundle = () =>
  src([
    directoryPath + '/settings/variables.css',
    directoryPath + '/settings/generic-styles.css',
    directoryPath + '/settings/typography.css',

    directoryPath + '/components/accessibility-controls.css',
    directoryPath + '/components/accessibility-preferences.css',
    directoryPath + '/components/accordion.css',
    directoryPath + '/components/article.css',
    directoryPath + '/components/artwork.css',
    directoryPath + '/components/breadcrumb.css',
    directoryPath + '/components/buttons.css',
    directoryPath + '/components/filter.css',
    directoryPath + '/components/footer.css',
    directoryPath + '/components/header.css',
    directoryPath + '/components/hero.css',
    directoryPath + '/components/inputs.css',
    directoryPath + '/components/layouts.css',
    directoryPath + '/components/links.css',
    directoryPath + '/components/skip-link.css',
    directoryPath + '/components/skip-link.css',
    directoryPath + '/components/sub-nav.css',
    directoryPath + '/components/other.css'
  ])
    .pipe(concat('styles.css'))
    .pipe(dest('assets/css/'))
    .pipe(dest('themes/responsibleItTheme/static/admin'))

exports.cssBundle = cssBundle
