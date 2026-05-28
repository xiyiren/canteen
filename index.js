/* ===== Day of Week ===== */
const DAY_NAMES = ['', '周一', '周二', '周三', '周四', '周五'];
function getToday() {
  const d = new Date().getDay();
  return d >= 1 && d <= 5 ? d : 1; // Sat/Sun → Monday
}

/* ===== Meal Data ===== */
const MEAL_DATA = {
  lunch: {
    name: '中餐',
    categories: [
      {
        id: 'healthy', name: '清淡健康', icon: '🥗',
        lines: [
          {
            name: '清淡线',
            weekMenu: {
              1: ['虾仁轻食套餐', '紫菜蛋花汤', '蒸玉米', '黑米糙饭团'],
              2: ['冬瓜薏米炖排骨', '小米糙米饭', '牛肉轻食套餐'],
              3: ['平菇蛋花汤', '蒸玉米', '红米糙饭团', '奥尔良鸡腿', '冬瓜炒肉片', '蒜泥颗白菜', '金针菇蛋花汤', '蒸山芋', '小米糙米饭'],
              4: ['佛手瓜炖大骨+卤白干', '黑米糙米饭'],
              5: ['虾仁轻食套餐', '紫菜蛋花汤', '蒸玉米', '黑米糙饭团']
            }
          },
          {
            name: '清淡餐（B区2号餐线）',
            weekMenu: {
              1: ['黑椒牛柳拌饭', '紫菜鸡蛋汤', '奥尔良烤肉', '土豆炒肉丝', '蒜蓉娃娃菜', '绿豆汤', '蒸南瓜', '花生杂粮饭'],
              2: ['高汤熘鱼片', '玉米杂粮饭', '番茄炖牛腩', '莴笋炒肉片', '青椒绿豆芽', '五彩豆腐汤', '蒸蜜薯', '小米杂粮饭'],
              3: ['清蒸鲈鱼', '西蓝花炒肉片', '清炒南瓜丝', '紫菜鸡蛋汤', '玉米', '黑米杂粮饭'],
              4: ['黑椒牛柳拌饭', '紫菜鸡蛋汤', '奥尔良烤肉', '土豆炒肉丝', '蒜蓉娃娃菜', '绿豆汤', '蒸南瓜', '花生杂粮饭'],
              5: ['高汤熘鱼片', '玉米杂粮饭', '番茄炖牛腩', '莴笋炒肉片', '青椒绿豆芽', '五彩豆腐汤', '蒸蜜薯', '小米杂粮饭']
            }
          }
        ]
      },
      {
        id: 'combo', name: '花样套餐', icon: '🍚',
        lines: [
          {
            name: '花样餐三号线',
            weekMenu: {
              1: ['日式牛丼饭'], 2: ['五花肉石锅拌饭'], 3: ['烤猪骨饭'],
              4: ['咖喱猪排饭'], 5: ['日式照烧鸡肉饭']
            }
          },
          {
            name: '2F花样餐（8号餐线）',
            weekMenu: {
              1: ['黑椒猪排盖饭'], 2: ['新疆炒米粉'], 3: ['土豆鸡腿肉盖饭'],
              4: ['特色小炒肉盖饭'], 5: ['牛肉炒河粉']
            }
          },
          {
            name: '花样餐（B区3号餐线）',
            weekMenu: {
              1: ['手撕椒麻鸡冒菜'], 2: ['霸道羊肉'], 3: ['麻辣排骨冒菜'],
              4: ['特色黑椒猪排'], 5: ['豆花鱼片']
            }
          },
          {
            name: '花样餐（B区4号餐线）',
            weekMenu: {
              1: ['特色秦川烤肉'], 2: ['手抓扇子骨'], 3: ['爆炒铁锅鸡'],
              4: ['藤椒牛蛙虾'], 5: ['湘西土匪排骨']
            }
          }
        ]
      },
      {
        id: 'noodles', name: '面食米线', icon: '🍜',
        lines: [
          {
            name: '2F花样餐（9号餐线）',
            weekMenu: {
              1: ['重庆小面'], 2: ['肉酱南昌拌粉'], 3: ['红烧龙骨面'],
              4: ['老北京杂酱面'], 5: ['虾仁捞化']
            }
          },
          {
            name: '花样餐（A区1号餐线）',
            weekMenu: {
              1: ['山城红油拌面'], 2: ['红烧排骨面'], 3: ['香辣牛肉米线'],
              4: ['老鸡汤面'], 5: ['红烧肥肠面']
            }
          }
        ]
      },
      {
        id: 'self', name: '自选餐', icon: '🥘',
        lines: [
          {
            name: '2F自选餐',
            weekMenu: {
              1: ['香辣鸡翅根', '老豆腐烧排骨', '番茄炒鸡蛋', '虎皮青椒', '清炒上海青', '双色绿豆芽', '蒸玉米', '紫菜蛋花汤'],
              2: ['烧椒酱蒸鱼块', '孜然烤猪蹄', '干锅有机花菜', '青椒茄丝炒肉丝', '韭菜蛋白肉', '炝炒毛白菜', '蒸蜜薯', '榨菜肉丝汤'],
              3: ['梅干菜扣肉', '香辣鸭锁骨', '小葱蒸鸡蛋', '莴笋炒肉片', '香芋地瓜丸', '蒜香小青菜', '红枣蒸南瓜', '平菇蛋花汤'],
              4: ['萝卜烧排骨', '川香口水鸡', '冬瓜炒肉片', '鸭血烧豆腐', '酸辣海带丝', '蒜泥颗白菜', '蒸山芋', '金针菇蛋花汤'],
              5: ['吴山贡鹅', '千张结烧肉', '毛豆杂酱', '生瓜炒红肠', '油渣大白菜', '红椒空心菜', '蒸玉米', '绿豆汤']
            }
          },
          {
            name: '2F自选餐A区',
            weekMenu: {
              1: ['孜然烤鸭', '干豆角烧肉', '生瓜炒鸡蛋', '青椒豆皮炒肉丝', '清炒南瓜丝', '剁椒娃娃菜', '蒸蜜薯', '紫菜鸡蛋汤'],
              2: ['豆豉蒸排骨', '香辣龙利鱼', '肉末麻婆豆腐', '小炒杏鲍菇', '萝卜炒粉丝', '清炒毛白菜', '玉米', '绿豆汤'],
              3: ['酒鬼辣子鸡', '酸菜小滑肉', '三河小炒', '干锅有机花菜', '双椒绿豆芽', '蒜蓉苋菜', '萝卜排骨汤'],
              4: ['口水猪蹄', '红烧鸡腿', '西红柿炒鸡蛋', '莴笋炒肉片', '水晶冬瓜', '包菜炒粉丝', '蒸南瓜', '五彩豆腐汤'],
              5: ['麻辣肥牛卷', '自制梅干菜扣肉', '干锅千页豆腐', '肉末粉丝炒鸡蛋', '酸辣海带丝', '生炒菜心', '番茄鸡蛋汤']
            }
          },
          {
            name: '2F自选餐B区',
            weekMenu: {
              1: ['孜然烤鸭', '干豆角烧肉', '生瓜炒鸡蛋', '青椒豆皮炒肉丝', '清炒南瓜丝', '剁椒娃娃菜', '蒸蜜薯', '紫菜鸡蛋汤'],
              2: ['豆豉蒸排骨', '香辣龙利鱼', '肉末麻婆豆腐', '小炒杏鲍菇', '萝卜炒粉丝', '清炒毛白菜', '玉米', '绿豆汤'],
              3: ['酒鬼辣子鸡', '酸菜小滑肉', '三河小炒', '干锅有机花菜', '双椒绿豆芽', '蒜蓉苋菜', '萝卜排骨汤'],
              4: ['口水猪蹄', '红烧鸡腿', '西红柿炒鸡蛋', '莴笋炒肉片', '水晶冬瓜', '包菜炒粉丝', '蒸南瓜', '五彩豆腐汤'],
              5: ['麻辣肥牛卷', '自制梅干菜扣肉', '干锅千页豆腐', '肉末粉丝炒鸡蛋', '酸辣海带丝', '生炒菜心', '番茄鸡蛋汤']
            }
          }
        ]
      },
      {
        id: 'special', name: '特色风味', icon: '🔥',
        lines: [
          {
            name: '1号卖台',
            weekMenu: {
              1: ['干锅无骨鸭爪'], 2: ['牛肉麻辣香锅'], 3: ['石锅豆花肥牛'],
              4: ['香辣烤鱼'], 5: ['农家排骨炖']
            }
          }
        ]
      },
      {
        id: 'maternity', name: '孕妈妈餐', icon: '🤰',
        lines: [
          {
            name: '2F孕妈妈餐线',
            weekMenu: {
              1: ['青笋烧排骨', '尖椒小炒鸡', '番茄炒鸡蛋', '清炒上海青', '双色绿豆芽', '杂粮馒头', '蒸玉米', '紫菜蛋花汤'],
              2: ['家烧鱼块', '飘香猪蹄', '干锅有机花菜', '青椒蛋白肉', '炝炒毛白菜', '鸡蛋炒面', '蒸蜜薯', '榨菜肉丝汤'],
              3: ['梅干菜扣肉', '避风塘大虾', '小葱蒸鸡蛋', '干煸土豆条', '蒜香小青菜', '肉丝炒河粉', '红枣蒸南瓜', '平菇蛋花汤'],
              4: ['农家红烧鸡', '萝卜烧牛腩', '火腿冬瓜条', '清炒藕片', '蒜泥颗白菜', '牛肉蛋炒饭', '蒸山芋', '金针菇蛋花汤'],
              5: ['吴山贡鹅', '海带烧排骨', '毛豆杂酱', '油渣大白菜', '韭菜炒粉丝', '鲜肉包', '蒸玉米', '绿豆汤']
            }
          }
        ]
      }
    ]
  },
  dinner: {
    name: '晚餐',
    categories: [
      {
        id: 'healthy', name: '清淡健康', icon: '🥗',
        lines: [
          {
            name: '粥/清淡餐（2号餐线）',
            weekMenu: {
              1: ['番茄牛柳焗饭'], 2: ['干笋炒肉盖饭'], 3: ['茄丁肉酱拌面'],
              4: ['葱油肉酱拌面'], 5: ['番茄牛柳焗饭']
            }
          }
        ]
      },
      {
        id: 'combo', name: '花样套餐', icon: '🍚',
        lines: [
          {
            name: '花样餐（A区5号餐线）',
            weekMenu: {
              1: ['香肠鸡蛋炒面'], 2: ['红油老麻抄手'], 3: ['什锦虾仁炒饭'],
              4: ['农家小炒肉盖饭'], 5: ['香肠鸡蛋炒面']
            }
          }
        ]
      },
      {
        id: 'noodles', name: '面食米线', icon: '🍜',
        lines: [
          {
            name: '2F花样餐（9号餐线）',
            weekMenu: {
              1: ['红烧牛杂面'], 2: ['木耳肉丝粉'], 3: ['大骨汤面鱼'],
              4: ['白菜鲜肉馄饨（如意馄饨）'], 5: ['金汤麻辣拌']
            }
          },
          {
            name: '花样餐（A区1号餐线）',
            weekMenu: {
              1: ['西红柿鸡蛋面'], 2: ['雪菜肉丝面'], 3: ['汉味凉面'],
              4: ['爆椒牛肚面'], 5: ['西红柿鸡蛋面']
            }
          }
        ]
      },
      {
        id: 'self', name: '自选餐', icon: '🥘',
        lines: [
          {
            name: '2F自选餐',
            weekMenu: {
              1: ['红烧带鱼', '一品私房鸭', '脆藕炒肉片', '辣炒鸡丁', '清炒油麦菜', '冬瓜肉片汤'],
              2: ['土豆烧肉', '山东炒鸡', '杏鲍菇炒肉片', '鱼香肉丝', '清炒颗白菜', '裙带菜蛋花汤'],
              3: ['卤拌鸭肫', '酸菜烧大排', '青椒洋葱炒鸡蛋', '炸茄盒', '蒜香毛白菜', '番茄蛋花汤'],
              4: ['葱爆肥羊卷', '梅干菜烧凤爪', '讯飞小炒', '爆炒鸭肠', '小炒娃娃菜', '酸梅汤'],
              5: ['糖醋排骨', '蒜苗炒牛肚', '干锅土豆片', '青椒香干炒肉丝', '蒜泥生菜', '宋嫂鱼羹']
            }
          },
          {
            name: '2F自选餐A区',
            weekMenu: {
              1: ['红烧带鱼', '粉皮烧仔鸡', '黄瓜木耳炒肉片', '鱼香肉丝', '香菇青菜', '红枣银耳汤'],
              2: ['萝卜干烧肉', '山城毛血旺', '肉末蒸鸡蛋', '小炒绿豆饼', '豆腐果烧大白菜', '手工沙汤'],
              3: ['川味回锅肉', '干煸小黄鱼', '玉米粒炒肉丁', '肉末虎皮青椒', '蒜蓉菜心', '冬瓜虾皮汤'],
              4: ['小炒鸡肫', '红烧大排', '土豆孜然开花肠', '芹菜香干炒肉丝', '清炒毛白菜', '水果玉米羹'],
              5: ['红烧带鱼', '粉皮烧仔鸡', '黄瓜木耳炒肉片', '鱼香肉丝', '香菇青菜', '红枣银耳汤']
            }
          }
        ]
      },
      {
        id: 'special', name: '特色小吃', icon: '🌯',
        lines: [
          {
            name: '特色餐线（4号餐线）',
            weekMenu: {
              1: ['紫薯燕麦粥', '无双剑翅', '卤云丝', '油条', '咸鸭蛋'],
              2: ['手工沙汤', '石锅烤肠', '卤素鸡', '紫薯包', '卤味鹌鹑蛋'],
              3: ['皮蛋瘦肉粥', '香酥鸡米花', '卤水千张结', '鲜肉小包', '咸鸭蛋'],
              4: ['八宝粥', '大肉串', '卤腐竹', '玉米包', '卤鸡蛋'],
              5: ['紫薯燕麦粥', '无双剑翅', '卤云丝', '油条', '咸鸭蛋']
            }
          },
          {
            name: '花样餐（A区2号线）',
            weekMenu: {
              1: ['土豆肉丝卷饼', '青菜', '蒸蜜薯', '红枣花生粥'],
              2: ['特色臭豆腐', '蛋炒饭', '手工沙汤'],
              3: ['什锦菜馍', '菠菜', '蒸红薯', '绿豆粥'],
              4: ['葱油酱香饼', '毛白菜', '玉米', '红豆粥'],
              5: ['土豆肉丝卷饼', '青菜', '蒸蜜薯', '红枣花生粥']
            }
          }
        ]
      },
      {
        id: 'congee', name: '粥品羹汤', icon: '🥣',
        lines: [
          {
            name: '粥/羹类（A区6号餐线）',
            weekMenu: {
              1: ['老红糖八宝粥', '小酥肉', '烤肠', '奶黄包', '热拌黑木耳'],
              2: ['紫薯银耳粥', '香酥鸡米花', '骨肉相连', '鲜肉包', '卤素鸡'],
              3: ['南瓜山药小米粥', '藤椒腿排', '油条', '开心紫薯包', '咸鸭蛋'],
              4: ['牛奶玉米枸杞粥', '妙脆鸡翅根', '香芋地瓜丸', '蒸饺', '卤油干'],
              5: ['老红糖八宝粥', '小酥肉', '烤肠', '奶黄包', '热拌黑木耳']
            }
          }
        ]
      }
    ]
  }
};

