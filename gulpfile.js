
/**
LESS编译 压缩
JS合并 压缩 混淆
img复制
html压缩
*/

var gulp = require("gulp");
var less = require("gulp-less");
var concat1 = require("gulp-concat");
var cssnano = require("gulp-cssnano");
var htmlmin = require("gulp-htmlmin");
var uglify = require("gulp-uglify");
var browserync = require("browser-sync")

//LESS编译，需要用到gulp-less工具包
gulp.task('styleAction',function () {
	gulp.src(["src/styles/*.less","!src/styles/_*.less"])
		.pipe(less()) //编译，翻译less文件
		.pipe(cssnano()) //css缩进，压缩。css不需要合并，因为在less语句中可以相互导入
		.pipe(gulp.dest("dest/style"))
		.pipe(browserync.reload({
			stream:true
		}));
})


//JS合并 压缩 混淆
gulp.task('JSAction',function () {
	gulp.src("src/javascript/*.js")
		.pipe(concat1("all.js"))//因为是合并，所以需要指定合并以后的文件名称
		.pipe(uglify())
		.pipe(gulp.dest("dest/javascript"))
		.pipe(browserync.reload({
			stream:true
		}));
})



//img拷贝
gulp.task("copyImgAction",function () {
	
	gulp.src("src/images/*.*")
		.pipe(gulp.dest("dest/images"))
		.pipe(browserync.reload({
			stream:true
		}));

})


//html压缩

gulp.task("compassHtml",function () {
	gulp.src("src/*.html")
		.pipe(htmlmin({
			collapseWhitespace: true
		}))
		.pipe(gulp.dest("dest"))
		.pipe(browserync.reload({
			stream:true
		}));
})

//注册观察模式
gulp.task("watchAction",function () {
	browserync({
		server: {
			baseDir:["dest"]
		},	
	}, function(err, bs) {
    console.log(bs.options.getIn(["urls", "local"]));
    gulp.watch("src/styles/*.less",["styleAction"]);
    gulp.watch("src/javascript/*.js",["JSAction"]);
    gulp.watch("src/images/*.*",["copyImgAction"]);
    gulp.watch("src/*.html",["compassHtml"]);
});
})