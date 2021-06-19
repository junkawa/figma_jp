const defaultLanguage = 'ja';

// Label
const dropdownLabel = '.multilevel_dropdown--name--1abLT';
const mainMenuLabelSelector = dropdownLabel;
const mainMenuTopLabelSelector = mainMenuLabelSelector;
const mainMenu2ndLabelSelector =
  'div[name="mainMenu"] div[name="mainMenu"] ' + mainMenuLabelSelector;
const mainMenu3rdLabelSelector =
  'div[name="mainMenu"] div[name="mainMenu"] div[name="mainMenu"] ' +
  mainMenuLabelSelector;
const toolsLabelSelector =
  'div.pointing_dropdown--root--28JAG .action_option--text--3Rze3';
const viewLabelSelector = (() => {
  const base = 'div[name="toolbarView.zoomMenu.dropdown"] ';
  return {
    Top: base + dropdownLabel,
    '2nd': base + base + dropdownLabel,
  };
})();
const contextualToolsLabelSelector = {
  'File-level actions': 'div[name="toolbarView.filenameView"] ' + dropdownLabel,
  'Boolean Groups':
    'div.dropdown--dropdown--35dH4 div.action_option--text--3Rze3',
  Components: 'div.dropdown--dropdown--35dH4 div.action_option--text--3Rze3',
};
const tooltipSelector = {
  Shortcut: 'div.tooltip--content--3GEna > span > span:nth-of-type(1)',
  'No shortcut': 'div.tooltip--content--3GEna > span:nth-of-type(1)',
};

// Toolbar
const toolbarSelector = (() => {
  const base = 'div.toolbar_view--toolbar--2396w';
  const toolsBase = base + ' > div:nth-child(2)';
  const contextualToolsBase = base + ' > div:nth-child(4)';
  const shareViewBase = base + ' > div:nth-child(5)';
  return {
    // Menu
    Menu: base + ' > div:nth-child(1)',
    // Tools
    'Selected Move Tool': toolsBase + ' > div:nth-child(1) > div',
    'Move Tools': toolsBase + ' > div:nth-child(1) > div > div',
    'Selected Region Tool': toolsBase + ' > div:nth-child(2) > div',
    'Region Tools': toolsBase + ' > div:nth-child(2) > div > div',
    'Shape Tools': toolsBase + ' > div:nth-child(3) > div > div',
    'Drawing Tools': toolsBase + ' > div:nth-child(4) > div > div',
    'Text Tool': toolsBase + ' > div:nth-child(5) > span',
    'Hand Tool': toolsBase + ' > div:nth-child(6) > span',
    'Comment Tool': toolsBase + ' > div:nth-child(7) > span',
    // Contextual Tools
    'File-level actions':
      contextualToolsBase + ' > div > div > div > div:nth-of-type(2)',
    'Boolean Groups':
      contextualToolsBase +
      ' > div:nth-child(6) > div > div > div:nth-of-type(1)',
    Components:
      contextualToolsBase +
      ' > div:nth-child(4) > div > div > div:nth-of-type(1)',
    // Missing Fonts
    // 'Missing Fonts': shareViewBase + ' > div:nth-child(3)',
    // Views
    'View Settings': shareViewBase + ' > div:nth-child(3)',
    'View Settings > Pixel Preview':
      'div[name="toolbarView.zoomMenu.dropdown"]' +
      ' > div > div> div:nth-child(2) > div > div:nth-child(9)',
  };
})();

// Toolbar > Menu
const mainMenuSelector = (() => {
  const menuBase = 'div[name="mainMenu"] > div > div > div:nth-child(2) > div > div > div > div';
  const menu2ndBase = 'div[name="mainMenu"] div[name="mainMenu"] > div > div';
  return {
    File: menuBase + ' > div:nth-child(4)',
    Edit: menuBase + ' > div:nth-child(5)',
    'Edit > Copy as': menu2ndBase + ' > div:nth-child(4)',
    View: menuBase + ' > div:nth-child(6)',
    'View > Panels': menu2ndBase + ' > div:nth-child(13)',
    Object: menuBase + ' > div:nth-child(7)',
    'Object > Main Component': menu2ndBase + ' > div:nth-child(11)',
    'Object > Boolean Groups': menu2ndBase + ' > div:nth-child(27)',
    Vector: menuBase + ' > div:nth-child(8)',
    Text: menuBase + ' > div:nth-child(9)',
    'Text > Align': menu2ndBase + ' > div:nth-child(19)',
    Arrange: menuBase + ' > div:nth-child(10)',
    // '---'
    Plugins: menuBase + ' > div:nth-child(12)',
    Integrations: menuBase + ' > div:nth-child(13)',
    Preferences: menuBase + ' > div:nth-child(14)',
    // 'Libraries'
    // '---'
    'Help and Account': menuBase + ' > div:nth-child(17)',
  };
})();

// Left Panel
// object_row--frame--Q78_7
// const leftPanelSelector = (() => {
//   const base = 'div.left_panel--panelContainer--1OR1n';
//   // 'TestXXX' is a creating layer on canvas.
//   return {
//     'TestFrame': base +
//       ' div.object_row--topLevel--1ThUW',
//   };
// })();

