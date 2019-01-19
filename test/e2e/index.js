const puppeteer = require('puppeteer');
const devices = require('puppeteer/DeviceDescriptors');
const utils = require('./utils');

// Create reports directory
var fs = require('fs');
var dir = './test/e2e/reports';

if (!fs.existsSync(dir)){
    fs.mkdirSync(dir);
}

// Desktop Screenshot
(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto('http://localhost:353');
  await page.screenshot({path: './test/e2e/reports/screenshot-desktop.png', fullPage: true});

  await browser.close();
})();

// Mobile Screenshot
(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.emulate(devices['iPhone 6']);
  await page.goto('http://localhost:353');
  await page.screenshot({path: './test/e2e/reports/screenshot-mobile.png', fullPage: true});

  await browser.close();
})();


// Generate PDF
(async () => {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.goto('http://localhost:353', {waitUntil: 'networkidle2'});
    await page.pdf({path: './test/e2e/reports/content.pdf', format: 'A4'});

    await browser.close();
})();

// Evaluate
(async () => {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.goto('http://localhost:353');

    // Get the "viewport" of the page, as reported by the page.
    const dimensions = await page.evaluate(() => {
      return {
        width: document.documentElement.clientWidth,
        height: document.documentElement.clientHeight,
        deviceScaleFactor: window.devicePixelRatio
      };
    });

    console.log('Dimensions:', dimensions);

    await browser.close();
  })();

// Test user flow
(async () => {
    
  const browser = await puppeteer.launch();
  const page = await browser.newPage();

  await page.goto('http://localhost:353');

  // Wait for picture #3 and click "buy".
  const buyPicSelector = ".photo [data-item='3'] span";
  await page.waitForSelector(buyPicSelector);
  await page.click(buyPicSelector);

  // Check credits
  const creditsSelector = "#nav-credits span";
  const credits = await page.evaluate(creditsSelector => {
    const number = document.querySelector(creditsSelector).textContent;
    return number;
  }, creditsSelector);
  console.log(`Credits: ${credits}`)

  // Click on the cart
  const cartSelector = '#nav-cart';
  await page.waitForSelector(cartSelector);
  await page.click(cartSelector);

  const cartItemSelector = '.cart-item';
  await page.waitForSelector(cartItemSelector);

  // Extract the results from the page.
  const purchase = await page.evaluate(cartItemSelector => {
    const item = document.querySelector(cartItemSelector);
    const title = item.textContent.trim();
    return title;
  }, cartItemSelector);
  console.log(`Purchase: ${purchase}`);

  await browser.close();
})();
