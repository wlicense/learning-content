# 図解プロンプト一覧

## 1. AI画像生成の基礎技術（フローチャート）

**図解タイプ**: Flowchart

**プロンプト**:
```
Create a professional flowchart diagram showing the AI image generation workflow for model photos.

Title: "AI画像生成ツールの選択と活用フロー"

Flow structure:
1. Start: "ECサイト用モデル画像が必要"
2. Decision: "使用ツールの選択"
   - Option A: "Flux Pro" → "モデル写真生成に最適"
   - Option B: "Mid Journey" → "多様なスタイル生成"
3. Process: "プロンプト入力"
   - "髪型、表情、服装、背景を指定"
   - "アスペクト比設定（9:16 for Reels）"
   - "白背景スタジオ設定"
4. Decision: "著作権チェック"
   - "既存キャラ参照?" → Yes: "オリジナル特徴追加"
   - No: "そのまま生成"
5. Output: "高品質モデル画像完成"

Use blue color scheme, modern minimalist design, clean lines, professional business presentation style.
Include icons for each tool (Flux Pro, Mid Journey).
```

---

## 2. モデル一貫性の維持技術（フローチャート）

**図解タイプ**: Flowchart

**プロンプト**:
```
Create a detailed workflow diagram for maintaining character consistency using Flux Context.

Title: "Flux Context による同一モデル多角度生成フロー"

Flow structure:
1. Input: "ベースモデル画像（正面写真）"
2. Upload: "Flux Context Generate機能にアップロード"
3. Parallel Processes:
   - Branch 1: "横向きプロンプト入力" → "Side Profile Portrait"
   - Branch 2: "後ろ向きプロンプト入力" → "Back View Portrait"
   - Branch 3: "全身プロンプト入力" → "Full Body Portrait"
4. Process: "バッチサイズ調整（1-4枚）"
5. Cost Info: "1枚約6円"
6. Decision: "満足できる結果?"
   - No: "再生成（特にアジア人顔）"
   - Yes: "複数パターン保存"
7. Output: "3〜5パターンのモデル写真ストック完成"

Use green color scheme, show cost efficiency, include sample image placeholders showing different angles.
Modern infographic style with clear visual hierarchy.
```

---

## 3. Nanobanana高精度画像合成（フローチャート）

**図解タイプ**: Flowchart

**プロンプト**:
```
Create a step-by-step workflow diagram for Nanobanana image composition.

Title: "Nanobanana 段階的合成ワークフロー"

Two-phase approach visualization:

**Phase 1: ワンピース合成**
1. Upload: "モデル写真"
2. Upload: "ワンピース写真（平置き・高解像度・透過背景）"
3. Prompt: "A realistic photo of a young woman wearing the sleeveless pink patterned dress"
4. Generate: "生成ボタンクリック"
5. Output: "ワンピース着用画像"

**Phase 2: バッグ追加**
6. Upload: "Phase 1の結果画像"
7. Upload: "バッグ写真（平置き・高解像度・透過背景）"
8. Prompt: "Realistic photo of the same young woman holding the referenced handbag naturally"
9. Generate: "生成ボタンクリック"
10. Final Output: "完成画像（ワンピース + バッグ）"

Warning Box: "⚠️ 一度に複数アイテム合成はNG（精度低下）"

Use purple color scheme, emphasize the two-phase approach with clear separation.
Include quality requirements sidebar: "商品写真3条件: 高解像度・透過背景・平置き撮影"
```

---

## 4. ECサイト向けビジュアル制作ワークフロー（フローチャート）

**図解タイプ**: Timeline/Flowchart

**プロンプト**:
```
Create a comprehensive 4-phase workflow timeline for EC site visual content creation.

Title: "ECサイト向けビジュアル制作 4フェーズワークフロー"

Horizontal timeline with 4 major phases:

**Phase 1: モデル画像生成**
- Tool: "Flux Pro / Flux Context"
- Actions:
  - "ターゲット顧客層に合わせたモデル生成"
  - "複数角度バリエーション作成（正面・横・後ろ・全身）"
  - "白背景スタジオ設定"
- Output: "モデル写真ストック（3〜5パターン）"

**Phase 2: 第一商品合成**
- Tool: "Nanobanana"
- Actions:
  - "モデル写真 + ワンピース写真"
  - "着用イメージ生成"
- Output: "商品着用画像"

**Phase 3: 第二商品合成**
- Tool: "Nanobanana"
- Actions:
  - "Phase 2画像 + バッグ写真"
  - "段階的合成で精度維持"
- Output: "複数商品着用画像"

**Phase 4: 動画化（オプション）**
- Tool: "Higgs Field Animate"
- Actions:
  - "静止画から動画生成"
  - "Instagram Reels / 広告活用"
- Output: "動画コンテンツ"

Cost Management Note: "生成回数とクレジット消費のバランス管理"
Best Practice: "素材事前準備で失敗時コスト削減"

Use orange color scheme, modern timeline design with icons for each phase.
Show estimated time and cost for each phase.
```

