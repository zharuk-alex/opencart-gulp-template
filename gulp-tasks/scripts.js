module.exports = function (gulp, plugins) {
    return function () {
      gulp.src('src/js/**/*.js')
			.pipe(plugins.plumber({
		    errorHandler: plugins.notify.onError("Error: <%= error.message %>")
		  }))
  		.pipe(plugins.sourcemaps.init())
      .pipe(plugins.uglify())
      .pipe(plugins.concat('scripts.min.js'))
			.pipe(plugins.sourcemaps.write('.'))
      .pipe(gulp.dest('javascript/'));
    };
};