const mainMenuMap = {};
mainMenuMap['Top'] = [
  {
    en: 'Back to Files',
    ja: 'プロジェクトに戻る',
  },
  {
    en: 'File',
    ja: 'ファイル',
  },
  {
    en: 'Edit',
    ja: '編集',
  },
  {
    en: 'View',
    ja: '表示',
  },
  {
    en: 'Object',
    ja: 'オブジェクト',
  },
  {
    en: 'Vector',
    ja: 'ベクター',
  },
  {
    en: 'Text',
    ja: 'テキスト',
  },
  {
    en: 'Arrange',
    ja: '整列',
  },
  {
    en: 'Plugins',
    ja: 'プラグイン',
  },
  {
    en: 'Integrations',
    ja: '連携',
  },
  {
    en: 'Preferences',
    ja: '環境設定',
  },
  {
    en: 'Libraries',
    ja: 'ライブラリ',
  },
  {
    en: 'Help and Account',
    ja: 'ヘルプとアカウント',
  },
];
mainMenuMap['File'] = [
  {
    en: 'New',
    ja: '新規作成',
  },
  {
    en: 'New from Sketch File…',
    ja: 'Sketchファイルを開く',
  },
  {
    en: 'Place Image',
    ja: '画像を配置',
  },
  {
    en: 'Save local copy…',
    ja: 'ローカルに保存',
  },
  {
    en: 'Save to Version History…',
    ja: 'バージョン履歴を追加',
  },
  {
    en: 'Show Version History',
    ja: 'バージョン履歴を表示',
  },
  {
    en: 'Export…',
    ja: '書き出し',
  },
  {
    en: 'Export Frames to PDF…',
    ja: 'PDFで書き出し',
  },
];
mainMenuMap['Edit'] = [
  {
    en: 'Undo',
    ja: '取り消し',
  },
  {
    en: 'Redo',
    ja: 'やり直し',
  },
  {
    en: 'Copy as',
    ja: 'コピー',
  },
  {
    en: 'Paste Over Selection',
    ja: '選択したものの上にペースト',
  },
  {
    en: 'Paste to replace',
    ja: '置換してペースト',
  },
  {
    en: 'Duplicate',
    ja: '複製',
  },
  {
    en: 'Delete',
    ja: '削除',
  },
  {
    en: 'Set Default Properties',
    ja: 'プロパティのデフォルトに設定',
  },
  {
    en: 'Copy Properties',
    ja: 'プロパティをコピー',
  },
  {
    en: 'Paste Properties',
    ja: 'プロパティをペースト',
  },
  {
    en: 'Pick Color',
    ja: '色を選択',
  },
  {
    en: 'Select All',
    ja: 'すべてを選択',
  },
  {
    en: 'Select None',
    ja: '選択解除',
  },
  {
    en: 'Select Inverse',
    ja: '他を選択',
  },
  {
    en: 'Select All with Same Properties',
    ja: '共通のプロパティをすべて選択',
  },
  {
    en: 'Select All with Same Fill',
    ja: '共通の塗りをすべて選択',
  },
  {
    en: 'Select All with Same Stroke',
    ja: '共通の線をすべて選択',
  },
  {
    en: 'Select All with Same Effect',
    ja: '共通のエフェクトをすべて選択',
  },
  {
    en: 'Select All with Same Text Properties',
    ja: '共通のテキストプロパティをすべて選択',
  },
  {
    en: 'Select All with Same Font',
    ja: '共通のフォントを選択',
  },
  {
    en: 'Select All with Same Instance',
    ja: '共通のインスタンスを選択',
  },
];
mainMenuMap['Edit > Copy as'] = [
  {
    en: 'Copy as Text',
    ja: 'テキストとしてコピー',
  },
  {
    en: 'Copy as CSS',
    ja: 'CSSとしてコピー',
  },
  {
    en: 'Copy as SVG',
    ja: 'SVGとしてコピー',
  },
];
mainMenuMap['View'] = [
  {
    en: 'Pixel Grid',
    ja: 'ピクセルグリッドを表示',
  },
  {
    en: 'Layout Grids',
    ja: 'レイアウトグリッドを表示',
  },
  {
    en: 'Rulers',
    ja: '定規を表示',
  },
  {
    en: 'Show Slices',
    ja: 'スライスを表示',
  },
  {
    en: 'Outlines',
    ja: 'アウトラインを表示',
  },
  {
    en: 'Pixel Preview',
    ja: 'ピクセルでプレビュー',
  },
  {
    en: 'Mask Outlines',
    ja: 'マスクのアウトラインを表示',
  },
  {
    en: 'Frame Outlines',
    ja: 'フレームのアウトラインを表示',
  },
  {
    en: 'Resource Use',
    ja: 'リソース使用量を表示',
  },
  {
    en: 'Show/Hide UI',
    ja: 'UIを表示/非表示',
  },
  {
    en: 'Multiplayer Cursors',
    ja: '共同作業者のカーソルを表示',
  },
  {
    en: 'Panels',
    ja: 'パネル',
  },
  {
    en: 'Zoom In',
    ja: 'ズームイン',
  },
  {
    en: 'Zoom Out',
    ja: 'ズームアウト',
  },
  {
    en: 'Zoom to 100%',
    ja: '100％にズーム',
  },
  {
    en: 'Zoom to Fit',
    ja: '画面に合わせてすべてをズーム',
  },
  {
    en: 'Zoom to Selection',
    ja: '選択したものに合わせてズーム',
  },
  {
    en: 'Previous Page',
    ja: '前のページ',
  },
  {
    en: 'Next Page',
    ja: '次のページ',
  },
  {
    en: 'Zoom to Previous Frame',
    ja: '前のフレームにズーム',
  },
  {
    en: 'Zoom to Next Frame',
    ja: '次のフレームにズーム',
  },
  {
    en: 'Find Previous Frame',
    ja: '前のフレームに移動',
  },
  {
    en: 'Find Next Frame',
    ja: '次のフレームに移動',
  },
];
mainMenuMap['View > Panels'] = [
  {
    en: 'Open Layers Panel',
    ja: 'レイヤーパネルを表示',
  },
  {
    en: 'Open Assets Panel',
    ja: 'アセットパネルを表示',
  },
  {
    en: 'Open Design Panel',
    ja: 'デザインパネルを表示',
  },
  {
    en: 'Open Prototype Panel',
    ja: 'プロトタイプパネルを表示',
  },
  {
    en: 'Open Code Panel',
    ja: 'コードパネルを表示',
  },
  {
    en: 'Show Left Sidebar',
    ja: 'サイドバーを表示',
  },
];
mainMenuMap['Object'] = [
  {
    en: 'Group Selection',
    ja: 'グループ化',
  },
  {
    en: 'Frame Selection',
    ja: 'フレーム化',
  },
  {
    en: 'Ungroup Selection',
    ja: 'グループ解除',
  },
  {
    en: 'Use as Mask',
    ja: 'マスクを作成',
  },
  {
    en: 'Restore Default Thumbnail',
    ja: 'デフォルトのサムネイルに戻す',
  },
  {
    en: 'Add Auto Layout',
    ja: 'オートレイアウトを追加',
  },
  {
    en: 'Create Component',
    ja: 'コンポーネントを作成',
  },
  {
    en: 'Reset All Overrides',
    ja: 'オーバーライドをリセット',
  },
  {
    en: 'Detach Instance',
    ja: 'インスタンスを解除',
  },
  {
    en: 'Main Component',
    ja: 'メインコンポーネント',
  },
  {
    en: 'Bring to Front',
    ja: '最前面へ',
  },
  {
    en: 'Bring Forward',
    ja: '前面へ',
  },
  {
    en: 'Send Backward',
    ja: '背面へ',
  },
  {
    en: 'Send to Back',
    ja: '最背面へ',
  },
  {
    en: 'Flip Horizontal',
    ja: '水平方向に反転',
  },
  {
    en: 'Flip Vertical',
    ja: '垂直方向に反転',
  },
  {
    en: 'Rotate 180˚',
    ja: '180°回転',
  },
  {
    en: 'Rotate 90˚ Left',
    ja: '左に90°回転',
  },
  {
    en: 'Rotate 90˚ Right',
    ja: '右に90°回転',
  },
  {
    en: 'Flatten Selection',
    ja: '複合パスに拡張',
  },
  {
    en: 'Outline Stroke',
    ja: 'パスのアウトライン',
  },
  {
    en: 'Boolean Groups',
    ja: '複合シェイプを作成',
  },
  {
    en: 'Rasterize Selection',
    ja: 'ラスタライズ',
  },
  {
    en: 'Show/Hide Selection',
    ja: '選択したものを表示/非表示',
  },
  {
    en: 'Lock/Unlock Selection',
    ja: '選択したものをロック/ロック解除',
  },
  {
    en: 'Hide Other Layers',
    ja: '他のレイヤーを隠す',
  },
  {
    en: 'Collapse Layers',
    ja: 'レイヤーを閉じる',
  },
  {
    en: 'Remove Fill',
    ja: '塗りを削除',
  },
  {
    en: 'Remove Stroke',
    ja: '線を削除',
  },
  {
    en: 'Swap Fill and Stroke',
    ja: '塗りと線を入れ替え',
  },
];
// オブジェクト選択時の Menu > Object
mainMenuMap['Object[Selected]'] = [
  {
    en: 'Set as Thumbnail',
    ja: 'ファイルのサムネイルに設定',
  },
];
// const mainMenuObjectSelectedMap = (() => {
//  const map = Array.from(mainMenuMap['Object']);
//  map[4] = mainMenuMap['Object[Selected]'][0];
//  return map;
// })();
mainMenuMap['Object > Main Component'] = [
  {
    en: 'Go to Main Component',
    ja: 'メインコンポーネントへ移動',
  },
  {
    en: 'Push Overrides to Main Component',
    ja: 'オーバーライドをメインに反映',
  },
  {
    en: 'Restore Main Component',
    ja: 'メインコンポーネントを復元',
  },
];
mainMenuMap['Object > Boolean Groups'] = [
  {
    en: 'Union Selection',
    ja: '合体',
  },
  {
    en: 'Subtract Selection',
    ja: '前面オブジェクトで型抜き',
  },
  {
    en: 'Intersect Selection',
    ja: '交差',
  },
  {
    en: 'Exclude Selection',
    ja: '中マド',
  },
];
mainMenuMap['Vector'] = [
  {
    en: 'Join Selection',
    ja: 'アンカーポイントを連結',
  },
  {
    en: 'Smooth Join Selection',
    ja: 'アンカーポイントをスムーズに連結',
  },
  {
    en: 'Delete and Heal Selection',
    ja: 'アンカーポイントを削除',
  },
];
mainMenuMap['Text'] = [
  {
    en: 'Bold',
    ja: '太字',
  },
  {
    en: 'Italic',
    ja: '斜体',
  },
  {
    en: 'Underline',
    ja: '下線',
  },
  {
    en: 'Strikethrough',
    ja: '打ち消し線',
  },
  {
    en: 'Original Case',
    ja: '大文字小文字の変換なし',
  },
  {
    en: 'Upper Case',
    ja: 'すべて大文字',
  },
  {
    en: 'Lower Case',
    ja: 'すべて小文字',
  },
  {
    en: 'Increase Font Size',
    ja: 'フォントサイズを大きく',
  },
  {
    en: 'Decrease Font Size',
    ja: 'フォントサイズを小さく',
  },
  {
    en: 'Increase Font Weight',
    ja: 'フォントウェイトを大きく',
  },
  {
    en: 'Decrease Font Weight',
    ja: 'フォントウェイトを小さく',
  },
  {
    en: 'Increase Line Height',
    ja: '行送りを増やす',
  },
  {
    en: 'Decrease Line Height',
    ja: '行送りを減らす',
  },
  {
    en: 'Increase Letter Spacing',
    ja: '文字の間隔を広げる',
  },
  {
    en: 'Decrease Letter Spacing',
    ja: '文字の間隔を詰める',
  },
  {
    en: 'Align',
    ja: '文字揃え',
  },
];
mainMenuMap['Text > Align'] = [
  {
    en: 'Text Align Left',
    ja: '左揃え',
  },
  {
    en: 'Text Align Center',
    ja: '中央揃え',
  },
  {
    en: 'Text Align Right',
    ja: '右揃え',
  },
  {
    en: 'Text Align Justified',
    ja: '均等揃え',
  },
  {
    en: 'Text Align Top',
    ja: 'ボックスの上揃え',
  },
  {
    en: 'Text Align Middle',
    ja: 'ボックスの垂直方向中央揃え',
  },
  {
    en: 'Text Align Bottom',
    ja: 'ボックスの下揃え',
  },
];
mainMenuMap['Arrange'] = [
  {
    en: 'Round to Pixel',
    ja: 'ピクセルに合わせて配置',
  },
  {
    en: 'Align Left',
    ja: '水平方向左に整列',
  },
  {
    en: 'Align Horizontal Centers',
    ja: '水平方向中央に整列',
  },
  {
    en: 'Align Right',
    ja: '水平方向右に整列',
  },
  {
    en: 'Align Top',
    ja: '垂直方向上に整列',
  },
  {
    en: 'Align Vertical Centers',
    ja: '垂直方向中央に整列',
  },
  {
    en: 'Align Bottom',
    ja: '垂直方向下に整列',
  },
  {
    en: 'Tidy Up',
    ja: '選択状態に応じて自動で整列',
  },
  {
    en: 'Pack Horizontal',
    ja: '水平方向へ間隔なしで整列',
  },
  {
    en: 'Pack Vertical',
    ja: '垂直方向へ間隔なしで整列',
  },
  {
    en: 'Distribute Horizontal Spacing',
    ja: '水平方向へ等間隔に分布',
  },
  {
    en: 'Distribute Vertical Spacing',
    ja: '垂直方向へ等間隔に分布',
  },
  {
    en: 'Distribute Left',
    ja: '左を基準に、水平方向へ分布',
  },
  {
    en: 'Distribute Horizontal Centers',
    ja: '中心を基準に、水平方向へ分布',
  },
  {
    en: 'Distribute Right',
    ja: '右を基準に、水平方向へ分布',
  },
  {
    en: 'Distribute Top',
    ja: '上を基準に、垂直方向へ分布',
  },
  {
    en: 'Distribute Vertical Centers',
    ja: '中心を基準に、垂直方向へ分布',
  },
  {
    en: 'Distribute Bottom',
    ja: '下を基準に、垂直方向へ分布',
  },
];
mainMenuMap['Plugins'] = [
  {
    en: 'Run Last Plugin',
    ja: '最後に使ったプラグインを実行',
  },
  {
    en: 'Manage Plugins…',
    ja: 'プラグインを管理',
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
    en: 'Dribbble',
    ja: 'Dribbbleと連携',
  },
];
mainMenuMap['Preferences'] = [
  {
    en: 'Snap to Geometry',
    ja: 'ジオメトリにスナップ',
  },
  {
    en: 'Snap to Objects',
    ja: 'オブジェクトにスナップ',
  },
  {
    en: 'Snap to Pixel Grid',
    ja: 'ピクセルグリッドにスナップ',
  },
  {
    en: 'Keep Tool Selected after Use',
    ja: '使用したツールを保持する',
  },
  {
    en: 'Highlight Layers on Hover',
    ja: 'ホバーでレイヤーをハイライト表示',
  },
  {
    en: 'Rename Duplicated Layers',
    ja: '複製したレイヤーをリネーム',
  },
  {
    en: 'Show Dimensions on Objects',
    ja: 'オブジェクトのサイズを表示',
  },
  {
    en: 'Hide Canvas UI During Changes',
    ja: '変形中にキャンバス表示を非表示',
  },
  {
    en: 'Keyboard Zooms into Selection',
    ja: '選択対象にキーボードズーム',
  },
  {
    en: 'Substitute Smart Quotes',
    ja: 'スマートクォート（ “ ” ）に変換入力',
  },
  {
    en: 'Show Google Fonts',
    ja: 'Googleフォントを表示',
  },
  {
    en: 'Flip Objects While Resizing',
    ja: 'サイズ変更中にオブジェクトを反転',
  },
  {
    en: 'Invert Zoom Direction',
    ja: 'ホイールでのズームの方向を反転',
  },
  {
    en: 'Use Number Keys for Opacity',
    ja: 'テンキーで不透明度を変更',
  },
  {
    en: 'Nudge Amount…',
    ja: 'テンキー操作の値',
  },
];
mainMenuMap['Help and Account'] = [
  {
    en: 'Help Page',
    ja: 'ヘルプページ',
  },
  {
    en: 'Keyboard Shortcuts',
    ja: 'キーボードショートカット',
  },
  {
    en: 'Support Forum',
    ja: 'サポートフォーラム',
  },
  {
    en: 'Video Tutorials',
    ja: 'ビデオチュートリアル',
  },
  {
    en: 'Release Notes',
    ja: 'リリースノート',
  },
  {
    en: 'Open Font Settings',
    ja: 'フォント設定を開く',
  },
  {
    en: 'Legal Summary',
    ja: '利用規約',
  },
  {
    en: 'Account Settings',
    ja: 'アカウント設定',
  },
  {
    en: 'Log Out',
    ja: 'ログアウト',
  },
];

