const subjects = [
  { cate: 'A', subject: '您精力充沛吗？', reverse: 1 },
  { cate: 'A', subject: '您容易疲乏吗？', reverse: 1 },
  { cate: 'A', subject: '您说话声音低弱无力吗？', reverse: 1 },
  { cate: 'A', subject: '您感到闷闷不乐、情绪低沉吗？', reverse: 1 },
  {
    cate: 'A',
    subject: '您比一般人耐受不了寒冷(冬天的寒冷，夏天的冷空调、电扇等)吗？',
    reverse: 1
  },
  {
    cate: 'A',
    subject: '您能适应外界自然和社会环境的变化吗？'
  },
  { cate: 'A', subject: '您容易失眠吗？', reverse: 1 },
  { cate: 'A', subject: '您容易忘事（健忘）吗？', reverse: 1 },

  { cate: 'B', subject: '您容易疲乏吗？' },
  { cate: 'B', subject: '您容易气短(呼吸短促，接不上气)吗？' },
  { cate: 'B', subject: '您容易心慌吗？' },
  { cate: 'B', subject: '您容易头晕或站起时晕眩吗？' },
  { cate: 'B', subject: '您比别人容易患感冒吗？' },
  { cate: 'B', subject: '您喜欢安静、懒得说话吗？' },
  { cate: 'B', subject: '您说话声音低弱无力吗？' },
  { cate: 'B', subject: '您活动量稍大就容易出虚汗吗？' },

  { cate: 'C', subject: '您手脚发凉吗？' },
  { cate: 'C', subject: '您胃脘部、背部或腰膝部怕冷吗？' },
  { cate: 'C', subject: '您感到怕冷、衣服比别人穿得多吗？' },
  {
    cate: 'C',
    subject: '您比一般人耐受不了寒冷(冬天的寒冷，夏天的冷空调、电扇等)吗？'
  },
  { cate: 'C', subject: '您比别人容易患感冒吗？' },
  {
    cate: 'C',
    subject: '您吃(喝)凉的东西会感到不舒服或者怕吃(喝)凉的东西吗？'
  },
  { cate: 'C', subject: '您受凉或吃(喝)凉的东西后，容易腹泻(拉肚子)吗？' },

  { cate: 'D', subject: '您感到手脚心发热吗？' },
  { cate: 'D', subject: '您感觉身体、脸上发热吗？' },
  { cate: 'D', subject: '您皮肤或口唇干吗？' },
  { cate: 'D', subject: '您口唇的颜色比一般人红吗？' },
  { cate: 'D', subject: '您容易便秘或大便干燥吗？' },
  { cate: 'D', subject: '您面部两颧潮红或偏红吗？' },
  { cate: 'D', subject: '您感到眼睛干涩吗？' },
  { cate: 'D', subject: '您感到口干咽燥、总想喝水吗？' },

  { cate: 'E', subject: '您感到胸闷或腹部胀满吗？' },
  { cate: 'E', subject: '您感到身体沉重不轻松或不爽快吗？' },
  { cate: 'E', subject: '您腹部肥满松软吗？' },
  { cate: 'E', subject: '您有额部油脂分泌多的现象吗？' },
  { cate: 'E', subject: '您上眼睑比别人肿（上眼睑有轻微隆起的现象）吗？' },
  { cate: 'E', subject: '您嘴里有黏黏的感觉吗？' },
  { cate: 'E', subject: '您平时痰多，特别是咽喉部总感到有痰堵着吗？' },
  { cate: 'E', subject: '您舌苔厚腻或有舌苔厚厚的感觉吗？' },

  { cate: 'F', subject: '您面部或鼻部有油腻感或者油亮发光吗？' },
  { cate: 'F', subject: '您易生痤疮或疮疖吗？' },
  { cate: 'F', subject: '您感到口苦或嘴里有异味吗？' },
  { cate: 'F', subject: '您大便黏滞不爽、有解不尽的感觉吗？' },
  { cate: 'F', subject: '您小便时尿道有发热感、尿色浓(深)吗？' },
  { cate: 'F', subject: '您带下色黄(白带颜色发黄)吗？（限女性回答）' },
  { cate: 'F', subject: '您的阴囊部位潮湿吗？ （限男性回答）' },

  {
    cate: 'G',
    subject: '您的皮肤在不知不觉中会出现青紫瘀斑(皮下出血)吗？'
  },
  { cate: 'G', subject: '您两颧部有细微红丝吗？' },
  { cate: 'G', subject: '您身体上有哪里疼痛吗？' },
  { cate: 'G', subject: '您面色晦黯、或容易出现褐斑吗？' },
  { cate: 'G', subject: '您容易有黑眼圈吗？' },
  { cate: 'G', subject: '您容易忘事（健忘）吗？' },
  { cate: 'G', subject: '您口唇颜色偏黯吗？' },

  { cate: 'H', subject: '您感到闷闷不乐、情绪低沉吗？' },
  { cate: 'H', subject: '您容易精神紧张、焦虑不安吗？' },
  { cate: 'H', subject: '您多愁善感、感情脆弱吗？' },
  { cate: 'H', subject: '您容易感到害怕或受到惊吓吗？' },
  { cate: 'H', subject: '您胁肋部或乳房胀痛吗？' },
  { cate: 'H', subject: '您无缘无故叹气吗？' },
  { cate: 'H', subject: '您咽喉部有异物感，且吐之不出、咽之不下吗？' },

  { cate: 'I', subject: '您没有感冒时也会打喷嚏吗？' },
  { cate: 'I', subject: '您没有感冒时也会鼻塞、流鼻涕吗？' },
  {
    cate: 'I',
    subject: '您有因季节变化、温度变化或异味等原因而咳喘的现象吗？'
  },
  {
    cate: 'I',
    subject: '您容易过敏(对药物、食物、气味、花粉或在季节交替、气候变化时)吗？'
  },
  { cate: 'I', subject: '您的皮肤容易起荨麻疹(风团、风疹块、风疙瘩)吗？' },
  { cate: 'I', subject: '您的皮肤因过敏出现过紫癜(紫红色瘀点、瘀斑)吗？' },
  { cate: 'I', subject: '您的皮肤一抓就红，并出现抓痕吗？' }
];

var selecteds = {
  '您精力充沛吗？': 1,
  '您容易疲乏吗？': 2,
  '您说话声音低弱无力吗？': 5,
  '您感到闷闷不乐、情绪低沉吗？': 4,
  '您比一般人耐受不了寒冷(冬天的寒冷，夏天的冷空调、电扇等)吗？': 3,
  '您能适应外界自然和社会环境的变化吗？': 2,
  '您容易失眠吗？': 1,
  '您容易忘事（健忘）吗？': 2
};

const reverse = { 1: 5, 2: 4, 3: 3, 4: 2, 5: 1 };
const result = 'ABCDEFGHI'.split('').reduce((prev, m) => {
  console.log('ABCDEFGHI', m, prev);

  const [prevScore, prevConversionScore] = prev[m] || [0, 0];
  const arr = subjects.filter(n => n.cate === m);
  const len = arr.length;

  const score = arr.reduce((pre, current) => {
    const _score = selecteds[current.subject];
    if (current.reverse && _score) return pre + reverse[_score] || 0;
    return pre + _score || 0;
  }, 0);
  // console.log('A', total);
  // 转化分数＝[(原始分－条目数)/(条目数×4)]×100
  const conversionScore = score > 0 ? ((score - len) / (len * 4)) * 100 : 0;
  return {
    ...prev,
    [m]: [score + prevScore, conversionScore + prevConversionScore]
  };
}, {});

console.log('result', result);
