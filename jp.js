// ツールバー > メインメニュー の翻訳
const mainMenuMap = [
    // Menu
    {
        "en": "Back to Files",
        "jp": "プロジェクトに戻る"
    },
    // -- File --
    {
        "en": "File",
        "jp": "ファイル"
    },
    {
        "en": "New",
        "jp": "新規作成"
    },
    {
        "en": "New from Sketch File…",
        "jp": "Sketchファイルを開く"
    },
    {
        "en": "Place Image",
        "jp": "画像を配置"
    },
    {
        "en": "Save as .fig…",
        "jp": ".figで保存"
    },
    {
        "en": "Save to Version History…",
        "jp": "バージョン履歴を追加"
    },
    {
        "en": "Show Version History",
        "jp": "バージョン履歴を表示"
    },
    {
        "en": "Export…",
        "jp": "書き出し"
    },
    {
        "en": "Export Frames to PDF…",
        "jp": "PDFで書き出し"
    },
    // -- Edit --
    {
        "en": "Edit",
        "jp": "編集"
    },
    {
        "en": "Undo",
        "jp": "取り消し"
    },
    {
        "en": "Redo",
        "jp": "やり直し"
    },
    {
        "en": "Copy as",
        "jp": "コピー"
    },
    {
        "en": "Copy as Text",
        "jp": "テキストとしてコピー"
    },
    {
        "en": "Copy as CSS",
        "jp": "CSSとしてコピー"
    },
    {
        "en": "Copy as SVG",
        "jp": "SVGとしてコピー"
    },
    {
        "en": "Copy as PNG",
        "jp": "PNGとしてコピー"
    },
    // -- Edit --
    {
        "en": "Paste Over Selection",
        "jp": "選択したものの上にペースト"
    },
    {
        "en": "Duplicate",
        "jp": "複製"
    },
    {
        "en": "Delete",
        "jp": "削除"
    },
    {
        "en": "Set Default Properties",
        "jp": "プロパティのデフォルトに設定"
    },
    {
        "en": "Copy Properties",
        "jp": "プロパティをコピー"
    },
    {
        "en": "Paste Properties",
        "jp": "プロパティをペースト"
    },
    {
        "en": "Pick Color",
        "jp": "色を選択"
    },
    {
        "en": "Select All",
        "jp": "すべてを選択"
    },
    {
        "en": "Select None",
        "jp": "選択解除"
    },
    {
        "en": "Select Inverse",
        "jp": "他を選択"
    },
    {
        "en": "Select All with Same Properties",
        "jp": "共通のプロパティをすべて選択"
    },
    {
        "en": "Select All with Same Fill",
        "jp": "共通の塗りをすべて選択"
    },
    {
        "en": "Select All with Same Stroke",
        "jp": "共通の線をすべて選択"
    },
    {
        "en": "Select All with Same Effect",
        "jp": "共通のエフェクトをすべて選択"
    },
    {
        "en": "Select All with Same Text Properties",
        "jp": "共通のテキストプロパティをすべて選択"
    },
    {
        "en": "Select All with Same Font",
        "jp": "共通のフォントを選択"
    },
    {
        "en": "Select All with Same Instance",
        "jp": "共通のインスタンスを選択"
    },
    // -- View --
    {
        "en": "View",
        "jp": "表示"
    },
    {
        "en": "Pixel Grid",
        "jp": "ピクセルグリッドを表示"
    },
    {
        "en": "Layout Grids",
        "jp": "レイアウトグリッドを表示"
    },
    {
        "en": "Mask Outlines",
        "jp": "マスクのアウトラインを表示"
    },
    {
        "en": "Frame Outlines",
        "jp": "フレームのアウトラインを表示"
    },
    {
        "en": "Resource Use",
        "jp": "リソース使用量を表示"
    },
    {
        "en": "Rulers",
        "jp": "定規を表示"
    },
    {
        "en": "Outlines",
        "jp": "アウトラインを表示"
    },
    {
        "en": "Show/Hide UI",
        "jp": "UIを表示/非表示"
    },
    {
        "en": "Multiplayer Cursors",
        "jp": "共同作業者のカーソルを表示"
    },
    {
        "en": "Panels",
        "jp": "パネル"
    },
    {
        "en": "Open Layers Panel",
        "jp": "レイヤーパネルを表示"
    },
    {
        "en": "Open Assets Panel",
        "jp": "アセットパネルを表示"
    },
    {
        "en": "Open Design Panel",
        "jp": "デザインパネルを表示"
    },
    {
        "en": "Open Prototype Panel",
        "jp": "プロトタイプパネルを表示"
    },
    {
        "en": "Open Code Panel",
        "jp": "コードパネルを表示"
    },
    {
        "en": "Show Left Sidebar",
        "jp": "サイドバーを表示"
    },
    {
        "en": "Pixel Preview",
        "jp": "ピクセルでプレビュー"
    },
    {
        "en": "Zoom In",
        "jp": "ズームイン"
    },
    {
        "en": "Zoom Out",
        "jp": "ズームアウト"
    },
    {
        "en": "Zoom to 100%",
        "jp": "100％にズーム"
    },
    {
        "en": "Zoom to Fit",
        "jp": "画面に合わせてすべてをズーム"
    },
    {
        "en": "Zoom to Selection",
        "jp": "選択したものに合わせてズーム"
    },
    {
        "en": "Previous Page",
        "jp": "前のページ"
    },
    {
        "en": "Next Page",
        "jp": "次のページ"
    },
    {
        "en": "Zoom to Previous Frame",
        "jp": "前のフレームにズーム"
    },
    {
        "en": "Zoom to Next Frame",
        "jp": "次のフレームにズーム"
    },
    {
        "en": "Find Previous Frame",
        "jp": "前のフレームに移動"
    },
    {
        "en": "Find Next Frame",
        "jp": "次のフレームに移動"
    },
    // -- Object --
    {
        "en": "Object",
        "jp": "オブジェクト"
    },
    {
        "en": "Group Selection",
        "jp": "グループ化"
    },
    {
        "en": "Frame Selection",
        "jp": "フレーム化"
    },
    {
        "en": "Ungroup Selection",
        "jp": "グループ解除"
    },
    {
        "en": "Use as Mask",
        "jp": "マスクを作成"
    },
    {
        "en": "Restore Default Thumbnail",
        "jp": "デフォルトのサムネイルに戻す"
    },
    {
        "en": "Set as Thumbnail",
        "jp": "ファイルのサムネイルに設定"
    },
    {
        "en": "Add Auto Layout",
        "jp": "オートレイアウトを追加"
    },
    {
        "en": "Create Component",
        "jp": "コンポーネントを作成"
    },
    {
        "en": "Reset Instance",
        "jp": "インスタンスをリセット"
    },
    {
        "en": "Detach Instance",
        "jp": "インスタンスを解除"
    },
    {
        "en": "Main Component",
        "jp": "メインコンポーネント"
    },
    {
        "en": "Go to Main Component",
        "jp": "メインコンポーネントへ移動"
    },
    {
        "en": "Push Overrides to Main Component",
        "jp": "オーバーライドをメインに反映"
    },
    {
        "en": "Restore Main Component",
        "jp": "メインコンポーネントを復元"
    },
    {
        "en": "Bring to Front",
        "jp": "最前面へ"
    },
    {
        "en": "Bring Forward",
        "jp": "前面へ"
    },
    {
        "en": "Send Backward",
        "jp": "背面へ"
    },
    {
        "en": "Send to Back",
        "jp": "最背面へ"
    },
    {
        "en": "Flip Horizontal",
        "jp": "水平方向に反転"
    },
    {
        "en": "Flip Vertical",
        "jp": "垂直方向に反転"
    },
    {
        "en": "Rotate 180˚",
        "jp": "180°回転"
    },
    {
        "en": "Rotate 90˚ Left",
        "jp": "左に90°回転"
    },
    {
        "en": "Rotate 90˚ Right",
        "jp": "右に90°回転"
    },
    {
        "en": "Flatten Selection",
        "jp": "複合パスに拡張"
    },
    {
        "en": "Outline Stroke",
        "jp": "パスのアウトライン"
    },
    {
        "en": "Boolean Groups",
        "jp": "複合シェイプを作成"
    },
    {
        "en": "Union Selection",
        "jp": "合体"
    },
    {
        "en": "Subtract Selection",
        "jp": "前面オブジェクトで型抜き"
    },
    {
        "en": "Intersect Selection",
        "jp": "交差"
    },
    {
        "en": "Exclude Selection",
        "jp": "中マド"
    },
    {
        "en": "Rasterize Selection",
        "jp": "ラスタライズ"
    },
    {
        "en": "Show/Hide Selection",
        "jp": "選択したものを表示/非表示"
    },
    {
        "en": "Lock/Unlock Selection",
        "jp": "選択したものをロック/ロック解除"
    },
    {
        "en": "Hide Other Layers",
        "jp": "他のレイヤーを隠す"
    },
    {
        "en": "Collapse Layers",
        "jp": "レイヤーを閉じる"
    },
    {
        "en": "Remove Fill",
        "jp": "塗りを削除"
    },
    {
        "en": "Remove Stroke",
        "jp": "線を削除"
    },
    {
        "en": "Swap Fill and Stroke",
        "jp": "塗りと線を入れ替え"
    },
    // -- Vector --
    {
        "en": "Vector",
        "jp": "ベクター"
    },
    {
        "en": "Join Selection",
        "jp": "アンカーポイントを連結"
    },
    {
        "en": "Smooth Join Selection",
        "jp": "アンカーポイントをスムーズに連結"
    },
    {
        "en": "Delete and Heal Selection",
        "jp": "アンカーポイントを削除"
    },
    // -- Text --
    {
        "en": "Text",
        "jp": "テキスト"
    },
    {
        "en": "Bold",
        "jp": "太字"
    },
    {
        "en": "Italic",
        "jp": "斜体"
    },
    {
        "en": "Underline",
        "jp": "下線"
    },
    {
        "en": "Strikethrough",
        "jp": "打ち消し線"
    },
    {
        "en": "Original Case",
        "jp": "大文字小文字の変換なし"
    },
    {
        "en": "Upper Case",
        "jp": "すべて大文字"
    },
    {
        "en": "Lower Case",
        "jp": "すべて小文字"
    },
    {
        "en": "Increase Font Size",
        "jp": "フォントサイズを大きく"
    },
    {
        "en": "Decrease Font Size",
        "jp": "フォントサイズを小さく"
    },
    {
        "en": "Increase Font Weight",
        "jp": "フォントウェイトを大きく"
    },
    {
        "en": "Decrease Font Weight",
        "jp": "フォントウェイトを小さく"
    },
    {
        "en": "Increase Line Height",
        "jp": "行送りを増やす"
    },
    {
        "en": "Decrease Line Height",
        "jp": "行送りを減らす"
    },
    {
        "en": "Increase Letter Spacing",
        "jp": "文字の間隔を広げる"
    },
    {
        "en": "Decrease Letter Spacing",
        "jp": "文字の間隔を詰める"
    },
    {
        "en": "Align",
        "jp": "文字揃え"
    },
    {
        "en": "Text Align Left",
        "jp": "左揃え"
    },
    {
        "en": "Text Align Center",
        "jp": "中央揃え"
    },
    {
        "en": "Text Align Right",
        "jp": "右揃え"
    },
    {
        "en": "Text Align Justified",
        "jp": "均等揃え"
    },
    {
        "en": "Text Align Top",
        "jp": "ボックスの上揃え"
    },
    {
        "en": "Text Align Middle",
        "jp": "ボックスの垂直方向中央揃え"
    },
    {
        "en": "Text Align Bottom",
        "jp": "ボックスの下揃え"
    },
    // -- Arrage --
    {
        "en": "Arrange",
        "jp": "整列"
    },
    {
        "en": "Round to Pixel",
        "jp": "ピクセルに合わせて配置"
    },
    {
        "en": "Align Left",
        "jp": "水平方向左に整列"
    },
    {
        "en": "Align Horizontal Centers",
        "jp": "水平方向中央に整列"
    },
    {
        "en": "Align Right",
        "jp": "水平方向右に整列"
    },
    {
        "en": "Align Top",
        "jp": "垂直方向上に整列"
    },
    {
        "en": "Align Vertical Centers",
        "jp": "垂直方向中央に整列"
    },
    {
        "en": "Align Bottom",
        "jp": "垂直方向下に整列"
    },
    {
        "en": "Tidy Up",
        "jp": "選択状態に応じて自動で整列"
    },
    {
        "en": "Pack Horizontal",
        "jp": "水平方向へ間隔なしで整列"
    },
    {
        "en": "Pack Vertical",
        "jp": "垂直方向へ間隔なしで整列"
    },
    {
        "en": "Distribute Horizontal Spacing",
        "jp": "水平方向へ等間隔に分布"
    },
    {
        "en": "Distribute Vertical Spacing",
        "jp": "垂直方向へ等間隔に分布"
    },
    {
        "en": "Distribute Left",
        "jp": "左を基準に、水平方向へ分布"
    },
    {
        "en": "Distribute Horizontal Centers",
        "jp": "中心を基準に、水平方向へ分布"
    },
    {
        "en": "Distribute Right",
        "jp": "右を基準に、水平方向へ分布"
    },
    {

        "en": "Distribute Top",
        "jp": "上を基準に、垂直方向へ分布"
    },
    {
        "en": "Distribute Vertical Centers",
        "jp": "中心を基準に、垂直方向へ分布"
    },
    {
        "en": "Distribute Bottom",
        "jp": "下を基準に、垂直方向へ分布"
    },
    // -- Plugins --
    {
        "en": "Plugins",
        "jp": "プラグイン"
    },
    {
        "en": "Run Last Plugin",
        "jp": "最後に使ったプラグインを実行"
    },
    {
        "en": "Manage Plugins…",
        "jp": "プラグインを管理"
    },
    {
        "en": "Development",
        "jp": "開発"
    },
    {
        "en": "New Plugin…",
        "jp": "プラグインを作成"
    },
    {
        "en": "Open Console",
        "jp": "コンソールを表示"
    },
    {
        "en": "Use Developer VM",
        "jp": "デベロッパーツールを使用"
    },
    {
        "en": "Integrations",
        "jp": "連携"
    },
    {
        "en": "Avocode",
        "jp": "Avocodeと連携"
    },
    {
        "en": "Zeplin",
        "jp": "Zeplinと連携"
    },
    {
        "en": "Dribbble",
        "jp": "Dribbbleと連携"
    },
    // -- Preferences --
    {
        "en": "Preferences",
        "jp": "環境設定"
    },
    {
        "en": "Snap to Geometry",
        "jp": "ジオメトリにスナップ"
    },
    {
        "en": "Snap to Objects",
        "jp": "オブジェクトにスナップ"
    },
    {
        "en": "Snap to Pixel Grid",
        "jp": "ピクセルグリッドにスナップ"
    },
    {
        "en": "Keep Tool Selected after Use",
        "jp": "使用したツールを保持する"
    },
    {
        "en": "Highlight Layers on Hover",
        "jp": "ホバーでレイヤーをハイライト表示"
    },
    {
        "en": "Rename Duplicated Layers",
        "jp": "複製したレイヤーをリネーム"
    },
    {
        "en": "Show Dimensions on Objects",
        "jp": "オブジェクトのサイズを表示"
    },
    {
        "en": "Hide Canvas UI During Changes",
        "jp": "変形中にキャンバス表示を非表示"
    },
    {
        "en": "Keyboard Zooms into Selection",
        "jp": "選択対象にキーボードズーム"
    },
    {
        "en": "Substitute Smart Quotes",
        "jp": "スマートクォート（ “ ” ）に変換入力"
    },
    {
        "en": "Show Google Fonts",
        "jp": "Googleフォントを表示"
    },
    {
        "en": "Flip Objects While Resizing",
        "jp": "サイズ変更中にオブジェクトを反転"
    },
    {
        "en": "Invert Zoom Direction",
        "jp": "ホイールでのズームの方向を反転"
    },
    {
        "en": "Use Number Keys for Opacity",
        "jp": "テンキーで不透明度を変更"
    },
    {
        "en": "Nudge Amount…",
        "jp": "テンキー操作の値"
    },
    // -- Libraries --
    {
        "en": "Libraries",
        "jp": "ライブラリ"
    },
    // -- Help and Account --
    {
        "en": "Help and Account",
        "jp": "ヘルプとアカウント"
    },
    {
        "en": "Help Page",
        "jp": "ヘルプページ"
    },
    {
        "en": "Keyboard Shortcuts",
        "jp": "キーボードショートカット"
    },
    {
        "en": "Community Forum",
        "jp": "コミュニティフォーラム"
    },
    {
        "en": "Video Tutorials",
        "jp": "ビデオチュートリアル"
    },
    {
        "en": "Release Notes",
        "jp": "リリースノート"
    },
    {
        "en": "Open Font Settings",
        "jp": "フォント設定を開く"
    },
    {
        "en": "Legal Summary",
        "jp": "利用規約"
    },
    {
        "en": "Account Settings",
        "jp": "アカウント設定"
    },
    {
        "en": "Log Out",
        "jp": "ログアウト"
    },
    // View Settings
    {
        "en": "Zoom in",
        "jp": "ズームイン"
    },
    {
        "en": "Zoom out",
        "jp": "ズームアウト"
    },
    {
        "en": "Zoom to 50%",
        "jp": "50％にズーム"
    },
    {
        "en": "Zoom to 200%",
        "jp": "200％にズーム"
    },
    {
        "en": "Disabled",
        "jp": "無効"
    },
    // ツールバー中央
    // {
    //     "en": "Publish Styles & Components",
    //     "jp": ""
    // },
    {
        "en": "Rename",
        "jp": "名前を変更"
    },
    {
        "en": "Move to Project…",
        "jp": "プロジェクトへ移動"
    },
    // 右クリック Canvas
    {
        "en": "Search…",
        "jp": "検索"
    },
    {
        "en": "Select Layer",
        "jp": "レイヤー選択"
    },
    {
        "en": "Move to Page",
        "jp": "ページへ移動"
    },
    {
        "en": "Ungroup",
        "jp": "グループ解除"
    },
    {
        "en": "Flatten",
        "jp": "複合パスに拡張"
    },
    {
        "en": "Show/Hide",
        "jp": "表示/非表示"
    },
    {
        "en": "Lock/Unlock",
        "jp": "ロック/ロック解除"
    },
    {
        "en": "Copy/Paste",
        "jp": "コピー/ペースト"
    },
    {
        "en": "Copy Link",
        "jp": "リンクをコピー"
    },
    {
        "en": "More",
        "jp": "その他"
    },
    // 右クリック Pages
    {
        "en": "Copy Link to Page",
        "jp": "ページへのリンクをコピー"
    },
    {
        "en": "Delete Page",
        "jp": "ページを削除"
    },
    {
        "en": "Rename Page",
        "jp": "ページ名を変更"
    },
    {
        "en": "Duplicate Page",
        "jp": "ページを複製"
    },
];

