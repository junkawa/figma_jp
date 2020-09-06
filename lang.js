// ツールバー > メインメニュー の翻訳
const mainMenuMap = [
    // Menu
    {
        "en": "Back to Files",
        "ja": "プロジェクトに戻る"
    },
    // -- File --
    {
        "en": "File",
        "ja": "ファイル"
    },
    {
        "en": "New",
        "ja": "新規作成"
    },
    {
        "en": "New from Sketch File…",
        "ja": "Sketchファイルを開く"
    },
    {
        "en": "Place Image",
        "ja": "画像を配置"
    },
    {
        "en": "Save as .fig…",
        "ja": ".figで保存"
    },
    {
        "en": "Save to Version History…",
        "ja": "バージョン履歴を追加"
    },
    {
        "en": "Show Version History",
        "ja": "バージョン履歴を表示"
    },
    {
        "en": "Export…",
        "ja": "書き出し"
    },
    {
        "en": "Export Frames to PDF…",
        "ja": "PDFで書き出し"
    },
    // -- Edit --
    {
        "en": "Edit",
        "ja": "編集"
    },
    {
        "en": "Undo",
        "ja": "取り消し"
    },
    {
        "en": "Redo",
        "ja": "やり直し"
    },
    {
        "en": "Copy as",
        "ja": "コピー"
    },
    {
        "en": "Copy as Text",
        "ja": "テキストとしてコピー"
    },
    {
        "en": "Copy as CSS",
        "ja": "CSSとしてコピー"
    },
    {
        "en": "Copy as SVG",
        "ja": "SVGとしてコピー"
    },
    {
        "en": "Copy as PNG",
        "ja": "PNGとしてコピー"
    },
    // -- Edit --
    {
        "en": "Paste Over Selection",
        "ja": "選択したものの上にペースト"
    },
    {
        "en": "Duplicate",
        "ja": "複製"
    },
    {
        "en": "Delete",
        "ja": "削除"
    },
    {
        "en": "Set Default Properties",
        "ja": "プロパティのデフォルトに設定"
    },
    {
        "en": "Copy Properties",
        "ja": "プロパティをコピー"
    },
    {
        "en": "Paste Properties",
        "ja": "プロパティをペースト"
    },
    {
        "en": "Pick Color",
        "ja": "色を選択"
    },
    {
        "en": "Select All",
        "ja": "すべてを選択"
    },
    {
        "en": "Select None",
        "ja": "選択解除"
    },
    {
        "en": "Select Inverse",
        "ja": "他を選択"
    },
    {
        "en": "Select All with Same Properties",
        "ja": "共通のプロパティをすべて選択"
    },
    {
        "en": "Select All with Same Fill",
        "ja": "共通の塗りをすべて選択"
    },
    {
        "en": "Select All with Same Stroke",
        "ja": "共通の線をすべて選択"
    },
    {
        "en": "Select All with Same Effect",
        "ja": "共通のエフェクトをすべて選択"
    },
    {
        "en": "Select All with Same Text Properties",
        "ja": "共通のテキストプロパティをすべて選択"
    },
    {
        "en": "Select All with Same Font",
        "ja": "共通のフォントを選択"
    },
    {
        "en": "Select All with Same Instance",
        "ja": "共通のインスタンスを選択"
    },
    // -- View --
    {
        "en": "View",
        "ja": "表示"
    },
    {
        "en": "Pixel Grid",
        "ja": "ピクセルグリッドを表示"
    },
    {
        "en": "Layout Grids",
        "ja": "レイアウトグリッドを表示"
    },
    {
        "en": "Mask Outlines",
        "ja": "マスクのアウトラインを表示"
    },
    {
        "en": "Frame Outlines",
        "ja": "フレームのアウトラインを表示"
    },
    {
        "en": "Resource Use",
        "ja": "リソース使用量を表示"
    },
    {
        "en": "Rulers",
        "ja": "定規を表示"
    },
    {
        "en": "Outlines",
        "ja": "アウトラインを表示"
    },
    {
        "en": "Show/Hide UI",
        "ja": "UIを表示/非表示"
    },
    {
        "en": "Multiplayer Cursors",
        "ja": "共同作業者のカーソルを表示"
    },
    {
        "en": "Panels",
        "ja": "パネル"
    },
    {
        "en": "Open Layers Panel",
        "ja": "レイヤーパネルを表示"
    },
    {
        "en": "Open Assets Panel",
        "ja": "アセットパネルを表示"
    },
    {
        "en": "Open Design Panel",
        "ja": "デザインパネルを表示"
    },
    {
        "en": "Open Prototype Panel",
        "ja": "プロトタイプパネルを表示"
    },
    {
        "en": "Open Code Panel",
        "ja": "コードパネルを表示"
    },
    {
        "en": "Show Left Sidebar",
        "ja": "サイドバーを表示"
    },
    {
        "en": "Pixel Preview",
        "ja": "ピクセルでプレビュー"
    },
    {
        "en": "Zoom In",
        "ja": "ズームイン"
    },
    {
        "en": "Zoom Out",
        "ja": "ズームアウト"
    },
    {
        "en": "Zoom to 100%",
        "ja": "100％にズーム"
    },
    {
        "en": "Zoom to Fit",
        "ja": "画面に合わせてすべてをズーム"
    },
    {
        "en": "Zoom to Selection",
        "ja": "選択したものに合わせてズーム"
    },
    {
        "en": "Previous Page",
        "ja": "前のページ"
    },
    {
        "en": "Next Page",
        "ja": "次のページ"
    },
    {
        "en": "Zoom to Previous Frame",
        "ja": "前のフレームにズーム"
    },
    {
        "en": "Zoom to Next Frame",
        "ja": "次のフレームにズーム"
    },
    {
        "en": "Find Previous Frame",
        "ja": "前のフレームに移動"
    },
    {
        "en": "Find Next Frame",
        "ja": "次のフレームに移動"
    },
    // -- Object --
    {
        "en": "Object",
        "ja": "オブジェクト"
    },
    {
        "en": "Group Selection",
        "ja": "グループ化"
    },
    {
        "en": "Frame Selection",
        "ja": "フレーム化"
    },
    {
        "en": "Ungroup Selection",
        "ja": "グループ解除"
    },
    {
        "en": "Use as Mask",
        "ja": "マスクを作成"
    },
    {
        "en": "Restore Default Thumbnail",
        "ja": "デフォルトのサムネイルに戻す"
    },
    {
        "en": "Set as Thumbnail",
        "ja": "ファイルのサムネイルに設定"
    },
    {
        "en": "Add Auto Layout",
        "ja": "オートレイアウトを追加"
    },
    {
        "en": "Create Component",
        "ja": "コンポーネントを作成"
    },
    {
        "en": "Reset Instance",
        "ja": "インスタンスをリセット"
    },
    {
        "en": "Detach Instance",
        "ja": "インスタンスを解除"
    },
    {
        "en": "Main Component",
        "ja": "メインコンポーネント"
    },
    {
        "en": "Go to Main Component",
        "ja": "メインコンポーネントへ移動"
    },
    {
        "en": "Push Overrides to Main Component",
        "ja": "オーバーライドをメインに反映"
    },
    {
        "en": "Restore Main Component",
        "ja": "メインコンポーネントを復元"
    },
    {
        "en": "Bring to Front",
        "ja": "最前面へ"
    },
    {
        "en": "Bring Forward",
        "ja": "前面へ"
    },
    {
        "en": "Send Backward",
        "ja": "背面へ"
    },
    {
        "en": "Send to Back",
        "ja": "最背面へ"
    },
    {
        "en": "Flip Horizontal",
        "ja": "水平方向に反転"
    },
    {
        "en": "Flip Vertical",
        "ja": "垂直方向に反転"
    },
    {
        "en": "Rotate 180˚",
        "ja": "180°回転"
    },
    {
        "en": "Rotate 90˚ Left",
        "ja": "左に90°回転"
    },
    {
        "en": "Rotate 90˚ Right",
        "ja": "右に90°回転"
    },
    {
        "en": "Flatten Selection",
        "ja": "複合パスに拡張"
    },
    {
        "en": "Outline Stroke",
        "ja": "パスのアウトライン"
    },
    {
        "en": "Boolean Groups",
        "ja": "複合シェイプを作成"
    },
    {
        "en": "Union Selection",
        "ja": "合体"
    },
    {
        "en": "Subtract Selection",
        "ja": "前面オブジェクトで型抜き"
    },
    {
        "en": "Intersect Selection",
        "ja": "交差"
    },
    {
        "en": "Exclude Selection",
        "ja": "中マド"
    },
    {
        "en": "Rasterize Selection",
        "ja": "ラスタライズ"
    },
    {
        "en": "Show/Hide Selection",
        "ja": "選択したものを表示/非表示"
    },
    {
        "en": "Lock/Unlock Selection",
        "ja": "選択したものをロック/ロック解除"
    },
    {
        "en": "Hide Other Layers",
        "ja": "他のレイヤーを隠す"
    },
    {
        "en": "Collapse Layers",
        "ja": "レイヤーを閉じる"
    },
    {
        "en": "Remove Fill",
        "ja": "塗りを削除"
    },
    {
        "en": "Remove Stroke",
        "ja": "線を削除"
    },
    {
        "en": "Swap Fill and Stroke",
        "ja": "塗りと線を入れ替え"
    },
    // -- Vector --
    {
        "en": "Vector",
        "ja": "ベクター"
    },
    {
        "en": "Join Selection",
        "ja": "アンカーポイントを連結"
    },
    {
        "en": "Smooth Join Selection",
        "ja": "アンカーポイントをスムーズに連結"
    },
    {
        "en": "Delete and Heal Selection",
        "ja": "アンカーポイントを削除"
    },
    // -- Text --
    {
        "en": "Text",
        "ja": "テキスト"
    },
    {
        "en": "Bold",
        "ja": "太字"
    },
    {
        "en": "Italic",
        "ja": "斜体"
    },
    {
        "en": "Underline",
        "ja": "下線"
    },
    {
        "en": "Strikethrough",
        "ja": "打ち消し線"
    },
    {
        "en": "Original Case",
        "ja": "大文字小文字の変換なし"
    },
    {
        "en": "Upper Case",
        "ja": "すべて大文字"
    },
    {
        "en": "Lower Case",
        "ja": "すべて小文字"
    },
    {
        "en": "Increase Font Size",
        "ja": "フォントサイズを大きく"
    },
    {
        "en": "Decrease Font Size",
        "ja": "フォントサイズを小さく"
    },
    {
        "en": "Increase Font Weight",
        "ja": "フォントウェイトを大きく"
    },
    {
        "en": "Decrease Font Weight",
        "ja": "フォントウェイトを小さく"
    },
    {
        "en": "Increase Line Height",
        "ja": "行送りを増やす"
    },
    {
        "en": "Decrease Line Height",
        "ja": "行送りを減らす"
    },
    {
        "en": "Increase Letter Spacing",
        "ja": "文字の間隔を広げる"
    },
    {
        "en": "Decrease Letter Spacing",
        "ja": "文字の間隔を詰める"
    },
    {
        "en": "Align",
        "ja": "文字揃え"
    },
    {
        "en": "Text Align Left",
        "ja": "左揃え"
    },
    {
        "en": "Text Align Center",
        "ja": "中央揃え"
    },
    {
        "en": "Text Align Right",
        "ja": "右揃え"
    },
    {
        "en": "Text Align Justified",
        "ja": "均等揃え"
    },
    {
        "en": "Text Align Top",
        "ja": "ボックスの上揃え"
    },
    {
        "en": "Text Align Middle",
        "ja": "ボックスの垂直方向中央揃え"
    },
    {
        "en": "Text Align Bottom",
        "ja": "ボックスの下揃え"
    },
    // -- Arrage --
    {
        "en": "Arrange",
        "ja": "整列"
    },
    {
        "en": "Round to Pixel",
        "ja": "ピクセルに合わせて配置"
    },
    {
        "en": "Align Left",
        "ja": "水平方向左に整列"
    },
    {
        "en": "Align Horizontal Centers",
        "ja": "水平方向中央に整列"
    },
    {
        "en": "Align Right",
        "ja": "水平方向右に整列"
    },
    {
        "en": "Align Top",
        "ja": "垂直方向上に整列"
    },
    {
        "en": "Align Vertical Centers",
        "ja": "垂直方向中央に整列"
    },
    {
        "en": "Align Bottom",
        "ja": "垂直方向下に整列"
    },
    {
        "en": "Tidy Up",
        "ja": "選択状態に応じて自動で整列"
    },
    {
        "en": "Pack Horizontal",
        "ja": "水平方向へ間隔なしで整列"
    },
    {
        "en": "Pack Vertical",
        "ja": "垂直方向へ間隔なしで整列"
    },
    {
        "en": "Distribute Horizontal Spacing",
        "ja": "水平方向へ等間隔に分布"
    },
    {
        "en": "Distribute Vertical Spacing",
        "ja": "垂直方向へ等間隔に分布"
    },
    {
        "en": "Distribute Left",
        "ja": "左を基準に、水平方向へ分布"
    },
    {
        "en": "Distribute Horizontal Centers",
        "ja": "中心を基準に、水平方向へ分布"
    },
    {
        "en": "Distribute Right",
        "ja": "右を基準に、水平方向へ分布"
    },
    {

        "en": "Distribute Top",
        "ja": "上を基準に、垂直方向へ分布"
    },
    {
        "en": "Distribute Vertical Centers",
        "ja": "中心を基準に、垂直方向へ分布"
    },
    {
        "en": "Distribute Bottom",
        "ja": "下を基準に、垂直方向へ分布"
    },
    // -- Plugins --
    {
        "en": "Plugins",
        "ja": "プラグイン"
    },
    {
        "en": "Run Last Plugin",
        "ja": "最後に使ったプラグインを実行"
    },
    {
        "en": "Manage Plugins…",
        "ja": "プラグインを管理"
    },
    {
        "en": "Development",
        "ja": "開発"
    },
    {
        "en": "New Plugin…",
        "ja": "プラグインを作成"
    },
    {
        "en": "Open Console",
        "ja": "コンソールを表示"
    },
    {
        "en": "Use Developer VM",
        "ja": "デベロッパーツールを使用"
    },
    {
        "en": "Integrations",
        "ja": "連携"
    },
    {
        "en": "Avocode",
        "ja": "Avocodeと連携"
    },
    {
        "en": "Zeplin",
        "ja": "Zeplinと連携"
    },
    {
        "en": "Dribbble",
        "ja": "Dribbbleと連携"
    },
    // -- Preferences --
    {
        "en": "Preferences",
        "ja": "環境設定"
    },
    {
        "en": "Snap to Geometry",
        "ja": "ジオメトリにスナップ"
    },
    {
        "en": "Snap to Objects",
        "ja": "オブジェクトにスナップ"
    },
    {
        "en": "Snap to Pixel Grid",
        "ja": "ピクセルグリッドにスナップ"
    },
    {
        "en": "Keep Tool Selected after Use",
        "ja": "使用したツールを保持する"
    },
    {
        "en": "Highlight Layers on Hover",
        "ja": "ホバーでレイヤーをハイライト表示"
    },
    {
        "en": "Rename Duplicated Layers",
        "ja": "複製したレイヤーをリネーム"
    },
    {
        "en": "Show Dimensions on Objects",
        "ja": "オブジェクトのサイズを表示"
    },
    {
        "en": "Hide Canvas UI During Changes",
        "ja": "変形中にキャンバス表示を非表示"
    },
    {
        "en": "Keyboard Zooms into Selection",
        "ja": "選択対象にキーボードズーム"
    },
    {
        "en": "Substitute Smart Quotes",
        "ja": "スマートクォート（ “ ” ）に変換入力"
    },
    {
        "en": "Show Google Fonts",
        "ja": "Googleフォントを表示"
    },
    {
        "en": "Flip Objects While Resizing",
        "ja": "サイズ変更中にオブジェクトを反転"
    },
    {
        "en": "Invert Zoom Direction",
        "ja": "ホイールでのズームの方向を反転"
    },
    {
        "en": "Use Number Keys for Opacity",
        "ja": "テンキーで不透明度を変更"
    },
    {
        "en": "Nudge Amount…",
        "ja": "テンキー操作の値"
    },
    // -- Libraries --
    {
        "en": "Libraries",
        "ja": "ライブラリ"
    },
    // -- Help and Account --
    {
        "en": "Help and Account",
        "ja": "ヘルプとアカウント"
    },
    {
        "en": "Help Page",
        "ja": "ヘルプページ"
    },
    {
        "en": "Keyboard Shortcuts",
        "ja": "キーボードショートカット"
    },
    {
        "en": "Community Forum",
        "ja": "コミュニティフォーラム"
    },
    {
        "en": "Video Tutorials",
        "ja": "ビデオチュートリアル"
    },
    {
        "en": "Release Notes",
        "ja": "リリースノート"
    },
    {
        "en": "Open Font Settings",
        "ja": "フォント設定を開く"
    },
    {
        "en": "Legal Summary",
        "ja": "利用規約"
    },
    {
        "en": "Account Settings",
        "ja": "アカウント設定"
    },
    {
        "en": "Log Out",
        "ja": "ログアウト"
    },
    // View Settings
    {
        "en": "Zoom in",
        "ja": "ズームイン"
    },
    {
        "en": "Zoom out",
        "ja": "ズームアウト"
    },
    {
        "en": "Zoom to 50%",
        "ja": "50％にズーム"
    },
    {
        "en": "Zoom to 200%",
        "ja": "200％にズーム"
    },
    {
        "en": "Disabled",
        "ja": "無効"
    },
    // ツールバー中央
    // {
    //     "en": "Publish Styles &amp; Components",
    //     "ja": ""
    // },
    {
        "en": "Rename",
        "ja": "名前を変更"
    },
    {
        "en": "Move to Project…",
        "ja": "プロジェクトへ移動"
    },
    // 共有
    {
        "en": "Share",
        "ja": "共有"
    },
    // ペンツール
    {
        "en": "Done",
        "ja": "終了"
    },
    // 右クリック Canvas
    {
        "en": "Search…",
        "ja": "検索"
    },
    {
        "en": "Select Layer",
        "ja": "レイヤー選択"
    },
    {
        "en": "Move to Page",
        "ja": "ページへ移動"
    },
    {
        "en": "Ungroup",
        "ja": "グループ解除"
    },
    {
        "en": "Flatten",
        "ja": "複合パスに拡張"
    },
    {
        "en": "Show/Hide",
        "ja": "表示/非表示"
    },
    {
        "en": "Lock/Unlock",
        "ja": "ロック/ロック解除"
    },
    {
        "en": "Copy/Paste",
        "ja": "コピー/ペースト"
    },
    {
        "en": "Copy Link",
        "ja": "リンクをコピー"
    },
    {
        "en": "More",
        "ja": "その他"
    },
    // 右クリック Pages
    {
        "en": "Copy Link to Page",
        "ja": "ページへのリンクをコピー"
    },
    {
        "en": "Delete Page",
        "ja": "ページを削除"
    },
    {
        "en": "Rename Page",
        "ja": "ページ名を変更"
    },
    {
        "en": "Duplicate Page",
        "ja": "ページを複製"
    },
];

