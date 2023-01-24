import puppeteer from "puppeteer";

//Feature 1
describe('Filter events by city', () => {
    let browser;
    let page;
    beforeAll(async () => {
        jest.setTimeout(50000);
        browser = await puppeteer.launch({ 
        });
        page = await browser.newPage();
        await page.goto('http://localhost:3000/');
        await page.waitForSelector('.event');
    })

    afterAll(() => {
        browser.close();
    })
    afterEach(async () => {
        await page.reload();
      });

    test('When user has not searched for a city, show upcoming events from all cities.', async () => {
        const numOfEvents = await page.$$eval('.EventList li', element => element.length);
        expect(numOfEvents).toBe(2);
    });
    test('User should see a list of suggestions when they search for a city.', async () => {
        await page.type('.city', 'Berlin');
        const suggestions = await page.$$eval('.suggestions li', element => element.length);
        expect(suggestions).toBe(2);
    });
    test('User can select a city from the suggested list.', async () => {
        await page.type('.city', 'Berlin');
        await page.click('.suggestions li');
        const place = await page.$eval('.event .place', element => element.innerText)
        expect(place).toContain('Berlin');
    });
})


// Feature 2
describe('show/hide an event datails', () => {
    let browser;
    let page;
    beforeAll(async () => {
        jest.setTimeout(50000);
        browser = await puppeteer.launch({ 
            // headless: false,
            // slowMo: 250, 
            // ignoreDefaultArgs: ['--disable-extensions'] 
        });
        page = await browser.newPage();
        await page.goto('http://localhost:3000/');
        await page.waitForSelector('.event');
    })

    afterAll(() => {
        browser.close();
    })

    test('An event element is collapsed by default', async () => {
        const eventDetails = await page.$('.event .event-details');
        expect(eventDetails).toBeNull();
    });
    test('User can expand an event to see its details', async () => {
        await page.click('.event .details-btn');
        const eventDetails = await page.$('.event .event-details');
        expect(eventDetails).toBeDefined();
    });
    test('User can collapse an event to hide its details', async () => {
        await page.click('.event .details-btn');
        const eventDetails = await page.$('.event .event-details');
        expect(eventDetails).toBeNull();
    });
});