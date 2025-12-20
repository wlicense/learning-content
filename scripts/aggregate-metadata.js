#!/usr/bin/env node

/**
 * メタデータ統合スクリプト
 * 全コンテンツのmetadata.jsonを収集してall-content.jsonを生成
 */

const fs = require('fs');
const path = require('path');

const ROOT_DIR = path.resolve(__dirname, '..');
const DATA_DIR = path.join(ROOT_DIR, 'data');
const OUTPUT_FILE = path.join(DATA_DIR, 'all-content.json');

// dataディレクトリがなければ作成
if (!fs.existsSync(DATA_DIR)) {
    fs.mkdirSync(DATA_DIR, { recursive: true });
}

/**
 * ディレクトリを再帰的に走査してmetadata.jsonを収集
 */
function findAllMetadata(dir, bookName = null) {
    const results = [];

    try {
        const items = fs.readdirSync(dir, { withFileTypes: true });

        for (const item of items) {
            const fullPath = path.join(dir, item.name);

            // 無視するディレクトリ
            if (['scripts', 'data', 'assets', 'node_modules', '.git'].includes(item.name)) {
                continue;
            }

            if (item.isDirectory()) {
                // 1階層目：書籍名
                if (!bookName) {
                    const subResults = findAllMetadata(fullPath, item.name);
                    results.push(...subResults);
                }
                // 2階層目：テーマ名（metadata.jsonを探す）
                else {
                    const metadataPath = path.join(fullPath, 'metadata.json');
                    if (fs.existsSync(metadataPath)) {
                        try {
                            const metadata = JSON.parse(fs.readFileSync(metadataPath, 'utf-8'));

                            // URLとサムネイルのパスを生成
                            const relativePath = path.relative(ROOT_DIR, fullPath);
                            const urlPath = relativePath.split(path.sep).join('/');

                            results.push({
                                book_name: bookName,
                                theme: metadata.theme || item.name,
                                created_at: metadata.created_at || new Date().toISOString().split('T')[0],
                                tags: metadata.tags || {},
                                url: urlPath + '/reading.html',
                                thumbnail: urlPath + '/manga_4koma.png',
                                metadata: metadata
                            });
                        } catch (error) {
                            console.warn(`⚠️ メタデータ読み込みエラー: ${metadataPath}`, error.message);
                        }
                    }
                }
            }
        }
    } catch (error) {
        console.warn(`⚠️ ディレクトリ読み込みエラー: ${dir}`, error.message);
    }

    return results;
}

/**
 * メイン処理
 */
function main() {
    console.log('📚 メタデータ統合を開始...\n');

    // 全メタデータを収集
    const allThemes = findAllMetadata(ROOT_DIR);

    // 書籍別にグループ化
    const bookMap = new Map();

    allThemes.forEach(theme => {
        if (!bookMap.has(theme.book_name)) {
            bookMap.set(theme.book_name, {
                book_name: theme.book_name,
                themes_count: 0,
                themes: []
            });
        }

        const book = bookMap.get(theme.book_name);
        book.themes.push(theme);
        book.themes_count++;
    });

    // all-content.json構造を生成
    const allContent = {
        total_count: allThemes.length,
        last_updated: new Date().toISOString().split('T')[0],
        books: Array.from(bookMap.values()).sort((a, b) =>
            a.book_name.localeCompare(b.book_name)
        )
    };

    // 各書籍内のテーマを日付順にソート
    allContent.books.forEach(book => {
        book.themes.sort((a, b) =>
            new Date(b.created_at) - new Date(a.created_at)
        );
    });

    // ファイルに書き込み
    fs.writeFileSync(OUTPUT_FILE, JSON.stringify(allContent, null, 2), 'utf-8');

    // 結果を表示
    console.log('✅ メタデータ統合完了\n');
    console.log(`📊 統計情報:`);
    console.log(`   - 総テーマ数: ${allContent.total_count}`);
    console.log(`   - 総書籍数: ${allContent.books.length}`);
    console.log(`   - 最終更新: ${allContent.last_updated}`);
    console.log(`\n📁 出力ファイル: ${OUTPUT_FILE}\n`);

    // 書籍別の詳細
    console.log('📚 書籍別テーマ数:');
    allContent.books.forEach(book => {
        console.log(`   - ${book.book_name}: ${book.themes_count}テーマ`);
    });
    console.log('');
}

// 実行
try {
    main();
} catch (error) {
    console.error('❌ エラーが発生しました:', error);
    process.exit(1);
}
