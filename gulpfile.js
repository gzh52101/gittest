const gulp = require('gulp');

gulp.task('default',(done)=>{
    gulp.src('xxx')
    .pipe(gulp.dest('./dist/js'))

    gulp.watch('./src/sass/*.scss',()=>{

    })
    done();
})