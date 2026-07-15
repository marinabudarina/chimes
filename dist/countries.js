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
  }
};

/** Left → right order for side navigation */
export const COUNTRY_ORDER = [
  "vietnam",
  "china",
  "japan",
  "kazakhstan",
  "russia"
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
