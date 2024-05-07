const env = 'dev' // 'dev' | 'prod'
const ga4Ids = {
  dev: 'G-36HYH6NF6P',
  prod: 'G-341XFN0675',
}
export const ga4Id = ga4Ids[env]

export const projectWording = {
  slug: 'ccc_ukraine_202405',
  ogTitle: `勿忘烏克蘭：張乾琦．戰地紀實/Ukraine: Lest We Forget. Chien-Chi Chang's Reportage of the Two-Year Anniversary of the Russia-Ukraine War`,
  ogImage: `https://v3-statics.mirrormedia.mg/images/e1ad0adb-3270-45f8-bc73-06b645a11a10-w1200.jpg`,
  ogDescription: `你還記得布查大屠殺嗎？戰爭的殘忍景象曾讓全球民主國家憤慨，各國政要紛紛表達支持烏克蘭。兩年過去了，不少西方國家已經產生戰爭疲勞，質疑為何繼續資助這場戰爭的聲音愈來愈高；一般人的悲憫之情也在消退，對戰爭畫面已逐漸無感。
  張乾琦始終沒有忘記烏克蘭。他在文章裡說，當奧地利人以高空煙火慶祝新年時，烏克蘭人卻在爆炸聲中驚醒。他冒著嚴寒浴雪而行，第八次前往烏克蘭戰地，見證前線「絞肉機」般漫長艱苦的戰況。/| Do you still remember the Bucha massacre? The brutal scenes of war once stirred indignation among democratic nations worldwide, with leaders expressing support for Ukraine. Two years have passed, and many Western countries have developed war fatigue, questioning why they should continue funding this war. The voices of ordinary people expressing compassion have also faded, gradually becoming desensitized to the images of war.<br>Chien-Chi Chang has never forgotten Ukraine. In his article, he mentions that while Austrians celebrate the new year with sky-bound fireworks, Ukrainians wake up to the sounds of explosions. Braving the cold, he travels through the snow for the eighth time to the Ukrainian war zone, witnessing the prolonged and arduous conditions on the frontlines, often likened to a "meat grinder.”`,
}

export const projectName = projectWording.slug
