const puppeteer = require('puppeteer');
const notifier = require('node-notifier');

(async () => {
    setInterval(async () => {
        const browser = await puppeteer.launch();
        const page = await browser.newPage();
        await page.goto('https://www.amazon.in/New-Apple-iPhone-Pro-256GB/dp/B08L5T31M6/ref=sr_1_3?dchild=1&keywords=iPhone+12+pro+max&qid=1611841510&sr=8-3')
        const price = await page.evaluate(() => {
            return document.querySelector('#priceblock_ourprice').innerText
        });
        notifier.notify({
            title: 'Check your updated price',
            message: `Your updated price is ${price}`
        });
        await browser.close();
    }, 10000);
})();