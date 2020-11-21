/* globals
   mainMenuMap, toolsMap, tooltipMap, panelMap, panelTabMap,
   panelSelectMap, modalMap, interactionListMap, shortcutMap,
   shortcutRegexpMap, helpMap, helpTooltipMap, missingFontsMap
   defaultLanguage
 */

// ラベル要素の中身を日本語で置き換える
function _translateInnerHTML(selector, map) {
  const labels = document.querySelectorAll(selector);
  // console.log(labels);
  labels.forEach((label) => {
    const ret = map.find((m) => m['en'] === label.innerHTML); // 先頭一致
    if (ret) {
      // 1行表示にするため
      if (label.innerHTML === 'Auto Layout') {
        label.parentNode.style['grid-column-end'] = 'span 12';
      } else if (label.innerHTML === 'Clip content') {
        label.style['grid-column-end'] = 'span 16';
      } else if (label.innerHTML === 'Animation') {
        label.style['grid-column-end'] = 'span 12';
      } else if (label.innerHTML === 'Local Styles') {
        label.style['grid-column-end'] = 'span 12';
      }
      label.innerHTML = ret[defaultLanguage];
    }
  });
}

function _translateInnerHTMLRegexp(selector, map) {
  const labels = document.querySelectorAll(selector);
  labels.forEach((label) => {
    const ret = map.find((m) => label.innerHTML.startsWith(m['en'])); // 先頭一致
    if (ret) {
      label.innerHTML = label.innerHTML.replace(
        ret['en'],
        ret[defaultLanguage]
      );
    }
  });
}

// data-label 属性を日本語で置き換える
function _translateDataLabel(selector, map) {
  const labels = document.querySelectorAll(selector);
  // console.log(labels);
  labels.forEach((label) => {
    const ret = map.find((m) => m['en'] === label.getAttribute('data-label')); // 先頭一致
    if (ret) {
      label.setAttribute('data-label', ret[defaultLanguage]);
      // 1行表示にするため TODO 固定で良いか?
      label.style.padding = '0 18px';
    }
  });
}

function translateToolbar() {
  // メインメニューラベル要素の class
  // TODO 正規表現にして変更に耐性もたせるか? 速度低下する?
  _translateInnerHTML('.multilevel_dropdown--name--1abLT', mainMenuMap);

  // ツールラベル要素の class
  _translateInnerHTML('.action_option--text--3Rze3', toolsMap);

  // Done, Share ボタン TODO map変数を独自に用意してもよいかも(mainMenuMapはおおきすぎるため)
  _translateInnerHTML('.toolbar_view--textButton--eiCIw', mainMenuMap);
}

// 左(ページ)パネル
// 右(プロパティ)パネル
function translatePanel() {
  // パネルタイトル要素の class
  const panelTitleSelector =
    '.raw_components--panelTitle--7MaOu,' +
    '.raw_components--panelTitle--7MaOu div,' +
    '.draggable_list--panelTitleText--1q89R,' +
    '.component_tiles--sectionHeader--10N5o';
  // label
  const labelSelector =
    '.raw_components--label--34YmO,' +
    '.constraints_panel--checkboxLabel--3vvz3,' +
    '.checkbox--_checkboxLabel--1418z,' +
    '.instance_panel__OLD--link--3yIYF,' +
    '.basic_form--btn--3A-Ju,' +
    '.raw_components--labelInactive--2GwUQ,' +
    '.basic_form--label--hdhP9,' +
    'a.style_preview_panel--addDescriptionLink--26D0-';
  // 右クリック
  const rightClickSelector = '.library_item_tile--contextMenu--N4uYI a';
  _translateInnerHTML(
    panelTitleSelector + ',' + labelSelector + ',' + rightClickSelector,
    panelMap
  );

  // パネルタイトル要素の class
  _translateInnerHTML(
    '.pages_panel--pagesHeaderText--1GE3u,' +
      '.library_section_header--sectionHeader1_redesign--2tKT4',
    panelTabMap
  );

  // パネル Layers, Assets, design, prototype, code
  // Text Style編集パネルから戻ると Design, Prototype, Codeがオリジナル表示に戻るため
  // ここで再度翻訳する
  _translateDataLabel('.pages_panel--tab--3s1Y5', panelTabMap);

  // セレクトボックス
  // 選択済み
  const selectedSelector =
    '.select--inputText--6fenW,' + '.paint_panels--typeContainer--KyReT';
  // 選択メニュー
  const selectMenuSelector =
    '.select--optionText--2C5M1,' +
    '.multilevel_dropdown--name--1abLT,' +
    '.prototype_device_panel--deviceOption--1zMFr span';
  _translateInnerHTML(
    selectedSelector + ',' + selectMenuSelector,
    panelSelectMap
  );

  // Interaction
  _translateInnerHTML(
    '.prototype_interaction_list--interactionName--3052S',
    interactionListMap
  );
  // フレーム名が翻訳されるため、削除
  // _translateInnerHTML('.prototype_interaction_list--targetText--M-vAz',
  //    interactionListMap);
}

