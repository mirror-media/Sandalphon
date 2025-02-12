const env = 'dev' // 'dev' | 'prod'
const ga4Ids = {
  dev: 'G-36HYH6NF6P',
  prod: 'G-341XFN0675',
}
export const ga4Id = ga4Ids[env]

const slug = 'ccc_ukraine_202502'

export const projectWording = {
  slug,
  ogTitle: `戰與逃：自由的代價`,
  ogImage: `https://v3-statics.mirrormedia.mg/images/666ecc28-d0dd-4c7d-a070-2e0d8ab80470-w1600.jpg`,
  ogDescription: `你還記得二十歲時的自己嗎？你在讀書嗎？還是在工作？你有什麼夢想？
  二十來歲的頓涅茨克居民迪馬，自2022年2月在佔領區被俄羅斯軍隊強制徵召後，用日記紀錄戰爭惡魔的面貌。短短七個月後，他在戰場上喪生。
  烏俄戰爭滿三年了，交戰雙方粗估破百萬傷亡，多少珍貴生命成為冰冷的數字、無意義的砲灰。紀實攝影家張乾琦自開戰以來，第九次冒險深入烏克蘭戰地，他用圖、文幫我們紀錄下更多像迪馬這樣的故事。
  奮戰的勇氣、死亡的氣味、逃兵的心聲…，64歲的攝影老兵藉著持續紀錄戰地實況，在在反思他心心念念、深愛著的台灣的處境。`,
}

export const ogUrl =
  env === 'dev'
    ? 'https://www.mirrormedia.mg/projects/dev-ccc_ukraine_202502/index.html'
    : 'https://www.mirrormedia.mg/projects/ccc_ukraine_202502/index.html'

export const projectName = projectWording.slug
