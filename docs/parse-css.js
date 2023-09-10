const jsdom = require("jsdom");
const { JSDOM } = jsdom;
const fs = require("fs");

if (typeof process.argv[2] !== undefined) {
    const data = fs.readFileSync(`${process.argv[2]}`, "utf8");
    const dom = new JSDOM(data);
    console.log(dom.window.document.querySelectorAll('link')[dom.window.document.querySelectorAll('link').length - 1]?.href);
}