const toolsMap = {};
toolsMap['Move Tools'] = [
  {
    en: 'Move',
    ja: '移動',
  },
  {
    en: 'Scale',
    ja: '拡大・縮小',
  },
];
toolsMap['Region Tools'] = [
  {
    en: 'Frame',
    ja: 'フレーム',
  },
  {
    en: 'Slice',
    ja: 'スライス',
  },
];
toolsMap['Shape Tools'] = [
  {
    en: 'Rectangle',
    ja: '長方形',
  },
  {
    en: 'Line',
    ja: '直線',
  },
  {
    en: 'Arrow',
    ja: '矢印',
  },
  {
    en: 'Ellipse',
    ja: '楕円',
  },
  {
    en: 'Polygon',
    ja: '多角形',
  },
  {
    en: 'Star',
    ja: 'スター',
  },
  {
    en: 'Place Image',
    ja: '画像を配置',
  },
];
toolsMap['Drawing Tools'] = [
  {
    en: 'Pen',
    ja: 'ペン',
  },
  {
    en: 'Pencil',
    ja: '鉛筆',
  },
];
// Toolbar > Contextual Tools
const contextualToolsMap = {};
contextualToolsMap['File-level actions'] = [
  {
    en: 'Show Version History',
    ja: 'バージョン履歴を表示',
  },
  {
    en: 'Publish Styles and Components',
    ja: 'スタイルとコンポーネントを公開',
  },
  {
    en: 'Export…',
    ja: '書き出し',
  },
  {
    en: 'Duplicate',
    ja: '複製',
  },
  {
    en: 'Rename',
    ja: '名前を変更',
  },
  {
    en: 'Delete',
    ja: '削除',
  },
  {
    en: 'Move to Project…',
    ja: 'プロジェクトへ移動',
  },
];
contextualToolsMap['Boolean Groups'] = [
  {
    en: 'Union Selection',
    ja: '合体',
  },
  {
    en: 'Subtract Selection',
    ja: '前面オブジェクトで型抜き',
  },
  {
    en: 'Intersect Selection',
    ja: '交差',
  },
  {
    en: 'Exclude Selection',
    ja: '中マド',
  },
  {
    en: 'Flatten Selection',
    ja: '複合パスに拡張',
  },
];
// TODO 翻訳反映
contextualToolsMap['Components'] = [
  {
    en: 'Create Component',
    ja: 'コンポーネントを作成',
  },
  {
    en: 'Create Multiple Components',
    ja: 'レイヤ毎にコンポーネントを作成',
  },
];

