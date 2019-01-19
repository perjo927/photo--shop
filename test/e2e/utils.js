// Turn on/off headless
// const browser = await puppeteer.launch(headlessFalse);
const setHeadless = (options, isHeadless) => {
    return { ...options, headless: isHeadless };
};

// Slow it down
// const browser = await puppeteer.launch({
//     headless: false,
//     slowMo: 250 // slow down by 250ms
//   });
const setSlowMotion = (options, speed) =>  { 
    return { ...options, slowMo: speed };
};

// Stop test execution and use a debugger in browser
// Use {devtools: true} when launching Puppeteer:
// const browser = await puppeteer.launch({devtools: true});
const setDevtools = (options, hasDevtools) => {
    return { ...options, devtools: hasDevtools };
};

// Capture console output 
//  page.on('console', msg => console.log('PAGE LOG:', msg.text()));
//  await page.evaluate(() => console.log(`url is ${location.href}`));
const captureConsoleOutput = (page) => {
    return page.on('console', msg => console.log('PAGE LOG:', msg.text()));
}

// Add an evaluate statement with debugger inside
// / add debugger to an existing evaluate statement:
// await page.evaluate(() => {debugger;});
// The test will now stop executing in the above evaluate statement, and chromium will stop in debug mode.
const evaluateDebugger = async (page) => {
    return await page.evaluate(() => {debugger;});
};

const blockImages = (page) => {
    page.on('request', request => {
        if (request.resourceType() === 'image')
          request.abort();
        else
          request.continue();
    });
};


exports.utils = { 
    setDevtools, 
    setHeadless, 
    setSlowMotion, 
    captureConsoleOutput, 
    evaluateDebugger,
    blockImages
};