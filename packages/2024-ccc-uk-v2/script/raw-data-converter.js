let data = require('./csv/output/raw-data.json')
const fs = require('fs')
const path = require('path')

let i18n_zh_tw = []
let i18n_en = []
let pages = []

/*
  欠缺landing page 圖片\前言、map for mobile
*/

data = data.sort((a, b) => {
  if (a.order - 0 < b.order - 0) {
    return -1
  } else if (a.order > b.order) {
    return 1
  } else {
    return 0
  }
})

const htmlMeta = {
  text: {
    title: '旗幟下　別無選擇：俄羅斯戰俘獨家專訪',
  },
  eng_text: {
    title: `Under the Banner: No Escape`,
  },
}

let firstPage = data.find((data) => data.type === 'L')
firstPage = {
  order: firstPage.order,
  type: 'L',
  name: 'Landing Page',
  filename: firstPage.filename,
  text: {
    title: '旗幟下　別無選擇\n俄羅斯戰俘獨家專訪',
    foreword:
      '「我只有一條路可走—加入戰爭。沒人問我們想不想去。接到命令，我們就只能向前進。」',
    credit: '張乾琦 Chien-Chi Chang',
    ig: 'https://www.instagram.com/chien_chi_chang',
    text: firstPage.text,
  },
  eng_text: {
    title: `Under the Banner: No Escape`,
    foreword: `“No one asked whether we wanted to go. We got the order, and forward we went.”`,
    credit: 'Chien-Chi Chang',
    ig: 'https://www.instagram.com/chien_chi_chang',
    eng_text: firstPage.eng_text,
  },
}

