const pageScraper = require('./pageScraper');

const scrapeAll = async (browserInstance) => {
    let browser;
    try {
        browser = await browserInstance;
        await pageScraper.scraper(browser)
    } catch (error) {
        console.error("Unabled to create browser", error)
    }
}

module.exports = (browserInstance) => scrapeAll(browserInstance)