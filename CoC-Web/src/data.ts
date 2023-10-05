import { characteristic_type_enum, cocCharacter, navItem } from "./datastructure";

export const extendedJobList: string[] = ["自定义职业","会计师","杂技演员","演员-戏剧演员","演员-电影演员","事务所侦探、保安","精神病医生（古典）","动物训练师","文物学家（原作向）","古董商","考古学家（原作向）","建筑师","艺术家","精神病院看护","运动员","作家（原作向）","酒保","猎人","书商","赏金猎人","拳击手、摔跤手","管家、男仆、女仆","神职人员","程序员、电子工程师（现代）","黑客/骇客（现代）","牛仔","工匠","罪犯-刺客","罪犯-银行劫匪","罪犯-打手、暴徒","罪犯-窃贼","罪犯-欺诈师","罪犯-独行罪犯","罪犯-女飞贼（古典）","罪犯-赃物贩子","罪犯-赝造者","罪犯-走私者","罪犯-混混","教团首领","除魅师（现代）","设计师","业余艺术爱好者（原作向）","潜水员","医生（原作向）","流浪者","司机-私人司机","司机-司机","司机-出租车司机","编辑","政府官员","工程师","艺人","探险家（古典）","农民","联邦探员","消防员","驻外记者","法医","赌徒","黑帮-黑帮老大","黑帮-马仔","绅士、淑女","游民","勤杂护工","记者(原作向)-调查记者","记者(原作向)-通讯记者","法官","实验室助理","工人-非熟练工人","工人-伐木工","工人-矿工","律师","图书馆管理员（原作向）","技师","军官","传教士","登山家","博物馆管理员","音乐家","护士","神秘学家","旅行家","超心理学家","药剂师","摄影师-摄影师","摄影师-摄影记者","飞行员-飞行员","飞行员-特技飞行员（古典）","警方(原作向)-警探","警方(原作向)-巡警","私家侦探","教授（原作向）","淘金客","性工作者","精神病学家","心理学家、精神分析学家","研究员","海员-军舰海员","海员-民船海员","推销员","科学家","秘书","店老板","士兵、海军陆战队士兵","间谍","学生、实习生","替身演员","部落成员","殡葬师","工会活动家","服务生","白领工人-职员、主管","白领工人-中高层管理人员","狂热者","饲养员","大使","运动员（游泳/潜水）","运动员（高尔夫）","运动员（网球）","运动员（田径）","发言人","保释担保人","神职人员(天主教牧师)","神职人员(新教牧师)","神职人员(犹太教拉比)","专栏作家","社会主义者/激进主义者","撰稿人","罪犯（赌博庄家）","罪犯（放高利贷者）","罪犯（扒手）","罪犯（地下钱庄）","罪犯（黑律师）","牙医","外科医生/内科医生","整形医生","司机-公交司机","实地调研员","电影摄制人员","司法科学家","运动经理","商船队船员","古典音乐家","赛车手/赛艇手","电台播音员","推销员（圣经推销员）","推销员（旅行推销员）","小企业家","舞台工作人员","证券经纪人","勘测员","电话接线员","星探","医疗技术员","队医","寻宝猎人","西部治安官","暴走族","神职人员(和尚,尼姑)","神职人员(神官,巫女)","风水师","家传降妖人","高中生(教育60以下)","市子（盲人）","言灵师/阴阳师","炼丹师","外语教师","非法移民","相扑力士(SIZ>80,STR>70)","渔民","心理治疗师","女学生","寄居学生","动物辅助治疗师","急诊医生/救援队员","密医","科学搜查研究员","山岳救援队员","舞者","服装设计师","海上自卫队员","海警","陆上自卫队员","私人军事公司成员","冒险家教授","评论家","偶像","歌手","搞笑艺人","运动员艺人","播音员","主持人","电视解说员","网络明星","经纪人","捉鬼人","占卜师、灵媒师","机械师","厨师","网络犯罪者","佣兵","自宅警备员","壮汉保镖","游戏测试员","交际花","考古学家","贵族","艺术家","作家","马车夫","牧师","咨询侦探","工匠","罪犯","业余艺术爱好者","艺人","退役军官","探险家","私家侦探","记者","劳工","律师","医生","警察","教授/学者","科学家","佣人","店主","士兵","密探"]