// Toolbar > View Settings
const viewMap = {};
viewMap['Top'] = [
  {
    en: 'Zoom in',
    ja: 'ズームイン',
  },
  {
    en: 'Zoom out',
    ja: 'ズームアウト',
  },
  {
    en: 'Zoom to Fit',
    ja: '画面に合わせてすべてをズーム',
  },
  {
    en: 'Zoom to 50%',
    ja: '50％にズーム',
  },
  {
    en: 'Zoom to 100%',
    ja: '100％にズーム',
  },
  {
    en: 'Zoom to 200%',
    ja: '200％にズーム',
  },
  {
    en: 'Pixel Preview',
    ja: 'ピクセルでプレビュー',
  },
  {
    en: 'Pixel Grid',
    ja: 'ピクセルグリッドを表示',
  },
  {
    en: 'Snap to Pixel Grid',
    ja: 'ピクセルグリッドにスナップ',
  },
  {
    en: 'Layout Grids',
    ja: 'レイアウトグリッドを表示',
  },
  {
    en: 'Rulers',
    ja: '定規を表示',
  },
  {
    en: 'Outlines',
    ja: 'アウトラインを表示',
  },
  {
    en: 'Multiplayer Cursors',
    ja: '共同作業者のカーソルを表示',
  },
];
viewMap['Pixel Grid'] = [
  {
    en: 'Disabled',
    ja: '無効',
  },
  {
    en: '1x',
    ja: '1x',
  },
  {
    en: '2x',
    ja: '2x',
  },
];
// Toolbar > Missing Fonts
const missingFontsMap = [
  {
    en: 'Missing Fonts',
    ja: '足りないフォント',
  },
  {
    en:
      'The following fonts are not available, and need to be replaced in order to edit text.',
    ja:
      '下記のフォントは利用不可です。テキスト編集のために置換する必要があります。',
  },
  {
    en: 'Family',
    ja: 'ファミリ',
  },
  {
    en: 'Cancel',
    ja: 'キャンセル',
  },
  {
    en: 'Replace Fonts',
    ja: 'フォント置換',
  },
];

