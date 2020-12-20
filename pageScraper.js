const browser = require("./browser")

const scraperObject = {
    url: "https://fr.wikipedia.org/wiki/Pand%C3%A9mie_de_Covid-19",
    async scraper (browser) {
        let page = await browser.newPage();
        console.log('Navigating to ' + this.url);
        await page.goto(this.url)
    }
}

module.exports = scraperObject;