---

## 5. 動画化・アニメーション技術（比較表）

**図解タイプ**: Comparison Matrix

**プロンプト**:
```
Create a comparison matrix showing different animation style presets in Higgs Field Animate.

Title: "Higgs Field Animate スタイルプリセット比較"

Table format with columns:
- Style Name
- Description
- Use Case
- Duration Options
- Best For

Rows:
1. **Outfit Check**
   - Description: "モデルがポーズを取りながら服装をアピール"
   - Use Case: "アパレルECサイト商品紹介"
   - Duration: "5秒 / 10秒"
   - Best For: "ファッション動画"

2. **Happy**
   - Description: "笑顔で明るい雰囲気を演出"
   - Use Case: "ポジティブブランドイメージ"
   - Duration: "5秒 / 10秒"
   - Best For: "SNS広告"

3. **Finger Heart**
   - Description: "K-POP風ハートポーズ"
   - Use Case: "若年層向けコンテンツ"
   - Duration: "5秒 / 10秒"
   - Best For: "Instagram Reels"

4. **Burning Burn**
   - Description: "エネルギッシュな動き"
   - Use Case: "インパクト重視の広告"
   - Duration: "5秒 / 10秒"
   - Best For: "ショート動画広告"

Footer notes:
- "クレジット消費: サイズ × 時間で変動"
- "用途に応じた解像度設定可能"
- "従来の撮影不要、静止画から数クリックで生成"

Use vibrant color scheme, modern table design with clear visual separations.
Include small animation icons for each style.
```

---

## 6. 実務での成功ポイント（マトリクス）

**図解タイプ**: Matrix/Checklist

**プロンプト**:
```
Create a best practices matrix for successful AI image composition in business.

Title: "AI画像合成 実務成功のベストプラクティス"

2x3 Matrix structure:

**Top Row: 準備段階**
1. **段階的合成**
   - ✓ 複数アイテムは1つずつ合成
   - ✗ 一度に全て合成（精度低下）
   - Impact: 高精度維持

2. **複数パターン事前生成**
   - ✓ モデル写真3〜5パターン準備
   - ✗ 1パターンのみ
   - Impact: 失敗時コスト削減

3. **白背景スタジオ設定**
   - ✓ 合成精度向上
   - ✓ 背景差し替え柔軟性
   - Impact: 作業効率UP

**Bottom Row: 実行段階**
4. **商品写真品質**
   - ✓ 高解像度
   - ✓ 透過背景
   - ✓ 平置き撮影
   - Impact: 合成精度大幅向上

5. **プロンプト最適化**
   - ✓ シンプルかつ具体的
   - ✗ 長文複雑プロンプト
   - Impact: AI理解精度向上

6. **失敗パターン学習**
   - ⚠️ Multi-Defense精度課題
   - ⚠️ アジア人顔は複数回試行
   - Impact: 根気強い改善

Color coding:
- Green: DO (推奨)
- Red: DON'T (非推奨)
- Yellow: WARNING (注意)

Use clean grid layout, modern business presentation style, include checkmarks and X marks.
Add impact scores or priority indicators for each practice.
```

---

## 生成指示

上記6つのプロンプトを使用して、各サブタイトルごとに図解画像を生成してください。

**生成ツール**: Leonardo AI (Gemini 3 Pro Image / Nanobanana PRO) または同等のAI画像生成ツール

**保存先**: ~/Desktop/learning-content/ヒグスNanobanana画像合成技術/diagrams/

**ファイル名規則**:
- subtitle_1_AI画像生成の基礎技術.png
- subtitle_2_モデル一貫性の維持技術.png
- subtitle_3_Nanobanana高精度画像合成.png
- subtitle_4_ECサイト向けビジュアル制作ワークフロー.png
- subtitle_5_動画化アニメーション技術.png
- subtitle_6_実務での成功ポイント.png