/* ===== State ===== */
let currentMeal = 'lunch'; // 'lunch' | 'dinner'
let currentCategoryId = null;
let currentLineName = null;
let lastWheelLine = null;

function getCategories() { return MEAL_DATA[currentMeal].categories; }
function getCategory(id) { return getCategories().find(c => c.id === id); }
function getLine(catId, lineName) {
  const cat = getCategory(catId);
  return cat ? cat.lines.find(l => l.name === lineName) : null;
}
function getTodayDishes(catId, lineName) {
  const line = getLine(catId, lineName);
  if (!line) return [];
  const today = getToday();
  return line.weekMenu[today] || [];
}

/* ===== Navigation ===== */
function showScreen(id) {
  document.querySelectorAll('.screen').forEach(s => s.classList.remove('active'));
  document.getElementById(id).classList.add('active');
}

/* ===== Screen 1: Home ===== */
function updateHomeSubtitle() {
  const names = { lunch: '中午', dinner: '晚上' };
  document.getElementById('homeSubtitle').textContent = `今天${names[currentMeal]}想吃什么呢？`;
}

// Meal toggle
document.querySelectorAll('.toggle-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    document.querySelectorAll('.toggle-btn').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    currentMeal = btn.dataset.meal;
    // Toggle night mode: 晚餐 = dark, 中餐 = light
    document.getElementById('app').classList.toggle('night-mode', currentMeal === 'dinner');
    updateHomeSubtitle();
  });
});

