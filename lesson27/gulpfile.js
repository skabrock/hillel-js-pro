const { src, dest, parallel, series, watch } = require("gulp");
const htmlmin = require("gulp-htmlmin");
const uncache = require("gulp-uncache");
const concat = require("gulp-concat");
const babel = require("gulp-babel");
const del = require("del");
const sass = require("gulp-sass");
const cleanCSS = require("gulp-clean-css");
const autoprefixer = require("gulp-autoprefixer");
const rename = require("gulp-rename");
const browserSync = require("browser-sync").create();
const uglify = require("gulp-uglify");

function js() {
  return src("src/js/**/*.js")
    .pipe(concat("scripts.js"))
    .pipe(babel())
    .pipe(uglify())
    .pipe(dest("dist"));
}

function clear() {
  return del("dist/**", { force: true });
}

function html() {
  return src("src/index.html")
    .pipe(uncache())
    .pipe(htmlmin({ collapseWhitespace: true }))
    .pipe(dest("dist"));
}

function css() {
  return src("src/styles/index.scss")
    .pipe(sass())
    .pipe(
      autoprefixer({
        overrideBrowserslist: ["last 20 versions"],
        cascade: false,
      })
    )
    .pipe(cleanCSS({ compatibility: "ie8" }))
    .pipe(rename("main.css"))
    .pipe(dest("dist"));
}

function watchAssets() {
  watch("src/styles/**/*.{sass,scss}", series(css));
  watch("src/js/**/*.js", series(js));
  watch("src/index.html", series(html));
  watch("src").on("change", browserSync.reload);
}

function browserSyncServer() {
  browserSync.init({
    server: {
      baseDir: "./dist",
    },
  });
}

exports.html = html;
exports.css = css;
exports.js = js;
exports.clear = clear;

exports.default = series(
  clear,
  parallel(html, css, js),
  parallel(watchAssets, browserSyncServer)
);
