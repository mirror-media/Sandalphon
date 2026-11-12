# Related-Post / 延伸閱讀

## Feature

- 元件功能

  - 自動根據螢幕寬度 & 文章數量，調整文章排版形式。
  - 點按文章圖片 or 文章標題，可另開分頁至該文章頁面。
  - 文章標題超過特定行數，會截斷並以「...」呈現。（手機/平板：標題最多 2 行 ; 桌機：標題最多 3 行）

- 使用設計

  - 使用者可傳入 `title`，指定標題文字。
  - 使用者可傳入 `defaultImage`。當文章圖片無法正常顯示時，會改為顯示此 `defaultImage`。
  - 使用預設的 className : `.related-post-title`, `.related-post-caption` 調整標題/文章標題樣式，或傳入自訂 className，並以該 className 進行調整。

![Related Post](./imgs/related-post.png)

## How to Use This Pkg as React Component ?

1. Install the npm [package](https://www.npmjs.com/package/@mirror-weekly/react-component)
   `yarn add @mirror-weekly/react-component`
2. Import component in the desired place

```
import { RelatedPost } from '@mirror-weekly/react-component/related-post'

const data = [
  {
    id: 1,
    slug: 'post-slug-01',
    caption: '文章標題 01',
    imageUrl: 'https://www.mirrormedia.com.tw',
    alt: '文章敘述 01',
    link: 'https://www.mirrormedia.mg',
  }
]

export default function ComponentName() {
  return (
    <RelatedPost
      relatedData={data}
      title="最新報導"
      titleClassName="title"
      captionClassName="caption"
      defaultImage="default-img.svg"
    />
  )
}
```

## Props

| 名稱             | 資料型別 | 必須 | 預設值                   | 說明                                                                                                                                                                                        |
| ---------------- | -------- | ---- | ------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| relatedData      | Array    | `V`  | `[]`                     | 延伸閱讀文章資訊。範例：`[ { id: 1, slug: 'post-slug-01', caption: '文章標題 01', imageUrl: 'https://www.mirrormedia.com.tw', alt: '文章敘述 01',link: 'https://www.mirrormedia.mg' } ]` 。 |
| title            | String   |      | `"延伸閱讀"`             | 標題。                                                                                                                                                                                      |
| titleClassName   | String   |      | `"related-post-title"`   | 指定標題 className，可用於變更標題樣式。                                                                                                                                                    |
| captionClassName | String   |      | `"related-post-cpation"` | 指定文章標題 className，可用於變更文章標題樣式。                                                                                                                                            |
| defaultImage     | String   |      | `""`                     | 文章預設圖片。當 `relatedData` 的 `imageUrl` 載入失敗時，則載入預設圖片。                                                                                                                   |

## Props Detail : relatedData

### required

- `caption`: 文章標題。

### optional

- `id`: 文章 id。
- `slug`: 文章 slug，用於`https://www.mirrormedia.mg/story/${slug}/`作為文章連結。如無可選擇使用`link`作為文章連結資料。
- `imageUrl`: 文章圖片 URL。
- `alt`: 文章圖片替代文字。
- `link`: 文章連結。

## TODOs

- [ ] 建立 CI pipeline，透過 CI 產生 npm package，並且上傳至 npm registry
- [ ] 透過 Lerna 控制 packages 之間的版號
- [ ] 圖片載入改為使用 `@readr-media/react-image`
