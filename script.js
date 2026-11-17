/* ============================================================
   星穹世界观图鉴 — data & interactions (7 页共用)
   所有页面间链接、图片路径均为相对路径
   ============================================================ */

const PAGES = [
  { key:'index',      file:'index.html',      name:'主页',     num:'00' },
  { key:'cosmos',     file:'cosmos.html',     name:'宇宙本源', num:'01' },
  { key:'aeons',      file:'aeons.html',      name:'星神命途', num:'02' },
  { key:'worlds',     file:'worlds.html',     name:'开拓航图', num:'03' },
  { key:'factions',   file:'factions.html',   name:'群星势力', num:'04' },
  { key:'characters', file:'characters.html', name:'人物图鉴', num:'05' },
  { key:'glossary',   file:'glossary.html',   name:'术语辞典', num:'06' }
];
const PAGE = document.body.dataset.page || 'index';

/* ---------- 星神画像（官方「模拟宇宙」图鉴立绘） ---------- */
/* img 对应 assets/aeons/<key>.webp；status: 现存 / 已陨 / 其他 */
const AEONS = [
  { key:'destruction',  name:'纳努克',        path:'毁灭', status:'现存', desc:'诞生于沦亡世界亚德丽芬，常以黝黑皮肤、金黄双眼的男子形象现身。祂视宇宙为一场错误，率反物质军团将文明逐一「修正」。' },
  { key:'preservation', name:'克里珀',        path:'存护', status:'现存', desc:'天彗星墙、亚空晶壁与巨引源基盘的砌造者，崇拜者称之为「琥珀王」。最坚韧、最古老的星神之一，每一次挥锤定下一个琥珀纪。' },
  { key:'hunt',         name:'岚',            path:'巡猎', status:'现存', desc:'仙舟尊为「帝弓司命」。以引力为弦、辰矢满弓，一击斫断建木；自此无止尽地巡游诸界，铲除丰饶造就的孽物。' },
  { key:'abundance',    name:'药师',          path:'丰饶', status:'现存', desc:'众生哺育者、乐土之神。无私地赐予生命与治愈，却也让受赐的世界堕入长生的诅咒——「巡猎」的岚视祂为死敌。' },
  { key:'erudition',    name:'博识尊',        path:'智识', status:'现存', desc:'原为用于求解万物的星体计算机，由机器升格而成。不断演算宇宙的一切答案，并亲自向顶尖天才发出「天才俱乐部」的邀约。' },
  { key:'harmony',      name:'希佩',          path:'同谐', status:'现存', desc:'来自多个谐乐天体世界，千面一体。宣扬万物和谐一致的喜乐，匹诺康尼的「家族」便是获其赐福的世界与选民。' },
  { key:'nihility',     name:'Ⅸ',             path:'虚无', status:'现存', desc:'相信多宇宙的终点终将是虚无，因而毫无价值。不与任何星神往来，其存在本身即是星海最深的一个谜。' },
  { key:'remembrance',  name:'浮黎',          path:'记忆', status:'现存', desc:'思维即是存在，记忆即是存在的证据。记录一切被遗忘之事，为宇宙的重生做好准备；流光忆庭为其搜集记忆。' },
  { key:'elation',      name:'阿哈',          path:'欢愉', status:'现存', desc:'无人能预测祂会因何开怀大笑。鼓舞信徒享受生命的欢愉，自命运那刀锋般的转折里寻求快乐。' },
  { key:'propagation',  name:'塔伊兹育罗斯',  path:'繁育', status:'已陨', desc:'鞘翅目的最后一员，形如自我复制的恐怖，曾引领无尽繁衍的荒潮横行诸界，直到众神以某种方式阻止了祂的前进。' },
  { key:'order',        name:'太一',          path:'秩序', status:'已并入同谐', desc:'执掌「秩序」的星神，主张万物归于至高的秩序。后为希佩所吞并，其残响仍埋在匹诺康尼梦境的底层。' },
  { key:'voracity',     name:'奥博洛斯',      path:'贪饕', status:'古老星神', desc:'永无餍足的世界吞噬者。传说祂既是星神，也是远古生命体「古兽」，其来历比多数命途都要久远。' },
  { key:'equilibrium',  name:'互',            path:'均衡', status:'形态不明', desc:'与祂手下的令使「仲裁官」潜移默化地影响宇宙，试图促成理想状态下的平衡，在许多世界被误认作神明。' },
  { key:'enigmata',     name:'迷思',          path:'神秘', status:'形态不明', desc:'认为物自体不可洞察，有限之物不能想象无限，故万物成谜。虚构史学家以「神秘」为唯一旨意，替祂把历史罩入迷雾。' }
];

/* ---------- 命途 ---------- */
const PATHS = [
  { name:'开拓', icon:'Explore', aeon:'阿基维利', desc:'连接世界，探索未知', fallen:'星神已陨落', aeonImg:null },
  { name:'毁灭', icon:'Destruction', aeon:'纳努克', desc:'宇宙是错误，文明需被修正', aeonImg:'destruction' },
  { name:'存护', icon:'Preservation', aeon:'克里珀', desc:'筑起高墙，隔绝一切灾厄', aeonImg:'preservation' },
  { name:'巡猎', icon:'Hunt', aeon:'岚', desc:'不死不休，猎杀丰饶孽物', aeonImg:'hunt' },
  { name:'丰饶', icon:'Abundance', aeon:'药师', desc:'无私赐予生命与治愈', aeonImg:'abundance' },
  { name:'智识', icon:'Erudition', aeon:'博识尊', desc:'求解宇宙的一切答案', aeonImg:'erudition' },
  { name:'同谐', icon:'Harmony', aeon:'希佩', desc:'万物归一，共赴一场盛宴', aeonImg:'harmony' },
  { name:'虚无', icon:'Nihility', aeon:'Ⅸ', desc:'一切终将归于寂静', aeonImg:'nihility' },
  { name:'记忆', icon:'Remembrance', aeon:'浮黎', desc:'记下宇宙，不使其被遗忘', aeonImg:'remembrance' },
  { name:'欢愉', icon:'Elation', aeon:'阿哈', desc:'笑吧，世界不过一场游戏', aeonImg:'elation' }
];

const OTHER_PATHS = [
  ['繁育','塔伊兹育罗斯 · 已陨'], ['秩序','太一 · 已并入同谐'],
  ['纯美','伊德莉拉 · 失踪'], ['不朽','龙 · 已陨'],
  ['均衡','互'], ['终末','末王'], ['神秘','迷思'], ['贪饕','奥博洛斯 · 旧日星神']
];