export const userNavList: navItem[] = [
    {
        name: "参团记录",
        iconstring: "event",
        url: "record",
        color: "black-color"
    },{
        name: "我的角色",
        iconstring: "face",
        url: "character",
        color: "black-color"
    },{
        name: "账号设置",
        iconstring: "settings",
        url: "settings",
        color: "black-color"
    },{
        name: "登出账号",
        iconstring: "logout",
        url: "logout",
        color: "red-color"
    }
]

export const navList: navItem[] = [
    {
        name: "CoC指南",
        iconstring: "help_center",
        url: "guide",
        color: "black-color"
    },{
        name: "浏览模组",
        iconstring: "grid_view",
        url: "modules",
        color: "black-color"
    },{
        name: "报名/发起新团",
        iconstring: "edit_calendar",
        url: "recruit",
        color: "black-color"
    },{
        name: "新建角色",
        iconstring: "add_reaction",
        url: "addchar",
        color: "black-color"
    },{
        name: "关于CoZ",
        iconstring: "info",
        url: "about",
        color: "black-color"
    },{
        name: "登出账号",
        iconstring: "logout",
        url: "logout",
        color: "red-color"
    }
]

export const cocNewCharInfo: cocCharacter = {
    basicInfo: [
        {
            characteristic_name: "name",
            characteristic_display: "姓名",
            characteristic_type: characteristic_type_enum.string 
        },{
            characteristic_name: "time",
            characteristic_display: "时代",
            characteristic_type: characteristic_type_enum.dropdown,
            characteristic_dropdown: [
                "近代",
                "现代"
            ] 
        },{
            characteristic_name: "job-selection",
            characteristic_display: "职业",
            characteristic_type: characteristic_type_enum.select_window,
            characteristic_dropdown: extendedJobList
        },{
            characteristic_name: "age",
            characteristic_display: "年龄",
            characteristic_type: characteristic_type_enum.number 
        },{
            characteristic_name: "sex",
            characteristic_display: "性别",
            characteristic_type: characteristic_type_enum.dropdown,
            characteristic_dropdown: [
                "男性",
                "女性",
                "非二元性别"
            ]
        },{
            characteristic_name: "resident",
            characteristic_display: "居住地",
            characteristic_type: characteristic_type_enum.string 
        },{
            characteristic_name: "hometown",
            characteristic_display: "故乡",
            characteristic_type: characteristic_type_enum.string 
        }
    ],
    properties: [
        {
            characteristic_name: "str",
            characteristic_display: "力量",
        },{
            characteristic_name: "con",
            characteristic_display: "体质",
        },{
            characteristic_name: "siz",
            characteristic_display: "体型",
        },{
            characteristic_name: "dex",
            characteristic_display: "敏捷",
        },{
            characteristic_name: "app",
            characteristic_display: "外貌",
        },{
            characteristic_name: "int",
            characteristic_display: "智力/灵感",
        },{
            characteristic_name: "pow",
            characteristic_display: "意志",
        },{
            characteristic_name: "edu",
            characteristic_display: "教育",
        },{
            characteristic_name: "luck",
            characteristic_display: "幸运",
        }
    ],
    skills: {
        characteristic_name: "skill",
        characteristic_type: characteristic_type_enum.multi_dropdown_no,
        characteristic_display: "技能",
        characteristic_dropdown: [
            "会计","人类学","估价","考古学","技艺①","技艺②","技艺③","取悦","攀爬","计算机使用Ω","信用评级","克苏鲁神话","乔装","闪避","汽车驾驶","电气维修","电子学Ω","话术","格斗：斗殴","格斗①","格斗②","格斗③","射击：手枪","射击①","射击②","射击③","急救","历史","恐吓","跳跃","外语①","外语②","外语③","母语","法律","图书馆使用","聆听","锁匠","机械维修","医学","博物学","导航","神秘学","操作重型机械","说服","驾驶：","精神分析","心理学","骑术","科学①","科学②","科学③","妙手","侦查","潜行","生存：","游泳","投掷","追踪","驯兽","潜水","爆破","读唇","催眠","炮术","学识："
        ]
    },
    weapons: {
        characteristic_name: "weapon",
        characteristic_type: characteristic_type_enum.multi_dropdown_str,
        characteristic_display: "武器",
        characteristic_dropdown: [
            "弓箭","黄铜指虎","长鞭","燃烧的火把","电锯","包皮金属棍(甩棍、大头棍、护身棒)","大型棍状物(棒球棍、板球棒、拨火棍等)","小型棍状物(警棍等)","弩","绞具","手斧/镰刀","大型刀具(甘蔗刀等)","中型刀具(切肉菜刀等)","小型刀具(弹簧折叠刀等)","220v通电导线","催泪瓦斯","双节棍","投石","手里剑","矛、骑士长枪","投矛","大型剑（马刀）","中型剑（佩剑、重剑）","轻型剑（花剑、剑杖）","电棍、电击枪(接触)","电击枪(远程)","战斗回力镖","伐木斧","遂发枪",".22(5.6mm)小型自动手枪",".25(6.35mm)短口手枪(单管)",".32(7.65mm)左轮手枪",".32(7.65mm)自动手枪",".357 马格南左轮",".38(9mm)左轮手枪",".38(9mm)自动手枪","贝瑞塔 M9","9mm 格洛克 17","9mm 鲁格 P08",".41(10.4mm) 左轮手枪",".44(11.2mm) 马格南左轮手枪",".45(11.43mm) 左轮手枪",".45(11.43mm) 自动手枪","IMI 沙漠之鹰",".58 (14.7mm)1855 年式春田步枪",".22 (5.6mm)栓式枪机步枪",".30 (7.62mm)杠杆式枪机步枪",".45 马提尼·亨利步枪","莫兰上校的气动步枪","加兰德M1、M2步枪","SKS 半自动步枪(56 半)",".303 (7.7mm) 李·恩菲尔德",".30——06 (7.62mm) 栓式枪机步枪",".30——06 (7.62mm) 半自动步枪",".444 (11.28mm) 马林步枪","猎象枪(双管)","20 号霰弹枪(双管)","16 号霰弹枪(双管)","12 号霰弹枪(双管)","12 号霰弹枪(泵动)","12 号霰弹枪(半自动)","12 号霰弹枪(双管,锯短)","10 号霰弹枪(双管)","12 号贝里尼 M3(折叠式枪托)","12 号 SPAS (折叠式枪托)","AK-47 或 AKM","AK-74","巴雷特M82","FN FAL","加利尔突击步枪","M16A2","M4","斯泰尔 AUG","贝雷塔 M70/90","MP18I/MP28II","MP5","MAC-11","蝎式冲锋枪","汤普森冲锋枪","乌兹微型冲锋枪","1882 年式加特林","M1918 式勃朗宁自动步枪","勃朗宁 M1917A1(7.62mm)","布伦轻机枪","路易斯Ⅰ型机枪","GE M134 式 7.62mm 速射机枪","FN 米尼米(5.56mm)，弹夹/弹带","维克斯.303 机枪","莫洛托夫燃烧瓶","信号枪(信号弹枪)","M79 40mm 榴弹发射器","炸药棒","雷管","爆破筒","塑胶炸弹(C4) 100克","手榴弹","81mm迫击炮","75mm野战火炮","120mm坦克炮(稳定)","5英寸舰载炮(稳定)","反步兵地雷","阔剑地雷","火焰喷射器","M72 式单发轻型反坦克炮"
        ]
    }
} 

