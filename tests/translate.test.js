const defaultLanguage = 'ja';

// Label
const mainMenuLabelSelector = '.multilevel_dropdown--name--1abLT';
const mainMenuTopLabelSelector = mainMenuLabelSelector;
const mainMenu2ndLabelSelector =
  'div[name="mainMenu"] div[name="mainMenu"] '+
  mainMenuLabelSelector;
const mainMenu3rdLabelSelector =
  'div[name="mainMenu"] div[name="mainMenu"] div[name="mainMenu"] '+
  mainMenuLabelSelector;

// Toolbar
const toolbarSelector = 'div.toolbar_view--toolbar--2396w';
const toolbarClickSelector = {
  'Menu': toolbarSelector+' > div:nth-child(1)',
};

// Toolbar > Menu
const menuBase =
  'div[name="mainMenu"] > div > div > div:nth-child(2) > div';
const menu2ndBase =
  'div[name="mainMenu"] div[name="mainMenu"] > div > div';
const mainMenuClickSelector = {
  'File': menuBase + ' > div:nth-child(2)',
  'Edit': menuBase + ' > div:nth-child(3)',
  'Edit > Copy as': menu2ndBase + ' > div:nth-child(4)',
  'View': menuBase + ' > div:nth-child(4)',
  'View > Panels': menu2ndBase + ' > div:nth-child(12)',
  'Object': menuBase + ' > div:nth-child(5)',
  'Object > Main Component': menu2ndBase + ' > div:nth-child(11)',
  'Object > Boolean Groups': menu2ndBase + ' > div:nth-child(27)',
  'Vector': menuBase + ' > div:nth-child(6)',
  'Text': menuBase + ' > div:nth-child(7)',
  'Text > Align': menu2ndBase + ' > div:nth-child(19)',
  'Arrange': menuBase + ' > div:nth-child(8)',
  // '---'
  'Plugins': menuBase + ' > div:nth-child(10)',
  'Integrations': menuBase + ' > div:nth-child(11)',
  'Preferences': menuBase + ' > div:nth-child(12)',
  // 'Libraries'
  // '---'
  'Help and Account': menuBase + ' > div:nth-child(15)',
};

const mainMenuMap = {};