// ツールバー > ツール の翻訳
const toolsMap = [
    // Move Tools
    {
        "en": "Move",
        "ja": "移動"
    },
    {
        "en": "Scale",
        "ja": "拡大・縮小"
    },

    // Region Tools
    {
        "en": "Frame",
        "ja": "フレーム"
    },
    {
        "en": "Slice",
        "ja": "スライス"
    },

    // Shape Tools
    {
        "en": "Rectangle",
        "ja": "長方形"
    },
    {
        "en": "Line",
        "ja": "直線"
    },
    {
        "en": "Arrow",
        "ja": "矢印"
    },
    {
        "en": "Ellipse",
        "ja": "楕円"
    },
    {
        "en": "Polygon",
        "ja": "多角形"
    },
    {
        "en": "Star",
        "ja": "スター"
    },
    {
        "en": "Place Image",
        "ja": "画像を配置"
    },

    // Drawing Tools
    {
        "en": "Pen",
        "ja": "ペン"
    },
    {
        "en": "Pencil",
        "ja": "鉛筆"
    },

    // Boolean Operations and Flatten Selection
    {
        "en": "Union Selection",
        "ja": "合体"
    },
    {
        "en": "Subtract Selection",
        "ja": "前面オブジェクトで型抜き"
    },
    {
        "en": "Intersect Selection",
        "ja": "交差"
    },
    {
        "en": "Exclude Selection",
        "ja": "中マド"
    },
    {
        "en": "Flatten Selection",
        "ja": "複合パスに拡張"
    },
];