const tooltipMap = {};
tooltipMap['Toolbar'] = [
  // data-tooltip-type="text"
  {
    en: 'Move Tools',
    ja: '移動ツール',
  },
  {
    en: 'Region Tools',
    ja: 'リージョンツール',
  },
  {
    en: 'Shape Tools',
    ja: 'シェイプツール',
  },
  {
    en: 'Drawing Tools',
    ja: 'ドローツール',
  },
  {
    en: 'Zoom/View Options',
    ja: 'ズーム・ビュー操作',
  },
  {
    en: 'Present',
    ja: 'プレゼンテーション',
  },
  {
    en: 'Missing Fonts',
    ja: '足りないフォント',
  },
  // data-tooltip-type="lookup"
  {
    en: 'Hand Tool',
    ja: '手のひらツール',
  },
  {
    en: 'Text',
    ja: 'テキスト',
  },
  {
    en: 'Add Comment',
    ja: 'コメントの追加',
  },
  {
    en: 'Edit Object',
    ja: 'オブジェクトの編集',
  },
  {
    en: 'Create Component',
    ja: 'コンポーネントを作成',
  },
  {
    en: 'Use as Mask',
    ja: 'マスクを作成',
  },
  {
    en: 'Boolean Groups',
    ja: '複合シェイプを作成',
  },
  {
    en: 'Create Link',
    ja: 'リンクを作成',
  },
  {
    en: 'Align left',
    ja: '水平方向左に整列',
  },
  {
    en: 'Bend Tool',
    ja: '曲線ツール',
  },
  {
    en: 'Paint Bucket',
    ja: '塗りつぶし',
  },
  {
    en: 'Done',
    ja: '終了',
  },
  {
    en: 'Crop Image',
    ja: '画像の切り抜き',
  },
];