document.getElementById('browseBtn').addEventListener('click', () => {
  renderCategoryGrid();
  showScreen('categoryScreen');
});

document.getElementById('noIdeaBtn').addEventListener('click', () => {
  setupWheel();
  showScreen('wheelScreen');
});

/* ===== Screen 2: Categories ===== */
document.getElementById('backFromCategory').addEventListener('click', () => {
  showScreen('homeScreen');
});

function renderCategoryGrid() {
  const cats = getCategories();
  const grid = document.getElementById('categoryGrid');
  if (cats.length === 0) {
    grid.innerHTML = '<div style="grid-column:1/-1;text-align:center;color:#999;padding:60px 20px;font-size:15px;">晚餐数据还在整理中，稍后再来看看吧 🍳</div>';
    return;
  }
  grid.innerHTML = cats.map(c =>
    `<div class="category-card" data-id="${c.id}">
      <div class="category-card-icon">${c.icon}</div>
      <div class="category-card-name">${c.name}</div>
      <div class="category-card-count">${c.lines.length} 条餐线</div>
    </div>`
  ).join('');
  grid.querySelectorAll('.category-card').forEach(card => {
    card.addEventListener('click', () => {
      currentCategoryId = card.dataset.id;
      renderLines(currentCategoryId);
      showScreen('linesScreen');
    });
  });
}

