// --- DATA ---
const pyramidLevels = [
    {
        id: 'limit',
        title: 'القمة: "ضيوف خفاف"',
        color: 'bg-red-500',
        icon: 'x-circle',
        explanation: 'الحاجات دي بتعلي سكر الدم بسرعة الصاروخ وتنزله تاني، فابنك يجوع ويبقى "مقريف" ومش مركز.',
        examples: ['الفينو', 'المقليات (طعمية بزيت غزير)', 'الحلاوة الطحينية', 'المشروبات الغازية']
    },
    {
        id: 'fruits',
        title: 'الوسط: فيتامينات وهضم',
        color: 'bg-orange-400',
        icon: 'wheat',
        explanation: 'الفواكه فيها ألياف بتظبط الهضم. الألبان كاملة الدسم فيها فيتامين D ودهون مهمة.',
        examples: ['جوافة', 'برتقال', 'زبادي بلدي', 'لبن رايب', 'سوداني', 'لب سوري']
    },
    {
        id: 'fats',
        title: 'الوسط: الوقود الذكي',
        color: 'bg-yellow-500',
        icon: 'droplet',
        explanation: 'الدهون الطبيعية (سمنة بلدي) بتشبع جداً وبتخليكي مش محتاجة تلقطي طول اليوم.',
        examples: ['سمنة بلدي', 'زيت زيتون', 'قشطة', 'عيش بلدي (ردة)', 'فريك']
    },
    {
        id: 'base',
        title: 'القاعدة: البناؤون',
        color: 'bg-green-600',
        icon: 'egg',
        explanation: 'البروتين هو اللي بيبني طول ابنك وعضلاته. الخضار هو "المكنسة" اللي بتنظف الجسم.',
        examples: ['بيض', 'فول', 'جبنة قريش', 'عدس', 'لحمة/فراخ', 'سبانخ', 'سلطة بلدي']
    }
];

const personasInfo = {
    athlete: { text: "ركز على البروتين العالي (1.6 - 2 جرام/كجم) لتعافي العضلات. الكربوهيدرات المعقدة قبل التمرين مهمة للطاقة.", name: "رياضي" },
    kids: { text: "الدهون الصحية (زي المكسرات والبيض) مهمة جداً لنمو المخ. ابعدهم عن السكريات المصنعة قدر الإمكان.", name: "أطفال" },
    women: { text: "اهتمي بالحديد والكالسيوم (منتجات الألبان والخضروات الورقية). الدهون الصحية مهمة لتوازن الهرمونات.", name: "سيدات" },
    men: { text: "حافظ على صحة القلب بتقليل الدهون المهدرجة وزيادة الألياف. البروتين مهم للحفاظ على الكتلة العضلية مع التقدم في العمر.", name: "رجال" }
};

const calcFactors = {
    kid: { low: 1.0, medium: 1.2, high: 1.4, label: 'طفل بينمو' },
    woman: { low: 1.0, medium: 1.2, high: 1.4, label: 'سيدة' },
    man: { low: 1.2, medium: 1.4, high: 1.6, label: 'رجل' },
    athlete: { low: 1.6, medium: 1.8, high: 2.2, label: 'رياضي' }
};

// --- STATE ---
let currentState = {
    calc: { persona: 'woman', weight: 70, activity: 'medium', meals: 3 },
    pyramidSelected: null
};

// --- INIT ---
document.addEventListener('DOMContentLoaded', () => {
    lucide.createIcons();
    initPyramid();
    updateCalculator();

    // Weight Input Listener
    document.getElementById('weight-input').addEventListener('input', (e) => {
        currentState.calc.weight = parseInt(e.target.value);
        document.getElementById('weight-display').textContent = currentState.calc.weight + ' كجم';
        updateCalculator();
    });
});

// --- ROUTER ---
function router(viewName) {
    // Hide all views
    document.querySelectorAll('.view').forEach(el => el.classList.add('hidden'));

    // Show selected view
    document.getElementById(`view-${viewName}`).classList.remove('hidden');

    // Header state
    if (viewName === 'home') {
        document.getElementById('home-btn').classList.add('hidden');
    } else {
        document.getElementById('home-btn').classList.remove('hidden');
    }

    // Scroll to top
    window.scrollTo(0, 0);
}

