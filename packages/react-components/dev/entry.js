import React from 'react' // eslint-disable-line
import { createRoot } from 'react-dom/client'

import { Logo } from '../src/logo'
import { RelatedPost } from '../src/related-post'

const reactRootId = 'root'
const container = document.getElementById(reactRootId)
const root = createRoot(container)

const mockData = [
  {
    id: 1,
    slug: 'test01',
    caption:
      '【寵粉速報】5元就能訂閱「鏡週刊會員制」【寵粉速報】5元就能訂閱「鏡週刊會員制」【寵粉速報】5元就能訂閱「鏡週刊會員制」【寵粉速報】5元就能訂閱「鏡週刊會員制」',
    imageUrl:
      'https://www.mirrormedia.com.tw/assets/images/20221017214008-027f6c46502e220dd63521d758ef95e6.jpg',
    alt: 'alt測試01',
  },
  {
    id: 2,
    slug: 'test01',
    caption:
      '【寵粉速報】5元就能訂閱「鏡週刊會員制」【寵粉速報】5元就能訂閱「鏡週刊會員制」',
    alt: 'alt測試01',
  },
]

root.render(
  <>
    <Logo />
    <RelatedPost relatedData={mockData} />
  </>
)