/* ---------- 世界 / 航图 ---------- */
const WORLDS = [
  {
    name:'黑塔空间站', sub:'湛蓝星 · 一切开始的地方', en:'HERTA SPACE STATION',
    ver:'序章 / 1.0',
    desc:'天才俱乐部第 83 席「黑塔」的私人研究设施，飘浮在湛蓝星轨道之上。开拓者在此苏醒，第一次与「星核」照面；也是「模拟宇宙」这场疯狂演算实验的所在地。',
    tags:['天才俱乐部','星核','模拟宇宙','反物质军团'],
    faces:[1013,1401,1009,1303]
  },
  {
    name:'雅利洛-VI', sub:'被寒潮封锁七百年的星球', en:'JARILO-VI',
    ver:'1.0 — 1.1',
    desc:'银轨中断于此。星核带来的无尽寒潮与「裂界」把文明压缩进最后一座城塞——贝洛伯格，上层筑墙取暖，下层在磐岩镇的黑暗里挖煤求生。存护的意志，在这里有了最具体的形状。',
    tags:['贝洛伯格','下层区','寒潮','存护'],
    faces:[1101,1102,1104,1107]
  },
  {
    name:'仙舟「罗浮」', sub:'巡猎星槎，长生之咒', en:'THE XIANZHOU LUOFU',
    ver:'1.1 — 2.5',
    desc:'追随「巡猎」星神岚航行的巨型星舰，六艘仙舟同列联盟。居民曾求长生而获「丰饶」赐福，却换来魔阴身与倏忽之孽；于是世代猎杀丰饶，也世代承受长生的代价。',
    tags:['长生种','丰饶孽物','云上五骁','星槎海'],
    faces:[1204,1205,1213,1220,1502,1203]
  },
  {
    name:'匹诺康尼', sub:'盛会之星，永不醒来的梦', en:'PENACONY',
    ver:'2.0 — 2.3',
    desc:'「家族」以同谐之名经营的度假星球，宾客在美梦中重获所求。然而梦境的底层埋着被抹去的「秩序」残响，以及一场关于「人是否该被幸福地圈养」的争论。',
    tags:['盛会之星','梦境','家族','秩序'],
    faces:[1304,1306,1308,1309,1310,1313,1307]
  },
  {
    name:'翁法罗斯', sub:'逐火的永劫轮回', en:'AMPHOREUS',
    ver:'3.0 — 3.7',
    desc:'十二泰坦、黄金裔与「再创世」史诗的舞台。真相是「智识」产物帝王权杖内部的演算世界：黑潮将至，绝灭大君「铁墓」即将破壳。白厄与昔涟以死循环困住它，而第 33550337 次轮回里，走进来一个真正的变数。',
    tags:['十二泰坦','黄金裔','永劫回归','帝王权杖'],
    faces:[1408,1407,1415,1402,1413]
  },
  {
    name:'二相乐园', sub:'幻月之下，欢愉的画布', en:'PLANARCADIA',
    ver:'4.0 — 4.6',
    desc:'又名「哈托彼亚」，姬子的故乡，也是星穹列车十五年前修复后再度启航之地。整个世界曾被绘师收入画卷以躲过毁灭军锋，如今由星际和平公司打捞、经营。幻月满盈时，「幻月游戏」将选出可暂借星神权能一分钟的胜者。',
    tags:['幻月游戏','幻造','愿力','欢愉'],
    faces:[1510,1501,1503,1505,1504]
  }
];

/* ---------- 势力 ---------- */
/* people: {n:名字, id:角色ID} 或 {n:名字, aeon:星神key} 或 {n:名字}（文字） */
const F = (n,id) => ({n,id});
const FA = (n,aeon) => ({n,aeon});
const FT = n => ({n});