const layersPanelMap = {};
layersPanelMap['Tab'] = [
  {
    en: 'Layers',
    ja: 'レイヤー',
  },
  {
    en: 'Assets',
    ja: 'アセット',
  },
];

const exportModalMap = [
  {
    en: 'Export',
    ja: 'エクスポート',
  },
  {
    en: 'Contents Only',
    ja: 'レイヤ内のみエクスポート',
  },
  {
    en: 'Include "id" Attribute',
    ja: '"id"属性を含める',
  },
  {
    en: 'Outline Text',
    ja: 'フォントのアウトライン化',
  },
  {
    en: 'Simplify Stroke',
    ja: '線の簡略化',
  },
];

const helpMap = [
  {
    en: 'Help Center',
    ja: 'ヘルプセンター',
  },
  {
    en: 'Support Forum',
    ja: 'サポートフォーラム',
  },
  {
    en: 'YouTube videos',
    ja: 'ビデオチュートリアル',
  },
  {
    en: 'Release Notes',
    ja: 'リリースノート',
  },
  {
    en: 'Keyboard Shortcuts',
    ja: 'キーボードショートカット',
  },
  {
    en: 'Reset Onboarding',
    ja: 'オンボーディング',
  },
  {
    en: 'Legal Summary',
    ja: '利用規約',
  },
  {
    en: 'Submit feedback',
    ja: 'フィードバックを送信する',
  },
  {
    en: 'Ask the community',
    ja: 'コミュニティで質問する',
  },
  {
    en: 'Contact support',
    ja: 'サポートに問い合わせる',
  },
];

const timeout = 120000; // ミリ秒

