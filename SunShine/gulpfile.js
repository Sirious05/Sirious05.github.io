"use strict";
const gulp = require("gulp");
const webpack = require("webpack-stream");
const browsersync = require("browser-sync");
const dist = "./dist/";
const sass = require('./node_modules/gulp-sass');
const cleanCSS = require('./node_modules/gulp-clean-css');
const autoprefixer = require('./node_modules/gulp-autoprefixer');
const rename = require("./node_modules/gulp-rename");
const imagemin = require('./node_modules/gulp-imagemin');
const htmlmin = require('./node_modules/gulp-htmlmin');

gulp.task("copy-html", () => {
    return gulp.src("./src/*.html")
        .pipe(gulp.dest(dist))
        .pipe(browsersync.stream());
});
gulp.task("build-js", () => {
    return gulp.src("./src/js/script.js")
        .pipe(webpack({
            mode: 'development',
            output: {
                filename: 'script.js'
            },
            watch: false,
            devtool: "source-map",
            module: {
                rules: [{
                    test: /\.m?js$/,
                    exclude: /(node_modules|bower_components)/,
                    use: {
                        loader: 'babel-loader',
                        options: {
                            presets: [
                                ['@babel/preset-env', {
                                    debug: true,
                                    corejs: 3,
                                    useBuiltIns: "usage"
                                }]
                            ]
                        }
                    }
                }]
            }
        }))
        .pipe(gulp.dest(dist))
        .on("end", browsersync.reload);
});

gulp.task("copy-assets", () => {
    return gulp.src("./src/assets/**/*.*")
        .pipe(gulp.dest(dist + "/assets"))
        .on("end", browsersync.reload);
});
gulp.task('styles', function () {
    return gulp.src("src/assets/sass/**/*.+(scss|sass)")
        .pipe(sass({
            outputStyle: 'compressed'
        }).on('error', sass.logError))
        .pipe(rename({
            suffix: '.min',
            prefix: ''
        }))
        .pipe(autoprefixer())
        .pipe(cleanCSS({
            compatibility: 'ie8'
        }))
        .pipe(gulp.dest("dist/assets/css"))
        .pipe(browsersync.stream());
});

gulp.task('watch', function () {
    browsersync.init({
        server: {
            baseDir: "./dist/",
            serveStaticOptions: {
                extensions: ["html"]
            }
        },
        port: 4000,
        notify: true
    });
    gulp.watch("src/*.html", gulp.parallel('copy-html')).on('change', browsersync.reload);
    gulp.watch("./src/assets/**/*.*", gulp.parallel("copy-assets"));
    gulp.watch("./src/js/**/*.js", gulp.parallel("build-js"));
    gulp.watch("src/assets/sass/**/*.+(scss|sass|css)", gulp.parallel('styles'));
});
gulp.task('fonts', function () {
    return gulp.src("src/assets/fonts/**/*")
        .pipe(gulp.dest("dist/assets/fonts"));
});

gulp.task('icons', function () {
    return gulp.src("./src/assets/icons/**/*")
        .pipe(gulp.dest("dist/assets/icons"));
});
gulp.task('images', function () {
    return gulp.src("./src/assets/img/**/*")
        .pipe(imagemin())
        .pipe(gulp.dest("dist/assets/img"));
});
gulp.task("build", gulp.parallel("copy-html", "copy-assets", "build-js", 'fonts', 'icons', 'images'));

gulp.task("build-prod-js", () => {
    return gulp.src("./src/js/script.js")
        .pipe(webpack({
            mode: 'production',
            output: {
                filename: 'script.js'
            },
            module: {
                rules: [{
                    test: /\.m?js$/,
                    exclude: /(node_modules|bower_components)/,
                    use: {
                        loader: 'babel-loader',
                        options: {
                            presets: [
                                ['@babel/preset-env', {
                                    corejs: 3,
                                    useBuiltIns: "usage"
                                }]
                            ]
                        }
                    }
                }]
            }
        }))
        .pipe(gulp.dest(dist));
});
gulp.task("default", gulp.parallel("watch", "build"));