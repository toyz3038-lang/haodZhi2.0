# 圖片存放位置

請將真實案例的圖片放在此資料夾中。

## 建議的檔案命名方式

- `testimonial-1.png`
- `testimonial-2.png`
- `testimonial-3.png`
- ... 以此類推

或者使用更描述性的名稱：
- `case-1.png`
- `case-2.png`
- `case-3.png`

## 圖片格式建議

- 支援格式：PNG（建議使用 PNG 格式）
- 建議尺寸：寬度 400-800px，高度 600-1200px（直向圖片）
- 建議檔案大小：每張圖片不超過 500KB 以確保載入速度

## 使用方式

在 `src/pages/Home.jsx` 中，圖片路徑應該寫成：
```jsx
'/images/testimonial-1.png'
'/images/testimonial-2.png'
'/images/testimonial-3.png'
```

注意：路徑開頭必須有 `/` 斜線，這樣才能正確從 public 目錄讀取。
