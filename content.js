/* globals
   mainMenuMap, toolsMap, tooltipMap, panelMap, panelTabMap,
   panelSelectMap, modalMap, interactionListMap, shortcutMap,
   shortcutRegexpMap,
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
      label.innerHTML =
      label.innerHTML.replace(ret['en'], ret[defaultLanguage]);
    }
  });
}

// data-tooltip 属性を日本語で置き換える
function _translateDataTooltip(selector, map) {
  const tooltips = document.querySelectorAll(selector);
  // console.log(labels);
  tooltips.forEach((tooltip) => {
    const ret = map.find((m) => m['en'] ===
    tooltip.getAttribute('data-tooltip')); // 先頭一致
    if (ret) {
      tooltip.setAttribute('data-tooltip', ret[defaultLanguage]);
    }
  });
}

// data-label 属性を日本語で置き換える
function _translateDataLabel(selector, map) {
  const labels = document.querySelectorAll(selector);
  // console.log(labels);
  labels.forEach((label) => {
    const ret = map.find((m) => m['en'] ===
    label.getAttribute('data-label')); // 先頭一致
    if (ret) {
      label.setAttribute('data-label', ret[defaultLanguage]);
      // 1行表示にするため TODO 固定で良いか?
      label.style.padding = '0 18px';
    }
  });
}

function translateDynamicMainMenu() {
  // メインメニューラベル要素の class
  // TODO 正規表現にして変更に耐性もたせるか? 速度低下する?
  const selector = '.multilevel_dropdown--name--1abLT';
  _translateInnerHTML(selector, mainMenuMap);
}

function translateDynamicTools() {
  // ツールラベル要素の class
  const selector = '.action_option--text--3Rze3';
  _translateInnerHTML(selector, toolsMap);

  // Done ボタン TODO map変数を独自に用意してもよいかも(mainMenuMapはおおきすぎるため)
  const shareSelector = '.toolbar_view--textButton--eiCIw';
  _translateInnerHTML(shareSelector, mainMenuMap);
}

// 左(ページ)パネル
// 右(プロパティ)パネル
function translateDynamicPanel() {
  // パネルタイトル要素の class
  {
    const selector = '.raw_components--panelTitle--7MaOu';
    _translateInnerHTML(selector, panelMap);
    const selector2 = '.raw_components--panelTitle--7MaOu div';
    _translateInnerHTML(selector2, panelMap);
    const selector3 = '.draggable_list--panelTitleText--1q89R';
    _translateInnerHTML(selector3, panelMap);
    const selector4 = '.pages_panel--pagesHeaderText--1GE3u';
    _translateInnerHTML(selector4, panelTabMap);
    const selector5 = '.library_section_header--sectionHeader1_redesign--2tKT4';
    _translateInnerHTML(selector5, panelTabMap);
    const selector6 = '.component_tiles--sectionHeader--10N5o';
    _translateInnerHTML(selector6, panelMap);
    // パネル Layers, Assets, design, prototype, code
    // Text Style編集パネルから戻ると Design, Prototype, Codeがオリジナル表示に戻るため
    // ここで再度翻訳する
    const selector7 = '.pages_panel--tab--3s1Y5';
    _translateDataLabel(selector7, panelTabMap);
  }

  // セレクトボックス
  {
    // 選択済み
    const selector1 = '.select--inputText--6fenW';
    _translateInnerHTML(selector1, panelSelectMap);
    const selector2 = '.paint_panels--typeContainer--KyReT';
    _translateInnerHTML(selector2, panelSelectMap);

    // 選択メニュー
    const selector3 = '.select--optionText--2C5M1';
    _translateInnerHTML(selector3, panelSelectMap);
    const selector4 = '.multilevel_dropdown--name--1abLT';
    _translateInnerHTML(selector4, panelSelectMap);
    const selector5 = '.prototype_device_panel--deviceOption--1zMFr span';
    _translateInnerHTML(selector5, panelSelectMap);
  }

  // label
  {
    const selector1 = '.raw_components--label--34YmO';
    _translateInnerHTML(selector1, panelMap);
    const selector2 = '.constraints_panel--checkboxLabel--3vvz3';
    _translateInnerHTML(selector2, panelMap);
    const selector3 = '.instance_panel__OLD--link--3yIYF';
    _translateInnerHTML(selector3, panelMap);
    const selector4 = '.basic_form--btn--3A-Ju';
    _translateInnerHTML(selector4, panelMap);
    const selector5 = '.raw_components--labelInactive--2GwUQ';
    _translateInnerHTML(selector5, panelMap);
    const selector6 = '.basic_form--label--hdhP9';
    _translateInnerHTML(selector6, panelMap);
    const selector7 = 'a.style_preview_panel--addDescriptionLink--26D0-';
    _translateInnerHTML(selector7, panelMap);
  }

  // 右クリック
  {
    const selector1 = '.library_item_tile--contextMenu--N4uYI a';
    _translateInnerHTML(selector1, panelMap);
  }

  // Interaction
  {
    const selector1 = '.prototype_interaction_list--interactionName--3052S';
    _translateInnerHTML(selector1, interactionListMap);
    // フレーム名が翻訳されるため、削除
    // const selector2 = '.prototype_interaction_list--targetText--M-vAz';
    // _translateInnerHTML(selector2, interactionListMap);
  }
}

// モーダルウィンドウ
function translateDynamicModal() {
  // 画像
  {
    const selector1 = '.image_settings_modal--colorAdjustLabel--2F676';
    _translateInnerHTML(selector1, modalMap);
    // 1行表示にするため
    const labels = document.querySelectorAll(selector1);
    labels.forEach((label) => {
      label.style['grid-column-end'] = '12';
    });
  }
  // テキスト
  {
    const selector1 = '.header_modal--headerModalTitle--8hnpX';
    _translateInnerHTML(selector1, modalMap);
    const selector2 = '.type_settings--previewPlaceholder--mjwRc';
    _translateInnerHTML(selector2, modalMap);
    const selector3 = '.raw_components--label--34YmO';
    _translateInnerHTML(selector3, modalMap);
    const selector4 = '.raw_components--panelTitle--7MaOu';
    _translateInnerHTML(selector4, modalMap);
  }
}

function translateDynamicTooltip() {
  // ショートカットありのツールチップ
  // .tooltip--notInteractive--2q4-q
  //   div.tooltip--content--3GEna
  //     span.tooltip--textWithShortcut--2r28_
  //       <span>Hand Tool</span>
  const selector1 = 'div.tooltip--content--3GEna span span';
  // Hand Tool, Text など固定のもの
  _translateInnerHTML(selector1, tooltipMap);
  // Rectangle, Pen など選択状況によって変わるもの
  // 選択元のツールバーtoolsMapの翻訳を利用
  _translateInnerHTML(selector1, toolsMap);

  // ショートカットなしのツールチップ
  // .tooltip--notInteractive--2q4-q
  //   div.tooltip--content--3GEna
  //     <span...>Polygon</span>
  const selector2 = 'div.tooltip--content--3GEna span';
  // Edit Object など固定のもの
  _translateInnerHTML(selector2, tooltipMap);
  // Polygon, Start など選択状況によって変わるもの
  // 選択元のツールバーtoolsMapの翻訳を利用
  _translateInnerHTML(selector2, toolsMap);
}

function translateDynamicShortcut() {
  const selector1 = '.keyboard_shortcut_panel--tab--DuCac';
  _translateInnerHTML(selector1, shortcutMap);
  const selector2 = '.keyboard_shortcut_panel--caption--GQtJO';
  _translateInnerHTML(selector2, shortcutMap);
  const selector3 = '.keyboard_shortcut_panel--shortcutName--1cktE';
  _translateInnerHTML(selector3, mainMenuMap);
  _translateInnerHTML(selector3, toolsMap);
  _translateInnerHTML(selector3, tooltipMap);
  _translateInnerHTML(selector3, shortcutMap);
  _translateInnerHTMLRegexp(selector3, shortcutRegexpMap);
  const selector4 = '.keyboard_shortcut_panel--categoryCaption--34arC';
  _translateInnerHTML(selector4, shortcutMap);
}

// 静的に(読み込み完了時に)生成されるメニューの翻訳
function translateStaticMenu() {
  // ツールバー class
  const selector = '.toolbar_view--toolbar--2396w';
  const toolbar = document.querySelector(selector);
  // ツールバー読み込み完了待ち
  if (!toolbar) {
    window.setTimeout(translateStaticMenu, 100);
    return;
  }

  // Share ボタン
  const shareSelector = '.toolbar_view--shareButton--Q6fI7';
  _translateInnerHTML(shareSelector, mainMenuMap);

  // ツールチップ
  const selector1 = '.chevron--chevronContainer--3xT09';
  _translateDataTooltip(selector1, tooltipMap);

  const selector2 = '.action--enabled--16Cku';
  _translateDataTooltip(selector2, tooltipMap);

  // パネル Layers, Assets, design, prototype, code
  const selector3 = '.pages_panel--tab--3s1Y5';
  _translateDataLabel(selector3, panelTabMap);
}

// 動的に生成されるキーボードショートカットパネルの監視
function observeDynamicShortcut() {
  // 動的生成キーボードショートカットパネル要素の先祖 class (TODO 要検討)
  const selector = 'div.fullscreen_view--flexContainer--3cbGo';
  const target = document.querySelector(selector);
  const config = {
    attributes: true,
    childList: true,
    subtree: true, // 子孫の変更を監視
  };

  // ページロード待ち
  if (!target) {
    window.setTimeout(observeDynamicShortcut, 100);
    return;
  }

  const observer = new MutationObserver(function() {
    // 動的生成キーボードショートカットパネル要素の先祖 class (TODO 要検討)
    const selector =
        'div.keyboard_shortcut_panel--keyboardShortcutPanel--2UT6R';
    const targetShortcut = document.querySelector(selector);
    if (targetShortcut) {
      // 変更検知の無限ループ回避
      observer.disconnect();

      // キーボードショートカットパネル生成検知時に翻訳する
      translateDynamicShortcut();

      observer.observe(target, config);
    }
  });
  observer.observe(target, config);
}

// 動的に生成されるツールチップの監視
function observeDynamicTooltip() {
  // 動的生成ツールチップ要素の先祖 class (TODO 要検討)
  // fullscreen_view--page--1QuyLの兄弟
  const selector = '.tooltip--notInteractive--2q4-q';
  const target = document.querySelector(selector);
  const config = {
    attributes: true,
    childList: true,
    subtree: true, // 子孫の変更を監視
  };

  // ツールチップ表示完了待ち
  if (!target) {
    // ツールチップが初めて表示されるまでループし続ける
    window.setTimeout(observeDynamicTooltip, 300);
    return;
  }
  translateDynamicTooltip();

  const observer = new MutationObserver(function() {
    // 変更検知の無限ループ回避
    observer.disconnect();

    // ツールチップ生成検知時に翻訳する
    translateDynamicTooltip();

    observer.observe(target, config);
  });
  observer.observe(target, config);
}

// 動的に生成されるメニューの監視
function observeDynamicMenu() {
  // 動的生成メニュー要素の先祖 class (TODO 要検討)
  const selector = '.fullscreen_view--page--1QuyL';
  const menuTarget = document.querySelector(selector);
  const config = {
    attributes: true,
    childList: true,
    subtree: true, // 子孫の変更を監視
  };

  // ページ読み込み完了待ち
  if (!menuTarget) {
    window.setTimeout(observeDynamicMenu, 100);
    return;
  }

  const menuObserver = new MutationObserver(function() {
    // 変更検知の無限ループ回避
    menuObserver.disconnect();

    // メニュー生成検知時に翻訳する
    translateDynamicMainMenu();
    translateDynamicTools();
    translateDynamicPanel();
    translateDynamicModal();

    menuObserver.observe(menuTarget, config);
  });
  menuObserver.observe(menuTarget, config);
}

function initialize() {
  translateStaticMenu();
  observeDynamicMenu();
  observeDynamicTooltip();
  observeDynamicShortcut();
}

/* ページ遷移の監視
 * 初回ロード時はタイミングの関係で実行されない(TODO 要検証)
 */
function observePage() {
  // ページ遷移時に変化する要素の親要素 class (TODO 要検討)
  const selector = '.in_app_page--content--2V_He';
  const page = document.querySelector(selector);

  // ページ読み込み完了待ち
  if (!page) {
    window.setTimeout(observePage, 100);
    return;
  }
  const pageObserver = new MutationObserver(function() {
    // ページ遷移後、再度メニューを監視する
    initialize();
  });
  pageObserver.observe(page, {
    attributes: true,
    childList: true,
  });
}
observePage();

/* 初回ロード完了時に実行
 * ページ遷移時は実行されない(TODO 検証)
 */
document.addEventListener('readystatechange', (event) => {
  if (event.target.readyState === 'complete') {
    // ロード完了後、メニュー監視
    initialize();
  }
});
