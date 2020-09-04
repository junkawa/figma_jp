// メニューのラベル要素の中身を日本語で置き換える
function translate(selector, map) {
    const labels = document.querySelectorAll(selector);
    // console.log(labels);
    labels.forEach(label => {
        const ret = map.find((m) => m["en"] === label.innerHTML); // 先頭一致
        if (ret) {
            label.innerHTML = ret["jp"];
        }
    });
}

function translateMainMenu() {
    // メインメニューラベル要素の class
    const selector = '.multilevel_dropdown--name--1abLT';
    translate(selector, mainMenuMap);
}

function translateTools() {
    // ツールラベル要素の class
    const selector = '.action_option--text--3Rze3';
    translate(selector, toolsMap);

    // ツールチップ

}

// 静的に生成されるメニューの翻訳
function translateStaticMenu() {
    // Share ボタン
    const label = document.querySelector('.toolbar_view--shareButton--Q6fI7');
    label.innerHTML = "共有";
}

// 動的に生成されるメニューの監視
function observeDynamicMenu() {
    // 動的生成メニュー要素の先祖 class (TODO 要検討)
    const menuSelector = '.fullscreen_view--page--1QuyL';
    const menuTarget = document.querySelector(menuSelector);
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
    const page = document.querySelector(".in_app_page--content--2V_He");

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
document.addEventListener('readystatechange', event => {
    if (event.target.readyState === 'complete') {
        translateStaticMenu();
        // ロード完了後にメニューを監視する
        observeDynamicMenu();
    }
});