/* ===== Screen 3: Lines ===== */
document.getElementById('backFromLines').addEventListener('click', () => {
  showScreen('categoryScreen');
});

function renderLines(catId) {
  const cat = getCategory(catId);
  if (!cat) return;
  document.getElementById('linesTitle').textContent = cat.icon + ' ' + cat.name;
  const container = document.getElementById('linesContent');
  const today = getToday();
  const todayName = DAY_NAMES[today];

  container.innerHTML = cat.lines.map(line => {
    const dishes = line.weekMenu[today] || [];
    const preview = dishes.length > 0 ? dishes.slice(0, 3).join('、') + (dishes.length > 3 ? '…' : '') : '暂无';
    return `<div class="line-card" data-line="${line.name}">
      <div class="line-card-info">
        <div class="line-card-name">${line.name}</div>
        <div class="line-card-day">${todayName}</div>
        <div class="line-card-today">${preview}</div>
      </div>
      <div class="line-card-arrow">›</div>
    </div>`;
  }).join('');

  container.querySelectorAll('.line-card').forEach(card => {
    card.addEventListener('click', () => {
      currentLineName = card.dataset.line;
      renderDishes(catId, currentLineName);
      showScreen('dishesScreen');
    });
  });
}

/* ===== Screen 4: Wheel ===== */
const canvas = document.getElementById('wheelCanvas');
const ctx = canvas.getContext('2d');
const spinBtn = document.getElementById('spinBtn');
const wheelHint = document.getElementById('wheelHint');
let isSpinning = false;
let currentRotation = 0;
let animFrameId = null;

