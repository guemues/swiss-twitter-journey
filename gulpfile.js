const gulp = require('gulp')
const browserSync = require('browser-sync')

gulp.task(
  'browserSync', function(){
    browserSync.init(
      {
        server: {
          baseDir: './'
        }
      }
    )
  }
)

gulp.task(
  'watch', ['browserSync'], function() {
    gulp.watch('./index.html', browserSync.reload)
    gulp.watch('./css/*.css', browserSync.reload)
    gulp.watch('./js/*.js', browserSync.reload)
  }
)