// ツールバー > ツール の翻訳
const toolsMap = [
    // Move Tools
    {
        "en": "Move",
        "jp": "移動"
    },
    {
        "en": "Scale",
        "jp": "拡大・縮小"
    },

    // Region Tools
    {
        "en": "Frame",
        "jp": "フレーム"
    },
    {
        "en": "Slice",
        "jp": "スライス"
    },

    // Shape Tools
    {
        "en": "Rectangle",
        "jp": "長方形"
    },
    {
        "en": "Line",
        "jp": "直線"
    },
    {
        "en": "Arrow",
        "jp": "矢印"
    },
    {
        "en": "Ellipse",
        "jp": "楕円"
    },
    {
        "en": "Polygon",
        "jp": "多角形"
    },
    {
        "en": "Star",
        "jp": "スター"
    },
    {
        "en": "Place Image",
        "jp": "画像を配置"
    },

    // Drawing Tools
    {
        "en": "Pen",
        "jp": "ペン"
    },
    {
        "en": "Pencil",
        "jp": "鉛筆"
    },

    // Boolean Operations and Flatten Selection
    {
        "en": "Union Selection",
        "jp": "合体"
    },
    {
        "en": "Subtract Selection",
        "jp": "前面オブジェクトで型抜き"
    },
    {
        "en": "Intersect Selection",
        "jp": "交差"
    },
    {
        "en": "Exclude Selection",
        "jp": "中マド"
    },
    {
        "en": "Flatten Selection",
        "jp": "複合パスに拡張"
    },
];

// ツールバーのツールチップ の翻訳
const tooltipMap = [
    //
    {
        "en": "Move Tools",
        "jp": "移動ツール"
    },
    {
        "en": "Region Tools",
        "jp": "リージョンツール"
    },
    {
        "en": "Shape Tools",
        "jp": "シェイプツール"
    },
    {
        "en": "Drawing Tools",
        "jp": "ドローツール"
    },
    {
        "en": "Zoom/View Options",
        "jp": "ズーム・ビュー操作"
    },
    /*
    {
        "en": "toggle-menu",
        "jp": ""
    },
    {
        "en": "set-tool-default",
        "jp": ""
    },
    {
        "en": "set-tool-frame",
        "jp": ""
    },
    {
        "en": "set-tool-rectangle",
        "jp": ""
    },
    {
        "en": "set-tool-pen",
        "jp": ""
    },
    {
        "en": "set-tool-type",
        "jp": ""
    },
    {
        "en": "set-tool-hand",
        "jp": ""
    },
    {
        "en": "set-tool-comments",
        "jp": ""
    },
    {
        "en": "Present",
        "jp": ""
    },
*/
];