const COLORS = [
  '#FF6B35', '#FFB347', '#4ECDC4', '#45B7D1',
  '#96CEB4', '#DDA0DD', '#F7DC6F', '#BB8FCE',
  '#85C1E9', '#F0B27A', '#82E0AA', '#F1948A'
];

document.getElementById('backFromWheel').addEventListener('click', () => {
  cancelSpin();
  showScreen('homeScreen');
});

function cancelSpin() {
  if (animFrameId) { cancelAnimationFrame(animFrameId); animFrameId = null; }
  isSpinning = false;
}

function setupWheel() {
  cancelSpin();
  spinBtn.disabled = false;
  currentRotation = 0;
  wheelHint.textContent = '看看转到哪个餐线';
  resizeCanvas();
  drawWheel(0);
}

function getCanvasSize() {
  return canvas.width / (window.devicePixelRatio || 1);
}

function resizeCanvas() {
  const size = Math.min(canvas.parentElement.clientWidth, canvas.parentElement.clientHeight, 400);
  const dpr = window.devicePixelRatio || 1;
  canvas.width = size * dpr;
  canvas.height = size * dpr;
  canvas.style.width = size + 'px';
  canvas.style.height = size + 'px';
  ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
}

function drawWheel(rotation) {
  const size = getCanvasSize();
  const cx = size / 2;
  const cy = size / 2;
  const radius = size / 2 - 4;
  const cats = getCategories();
  if (cats.length === 0) {
    ctx.clearRect(0, 0, size, size);
    ctx.fillStyle = '#F0F0F0';
    ctx.beginPath();
    ctx.arc(cx, cy, radius, 0, Math.PI * 2);
    ctx.fill();
    ctx.fillStyle = '#999';
    ctx.font = `${size*0.06}px sans-serif`;
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    ctx.fillText('暂无数据', cx, cy);
    return;
  }
  const n = cats.length;
  const sliceAngle = (Math.PI * 2) / n;
  ctx.clearRect(0, 0, size, size);

  cats.forEach((cat, i) => {
    const sa = rotation + i * sliceAngle;
    const ea = sa + sliceAngle;
    ctx.beginPath();
    ctx.moveTo(cx, cy);
    ctx.arc(cx, cy, radius, sa, ea);
    ctx.closePath();
    ctx.fillStyle = COLORS[i % COLORS.length];
    ctx.fill();
    ctx.strokeStyle = '#fff';
    ctx.lineWidth = 2;
    ctx.stroke();

    const ta = sa + sliceAngle / 2;
    const tr = radius * 0.55;
    ctx.save();
    ctx.translate(cx + Math.cos(ta) * tr, cy + Math.sin(ta) * tr);
    ctx.rotate(ta);
    ctx.font = `bold ${Math.max(11, size*0.055)}px -apple-system, "PingFang SC", sans-serif`;
    ctx.fillStyle = '#fff';
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    let label = cat.icon.length <= 2 ? cat.icon : '';
    if (label) {
      ctx.fillText(label, 0, -size*0.035);
      ctx.font = `bold ${Math.max(10, size*0.045)}px sans-serif`;
      ctx.fillText(cat.name.length > 4 ? cat.name.slice(0,4) : cat.name, 0, size*0.025);
    } else {
      ctx.fillText(cat.name.length > 4 ? cat.name.slice(0,4) : cat.name, 0, 0);
    }
    ctx.restore();
  });

  ctx.beginPath();
  ctx.arc(cx, cy, radius * 0.13, 0, Math.PI * 2);
  ctx.fillStyle = '#fff';
  ctx.fill();
  ctx.strokeStyle = '#E0E0E0';
  ctx.lineWidth = 2;
  ctx.stroke();
}

