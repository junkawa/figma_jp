const defaultLanguage = 'ja';

// Toolbar > MainMenu
const toolbarSelector = 'div.toolbar_view--toolbar--2396w';
const mainMenuSelector = toolbarSelector+' > '+'div:nth-child(1)';
const mainMenuTextSelector = '.multilevel_dropdown--name--1abLT';

const mainMenuMap = [
  {
    'en': 'Back to Files',
    'ja': 'プロジェクトに戻る',
  },
  {
    'en': 'File',
    'ja': 'ファイル',
  },
  {
    'en': 'Edit',
    'ja': '編集',
  },
  {
    'en': 'View',
    'ja': '表示',
  },
  {
    'en': 'Object',
    'ja': 'オブジェクト',
  },
  {
    'en': 'Vector',
    'ja': 'ベクター',
  },
  {
    'en': 'Text',
    'ja': 'テキスト',
  },
  {
    'en': 'Arrange',
    'ja': '整列',
  },
  {
    'en': 'Plugins',
    'ja': 'プラグイン',
  },
  {
    'en': 'Integrations',
    'ja': '連携',
  },
  {
    'en': 'Preferences',
    'ja': '環境設定',
  },
  {
    'en': 'Libraries',
    'ja': 'ライブラリ',
  },
  {
    'en': 'Help and Account',
    'ja': 'ヘルプとアカウント',
  },
];

const timeout = 90000; // ミリ秒

describe('Figma', () => {
  let page;

  beforeAll(async () => {
    const ENV_PATH = require('path').join(__dirname, '.env');
    require('dotenv').config({path: ENV_PATH});

    page = await global.__BROWSER__.newPage();
    await page.goto(process.env.FIGMA_FILE_URL);

    await page.type('input[name=\'email\']', process.env.FIGMA_EMAIL);
    await page.type('input[name=\'password\']', process.env.FIGMA_PASSWORD);
    await page.click('button[type=\'submit\']');

    // await page.waitForNavigation({waituntil: 'domcontentloaded'});
    await page.waitForNavigation(
        {waitUntil: ['load', 'networkidle2'], timeout: 60000});
    // console.log('finish waitForNavigation');
    await page.waitForSelector('.toolbar_view--toolbar--2396w');
    // console.log('finish waitForSelector');
    await page.waitForTimeout(3000); // ミリ秒
    // console.log('finish waitForTimeout');
  }, timeout);

  afterAll(async () => {
  });

  beforeEach(async () => {
    await page.keyboard.press('Escape');
  });

  it('メインメニューのトップレベルが翻訳されている', async () => {
    await page.click(mainMenuSelector);

    const topLevelMenuLabels =
    await page.$$eval(mainMenuTextSelector,
        (divs) => divs.map((div) => div.innerHTML));

    // console.log(topLevelMenuLavels);
    // await page.screenshot({path: 'screenshot.png'});
    topLevelMenuLabels.forEach((label, index) => {
      expect(label).toMatch(mainMenuMap[index][defaultLanguage]);
    });
  });
});


// https://github.com/marketplace/actions/puppeteer-headful
// https://stackoverflow.com/questions/54814323/puppeteer-how-to-download-entire-web-page-for-offline-use
// https://jestjs.io/docs/ja/next/puppeteer

// const html = await page.content();
// const fs = require('fs');
// process.env.PWD
// fs.writeFileSync('path/to/file.json', html);
