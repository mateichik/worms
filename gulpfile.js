var watch = require('gulp-watch');
var gulp = require('gulp');
var typeScript = require('gulp-typescript');

gulp.task('build-ts', function(){
	return gulp.src('./scripts/**/*.ts')
		.pipe(typeScript({
			noImplicitAny:true
		}))
		.pipe(gulp.dest('./scripts/compiled'));
});

gulp.task('watch', function(){
	watch('./scripts/**/*.ts', function(events, done){
		console.log('building ts...')
		gulp.start('build-ts');
		
	});
});