// モーダルウィンドウ
function translateModal() {
  // 画像
  const imageSelector = '.image_settings_modal--colorAdjustLabel--2F676';
  // テキスト、Export
  const textSelector =
    '.header_modal--headerModalTitle--8hnpX,' +
    '.type_settings--previewPlaceholder--mjwRc,' +
    '.raw_components--label--34YmO,' +
    '.raw_components--panelTitle--7MaOu';
  _translateInnerHTML(imageSelector + ',' + textSelector, modalMap);

  // Missing Fonts
  const missingSelector =
    'div.missing_fonts_modal--title--1wSnP,' +
    'div.missing_fonts_modal--message--YgBr5,' +
    'div.missing_fonts_modal--fontRow--1zEr2 > label:nth-child(1),' +
    'div.missing_fonts_modal--fontRow--1zEr2 > label:nth-child(2),' +
    'div.missing_fonts_modal--buttonRow--1UfFc > button:nth-child(1),' +
    'div.missing_fonts_modal--buttonRow--1UfFc > button:nth-child(2)';
  _translateInnerHTML(missingSelector, missingFontsMap);

  // 1行表示にするため
  const imageLabels = document.querySelectorAll(imageSelector);
  imageLabels.forEach((label) => {
    label.style['grid-column-end'] = '12';
  });
  const exportLabels = document.querySelectorAll(
    'label.export_settings--label--2T2GR'
  );
  exportLabels.forEach((label) => {
    label.style['grid-column-end'] = 'span 18';
  });
}

function translateTooltip() {
  // ショートカットありのツールチップ
  // .tooltip--notInteractive--2q4-q
  //   div.tooltip--content--3GEna
  //     span.tooltip--textWithShortcut--2r28_
  //       <span>Hand Tool</span>
  // Hand Tool, Text など固定のもの: tooltipMap
  // Rectangle, Pen など選択状況によって変わるもの: toolsMap
  // 選択元のツールバーtoolsMapの翻訳を利用
  const shortcutTooltip = 'div.tooltip--content--3GEna span span';

  // ショートカットなしのツールチップ
  // .tooltip--notInteractive--2q4-q
  //   div.tooltip--content--3GEna
  //     <span...>Polygon</span>
  // Edit Object など固定のもの: tooltipMap
  // Polygon, Start など選択状況によって変わるもの: toolsMap
  // 選択元のツールバーtoolsMapの翻訳を利用
  const noshortcutTooltip = 'div.tooltip--content--3GEna span';

  _translateInnerHTML(
    shortcutTooltip + ',' + noshortcutTooltip,
    tooltipMap.concat(toolsMap)
  );
}

function translateShortcut() {
  _translateInnerHTML(
    '.keyboard_shortcut_panel--tab--DuCac,' +
      '.keyboard_shortcut_panel--caption--GQtJO,' +
      '.keyboard_shortcut_panel--categoryCaption--34arC',
    shortcutMap
  );

  const selector = '.keyboard_shortcut_panel--shortcutName--1cktE';
  _translateInnerHTML(
    selector,
    mainMenuMap.concat(toolsMap, tooltipMap, shortcutMap)
  );
  _translateInnerHTMLRegexp(selector, shortcutRegexpMap);
}

function translateHelp() {
  const selector =
    'div.help_widget--helpWidget--22IIi a.dropdown--option--20q--';
  _translateInnerHTML(selector, helpMap);
  _translateInnerHTMLRegexp(selector, helpMap);
  _translateInnerHTML('div.help_widget--tooltip--jXoVZ', helpTooltipMap);
}