describe('Figma File', () => {
  let page;

  beforeAll(async () => {
    const ENV_PATH = require('path').join(__dirname, '.env');
    require('dotenv').config({ path: ENV_PATH });

    page = await global.__BROWSER__.newPage();
    await page.setViewport({ width: 1440, height: 900 });

    await page.goto("https://www.figma.com/login");
    await page.type("input[name='email']", process.env.FIGMA_EMAIL);
    await page.type("input[name='password']", process.env.FIGMA_PASSWORD);
    await page.click("button[type='submit']");
    await page.waitForTimeout(5000); // ミリ秒

    await page.goto(process.env.FIGMA_FILE_URL);
    console.log('after got FIGMA_FILE_URL');
    // await page.waitForNavigation({
    //   waitUntil: ['load', 'networkidle2'],
    //   timeout: 120000, // ミリ秒
    // });
    await page.waitForSelector('.toolbar_view--toolbar--2396w');
    await page.waitForTimeout(15000); // ミリ秒
    // console.log('finish waitForTimeout');
    // await page.screenshot({path: 'screenshot.png'});
  }, timeout);

  afterAll(async () => {});

  beforeEach(async () => {
    // メニュー表示の初期化
    [...Array(5)].map(async () => await page.keyboard.press('Escape'));
    await page.waitForTimeout(100); // ミリ秒
  });

  // eslint-disable-next-line no-unused-vars
  async function printInnerHTMLs(selector) {
    const labels = await page.$$eval(selector, (divs) =>
      divs.map((div) => div.innerHTML)
    );
    console.log(labels);
  }
  // eslint-disable-next-line no-unused-vars
  async function printDataLabels(selector) {
    const labels = await page.$$eval(selector, (divs) =>
      divs.map((div) => div.getAttribute('data-label'))
    );
    console.log(labels);
  }

  function searchWord(map, enWord) {
    const ret = map.find((m) => m['en'] === enWord); // 先頭一致
    return ret[defaultLanguage];
  }
  async function compareInnerHTML(selector, word) {
    const tooltips = await page.$$eval(selector, (divs) =>
      divs.map((div) => div.innerHTML)
    );

    expect(tooltips[0]).toMatch(word);
  }
  async function compareInnerHTMLs(selector, map) {
    const labels = await page.$$eval(selector, (divs) =>
      divs.map((div) => div.innerHTML)
    );

    labels.forEach((label, index) => {
      expect(label).toMatch(map[index][defaultLanguage]);
    });
    expect(labels.length).toBe(map.length);
  }
  async function compareDataLabels(selector, map) {
    const labels = await page.$$eval(selector, (divs) =>
      divs.map((div) => div.getAttribute('data-label'))
    );

    labels.forEach((label, index) => {
      expect(label).toMatch(map[index][defaultLanguage]);
    });
    expect(labels.length).toBe(map.length);
  }

  // Jestでpuppeteer.launch({slowMo: 100}) が効かないので
  // 手動で対応
  async function click(selector) {
    await page.click(selector);
    await page.waitForTimeout(100); // ミリ秒
  }
  async function hover(selector) {
    await page.hover(selector);
    // ツールチップがポップアップするまで待つ
    await page.waitForTimeout(1500); // ミリ秒
  }

  // https://help.figma.com/hc/en-us/articles/360041064174-Access-tools-in-the-Editor-with-the-toolbar
  describe('Toolbar', () => {
    // https://help.figma.com/hc/en-us/articles/360041064174-Access-tools-in-the-Editor-with-the-toolbar#Menu
    describe('Menu', () => {
      it('トップレベルが翻訳されている', async () => {
        await click(toolbarSelector['Menu']);
        await compareInnerHTMLs(mainMenuTopLabelSelector, mainMenuMap['Top']);
      });

      it.each([
        'File',
        'Edit',
        'View',
        'Object',
        'Vector',
        'Text',
        'Arrange',
        'Integrations',
        'Preferences',
        'Help and Account',
      ])('%s が翻訳されている', async (name) => {
        await click(toolbarSelector['Menu']);
        await click(mainMenuSelector[name]);
        await compareInnerHTMLs(mainMenu2ndLabelSelector, mainMenuMap[name]);
      });

      it.each([
        ['Edit', 'Copy as'],
        ['View', 'Panels'],
        ['Object', 'Main Component'],
        ['Object', 'Boolean Groups'],
        ['Text', 'Align'],
      ])('%s > %s が翻訳されている', async (name1, name2) => {
        await click(toolbarSelector['Menu']);
        await click(mainMenuSelector[name1]);
        await click(mainMenuSelector[name1 + ' > ' + name2]);
        await compareInnerHTMLs(
          mainMenu3rdLabelSelector,
          mainMenuMap[name1 + ' > ' + name2]
        );
      });

      it('Plugins が翻訳されている', async () => {
        await click(toolbarSelector['Menu']);
        await click(mainMenuSelector['Plugins']);

        const map = mainMenuMap['Plugins'];
        const labels = await page.$$eval(mainMenu2ndLabelSelector, (divs) =>
          divs.map((div) => div.innerHTML)
        );
        // 前方はプラグインインストール状況によって異なる
        // 後方のみ一致確認する
        map.reverse().forEach((m, index) => {
          expect(labels[labels.length - 1 - index]).toMatch(m[defaultLanguage]);
        });
      });
    });

    // https://help.figma.com/hc/en-us/articles/360041064174-Access-tools-in-the-Editor-with-the-toolbar#Tools
    describe('Tools', () => {
      it.each(['Move Tools', 'Region Tools', 'Shape Tools', 'Drawing Tools'])(
        '%s が翻訳されている',
        async (name) => {
          await click(toolbarSelector[name]);
          await compareInnerHTMLs(toolsLabelSelector, toolsMap[name]);
        }
      );
    });

    // https://help.figma.com/hc/en-us/articles/360041064174-Access-tools-in-the-Editor-with-the-toolbar#Contextual_tools
    describe('Contextual tools', () => {
      describe('No layers selected', () => {
        it('File-level actions が翻訳されている', async () => {
          await click(toolbarSelector['File-level actions']);
          await compareInnerHTMLs(
            contextualToolsLabelSelector['File-level actions'],
            contextualToolsMap['File-level actions']
          );
        });
      });
      describe('Select layers', () => {
        it.each(['Boolean Groups', 'Components'])(
          '%s が翻訳されている',
          async (name) => {
            // 複数レイヤーを選択
            await page.keyboard.down('ControlLeft');
            await page.keyboard.press('KeyA');
            await page.keyboard.up('ControlLeft');
            await page.waitForTimeout(100); // ミリ秒

            await click(toolbarSelector[name]);
            await compareInnerHTMLs(
              contextualToolsLabelSelector[name],
              contextualToolsMap[name]
            );
          }
        );
      });
      describe.skip('Select a single vector path', () => {});
    });

    // https://help.figma.com/hc/en-us/articles/360041064174-Access-tools-in-the-Editor-with-the-toolbar#Share_and_view_settings
    describe('Share and view settings', () => {
      it('View Settings が翻訳されている', async () => {
        await click(toolbarSelector['View Settings']);
        await compareInnerHTMLs(viewLabelSelector['Top'], viewMap['Top']);
      });

      it('View Settings > Pixel Preview が翻訳されている', async () => {
        await click(toolbarSelector['View Settings']);
        await click(toolbarSelector['View Settings > Pixel Preview']);
        await compareInnerHTMLs(
          viewLabelSelector['2nd'],
          viewMap['Pixel Grid']
        );
      });
      it.skip('Share が翻訳されている', async () => {});
    });

    describe.skip('Missing Fonts', () => {
      it('モーダルが翻訳されている', async () => {
        await click(toolbarSelector['Missing Fonts']);
        await compareInnerHTML(
          'div.missing_fonts_modal--title--1wSnP',
          searchWord(missingFontsMap, 'Missing Fonts')
        );
        await compareInnerHTML(
          'div.missing_fonts_modal--message--YgBr5',
          searchWord(
            missingFontsMap,
            'The following fonts are not available, and need to be replaced in order to edit text.'
          )
        );
        await compareInnerHTML(
          'div.missing_fonts_modal--fontRow--1zEr2 > label:nth-child(1)',
          searchWord(missingFontsMap, 'Family')
        );
        await compareInnerHTML(
          'div.missing_fonts_modal--buttonRow--1UfFc > button:nth-child(1)',
          searchWord(missingFontsMap, 'Cancel')
        );
        await compareInnerHTML(
          'div.missing_fonts_modal--buttonRow--1UfFc > button:nth-child(2)',
          searchWord(missingFontsMap, 'Replace Fonts')
        );
      });
    });

    describe('Tooltip', () => {
      it.each([
        // ['Menu', 'Shortcut'], // TODO
        ['Move Tools', 'No shortcut', 'Move Tools'],
        ['Region Tools', 'No shortcut', 'Region Tools'],
        ['Shape Tools', 'No shortcut', 'Shape Tools'],
        ['Drawing Tools', 'No shortcut', 'Drawing Tools'],
        ['Text Tool', 'Shortcut', 'Text'],
        ['Hand Tool', 'Shortcut', 'Hand Tool'],
        ['Comment Tool', 'Shortcut', 'Add Comment'],
      ])('%s が翻訳されている', async (name, selector, enWord) => {
        await hover(toolbarSelector[name]);
        // await page.screenshot({path: 'screenshot_'+name+'.png'});
        // await printLabels(tooltipSelector[selector]);
        await compareInnerHTML(
          tooltipSelector[selector],
          searchWord(tooltipMap['Toolbar'], enWord)
        );
      });
      it.skip.each([
        ['Selected Move Tool', 'Shortcut', 'KeyV'],
        ['Selected Move Tool', 'Shortcut', 'KeyK'],
        ['Selected Region Tool', 'Shortcut', 'KeyF'],
        ['Selected Region Tool', 'Shortcut', 'KeyS'],
      ])('%s が翻訳されている', async (name, selector, enWord) => {
        await click();
        await hover(toolbarSelector[name]);
        await compareInnerHTML(
          tooltipSelector[selector],
          searchWord(tooltipMap['Toolbar'], enWord)
        );
      });
    });
  });

  // https://help.figma.com/hc/en-us/articles/360039831974-View-layers-and-assets-in-the-Layers-Panel
  describe('Layers Panel', () => {
    it('タブが翻訳されている', async () => {
      const selector =
        'div.left_panel--content--35qKc div.pages_panel--tab--3s1Y5';
      // await printDataLabels(selector);
      await compareDataLabels(selector, layersPanelMap['Tab']);
    });
    describe.skip('Layers', () => {
      // await click('div.pages_panel--tab--3s1Y5');
    });
    describe.skip('Assets panel', () => {
      it('Local components が翻訳されている', async () => {
        // Assetsタブクリック
        await click('div.pages_panel--assetsTab--2Db-N');

        const selector =
          'div.library_section_header--sectionHeader1_redesign--2tKT4';
        await printInnerHTMLs(selector);
        // await compareDataLabels(selector, layersPanelMap['Tab']);
      });
    });
    describe.skip('Team Library', () => {});
    describe.skip('Pages', () => {
      // Right Click Menu
      it('右クリックメニューが翻訳されている', async () => {
        // const selector =
        // 'div.left_panel--content--35qKc div.pages_panel--tab--3s1Y5';
        // await printDataLabels(selector);
        // await compareDataLabels(selector, layersPanelMap['Tab']);
      });
    });
  });

  // https://help.figma.com/hc/en-us/articles/360039832014
  describe('Properties panel', () => {
    describe('Design tab', () => {
      // https://help.figma.com/hc/en-us/articles/360040028114
      describe.skip('Export', () => {
        it('モーダルが翻訳されている', async () => {
          // TestFrame選択
          await click(
            'div.objects_panel--rowContainer--A7Umr > div:nth-child(2)'
          );
          // Export設定ボタン
          await click('span.export_panel--exportSettings--24TCT');

          await compareInnerHTML(
            'div.header_modal--headerModalTitle--8hnpX',
            searchWord(exportModalMap, 'Export')
          );

          await compareInnerHTML(
            'div.draggable_modal--contentContainer--PfnuK > div > div > div > label:nth-child(2)',
            searchWord(exportModalMap, 'Contents Only')
          );

          await compareInnerHTML(
            'div.draggable_modal--contentContainer--PfnuK > div > div > div > div:nth-child(1) > label:nth-child(2)',
            searchWord(exportModalMap, 'Include "id" Attribute')
          );

          await compareInnerHTML(
            'div.draggable_modal--contentContainer--PfnuK > div > div > div > div:nth-child(2) > label:nth-child(2)',
            searchWord(exportModalMap, 'Outline Text')
          );

          await compareInnerHTML(
            'div.draggable_modal--contentContainer--PfnuK > div > div > div > div:nth-child(3) > label:nth-child(2)',
            searchWord(exportModalMap, 'Simplify Stroke')
          );
        });
      });
    });
    describe('Prototype tab', () => {});
    describe('Inspect tab', () => {});
  });

  describe('Canvas', () => {
    describe('右クリックメニューが翻訳されている', () => {
      describe('Object1', () => {});
      describe('Object2', () => {});
    });
  });

  describe('Help Widget', () => {
    it('メニューが翻訳されている', async () => {
      await click('div.help_widget--helpWidget--22IIi');
      // await printInnerHTMLs(
      //   'div.help_widget--helpWidget--22IIi a.dropdown--option--20q--'
      // );
      await compareInnerHTMLs(
        'div.help_widget--helpWidget--22IIi a.dropdown--option--20q--',
        helpMap
      );
      // await page.screenshot({path: 'screenshot.png'});
    });
  });
});