const endingPage = data
  .filter((data) => data.type === 'E')
  .reduce((first) => {
    return {
      order: first.order,
      type: first.type,
      name: first.name,
      filename: first.filename,
      text: {
        first: {
          name: '張乾琦',
          ig: 'https://www.instagram.com/chien_chi_chang',
          pairs: [
            {
              head: '出生：',
              body: '1961年生於台中市烏日區。\n\n',
            },
            {
              head: '學經歷：',
              body: '東吳大學英文學士，美國印第安那大學教育碩士，曾任《西雅圖時報》《巴爾的摩太陽報》攝影記者，現為馬格蘭通訊社終身會員。\n\n',
            },
            {
              head: '攝影作品：',
              body: '《鍊》（The Chain）、《我願意》（I do I do I do）、《囍》（Double Happiness）、《時差》（Jet Lag）、《唐人街》（Chinatown）、《脫北者》(Escape from North Korea )等。\n\n',
            },
            {
              head: '獲獎：',
              body: '曾獲荷蘭世界新聞攝影獎、美國NPPA年度攝影師、法國影像Visa國際紀實攝影獎、尤金．史密斯攝影獎、美國年度新聞攝影書獎、第二十八屆東元獎人文類獎、2022年新聞志業特殊貢獻獎，菲利普瓊斯格里菲斯攝影獎，第27屆臺北文化獎。\n\n',
            },
            {
              head: '展覽與典藏：',
              body: '曾參與威尼斯雙年展、巴西聖保羅雙年展、紐約攝影三年展、斐列茲藝術博覽會等國際展覽。攝影作品獲亨利·卡地亞-布列松基金會、喬治伊斯曼博物館、紐約國際攝影博物館、台南奇美博物館、國立台灣美術館、紐約皇后藝術博物館等納為典藏。',
            },
          ],
        },
        second: {
          title: `旗幟下　別無選擇\n俄羅斯戰俘獨家專訪`,
          pre: `烏俄戰爭開打2年多以來，張乾琦前後8次前往烏克蘭戰地進行攝影記錄工作。最近這次，他獲得批准，成為華文媒體首位採訪俄羅斯戰俘的記者。\n\n不同於之前幾次，張乾琦隨烏軍前進，見證戰爭對這塊土地與人民帶來的殘酷、荒謬與悲涼。這一次，他將鏡頭凝視俄羅斯戰俘，透過專訪聆聽他者之聲。他的提問和觀察角度像稜鏡一般，照出這場絕望之戰中人性的卑微。例如，才22歲的俄羅斯中尉告訴張乾琦：「我只想回家。」「我只有一條路可走—加入戰爭。」\n\n這篇精彩入微的報導，由英文寫成，經翻譯後由張乾琦校正。`,
          pairs: [
            {
              head: '',
              body: '「我只有一條路可走—加入戰爭。沒人問我們想不想去。接到命令，我們就只能向前進。」\n\n這段話出自被俘中尉口中，他隸屬俄羅斯第七十一摩托化步兵團，在烏克蘭扎波羅熱接受訪問。和無數其他人一樣，他的故事揭露了戰爭裡令人難以接受的事實。',
            },
            {
              head: '被遺棄的哨站　徒留孤寂荒涼',
              body: `這次採訪與攝影的申請，得到出乎意料之外的積極回覆，特別是這裡距離前線如此接近。這個難得的機會讓我壓力重重，整晚輾轉難眠。\n\n內心的期待和會面地點的現實之間，有顯而易見的落差。上午十點鐘，我和我的新聞嚮導來到一處孤零零的加油站，時間在這裡彷彿停滯，一輛鏽跡斑斑的灰白色中型巴士，停在飽經風霜的磚造建築旁。剝落的油漆和用木板封住的窗戶，輕訴它被遺棄的故事。只有下垂的加油槍如鬆弛的氣球，和油表上謎樣的數字，留下最後一次加油的無聲見證，一切早已是過去式。\n\n被遺棄的前哨站外，烈日炙烤的荒原在眼前開展。乾裂且不平整的草地往外延伸，間或穿插奄奄一息、只剩枯枝的灌木叢。詭異的寂靜籠罩四周，只偶爾被風的嘆息打破。\n\n突然之間，令人透不過氣的沉默被打破。刺耳的尖嘯聲宣告軍方的車隊到來，迅速在地平線劃過一道道模糊的軌跡。匆匆見識的原始力量，是不寒而慄的提醒，進一步放大被遺棄哨站的不安感。一輛白色豐田Corolla汽車，二○○○年代初遺留的產物，停在鏽跡斑斑的公車後面，在荒涼景象中顯得突兀。車窗的深色玻璃遮掩了車內的人影，他們的出現，為原本就費解的場景添增了擔憂。十分鐘之後，一輛掛著軍用車牌、沾滿泥濘的黑色SUV休旅車開了進來。我的新聞嚮導和駕駛打了個簡短的招呼，他是中等身材、臉色嚴肅的男子，穿著橄欖綠外套，除了槍套裡的手槍之外，沒有任何可辨識的標記。他所屬的單位，究竟是烏克蘭軍情局（GUR）或是安全局（SBU），始終不得而知。我們繞著破舊的建築走了一圈，當我們經過豐田汽車，深色玻璃車窗裡身影的晃動，讓我們有機會瞥見這位戰俘：拉低的毛線帽遮住了面容，帽子邊緣在眼窩處緊緊纏繞藍色膠帶。然而，光線的變換和深色玻璃，讓景象模糊不清。\n\n踏入約八十平方公尺的建築裡，面對的是灰塵和昏暗—封閉的空間裡，瀰漫著沉悶的空氣和隱約的霉味。剝落的油漆、粗糙的梁柱和結了蜘蛛網的縫隙，說明它被忽視的情況。高低不平的地板放了生鏽的隔板，還有些散落的麥稈—這是過往生活的痕跡，或許曾養過牲口。外頭些許的光線，透過釘木板的窗戶和一扇壞掉的門，勉強穿入近乎漆黑的房間。\n\n二扇車門猛然關上。片刻之後，一個高大的身影出現在門口。這名軍人，身高明顯超過一九○公分，如公牛一般魁梧，滿臉濃密的鬍子，流露咄咄逼人的氣息。他全副武裝、手持步槍，把蒙上面罩的俘虜推入陰暗的空間。戰俘的雙手被綁，眼睛被矇住，保持站立不動的姿態，直到軍人拿一個破舊的木箱讓他坐下。這位表情嚴厲、滿臉濃密黑鬍子的烏克蘭軍人，壓低了聲音跟臉色嚴肅的男子說話。手腕快速一翻，他戴好頭套遮隱自己的面容，烏方軍人戴上頭套是不讓戰俘記得他的長相，避免日後遭指認。他動作俐落地用軍刀移除俘虜頭上和手上的藍色膠帶，並將毛帽拉至額頭，金屬刮擦的聲音，在近乎寂靜的環境裡發出刺耳的回音。\n\n「綁膠帶的俘虜也許比較能呈現全貌。」我小心說著。「當然沒錯，不過我們不希望我們被俘虜的士兵在俄羅斯也受到這種待遇。」我的新聞嚮導如此說。不過，到了晚上晚些時候，我發現他已經用他的手機拍下綁了膠帶的俘虜照片，還把它們傳到他的IG限動！《日內瓦公約》，特別是第三公約關於戰俘的部分，雖沒有明文禁止發布囚犯的名字，但是概述了各種關於這類情況的保障措施。`,
            },
            {
              head: '年僅二十二歲　歷經戰爭風霜',
              body: `「這位是張亁琦，來自台灣的攝影記者。」新聞嚮導幫我做了介紹。我簡單瞥了這位戰俘一眼，他點了點頭，同意採訪和拍照。不過，基於不危及他的人身安全，我們隱去他的姓名，也不使用採訪過程中所拍攝的露臉照片。\n\n這名年輕人，身高約一八○公分，臉龐年輕、五官端正。他穿的不是戰俘營的藍色制服，而是身著軍服，深褐色的迷彩服剛剛清洗過，但仍留著無法抹滅的戰爭痕跡。他的聲音低沉、近乎耳語，以致我的新聞嚮導不得不調整手機錄音的距離，以便錄下他的話語。中間有一度，全神聆聽的軍人直截了當做了手勢，表示需要放大音量。\n\n整個採訪過程，他全身散發一種靜默感，除了嘴唇的簡單動作和偶爾的眼神交會，他的姿勢始終一動也不動。出生於伊斯坦堡，在車臣長大，這位二十二歲的中尉，畢業於位在阿穆爾州的遠東高等軍事學院，原以為自己走上的是命中注定的軍旅生涯。然而，戰爭的殘酷現實很快粉碎了他原本的認知。訪問在二○二三年十一月四日進行，同年十二月底，我再次前往烏東克拉馬托爾斯克採訪拍攝另外三名戰俘。這份摘要除了記錄一些數據細節，和俄羅斯被俘中尉臉上流露的疲態，我也想深入挖掘他的經驗。透過他自己說的話（經過翻譯轉述），在此呈現他未經修飾的真實情緒和觀點。`,
            },
            {
              head: '被迫走上前線　恐懼時刻相隨',
              body: `甫自軍校畢業，俄羅斯軍方就告訴他這是他的責任。命令就是命令。戰爭已在烏克蘭爆發，他們需要軍官上陣。回憶當時，他說：「我只有一條路可走—加入戰爭。」話在喉嚨又吞了回去。「沒人問我們想不想去。接到命令，我們就只能向前進。」這種盲目的服從，被迫朝他無意參與的暴力前進，至今仍是他心頭難以揮去的陰影。\n\n俄羅斯軍方在二○二三年九月將他送到第七十一摩托化步兵團的前哨陣地。那是個擁有二十六名士兵，準備好防衛工事的精實單位。他們的任務是防守羅博季涅區（扎波羅熱的東南部）的一個森林地區。任務從裝備檢查開始，隨後進行疏散工作，協助平民逃離火線。一種沉重的不安感始終瀰漫在空氣中，因為戰爭總有辦法將一切扭曲。他們照理說是防守者，但是恐懼時時啃嚙著他們。猛烈砲火如雨傾盆而下。坦克在遠處轟隆作響，時刻提醒他們正面臨的火力。\n\n當問起他的單位配備什麼樣的武器，他回答：「機關槍、反坦克武器和榴彈發射器。我們有坦克和砲彈。我不知道（在步兵團裡）各自的確切數量。」至於在空中嗡嗡作響的無人機，則是他們必須面對的嚴峻現實。它們時時刻刻監視著他們的一舉一動。「我們最關切的是無人機目標是什麼。有些是用在偵查，有些負責傳遞砲擊的座標參數。那是我們最擔心的。至於FPV（第一視角無人攻擊機），就要看誰的手腳快。」也就是說，是無人機快，還是被瞄準的目標尋找掩蔽快。\n\n他提到大部分時候，他們只能沉潛待發，等候即將出現的下一波攻擊。患難與共的情誼就是在恐懼和共同的困境中建立的。但是它無助於抹除隨時可能沒命的囓心感受。此外，他說有一半的人並不想待在那邊。有的人是為了錢打仗，有的人是基於他不能理解的理由。但剩下那一半的人，包括他在內，則只想要回家。這場戰爭的觸角不斷延伸，而且比任何人想像的還要混亂。他說在他們的防禦地區，他們遇到了瓦格納集團的士兵。「在我的駐點有一位。在另一個駐點有二位。在我駐點的這一位，曾在巴赫姆特附近參與戰鬥，其他二位則是從非洲回來，第一次加入烏克蘭的戰事。」`,
            },
            {
              head: '隊友折損過半　上級指揮不力',
              body: `然後是人員的損失。原本一開始他們有二十六人；在他被俘虜時只剩下十二人。有人死於砲火，有些死於槍下。至於傷者，有些人撐了過來，有些則否。一切變得模糊不清，它成了一場他從未曾想要參與，為求生存的絕望之戰。\n\n回頭來看，他責怪領導階層。他們把他和他的戰友們派來，但情報錯誤、補給不力，似乎只想用更多的人來解決問題，而沒有認真規劃贏的策略。不令人意外，逃兵的情況開始出現。他說每個單位大約有五％的人憑空消失，不願接受自己被分配的命運。懷疑的情緒開始蔓延。有耳語流言說，實際傷亡人數在三十五萬到四十萬人之間，勝利只是痴心妄想。\n\n接下來，他被俘虜了。他遭到包圍，與部隊斷了聯繫。他話語中流露著苦澀：「你看，我之所以在這裡，正是因為我的指揮官們遺棄我，不提供支援，讓烏克蘭人得以把我包圍。」如今他成了戰俘，背負著他所見和經歷的沉重負擔。戰爭或許關乎責任，但是也關乎破滅的人生和埋葬的夢想。這是他從不想面對的殘酷事實。\n\n他訴說他的苦難經歷，聲音在寂靜中迴盪。\n\n這篇摘要期望能帶你身歷其境，但它只是這場巨大衝突的一個視角，一個單一的碎片，從龐大敘事中剝下的一個片段。整個大的圖像依舊模糊難辨，由無數線索交織糾結的網，各自隱藏了一塊拼圖的碎片。誠然，官方認可的戰俘交換或許可提供真相的一瞥，但即使如此，不確定感依然揮之不去。\n\n凜冽寒風挾帶腐敗樹葉的淡淡氣息，標示著冬天的來臨。光禿的樹枝隨著微風吹拂，如爪子般抓撓鉛灰色的天空，製造出微弱的低語。在此同時，那位神色堅毅的烏克蘭士兵，已經用膠帶固定了俄羅斯中尉的毛線帽，並綑綁他的雙手。三扇車門快速地接連猛然關上。分毫不差，就在上午十點三十分，我目睹黑色SUV休旅車和白色豐田汽車消失在遠方，留下一片塵土飛揚和令人顫慄的終結感。這並不是出發，而是消失；一段從被遺忘的驚悚片裡撕落的場景。`,
            },
          ],
        },
        caption: '攝影：Viacheslav Ratynskyi',
        credit: {
          pairs: [
            '撰文：張乾琦',
            '攝影：張乾琦 / 馬格蘭通訊社',
            '網頁製作/策展：',
            '李文瀚、曾立宇、李又如、王薏晴、簡信昌',
            '英文校閱：張乾琦',
          ],
        },
      },
      eng_text: {
        first: {
          name: 'Chien-Chi Chang',
          ig: 'https://www.instagram.com/chien_chi_chang',
          pairs: [
            {
              head: '',
              body: 'Born 1961, Taichung, Taiwan.\n\n',
            },
            {
              head: 'Education and Work Experience',
              body: 'Chang received a BA from Soochow University in Taipei and an MS from Indiana University, Bloomington.\nHe worked as a photojournalist at The Seattle Times and The Baltimore Sun. \nChang joined Magnum Photos in 1995 and was elected as a Full Member in 2001. \nHis photographic works have been widely published in internationally renowned media such as National Geographic, TIME magazine, New York Times and Der Spiegel.\n\n',
            },
            {
              head: 'Photography Works',
              body: 'The Chain, I do I do I do, Double Happiness, Jet Lag, Chinatown, Escape from North Korea, and etc.\n\n',
            },
            {
              head: 'Awards',
              body: "Magazine Photographer of the Year, National Press Photographers Association (POY), US, 1999 \nFirst prize, Daily Life Stories, World Press Photos, Netherlands, 1999 \nVisa d'Or, Visa pour l'image, Perpignan, France, 1999 \nW. Eugene Smith Memorial Fund for Humanistic Photography, 1999 \nThe Best of Photography Book, The Chain, POY, US, 2003 \nTECO Award Culture Category, Taiwan, 2021 \nPhilip Jones Griffiths Award, UK, 2022 \nThe Foundation for Excellent Journalism Special Contribution Award, Taiwan, 2022 \nTaipei Cultural Award, Taiwan, 2023\n\n",
            },
            {
              head: 'Selected Exhibitions and Collections',
              body: `Chang's works have been shown in galleries and museums around the world including Venice Biennale, São Paulo Biennial, International Center of Photography. His photographic works has been in the collection of Henri Cartier-Bresson Foundation, George Eastman Museum, International Center of Photography, Queens Museum, Taipei Fine Arts Museume, Chimei Museum, and National Taiwan Museum of Fine Arts.`,
            },
          ],
        },
        second: {
          title: 'Under the Banner: No Escape',
          pairs: [
            {
              head: '',
              body: `“No one asked whether we wanted to go. We got the order, and forward we went.”\n\nThese words come from a captured Russian lieutenant from the 71st Motorized Infantry Regiment, interviewed in Zaporizhia. Like countless others, his story reveals war's often unwanted realities.\n\nThe interview and photo session request received an unexpected positive response, particularly given the proximity to the front lines. The weight of the opportunity pressed down on me, and sleep remained elusive all night.\n\nThe stark contrast between anticipation and the reality of our meeting point was immediately apparent. By 10:00 AM, my fixer and I arrived at a lone gas station, seemingly untouched by time—a mid-sized, rusty, whitish bus squatted beside a weathered brick building. Peeling paint and boarded-up windows whispered tales of abandonment. Only the drooping gas nozzles, limp-like deflated balloons, and the cryptic numbers on the gauges remained a silent testament to the last fill-up, long gone.\n\nBeyond the deserted outpost, a sun-scorched wasteland unfolded. A parched and uneven grass carpet extended outwards, interrupted only by the skeletal forms of shrubs clinging to life. An eerie silence, broken only by the wind's sigh, draped the surroundings.\n\nAbruptly, the oppressive silence shattered. Ear-splitting screeches announced military vehicles, their swift blurs streaking across the horizon. These fleeting glimpses of raw power were a chilling reminder of unseen forces, further amplifying the abandoned station's disquiet. \n\nA white Toyota Corolla, a relic of the early 2000s, perched incongruously behind the rusty bus amidst the bleak landscape. Its tinted windows concealed the figures within, their presence fueling a prickle of unease in an already perplexing scene. \n\nTen minutes later, a mud-caked black SUV bearing military plates rolled in. My fixer exchanged a curt greeting with the driver—a grim-faced man of medium build clad in an olive green jacket devoid of insignia save for a holstered pistol. His affiliation, be it Ukraine’s Military Intelligence (GUR) or Security Service (SBU), remained unanswered. We circled the dilapidated building, and as we passed the Toyota, a flicker of movement through the tinted windows offered a possible glance of the prisoner: a figure obscured by a beanie pulled low, the brim wrapped in blue tape. Yet, the changing light and tinted glass left the scene ambiguous.\n\nStepping inside the roughly 80 square meters building, I was confronted with dust and gloom—the enclosed space reeked of stale air and a faint mustiness. Peeling paint, roughly hewn beams, and cobwebbed cracks spoke of neglect. Rusty dividers and scattered straw littered the uneven floor—a bygone life, perhaps livestock. Slivers of light, filtering through boarded windows and a broken door, barely pierced the near-darkness.\n\nTwo car doors slammed shut. Moments later, a towering figure filled the doorway. The soldier, easily exceeding 1.9 meters and built like a bull with a thick beard, exuded a menacing aura. Armored and rifle-wielding, he shoved the masked captive into the dim space. His hands bound and eyes obscured, remained motionless until the soldier retrieved a weathered wooden box for him to sit. \n\nThe stern soldier, beard a dark curtain, spoke in hushed tones to the grim-faced man. A swift flick of the wrist and a balaclava masked the soldier’s features and prevented prisoners of war from remembering his appearance, avoiding recognition or accusation in the future. With a brisk movement, he removed the blue tape from the captive's head and hands using his combat knife and pushed the cap up to his forehead, the metallic scrape echoing sharply in the near silence.\n\n\"The captive with the tape could have provided a full picture,\" I said with concern. \"Surely, but we wouldn't want our captured soldiers in Russia to be subjected to such treatment,\" said my fixer. Later in the evening, however, I realized he had already snapped pictures with his phone of the captive with the tape and uploaded them to his Instagram Story!\n\nWhile the Geneva Conventions, particularly the Third Convention on Prisoners of War (POW), don't explicitly forbid publishing a prisoner's name, they outline various safeguards concerning such a scenario.\n\n“This is Chien-Chi Chang, a Taiwanese photojournalist.” My fixer facilitated the introduction. I briefly eyed the POW, who nodded and consented to the interview and photos. However, his name and face were withheld to protect his safety.\n\nThe young man, around 1.8 meters tall, displayed a youthful visage framed by handsome features. Instead of a POW camp’s blue uniform, he remained garbed in military uniform, the drab-blown camouflage fabric recently cleaned yet marked by the indelible reminders of the war. His voice, subdued and bordering on a whisper, prompted my fixer to adjust the phone recorder's proximity to capture his words. At one point, the absorbed soldier gestured bluntly, indicating a need for increased volume.\n\nA sense of stillness permeated him throughout the interview, his form frozen in place except for the quiet play of his lips and the occasional flicker of eye contact.\n\nBorn in Istanbul and raised in Chechnya, the 22-year-old lieutenant found himself on a path seemingly preordained for military service, culminating in graduation from the Far East Higher Military Academy in Amur. However, the brutal realities of war soon shattered his preconceived notions.\n\nBeyond the statistics and weariness etched on his face from the November 4, 2023 interview, the following month, I went on to photograph three POWs in Kramatorsk. This summary delves into the man's experience. I further went on to his own words (as paraphrased), revealing the man's raw emotions and viewpoints.\n\nFresh out of military school, they told him it was his duty. Orders were orders. War had broken out in Ukraine, and they needed officers. \"There was only one road—to war,\" he remembered, the words catching in his throat. “No one asked whether we wanted to go. We got the order, and forward we went.\" This blind obedience, this forced march towards violence he did not want to be a part of, still haunts him.\n\nThey shipped him out in September to an outpost of the 71st Motorized Infantry Regiment. That was a muscular unit with 26 soldiers ready to defend. Their task was guarding a wooded area in the Rabotyne district (southeast of Zaporizhzhia.) It started with the equipment checks, and soon afterward, they evacuated, helping civilians escape the line of fire. A constant sense of unease was hanging heavy in the air because war had a way of twisting everything. They were supposed to be the defenders, but fear gnawed at them constantly. Artillery fire rained down. Tanks rumbled in the distance, a constant reminder of the firepower they faced. \n\nWhen asked what kind of weapons his unit was equipped with, he replied, “Machine guns, anti-tank weapons, and grenade launchers. We had tanks and artillery pieces. I don’t know how many of what (in the regiment) precisely.”\n\nAnd drones, those buzzing things in the sky, were the stark reality in the sky watching their every move. “What the drones were aiming at was our first concern. Some are used for reconnaissance, others to relay coordinates for shelling. That’s what we were mostly concerned about. Regarding the FPV (first-person-view) drones, it was about who was quicker,” i.e., the drone or the target seeking cover. \n\nHe mentioned that most of the time, they were hunkered down, waiting for the next attack. The camaraderie was a bond forged in fear and shared hardship. But it couldn't erase the gnawing feeling that any moment could be their last.\n\nAdditionally, he said half the guys didn't want to be there. Some were fighting for money, others for reasons he couldn't fathom. But the other half, like him, just wanted to go home.\n\nThis war has tentacles everywhere and is way messier than anyone thought. He said they bumped into Wagner Group soldiers in their area: “In my position, there was one. And in another position, there were two. The one at my position had fought in and around Bakhmut, and the other two Wagner PMC fighters had returned from Africa to fight in Ukraine for the first time.\n\nThen there were the losses. They started with 26; only 12 were left when he was captured. Some fell to shelling, others to gunfire. As for the wounded, some made it, and some didn't. It all became a blur, a desperate fight for survival in a situation he never wanted.\n\nLooking back, he blamed the leadership. They sent him and his comrades out with faulty intel, poor support, and a strategy that seemed more about throwing bodies at the problem than winning. It wasn't surprising that desertions started happening. He said that around 5% of each unit, guys just vanishing, choosing their fate over the one they were handed. Doubt started creeping in, too. There were whispers about the actual number of casualties of 350,000 to 400,000, and that victory might be a pipe dream. \n\nAnd then, he was captured. Surrounded, cut off from his unit. \"You see,\" he said, bitterness creeping into his voice, \"the fact that I am here is because of my commanders, who just abandoned me without the backing that allowed Ukrainians to encircle me.\" Now, he’s a prisoner of war with a heavy burden of what he’s seen and been through. War may be about duty but also about lives shattered and dreams buried. It's a harsh reality he never wanted to face.\n\nHis voice echoed in the silence as he recounted his ordeal. This summary aims to transport you there, but it's just one perspective on a vast conflict, a single shard, and a fragment chipped away from a monolithic narrative. The whole picture remains obscured, a tangled web woven from countless threads, each concealing a puzzle piece. Admittedly, the officially sanctioned prisoner exchanges might offer glimpses of the truth, but even then, uncertainty lingers. \n\nA crisp wind carrying the faint scent of decaying leaves signaled the approach of winter. Bare branches clawed at the leaden sky as the breeze rustled through them, creating a sound akin to brittle whispers. Meanwhile, the stoic soldiers had already secured the lieutenant's beanie with tape and bound his hands. Three car doors slammed shut in rapid succession. At precisely 10:30 AM, I witnessed the black SUV and the white Toyota dissolve into the distance, leaving behind a swirling plume of dust and a chilling sense of finality. This was not a departure but a disappearance, a scene ripped from a forgotten thriller.`,
            },
          ],
        },
        caption: 'Photo by Viacheslav Ratynskyi',
        credit: {
          pairs: [
            `Article by: Chien-Chi Chang`,
            `Photography by: Chien-Chi Chang`,
            'Curation, design and development by:',
            'Wen-Han Lee, Lee-Yu Tseng, Yu-Ju Lee, I-Ching Wang, Hsin-Chan Chien',
            `English Proofreading: Chien-Chi Chang`,
          ],
        },
      },
    }
  })

