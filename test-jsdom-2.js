const fs = require('fs');
const jsdom = require('jsdom');
const { JSDOM } = jsdom;

const html = fs.readFileSync('index.html', 'utf8');

const virtualConsole = new jsdom.VirtualConsole();
virtualConsole.on("jsdomError", (error) => {
    fs.writeFileSync('jsdom_error.log', error.stack || error.toString());
});

const dom = new JSDOM(html, {
    runScripts: "dangerously",
    virtualConsole
});

setTimeout(() => {
    process.exit(0);
}, 1000);