function spinWheel() {
  if (isSpinning || getCategories().length === 0) return;
  isSpinning = true;
  spinBtn.disabled = true;
  wheelHint.textContent = '转起来...';

  const duration = 2000 + Math.random() * 1000;
  const extraSpins = 4 + Math.floor(Math.random() * 4);
  const cats = getCategories();
  const n = cats.length;
  const sliceAngle = (Math.PI * 2) / n;
  const targetIdx = Math.floor(Math.random() * n);

  const base = -Math.PI / 2 - (targetIdx + 0.5) * sliceAngle;
  const norm = ((base % (Math.PI * 2)) + Math.PI * 2) % (Math.PI * 2);
  let total = norm - (currentRotation % (Math.PI * 2)) + extraSpins * Math.PI * 2;
  if (total <= 0) total += Math.PI * 2;

  const startR = currentRotation;
  const startTime = performance.now();

  function animate(now) {
    const elapsed = now - startTime;
    const progress = Math.min(elapsed / duration, 1);
    const eased = 1 - Math.pow(1 - progress, 3);
    currentRotation = startR + total * eased;
    drawWheel(currentRotation);

    if (progress < 1) {
      animFrameId = requestAnimationFrame(animate);
    } else {
      isSpinning = false;
      spinBtn.disabled = false;
      const cat = cats[targetIdx];
      // Pick a random line from this category
      if (cat.lines.length > 0) {
        const line = cat.lines[Math.floor(Math.random() * cat.lines.length)];
        lastWheelLine = { catId: cat.id, lineName: line.name };
        const dishes = getTodayDishes(cat.id, line.name);
        wheelHint.textContent = `转到「${line.name}」！`;
        showWheelResult(line.name, dishes, cat.id);
      } else {
        wheelHint.textContent = `转到「${cat.name}」，但暂无餐线`;
      }
    }
  }
  animFrameId = requestAnimationFrame(animate);
}

