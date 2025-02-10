const env = 'prod' // 'dev' | 'prod'
const ga4Ids = {
  dev: 'G-36HYH6NF6P',
  prod: 'G-341XFN0675',
}
export const ga4Id = ga4Ids[env]

const slug = 'ccc_ukraine_202405'

export const projectWording = {
  slug,
  ogTitle: `旗幟下　別無選擇：俄羅斯戰俘獨家專訪/Under the Banner: No Escape`,
  ogImage: `https://v3-statics.mirrormedia.mg/images/8ff392db-632f-4518-a219-8655178d1909-w1600.jpg`,
  ogDescription: `| 烏俄戰爭開打2年多以來，張乾琦前後8次前往烏克蘭戰地進行攝影記錄工作。最近這次，他獲得批准，成為華文媒體首位採訪俄羅斯戰俘的記者。<br>不同於之前幾次，張乾琦隨烏軍前進，見證戰爭對這塊土地與人民帶來的殘酷、荒謬與悲涼。這一次，他將鏡頭凝視俄羅斯戰俘，透過專訪聆聽他者之聲。他的提問和觀察角度像稜鏡一般，照出這場絕望之戰中人性的卑微。例如，才22歲的俄羅斯中尉告訴張乾琦：「我只想回家。」「我只有一條路可走—加入戰爭。」/ “No one asked whether we wanted to go. We got the order, and forward we went.”<br>These words come from a captured Russian lieutenant from the 71st Motorized Infantry Regiment, interviewed in Zaporizhia. Like countless others, his story reveals war's often unwanted realities.`,
}

export const ogUrl =
  env === 'dev'
    ? 'https://www.mirrormedia.mg/projects/dev-ccc_ukraine_202405/index.html'
    : 'https://www.mirrormedia.mg/projects/ccc_ukraine_202405/index.html'

export const projectName = projectWording.slug