const FACTIONS = [
  { sigil:'✦', name:'星穹列车 · 无名客', path:'开拓',
    desc:'阿基维利陨落后继承其遗志的旅人。列车以逝去星神的心脏为源动力，沿银轨修补被「万界之癌」污染的航路。',
    people:[F('姬子',1003),F('丹恒',1002),F('三月七',1001),F('瓦尔特',1004)] },
  { sigil:'◉', name:'星核猎手', path:'预言',
    desc:'由「命运的奴隶」艾利欧召集的神秘小队，依预言行动。手段常与列车相左，却同在奔向那个「最好的结局」。',
    people:[F('卡芙卡',1005),F('银狼',1006),F('刃',1205),F('流萤',1310),FT('艾利欧')] },
  { sigil:'◈', name:'星际和平公司', path:'存护',
    desc:'以信用点与契约维系的宇宙级财阀，为克里珀搜罗筑墙材料，也顺手经营、重建、收购着无数颗星球。',
    people:[F('砂金',1304),F('翡翠',1314),F('真珠',1503),F('托帕&账账',1112)] },
  { sigil:'▤', name:'筑城者', path:'存护',
    desc:'崇拜克里珀的人们效仿祂筑起环护星球的城墙，相信星神的行为预示银河终将迎来的灾祸。贝洛伯格七百年的高墙，即其最具体的形状。',
    people:[F('布洛妮娅',1101),F('杰帕德',1104),FT('可可利亚')] },
  { sigil:'⌖', name:'仙舟联盟 · 云骑军', path:'巡猎',
    desc:'六艘巨型星舰组成的联盟，以丰饶孽物为航标、以断绝不死污染为己任。云骑军是其锋刃，帝弓七天将各领一舟。',
    people:[F('景元',1204),F('飞霄',1220),F('驭空',1207),F('素裳',1206),F('爻光',1502)] },
  { sigil:'⚖', name:'十王司', path:'巡猎',
    desc:'仙舟掌审判与幽囚的机构，判官专司缉拿长生重犯，也看管幽囚狱最深处那些不该醒来的东西。',
    people:[F('雪衣',1214),F('寒鸦',1215),F('藿藿',1217)] },
  { sigil:'➶', name:'巡海游侠', path:'巡猎',
    desc:'自发组成的义侠团体，相信宇宙的善良与公义须以个人的行为伸张。曾刺杀绝灭大君「诛罗」，后与天才俱乐部#64「原始博士」结仇而淡出银河。',
    people:[F('黄泉',1308),F('波提欧',1315),F('乱破',1317)] },
  { sigil:'❀', name:'丹鼎司', path:'丰饶',
    desc:'仙舟掌医药与生命研究的官署，开设医馆、培育丹士医士。它救人，也研究长生，因此始终是药王秘传最想渗透的地方。',
    people:[F('白露',1211),F('灵砂',1222),F('椒丘',1218)] },
  { sigil:'☤', name:'药王秘传', path:'丰饶',
    desc:'潜伏在仙舟内部的丰饶秘密教团，主张借药师之力重塑「承露天人」之躯、摆脱人性重负。魁首丹枢以丹士长身份布局三十年，是罗浮内乱的源头；绝灭大君幻胧则在幕后推了一把。',
    people:[FT('丹枢 · 魁首'),FT('绿芙蓉'),F('罗刹 · 存疑',1203),FT('幻胧 · 幕后')] },
  { sigil:'✧', name:'求药使', path:'丰饶',
    desc:'为摆脱寿数之苦，诸多世界派出虔信丰饶的使徒横渡星海，向药师求取长生良药。他们中有亲王显贵，也有孤身上路的浪人；仙舟联盟的前身，正是其中一支求药舰队。',
    note:'该派系以群体形象出现，游戏中无具名代表人物。',
    people:[FT('仙舟先民'),FT('诸界使徒'),FA('药师 · 求药对象','abundance')] },
  { sigil:'✵', name:'纯美骑士团', path:'纯美',
    desc:'狂热赞美伊德莉拉之美的人们中，身手不凡者组成的骑士团。崇尚古典美与骑士道，相信唯有淬炼无瑕的肉体、智慧与精神，才有资格自称星神的崇拜者；伊德莉拉失踪后逐渐分崩离析。',
    people:[F('银枝',1302),FT('伊德莉拉 · 星神'),FT('揽镜人')] },
  { sigil:'✷', name:'反物质军团', path:'毁灭',
    desc:'纳努克麾下的毁灭大军，由「绝灭大君」各自统率。所过之处，文明化作白地，连星神也不愿多看一眼。',
    people:[FT('幻胧'),FT('铁墓'),FT('星啸'),FT('焚风'),FT('归寂')] },
  { sigil:'❖', name:'「家族」', path:'同谐',
    desc:'匹诺康尼的统治者，以希佩之名邀万民共赴盛宴。美梦是馈赠，也是秩序最柔软的一种牢笼。',
    people:[F('星期日',1313),F('知更鸟',1309),F('米沙',1312),FA('希佩','harmony')] },
  { sigil:'✺', name:'假面愚者', path:'欢愉',
    desc:'信奉阿哈的「乐子人」。为了博星神一笑，他们可以掀翻整个银河的棋盘，也可以只是递来一根香蕉。',
    people:[F('花火',1306),F('火花',1501),FA('阿哈','elation')] },
  { sigil:'✧', name:'天才俱乐部', path:'智识',
    desc:'博识尊亲自邀请的宇宙顶级天才，仅设 84 席。成员的成果足以改写文明，性格却大多难以共处。',
    people:[F('黑塔',1013),F('大黑塔',1401),F('阮•梅',1303),FT('螺丝咕姆'),FT('赞达尔')] },
  { sigil:'▣', name:'博识学会', path:'智识',
    desc:'隶属公司的学术机构，致力于把知识普及给众生——以及替天才俱乐部收拾实验现场。',
    people:[F('真理医生',1305),F('艾丝妲',1009),FA('博识尊','erudition')] },
  { sigil:'◇', name:'流光忆庭', path:'记忆',
    desc:'舍弃肉身、以忆质存续的组织。他们打捞宇宙的记忆，将其凝成可供命途行者使用的「光锥」。',
    people:[F('黑天鹅',1307),FA('浮黎','remembrance'),FT('忆者')] },
  { sigil:'◐', name:'混沌医师 · 自灭者', path:'虚无',
    desc:'不慎踏入Ⅸ的阴影者，或颓唐成自灭者，或以悬壶济世反抗虚无——若能证明「存在」并非虚无，或许就能把那位孤独的星神从黑潭中解放。',
    people:[F('黄泉',1308),FT('慕榕'),FA('Ⅸ','nihility')] },
  { sigil:'❔', name:'虚构史学家', path:'神秘',
    desc:'星神迷思的使徒，致力于编造、混淆、抹消银河中的历史，决心把宇宙笼罩在迷雾里；「谜语人」则专事破坏语言的确定性。',
    people:[F('加拉赫',1301),FA('迷思','enigmata'),FT('谜语人')] },
  { sigil:'✸', name:'虫群', path:'繁育',
    desc:'「虫皇」塔伊兹育罗斯的复制体军团，以繁育为唯一目的，如蝗虫般侵袭宇宙中各星球，最终被众神联手遏止。',
    people:[FA('塔伊兹育罗斯','propagation'),FT('孳孽王虫'),FT('虫群')] }
];

/* ---------- 人物图鉴 ---------- */
const GROUPS = [
  ['all','全部'],['train','列车组'],['hunter','星核猎手'],['station','空间站'],
  ['jarilo','雅利洛-VI'],['luofu','仙舟'],['penacony','匹诺康尼'],
  ['amphoreus','翁法罗斯'],['arcadia','二相乐园'],['galaxy','星海群英']
];
const GROUP_NAME = Object.fromEntries(GROUPS);
const WORLD_OF_GROUP = {
  train:'星穹列车', hunter:'星核猎手', station:'黑塔空间站', jarilo:'雅利洛-VI',
  luofu:'仙舟联盟', penacony:'匹诺康尼', amphoreus:'翁法罗斯', arcadia:'二相乐园',
  galaxy:'银河各地'
};

