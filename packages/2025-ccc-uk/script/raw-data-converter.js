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
    title: '戰與逃：自由的代價',
  },
  eng_text: {
    title: '',
  },
}

let firstPage = data.find((data) => data.type === 'L')
firstPage = {
  order: firstPage.order,
  type: 'L',
  name: 'Landing Page',
  filename: firstPage.filename,
  text: {
    title: '戰與逃：自由的代價\n張乾琦烏俄戰爭三週年紀實',
    foreword: '',
    credit: '張乾琦 Chien-Chi Chang',
    ig: 'https://www.instagram.com/chien_chi_chang',
    text: firstPage.text,
  },
  eng_text: {
    title: '',
    foreword: '',
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
          title: `戰與逃：自由的代價\n張乾琦烏俄戰爭三週年紀實`,
          pre: `你還記得二十歲時的自己嗎？你在讀書嗎？還是在工作？你有什麼夢想？二十來歲的頓涅茨克居民迪馬，自2022年2月在佔領區被俄羅斯軍隊強制徵召後，用日記紀錄戰爭惡魔的面貌。短短七個月後，他在戰場上喪生。烏俄戰爭滿三年了，交戰雙方粗估破百萬傷亡，多少珍貴生命成為冰冷的數字、無意義的砲灰。紀實攝影家張乾琦自開戰以來，第九次冒險深入烏克蘭戰地，他用圖、文幫我們紀錄下更多像迪馬這樣的故事。奮戰的勇氣、死亡的氣味、逃兵的心聲…，64歲的攝影老兵藉著持續紀錄戰地實況，在在反思他心心念念、深愛著的台灣的處境。（編按：報導原文以英文寫成）`,
          pairs: [
            {
              head: '',
              body: '十一月中，我在凜冽的夜晚來到敖德薩時，整個城市幾乎難以辨認。黑暗吞噬了街道，只有公寓窗戶搖曳著微弱燭光，低聲駛過的車燈，和柴油發電機的持續低鳴。空氣中有揮不散的燃油刺鼻氣味，和無從迴避的噪音——彷彿割草機在詭異、壓迫的沈默中無止盡地嘎嘎作響。\n\n限電在這裡並非不便，而是為生存的奮鬥。經歷三年俄羅斯對烏克蘭包括電網在內不間斷的攻擊，國內半數電力供應已經被摧毀。敖德薩和烏克蘭大部分地區一樣，必須忍受入夜後的冰冷黑暗。\n\n我的新聞嚮導歐列克西幫我訂了大西洋飯店。曾是海港邊充滿生氣的花園渡假村，如今彷彿只剩下空洞的軀殼。大廳昏暗且空蕩蕩。部分員工已經裹著毯子蜷縮在沙發，準備在這裡過夜。與其說是飯店，現在更像是避難所，提醒著我們，戰爭如何深刻侵蝕生活中最簡單的舒適。\n\n就在我準備搭飛機從維也納飛往奇西瑙時，手機震了一下，傳來我在基輔電訊社（Interfax）擔任編輯的朋友彼得的簡訊：\n「祝你旅途平安。對了，小心巡弋飛彈。」\n\n這是2022年2月俄軍開始全面入侵烏克蘭以來，我第九次自費到烏克蘭，然而我仍覺得自己像個新手。每一次，同樣一切都只能隨機應變。沒有所謂的例行公事，因為這是戰爭——局勢瞬息萬變，行程總在最後一刻更動，不確定性是唯一的不變。\n\n我和歐列克西第一次見面喝咖啡，是短暫但有揭示性的時刻。不約而同，我們本能地選擇了面對門口的座位——這是我1992年在紐約唐人街工作時養成的習慣，對歐列克西來說，則是戰爭時期的必要之舉。我們的肩上都背著迷你EDC（每日攜帶的隨身包），隨時準備應對突發狀況。\n\n從影片製作人轉任新聞嚮導的歐列克西，以謹慎細心出名。他那破舊但堅固的日產探路者（Pathfinder）休旅車是座移動的堡壘，裝配了無人機追蹤器，也備有急救箱和戰術工具等生存必須品。這裡是他隱蔽的工作室兼地下碉堡，架子上是整齊排放的罐頭食品、水、睡袋，和已充電的對講機，可供五個人維持兩個星期。它不僅是工作間——它也是一條生命線。\n\n在基輔，我們深切體會了有備無患的重要。突然的停電，令我們困在一平方公尺狹窄蘇聯時代電梯的黑暗之中。刮痕累累的金屬牆和冰冷、有霉味的空氣更加深了那一刻帶給人的幽閉恐懼。它強力提醒我們，例行的日常轉眼就可能充滿危險。在這裡，謹慎不僅是美德，基本上它是個生存技能。\n\n在太過明亮而毫無生氣的房間裡，置身眾記者之中令我感到格格不入。2024年12月1日，澤倫斯基總統和新任的歐盟理事會主席柯斯塔在基輔召開了共同記者會。柯斯塔主席強調了歐盟對烏克蘭毫不動搖的支持，至於澤倫斯基總統則對歐盟持續的協助表達感謝，並重申烏克蘭對達成公義且持久和平的承諾。\n\n我手拿相機站在新聞發布室裡，口譯員的低語夾雜著快門的喀嚓聲，但我的思緒翻飛。如果站在這裡的人換作是川普，而不是澤倫斯基和柯斯塔，會是什麼樣子？氣氛將變得緊張而難以逆料。謹慎拿捏的外交應對將隨著他的出現而崩解——響亮的宣言、尖銳的要求、「24小時結束戰爭」的承諾。我幾乎可以看到擔任烏俄特使的退休將軍凱洛格就站在川普身邊，強化同樣的訊息：美國不再提供無條件的援助——烏克蘭必須有所回報。\n\n那麼，代價是什麼？答案是烏克蘭的稀土礦。川普已經暗示美國的軍援不該免費，把支援和經濟利益掛勾的討論已經開始浮出檯面。用軍事援助換取採礦權。拿對俄羅斯的制裁來交換協議。他會不會迫使澤倫斯基考慮和普丁談判？他會不會逼迫北約盟國支付更多的費用，否則就準備失去美國的支援？\n\n但這還不僅是關乎烏克蘭。中國也正密切觀望。如果川普斡旋出一個必須讓步的協議，會如何牽動北京對台灣的盤算？中國會把它當成可趁之機，還是說，川普的難以捉摸會形成嚇阻力量？\n\n我環顧四周，新聞記者會裡凡事一板一眼、控制有節、字句斟酌。但戰爭並無這般的節制。戰爭緊迫、殘酷、而且赤裸裸。\n\n採訪新的一個營時，我們會用安全的通訊APP如Signal來接收加密的座標參數，WhatsApp則是備用方案。經過確認之後，我們和新聞官見面，把手機轉換到飛航模式，穿越焦土和廢棄哨站，確保沒留下數位足跡。\n\n按照我的經驗，Signal和Threema是端對端加密的黃金標準，受到軍方和政府官員信賴。WhatsApp則是遙遙落後的第二名，只是備用方案而非主要的選項。Telegram？可能已經被破解了。Line？一般的聊天還可以，但不宜接發敏感資訊。iMessage、Messenger、Instagram？華而不實且不安全。那麼WeChat呢？那是通往老大哥的專線，一切都被監控。在這裡，安全通信就是數位的防彈衣——少了它，你就暴露在危險中。\n\n和49歲的烏克蘭海軍司令歐列克西．內茲帕帕中將見面實屬榮幸。他的會議室簡樸但深具象徵意義，烏克蘭的國旗和海軍軍旗高高矗立。架上的一個壓克力展示盒放了紅色的「發射前拆除」的標籤——取自一枚R-360海神飛彈，這枚飛彈在2022年4月14日擊沉了俄羅斯的黑海艦隊旗艦莫斯科號。昭示著在他指揮之下，一個決定性的勝利。\n\n喝著茶，我們進行了30分鐘深具意義的談話。內茲帕帕坐得筆直，姿態堅定而冷靜，散發內斂的張力。他用字斟酌，句句帶著經驗的份量。中間一度他身子往前靠，用銳利的眼神盯著我的眼睛，引述了邱吉爾的名言：「當你的頭在虎口下，你無法和老虎說理。」他的語氣平穩，比喻卻是令人不寒而慄的清晰——深刻提醒我們，烏克蘭正為生存而不懈奮戰，對抗一個毫無底線的敵人。\n\n隨著對談的深入，我捲起了衣袖，向內茲帕帕中將展示我2019年在寮國金三角被老虎攻擊留下的疤痕。他用驚訝而嘆服的眼神看著我說：「想必有天使守護著你。」他說的沒錯，若不是那一點幸運，我可能失去一隻手臂或是失血過多致死。那次經歷的教訓非常清楚明確：要遠離老虎。但是更深層的啟示仍縈繞心頭：你有辦法要掠食者傷你輕一點嗎？答案無庸置疑——當然是不行。\n\n我們啜飲著茶，杯子微弱的碰撞聲漸趨沈寂，我的思緒轉向了台灣。全世界似乎都比台灣人更確信，中國的入侵已經迫在眉睫。充當內應的通敵者或明目張膽、或暗中行事，提供侵略的助力；其他人則如鴕鳥，把頭埋在沙裡拒絕現實。但明明現實卻就擺在眼前：他們暴露的後背，如此脆弱而渾然不覺，當無可避免之事終於到來的一刻，將成為如雨下的彈片最容易的目標。\n\n這些相似處令人警醒。不管是在叢林中和老虎對視，或是面對地緣政治上的掠食者，現實都是一樣的：你無法和把你視為獵物的對象談判。要生存就需要警醒、準備、和絕不移開目光的勇氣。\n\n據報導，一家中國無人機製造商透露了中國政府的驚人訂單，訂購近一百萬架自殺式無人機，訂於2026年交貨。這畫面令人不寒而慄：成群結隊的輕量級殺人武器從空中蜂擁而至，它們唯一目的是精準打擊和摧毀。如此龐大規模的軍火需要仔細研究。它究竟有何目的？答案就如無人機本身一般，清晰且無從否認，盤旋空中充滿不祥的氣味。\n\n我曾目睹無人載具如何改變了烏克蘭的戰爭——空中的無人機嗡嗡作響，水下的無人艦艇悄然滑行。這些精巧的機器可以精準打擊、收集即時情報，在士兵所不能及的地方運作。它們不僅是戰術上的優勢；更是一場革命，重塑了衝突的形式，成為重新定義戰略、生存和前線武力不可或缺的工具。\n\n網路戰爭和無止盡的假資訊洪流改變了烏克蘭的戰爭形式，攻擊目標從軀體轉向了人心。虛假圖像和錯誤敘事滲入社群媒體，重塑了認知，侵蝕了信任，並製造了動搖社會的戰爭迷霧。戰鬥從領土的範疇延伸到心理層面，動搖信念和士氣。第一手的親身見證，可清楚看出數位工具和導彈具同樣的毀滅力，以悄無聲息的精準度瓦解團結。\n\n我已明白，瓦解一個國家的心理是步步為營的緩慢過程——你需要以十至二十年的時間，透過教育、宣傳、和假消息來重塑一整個世代對現實的認知。它就像在社會中編織一個巧妙細緻的網，即使是最不容辯駁的證據也無法穿透。於是人們被困在扭曲的現實之中，無法保衛他們自己、家人、或國家。這和赫胥黎的《美麗新世界》有著令人毛骨悚然的相似處，在其中，順從即是真理，思想被禁錮在心理的古拉格集中營。\n\n士氣一旦瓦解，就幾乎再無反轉的可能。即使直接接觸暴行——如針對維吾爾族穆斯林的新疆再教育營——也無法喚醒深陷束縛的人。它往往需要現實的嚴酷打擊——所謂的「當頭棒喝」——才能夠戳穿幻象，然而這時傷害已經造成。打擊士氣是從內部開始，早在發第一槍之前，就先瓦解了國家的意志。\n\n2022年10月從俄軍佔領的赫爾松解放出來的這個村莊，仍舊充滿陰森的沈默和戰爭的創痕。沒有電力、沒有水、也沒有人活動的跡象，猶如時間被凍結。瘦骨嶙峋的樹在灰色天空下伸出枝幹，斷裂的電線一無是處地懸著，象徵著破敗的基礎設施。破敗的建築清楚提醒這裡經歷的毀滅，也添加了空蕩蕩的淒涼感，彷彿這個村子正屏住了呼吸，等待著那可能永遠一去不返的正常生活。\n\n截至2024年初，烏克蘭大約156,000平方公里的土地——相當於25%的領土——受地雷和未爆彈的污染，面積幾乎有台灣的四倍大，也讓烏克蘭成了世界上地雷最密集的國家。\n\n我旅程的危險性毋庸置疑——因為擔心誤觸暗藏的地雷，我無法離開主要幹道一步。對幾百萬人來說，這種威脅是日常的現實。這些爆裂物的風險不僅危及生命，也癱瘓了如農業等產業，令大片肥沃的土地無法使用。清除如此廣大雷區的工作需要花數十年的時間，及大量資源、和全球的支援。\n\n一位72營的新聞官交給我一本有破損、泛橙色的筆記本，標題是《突破》。內容是是一位二十來歲的頓涅茨克居民迪馬，於2022年2月在佔領區被俄羅斯軍隊強制徵召後的自傳性描述。這個日記開始於普丁宣佈「盧甘斯克和頓涅茨克人民共和國」脫離烏克蘭而獨立之後。它記錄了作者的軍事調動、任務、和佔領下的生活，每一頁都提供了戰爭殘酷現實的一瞥。\n\n彼得的英文和俄文打字每分鐘可以打150個字，他幫忙翻譯了這本日記，總計有13章。工作的時候，他的電腦輕柔的嗡鳴聲充滿整個房間，紙張散落在他四周。底下是這份獨特記錄的摘要，提供戰爭殘酷現實的一瞥。\n\n「第三章、通往不確定的路\n\n我們上了火車。每六個士兵安排一個鋪位。他們臉上露出不確定感和對未知的恐懼。我隨即打電話給母親，告訴她他們可能要帶我們去克里米亞。這個消息令她非常沮喪，我也是一樣，儘管我還不確定到底我們的火車要往何處去。我們離開所謂的頓涅茨克人民共和國後，手機就連不上線了。我只有時間打給亞琳娜〔女友〕，跟她說他們要把我帶去克里米亞。與家人和朋友的電話通聯就此告終。」\n\n「第十三章、烏克蘭卡的村莊\n\n一切都很棒，但是為時短暫。停電變得越來越頻繁。一天晚上我在值哨的時候，卡式炸彈在我們附近爆炸。我跳入了戰壕。它發生得太突然，不過我反應快速。幸運的是炸彈落下的地方離我們不是太近。\n整體說來，在這個據點的任務還不錯。聽得到砲火聲，但還算可以忍受。我從2022年7月13日起就在那兒。在2022年7月29日，我們的指揮官來到了這裡，說明天要派十個人到前線兩星期。這個消息令我們沮喪，於是我們喝起酒來。我再次很快就喝醉了。」\n\n日記的最後一筆記錄寫著：\n\n「2022年9月3日，日記終。」\n\n它極可能是在迪馬死後，某個烏克蘭軍情官員在審閱日記之後加註上去的。\n\n你去過頓巴斯嗎？我去過，它是遼闊平坦的土地，單調的景色一望無際。參差的爐渣堆和零星村落點綴在貧瘠的原野上，灰色、沈重的天空下，無盡頭的道路穿過田野。這種平坦帶來壓迫感，由長年累月的勞動和衝突所造成。\n\n我常會好奇，為什麼普丁會想要頓巴斯，不過讀了他2021年7月12日發表的5000字長文〈關於俄羅斯人和烏克蘭人歷史性統一〉之後就很清楚了。他不只要盧甘斯克、頓涅茨克、或是克里米亞——他要的是整個烏克蘭。這篇論文充斥種種修辭，揭示一個遠超過爭議地區之外的願景，赤裸裸展示他對烏克蘭更大的意圖。\n\n普丁的論文揭露了他是汲汲於恢復帝國榮光的統治者，願意扭曲歷史來印證自身帝國野心的正當性，和控制烏克蘭在俄羅斯影響力之下，阻絕它和歐洲大西洋整合的道路。同樣這個人，曾在2008年在布加勒斯特的北約高峰會上告訴小布希，說烏克蘭不是一個真正的國家。他的話語，就如他的行動一樣，都是試圖抹滅烏克蘭的主權地位和改寫它的歷史。\n\n11月21日，美國駐基輔的大使館罕見地發布警告，提醒可能的空襲。就在前一天，烏克蘭首次使用美製的陸軍戰術飛彈系統（ATACMS）導彈，攻擊了俄羅斯的領土。這個時機凸顯了升高的緊張和衝突的升級。\n\n歐列克西和我持續監看本地的媒體，我們眼睛盯著任何空襲警報的跡象。周遭的寂靜充滿緊張壓力。我忍不住要問：你知道最近的防空洞在哪兒？你的緊急求生包收拾好了沒，或是你還在等警報聲響起？\n\n聶伯城飛彈攻擊的影片令人膽戰——六枚搖曳的火球劃過黑暗的天空，一枚接著一枚「榛果樹」飛彈猛烈撞擊地面，濃煙和塵土直衝天際。夜晚似乎隨這股力量而震動。被問到基輔是否是下一個目標，普丁用一個令人發毛的蘇聯天氣笑話回答：「今天，在白天，什麼事都有可能發生。」他的話語漠然而冷酷，呼應烏克蘭被破壞的慘狀。\n\n稍晚，在一家海鮮餐廳，榛果樹飛彈的影片在電視螢幕上閃過——六個火球照亮了夜空。我轉頭跟歐列克西說：「用餐愉快。」他笑著回應：「現在我準備好面對核彈了。」黑色幽默是我們應付緊繃氣氛的方式，刀叉的碰撞聲敲擊著不安的沈默。\n\n我已經見識烏克蘭人面對巨大危難的不屈韌性。然而，話雖如此，俄羅斯一波波無情的「人肉攻擊」已逐漸蠶食烏克蘭在頓巴斯所控制的領土。其殘酷程度令人咋舌——平均而言，一個俄羅斯士兵在前線的存活天數只有12天。\n\n在基輔一間俯瞰聶伯河的寬敞公寓裡，一位29歲的藝術家在夜晚作畫，白天則糾結於他改變人生的決定。他在一個檢查站被攔下時，因為沒有「軍人卡」來證明他在戒嚴期間的身分登記，於是國土招募和社會支援中心的人員沒收了他的手機，載著他到最近的一處軍事訓練基地，然後把他的汽車鑰匙交給了他的女友，只隨口說了句：「小心開車。」\n\n在兩個星期初步的訓練後，他即將被送往前線，但是他設法逃走了。如今，和許多逃兵一樣，他活在陰影底下，不時要回頭張望，不論到哪兒，選擇的重擔如影隨形。\n\n他並非不願守衛他的家園。被問到如果俄國人進入基輔，他是否會起身對抗，他的回答是毫不遲疑的「會」。但是他不願意在一個被他形容是混亂而腐敗的軍隊裡服役。獨自一人在公寓裡，周遭是他未完成的畫作，他仍懷疑逃走是否是正確的選擇。\n\n「我是被非法徵召的。我並不是逃兵。」他堅定地說，為自己每日糾結的心頭重擔做出明確的區分。\n\n在烏克蘭，軍人未經許可擅自離隊稱為СЗЧ (самовільне залишення частини)，涵蓋了擅離職守和逃兵的行為，各自要面對嚴重的法律後果。自2022年初以來，已經有近六萬起擅離職守和三萬起逃兵的案件登記在案——相當於18到20個旅的兵力，凸顯了烏克蘭軍隊所承受的龐大壓力。\n2024年11月21日，烏克蘭國會通過法案，允許初次擅離職守或逃兵者自願回役，只要他們在2025年1月1日前回營，就無須面對刑事控訴。隨後，國會又把最後期限延後到2025年3月1日，進一步鼓勵這些人重回部隊。\n\n我詢問一位熟悉這類困境的朋友，問他這位藝術家能否為自己在法院提出異議。他的回答直截了當：「當然可以，只要他花錢買通某個人去收買另一個人。」貪污在烏克蘭依舊猖獗，蔓延到軍隊內部，司法可以被收買，交易偷偷在層層疊疊的官僚體系陰暗處進行。\n\n數以萬計有瑕疵的82釐米和120釐米迫擊砲彈，已知道會在砲管內引爆，凸顯了烏克蘭軍方的腐敗問題。劣質裝備的回扣折損了武器效率和軍隊士氣。來自前線陣地的一些報告，提到缺乏訓練、新進招募的步兵，年齡從25歲到60歲，在毫無準備或缺乏戰鬥意志的情況下送去戰鬥。許多人躲在壕溝中，難以作戰。他們說：「散兵坑裡頭沒有無神論者。」恐懼和不確定感讓最不願信神的人，都要尋求信仰的慰藉。\n\n烏克蘭軍人依然堅忍不拔，但是貪腐和訓練不足帶給他們重大打擊。類似藝術家這樣的人，選擇逃跑或避戰是為了生存——不僅是在戰場上，也是為了在戰爭迫使他們陷入的道德衝突中生存。\n\n持續有影片流出，顯示警方和軍方強制徵召25歲到60歲之間的男子。畫面令人震撼——男子從車中被拉出來，然後被送上巴士接受徵召訓練。為什麼是25歲？因為他們希望把18歲到25歲的年輕一代留在戰後重建。然而不分年齡，許多人都選擇逃避義務。我觀看影片時，對這些逃兵並不感到同情——我感到的只是在這不容猶疑的時刻下的殘酷現實。\n\n四十年前，我在金門服役於台灣國軍砲兵，駐守在最前線。歲月消磨，我已不再有年輕時的精力。不過，如今64歲的我，如果台灣遭受攻擊，我會搭第一班飛機回去，用我所能貢獻的任何方式捍衛我的國家。我知道自己並不孤單——其他人在責任驅使下也會回去戰鬥。但是與此同時，也會有身強體健、符合戰鬥年齡的男人選擇逃走，在最需要他們的時刻拋棄自己的國家。他們比逃兵還要糟糕——他們在最重大的關頭背叛自己的家鄉。\n\n在2024年11月28日的清晨，有近兩百架無人機和導彈攻擊烏克蘭，讓一百萬人的電力中斷。突然的黑暗和寂靜再次籠罩這個國家！\n\n開車行經米古拉耶夫郊區，村莊裡滿目瘡痍，到處可見坍塌的牆壁、殘破的住家。我們在一處倒下的牆邊停下，兩個小女孩在瓦礫中嬉戲。我們給了她們可頌麵包，她們露出笑臉——明亮、天真、而美麗。這是這趟旅行最燦爛的時刻，會令我銘記多年的記憶——提醒我在破敗之中仍存有希望。\n\n就在這時候，彼得傳的訊息在我手機上亮起來：「如果你收到這個導彈攻擊地圖，代表你還活著。恭喜！」\n',
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
              body: "The city was almost unrecognizable when I arrived in Odesa on a chilly mid-November evening. Darkness engulfed the streets, broken only by the faint flicker of candles in apartment windows, the muted glow of passing headlights, and the relentless hum of diesel generators. The acrid smell of fuel clung to the air, and the noise was inescapable—like an unending cacophony of lawnmowers cutting through an eerie, oppressive silence.\n\nPower rationing here isn't an inconvenience—it's a fight for survival. After three years of relentless Russian attacks on Ukraine, including the energy grid, half of the country's power capacity has been destroyed. Like much of Ukraine, Odesa is left to endure nights of cold and darkness.\n\nMy fixer, Oleksiy, had booked me into the Atlantic Hotel. Once a lively garden resort by the seaport, it felt like a hollow shell of its former self. The lobby was dim and nearly empty. Some staff were already curled up on sofas with blankets, settling in for the night. It was more shelter than hotel now, a reminder of how deeply the war had eroded the simplest comforts of life.\n\nJust as I was about to board my flight from Vienna to Chisinau, my phone buzzed with a text from my editor friend Peter of the Kyiv’s Interfax News Service: \"Have a safe trip. Yeah, watch out for cruise missiles.\"\n\nThis is my ninth self-financed trip to Ukraine since the full-scale invasion began in February 2022, yet I still feel like a beginner. Every time, it's the same seat-of-the-pants approach. Nothing feels routine because this is war—situations change instantly, schedules are re-scheduled at the last minute, and uncertainty is the only constant.\n\nThe first time Oleksiy and I met for coffee, it was a brief but revealing moment. Without discussion, we instinctively chose seats facing the entrance—a habit I'd developed working in New York's Chinatown in 1992 and, for Oleksiy, a wartime necessity. Over our shoulders hung our mini EDC (Everyday Carry) bags, always prepared for the unexpected.\n\nOleksiy, a filmmaker turned fixer, is renowned for his meticulous caution. His worn but sturdy Nissan Pathfinder is a fortress on wheels, equipped with a drone spotter and stocked with survival essentials like first-aid kits and tactical tools. His secluded studio doubles as a bunker, with shelves of canned food, water, and sleeping bags neatly stacked alongside charged walkie-talkies to sustain five people for two weeks. It's more than a workspace—it's a lifeline.\n\nThe importance of readiness hit home in Kyiv when a sudden power outage plunged us into darkness inside a cramped, one-square-meter Soviet-era elevator. The scratched metal walls and the cold, stale air made the moment even more claustrophobic. It was a stark reminder of how quickly routine can turn dangerous. Here, caution isn't just a virtue—it's an essential survival skill.\n\nI felt out of place at the press conference, surrounded by journalists in the overly bright, sterile room. On December 1, 2024, President Zelensky held a press conference in Kyiv alongside António Costa, the newly appointed President of the European Council. President Costa emphasized the European Union’s unwavering support for Ukraine, while President Zelensky expressed gratitude for the EU’s continued assistance and reaffirmed Ukraine’s commitment to achieving a just and lasting peace.\n\nI stood in the press room, camera in hand, the hum of translators blending with the click of shutters but my mind was racing. What if President Trump were here instead of Zelensky and Costa? The air would be charged, unpredictable. The careful choreography of diplomacy would crumble under his presence—booming declarations, sharp demands, the promise to end the war in 24 hours. I could almost see retired General Keith Kellogg, the Special Envoy for Ukraine and Russia, beside Trump, reinforcing the message: no more unconditional aid—Ukraine must contribute in return.\n\nAnd the price? Ukraine’s rare earth minerals. Trump has suggested that U.S. military aid shouldn’t come freely, and discussions have emerged about tying support to economic benefits. Military aid for mining rights. Sanctions on Russia in exchange for a settlement. Would he pressure Zelensky to consider negotiations with Putin? Would he push NATO allies to pay more or risk losing U.S. support?\n\nBut this wasn’t just about Ukraine. China was watching. If Trump brokered a settlement that involved concessions, how would that shape Beijing’s calculations on Taiwan? Would China see it as an opening, or would Trump’s unpredictability serve as a deterrent?\n\nI glanced around—the press conference was stiff, controlled, every word measured. But war isn’t measured. War is urgent, brutal, and raw.\n\nWhen meeting a new battalion, we receive encrypted coordinates through secure apps like Signal, with WhatsApp as a fallback. After confirmation, we meet press officers, switch phones to airplane mode, and drive through scorched fields and abandoned checkpoints, ensuring no digital trace is left behind.\n\nFrom my experience, Signal and Threema are the gold standards for end-to-end encryption, trusted by the military and government officials. WhatsApp is a distant second, a fallback rather than a primary choice. Telegram? Likely compromised. Line? Fine for casual chats, but not for sensitive information. iMessage, Messenger, Instagram? Flashy and insecure. And WeChat? A direct line to Big Brother, monitoring everything. Here, secure communication is digital body armor—without it, you're exposed and vulnerable.\n\n（此處省略若干段落，繼續完整插入剩下的段落到結尾）\n\nDriving through the outskirts of Mykolaiv, the village's scars were everywhere—shattered walls and broken homes. We stopped near a crumbling wall where two little girls played amidst the rubble. When we gave them croissants, they smiled—bright, innocent, and beautiful. It was the most radiant moment of this trip, a memory I'll carry for years—a reminder of hope amid devastation.\n\nJust then, a message from Peter lit up my phone: \"If you received this missile attack map, it means you're still alive. Congratulations!\"",
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