// --- PYRAMID LOGIC ---
function initPyramid() {
    const container = document.getElementById('pyramid-container');
    pyramidLevels.forEach((level, index) => {
        const btn = document.createElement('div');
        btn.className = `relative cursor-pointer text-white font-bold rounded-xl shadow-md transition-all`;
        btn.style.width = `${40 + (index * 20)}%`;
        btn.style.height = '70px';
        btn.onclick = () => togglePyramidLevel(level.id);

        btn.innerHTML = `
            <div class="absolute inset-0 ${level.color} rounded-xl"></div>
            <div class="relative flex flex-col items-center justify-center h-full">
                <i data-lucide="${level.icon}" class="mb-1"></i>
                <span class="text-sm">${level.title}</span>
            </div>
        `;
        container.appendChild(btn);
    });
    lucide.createIcons();
}

function togglePyramidLevel(id) {
    const details = document.getElementById('pyramid-details');

    if (currentState.pyramidSelected === id) {
        details.classList.add('hidden');
        currentState.pyramidSelected = null;
    } else {
        currentState.pyramidSelected = id;
        const level = pyramidLevels.find(l => l.id === id);

        details.innerHTML = `
            <h3 class="text-lg font-bold mb-2">${level.title}</h3>
            <p class="text-sm text-gray-600 leading-relaxed">${level.explanation}</p>
            <div class="mt-4 p-3 bg-gray-50 rounded-lg">
                <h4 class="text-xs font-bold text-gray-500 mb-2">أمثلة مصرية:</h4>
                <div class="flex flex-wrap gap-2">
                    ${level.examples.map(ex => `<span class="text-xs bg-white border border-gray-200 px-2 py-1 rounded-md">${ex}</span>`).join('')}
                </div>
            </div>
        `;
        details.classList.remove('hidden');
    }
}

// --- CALCULATOR LOGIC ---
function setCalcPersona(p) {
    currentState.calc.persona = p;
    updateCalcUI();
}
function setCalcActivity(a) {
    currentState.calc.activity = a;
    updateCalcUI();
}
function setMealCount(m) {
    currentState.calc.meals = m;
    updateCalcUI();
}

function updateCalcUI() {
    // Personas
    document.querySelectorAll('.calc-btn-persona').forEach(btn => {
        btn.className = 'calc-btn-persona flex flex-col items-center p-3 rounded-xl border-2 transition-all cursor-pointer border-none bg-gray-100 text-gray-400';
    });
    document.getElementById(`btn-p-${currentState.calc.persona}`).className = 'calc-btn-persona flex flex-col items-center p-3 rounded-xl border-2 transition-all cursor-pointer border-none bg-emerald-500 text-white';

    // Activity
    document.querySelectorAll('.calc-btn-activity').forEach(btn => {
        btn.className = 'calc-btn-activity flex-1 py-2 text-xs font-bold rounded-lg transition-all cursor-pointer border-none text-gray-500';
    });
    document.getElementById(`btn-a-${currentState.calc.activity}`).className = 'calc-btn-activity flex-1 py-2 text-xs font-bold rounded-lg transition-all cursor-pointer border-none bg-white text-emerald-600 shadow-sm';

    // Meals
    document.getElementById('btn-m-3').className = currentState.calc.meals === 3 ? 'px-3 py-1 rounded-md transition cursor-pointer border-none bg-emerald-500 text-white shadow' : 'px-3 py-1 rounded-md transition cursor-pointer border-none text-gray-400';
    document.getElementById('btn-m-2').className = currentState.calc.meals === 2 ? 'px-3 py-1 rounded-md transition cursor-pointer border-none bg-emerald-500 text-white shadow' : 'px-3 py-1 rounded-md transition cursor-pointer border-none text-gray-400';

    updateCalculator();
}

