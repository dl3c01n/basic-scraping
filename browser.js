const puppeteer = require('puppeteer');

const startBrowser = async () => {
    let browser;

    try {
        console.log("Opening the browser...");
        browser = await puppeteer.launch({
            headless: false,
            args: ["--disable-setuid-sandbox"], 
            'ignoreHTTPSErrors': true
        })
    } catch (error) {
        console.error("Unable to create", error)
    }
    return browser;
}

module.exports = {
    startBrowser
}