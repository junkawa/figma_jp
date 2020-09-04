// メニューのラベル要素の中身を日本語で置き換える
function translateInnerHTML(selector, map) {
    const labels = document.querySelectorAll(selector);
    // console.log(labels);
    labels.forEach(label => {
        const ret = map.find((m) => m["en"] === label.innerHTML); // 先頭一致
        if (ret) {
            label.innerHTML = ret["jp"];
        }
    });
}

// ツールチップ要素を日本語で置き換える
function translateTooltip(selector, map) {
    const tooltips = document.querySelectorAll(selector);
    // console.log(labels);
    tooltips.forEach(tooltip => {
        const ret = map.find((m) => m["en"] === tooltip.getAttribute("data-tooltip")); // 先頭一致
        if (ret) {
            tooltip.setAttribute("data-tooltip", ret["jp"]);
        }
    });
}

function translateMainMenu() {
    // メインメニューラベル要素の class
    const selector = ".multilevel_dropdown--name--1abLT";
    translateInnerHTML(selector, mainMenuMap);
}

function translateTools() {
    // ツールラベル要素の class
    const selector = ".action_option--text--3Rze3";
    translateInnerHTML(selector, toolsMap);
}

// 静的に(読み込み完了時に)生成されるメニューの翻訳
function translateStaticMenu() {
    // ページ読み込み完了待ち
    //if (!page) {
    //window.setTimeout(observePage, 100);
    //  return;
    //}

    // Share ボタン
    //const shareLabel = document.querySelector(".toolbar_view--shareButton--Q6fI7");
    //shareLabel.innerHTML = "共有";

    // ツールチップ
    //const selector1 = ".chevron--chevronContainer--3xT09";
    //translateTooltip(selector1, tooltipMap);

    //const selector2 = ".action--enabled--16Cku";
    //translateTooltip(selector2, tooltipMap);

}

// 動的に生成されるメニューの監視
function observeDynamicMenu() {
    // 動的生成メニュー要素の先祖 class (TODO 要検討)
    const selector = ".fullscreen_view--page--1QuyL";
    const menuTarget = document.querySelector(selector);
    const config = {
        attributes: true,
        childList: true,
        subtree: true // 子孫の変更を監視
    };

    // ページ読み込み完了待ち
    if (!menuTarget) {
        window.setTimeout(observeDynamicMenu, 100);
        return;
    }

    const menuObserver = new MutationObserver(function () {
        // 変更検知の無限ループ回避
        menuObserver.disconnect();

        // メニュー生成検知時に翻訳する
        translateMainMenu();
        translateTools();

        menuObserver.observe(menuTarget, config);

    });
    menuObserver.observe(menuTarget, config);
}

/* ページ遷移の監視
 * 初回ロード時はタイミングの関係で実行されない
 */
function observePage() {
    // ページ遷移時に変化する要素の親要素 class (TODO 要検討)
    const selector = ".in_app_page--content--2V_He";
    const page = document.querySelector(selector);

    // ページ読み込み完了待ち
    if (!page) {
        window.setTimeout(observePage, 100);
        return;
    }
    const pageObserver = new MutationObserver(function () {
        translateStaticMenu();
        // ページ遷移後、再度メニューを監視する
        observeDynamicMenu();
    });
    pageObserver.observe(page, {
        attributes: true,
        childList: true
    });
}
observePage();

/* 初回ロード完了時に実行
 * ページ遷移時は実行されない
 */
document.addEventListener("readystatechange", event => {
    if (event.target.readyState === "complete") {
        translateStaticMenu();
        // ロード完了後にメニューを監視する
        observeDynamicMenu();
    }
});