// ツールバーのツールチップ の翻訳
const tooltipMap = [
    // data-tooltip-type="text"
    {
        "en": "Move Tools",
        "ja": "移動ツール"
    },
    {
        "en": "Region Tools",
        "ja": "リージョンツール"
    },
    {
        "en": "Shape Tools",
        "ja": "シェイプツール"
    },
    {
        "en": "Drawing Tools",
        "ja": "ドローツール"
    },
    {
        "en": "Zoom/View Options",
        "ja": "ズーム・ビュー操作"
    },
    // data-tooltip-type="lookup"
    {
        "en": "Hand Tool",
        "ja": "手のひらツール"
    },
    {
        "en": "Text",
        "ja": "テキスト"
    },
    {
        "en": "Add/Show Comments",
        "ja": "コメントの追加/表示"
    },
    {
        "en": "Edit Object",
        "ja": "オブジェクトの編集"
    },
    {
        "en": "Create Component",
        "ja": "コンポーネントを作成"
    },
    {
        "en": "Use as Mask",
        "ja": "マスクを作成"
    },
    {
        "en": "Boolean Groups",
        "ja": "複合シェイプを作成"
    },
    {
        "en": "Create Link",
        "ja": "リンクを作成"
    },
    {
        "en": "Align left",
        "ja": "水平方向左に整列"
    },
    {
        "en": "Bend Tool",
        "ja": "曲線ツール"
    },
    {
        "en": "Paint Bucket",
        "ja": "塗りつぶし"
    },
    {
        "en": "Done",
        "ja": "終了"
    },
    {
        "en": "",
        "ja": ""
    },
];

