const gulp = require('gulp');

gulp.task('default',(done)=>{
    gulp.src('xxx')
    .pipe(gulp.dest('./dist'))

    gulp.watch('./src/sass/*.scss',()=>{

    })
    done();
})