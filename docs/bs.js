var browserSync = require("browser-sync");

browserSync({
    port: 8080,
    ui: {
        port: 9090
    },
    watch: true,
    files: ["./**/*.scss", "./**/*.js", "./**/*.html", "./**/*.php"],
    localOnly: true,
    https: {
        key: "C:\\Users\\CharlesPeter\\OneDrive - 2X LLC\\devel\\ssl\\localhost\\localhost-key.pem",
        cert: "C:\\Users\\CharlesPeter\\OneDrive - 2X LLC\\devel\\ssl\\localhost\\localhost.pem"
    }
});