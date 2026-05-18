# Business School Association Web

國立空中大學商學系系學會網站，提供系學會介紹、教師資料、活動資訊與活動花絮展示。

## 技術棧

- Vue 3
- Vite
- TypeScript
- Tailwind CSS

## 安裝方式

```bash
npm install
```

## 開發啟動

```bash
npm run dev
```

預設會以 Vite 開發伺服器啟動，可透過瀏覽器開啟終端輸出的本機網址。

## 型別檢查

```bash
npm run check
```

此指令使用 `vue-tsc --noEmit` 驗證 Vue SFC 與 TypeScript 型別。

## 格式檢查

```bash
npm run format
npm run format:check
```

## 建置與預覽

```bash
npm run build
npm run preview
```

正式建置輸出於 `dist/public`。

## 靜態資源與 `teachers.json` 維護方式

- 所有 public 靜態資源放在 `client/public/`。
- 程式中如果要引用 public 資源，請使用 `client/src/utils/publicPath.ts` 的 `publicPath()` 組路徑，不要直接寫 `/logo.svg`、`/teachers.json` 這類根目錄絕對路徑。
- `teachers.json` 位於 `client/public/teachers.json`。
- `teachers.json` 內的 `photo` 欄位請維持相對於 `client/public/` 的路徑，例如 `images/teachers/fangchen.jpg`。載入時會由前端透過 `publicPath()` 自動補上 `BASE_URL`。

## 部署注意事項

- 本專案使用 Vite，若部署到 GitHub Pages 或任何子路徑站台，必須確認 Vite `base` 設定與部署路徑一致。
- 前端程式碼不得直接依賴 `/xxx` 根目錄資源路徑，否則在子路徑部署時會 404。
- 目前所有 public 資源與 `teachers.json` 請統一透過 `publicPath()` 取得，避免 base path 問題。
- 建議部署前先執行：

```bash
npm run ci
```
