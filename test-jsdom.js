const fs = require('fs');
const jsdom = require('jsdom');
const { JSDOM } = jsdom;

const html = fs.readFileSync('index.html', 'utf8');

const virtualConsole = new jsdom.VirtualConsole();
virtualConsole.on("error", (error) => {
    console.error("JSDOM Error:", error);
});
virtualConsole.on("jsdomError", (error) => {
    console.error("JSDOM Internal Error:", error);
});

const dom = new JSDOM(html, {
    runScripts: "dangerously",
    virtualConsole
});

setTimeout(() => {
    const reveals = dom.window.document.querySelectorAll('.reveal');
    let activeCount = 0;
    reveals.forEach(r => {
        if (r.classList.contains('active')) activeCount++;
    });
    console.log(`Found ${reveals.length} elements with .reveal class.`);
    console.log(`${activeCount} of them have the .active class.`);
    process.exit(0);
}, 2000);