mainMenuMap['Top'] = [
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
mainMenuMap['File'] = [
  {
    'en': 'New',
    'ja': '新規作成',
  },
  {
    'en': 'New from Sketch File…',
    'ja': 'Sketchファイルを開く',
  },
  {
    'en': 'Place Image',
    'ja': '画像を配置',
  },
  {
    'en': 'Save as .fig…',
    'ja': '.figで保存',
  },
  {
    'en': 'Save to Version History…',
    'ja': 'バージョン履歴を追加',
  },
  {
    'en': 'Show Version History',
    'ja': 'バージョン履歴を表示',
  },
  {
    'en': 'Export…',
    'ja': '書き出し',
  },
  {
    'en': 'Export Frames to PDF…',
    'ja': 'PDFで書き出し',
  },
];
mainMenuMap['Edit'] = [
  {
    'en': 'Undo',
    'ja': '取り消し',
  },
  {
    'en': 'Redo',
    'ja': 'やり直し',
  },
  {
    'en': 'Copy as',
    'ja': 'コピー',
  },
  {
    'en': 'Paste Over Selection',
    'ja': '選択したものの上にペースト',
  },
  {
    'en': 'Duplicate',
    'ja': '複製',
  },
  {
    'en': 'Delete',
    'ja': '削除',
  },
  {
    'en': 'Set Default Properties',
    'ja': 'プロパティのデフォルトに設定',
  },
  {
    'en': 'Copy Properties',
    'ja': 'プロパティをコピー',
  },
  {
    'en': 'Paste Properties',
    'ja': 'プロパティをペースト',
  },
  {
    'en': 'Pick Color',
    'ja': '色を選択',
  },
  {
    'en': 'Select All',
    'ja': 'すべてを選択',
  },
  {
    'en': 'Select None',
    'ja': '選択解除',
  },
  {
    'en': 'Select Inverse',
    'ja': '他を選択',
  },
  {
    'en': 'Select All with Same Properties',
    'ja': '共通のプロパティをすべて選択',
  },
  {
    'en': 'Select All with Same Fill',
    'ja': '共通の塗りをすべて選択',
  },
  {
    'en': 'Select All with Same Stroke',
    'ja': '共通の線をすべて選択',
  },
  {
    'en': 'Select All with Same Effect',
    'ja': '共通のエフェクトをすべて選択',
  },
  {
    'en': 'Select All with Same Text Properties',
    'ja': '共通のテキストプロパティをすべて選択',
  },
  {
    'en': 'Select All with Same Font',
    'ja': '共通のフォントを選択',
  },
  {
    'en': 'Select All with Same Instance',
    'ja': '共通のインスタンスを選択',
  },
];
mainMenuMap['Edit > Copy as'] = [
  {
    'en': 'Copy as Text',
    'ja': 'テキストとしてコピー',
  },
  {
    'en': 'Copy as CSS',
    'ja': 'CSSとしてコピー',
  },
  {
    'en': 'Copy as SVG',
    'ja': 'SVGとしてコピー',
  },
];
mainMenuMap['View'] = [
  {
    'en': 'Pixel Grid',
    'ja': 'ピクセルグリッドを表示',
  },
  {
    'en': 'Layout Grids',
    'ja': 'レイアウトグリッドを表示',
  },
  {
    'en': 'Rulers',
    'ja': '定規を表示',
  },
  {
    'en': 'Outlines',
    'ja': 'アウトラインを表示',
  },
  {
    'en': 'Pixel Preview',
    'ja': 'ピクセルでプレビュー',
  },
  {
    'en': 'Mask Outlines',
    'ja': 'マスクのアウトラインを表示',
  },
  {
    'en': 'Frame Outlines',
    'ja': 'フレームのアウトラインを表示',
  },
  {
    'en': 'Resource Use',
    'ja': 'リソース使用量を表示',
  },
  {
    'en': 'Show/Hide UI',
    'ja': 'UIを表示/非表示',
  },
  {
    'en': 'Multiplayer Cursors',
    'ja': '共同作業者のカーソルを表示',
  },
  {
    'en': 'Panels',
    'ja': 'パネル',
  },
  {
    'en': 'Zoom In',
    'ja': 'ズームイン',
  },
  {
    'en': 'Zoom Out',
    'ja': 'ズームアウト',
  },
  {
    'en': 'Zoom to 100%',
    'ja': '100％にズーム',
  },
  {
    'en': 'Zoom to Fit',
    'ja': '画面に合わせてすべてをズーム',
  },
  {
    'en': 'Zoom to Selection',
    'ja': '選択したものに合わせてズーム',
  },
  {
    'en': 'Previous Page',
    'ja': '前のページ',
  },
  {
    'en': 'Next Page',
    'ja': '次のページ',
  },
  {
    'en': 'Zoom to Previous Frame',
    'ja': '前のフレームにズーム',
  },
  {
    'en': 'Zoom to Next Frame',
    'ja': '次のフレームにズーム',
  },
  {
    'en': 'Find Previous Frame',
    'ja': '前のフレームに移動',
  },
  {
    'en': 'Find Next Frame',
    'ja': '次のフレームに移動',
  },
];
mainMenuMap['View > Panels'] = [
  {
    'en': 'Open Layers Panel',
    'ja': 'レイヤーパネルを表示',
  },
  {
    'en': 'Open Assets Panel',
    'ja': 'アセットパネルを表示',
  },
  {
    'en': 'Open Design Panel',
    'ja': 'デザインパネルを表示',
  },
  {
    'en': 'Open Prototype Panel',
    'ja': 'プロトタイプパネルを表示',
  },
  {
    'en': 'Open Code Panel',
    'ja': 'コードパネルを表示',
  },
  {
    'en': 'Show Left Sidebar',
    'ja': 'サイドバーを表示',
  },
];
mainMenuMap['Object'] = [
  {
    'en': 'Group Selection',
    'ja': 'グループ化',
  },
  {
    'en': 'Frame Selection',
    'ja': 'フレーム化',
  },
  {
    'en': 'Ungroup Selection',
    'ja': 'グループ解除',
  },
  {
    'en': 'Use as Mask',
    'ja': 'マスクを作成',
  },
  {
    'en': 'Restore Default Thumbnail',
    'ja': 'デフォルトのサムネイルに戻す',
  },
  {
    'en': 'Add Auto Layout',
    'ja': 'オートレイアウトを追加',
  },
  {
    'en': 'Create Component',
    'ja': 'コンポーネントを作成',
  },
  {
    'en': 'Reset Instance',
    'ja': 'インスタンスをリセット',
  },
  {
    'en': 'Detach Instance',
    'ja': 'インスタンスを解除',
  },
  {
    'en': 'Main Component',
    'ja': 'メインコンポーネント',
  },
  {
    'en': 'Bring to Front',
    'ja': '最前面へ',
  },
  {
    'en': 'Bring Forward',
    'ja': '前面へ',
  },
  {
    'en': 'Send Backward',
    'ja': '背面へ',
  },
  {
    'en': 'Send to Back',
    'ja': '最背面へ',
  },
  {
    'en': 'Flip Horizontal',
    'ja': '水平方向に反転',
  },
  {
    'en': 'Flip Vertical',
    'ja': '垂直方向に反転',
  },
  {
    'en': 'Rotate 180˚',
    'ja': '180°回転',
  },
  {
    'en': 'Rotate 90˚ Left',
    'ja': '左に90°回転',
  },
  {
    'en': 'Rotate 90˚ Right',
    'ja': '右に90°回転',
  },
  {
    'en': 'Flatten Selection',
    'ja': '複合パスに拡張',
  },
  {
    'en': 'Outline Stroke',
    'ja': 'パスのアウトライン',
  },
  {
    'en': 'Boolean Groups',
    'ja': '複合シェイプを作成',
  },
  {
    'en': 'Rasterize Selection',
    'ja': 'ラスタライズ',
  },
  {
    'en': 'Show/Hide Selection',
    'ja': '選択したものを表示/非表示',
  },
  {
    'en': 'Lock/Unlock Selection',
    'ja': '選択したものをロック/ロック解除',
  },
  {
    'en': 'Hide Other Layers',
    'ja': '他のレイヤーを隠す',
  },
  {
    'en': 'Collapse Layers',
    'ja': 'レイヤーを閉じる',
  },
  {
    'en': 'Remove Fill',
    'ja': '塗りを削除',
  },
  {
    'en': 'Remove Stroke',
    'ja': '線を削除',
  },
  {
    'en': 'Swap Fill and Stroke',
    'ja': '塗りと線を入れ替え',
  },
];
// オブジェクト選択時の Menu > Object
mainMenuMap['Object[Selected]'] = [
  {
    'en': 'Set as Thumbnail',
    'ja': 'ファイルのサムネイルに設定',
  },
];
// const mainMenuObjectSelectedMap = (() => {
//  const map = Array.from(mainMenuMap['Object']);
//  map[4] = mainMenuMap['Object[Selected]'][0];
//  return map;
// })();
mainMenuMap['Object > Main Component'] = [
  {
    'en': 'Go to Main Component',
    'ja': 'メインコンポーネントへ移動',
  },
  {
    'en': 'Push Overrides to Main Component',
    'ja': 'オーバーライドをメインに反映',
  },
  {
    'en': 'Restore Main Component',
    'ja': 'メインコンポーネントを復元',
  },
];
mainMenuMap['Object > Boolean Groups'] = [
  {
    'en': 'Union Selection',
    'ja': '合体',
  },
  {
    'en': 'Subtract Selection',
    'ja': '前面オブジェクトで型抜き',
  },
  {
    'en': 'Intersect Selection',
    'ja': '交差',
  },
  {
    'en': 'Exclude Selection',
    'ja': '中マド',
  },
];
mainMenuMap['Vector'] = [
  {
    'en': 'Join Selection',
    'ja': 'アンカーポイントを連結',
  },
  {
    'en': 'Smooth Join Selection',
    'ja': 'アンカーポイントをスムーズに連結',
  },
  {
    'en': 'Delete and Heal Selection',
    'ja': 'アンカーポイントを削除',
  },
];
mainMenuMap['Text'] = [
  {
    'en': 'Bold',
    'ja': '太字',
  },
  {
    'en': 'Italic',
    'ja': '斜体',
  },
  {
    'en': 'Underline',
    'ja': '下線',
  },
  {
    'en': 'Strikethrough',
    'ja': '打ち消し線',
  },
  {
    'en': 'Original Case',
    'ja': '大文字小文字の変換なし',
  },
  {
    'en': 'Upper Case',
    'ja': 'すべて大文字',
  },
  {
    'en': 'Lower Case',
    'ja': 'すべて小文字',
  },
  {
    'en': 'Increase Font Size',
    'ja': 'フォントサイズを大きく',
  },
  {
    'en': 'Decrease Font Size',
    'ja': 'フォントサイズを小さく',
  },
  {
    'en': 'Increase Font Weight',
    'ja': 'フォントウェイトを大きく',
  },
  {
    'en': 'Decrease Font Weight',
    'ja': 'フォントウェイトを小さく',
  },
  {
    'en': 'Increase Line Height',
    'ja': '行送りを増やす',
  },
  {
    'en': 'Decrease Line Height',
    'ja': '行送りを減らす',
  },
  {
    'en': 'Increase Letter Spacing',
    'ja': '文字の間隔を広げる',
  },
  {
    'en': 'Decrease Letter Spacing',
    'ja': '文字の間隔を詰める',
  },
  {
    'en': 'Align',
    'ja': '文字揃え',
  },
];
mainMenuMap['Text > Align'] = [
  {
    'en': 'Text Align Left',
    'ja': '左揃え',
  },
  {
    'en': 'Text Align Center',
    'ja': '中央揃え',
  },
  {
    'en': 'Text Align Right',
    'ja': '右揃え',
  },
  {
    'en': 'Text Align Justified',
    'ja': '均等揃え',
  },
  {
    'en': 'Text Align Top',
    'ja': 'ボックスの上揃え',
  },
  {
    'en': 'Text Align Middle',
    'ja': 'ボックスの垂直方向中央揃え',
  },
  {
    'en': 'Text Align Bottom',
    'ja': 'ボックスの下揃え',
  },
];
mainMenuMap['Arrange'] = [
  {
    'en': 'Round to Pixel',
    'ja': 'ピクセルに合わせて配置',
  },
  {
    'en': 'Align Left',
    'ja': '水平方向左に整列',
  },
  {
    'en': 'Align Horizontal Centers',
    'ja': '水平方向中央に整列',
  },
  {
    'en': 'Align Right',
    'ja': '水平方向右に整列',
  },
  {
    'en': 'Align Top',
    'ja': '垂直方向上に整列',
  },
  {
    'en': 'Align Vertical Centers',
    'ja': '垂直方向中央に整列',
  },
  {
    'en': 'Align Bottom',
    'ja': '垂直方向下に整列',
  },
  {
    'en': 'Tidy Up',
    'ja': '選択状態に応じて自動で整列',
  },
  {
    'en': 'Pack Horizontal',
    'ja': '水平方向へ間隔なしで整列',
  },
  {
    'en': 'Pack Vertical',
    'ja': '垂直方向へ間隔なしで整列',
  },
  {
    'en': 'Distribute Horizontal Spacing',
    'ja': '水平方向へ等間隔に分布',
  },
  {
    'en': 'Distribute Vertical Spacing',
    'ja': '垂直方向へ等間隔に分布',
  },
  {
    'en': 'Distribute Left',
    'ja': '左を基準に、水平方向へ分布',
  },
  {
    'en': 'Distribute Horizontal Centers',
    'ja': '中心を基準に、水平方向へ分布',
  },
  {
    'en': 'Distribute Right',
    'ja': '右を基準に、水平方向へ分布',
  },
  {

    'en': 'Distribute Top',
    'ja': '上を基準に、垂直方向へ分布',
  },
  {
    'en': 'Distribute Vertical Centers',
    'ja': '中心を基準に、垂直方向へ分布',
  },
  {
    'en': 'Distribute Bottom',
    'ja': '下を基準に、垂直方向へ分布',
  },
];
mainMenuMap['Plugins'] = [
  {
    'en': 'Run Last Plugin',
    'ja': '最後に使ったプラグインを実行',
  },
  {
    'en': 'Manage Plugins…',
    'ja': 'プラグインを管理',
  },
  /*
  // desktop app only
  {
    'en': 'Development',
    'ja': '開発',
  },
  {
    'en': 'New Plugin…',
    'ja': 'プラグインを作成',
  },
  {
    'en': 'Open Console',
    'ja': 'コンソールを表示',
  },
  {
    'en': 'Use Developer VM',
    'ja': 'デベロッパーツールを使用',
  },
  */
];
mainMenuMap['Integrations'] = [
  /*
  {
    'en': 'Avocode',
    'ja': 'Avocodeと連携',
  },
  {
    'en': 'Zeplin',
    'ja': 'Zeplinと連携',
  },
  */
  {
    'en': 'Dribbble',
    'ja': 'Dribbbleと連携',
  },
];
mainMenuMap['Preferences'] = [
  {
    'en': 'Snap to Geometry',
    'ja': 'ジオメトリにスナップ',
  },
  {
    'en': 'Snap to Objects',
    'ja': 'オブジェクトにスナップ',
  },
  {
    'en': 'Snap to Pixel Grid',
    'ja': 'ピクセルグリッドにスナップ',
  },
  {
    'en': 'Keep Tool Selected after Use',
    'ja': '使用したツールを保持する',
  },
  {
    'en': 'Highlight Layers on Hover',
    'ja': 'ホバーでレイヤーをハイライト表示',
  },
  {
    'en': 'Rename Duplicated Layers',
    'ja': '複製したレイヤーをリネーム',
  },
  {
    'en': 'Show Dimensions on Objects',
    'ja': 'オブジェクトのサイズを表示',
  },
  {
    'en': 'Hide Canvas UI During Changes',
    'ja': '変形中にキャンバス表示を非表示',
  },
  {
    'en': 'Keyboard Zooms into Selection',
    'ja': '選択対象にキーボードズーム',
  },
  {
    'en': 'Substitute Smart Quotes',
    'ja': 'スマートクォート（ “ ” ）に変換入力',
  },
  {
    'en': 'Show Google Fonts',
    'ja': 'Googleフォントを表示',
  },
  {
    'en': 'Flip Objects While Resizing',
    'ja': 'サイズ変更中にオブジェクトを反転',
  },
  {
    'en': 'Invert Zoom Direction',
    'ja': 'ホイールでのズームの方向を反転',
  },
  {
    'en': 'Use Number Keys for Opacity',
    'ja': 'テンキーで不透明度を変更',
  },
  {
    'en': 'Nudge Amount…',
    'ja': 'テンキー操作の値',
  },
];
mainMenuMap['Help and Account'] = [
  {
    'en': 'Help Page',
    'ja': 'ヘルプページ',
  },
  {
    'en': 'Keyboard Shortcuts',
    'ja': 'キーボードショートカット',
  },
  {
    'en': 'Community Forum',
    'ja': 'コミュニティフォーラム',
  },
  {
    'en': 'Video Tutorials',
    'ja': 'ビデオチュートリアル',
  },
  {
    'en': 'Release Notes',
    'ja': 'リリースノート',
  },
  {
    'en': 'Open Font Settings',
    'ja': 'フォント設定を開く',
  },
  {
    'en': 'Legal Summary',
    'ja': '利用規約',
  },
  {
    'en': 'Account Settings',
    'ja': 'アカウント設定',
  },
  {
    'en': 'Log Out',
    'ja': 'ログアウト',
  },
];

const timeout = 90000; // ミリ秒

describe('Figma File', () => {
  let page;

  beforeAll(async () => {
    const ENV_PATH = require('path').join(__dirname, '.env');
    require('dotenv').config({path: ENV_PATH});

    page = await global.__BROWSER__.newPage();
    // await page.setViewport({width: 1440, height: 900});

    await page.goto(process.env.FIGMA_FILE_URL);

    await page.type('input[name=\'email\']', process.env.FIGMA_EMAIL);
    await page.type('input[name=\'password\']', process.env.FIGMA_PASSWORD);
    await page.click('button[type=\'submit\']');

    await page.waitForNavigation(
        {waitUntil: ['load', 'networkidle2'], timeout: 60000});
    await page.waitForSelector('.toolbar_view--toolbar--2396w');
    await page.waitForTimeout(3000); // ミリ秒
    // console.log('finish waitForTimeout');
    // await page.screenshot({path: 'screenshot.png'});
  }, timeout);

  afterAll(async () => {
  });

  beforeEach(async () => {
    // メニュー表示の初期化
    [...Array(5)].map( async () => await page.keyboard.press('Escape'));
    await page.waitForTimeout(100); // ミリ秒
  });

  // async function printLabels(selector) {
  //   const labels = await page.$$eval(selector,
  //       (divs) => divs.map((div) => div.innerHTML));
  //   console.log(labels);
  // }

  async function compareLabels(selector, map) {
    const labels = await page.$$eval(selector,
        (divs) => divs.map((div) => div.innerHTML));

    labels.forEach((label, index) => {
      expect(label).toMatch(map[index][defaultLanguage]);
    });
    expect(labels.length).toBe(map.length);
  }

  describe('Toolbar > Menu', () => {
    it('トップレベルが翻訳されている', async () => {
      await page.click(toolbarClickSelector['Menu']);
      await compareLabels(mainMenuTopLabelSelector, mainMenuMap['Top']);
    });

    it('File が翻訳されている', async () => {
      await page.click(toolbarClickSelector['Menu']);
      await page.click(mainMenuClickSelector['File']);
      await compareLabels(mainMenu2ndLabelSelector, mainMenuMap['File']);
    });

    it('Edit が翻訳されている', async () => {
      await page.click(toolbarClickSelector['Menu']);
      await page.click(mainMenuClickSelector['Edit']);
      await compareLabels(mainMenu2ndLabelSelector, mainMenuMap['Edit']);
    });

    it('Edit > Copy as が翻訳されている', async () => {
      await page.click(toolbarClickSelector['Menu']);
      await page.click(mainMenuClickSelector['Edit']);
      await page.click(mainMenuClickSelector['Edit > Copy as']);
      await compareLabels(mainMenu3rdLabelSelector,
          mainMenuMap['Edit > Copy as']);
    });

    it('View が翻訳されている', async () => {
      await page.click(toolbarClickSelector['Menu']);
      await page.click(mainMenuClickSelector['View']);
      await compareLabels(mainMenu2ndLabelSelector, mainMenuMap['View']);
    });

    it('View > Panels が翻訳されている', async () => {
      await page.click(toolbarClickSelector['Menu']);
      await page.click(mainMenuClickSelector['View']);
      await page.click(mainMenuClickSelector['View > Panels']);
      await compareLabels(mainMenu3rdLabelSelector,
          mainMenuMap['View > Panels']);
    });

    it('Object が翻訳されている', async () => {
      await page.click(toolbarClickSelector['Menu']);
      await page.click(mainMenuClickSelector['Object']);
      await compareLabels(mainMenu2ndLabelSelector, mainMenuMap['Object']);
    // await printLabels(mainMenu2ndLabelSelector);
    });

    it('Object > Main Component が翻訳されている', async () => {
      await page.click(toolbarClickSelector['Menu']);
      await page.click(mainMenuClickSelector['Object']);
      await page.click(mainMenuClickSelector['Object > Main Component']);
      await compareLabels(mainMenu3rdLabelSelector,
          mainMenuMap['Object > Main Component']);
    });

    it('Object > Boolean Groups が翻訳されている', async () => {
      await page.click(toolbarClickSelector['Menu']);
      await page.click(mainMenuClickSelector['Object']);
      await page.click(mainMenuClickSelector['Object > Boolean Groups']);
      await compareLabels(mainMenu3rdLabelSelector,
          mainMenuMap['Object > Boolean Groups']);
    });

    it('Vector が翻訳されている', async () => {
      await page.click(toolbarClickSelector['Menu']);
      await page.click(mainMenuClickSelector['Vector']);
      await compareLabels(mainMenu2ndLabelSelector, mainMenuMap['Vector']);
    });

    it('Text が翻訳されている', async () => {
      await page.click(toolbarClickSelector['Menu']);
      await page.click(mainMenuClickSelector['Text']);
      await compareLabels(mainMenu2ndLabelSelector, mainMenuMap['Text']);
    });

    it('Text > Align が翻訳されている', async () => {
      await page.click(toolbarClickSelector['Menu']);
      await page.click(mainMenuClickSelector['Text']);
      await page.click(mainMenuClickSelector['Text > Align']);
      await compareLabels(mainMenu3rdLabelSelector,
          mainMenuMap['Text > Align']);
    });

    it('Arrange が翻訳されている', async () => {
      await page.click(toolbarClickSelector['Menu']);
      await page.click(mainMenuClickSelector['Arrange']);
      await compareLabels(mainMenu2ndLabelSelector, mainMenuMap['Arrange']);
    });

    it('Plugins が翻訳されている', async () => {
      await page.click(toolbarClickSelector['Menu']);
      await page.click(mainMenuClickSelector['Plugins']);

      const map = mainMenuMap['Plugins'];
      const labels = await page.$$eval(mainMenu2ndLabelSelector,
          (divs) => divs.map((div) => div.innerHTML));
      // 前方はプラグインインストール状況によって異なる
      // 後方のみ一致確認する
      map.reverse().forEach((m, index) => {
        expect(labels[labels.length-1-index])
            .toMatch(m[defaultLanguage]);
      });
    });

    it('Integrations が翻訳されている', async () => {
      await page.click(toolbarClickSelector['Menu']);
      await page.click(mainMenuClickSelector['Integrations']);
      await compareLabels(mainMenu2ndLabelSelector,
          mainMenuMap['Integrations']);
    });

    it('Preferences が翻訳されている', async () => {
      await page.click(toolbarClickSelector['Menu']);
      await page.click(mainMenuClickSelector['Preferences']);
      await compareLabels(mainMenu2ndLabelSelector,
          mainMenuMap['Preferences']);
    });

    it('Help and Account が翻訳されている', async () => {
      await page.click(toolbarClickSelector['Menu']);
      await page.click(mainMenuClickSelector['Help and Account']);
      await compareLabels(mainMenu2ndLabelSelector,
          mainMenuMap['Help and Account']);
    });
  });
});