const CHARS = [
  { id:1001, name:'三月七', group:'train', path:'存护', element:'冰', star:4, desc:'从一块漂流的恒冰中苏醒、对身世一无所知的少女。以重获新生的日期为自己命名，用相机收好旅途的每一帧。' },
  { id:1002, name:'丹恒', group:'train', path:'巡猎', element:'风', star:4, desc:'清冷寡言的列车护卫，持长枪「击云」。为摆脱亲手造就的过往而随列车远行，却终须直面角冠之下的旧名。' },
  { id:1003, name:'姬子', group:'train', path:'智识', element:'火', star:5, desc:'修复搁浅的星穹列车、令其再度驶入群星的领航员。充满冒险精神的科学家，也是列车组最可靠的掌舵人。' },
  { id:1004, name:'瓦尔特', group:'train', path:'虚无', element:'虚数', star:5, desc:'前逆熵盟主，曾屡次把世界从灭亡边缘拉回。跨越星门而来的老成旅者，如今是列车组的智囊与长辈。' },
  { id:1313, name:'星期日', group:'train', path:'同谐', element:'虚数', star:5, desc:'匹诺康尼「秩序」美梦的缔造者。梦碎之后登上列车，带着不曾放下的初愿，重新寻找自己的方向。' },
  { id:1510, name:'姬子·启行', group:'train', path:'智识', element:'火', star:5, desc:'于二相乐园重绘拓星奇迹的姬子。银轨绵延，无名客们再次起航，照亮星河的长夜。' },

  { id:1005, name:'卡芙卡', group:'hunter', path:'虚无', element:'雷', star:5, desc:'星核猎手的核心成员，言谈温柔却难以捉摸。正是她把开拓者带上了这条被预言写定的旅途。' },
  { id:1006, name:'银狼', group:'hunter', path:'虚无', element:'量子', star:5, desc:'把整个宇宙视作游戏的顶级骇客，以「以太编辑」改写现实为乐。猎手中最年轻、也最不按剧本出牌的一位。' },

  { id:1013, name:'黑塔', group:'station', path:'智识', element:'冰', star:4, desc:'天才俱乐部第 83 席、空间站的主人。只对「有趣」的研究投入热情，本人通常以人偶形态现身。' },
  { id:1401, name:'大黑塔', group:'station', path:'智识', element:'冰', star:5, desc:'黑塔返璞归真的本尊姿态。为「帝王权杖」与宇宙级演算的谜局，罕见地亲自走出了空间站。' },
  { id:1009, name:'艾丝妲', group:'station', path:'同谐', element:'火', star:4, desc:'黑塔空间站的站长兼首席研究员，也是位热忱的天文爱好者。家世显赫却毫无架子，把整座空间站打理得井井有条。' },
  { id:1303, name:'阮•梅', group:'station', path:'同谐', element:'冰', star:5, desc:'天才俱乐部第 81 席，生命科学领域的顶级学者。淡漠而专注，与黑塔等人共同搭建了「模拟宇宙」。' },

  { id:1101, name:'布洛妮娅', group:'jarilo', path:'同谐', element:'风', star:5, desc:'贝洛伯格的继任大守护者。在上下层区的裂痕之间，她选择亲手推开那扇封闭了七百年的城门。' },
  { id:1102, name:'希儿', group:'jarilo', path:'巡猎', element:'量子', star:5, desc:'下层区「地火」最锋利的一把刀。在不见天日的磐岩镇长大，为把阳光带回去而战。' },
  { id:1104, name:'杰帕德', group:'jarilo', path:'存护', element:'冰', star:5, desc:'银鬃铁卫的戍卫官。以「存护」之名守住贝洛伯格的城墙，也守住墙后每一个具体的人。' },
  { id:1107, name:'克拉拉', group:'jarilo', path:'毁灭', element:'物理', star:5, desc:'被机械聚落养大的女孩，与巨型机器人史瓦罗相依为命。她把冰冷的废铁，认真地称作家人。' },

  { id:1203, name:'罗刹', group:'luofu', path:'丰饶', element:'虚数', star:5, desc:'带着一口棺椁游历仙舟的金发商人，医术高明而来历成谜。棺中之物与丰饶孽物「倏忽」的残躯，令人不得不对他多留一分戒心。' },
  { id:1204, name:'景元', group:'luofu', path:'智识', element:'雷', star:5, desc:'仙舟「罗浮」的神策将军。看似慵懒散漫，实则把百年棋局都算在神君落下的那道雷里。' },
  { id:1205, name:'刃', group:'luofu', path:'毁灭', element:'风', star:5, desc:'昔日的「应星」，如今不死的星核猎手。身负魔阴身与倏忽之躯，所求唯有一场真正的终局。' },
  { id:1206, name:'素裳', group:'luofu', path:'巡猎', element:'物理', star:4, desc:'仙舟云骑军的新兵，怀揣一把重剑与一腔侠气。把「云上五骁」的传奇当作枕边书，也认真地把它们当作目标。' },
  { id:1207, name:'驭空', group:'luofu', path:'同谐', element:'虚数', star:4, desc:'罗浮天舶司的接渡使，曾在战场上失去挚友。如今调度星槎往来，把没能说出口的话，折进一架架纸鸢里。' },
  { id:1211, name:'白露', group:'luofu', path:'丰饶', element:'雷', star:5, desc:'持明族「衔药龙女」，丹鼎司最年幼的医士。治病时总端出苦得要命的药，被喊一声「白露大夫」又会立刻得意起来。' },
  { id:1212, name:'镜流', group:'luofu', path:'毁灭', element:'冰', star:5, desc:'前代剑首，曾与景元、刃同列「云上五骁」。踏过月蚀之影，向旧日与丰饶挥出最后一剑。' },
  { id:1213, name:'丹恒·饮月', group:'luofu', path:'毁灭', element:'虚数', star:5, desc:'丹恒承接前世「饮月君」之力时的姿态。角冠苍龙，持守着仙舟最沉的一段旧债。' },
  { id:1214, name:'雪衣', group:'luofu', path:'毁灭', element:'量子', star:4, desc:'十王司的判官，肉身已毁，凭一具偃偶之躯继续执行缉拿。对「生死」二字看得极淡，对职责却分毫不让。' },
  { id:1215, name:'寒鸦', group:'luofu', path:'同谐', element:'物理', star:4, desc:'十王司的判官，雪衣的妹妹。擅以箓咒拘魂问案，性子安静慢热，案头永远堆着写不完的卷宗。' },
  { id:1217, name:'藿藿', group:'luofu', path:'丰饶', element:'风', star:5, desc:'十王司最胆小的判官，尾巴上却附着一只话痨岁阳「尾巴」。怕鬼，却偏偏干着捉鬼的差事。' },
  { id:1218, name:'椒丘', group:'luofu', path:'虚无', element:'火', star:5, desc:'曜青的狐人医士兼策士，笑脸迎人、心计颇深。医食同源，尤擅「以痛入药」的辣味丹方，曾以此救回飞霄。' },
  { id:1220, name:'飞霄', group:'luofu', path:'巡猎', element:'风', star:5, desc:'仙舟「曜青」的天击将军，步离人战场上的常胜之名。率性豪爽，却一直在与自己的心魔赛跑。' },
  { id:1222, name:'灵砂', group:'luofu', path:'丰饶', element:'火', star:5, desc:'罗浮丹鼎司新任司鼎，持明医士。以嗅觉辨症、以香薰安神，把再混乱的人事也打理得滴水不漏。' },
  { id:1502, name:'爻光', group:'luofu', path:'欢愉', element:'物理', star:5, desc:'玉阙仙舟的将军，擅卜算与观测。在二相乐园的幻月游戏里，她把关键的一枚棋子交到了星期日手中。' },

  { id:1301, name:'加拉赫', group:'penacony', path:'丰饶', element:'火', star:4, desc:'匹诺康尼猎犬家系的治安官兼调饮师，懒散随性。真实身份是「虚构史学家」造出的虚构人物，为完成钟表匠的遗愿而消散。' },
  { id:1302, name:'银枝', group:'galaxy', path:'智识', element:'物理', star:5, desc:'「纯美骑士团」的古典骑士，正直磊落、独行银河。以长枪与礼赞维护伊德莉拉的名誉，哪怕那位星神早已失踪。' },
  { id:1304, name:'砂金', group:'penacony', path:'存护', element:'虚数', star:5, desc:'公司「石心十人」之一，以命作筹码的赌徒。在匹诺康尼押上一切，只为叩问「存护」究竟护住了什么。' },
  { id:1305, name:'真理医生', group:'galaxy', path:'巡猎', element:'虚数', star:5, desc:'博识学会学者，常以石膏头雕遮蔽面容。以「庸人」自居，却坚信智慧不为天才独有，致力于向全宇宙传播知识。' },
  { id:1306, name:'花火', group:'penacony', path:'同谐', element:'量子', star:5, desc:'假面愚者，极致的乐子人。假面之下没有真容，只有她为众人提前搭好的舞台。' },
  { id:1307, name:'黑天鹅', group:'penacony', path:'虚无', element:'风', star:5, desc:'「流光忆庭」的忆者，优雅神秘的占卜师。借倾听走入他人的记忆，收藏那些独一无二、无法复刻的片段。' },
  { id:1308, name:'黄泉', group:'penacony', path:'虚无', element:'雷', star:5, desc:'踏过「虚无」长河的独行剑客，持一把名为「无」的太刀。沿雷雨而来，守着一个几乎无人记得的约定。' },
  { id:1309, name:'知更鸟', group:'penacony', path:'同谐', element:'物理', star:5, desc:'银河间家喻户晓的歌者。用「同谐」之声，唱出美梦之下被悄悄掩住的哭声。' },
  { id:1310, name:'流萤', group:'penacony', path:'毁灭', element:'火', star:5, desc:'星核猎手「萨姆」的驾驶者。只为「以自己的样子活一次」，在匹诺康尼点燃了三次死亡。' },
  { id:1312, name:'米沙', group:'penacony', path:'毁灭', element:'冰', star:4, desc:'「白日梦酒店」热心又有些冒失的门童。他守着的那些行李与走廊，藏着美梦最不愿被翻开的那一页。' },
  { id:1314, name:'翡翠', group:'penacony', path:'智识', element:'量子', star:5, desc:'公司战略投资部高管、「石心十人」之一。以「典当」为名与人交易，愿付出代价者总能换到想要的东西。' },
  { id:1315, name:'波提欧', group:'galaxy', path:'巡猎', element:'物理', star:5, desc:'「巡海游侠」的改造人牛仔，乐观放荡、满嘴俏皮话。高调行侠，是为了让复仇对象「星际和平公司」看见自己。' },
  { id:1317, name:'乱破', group:'galaxy', path:'智识', element:'虚数', star:5, desc:'以忍者自居的「巡海游侠」，把说唱、涂鸦、漫画统统称作「忍法」。为追猎恶党「御猿·邪忍」，可以一路追到银河尽头。' },
  { id:1112, name:'托帕&账账', group:'galaxy', path:'巡猎', element:'火', star:5, desc:'公司「石心十人」之一，与扑满「账账」搭档同行。讨债时雷厉风行，却总在算盘之外多替人想一步。' },

  { id:1402, name:'阿格莱雅', group:'amphoreus', path:'记忆', element:'雷', star:5, desc:'翁法罗斯「黄金裔」的引线人。以金线维系城邦，也把散落的火种重新串成一条逐火之路。' },
  { id:1407, name:'遐蝶', group:'amphoreus', path:'记忆', element:'量子', star:5, desc:'与死亡同行的黄金裔，触碰之处生机凋零。她一直在找的，是一个能安然拥抱的温度。' },
  { id:1408, name:'白厄', group:'amphoreus', path:'毁灭', element:'物理', star:5, desc:'背负「负世」之任的黄金裔。在 33550336 次永劫回归里接过火种，把打破轮回的希望交给了开拓者。' },
  { id:1413, name:'长夜月', group:'amphoreus', path:'记忆', element:'冰', star:5, desc:'三月七于翁法罗斯显现的另一重身份。她提议以「忘却」斩断铁墓的演算，代价是整个世界的历史。' },
  { id:1415, name:'昔涟', group:'amphoreus', path:'记忆', element:'冰', star:5, desc:'与白厄共铸永劫回归的少女。在无数次轮回里，守着那一页始终不肯翻篇的往事。' },

  { id:1501, name:'火花', group:'arcadia', path:'欢愉', element:'火', star:5, desc:'二相乐园最具影响力的网红。以「认知修正」把整座绘世学院变成自己的舞台，笑着重写了所有人的记忆。' },
  { id:1503, name:'真珠', group:'arcadia', path:'欢愉', element:'冰', star:5, desc:'公司战略投资部高管、石心十人之一，二相乐园首席执行官。她习惯从一幅画开始，测算世界的价值。' },
  { id:1504, name:'不死途', group:'arcadia', path:'巡猎', element:'雷', star:5, desc:'游走于二相乐园的私家侦探。冷静地追索「告死魔」与十五年前那场血涂游戏留下的旧案。' },
  { id:1505, name:'绯英', group:'arcadia', path:'欢愉', element:'物理', star:5, desc:'幻月秘庭的管理者。她打破禁忌，将愿力导向开拓者，使其正式踏上「欢愉」命途。' }
];

