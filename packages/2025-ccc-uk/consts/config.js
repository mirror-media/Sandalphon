const env = 'prod' // 'dev' | 'prod'
const ga4Ids = {
  dev: 'G-36HYH6NF6P',
  prod: 'G-341XFN0675',
}
export const ga4Id = ga4Ids[env]

const slug = 'ccc_ukraine_202502'

export const projectWording = {
  slug,
  ogTitle: `戰與逃：自由的代價 / Fight or Flee: The Price of Freedom`,
  ogImage: `https://v3-statics.mirrormedia.mg/images/666ecc28-d0dd-4c7d-a070-2e0d8ab80470-w1600.jpg`,
  ogDescription: `烏俄戰爭滿三週年了，交戰雙方粗估破百萬傷亡，多少珍貴生命成為冰冷的數字、無意義的砲灰。紀實攝影家張乾琦第9次冒險深入烏克蘭戰地，用敏銳的影像和文字紀錄戰爭的色溫、聲響、氣味和時空。
  他總是背著攝影機前往他方、凝視他者，心心念念的仍是故鄉台灣。64歲的攝影老兵一次次見證烏克蘭人奮戰的勇氣、死亡的氣味、逃兵的心聲……，他一方面無畏恐懼把鏡頭靠得夠近，一方面在心態上卻也退得夠遠，不被激情幻覺綁架，而是靜靜觀照，希望能從中尋找屬於自身對照的意義。 / The city was almost unrecognizable when I arrived in Odesa on a chilly mid-November evening. Darkness engulfed the streets, broken only by the faint flicker of candles in apartment windows, the muted glow of passing headlights, and the relentless hum of diesel generators. The acrid smell of fuel clung to the air, and the noise was inescapable—like an unending cacophony of lawnmowers cutting through an eerie, oppressive silence.`,
}

export const ogUrl =
  env === 'dev'
    ? 'https://www.mirrormedia.mg/projects/dev-ccc_ukraine_202502/index.html'
    : 'https://www.mirrormedia.mg/projects/ccc_ukraine_202502/index.html'

export const projectName = projectWording.slug
