const jsdom = require("jsdom");
const { JSDOM } = jsdom;
const fs = require("fs");

if (typeof process.argv[2] !== undefined && typeof process.argv[3] !== undefined) {
    const data = fs.readFileSync(`${process.argv[2]}`, "utf8");
    const dom = new JSDOM(data);
    console.log(dom.window.document.querySelector(`${process.argv[3]}`)?.outerHTML);
}