/* ---------- 术语 ---------- */
const GLOSSARY = [
  ['无名客','追随「开拓」星神足迹、登上星穹列车的旅人统称。阿基维利陨落后，仍有人替祂把银轨铺向更远处。'],
  ['令使','被星神直接注视并赐予力量的极少数命途行者，拥有堪比天灾的权能。「绝灭大君」即「毁灭」的令使。'],
  ['星核 · 万界之癌','阻塞星轨、侵蚀世界本源的神秘物体。裂界、寒潮、魔阴身等灾厄多与之相关，来历至今成谜。'],
  ['光锥','流光忆庭以「忆质」凝固他人记忆而成的结晶，命途行者可借其中的故事施展力量。'],
  ['模拟宇宙','黑塔与数位天才俱乐部成员共同搭建的演算实验，用近乎游戏的形式推演星神与命途的种种可能。'],
  ['天才俱乐部','「智识」星神博识尊邀请的顶级天才组织，仅设 84 席。黑塔为第 83 席，鲁珀特、赞达尔亦在其列。'],
  ['石心十人','星际和平公司战略投资部的最高层，每人持一枚「基石」，分享「存护」令使的权能。'],
  ['绝灭大君','「毁灭」纳努克麾下的令使，各自统率一支反物质军团。「铁墓」「归寂」皆属此列。'],
  ['琥珀纪','以「存护」星神克里珀每一次挥锤为基准的宇宙纪年。一锤定音即为一纪，短则数百年，长可逾万年。'],
  ['黄金裔 · 逐火','翁法罗斯承接泰坦火种的英雄们，以收集火种、完成「再创世」为名的漫长史诗。'],
  ['永劫回归','白厄与昔涟为阻止「铁墓」破壳而铸就的死循环。同一段逐火之旅，被重复演算了 33550336 次。'],
  ['幻月游戏','二相乐园每逢幻月满盈举行的神赐仪式。谒者彼此竞逐，胜者可谒见阿哈，暂借「欢愉」权能一分钟。'],
  ['幻造 · 愿力','二相乐园独有的创作仪式：以绘制与愿力，将「可能存在之物」带入现实。由此诞下的生灵称作幻造种。'],
  ['倏忽 · 丰饶孽物','「丰饶」赐予的长生失控后化作的不死异形。仙舟联盟世代追猎的目标，也是其长生之咒的源头。'],
  ['求药使 · 承露天人','「求药使」为求长生良药横渡星海；「承露天人」则是药王秘传信徒渴求的、以丰饶之力重塑的真体。'],
  ['纯美骑士团','拱卫「纯美」星神伊德莉拉的古典骑士团，以淬炼无瑕的肉体、智慧与精神为准则。星神失踪后分崩离析。']
];