// 動的に生成されるヘルプウィジェットの監視
function observeHelpChange() {
  // 動的生成ヘルプウィジェット要素の先祖 class (TODO 要検討)
  const target = document.querySelector('div.help_widget--helpWidget--22IIi');
  const config = {
    attributes: true,
    childList: true,
    subtree: true, // 子孫の変更を監視
  };

  // 表示完了待ち
  if (!target) {
    // ツールチップが初めて表示されるまでループし続ける
    window.setTimeout(observeTooltipChange, 100);
    return;
  }
  translateHelp();

  const observer = new MutationObserver(function () {
    // 変更検知の無限ループ回避
    observer.disconnect();

    // ツールチップ生成検知時に翻訳する
    translateHelp();

    observer.observe(target, config);
  });
  observer.observe(target, config);
}

// 動的に生成されるキーボードショートカットパネルの監視
function observeShortcutChange() {
  // 動的生成キーボードショートカットパネル要素の先祖 class (TODO 要検討)
  const target = document.querySelector(
    'div.fullscreen_view--flexContainer--3cbGo'
  );
  const config = {
    attributes: true,
    childList: true,
    subtree: true, // 子孫の変更を監視
  };

  // ページロード待ち
  if (!target) {
    window.setTimeout(observeShortcutChange, 100);
    return;
  }

  const observer = new MutationObserver(function () {
    // 動的生成キーボードショートカットパネル要素の先祖 class (TODO 要検討)
    const targetShortcut = document.querySelector(
      'div.keyboard_shortcut_panel--keyboardShortcutPanel--2UT6R'
    );
    if (targetShortcut) {
      // 変更検知の無限ループ回避
      observer.disconnect();

      // キーボードショートカットパネル生成検知時に翻訳する
      translateShortcut();

      observer.observe(target, config);
    }
  });
  observer.observe(target, config);
}

// 動的に生成されるツールチップの監視
function observeTooltipChange() {
  // 動的生成ツールチップ要素の先祖 class (TODO 要検討)
  // fullscreen_view--page--1QuyLの兄弟
  const target = document.querySelector('.tooltip--notInteractive--2q4-q');
  const config = {
    attributes: true,
    childList: true,
    subtree: true, // 子孫の変更を監視
  };

  // ツールチップ表示完了待ち
  if (!target) {
    // ツールチップが初めて表示されるまでループし続ける
    window.setTimeout(observeTooltipChange, 300);
    return;
  }
  translateTooltip();

  const observer = new MutationObserver(function () {
    // 変更検知の無限ループ回避
    observer.disconnect();

    // ツールチップ生成検知時に翻訳する
    translateTooltip();

    observer.observe(target, config);
  });
  observer.observe(target, config);
}

function translatePage() {
  translateToolbar();
  translatePanel();
  translateModal();
}

// 動的に生成されるページの監視
function observePageChange() {
  // 動的生成ページ要素の先祖 class (TODO 要検討)
  const menuTarget = document.querySelector('.fullscreen_view--page--1QuyL');
  const config = {
    attributes: true,
    childList: true,
    subtree: true, // 子孫の変更を監視
  };

  // ページ読み込み完了待ち
  if (!menuTarget) {
    window.setTimeout(observePageChange, 100);
    return;
  }
  translatePage();

  const menuObserver = new MutationObserver(function () {
    // 変更検知の無限ループ回避
    menuObserver.disconnect();

    // ページ要素生成検知時に翻訳する
    translatePage();

    menuObserver.observe(menuTarget, config);
  });
  menuObserver.observe(menuTarget, config);
}

function initialize() {
  observePageChange();
  observeTooltipChange();
  observeShortcutChange();
  observeHelpChange();
}

/* ページ遷移の監視
 * 初回ロード時はタイミングの関係で実行されない(TODO 要検証)
 */
function observePageTransition() {
  // ページ遷移時に変化する要素の親要素 class (TODO 要検討)
  const page = document.querySelector('.in_app_page--content--2V_He');

  // ページ読み込み完了待ち
  if (!page) {
    window.setTimeout(observePageTransition, 100);
    return;
  }
  const pageObserver = new MutationObserver(function () {
    // ページ遷移後、再度ページを監視する
    initialize();
  });
  pageObserver.observe(page, {
    attributes: true,
    childList: true,
  });
}
observePageTransition();

/* 初回ロード完了時に実行
 * ページ遷移時は実行されない
 */
document.addEventListener('readystatechange', (event) => {
  if (event.target.readyState === 'complete') {
    // ロード完了後、ページ監視
    initialize();
  }
});
