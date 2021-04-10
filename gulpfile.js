const gulp = require('gulp');

gulp.task('default',(done)=>{
    gulp.src('xxx')
    .pipe(gulp.dest('./dist/css'))

    gulp.watch('./src/sass/*.scss',()=>{

    })
    done();
})