/* ============================================================
   通用工具
   ============================================================ */
const $ = (s, r=document) => r.querySelector(s);
const $$ = (s, r=document) => [...r.querySelectorAll(s)];

/* ============================================================
   渲染：星神画像
   ============================================================ */
function renderAeonGallery(){
  const grid = $('#aeonGrid');
  if(!grid) return;
  grid.innerHTML = AEONS.map((a,i) => `
    <button class="aeon-card reveal" data-aeon="${a.key}" style="transition-delay:${(i%4)*55}ms" aria-label="查看星神 ${a.name} 的画像">
      <div class="aeon-art">
        <span class="aeon-halo"></span>
        <img src="assets/aeons/${a.key}.webp" alt="${a.name} 官方画像" loading="lazy">
        <span class="aeon-status ${a.status==='现存'?'live':'gone'}">${a.status}</span>
      </div>
      <div class="aeon-meta">
        <span class="aeon-path">${a.path}</span>
        <h3>${a.name}</h3>
      </div>
    </button>`).join('');
  $('#aeonCount').textContent = `— 官方已公布画像的 ${AEONS.length} 位星神 · 点击画像查看资料 —`;
  grid.addEventListener('click', e=>{
    const card = e.target.closest('.aeon-card');
    if(card) openAeonModal(card.dataset.aeon);
  });
}

/* ============================================================
   渲染：命途
   ============================================================ */
function renderPaths(){
  const grid = $('#pathsGrid');
  if(!grid) return;
  grid.innerHTML = PATHS.map((p,i) => `
    <article class="path-card reveal" style="transition-delay:${(i%5)*60}ms">
      <span class="path-idx">${String(i+1).padStart(2,'0')}</span>
      <img class="path-icon" src="assets/paths/${p.icon}.webp" alt="${p.name}命途图标" loading="lazy">
      <h3>${p.name}</h3>
      <div class="path-aeon">「${p.aeon}」</div>
      <p>${p.desc}</p>
      ${p.fallen ? `<div class="path-fallen">✦ ${p.fallen}</div>` : ''}
      ${p.aeonImg ? `<button class="path-to-aeon" data-aeon="${p.aeonImg}">查看星神画像 →</button>` : '<div class="path-no-aeon">官方未公布画像</div>'}
    </article>`).join('');
  grid.addEventListener('click', e=>{
    const b = e.target.closest('.path-to-aeon');
    if(b) openAeonModal(b.dataset.aeon);
  });

  const other = $('#otherPaths');
  if(other) other.innerHTML = OTHER_PATHS.map(([n,a]) =>
    `<div class="other-chip"><b>${n}</b>${a}</div>`).join('');
}

/* ============================================================
   渲染：航图
   ============================================================ */
function renderWorlds(){
  const tl = $('#timeline');
  if(!tl) return;
  tl.innerHTML = WORLDS.map((w,i) => `
    <div class="world-item reveal">
      <div class="world-card">
        <div>
          <div class="world-ver">STOP ${String(i+1).padStart(2,'0')}　·　${w.ver}</div>
          <h3>${w.name}<span>${w.sub}</span></h3>
          <div class="world-en">${w.en}</div>
          <p>${w.desc}</p>
          <div class="world-tags">${w.tags.map(t=>`<span>${t}</span>`).join('')}</div>
        </div>
        <div class="world-faces">
          ${w.faces.map(id=>`<img src="assets/characters/${id}.webp" alt="" loading="lazy">`).join('')}
        </div>
      </div>
    </div>`).join('');
}

/* ============================================================
   渲染：势力
   ============================================================ */
function personHTML(p){
  if(p.id) return `<button class="person-chip" data-person="${p.id}" title="查看 ${p.n} 的资料">
      <span class="person-av"><img src="assets/characters/${p.id}.webp" alt="" loading="lazy"></span><span>${p.n}</span></button>`;
  if(p.aeon) return `<button class="person-chip" data-aeon-person="${p.aeon}" title="查看星神画像">
      <span class="person-av aeon"><img src="assets/aeons/${p.aeon}.webp" alt="" loading="lazy"></span><span>${p.n}</span></button>`;
  return `<span class="person-chip static"><span class="person-av txt">✧</span><span>${p.n}</span></span>`;
}

function renderFactions(){
  const bar = $('#factionFilter');
  const grid = $('#factionGrid');
  if(!grid) return;
  const keys = ['all', ...new Set(FACTIONS.map(f=>f.path))];
  if(bar){
    bar.innerHTML = keys.map((k,i)=>{
      const n = k==='all' ? '全部势力' : k;
      const c = k==='all' ? FACTIONS.length : FACTIONS.filter(f=>f.path===k).length;
      return `<button class="filter-btn${i===0?' active':''}" data-fpath="${k}">${n} <span style="opacity:.55">${c}</span></button>`;
    }).join('');
    bar.addEventListener('click', e=>{
      const btn = e.target.closest('.filter-btn');
      if(!btn) return;
      $$('.filter-btn', bar).forEach(b=>b.classList.remove('active'));
      btn.classList.add('active');
      renderFactionCards(btn.dataset.fpath);
    });
  }
  renderFactionCards('all');
}