function updateCalculator() {
    const { persona, weight, activity, meals } = currentState.calc;
    const factor = calcFactors[persona][activity];
    const target = Math.round(weight * factor);

    document.getElementById('target-value').innerText = target + ' جرام';
    document.getElementById('target-label').innerText = 'الهدف اليومي لـ ' + calcFactors[persona].label;

    // Equivalents
    const equivalentsData = [
        { name: 'فراخ (ربع متوسط)', count: Math.round((target / 30) * 10) / 10, icon: 'utensils', color: 'text-orange-500' },
        { name: 'لحمة (صافي)', count: Math.round((target / 26) * 100) + ' جم', icon: 'scale', color: 'text-red-500' },
        { name: 'سمك / تونة', count: Math.round((target / 25) * 10) / 10, icon: 'fish', color: 'text-blue-500' },
        { name: 'بيض مسلوق', count: Math.ceil(target / 6), icon: 'egg', color: 'text-yellow-500' },
    ];

    document.getElementById('equivalents-grid').innerHTML = equivalentsData.map(eq => `
        <div class="bg-white/10 rounded-xl p-3 flex items-center gap-3 border border-white/5">
            <div class="bg-white/90 w-10 h-10 rounded-full flex items-center justify-center shadow-sm flex-shrink-0 ${eq.color}">
                <i data-lucide="${eq.icon}" class="w-5 h-5"></i>
            </div>
            <div class="text-right">
                <div class="text-lg font-bold leading-none">${eq.count}</div>
                <div class="text-[10px] text-gray-300 mt-1">${eq.name}</div>
            </div>
        </div>
    `).join('');

    // Meals Examples logic (Simplified for Vanilla)
    let examples = [];
    let remaining = target;

    if (meals === 2) {
        let m1 = Math.round(target * 0.4);
        examples.push({ name: 'وجبة 1 (فطار)', desc: m1 > 30 ? '4 بيضات + جبنة' : '2 بيضة + لبن', icon: 'clock' });
        examples.push({ name: 'وجبة 2 (رئيسية)', desc: 'فراخ/لحمة + سلطة', icon: 'utensils' });
    } else {
        examples.push({ name: 'فطار', desc: '2 بيضة + خيار', icon: 'egg' });
        examples.push({ name: 'غداء', desc: 'ربع فرخة + سلطة', icon: 'utensils' });
        examples.push({ name: 'عشاء', desc: 'جبنة قريش/زبادي', icon: 'scale' });
        if (target > 100) examples.push({ name: 'سناكس', desc: 'مكسرات/لبن', icon: 'droplet' });
    }

    document.getElementById('meals-list').innerHTML = examples.map(ex => `
        <div class="flex items-start justify-between border-b border-white/10 pb-2 last:border-0 last:pb-0">
            <div class="flex items-start gap-2">
                <div class="bg-emerald-500/20 p-1.5 rounded-full text-emerald-300 mt-0.5"><i data-lucide="${ex.icon}" class="w-4 h-4"></i></div>
                <div class="text-right">
                    <span class="text-xs text-gray-300 block mb-0.5">${ex.name}</span>
                    <span class="text-sm font-medium text-white">${ex.desc}</span>
                </div>
            </div>
        </div>
    `).join('');

    lucide.createIcons();
}

// --- PERSONAS LOGIC ---
function setPersonaInfo(pId) {
    const data = personasInfo[pId];
    document.getElementById('persona-title').innerText = 'نصيحة لـ ' + data.name;
    document.getElementById('persona-text').innerText = data.text;

    // Update active button state
    document.querySelectorAll('.persona-btn').forEach(btn => {
        btn.className = 'persona-btn flex items-center gap-2 px-4 py-2 rounded-full whitespace-nowrap text-sm font-bold transition-all border-none bg-white text-gray-600 border border-gray-100 shadow-sm';
    });
    document.getElementById(`btn-info-${pId}`).className = 'persona-btn flex items-center gap-2 px-4 py-2 rounded-full whitespace-nowrap text-sm font-bold transition-all border-none bg-indigo-600 text-white';
}
