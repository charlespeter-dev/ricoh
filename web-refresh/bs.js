var browserSync = require("browser-sync");

browserSync({
    port: 5555,
    ui: {
        port: 5252
    },
    watch: true,
    files: ["./**/*.scss", "./**/*.css", "./**/*.js", "./**/*.html", "./**/*.php"],
    localOnly: true,
    https: {
        key: "C:\\tools\\mkcert\\localhost-key.pem",
        cert: "C:\\tools\\mkcert\\localhost.pem"
    }
});