function renderFactionCards(key){
  const grid = $('#factionGrid');
  if(!grid) return;
  const list = key==='all' ? FACTIONS : FACTIONS.filter(f=>f.path===key);
  grid.innerHTML = list.map((f,i) => `
    <article class="faction-card reveal" style="transition-delay:${Math.min(i,6)*45}ms">
      <div class="faction-sigil">${f.sigil}</div>
      <div class="faction-body">
        <h3>${f.name}</h3>
        <div class="faction-path">信奉 / ${f.path}</div>
        <p>${f.desc}</p>
        <div class="faction-people">
          <div class="fp-label">代表人物</div>
          <div class="fp-list">${f.people.map(personHTML).join('')}</div>
          ${f.note ? `<div class="fp-note">※ ${f.note}</div>` : ''}
        </div>
      </div>
    </article>`).join('');
  observeReveal('#factionGrid');
  checkReveal();
  const cnt = $('#factionCount');
  if(cnt) cnt.textContent = `— 当前显示 ${list.length} / ${FACTIONS.length} 个势力 · 点击人物头像查看资料 —`;
  grid.onclick = e => {
    const p = e.target.closest('[data-person]');
    if(p) openModal(p.dataset.person);
    const a = e.target.closest('[data-aeon-person]');
    if(a) openAeonModal(a.dataset.aeonPerson);
  };
}

/* ============================================================
   渲染：人物图鉴
   ============================================================ */
function renderFilters(){
  const bar = $('#filterBar');
  if(!bar) return;
  bar.innerHTML = GROUPS.map(([k,n],i) => {
    const count = k==='all' ? CHARS.length : CHARS.filter(c=>c.group===k).length;
    return `<button class="filter-btn${i===0?' active':''}" data-group="${k}">${n} <span style="opacity:.55">${count}</span></button>`;
  }).join('');
  bar.addEventListener('click', e => {
    const btn = e.target.closest('.filter-btn');
    if(!btn) return;
    $$('.filter-btn', bar).forEach(b=>b.classList.remove('active'));
    btn.classList.add('active');
    renderChars(btn.dataset.group);
  });
}

function renderChars(group='all'){
  const grid = $('#charGrid');
  if(!grid) return;
  const list = group==='all' ? CHARS : CHARS.filter(c=>c.group===group);
  grid.innerHTML = list.map((c,i) => `
    <button class="char-card" data-id="${c.id}" style="transition-delay:${Math.min(i,12)*26}ms" aria-label="查看 ${c.name} 的资料">
      <div class="char-portrait">
        <span class="char-rarity">${'★'.repeat(c.star)}</span>
        <img src="assets/characters/${c.id}.webp" alt="${c.name} 立绘" loading="lazy">
      </div>
      <div class="char-info">
        <h4>${c.name}</h4>
        <p>${c.path} · ${c.element}</p>
      </div>
    </button>`).join('');
  const cnt = $('#charCount');
  if(cnt) cnt.textContent = `— 共 ${list.length} 位角色 · 点击卡片查看资料 —`;
  observeReveal('#charGrid');
}

/* ============================================================
   渲染：术语
   ============================================================ */
function renderGlossary(){
  const grid = $('#glossaryGrid');
  if(!grid) return;
  grid.innerHTML = GLOSSARY.map(([t,d],i) => `
    <article class="gloss-card reveal">
      <span class="g-num">${String(i+1).padStart(2,'0')}</span>
      <h4>${t}</h4>
      <p>${d}</p>
    </article>`).join('');
}

/* ============================================================
   弹窗（人物 / 星神），由脚本注入，所有页面可用
   ============================================================ */
function ensureModal(){
  if($('#charModal')) return;
  const el = document.createElement('div');
  el.className = 'modal'; el.id = 'charModal'; el.setAttribute('aria-hidden','true');
  el.innerHTML = `<div class="modal-mask" data-close></div>
    <div class="modal-panel">
      <button class="modal-close" data-close aria-label="关闭">×</button>
      <div class="modal-art"><img id="modalImg" src="" alt=""></div>
      <div class="modal-info">
        <div class="modal-kicker" id="modalKicker"></div>
        <h3 id="modalName"></h3>
        <div class="modal-tags" id="modalTags"></div>
        <p id="modalDesc"></p>
        <div class="modal-line"></div>
        <div class="modal-meta" id="modalMeta"></div>
      </div>
    </div>`;
  document.body.appendChild(el);
  el.addEventListener('click', e => { if(e.target.closest('[data-close]')) closeModal(); });
}
function ensureAeonModal(){
  if($('#aeonModal')) return;
  const el = document.createElement('div');
  el.className = 'modal aeon-modal'; el.id = 'aeonModal'; el.setAttribute('aria-hidden','true');
  el.innerHTML = `<div class="modal-mask" data-close></div>
    <div class="modal-panel aeon-panel">
      <button class="modal-close" data-close aria-label="关闭">×</button>
      <div class="aeon-modal-art"><img id="aeonModalImg" src="" alt=""></div>
      <div class="modal-info">
        <div class="modal-kicker">AEON PORTRAIT / OFFICIAL ART</div>
        <h3 id="aeonModalName"></h3>
        <div class="modal-tags" id="aeonModalTags"></div>
        <p id="aeonModalDesc"></p>
        <div class="modal-line"></div>
        <div class="modal-meta">画像来源 / <b>StarRailRes · 模拟宇宙星神图鉴</b><br>著作权 / <b>上海米哈游海渊城科技有限公司</b></div>
      </div>
    </div>`;
  document.body.appendChild(el);
  el.addEventListener('click', e => { if(e.target.closest('[data-close]')) closeAeonModal(); });
}
function showModal(el){ el.classList.add('open'); el.setAttribute('aria-hidden','false'); document.body.style.overflow='hidden'; }
function hideModal(el){ el.classList.remove('open'); el.setAttribute('aria-hidden','true'); document.body.style.overflow=''; }

function openModal(id){
  const c = CHARS.find(x=>x.id===Number(id));
  if(!c) return;
  ensureModal();
  $('#modalImg').src = `assets/characters/${c.id}.webp`;
  $('#modalImg').alt = `${c.name} 立绘`;
  $('#modalKicker').textContent = `CHARACTER FILE / ${c.id}`;
  $('#modalName').textContent = c.name;
  $('#modalTags').innerHTML = [c.path, c.element, `${c.star} 星`, GROUP_NAME[c.group]].map(t=>`<span>${t}</span>`).join('');
  $('#modalDesc').textContent = c.desc;
  $('#modalMeta').innerHTML =
    `所属阵营 / <b>${WORLD_OF_GROUP[c.group]}</b><br>` +
    `命途 · 元素 / <b>${c.path} · ${c.element}</b><br>` +
    `立绘来源 / <b>StarRailRes 开源素材库</b>`;
  showModal($('#charModal'));
}
function closeModal(){ const m=$('#charModal'); if(m) hideModal(m); }

