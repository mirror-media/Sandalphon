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
    title: '零線：張乾琦見證無人機時代的烏俄戰爭',
  },
  eng_text: {
    title:
      'Zero Line: At the edge of silence and survival on a shifting front.',
  },
}

let firstPage = data.find((data) => data.type === 'L')
firstPage = {
  order: firstPage.order,
  type: 'L',
  name: 'Landing Page',
  filename: firstPage.filename,
  text: {
    title: '零線\n張乾琦見證無人機時代的烏俄戰爭',
    foreword:
      '零線（zero line)，是前線的最前沿，對峙的武裝力量在此交鋒並展開直接戰鬥，這一詞尤其常用於烏克蘭與俄羅斯軍隊之間的邊界。「零線」在烏克蘭戰爭的語境中，代表著暴露、突襲與瞬間變化的高風險狀態。',
    credit: '張乾琦 Chien-Chi Chang',
    ig: 'https://www.instagram.com/chien_chi_chang',
    text: firstPage.text,
  },
  eng_text: {
    title:
      'Zero Line\nAt the edge of silence and survival on a shifting front.',
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
          title: `零線攻擊\n張乾琦見證無人機時代的烏俄戰爭`,
          pre: `從烏俄戰爭到以伊戰爭，我們正在見證無人機時代的來臨，大大改寫了現代戰爭的樣貌。以前我們拿來拍婚禮、拍旅遊風景的空拍機，只消經過一點改裝，搖身一變就成了戰爭前線的偵察甚至攻擊武器。\n\n紀實攝影家張乾琦，自從烏俄戰爭開戰以來，持續進行戰地紀實工作，第十次進入烏克蘭，他來到兩軍交戰最前沿的「零線」區域，並親身遭遇一架俄羅斯自殺式無人機追擊。\n\n儘管以伊戰爭吸引多數媒體目光，國際社會的「烏克蘭疲勞」日益明顯，張乾琦仍一去再去。他語重心長對台灣讀者們說：「我在烏克蘭所見證的，很可能預示我們眼前的未來。無人機、靜默、和等待——這些並非遙遠的回聲。它們是實在的警告。」（零線（zero line)是前線的最前沿，它並非實際存在的線，而是隨著戰事發展不斷變動的想像的作戰區域。）`,
          pairs: [
            {
              head: '',
              body: `凌晨3點47分，在赫爾松的聶伯河畔，我們的BMP-2步兵戰車猛然震動後，在零線之內停了下來。片刻之後，戰車上的30毫米自動砲猛烈開火，一道道火光短暫劃破黑暗如閃亮的曳光彈。隆隆的砲聲像敲擊的鋼鼓在我腦中迴響。車身因後座力而劇烈晃動。就在幾公尺外，我的新聞嚮導和我蹲伏在黑暗中——毫無掩蔽，每次的震動都令我們畏縮。這一切持續不到一分鐘。\n\n「快上車，現在！動作快！」一名士兵大吼，我們急忙啟動車子，以90公里的時速馳過漆黑一片、滿佈地雷的地形。引擎轟鳴。金屬鏗鏘作響。每一個顛簸猛烈撞擊我們的脊椎，車身響著暴力的鼓聲。我們坐在近300加侖柴油和成箱尚未發射的30毫米砲彈上頭。脆弱感令人窒息。只消一枚火箭，一切都將陷入火海。\n\n幾個小時後，回到基地後砲手才告訴我，我們遭到了一架俄羅斯自殺式無人機追擊。如果我們被擊中，無人機上的炸藥會炸穿戰車。這樣的撞擊會使柴油猛烈晃動。如果我們當時被擊中，這篇報導就到此為止了。砲手只是咧嘴一笑，彷彿不是什麼了不得的大事——對命運聳肩接受多過於恐懼。當時我並未聽到無人機的聲音。我只有感覺到當時的速度、急迫感、以及受過求生訓練士兵的沈默不語。隆隆砲聲仍在我耳中迴盪。我在得知可能發生的狀況後，不禁脊背發涼。\n\n2025 年 3 月，我隨軍採訪烏克蘭第 40 旅第一營多次進入零線的任務，包括兩次在聶伯河的部署行動。每次任務，由四名身著野戰偽裝服、步槍斜掛的海軍陸戰隊員，帶著可維持一個月的補給品登上橡皮艇。這條河不僅分隔了領土，也分隔了兩個世界——兩岸都佈滿死亡。\n\n然而，儘管前線動盪依舊，全球的焦點卻已開始轉移。\n\n近幾個月來，國際的關注已轉向他處。以色列和伊朗的衝突升級——以彼此互射飛彈和報復性的空襲為標誌——成了新聞頭條和全球政治焦點。這場危機可能引燃更廣泛的區域戰爭並牽扯全球強權捲入，獨佔了國際外交的關注心力。這樣的轉變更加深了國際間所謂的「烏克蘭疲乏」。儘管烏克蘭戰事的慘烈程度與日俱增，資源、媒體報導、和政治意願卻已被分散。自 2025 年年初以來，俄羅斯逐步鞏固它的陣地，在多條戰線升高無人機作戰和砲擊，包括對民用目標的攻擊。這些攻擊在造成衝擊之前，往往悄無聲息，其破壞力巨大，並嚴重打擊士氣。媒體的職責依然不變：要留下見證並提醒世界，這場戰爭遠未結束。\n\n於是，零線持續在演變。\n\n「零線」並非單一的地點，而是由部隊和地形所決定的變動概念。對步兵而言，它或許就在林木線之外的壕溝。對砲兵而言，它在有效射程範圍的邊緣。對特種部隊來說，它深入敵境之內。\n\n在札波羅熱，它的樣貌和在頓巴斯大不相同。沿著赫爾松的聶伯河，零線是河岸和島嶼——處處濘泥、滿佈地雷、且動作頻頻——兩邊都在砲擊射程範圍內。零線沒有固定的地圖。它和戰爭本身一樣都會移動——還有伴隨而來的危險：猝不及防、毫不留情、而且往往難以察覺。\n\n跨越它，就進入了稍有猶豫便會致命的境地。沒有事先的預警，也沒有第二次機會。唯有黑暗、命令、以及你隨車子搖晃前行的喘息聲。\n\n這類行動只在夜晚進行。不開車頭燈、也沒有手電筒——只有拖著橡皮艇的悍馬車的微弱車尾燈。悍馬車配備了無人機干擾器，由一名戴著夜視鏡的士兵駕駛，快速行過險惡的地形。在這種時刻，感覺一切都已暴露在外：不管是士兵、機器、或地貌本身。你不知威脅來自何處。你感覺它就在蘆葦叢之外的某處移動。即使在一片漆黑之中，仍可清楚感受到危機。危險從未曾真正消散。在白天，同樣的士兵們持續不懈地接受訓練。我看著他們演練渡河、衝刺操練、和裝設詭雷。他們發射火箭彈、迫擊砲，訓練應對混亂情況。他們在殘破的建築物裡研究數位地圖和座標——為將在黑夜裡展開的任務做準備。\n\n在任務與任務之間的空檔，他們會跟家人通話、查看Telegram，在臨時的基地裡洗衣服。不過大半時候他們在等待。等待著下一個任務。等待座標。聽取命令。戰爭的節奏並非持續的戰火。它是一長串的寂靜，由突如其來的行動打破。它是等待、觀望、和準備。在長長的停頓中，故事浮現出來——有些透過述說，有些則在沈默中傳遞。\n\n卡塔布是42歲的連長，他分享了2022年赫爾松反擊戰的故事。和報導裡的許多人一樣，他只能使用呼叫代號。他奉命帶著100名士兵守護一個戰略據點，他和他的部隊經歷一波又一波的殘酷攻擊——頭頂砲彈呼嘯而過、步槍和機關槍火力粉碎了林木線，戰壕裡煙霧瀰漫。援軍晚了兩個小時抵達。在這之前，一則無線電訊息警告說：「兩輛俄軍坦克正朝你們而去。」\n\n可塔布有高大的身材——身高190公分、體重約90公斤——和一顆慷慨的心。在煙硝瀰漫中，他的制服浸漫汗水和塵土，他把自己剩下的三個彈匣分了兩個給他的同袍。空氣充滿帶有血腥和火藥的金屬臭味。在這期間，他的大腿中彈。他已準備好一枚手榴彈，準備解決任何突破防線的俄羅斯人。但救兵趕到。他一瘸一跛走了出來，踩過戰友們殘缺的遺體，及混著血和灰燼的黏膩泥地。100人之中，只有9人生還。話到一半，他的聲音已經哽咽。眼眶泛著淚。\n\n他走到外頭抽菸。隨之而來的沈默中，打火機的點火聲依稀可聞。\n\n代號「布希多」是武器專家，曾在波蘭接受過法國和愛沙尼亞教官的訓練，他告訴我：「兩個才算一個，一個等於沒有。」他出任務的時候，會攜帶至少八個彈匣、四個止血帶、一部無線電、個人急救包、手榴彈、水、無人機干擾器——還有三支手電筒。他的裝備沈重、磨損、但目的明確。被問到他偏愛的武器時，他聳了聳肩。「拿在你手上的那個，就是最好的武器。」\n\n每一次的部署展開之前，我們在藏身之處的漆黑之中等待。手機的微光映照在疲憊的臉龐上——外面的發電機嗡嗡作響，混雜著遠方傳來發射和來襲火砲的轟隆聲。屋內被寂靜籠罩——輕淺的呼吸聲、偶爾的咳嗽聲、野戰偽裝服摩擦的沙沙聲、以及在陰影之間穿梭的流浪貓的輕聲喵嗚。無線電靜電聲夾雜著指揮中心傳來的最新訊息。\n\n被遺棄的感受真實可觸。川普提出了停火提議卻又陸續撤回，軍隊唯一能信任的，只剩下他們的指揮官。對他們而言，政治只是噪音。美國華府搖擺不定的態度——不管是川普善變的承諾或是歐洲謹慎的外交——感覺太遙遠。唯一要緊的是指揮官的命令。\n\n在外頭，一部探路者（Pathfinder）休旅車已準備就緒。一台無人機掃描儀和對講機放在儀表板上。但這些裝備終究有其侷限。很多無人機飛行時使用的是無法偵測的頻率，而光纖自殺式無人機沒有任何警訊。無人作戰——來自陸、海、空的無人機——已經重新定義這場戰爭。它們執行偵查、打擊、和殺戮。車輛架上了無人機干擾器。士兵們改裝電池組，用3D印表機打造炸彈外殼，並改造商用的裝備。\n\n在2024年，烏克蘭總共製造了約200萬架戰鬥無人機，成為全世界最大的無人機生產國。隨著戰場需求增加國內生產，這個數字在2025年預計會提高到450萬架。烏克蘭軍方在當地時間6月1日，發動一場精心策劃了18個月的攻擊行動，行動代號翻譯過來為「蜘蛛網」，透過運達俄羅斯領土的秘密貨櫃，從貨櫃裡成功使用117架無人機攻擊俄羅斯五處空軍基地，至少13架俄國戰機遭破壞，重創俄軍。\n\n在這個戰場上，敵人可能是一個信號、一個影子、或頭頂上一個咻咻的聲響。這場戰爭不再只是扛著步槍的士兵，那些從天上監視的機器也成了參戰者。\n\n每次任務之前，士兵們要先測試無人機干擾器，為BMP-2戰車準備30毫米彈帶，給AZP S-60防空炮裝填57毫米砲彈。其他地方，簡易組成的空中火力——燃燒彈、熱能彈、高爆彈——也準備就緒。電池重新組裝以延長續航距離。無人機作戰不是輔助的戰術。它就是戰爭本身。\n\n不過在高科技的無人機戰爭裡，老舊的蘇聯時期武器在戰場中依然很管用。烏克蘭把所有能拿到的東西都拿來利用——重新整修、改造、然後擊發。 \n\nAZP S-60 是1950年代由蘇聯製造，可由公路運輸的拖式防空炮，曾經在諸多華沙公約國家被廣泛使用。如今在赫爾松，它被重新改造——架在卡車上朝聶伯河對岸開火。原本是為防空而設計，如今用在打擊地面目標。戰爭會改變，人們也會隨之改變。\n\n在一次任務中，兩門AZP S-60防空炮深入零線之內，鎖定目標、已準備朝河的對岸發射。緊接著命令下達：行動取消！行動取消！我們匆忙爬上車。遠方火光四迸。幾秒鐘之後，我們聽到火箭彈從頭頂呼嘯而過，並在更遠處爆炸。我們全速撤離。撤離的速度與混亂，與佈署時的精密和謹慎形成強烈對比。\n\n這提醒了我們：零線順著它的律動變化。計劃在轉瞬間會有變動。即使是最精心佈設的武器，也可能隨砲火來襲而消聲匿跡。接著，同樣在頃刻間，下一個任務又開始了。\n\n往零線前進的路上，我們行經一路的廢墟：纏結的灌溉管線、傾倒的住家、遠方飄著濃煙。我以為是火箭彈。結果是一部燃燒中的卡車。不過我們明白它的信號。地平線上的閃光意味著有火箭來襲。光速總是快於聲音。短短幾秒內，一架嗡嗡打轉的除草機——FPV自殺無人機——就可從天而降，撞擊地面，隨後是如鋼鐵在熔爐內炸裂的轟然巨響，迴盪在開闊的原野。但我們持續行進。速度加快，身體壓低。\n\n有一次，我看到一艘被拖上岸的橡皮艇裡頭，士兵們正在查看林木線，同時間其他士兵則手持步槍進行掩護。他們都知道每次渡河都有喪命的風險。回到藏身處之後，在僅有微弱紅色頭燈的黑暗中，他們抽菸抽個不停，然後喝水、把水倒在頭頂上。這是一種儀式。一種紓解的動作。\n\n零線並不只是一個新聞標題。它是我的所見所聞，它是我生活過的所在。它是介於光明和黑暗、分隔已許的承諾和未履行的援助之間的界線。烏克蘭不是為了某種象徵意義而戰。它是為生存而戰。它是軍靴踩在毀棄田野的嘎茲聲。它是漆黑藏身處的手機螢幕亮光。它是火箭發射前的寂靜。它的記憶被現實磨得傷痕累累。\n\n自俄羅斯從2022年開始全面入侵烏克蘭以來，我已經十度自費走訪戰事前線。我在烏克蘭所見證的，很可能預示我們眼前的未來。赫爾松和台北的距離，不管在戰略上、或在實存上，都比想像還要近。\n\n2025年6月29日，俄羅斯發動了自全面入侵以來最大規模的無人機與導彈聯合攻勢，一天之內在烏克蘭全境共計出動477架無人機、發射60枚導彈。台灣社會多少也有「烏克蘭疲勞」，似乎少有人討論和關注這則新聞，人們對戰爭消息有種遙遠、不及人身的感受。身為深入過零線的見證者，我曾逼近生死界線而折返，當天早上聽到這個消息時，我不禁心頭一沉，所有的記憶瞬間湧現——無人機的嗡鳴、地面的震動、以及難以忍受的等待。\n\n就怕同樣的事發生在台灣，從烏克蘭回到我旅居的奧地利之後，我送出了罷免台灣立法委員的連署書。這也是我張乾琦身為公民的責任，和義務。`,
            },
          ],
        },
        caption: '攝影：Olexy Kononenko',
        credit: {
          pairs: [
            '撰文：張乾琦',
            '攝影：張乾琦 / 馬格蘭通訊社',
            '網頁製作/策展：',
            '李文瀚、胡乃云、曾立宇、李又如、簡信昌',
            '翻譯：謝樹寬',
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
          title:
            'ZERO LINE\nAt the edge of silence and survival on a shifting front.',
          // eslint-disable-next-line prettier/prettier
          pairs: [{ head: '', body: `At 3:47 a.m. near the Dnipro River in Kherson, our BMP-2 jolted to a stop inside the zero line. Moments later, the thunder of 30mm autocannon fire erupted in rapid succession, each muzzle flash briefly illuminating the darkness like a lightning tracer. The blasts rang like a steel drum in my skull. The recoil rocked the vehicle. Just meters away, my fixer and I crouched in the dark—exposed, flinching with each concussion. It lasted less than a minute.\n\n\"Back in, now—move!\" a soldier barked, and we lurched into motion, speeding away at 90 kilometers per hour through pitch-black, mined terrain. The engine roared. Metal clanged. Each jolt slammed through our spines, the hull a drumbeat of violence. We were sitting atop nearly 300 gallons of diesel and crates of unfired 30mm cannon rounds. The sense of vulnerability was suffocating. One rocket and everything would have gone up in flames.\n\nHours later, back at the base, the gunner told me we had been pursued by a Russian suicide drone. If we had been hit, the drone's explosive payload would have ruptured the tank. Such a strike would have jolted the diesel violently. Had we been hit, this story would have ended there. The gunner just grinned as if it were nothing unusual—a shrug toward fate more than fear. I didn't hear the drone. I only felt the speed, the urgency, the silence of men trained to survive. The blast of the cannon still reverberated in my ears. And after I was told what could have happened, a cold chill shot through my spine.\n\nIn March 2025, I embedded with the first battalion of Ukraine's 40th Brigade for multiple missions into the zero line, including two deployments to the Dnipro River. In each, four marines in ghillie suits, rifles slung, boarded a rubber boat with supplies to last a month. The river separates not just territories butworlds, both sides lined with death.But while the frontline remained volatile, global focus began to shift. In recent months, international attention has drifted elsewhere. The escalating conflict between Israel and Iran—marked by missile exchanges and retaliatory airstrikes—has drawn headlines and global political focus. The crisis threatens to ignite a broader regional war and drag in global powers, while monopolizing diplomatic bandwidth. This shift has deepened a sense of \"Ukraine fatigue\" in the international arena. Resources, media coverage, and political will have been diverted, even as the war in Ukraine has grown more deadly. Since early 2025, Russia has steadily reinforced its positions, escalating drone warfare and artillery strikes across multiple fronts, including civilian targets. These attacks are often silent until they have an impact, devastating in effect and corrosive to morale. The obligation of the press remains: to bear witness and to remind the world that this war is far from over.\n\nAnd so, the zero line continues to evolve.\n\nThe zero line is not a single place—it' a shifting concept shaped by unit and terrain. For infantry, it might be the trench just beyond the tree line. For artillery, it's the edge of effective range. For special forces, it's deep inside enemy territory.\n\nIn Zaporizhzhia, it looks different than in Donbas. Along the Dnipro in Kherson, it's the riverbanks and islands—thick with mud, mines, and motion—where both sides operate within artillery range. There is no fixed map for the zero line. It moves like the war itself—and with it, the danger: sudden, relentless, and often unseen.\n\nTo cross it is to enter a space where hesitation can kill. There's no warning, no second chances. Just darkness, orders, and the sound of your breath as the vehicle lurches forward.\n\nOperations like these only happen at night. No headlights, no flashlights—only dim tail lights on the Humvee pulling the rubber boat. The Humvee, equipped with drone jammers and driven by a soldier using night vision goggles, moves fast over treacherous terrain. These are moments when everything feels exposed: the soldiers, the machines, the terrain itself. You don't see the threat. You feel it moving somewhere beyond the reeds. Even in total darkness, the risk is palpable. The danger never fades.\n\nDuring the day, the same soldiers train relentlessly. I watched them hammer river crossings, sprint through drills, and plant booby traps. They fired rocket-propelled grenades, launched mortars, and drilled for chaos. They studied digital maps and coordinates inside shattered buildings—preparing for missions that would unfold in darkness.\n\nBetween missions, they called family, checked Telegram, and washed clothes in makeshift bases. But mostly, they waited. Waited for the next mission. Waited for coordinates. Listened to orders. The rhythm of war is not constant fire. It's long stretches of silence broken by sudden movement. It's waiting, watching, and preparing. And in those long pauses, stories surfaced—some spoken, others carried in silence. \n\nKhatab, a 42-year-old company commander, shared his story from the 2022 Kherson counter-offensive. His call sign, like many here, is all that can be used. Ordered to hold a strategic position with 100 men, he and his unit endured waves of brutal onslaught—shells whistling overhead, rifle and machine gun fire shredding the tree line, smoke choking the trenches.Reinforcements arrived two hours late. Before that, a radio message warned, \"Two Russian tanks are moving toward you.\" \n\nKhatab is a big man—190 centimeters tall, about 90 kilograms—with a big heart. Shrouded in smoke, his uniform soaked with sweat and dirt, he gave away two of his three remaining magazines to fellow soldiers. The air was thick with the metallic stench of blood and cordite. At one point, he was shot in the leg. He readied a grenade to kill any Russians who breached their lines. But rescue came. As he limped out, he stepped over the mangled bodies of comrades, the mud sticky with blood and ash. Of 100 men, only nine survived. Mid-sentence, his voice stuttered. His eyes welled.\n\nHe stepped outside for a smoke. The lighter's flick was barely audible over the silence that followed.\n\nBushido, a call sign, a weapon specialist trained by French and Estonian instructors in Poland, told me: \"Two is one. One is none.\" When he's on a mission, he carries at least eight magazines, four tourniquets, a radio, IFAKs, grenades, water, drone jammers, and three flashlights. His kit is heavy, worn, and purposeful. When asked about preferred weapons, he shrugged. \"The one in your hand is the best.\" \n\nIn the safe warehouse before each deployment, we waited in total darkness. Phones cast faint glows on tired faces—the hum of generators outside mixed with the distant thud of incoming and outgoing artillery. Inside, stillness reigned—shallow breaths, occasional coughs, the rustle of ghillie suits, the mewl of stray cats threading through shadows. Radio static crackled with updates from the command center.\n\nThe sense of abandonment is real. Trump floated ceasefire plans but slowly backtracked, leaving troops with nothing but commanders they trust. To them, politics is noise. Washington's mood swings—whether Trump's erratic promises or Europe's cautious diplomacy—feel distant. The only voice that matters is their commander's.\n\nOutside, a Pathfinder sat ready. A drone scanner and walkie- talkie lay on the dash. But even these have limits. Many drones fly on undetectable frequencies, and fiber-optic suicide drones offer no warning. Unmanned warfare—drones in the air, on land, and at sea—has redefined this war. They scout, strike, and kill. Drone jammers are mounted on vehicles. Soldiers rebuild battery packs, craft bomb casings with 3D printers, and repurpose commercial gear. \n\nUkraine produced approximately 2 million combat drones in 2024—making it one of the world’s most prolific drone manufacturers. That number is expected to rise to 4.5 million in 2025 as the country ramps up domestic production to meet battlefield demand. On June 1, 2025, the Ukrainian military launched a meticulously planned operation 18 months in the making. Codenamed “Spider Web,” the strike used concealed shipping containers to deliver 117 drones deep into Russian territory, targeting five airbases. At least 13 Russian warplanes were damaged, dealing a significant blow to Russia’s air power.\n\nOn this battlefield, the enemy may be a signal, a shadow, a whirring sound above. The war is no longer fought solely by those holding rifles, but also by machines watching from the sky.\n\nBefore each mission, soldiers tested drone jammers, prepped 30mm belts for the BMP-2, and readied 57mm shells for the AZP S-60 anti-aircraft gun. Elsewhere, improvised aerial munitions—fire- starting, thermal, high-explosive—lay ready. Batteries were repacked for an extended range. Drone warfare is not a sideline. It is the war.\n\nYet despite the high-tech drone warfare, older Soviet-era weapons remain crucial on the battlefield. Ukraine makes use of everything it can get—repaired, repurposed, and fired.\n\nThe AZP S-60 is a Soviet towed, road-transportable, anti- aircraft gun from the 1950s, once widely used across Warsaw Pact countries. In Kherson today, it has been repurposed—mounted on trucks to fire across the Dnipro River. Designed to defend the skies, it now strikes ground targets. War adapts. So do the people.\n\nOn one mission, two AZP S-60s were set deep inside the zero line, locked in and ready to strike across the river. Then came the command: Abort! Abort! We scrambled back to the vehicle. Flashes burst across the distance. Seconds later, we heard rockets whoosh overhead and explode farther away. We tore away at full speed. The escape was as fast and chaotic as the setup had been meticulous.\n\nA reminder: the zero line bends to its rhythm. Plans shift in seconds. Even the most carefully positioned weapons can be silenced by an incoming barrage. And then, just as quickly, another mission begins.\n\nOn the way to the zero line, we passed ruins: tangled irrigation pipes, collapsed homes, and smoke on the horizon. I thought it was a rocket. It was just a burning truck. But we knew the signs. A flash on the horizon means an incoming rocket. Light travels faster than sound. In a few seconds, a flying, buzzing, whirling lawnmower—an FPV drone—could smash into the field, followed by a bang-like sound as steel tears apart inside a furnace, echoing across the open terrain. But we kept moving. Faster. Lower.\n\nOnce, inside a rubber boat towed ashore, I saw soldiers scan the tree line while others covered them with rifles. They knew every crossing could be deadly. After returning to the safe warehouse, in total darkness lit only by dim red headlamps, they chain- smoked and drank water, pouring it over their heads. A ritual. A release.\n\nZero line is not just a title. It's what I saw, what I lived. It is the line between light and dark, between promises made and help withheld. Ukraine isn't fighting for symbolism. It's fighting to exist. It's the crunch of boots through ruined fields. It's the glow of a phone screen in a blackout safe house. It's the silence that precedes the launch of the rocket. Its memory is scraped raw by reality.\n\nAnd memory alone is not enough. It must be brought to awareness, then to action. The next front is not just physical. It's personal. It begins with what we choose to see, remember, and resist.\n\nSince Russia’s full-scale invasion of Ukraine in 2022, I’ve made ten self-funded trips to the frontlines. What I witnessed there may well foreshadow Taiwan’s future. Kherson and Taipei—strategically and existentially—are closer than they appear.\n\n That sense sharpened on July 4, 2025, Russia launched its largest drone-and-missile assault since the war began: 539 drones and 11 missiles struck across Ukraine in a single day. The attack came just hours after a phone call between U.S. President Donald Trump and Russian President Vladimir Putin. While no direct link is confirmed, several outlets noted the timing. In Taiwan, the news barely registered. War fatigue has set in; few seemed to notice, orcare. But as someone who has stood on the zero line—who hasreturned from the edge of life and death—that morning hit hard.The memories rushed back: the hum of drones, the tremblingground, the unbearable waiting.\n\nFearing Taiwan could meet the same fate, I returned to Austriaand filed a petition to recall our legislators. This, too, isthe burden—and duty—of being citizen Chang.` }],
        },
        caption: 'Photo by Olexy Kononenko',
        credit: {
          pairs: [
            `Article by: Chien-Chi Chang`,
            `Photography by: Chien-Chi Chang`,
            'Curation, design and development by:',
            'Wen-Han Lee, Nai-Yun Hu, Lee-Yu Tseng, Yu-Ju Lee, Hsin-Chan Chien',
            'Translator: Hsieh Shu-Kuan',
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

data.forEach(({ text, eng_text, type, filename, name }, index) => {
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
