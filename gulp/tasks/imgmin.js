var gulp     = require( 'gulp' );
var imagemin = require( 'gulp-imagemin' );
var pngquant = require( 'imagemin-pngquant' );
var config   = require('../config');

gulp.task('imgmin',function(){
  gulp.src( config.img.src )
    .pipe( imagemin ({
        use:[pngquant ({
              quality: '60-80',
              speed: 3
            })]
    }))
    .pipe(gulp.dest( config.img.dest ))
});