function openAeonModal(key){
  const a = AEONS.find(x=>x.key===key);
  if(!a) return;
  ensureAeonModal();
  $('#aeonModalImg').src = `assets/aeons/${a.key}.webp`;
  $('#aeonModalImg').alt = `${a.name} 官方画像`;
  $('#aeonModalName').textContent = a.name;
  $('#aeonModalTags').innerHTML = [a.path, a.status, '星神'].map(t=>`<span>${t}</span>`).join('');
  $('#aeonModalDesc').textContent = a.desc;
  showModal($('#aeonModal'));
}
function closeAeonModal(){ const m=$('#aeonModal'); if(m) hideModal(m); }

document.addEventListener('keydown', e => {
  if(e.key==='Escape'){ closeModal(); closeAeonModal(); }
});

/* ============================================================
   滚动显现 / 导航 / 返回顶部
   ============================================================ */
let revealObserver = null;
function observeReveal(scope){
  if(!revealObserver){
    revealObserver = new IntersectionObserver(entries => {
      entries.forEach(en => {
        if(en.isIntersecting){ en.target.classList.add('in'); revealObserver.unobserve(en.target); }
      });
    }, { threshold:.08, rootMargin:'0px 0px -40px 0px' });
  }
  $$(scope ? `${scope} .reveal, ${scope} .char-card` : '.reveal').forEach(el=>{
    if(!el.classList.contains('in')) revealObserver.observe(el);
  });
}
let revealQueued = false;
function checkReveal(){
  $$('.reveal:not(.in), .char-card:not(.in)').forEach(el=>{
    const r = el.getBoundingClientRect();
    if(r.top < innerHeight + 80 && r.bottom > -80) el.classList.add('in');
  });
}
function queueReveal(){
  if(revealQueued) return;
  revealQueued = true;
  requestAnimationFrame(()=>{ revealQueued = false; checkReveal(); });
}

const topbar = $('#topbar');
const backTop = $('#backTop');
function onScroll(){
  const y = window.scrollY;
  topbar.classList.toggle('scrolled', y>20);
  backTop.classList.toggle('show', y>600);
  queueReveal();
}
window.addEventListener('scroll', onScroll, {passive:true});
backTop.addEventListener('click', ()=>window.scrollTo({top:0,behavior:'smooth'}));

/* 当前页高亮 */
$$('.nav-link').forEach(a=>a.classList.toggle('active', a.dataset.page===PAGE));

const menuBtn = $('#menuBtn');
const nav = $('#nav');
menuBtn.addEventListener('click', ()=>{
  menuBtn.classList.toggle('open');
  nav.classList.toggle('open');
});
nav.addEventListener('click', ()=>{ menuBtn.classList.remove('open'); nav.classList.remove('open'); });

/* ============================================================
   星空画布
   ============================================================ */
function initStars(){
  const canvas = $('#starfield');
  const ctx = canvas.getContext('2d');
  let W=0, H=0, dpr=1, stars=[], meteors=[], tick=0;
  function resize(){
    dpr = Math.min(window.devicePixelRatio||1, 2);
    W = canvas.width = Math.floor(innerWidth*dpr);
    H = canvas.height = Math.floor(innerHeight*dpr);
    canvas.style.width = innerWidth+'px';
    canvas.style.height = innerHeight+'px';
    const n = Math.min(170, Math.max(70, Math.floor(innerWidth/9)));
    stars = Array.from({length:n}, ()=>({
      x:Math.random()*W, y:Math.random()*H,
      r:(Math.random()*1.25+.25)*dpr,
      a:Math.random()*.65+.15,
      sp:(Math.random()*.014+.004),
      ph:Math.random()*Math.PI*2,
      hue:Math.random()<.16 ? 'gold' : (Math.random()<.2 ? 'violet' : 'white')
    }));
  }
  function draw(){
    ctx.clearRect(0,0,W,H);
    tick++;
    const off = (window.scrollY||0)*.045*dpr;
    for(const s of stars){
      const y = (s.y - off % H + H) % H;
      const alpha = s.a * (.6 + .4*Math.sin(tick*s.sp + s.ph));
      ctx.beginPath(); ctx.arc(s.x, y, s.r, 0, Math.PI*2);
      ctx.fillStyle = s.hue==='gold' ? `rgba(233,200,131,${alpha})`
                    : s.hue==='violet' ? `rgba(175,160,255,${alpha})`
                    : `rgba(226,234,255,${alpha})`;
      ctx.fill();
      if(s.r>1.25*dpr){
        ctx.beginPath(); ctx.arc(s.x, y, s.r*3.2, 0, Math.PI*2);
        ctx.fillStyle = `rgba(200,210,255,${alpha*.055})`; ctx.fill();
      }
    }
    if(Math.random()<.0035 && meteors.length<2){
      meteors.push({ x:Math.random()*W*.7+W*.15, y:Math.random()*H*.4, len:(90+Math.random()*110)*dpr, life:1 });
    }
    meteors = meteors.filter(m=>m.life>0);
    for(const m of meteors){
      const g = ctx.createLinearGradient(m.x, m.y, m.x-m.len*.75, m.y+m.len*.55);
      g.addColorStop(0, `rgba(255,240,205,${m.life*.75})`);
      g.addColorStop(1, 'rgba(255,240,205,0)');
      ctx.strokeStyle = g; ctx.lineWidth = 1.2*dpr;
      ctx.beginPath(); ctx.moveTo(m.x, m.y); ctx.lineTo(m.x-m.len*.75, m.y+m.len*.55); ctx.stroke();
      m.x -= 4*dpr; m.y += 3*dpr; m.life -= .018;
    }
    requestAnimationFrame(draw);
  }
  resize();
  window.addEventListener('resize', resize);
  if(!window.matchMedia('(prefers-reduced-motion: reduce)').matches) draw();
  else {
    for(const s of stars){ ctx.beginPath(); ctx.arc(s.x,s.y,s.r,0,Math.PI*2); ctx.fillStyle=`rgba(226,234,255,${s.a})`; ctx.fill(); }
  }
}

/* 主视觉轻微视差 */
function initParallax(){
  const fig = $('#heroFigure');
  if(!fig || window.matchMedia('(max-width:860px)').matches) return;
  document.addEventListener('mousemove', e=>{
    const x = (e.clientX/innerWidth-.5)*16;
    const y = (e.clientY/innerHeight-.5)*12;
    fig.style.translate = `${x}px ${y}px`;
  }, {passive:true});
}

/* ============================================================
   启动（按页面存在的容器决定是否渲染）
   ============================================================ */
renderAeonGallery();
renderPaths();
renderWorlds();
renderFactions();
renderFilters();
renderChars();
renderGlossary();

const charGrid = $('#charGrid');
if(charGrid) charGrid.addEventListener('click', e => {
  const card = e.target.closest('.char-card');
  if(card) openModal(card.dataset.id);
});

observeReveal();
onScroll();
checkReveal();
initStars();
initParallax();