data = [
  firstPage,
  ...data.filter((data) => data.type !== 'E' && data.type !== 'L'),
  endingPage,
]

data.forEach(({ text, eng_text, order, type, filename, name }, index) => {
  i18n_zh_tw.push({ text })
  i18n_en.push({ text: eng_text })
  let image
  if (type === 'M') {
    image = JSON.parse(filename)
  } else {
    image = filename ? filename : ''
  }
  pages.push({
    id: index,
    type,
    image,
    name,
  })
})

i18n_zh_tw[0].meta = htmlMeta.text
i18n_en[0].meta = htmlMeta.eng_text

i18n_zh_tw[0].rotate = {
  hint: '此專題建議以橫向格式閱讀\n請橫置手機\n以獲得最佳閱讀體驗',
  confirm: '確定',
}
i18n_en[0].rotate = {
  hint: 'Rotate your phone for best experience',
  confirm: 'OK',
}

i18n_zh_tw[2].tutorial = {
  caption: {
    title: '操作說明',
    hint: '點擊螢幕任意處，開啟圖片說明\n再次點擊可關閉',
  },
  navigate: '點擊按鈕開啟側欄，選擇縮圖，可快速跳轉至指定照片',
  arrow: '點擊左右箭頭，或直接滑動螢幕，可播放下一張照片',
}
i18n_en[2].tutorial = {
  caption: {
    title: 'Instructions',
    hint: 'To click anywhere on the screen will open the caption.\nClick again to close the caption.',
  },
  navigate:
    'Click the button and choose a thumbnail. It can skip to the chosen photo swiftly.',
  arrow:
    'To click left and right arrow buttons or to swipe the screen can display the next photo.',
}

console.log(`pages has ${pages.length} pages`)
console.log(`i18n_tw has ${i18n_zh_tw.length} pages`)
console.log(`i18n_en has ${i18n_en.length} pages`)

fs.writeFile(
  path.join(__dirname, '../datas/pages.json'),
  JSON.stringify(pages),
  (err) => {
    if (err) {
      console.error(err)
    }
  }
)
fs.writeFile(
  path.join(__dirname, '../i18n/zh-TW.json'),
  JSON.stringify(i18n_zh_tw),
  (err) => {
    if (err) {
      console.error(err)
    }
  }
)
fs.writeFile(
  path.join(__dirname, '../i18n/en.json'),
  JSON.stringify(i18n_en),
  (err) => {
    if (err) {
      console.error(err)
    }
  }
)
