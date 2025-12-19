# Learning Content Library - サイト構造設計

## 📁 ディレクトリ構造

```
learning-content/
├── index.html                    # トップページ（全テーマ検索・一覧）
├── site-config.json              # サイト全体設定（ユーザーが編集可能）
├── STRUCTURE.md                  # このファイル
├── deploy.sh                     # 自動デプロイスクリプト
├── scripts/
│   ├── update-index.js           # index.html自動更新スクリプト
│   └── aggregate-metadata.js     # 全メタデータ統合スクリプト
├── assets/
│   ├── css/
│   │   └── global.css           # 共通スタイル
│   └── js/
│       └── search.js            # 検索・フィルタリング機能
├── data/
│   └── all-content.json         # 全コンテンツのメタデータ統合
└── [書籍名]/
    └── [テーマ名]/
        ├── reading.html         # 読書ページ
        ├── index.html           # 画像ギャラリー
        ├── explanation.md       # 解説文
        ├── metadata.json        # メタデータ
        ├── report.md            # 生成レポート
        ├── manga_4koma.png      # 4コマ漫画
        └── diagrams/            # 図解フォルダ
            └── *.png
```

---

## 🎨 デザインシステム

### カラーパレット
- **Primary**: #667eea（紫）
- **Secondary**: #764ba2（深紫）
- **Accent**: #ff6b6b（赤）
- **Background**: グラデーション（#667eea → #764ba2）

### タイポグラフィ
- **Font Family**: Hiragino Sans, Noto Sans JP
- **見出し**: 1.5rem - 2.5rem
- **本文**: 1.05rem
- **Line Height**: 1.8

### コンポーネント
- **Card**: 白背景、border-radius: 15px、影付き
- **Button**: グラデーション、ホバーで上昇
- **Modal**: 暗い背景オーバーレイ

---

## 🔄 自動化ワークフロー

### まん2000実行時の流れ

```
1. ユーザーがまん2000を実行
   ↓
2. コンテンツ生成（解説文、図解、漫画、HTML）
   ↓
3. metadata.jsonを生成
   ↓
4. all-content.jsonに追加（自動統合）
   ↓
5. index.html更新（新しいカード追加）
   ↓
6. Git commit & push（自動）
   ↓
7. デプロイ完了（1-2分で反映）
```

---

## 🔍 トップページ機能

### 1. 検索機能
- キーワード検索（タイトル、説明文、タグ）
- リアルタイムフィルタリング
- 検索履歴

### 2. フィルタリング
- 書籍別フィルター
- タグ別フィルター（ツール、技術、用途）
- 難易度フィルター
- 日付順ソート

### 3. カード表示
- グリッドレイアウト（3列）
- サムネイル（4コマ漫画）
- タイトル、書籍名、タグ
- クリックでreading.htmlへ

### 4. ページネーション
- 20件/ページ
- 無限スクロール対応

---

## ⚙️ 設定ファイル編集方法

### site-config.json

ユーザーが自由に編集可能：

```json
{
  "site_info": {
    "site_name": "あなたのサイト名",  // ← 変更可能
    "site_description": "説明文"      // ← 変更可能
  },
  "design_system": {
    "primary_color": "#667eea",       // ← 色変更可能
    "secondary_color": "#764ba2"      // ← 色変更可能
  },
  "repository": {
    "remote_url": "your-repo-url",    // ← GitHubリポジトリURL
    "auto_deploy": true               // ← 自動デプロイON/OFF
  }
}
```

### テーマ名・書籍名の変更

各コンテンツの`metadata.json`を編集：

```json
{
  "book_name": "新しい書籍名",       // ← 変更可能
  "theme": "新しいテーマ名"          // ← 変更可能
}
```

変更後、`npm run update-index`を実行すると自動的にサイト全体に反映されます。

---

## 🚀 デプロイ方法

### 初回セットアップ（1回のみ）

1. **GitHubリポジトリ作成**
   ```bash
   cd /Users/hajime/Desktop/learning-content
   git init
   git remote add origin https://github.com/yourusername/learning-content.git
   ```

2. **Netlify / Vercel連携**
   - GitHubリポジトリを接続
   - Build settings: なし（静的サイト）
   - Publish directory: `/`

3. **site-config.json編集**
   - `remote_url`をあなたのリポジトリURLに変更

### 2回目以降（自動）

まん2000実行後、自動的に：
1. `git add .`
2. `git commit -m "Add content: ..."`
3. `git push origin main`
4. Netlify/Vercelが自動デプロイ

---

## 📊 メタデータ統合

### all-content.json構造

```json
{
  "total_count": 1000,
  "last_updated": "2025-12-19",
  "books": [
    {
      "book_name": "サンプル書籍",
      "themes_count": 120,
      "themes": [
        {
          "theme": "サンプルテーマ_実践ワークフロー",
          "created_at": "2025-12-19",
          "tags": [...],
          "url": "/サンプル書籍/サンプルテーマ_実践ワークフロー/reading.html",
          "thumbnail": "/サンプル書籍/サンプルテーマ_実践ワークフロー/manga_4koma.png"
        }
      ]
    }
  ]
}
```

---

## 🎯 次の実装ステップ

1. ✅ site-config.json作成
2. ✅ STRUCTURE.md作成
3. ⏳ index.html（トップページ）テンプレート作成
4. ⏳ 自動デプロイスクリプト作成
5. ⏳ まん2000プロジェクト完全版更新
6. ⏳ 動作確認

---

*このドキュメントは、まん2000プロジェクトのサイト構造設計書です。*
