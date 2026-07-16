/**
 * Country destinations — each roof / cloth / writing / page copy.
 * Side buttons cycle neighbors along COUNTRY_ORDER.
 */
export const COUNTRIES = {
  vietnam: {
    id: "vietnam",
    name: "Vietnam",
    roof: "./roof-vietnam.png",
    buttonIcon: "./selector-vietnam.png",
    writing: "vertical",
    gridW: 62,
    eyebrowNative: "Duyên",
    eyebrowRoman: "",
    eyebrow: "A chance encounter",
    title: "Vietnam — moss on temple roofs, rivers full of lantern light",
    aside:
      "Drift through Hanoi alleys, Hue courtyards, and eaves that curve like boats toward the water.",
    cloth: [
      "Đi một ngày đàng học một sàng khôn — nhưng chỉ khi bạn chịu mở mắt trước những điều nhỏ bé trên đường",
      "Trăm lời nghe không bằng một lần thấy — và một lần thấy không bằng một lần tự mình đi qua",
      "Có công mài sắt có ngày nên kim — thời gian không phản bội kẻ nào biết kiên nhẫn với chính mình",
      "Đường đi khó không khó vì ngăn sông cách núi — khó vì lòng người nửa muốn đến nửa muốn về",
      "Người ta là hoa đất — đừng quên rễ khi bị mê bởi hương của chính mình",
      "Một cây làm chẳng nên non — sự cô độc có thể sắc bén nhưng rừng mới tạo được bóng mát",
      "Ở hiền gặp lành — không phải vì trời thiên vị kẻ tốt mà vì lòng lành biết nhận ra lành",
      "Đói cho sạch rách cho thơm — danh dự là thứ duy nhất không mua được bằng no đủ giả tạo",
      "Uống nước nhớ nguồn — người quên điểm xuất phát sẽ lạc cả khi đã tới nơi",
      "Lời nói không điền được vào bụng — vậy hãy để hành động nuôi sống điều bạn tin",
      "Tốt gỗ hơn tốt nước sơn — bản chất bền hơn vẻ ngoài vốn chỉ cần một trận mưa để lộ ra",
      "Gần mực thì đen gần đèn thì rạng — chọn nơi đứng tức là chọn phần ánh sáng của mình",
      "Có chí thì nên — ý chí không mở đường mới mà mở mắt để thấy đường vốn đã có",
      "Không thầy đố mày làm nên — sự khiêm tốn trước người đi trước là cửa của sự tự do",
      "Học ăn học nói học gói học mở — sống là học cách cầm và học cách buông",
      "Đường dài mới biết ngựa hay — đừng vội kết luận về ai đó ở khoảng cách của một buổi sáng",
      "Thuận buồm xuôi gió — cũng đừng quên rằng thuận gió không phải là bài kiểm duy nhất của người lái",
      "Đất lành chim đậu — nơi nào tâm được phép hạ xuống bình yên nơi ấy thành nhà"
    ].join("　")
  },
  china: {
    id: "china",
    name: "China",
    roof: "./roof-china.png",
    buttonIcon: "./selector-china.png",
    writing: "vertical",
    eyebrowNative: "缘分",
    eyebrowRoman: "Yuánfèn",
    eyebrow: "A destined meeting",
    title: "China — golden courtyards, silk-road myths, roofs that refuse gravity",
    aside:
      "Wander forbidden gardens, painted eaves, and stories older than the maps that tried to hold them.",
    cloth: [
      "读万卷书不如行万里路——而真正的智者是先把书读进心里再把路走成自己的答案",
      "山高水长路在脚下——你会发现困住你的从来不是山与水而是你停下来的借口",
      "海到无边天作岸——边界往往是想象力的终点而不是世界的终点",
      "行到水穷处坐看云起时——尽头并非绝境只是另一种开始在安静里现身",
      "千里之行始于足下——最难的一步不是最后一步而是你终于愿意迈出的第一步",
      "世界是一本书不旅行的人只读了一页——而只走不思索的人翻了很多页却什么也没读懂",
      "船停在港湾里最安全却不是造船的目的——舒适是暂停不是归宿",
      "人生要么大胆冒险要么在安全和遗憾之间反复权衡最终两头落空",
      "真正的发现之旅不在于寻找新风景而在于拥有新眼睛——同一片天空换了心境便是新世界",
      "每年去一个从未去过的地方——不是为了收集地名而是为了让熟悉的自己感到陌生",
      "离开海岸才看得见新的海洋——恐惧常打扮成谨慎让你把岸边误认作远方",
      "旅行让人谦逊因为看见自己有多么渺小——渺小不是羞辱而是回到真实比例的开始",
      "最好的时刻是踏入未知之地——因为那时你暂不被旧故事定义",
      "旅行先夺去你的言语再把你变成说书人——沉默是理解的房间话语是以后才打开的门",
      "与其抵达不如好好赶路——抵达是地图上的点赶路才是生命本身",
      "心之所向素履以往——方向对了脚步慢一点也仍然在前进",
      "长风破浪会有时直挂云帆济沧海——时运会来但帆必须事先挂好",
      "愿你的脚步比目光走得更远——看见是开始抵达是责任"
    ].join("　")
  },
  japan: {
    id: "japan",
    name: "Japan",
    roof: "./roof-japan.png",
    buttonIcon: "./selector-japan.png",
    writing: "vertical",
    eyebrowNative: "一期一会",
    eyebrowRoman: "Ichigo ichie",
    eyebrow: "One time, one meeting",
    title: "Japan — red eaves in the mist, stone paths, and patience as architecture",
    aside:
      "Pass under vermilion gates, cedar shade, and rooms where silence is part of the design.",
    cloth: [
      "旅は到着ではなく道そのものだ——到着を急ぐ者は道が与える智慧を受け取る余裕を失う",
      "遠くへ行けば自分に出会う——だがその自分は日常の仮面を脱いだあとにだけ姿を見せる",
      "迷う者すべてが失われるわけではない——迷いとはまだ選ぶ自由が残っている証拠でもある",
      "人生を逃れるためではなく人生に逃げられないために旅をする——逃げ場のない場所で本気の生が始まる",
      "港にいれば船は安全だがそれでは船を造った意味がない——安全は条件であり目的ではない",
      "世界は一冊の本だ旅をせぬ者はただ一頁を読むのみ——しかし読んで思索せぬ者は頁をめくっても空白のまま",
      "冒険はそれ自体が価値である——結果が約束されなくても勇気はすでに変化を起こしている",
      "旅をすることは生きることだ——移動ではなく注意を移すことこそが旅の本質だ",
      "仕事は懐を満たし冒険は魂を満たす——片方だけでは人間は飢える",
      "行くところへは心を込めて行け——半身で歩く場所はどこまで行っても他人の土地のままだ",
      "真の発見の旅は新しい景色を求めることではなく新しい目を持つことだ——目が変われば古路も初見になる",
      "人生は大胆な冒険でなければ何ものでもない——恐れて動かぬ時間は風景でも物語でもない",
      "旅は人を謙虚にする世界の広さを知るから——謙虚は自分を小さくするのでなく正しい大きさに戻す",
      "岸を見失う勇気なくして新しい海は見つからない——なじみの岸辺はしばしば檻の形をしている",
      "上手に旅をすることが到着することに勝る——美しい到着は美しい途中からしか生まれない",
      "年に一度は行ったことのない場所へ行け——未知は才能を鍛えるのではなく感受性を蘇らせる",
      "未知の地へ発つ瞬間こそ人生で最も喜ばしい——その瞬間あなたは可能性そのものになる",
      "旅は言葉を奪いそして語り部にする——まず沈黙に耐えられる者だけが本当の物語を持てる"
    ].join("　")
  },
  // 1 — Kazakhstan (yurt)
  kazakhstan: {
    id: "kazakhstan",
    name: "Kazakhstan",
    roof: "./roof-kazakhstan.png",
    buttonIcon: "./selector-kazakhstan.png",
    writing: "horizontal",
    gridW: 42,
    font: '"JetBrains Mono", "PT Serif", "Georgia", "Times New Roman", serif',
    eyebrowNative: "Жол",
    eyebrowRoman: "Jol",
    eyebrow: "The open road",
    title: "Kazakhstan — steppe wind, shanyrak light, and a home that moves with you",
    aside:
      "Cross grass without edge, warm felt interiors, and patterns that outrun every border.",
    cloth: [
      "Жол алыс болса да жүрек жақын — қашықтық тек денені сынайды жүректі емес",
      "Көк аспанның астында бәрі мүмкін — шекара көбінесе картада ғана бар ал ойда емес",
      "Жел жырлайды далада — тыңдай білген адамға жел ескерту емес ән болады",
      "Шаңырақ астында жылу бар — үй деген қабырға емес бір-бірін сақтайтын шеңбер",
      "Ұзақ жол — ұлы тәжірибе — қысқа жол ыңғайлы бірақ терең өзгеріс әкелмейді",
      "Дала кең — ой да кең — кеңістік көрген адам кішкентай қорқынышқа сыймайды",
      "Көшпенді жан ешқашан тоқтамайды — тоқтайтын жер болса ол демалыс тоқтау емес",
      "Жұлдыздар жол көрсетеді — қараңғыда жүргенде ғана жарықтың құнын түсінесің",
      "Қонақжайлық — ең үлкен байлық — беру арқылы кедейленбейсің қайта толғасың",
      "Әр таң жаңа бастама — кешегі қате бүгінгі таңды ұрлай алмайды егер сен рұқсат бермесең",
      "Аттың тұяғы жерді оятады — әрекетсіз ниет жерді де жанды да оятпайды",
      "Шай ыстық болсын жүрек те — жылы сөз суық сапарды қысқартады",
      "Тау алыс көрінсе де жетерсің — алыстық көздің алдауы ал адым шынайы өлшем",
      "Үйің қайда болса да көк аспан бір — жер өзгерсе де шынайылық сол күйі қалады",
      "Жібектей жел ертеңді әкеледі — ертеңді күту емес оған орын қалдыру керек",
      "Сапар — жанның айнасы — жол сені көрсетпейді сен жолда өзіңді көресің",
      "Қадам сайын жаңа ән — бір әнге жабысып қалмасаң ғана өмір әуенге айналады",
      "Көктемгі жел еркіндік әкеледі — еркіндік сыртқы ашық жер емес ішкі рұқсат"
    ].join("　")
  },
  // 2 — Russia (terem)
  russia: {
    id: "russia",
    name: "Russia",
    roof: "./roof-russia.png",
    buttonIcon: "./selector-russia.png",
    writing: "horizontal",
    gridW: 40,
    font: '"JetBrains Mono", "PT Serif", "Georgia", "Times New Roman", serif',
    eyebrowNative: "Судьба",
    eyebrowRoman: "Sud'ba",
    eyebrow: "A fated meeting",
    title: "Russia — painted terems, lace gables, and snow that keeps the stories",
    aside:
      "Step under carved eaves, bright courtyards, and rooms that still smell like pine and tea.",
    cloth: [
      "Дорога длинная — душа открытая: закрытому сердцу даже короткий путь кажется чужой землёй",
      "Лес шумит старыми сказками — кто умеет слушать тот слышит не шум а предупреждение и утешение сразу",
      "Под резным окном живёт свет — красота без тепла это узор на холоде",
      "Зима учит беречь тепло — не из страха перед морозом а из уважения к тому что трудно добыть",
      "Терем помнит песни — стены хранят не камень а то что в них однажды звучало искренне",
      "Шаг за шагом — к синему небу: небо не ближе для спешащих оно ближе для внимательных",
      "Чай горячий — путь короче: гостеприимство сокращает расстояние быстрее лошадей",
      "Снег пишет белые письма — тишина тоже речь если ты научился читать пустоту",
      "Узоры на дереве — как молитвы: ремесло становится священным когда в него вложена душа",
      "Далеко ли близко — иди: сомнение измеряет страх а шаг измеряет жизнь",
      "Ветер несёт колокольный звон — зов слышен только тому кто ещё не решил что всё уже знает",
      "Сказка начинается с порога — самое трудное не чудо в конце а решение переступить",
      "Река знает все дороги — потому что никогда не спорит с берегом она просто продолжает быть рекой",
      "В тишине слышнее сердце — шум мира не враг тишины он всего лишь проверка",
      "Дом там где ждут — стены можно построить везде а ожидание строит смысл",
      "Ночь коротка у костра — общность превращает тьму из угрозы в комнату для историй",
      "Золотые купола в тумане — вера видит форму даже когда ясность ещё не пришла",
      "Путешествие меняет взгляд — и только изменённым взглядом стоит возвращаться домой"
    ].join("　")
  },
  // 3 — France (mansard)
  france: {
    id: "france",
    name: "France",
    roof: "./roof-france.png",
    buttonIcon: "./selector-france.png",
    writing: "horizontal",
    gridW: 42,
    font: '"JetBrains Mono", "PT Serif", "Georgia", "Times New Roman", serif',
    eyebrowNative: "Hasard",
    eyebrowRoman: "",
    eyebrow: "A fortunate chance",
    title: "France — slate mansards, iron cresting, and courtyards that teach lingering",
    aside:
      "Wander zinc roofs, café shadows, and streets where beauty is treated as a daily habit.",
    cloth: [
      "Le voyage forme la jeunesse — mais c'est le retour qui révèle ce que le chemin a vraiment changé",
      "Partir c'est mourir un peu — et renaître un peu aussi dès que l'inconnu cesse d'être étranger",
      "Il n'est pas de vent favorable pour celui qui ne sait où il va — la boussole commence dans le désir",
      "On ne découvre pas de terre nouvelle sans consentir à perdre de vue le rivage — la peur du large est souvent la peur de soi",
      "Le bonheur est dans le chemin non dans le but — l'arrivée n'est qu'une pause dans une attention plus longue",
      "Voyager c'est apprendre à se taire — le silence d'une place étrangère parle plus juste que mille souvenirs",
      "Les plus beaux voyages sont ceux qu'on n'a pas encore faits — l'attente aussi est une forme de départ",
      "Paris vaut bien une messe — mais une rue vaut parfois toute une religion si l'on sait regarder",
      "Rien ne se perd tout se transforme — surtout le voyageur qui croit rester le même",
      "Il faut voyager pour apprendre — non les noms des lieux mais la mesure exacte de son ignorance",
      "Le monde est un livre et ceux qui ne voyagent pas n'en lisent qu'une page — encore faut-il lire vraiment",
      "La flânerie est une science — marcher sans but peut être le but le plus honnête",
      "Qui n'a pas voyagé n'a lu qu'une page — qui voyage sans s'étonner n'a tourné que du papier",
      "Chaque départ est une promesse — chaque retour un examen de ce qu'on a tenu",
      "L'architecture est une musique figée — les toits de zinc en sont la mélodie la plus patient",
      "Le hasard fait bien les choses — quand le cœur a déjà choisi de s'ouvrir",
      "Mieux vaut allumer une chandelle que maudire l'obscurité — le voyageur porte sa propre lumière",
      "La route est longue mais le cœur est léger — pourvu qu'on accepte de ne pas tout comprendre d'avance"
    ].join("　")
  },
  // 4 — India (dome)
  india: {
    id: "india",
    name: "India",
    roof: "./roof-india.png",
    buttonIcon: "./selector-india.png",
    writing: "horizontal",
    gridW: 40,
    font: '"JetBrains Mono", "Noto Sans Devanagari", "Kohinoor Devanagari", "Noto Serif Devanagari", "PT Serif", serif',
    eyebrowNative: "संयोग",
    eyebrowRoman: "Sanyog",
    eyebrow: "A destined meeting",
    title: "India — carved domes, temple bells, and courtyards heavy with marigold light",
    aside:
      "Pass under onion finials, sandstone shade, and stories that refuse a single ending.",
    cloth: [
      "यात्रा अंत नहीं है — जो केवल मंज़िल देखता है वह राह का ज्ञान खो देता है",
      "अतिथि देवो भव — मेहमान में देवता देखना सिखाता है कि घर दीवार नहीं हृदय है",
      "वसुधैव कुटुम्बकम् — दुनिया एक परिवार है जब दृष्टि भय से बड़ी हो",
      "धर्मो रक्षति रक्षितः — जो सत्य की रक्षा करता है सत्य उसकी रक्षा करता है",
      "कर्मण्येवाधिकारस्ते — फल की चिंता छोड़ो कर्म में पूर्णता ढूँढो",
      "सत्यमेव जयते — झूठ तेज़ दौड़ सकता है पर अंत में सत्य ही ठहरता है",
      "दूर के ढोल सुहावने — पास आकर ही पता चलता है कि संगीत सच है या सिर्फ़ गूँज",
      "जैसा बोओगे वैसा काटोगे — यात्रा भी एक बीज है जो भीतर उगता है",
      "मन के हारे हार है — रास्ता वही आसान होता है जिसे हृदय ने स्वीकार किया",
      "नदी कभी पीछे नहीं मुड़ती — प्रवाह सिखाता है कि वापसी दिशा नहीं साहस है",
      "एकता में बल है — अकेला दीया हवा में बुझता है दीपमाला नहीं",
      "ज्ञान से बड़ा कोई धन नहीं — पर बिना यात्रा का ज्ञान अधूरा रहता है",
      "समय सबका इलाज है — धैर्य वह औषधि है जो जल्दी नहीं दिखती",
      "आह्वान सुनो मंदिर की घंटी का — हर यात्रा एक प्रार्थना है अगर ध्यान हो",
      "पर्वत ऊँचा दिखे तो भी चढ़ो — ऊँचाई आँख का भ्रम कदम सच्चा माप है",
      "अंधेरे में भी दीया जलाओ — भय को रोशनी से जवाब दो शब्दों से नहीं",
      "घर वही जहाँ स्वागत हो — पत्थर कहीं भी लगा सकते हो प्रतीक्षा अर्थ बनाती है",
      "यात्रा दृष्टि बदलती है — और बदली दृष्टि से ही घर लौटना योग्य होता है"
    ].join("　")
  },
  // 5 — UK (thatch)
  uk: {
    id: "uk",
    name: "UK",
    roof: "./roof-uk.png",
    buttonIcon: "./selector-uk.png",
    writing: "horizontal",
    gridW: 42,
    font: '"JetBrains Mono", "PT Serif", "Georgia", "Times New Roman", serif',
    eyebrowNative: "Serendipity",
    eyebrowRoman: "",
    eyebrow: "A happy accident",
    title: "UK — thatched eaves, stone chimneys, and lanes that keep their secrets soft",
    aside:
      "Duck under reed roofs, garden gates, and weather that makes tea feel like a ceremony.",
    cloth: [
      "The journey is the destination — arrival is only a pause in a longer kind of attention",
      "Not all those who wander are lost — some are simply refusing a map that never fit",
      "A ship in harbour is safe but that is not what ships are built for — comfort is a berth not a life",
      "The world is a book and those who do not travel read only one page — and often skim that too",
      "Adventure is worthwhile in itself — even when the ending refuses to promise anything",
      "Leave the shore to find a new ocean — familiar coasts are sometimes cages wearing kindly names",
      "Travel makes you humble — not by shrinking you but by returning you to true scale",
      "Better to travel well than to arrive — a beautiful arrival is born only of a beautiful way",
      "Go once a year somewhere you have never been — unfamiliarity restores the senses more than novelty",
      "The best moment is stepping into the unknown — briefly you are not defined by old stories",
      "Home is where they wait for you — walls can be built anywhere waiting builds meaning",
      "Rain writes soft letters on thatch — weather is not an obstacle it is part of the sentence",
      "A chimney keeps the stories warm — smoke is memory leaving the room without forgetting it",
      "Footpaths remember more than roads — the slow way still knows how to teach",
      "Courage is a cup of tea before the storm — ordinary bravery often looks like staying kind",
      "Mist hides the hill then returns it — faith sees form before clarity arrives",
      "Do not measure a place by the weather — measure it by how you listen when the weather speaks",
      "Travel changes the eye — and only a changed eye is fit to come home again"
    ].join("　")
  },
  // 6 — Norway (sod roof)
  norway: {
    id: "norway",
    name: "Norway",
    roof: "./roof-norway.png",
    buttonIcon: "./selector-norway.png",
    writing: "horizontal",
    gridW: 40,
    font: '"JetBrains Mono", "PT Serif", "Georgia", "Times New Roman", serif',
    eyebrowNative: "Vandring",
    eyebrowRoman: "",
    eyebrow: "A long walk",
    title: "Norway — grass roofs, fjord light, and cabins that borrow the hillside",
    aside:
      "Cross sod eaves, cold clear air, and silence wide enough to hear your own thinking.",
    cloth: [
      "Det er veien som er målet — ankomsten er bare et hvilested i en lengre oppmerksomhet",
      "Ut på tur aldri sur — været er ikke fienden det er samtalepartneren",
      "Fjorden husker mer enn kartet — vannet lærer deg å bøye deg uten å bryte",
      "Et skip i havn er trygt men det er ikke derfor skip bygges — trygghet er kai ikke kurs",
      "Verden er en bok den som ikke reiser leser bare én side — og ofte uten å se",
      "Gå dit du ikke har vært — det ukjente gjenoppliver sansene mer enn det underholder",
      "Fjellene ser høye ut til du tar steget — høyde er øyets bedrag skrittet er målet",
      "Gras på taket husker jorda — et hjem kan låne landskapet uten å eie det",
      "Stillhet er også tale — den som tåler roen hører mer enn den som fyller den",
      "Nordlys skriver på himmelen — skjønnhet trenger ikke forklaring bare vitne",
      "Ta med deg lyset inn i mørketiden — mot er ofte å holde varmen for andre",
      "En sti i snøen er en setning — hvert fotavtrykk er et ord du ikke kan ta tilbake",
      "Vinden renser mer enn den plager — hvis du lar den være del av reisen",
      "Hjem er der noen venter — vegger kan reises overalt venting bygger mening",
      "Reis for å bli liten nok — ydmykhet er riktig størrelse ikke selvutslettelse",
      "Det beste øyeblikket er å tre inn i det ukjente — da er du midlertidig mulighet",
      "Kabinen er liten verdenen er stor — det er nettopp derfor kabinen trengs",
      "Reisen endrer blikket — og bare et endret blikk er verdig til å komme hjem"
    ].join("　")
  },
  // 7 — Italy (duomo)
  italy: {
    id: "italy",
    name: "Italy",
    roof: "./roof-italy.png",
    buttonIcon: "./selector-italy.png",
    writing: "horizontal",
    gridW: 42,
    font: '"JetBrains Mono", "PT Serif", "Georgia", "Times New Roman", serif',
    eyebrowNative: "Destino",
    eyebrowRoman: "",
    eyebrow: "A fated meeting",
    title: "Italy — terracotta domes, marble lanterns, and piazzas that slow the clock",
    aside:
      "Stand under ribbed cupolas, warm stone, and evenings that arrive as if rehearsed for centuries.",
    cloth: [
      "Il viaggio non è l'arrivo — chi corre alla meta perde la sapienza che la strada offre piano",
      "Partire è un poco morire — e un poco rinascere quando l'estraneo smette di esserlo",
      "Una nave in porto è sicura ma non è per questo che si costruiscono le navi — il riposo non è la rotta",
      "Il mondo è un libro e chi non viaggia ne legge soltanto una pagina — e spesso di fretta",
      "Meglio viaggiare bene che arrivare — un bel ritorno nasce solo da un bel cammino",
      "Lascia la riva per vedere un altro mare — le coste familiari a volte sono gabbie gentili",
      "Il viaggio rende umili — non rimpicciolisce restituisce la misura vera",
      "La cupola ricorda il cielo — l'architettura è preghiera quando qualcuno ci ha messo l'anima",
      "La piazza insegna ad aspettare — il tempo italiano non è lento è presente",
      "Il destino bussa piano — lo sente solo chi non ha già deciso di sapere tutto",
      "Ogni anno vai dove non sei mai stato — l'ignoto non allena il talento risveglia i sensi",
      "Il momento più bello è entrare nell'ignoto — per un istante non sei la tua vecchia storia",
      "Casa è dove ti aspettano — i muri si alzano ovunque l'attesa costruisce il senso",
      "Il marmo parla se sai ascoltare — la pietra guarda più a lungo di chi passa di corsa",
      "Il caffè abbrevia la strada — l'ospitalità riduce le distanze più dei cavalli",
      "La nebbia nasconde poi restituisce — la fede vede la forma prima che arrivi la chiarezza",
      "Cammina con il cuore intero — un luogo percorso a metà resta terra di altri",
      "Il viaggio cambia lo sguardo — e solo con uno sguardo cambiato vale la pena tornare"
    ].join("　")
  },
  // 8 — USA (shingle gable)
  usa: {
    id: "usa",
    name: "USA",
    roof: "./roof-usa.png",
    buttonIcon: "./selector-usa.png",
    writing: "horizontal",
    gridW: 42,
    font: '"JetBrains Mono", "PT Serif", "Georgia", "Times New Roman", serif',
    eyebrowNative: "Happenstance",
    eyebrowRoman: "",
    eyebrow: "A lucky turn",
    title: "USA — shingled gables, brick chimneys, and porches that keep the afternoon",
    aside:
      "Pass under dormer light, warm clapboard, and streets that still believe in an open door.",
    cloth: [
      "The journey is the destination — arrival is only a porch light left on for whoever comes next",
      "Not all those who wander are lost — some are simply rewriting the map with their feet",
      "A ship in harbour is safe but that is not what ships are built for — comfort is a berth not a life",
      "The world is a book and those who do not travel read only one page — and often skim that too",
      "Adventure is worthwhile in itself — even when the ending refuses to promise anything",
      "Leave the shore to find a new ocean — familiar coasts are sometimes cages wearing kindly names",
      "Travel makes you humble — not by shrinking you but by returning you to true scale",
      "Better to travel well than to arrive — a beautiful arrival is born only of a beautiful way",
      "Go once a year somewhere you have never been — unfamiliarity restores the senses more than novelty",
      "The best moment is stepping into the unknown — briefly you are not defined by old stories",
      "Home is where they wait for you — walls can be built anywhere waiting builds meaning",
      "A chimney keeps the stories warm — smoke is memory leaving the room without forgetting it",
      "Front porch wisdom travels farther than freeways — the slow talk still knows how to teach",
      "Courage is a cup of coffee before the storm — ordinary bravery often looks like staying kind",
      "Mist hides the hill then returns it — faith sees form before clarity arrives",
      "Do not measure a place by the weather — measure it by how you listen when the weather speaks",
      "The road teaches what the room cannot — motion is a kind of honesty",
      "Travel changes the eye — and only a changed eye is fit to come home again"
    ].join("　")
  },
  // 9 — Brazil (terracotta)
  brazil: {
    id: "brazil",
    name: "Brazil",
    roof: "./roof-brazil.png",
    buttonIcon: "./selector-brazil.png",
    writing: "horizontal",
    gridW: 42,
    font: '"JetBrains Mono", "PT Serif", "Georgia", "Times New Roman", serif',
    eyebrowNative: "Saudade",
    eyebrowRoman: "",
    eyebrow: "A longing that travels",
    title: "Brazil — terracotta tiles, white acroteria, and cupolas catching the heat",
    aside:
      "Wander clay roofs, shaded courtyards, and evenings that arrive already dancing.",
    cloth: [
      "A viagem não é a chegada — quem corre para o destino perde a sabedoria que o caminho oferece devagar",
      "Partir é morrer um pouco — e renascer um pouco quando o estranho deixa de ser estranho",
      "Um navio no porto está seguro mas não é para isso que se constrói um navio — o descanso não é a rota",
      "O mundo é um livro e quem não viaja lê apenas uma página — e muitas vezes com pressa",
      "Melhor viajar bem do que chegar — um belo retorno nasce só de um belo caminho",
      "Deixe a margem para ver outro mar — costas familiares às vezes são gaiolas gentis",
      "A viagem torna humilde — não encolhe devolve a medida verdadeira",
      "O telhado de barro lembra a terra — a casa pode emprestar a paisagem sem possuí-la",
      "A praça ensina a esperar — o tempo brasileiro não é lento é presente",
      "O destino bate baixo — só ouve quem ainda não decidiu saber tudo",
      "Todo ano vá aonde nunca esteve — o desconhecido não treina o talento desperta os sentidos",
      "O melhor momento é entrar no desconhecido — por um instante você não é a sua velha história",
      "Casa é onde esperam por você — paredes se levantam em qualquer lugar a espera constrói sentido",
      "O calor escreve nas telhas — o clima não é obstáculo é parte da frase",
      "O café encurta a estrada — a hospitalidade reduz distâncias mais que cavalos",
      "A névoa esconde depois devolve — a fé vê a forma antes que chegue a clareza",
      "Caminhe com o coração inteiro — um lugar percorrido pela metade continua terra de outros",
      "A viagem muda o olhar — e só com um olhar mudado vale a pena voltar"
    ].join("　")
  },
  // 10 — Iran (windcatchers)
  iran: {
    id: "iran",
    name: "Iran",
    roof: "./roof-iran.png",
    buttonIcon: "./selector-iran.png",
    writing: "horizontal",
    gridW: 40,
    font: '"JetBrains Mono", "Noto Naskh Arabic", "Noto Sans Arabic", "Geeza Pro", "PT Serif", serif',
    eyebrowNative: "تقدیر",
    eyebrowRoman: "Taqdir",
    eyebrow: "A written fate",
    title: "Iran — windcatchers, courtyard shade, and roofs that breathe the desert",
    aside:
      "Stand under badgir towers, cool terrace light, and patterns that turn heat into quiet.",
    cloth: [
      "سفر خودِ مقصد است — رسیدن فقط ایستگاهی در توجهی طولانی‌تر است",
      "نه هر که سرگردان است گم شده — برخی فقط نقشه را با قدم‌هایشان بازنویسی می‌کنند",
      "کشتی در بندر امن است اما برای لنگر ساخته نشده — آسایش اسکله است نه مسیر",
      "جهان کتابی است و آنکه سفر نمی‌کند تنها یک صفحه می‌خواند — آن هم اغلب شتاب‌زده",
      "بهتر است خوب سفر کنی تا زود برسی — رسیدنِ زیبا فقط از راه زیبا زاده می‌شود",
      "از ساحل دور شو تا دریایی دیگر ببینی — کرانه‌های آشنا گاه قفس‌هایی مهربان‌اند",
      "سفر آدم را فروتن می‌کند — نه با کوچک‌کردن بلکه با بازگرداندن به اندازه‌ی راستین",
      "بادگیر هوای کویر را رام می‌کند — معماری وقتی مقدس می‌شود که روح در آن نهاده شود",
      "حیاط سکوت می‌آموزد — زمان ایرانی کند نیست حاضر است",
      "تقدیر آهسته می‌کوبد — تنها کسی می‌شنود که هنوز وانمود نکرده همه‌چیز را می‌داند",
      "هر سال جایی برو که نرفته‌ای — ناشناخته استعداد را تمرین نمی‌دهد حس‌ها را بیدار می‌کند",
      "بهترین لحظه ورود به ناشناخته است — برای یک آن دیگر داستان کهنه خود نیستی",
      "خانه جایی است که منتظرت باشند — دیوار همه‌جا ساخته می‌شود انتظار معنا می‌سازد",
      "گنبد آسمان را به یاد می‌آورد — سنگ اگر گوش کنی حرف می‌زند",
      "چای راه را کوتاه می‌کند — مهمان‌نوازی فاصله را بیشتر از اسب‌ها کم می‌کند",
      "مه پنهان می‌کند بعد بازمی‌گرداند — ایمان پیش از روشنی شکل را می‌بیند",
      "با دلِ تمام راه برو — جایی که نیمه‌راه رفته‌ای هنوز زمین دیگران است",
      "سفر نگاه را عوض می‌کند — و فقط با نگاهی عوض‌شده ارزش دارد که بازگردی"
    ].join("　")
  }
};

/** Left → right order for side navigation */
export const COUNTRY_ORDER = [
  "vietnam",
  "china",
  "japan",
  "kazakhstan",
  "russia",
  "france",
  "india",
  "uk",
  "norway",
  "italy",
  "usa",
  "brazil",
  "iran"
];

export const DEFAULT_COUNTRY = "china";

export function neighborsOf(id) {
  const i = COUNTRY_ORDER.indexOf(id);
  if (i < 0) return { left: "vietnam", right: "japan" };
  const n = COUNTRY_ORDER.length;
  return {
    left: COUNTRY_ORDER[(i - 1 + n) % n],
    right: COUNTRY_ORDER[(i + 1) % n]
  };
}

/** Map grid cell (i=col left→right, j=row top→bottom) to a character. */
export function charForCell(text, i, j, gridW, gridH, writing = "horizontal") {
  if (!text || !text.length) return " ";
  let index;
  if (writing === "vertical") {
    const colFromRight = gridW - 1 - i;
    index = colFromRight * gridH + j;
  } else {
    index = j * gridW + i;
  }
  return text[index % text.length] || " ";
}
