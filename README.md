# Google SafeSearch Enforcer

Google検索時に、URLパラメータ `safe=active` を常に追加・強制するChrome系ブラウザ向け拡張機能です。

## インストール

1. このリポジトリをダウンロードまたはクローンする
2. Chromeで `chrome://extensions/` を開く
3. 「デベロッパー モード」を有効にする
4. 「パッケージ化されていない拡張機能を読み込む」を押す
5. このリポジトリのフォルダを選択する

以後、`google.com` または `www.google.com` の検索URLを開くたび、`safe` パラメータが `active` に追加または置換されます。

## テスト

```sh
npm test
```
