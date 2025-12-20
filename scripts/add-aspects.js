#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

const ROOT_DIR = path.join(__dirname, '..');

// 書籍名から側面を判定するマッピング
const bookToAspects = {
    'AI画像生成実践ガイド': ['intellectual', 'economic'],
    'FLUX': ['intellectual', 'economic'],
    'Hedra': ['intellectual', 'economic'],
    'Voicepeak': ['intellectual', 'economic'],
    'ヒグス✖️ Nanobanana': ['intellectual', 'economic'],
    'ビジネス資料作成実践ガイド': ['intellectual', 'economic'],
    '健康': ['physical']
};

function findAllMetadata(dir = ROOT_DIR, bookName = null) {
    const results = [];
    const items = fs.readdirSync(dir);

    for (const item of items) {
        if (item.startsWith('.') || item === 'node_modules' || item === 'scripts' || item === 'data') {
            continue;
        }

        const fullPath = path.join(dir, item);
        const stat = fs.statSync(fullPath);

        if (stat.isDirectory()) {
            // 1階層目：書籍名
            if (!bookName) {
                const subResults = findAllMetadata(fullPath, item);
                results.push(...subResults);
            }
            // 2階層目：テーマ名（metadata.jsonを探す）
            else {
                const metadataPath = path.join(fullPath, 'metadata.json');
                if (fs.existsSync(metadataPath)) {
                    results.push({
                        bookName,
                        themeName: item,
                        metadataPath
                    });
                }
            }
        }
    }

    return results;
}

function updateMetadata() {
    console.log('📝 メタデータに側面情報を追加中...\n');

    const allMetadata = findAllMetadata();
    let updatedCount = 0;

    for (const { bookName, themeName, metadataPath } of allMetadata) {
        try {
            const metadata = JSON.parse(fs.readFileSync(metadataPath, 'utf-8'));

            // 側面情報を取得
            const aspects = bookToAspects[bookName] || [];

            if (aspects.length > 0) {
                // 側面情報を追加
                metadata.aspects = aspects;

                // 保存
                fs.writeFileSync(metadataPath, JSON.stringify(metadata, null, 2) + '\n', 'utf-8');
                console.log(`✅ ${bookName}/${themeName}`);
                console.log(`   側面: ${aspects.join(', ')}`);
                updatedCount++;
            } else {
                console.log(`⚠️ ${bookName}/${themeName}: 側面マッピングなし`);
            }
        } catch (error) {
            console.error(`❌ エラー: ${metadataPath}`, error.message);
        }
    }

    console.log(`\n✅ ${updatedCount}件のメタデータを更新しました`);
}

updateMetadata();