// パネルの翻訳
const panelMap = [
    {
        "en": "Constraints",
        "ja": "制約"
    },
    {
        "en": "Background",
        "ja": "背景"
    },
    {
        "en": "Auto Layout",
        "ja": "オートレイアウト"
    },
    {
        "en": "Layer",
        "ja": "レイヤー"
    },
    {
        "en": "Fill",
        "ja": "塗り"
    },
    {
        "en": "Stroke",
        "ja": "線"
    },
    {
        "en": "Selection Colors",
        "ja": "使用した色"
    },
    {
        "en": "Effects",
        "ja": "エフェクト"
    },
    {
        "en": "Export",
        "ja": "エクスポート"
    },
    {
        "en": "Layout Grid",
        "ja": "レイアウトグリッド"
    },
    {
        "en": "Design",
        "ja": "デザイン"
    },
    {
        "en": "Prototype",
        "ja": "プロトタイプ"
    },
    {
        "en": "Code",
        "ja": "コード"
    },
];

const panelTabMap = [
    {
        "en": "Layers",
        "ja": "レイヤー"
    },
    {
        "en": "Assets",
        "ja": "アセット"
    },
    {
        "en": "design",
        "ja": "デザイン"
    },
    {
        "en": "prototype",
        "ja": "プロトタイプ"
    },
    {
        "en": "code",
        "ja": "コード"
    },
    {
        "en": "Pages",
        "ja": "ページ"
    },
    {
        "en": "",
        "ja": ""
    },
];

