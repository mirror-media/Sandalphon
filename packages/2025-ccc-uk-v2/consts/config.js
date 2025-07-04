const env = 'prod' // 'dev' | 'prod'
const ga4Ids = {
  dev: 'G-36HYH6NF6P',
  prod: 'G-341XFN0675',
}
export const ga4Id = ga4Ids[env]

const slug = 'ccc_ukraine_202507'

export const projectWording = {
  slug,
  ogTitle: `零線：張乾琦見證無人機時代的烏俄戰爭 / Zero Line: At the edge of silence and survival on a shifting front.`,
  ogImage: `https://v3-statics.mirrormedia.mg/images/883ef350-e7a3-49b2-91a3-8b93966fd376.jpg`,
  ogDescription: `零線（zero line)，是前線的最前沿，對峙的武裝力量在此交鋒並展開直接戰鬥，這一詞尤其常用於烏克蘭與俄羅斯軍隊之間的邊界。「零線」在烏克蘭戰爭的語境中，代表著暴露、突襲與瞬間變化的高風險狀態。 / The "zero line" refers to the very front edge of the frontline, where opposing armed forces directly engage and confront each other. This term is especially common when describing the boundary between Ukrainian and Russian troops. In the context of the war in Ukraine, the "zero line" symbolizes a high-risk zone marked by exposure, sudden attacks, and rapid changes.`,
}

export const ogUrl =
  env === 'dev'
    ? 'https://www.mirrormedia.mg/projects/dev-ccc_ukraine_202507/index.html'
    : 'https://www.mirrormedia.mg/projects/ccc_ukraine_202507/index.html'

export const projectName = projectWording.slug
