const defaultEmojiIconGroup = [
  {
    id: 1,
    name: '微笑',
    code: 'U+1F60A',
  },
  {
    id: 2,
    name: '撇嘴',
    code: 'U+1F609',
  },
  {
    id: 3,
    name: '色',
    code: 'U+1F60E',
  },
  {
    id: 4,
    name: '发呆',
    code: 'U+1F62D',
  },
  {
    id: 5,
    name: '得意',
    code: 'U+1F60C',
  },
  {
    id: 6,
    name: '流泪',
    code: 'U+1F621',
  },
  {
    id: 7,
    name: '害羞',
    code: 'U+1F60D',
  },
  {
    id: 8,
    name: '闭嘴',
    code: 'U+1F630',
  },
  {
    id: 9,
    name: '睡',
    code: 'U+1F634',
  },
  {
    id: 10,
    name: '大哭',
    code: 'U+1F62D',
  },
  {
    id: 11,
    name: '尴尬',
    code: 'U+1F616',
  },
  {
    id: 12,
    name: '发怒',
    code: 'U+1F620',
  },
  {
    id: 13,
    name: '调皮',
    code: 'U+1F609',
  },
  {
    id: 14,
    name: '呲牙',
    code: 'U+1F63E',
  },
  {
    id: 15,
    name: '惊讶',
    code: 'U+1F62E',
  },
  {
    id: 16,
    name: '难过',
    code: 'U+1F625',
  },
  {
    id: 17,
    name: '酷',
    code: 'U+1F60A',
  },
  {
    id: 18,
    name: '冷汗',
    code: 'U+1F637',
  },
  {
    id: 19,
    name: '抓狂',
    code: 'U+1F631',
  },
  {
    id: 20,
    name: '吐',
    code: 'U+1F62B',
  },
  {
    id: 21,
    name: '偷笑',
    code: 'U+1F60F',
  },
  {
    id: 22,
    name: '可爱',
    code: 'U+1F60A',
  },
  {
    id: 23,
    name: '白眼',
    code: 'U+1F638',
  },
  {
    id: 24,
    name: '傲慢',
    code: 'U+1F62C',
  },
  {
    id: 25,
    name: '饥饿',
    code: 'U+1F60B',
  },
  {
    id: 26,
    name: '困',
    code: 'U+1F615',
  },
  {
    id: 27,
    name: '惊恐',
    code: 'U+1F623',
  },
  {
    id: 28,
    name: '流汗',
    code: 'U+1F62A',
  },
  {
    id: 29,
    name: '憨笑',
    code: 'U+1F606',
  },
  {
    id: 30,
    name: '悠闲',
    code: 'U+1F613',
  },
  {
    id: 31,
    name: '奋斗',
    code: 'U+1F60E',
  },
  {
    id: 32,
    name: '咒骂',
    code: 'U+1F621',
  },
  {
    id: 33,
    name: '疑问',
    code: 'U+1F615',
  },
  {
    id: 34,
    name: '嘘',
    code: 'U+1F62C',
  },
  {
    id: 35,
    name: '晕',
    code: 'U+1F629',
  },
  {
    id: 36,
    name: '折磨',
    code: 'U+1F62D',
  },
  {
    id: 37,
    name: '衰',
    code: 'U+1F633',
  },
  {
    id: 38,
    name: '骷髅',
    code: 'U+1F480',
  },
  {
    id: 39,
    name: '敲打',
    code: 'U+1F48F',
  },
  {
    id: 40,
    name: '再见',
    code: 'U+1F63A',
  },
  {
    id: 41,
    name: '擦汗',
    code: 'U+1F637',
  },
  {
    id: 42,
    name: '抠鼻',
    code: 'U+1F481',
  },
  {
    id: 43,
    name: '鼓掌',
    code: 'U+1F44D',
  },
  {
    id: 44,
    name: '糗大了',
    code: 'U+1F92F',
  },
  {
    id: 45,
    name: '坏笑',
    code: 'U+1F64A',
  },
  {
    id: 46,
    name: '左哼哼',
    code: 'U+1F917',
  },
  {
    id: 47,
    name: '右哼哼',
    code: 'U+1F917',
  },
  {
    id: 48,
    name: '哈欠',
    code: 'U+1F617',
  },
  {
    id: 49,
    name: '鄙视',
    code: 'U+1F60D',
  },
  {
    id: 50,
    name: '委屈',
    code: 'U+1F614',
  },
  {
    id: 51,
    name: '快哭了',
    code: 'U+1F621',
  },
  {
    id: 52,
    name: '阴险',
    code: 'U+1F628',
  },
  {
    id: 53,
    name: '亲亲',
    code: 'U+1F496',
  },
  {
    id: 54,
    name: '吓',
    code: 'U+1F631',
  },
  {
    id: 55,
    name: '可怜',
    code: 'U+1F626',
  },
  {
    id: 56,
    name: '菜刀',
    code: 'U+1F9E9',
  },
  {
    id: 57,
    name: '啤酒',
    code: 'U+1F37A',
  },
  {
    id: 58,
    name: '篮球',
    code: 'U+26BD',
  },
  {
    id: 59,
    name: '乒乓',
    code: 'U+2653',
  },
  {
    id: 60,
    name: '示爱',
    code: 'U+1F487',
  },
  {
    id: 61,
    name: '瓢虫',
    code: 'U+1F352',
  },
  {
    id: 62,
    name: '抱拳',
    code: 'U+1F44A',
  },
  {
    id: 63,
    name: '勾引',
    code: 'U+1F493',
  },
  {
    id: 64,
    name: '拳头',
    code: 'U+1F44F',
  },
  {
    id: 65,
    name: '差劲',
    code: 'U+1F610',
  },
  {
    id: 66,
    name: '爱你',
    code: 'U+1F48B',
  },
  {
    id: 67,
    name: 'NO',
    code: 'U+1F645',
  },
  {
    id: 68,
    name: 'OK',
    code: 'U+1F646',
  },
  {
    id: 69,
    name: '转圈',
    code: 'U+1F601',
  },
  {
    id: 70,
    name: '磕头',
    code: 'U+1F61E',
  },
  {
    id: 71,
    name: '回头',
    code: 'U+1F61D',
  },
  {
    id: 72,
    name: '跳绳',
    code: 'U+1F447',
  },
  {
    id: 73,
    name: '激动',
    code: 'U+1F625',
  },
  {
    id: 74,
    name: '街舞',
    code: 'U+1F3A8',
  },
  {
    id: 75,
    name: '献吻',
    code: 'U+1F48F',
  },
  {
    id: 76,
    name: '左太极',
    code: 'U+1F53B',
  },
  {
    id: 77,
    name: '右太极',
    code: 'U+1F53C',
  },
  {
    id: 78,
    name: '双喜',
    code: 'U+1F389',
  },
  {
    id: 79,
    name: '鞭炮',
    code: 'U+1F52B',
  },
  {
    id: 80,
    name: '灯笼',
    code: 'U+1F388',
  },
  {
    id: 81,
    name: '发财',
    code: 'U+1F4B2',
  },
  {
    id: 82,
    name: 'K歌',
    code: 'U+1F3A7',
  },
  {
    id: 83,
    name: '购物',
    code: 'U+1F6CD',
  },
  {
    id: 84,
    name: '邮件',
    code: 'U+1F4E7',
  },
  {
    id: 85,
    name: '帅',
    code: 'U+1F918',
  },
  {
    id: 86,
    name: '喝彩',
    code: 'U+1F48D',
  },
  {
    id: 87,
    name: '祈祷',
    code: 'U+1F64F',
  },
  {
    id: 88,
    name: '爆筋',
    code: 'U+1F3A1',
  },
  {
    id: 89,
    name: '棒棒糖',
    code: 'U+1F377',
  },
  {
    id: 90,
    name: '喝奶',
    code: 'U+1F60F',
  },
  {
    id: 91,
    name: '下面',
    code: 'U+1F445',
  },
  {
    id: 92,
    name: '香蕉',
    code: 'U+1F34E',
  },
  {
    id: 93,
    name: '飞机',
    code: 'U+2708',
  },
  {
    id: 94,
    name: '开车',
    code: 'U+1F682',
  },
  {
    id: 95,
    name: '高铁',
    code: 'U+1F684',
  },
]
export default defaultEmojiIconGroup