const panelSelectMap = [
    // Layers
    {
        "en": "Pass Through",
        "ja": "パススルー"
    },
    {
        "en": "Normal",
        "ja": "通常"
    },
    {
        "en": "Darken",
        "ja": "比較（暗）"
    },
    {
        "en": "Multiply",
        "ja": "乗算"
    },
    {
        "en": "Color Burn",
        "ja": "焼き込みカラー"
    },
    {
        "en": "Lighten",
        "ja": "比較（明）"
    },
    {
        "en": "Screen",
        "ja": "スクリーン"
    },
    {
        "en": "Color Dodge",
        "ja": "覆い焼きカラー"
    },
    {
        "en": "Overlay",
        "ja": "オーバーレイ"
    },
    {
        "en": "Soft Light",
        "ja": "ソフトライト"
    },
    {
        "en": "Hard Light",
        "ja": "ハードライト"
    },
    {
        "en": "Difference",
        "ja": "差の絶対値"
    },
    {
        "en": "Exclusion",
        "ja": "除外"
    },
    {
        "en": "Hue",
        "ja": "色相"
    },
    {
        "en": "Saturation",
        "ja": "彩度"
    },
    {
        "en": "Color",
        "ja": "カラー"
    },
    {
        "en": "Luminosity",
        "ja": "輝度"
    },
    // Effects
    {
        "en": "Inner Shadow",
        "ja": "シャドウ（内側）"
    },
    {
        "en": "Drop Shadow",
        "ja": "ドロップシャドウ"
    },
    {
        "en": "Layer Blur",
        "ja": "ぼかし"
    },
    {
        "en": "Background Blur",
        "ja": "背景のぼかし"
    },
    // Stroke
    {
        "en": "Center",
        "ja": "中央"
    },
    {
        "en": "Inside",
        "ja": "内側"
    },
    {
        "en": "Outside",
        "ja": "外側"
    },
    {
        "en": "None",
        "ja": "なし"
    },
    {
        "en": "Round",
        "ja": "丸型線端"
    },
    {
        "en": "Square",
        "ja": "突出線端"
    },
    {
        "en": "Line Arrow",
        "ja": "矢印"
    },
    {
        "en": "Triangle Arrow",
        "ja": "三角矢印"
    },
    {
        "en": "Mixed",
        "ja": "混合"
    },

    // Color
    {
        "en": "Solid",
        "ja": "べた塗り"
    },
    {
        "en": "Linear",
        "ja": "線形"
    },
    {
        "en": "Radial",
        "ja": "円形"
    },
    {
        "en": "Angular",
        "ja": "角度"
    },
    {
        "en": "Diamond",
        "ja": "菱形"
    },
    {
        "en": "Image",
        "ja": "画像"
    },
    // Layout Grid
    {
        "en": "Grid",
        "ja": "グリッド"
    },
    {
        "en": "Columns",
        "ja": "列"
    },
    {
        "en": "Rows",
        "ja": "行"
    },
    {
        "en": "Stretch",
        "ja": "引き伸ばし"
    },
    // Color > Image
    {
        "en": "Fill",
        "ja": "外接"
    },
    {
        "en": "Fit",
        "ja": "内接"
    },
    {
        "en": "Crop",
        "ja": "切り抜き"
    },
    {
        "en": "Tile",
        "ja": "タイル状"
    },

    // その他
    {
        "en": "Left",
        "ja": "左"
    },
    {
        "en": "Right",
        "ja": "右"
    },
    {
        "en": "Left &amp; Right",
        "ja": "左右"
    },
    {
        "en": "Top",
        "ja": "上"
    },
    {
        "en": "Bottom",
        "ja": "下"
    },
    {
        "en": "Top &amp; Bottom",
        "ja": "上下"
    },
    {
        "en": "Scale",
        "ja": "スケール"
    },
    {
        "en": "Horizontal",
        "ja": "水平方向"
    },
    {
        "en": "Vertical",
        "ja": "垂直方向"
    },
    {
        "en": "",
        "ja": ""
    },
    {
        "en": "",
        "ja": ""
    },

];