spinBtn.addEventListener('click', spinWheel);
canvas.addEventListener('click', spinWheel);

/* ===== Wheel Result Modal ===== */
const wheelResultModal = document.getElementById('wheelResultModal');

function showWheelResult(lineName, dishes, catId) {
  document.getElementById('wheelResultLine').textContent = lineName;
  document.getElementById('wheelResultDishes').textContent =
    dishes.length > 0 ? dishes.join('、') : '暂无菜品数据';
  wheelResultModal.classList.remove('hidden');
}

document.getElementById('wheelResultBtn').addEventListener('click', () => {
  wheelResultModal.classList.add('hidden');
  if (lastWheelLine) {
    currentCategoryId = lastWheelLine.catId;
    currentLineName = lastWheelLine.lineName;
    renderDishes(lastWheelLine.catId, lastWheelLine.lineName);
    showScreen('dishesScreen');
  }
});

document.getElementById('wheelReSpinBtn').addEventListener('click', () => {
  wheelResultModal.classList.add('hidden');
  setupWheel();
});

wheelResultModal.addEventListener('click', (e) => {
  if (e.target === wheelResultModal) wheelResultModal.classList.add('hidden');
});

/* ===== Screen 5: Dishes ===== */
document.getElementById('backFromDishes').addEventListener('click', () => {
  showScreen(currentCategoryId ? 'linesScreen' : 'homeScreen');
});

function renderDishes(catId, lineName) {
  const cat = getCategory(catId);
  const line = getLine(catId, lineName);
  if (!cat || !line) return;

  const today = getToday();
  document.getElementById('dishesDayLabel').textContent = DAY_NAMES[today];
  document.getElementById('dishesLineName').textContent = lineName;
  document.getElementById('dishesTitle').textContent = cat.icon + ' ' + lineName;

  const list = document.getElementById('dishesList');
  const dishes = line.weekMenu[today] || [];

  if (dishes.length === 0) {
    list.innerHTML = '<div style="text-align:center;color:#999;padding:40px 0;">今日暂无菜品</div>';
    return;
  }

  list.innerHTML = dishes.map(d =>
    `<div class="dish-item" data-dish="${d}">
      <span class="dish-item-icon">🍽️</span>
      <span class="dish-item-name">${d}</span>
    </div>`
  ).join('');

  list.querySelectorAll('.dish-item').forEach(item => {
    item.addEventListener('click', () => {
      showDishResult(item.dataset.dish, lineName);
    });
  });
}

/* ===== Screen 6: Result ===== */
function showDishResult(dish, lineName) {
  document.getElementById('resultDishName').textContent = dish;
  document.getElementById('resultMeta').textContent = lineName;
  showScreen('resultScreen');
}

document.getElementById('resultBackBtn').addEventListener('click', () => {
  showScreen('homeScreen');
});

document.getElementById('resultAgainBtn').addEventListener('click', () => {
  if (currentCategoryId && currentLineName) {
    renderDishes(currentCategoryId, currentLineName);
    showScreen('dishesScreen');
  } else {
    showScreen('homeScreen');
  }
});

/* ===== Init ===== */
updateHomeSubtitle();

// Update dinner toggle state
const dinnerBtn = document.querySelector('[data-meal="dinner"]');
dinnerBtn.textContent = '晚餐';

/* ===== Resize ===== */
let rt;
window.addEventListener('resize', () => {
  clearTimeout(rt);
  rt = setTimeout(() => {
    if (document.getElementById('wheelScreen').classList.contains('active') && !isSpinning) {
      setupWheel();
    }
  }, 200);
});

/* ===== Service Worker ===== */
if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('sw.js').catch(() => {});
  });
}
