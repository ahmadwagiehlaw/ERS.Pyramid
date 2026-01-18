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

const foodLibrary = [
    { id: 'egg', name: 'بيض مسلوق', unit: 'بيضة', protein: 6, cb: 0.6, type: 'protein', icon: 'egg' },
    { id: 'foul', name: 'فول (4 معالق)', unit: '100جم', protein: 7, cb: 15, type: 'protein', icon: 'utensils' },
    { id: 'ta3meya', name: 'طعمية بيتي', unit: 'قرص', protein: 5, cb: 10, type: 'fat', icon: 'circle' },
    { id: 'cottage', name: 'جبنة قريش', unit: '100جم', protein: 11, cb: 3, type: 'protein', icon: 'cheese' },
    { id: 'feta', name: 'جبنة فيتا', unit: '100جم', protein: 14, cb: 4, type: 'fat', icon: 'cheese' },
    { id: 'milk', name: 'لبن جاموسي', unit: 'كوب', protein: 8, cb: 12, type: 'protein', icon: 'milk' },
    { id: 'yogurt', name: 'زبادي بلدي', unit: 'كوب', protein: 8, cb: 10, type: 'protein', icon: 'milk' },
    { id: 'bread_b', name: 'عيش بلدي', unit: 'رغيف', protein: 9, cb: 50, type: 'carb', icon: 'circle' },
    { id: 'bread_f', name: 'عيش فينو', unit: 'رغيف', protein: 4, cb: 25, type: 'carb', icon: 'circle' },
    { id: 'rice', name: 'أرز رزة ورزة', unit: '5 معالق', protein: 2, cb: 28, type: 'carb', icon: 'utensils' },
    { id: 'macaroni', name: 'مكرونة', unit: '5 معالق', protein: 3, cb: 30, type: 'carb', icon: 'utensils' },
    { id: 'chicken', name: 'فراخ (صدر)', unit: '100جم', protein: 31, cb: 0, type: 'protein', icon: 'drumstick' },
    { id: 'meat', name: 'لحمة حمراء', unit: '100جم', protein: 26, cb: 0, type: 'protein', icon: 'beef' },
    { id: 'fish', name: 'سمك مشوي', unit: '100جم', protein: 22, cb: 0, type: 'protein', icon: 'fish' },
    { id: 'tuna', name: 'تونا دايت', unit: 'علبة', protein: 23, cb: 0, type: 'protein', icon: 'fish' },
    { id: 'termis', name: 'ترمس', unit: 'كوب', protein: 16, cb: 10, type: 'snack', icon: 'smile' },
    { id: 'koshary', name: 'كشري', unit: 'طبق وسط', protein: 12, cb: 60, type: 'carb', icon: 'utensils' }
];

const mealPlans = {
    balanced: [
        { title: 'الفطار', time: '7:00 AM', icon: 'sun', items: ['فول بالزيت الحار', 'جبنة قريش', 'نصف رغيف بلدي', 'خيار وطماطم'] },
        { title: 'الغداء', time: '3:00 PM', icon: 'utensils', items: ['سمك مشوي / تونة', '4 معالق أرز', 'سلطة خضراء كبيرة'] },
        { title: 'العشاء', time: '8:00 PM', icon: 'moon', items: ['زبادي + ليمون', 'ثمرة فاكهة'] }
    ],
    economic: [
        { title: 'الفطار', time: '7:00 AM', icon: 'sun', items: ['3 معالق فول بالطماطم', 'باذنجان مشوي', 'عيش بلدي'] },
        { title: 'الغداء', time: '3:00 PM', icon: 'utensils', items: ['كشري (عدس كتير)', 'سلطة دقة', 'صلصة خفيفة'] },
        { title: 'العشاء', time: '8:00 PM', icon: 'moon', items: ['جبنة بالطماطم', 'عيش سن'] }
    ],
    quick: [
        { title: 'الفطار', time: '8:00 AM', icon: 'sun', items: ['شوفان باللبن / كورن فليكس', 'موزة', 'قهوة'] },
        { title: 'الغداء', time: '4:00 PM', icon: 'utensils', items: ['بانيه مشوي (إيرفراير)', 'مكرونة مسلوقة', 'سلطة زبادي'] },
        { title: 'العشاء', time: '9:00 PM', icon: 'moon', items: ['فشار', 'جبنة فيتا'] }
    ]
};

// --- STATE ---
let currentState = {
    calc: { persona: 'woman', weight: 70, activity: 'medium', meals: 3 },
    pyramidSelected: null,
    builder: {
        meal: 'breakfast',
        items: [] // { id, count }
    },
    planTab: 'balanced'
};

// --- INIT ---
document.addEventListener('DOMContentLoaded', () => {
    lucide.createIcons();
    loadState(); // Load saved data
    initPyramid();
    updateCalculator();
    initLibrary();
    initBuilder();
    setPlanTab(currentState.planTab || 'balanced'); // Init Plan
    initPWA(); // PWA Setup

    // Weight Input Listener
    document.getElementById('weight-input').addEventListener('input', (e) => {
        currentState.calc.weight = parseInt(e.target.value);
        document.getElementById('weight-display').textContent = currentState.calc.weight + ' كجم';
        updateCalculator();
        saveState();
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
    saveState();
}
function setCalcActivity(a) {
    currentState.calc.activity = a;
    updateCalcUI();
    saveState();
}
function setMealCount(m) {
    currentState.calc.meals = m;
    updateCalcUI();
    saveState();
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
// --- STORAGE LOGIC ---
function saveState() {
    localStorage.setItem('smartPyramidState', JSON.stringify(currentState));
}

function loadState() {
    const saved = localStorage.getItem('smartPyramidState');
    if (saved) {
        const parsed = JSON.parse(saved);
        // Merge with defaults to ensure structure validity if new fields added later
        currentState = { ...currentState, calc: parsed.calc };
        // We don't restore views or pyramid selection to start fresh
    }
    // Update weight display initially
    document.getElementById('weight-display').textContent = currentState.calc.weight + ' كجم';
    document.getElementById('weight-input').value = currentState.calc.weight;
}

// --- PWA LOGIC ---
function initPWA() {
    // Register Service Worker
    if ('serviceWorker' in navigator) {
        navigator.serviceWorker.register('./service-worker.js')
            .then(reg => console.log('SW Registered'))
            .catch(err => console.log('SW Error', err));
    }

    // Install Prompt (Android/Desktop)
    let deferredPrompt;
    window.addEventListener('beforeinstallprompt', (e) => {
        e.preventDefault();
        deferredPrompt = e;
        const installBtn = document.getElementById('install-btn');
        installBtn.classList.remove('hidden');

        installBtn.addEventListener('click', () => {
            installBtn.classList.add('hidden');
            deferredPrompt.prompt();
            deferredPrompt.userChoice.then((choiceResult) => {
                deferredPrompt = null;
            });
        });
    });

    // iOS Detection
    const isIos = /iphone|ipad|ipod/.test(window.navigator.userAgent.toLowerCase());
    const isInStandaloneMode = ('standalone' in window.navigator) && (window.navigator.standalone);

    if (isIos && !isInStandaloneMode) {
        setTimeout(() => {
            // Check if already dismissed in this session? (Optional, skipping for simplicity)
            document.getElementById('ios-install-prompt').classList.remove('hidden');
        }, 3000);
    }
}

// --- LIBRARY LOGIC ---
function initLibrary() {
    const searchInput = document.getElementById('lib-search');
    const resultsDiv = document.getElementById('lib-results');

    function renderLibrary(term = '') {
        const filtered = term ? foodLibrary.filter(f => f.name.includes(term)) : foodLibrary;
        resultsDiv.innerHTML = filtered.map(item => `
            <div class="bg-white p-3 rounded-xl border border-gray-100 flex items-center justify-between shadow-sm">
                <div class="flex items-center gap-3">
                    <div class="bg-green-50 p-2 rounded-lg text-green-600">
                        <i data-lucide="${item.icon}" class="w-5 h-5"></i>
                    </div>
                    <div class="text-right">
                        <h4 class="font-bold text-gray-800 text-sm">${item.name}</h4>
                        <span class="text-[10px] text-gray-400 bg-gray-50 px-2 py-0.5 rounded-full">${item.unit}</span>
                    </div>
                </div>
                <div class="text-left rtl:text-right">
                    <span class="block font-bold text-green-600 text-sm">${item.protein}g <span class="text-[10px] font-normal text-gray-400">بروتين</span></span>
                </div>
            </div>
        `).join('');
        lucide.createIcons();
    }

    searchInput.addEventListener('input', (e) => renderLibrary(e.target.value));
    renderLibrary(); // Initial render
}

// --- BUILDER LOGIC ---
function initBuilder() {
    updateBuilderUI();

    // Modal Search
    document.getElementById('modal-search').addEventListener('input', (e) => {
        renderModalFoodList(e.target.value);
    });
}

function setBuilderMeal(meal) {
    currentState.builder.meal = meal;
    currentState.builder.items = [];
    updateBuilderUI();
}

function openFoodSelector() {
    document.getElementById('food-modal').classList.remove('hidden');
    renderModalFoodList();
}

function closeFoodSelector() {
    document.getElementById('food-modal').classList.add('hidden');
}

function renderModalFoodList(term = '') {
    const list = document.getElementById('modal-food-list');
    const filtered = term ? foodLibrary.filter(f => f.name.includes(term)) : foodLibrary;

    list.innerHTML = filtered.map(item => `
        <div onclick="addBuilderItem('${item.id}')" class="bg-gray-50 p-3 rounded-xl border border-gray-100 flex items-center justify-between cursor-pointer hover:bg-green-50 transition">
            <div class="flex items-center gap-3">
                <i data-lucide="${item.icon}" class="w-4 h-4 text-gray-400"></i>
                <div>
                   <h4 class="font-bold text-gray-700 text-sm">${item.name}</h4>
                   <span class="text-[10px] text-gray-400">${item.unit}</span>
                </div>
            </div>
            <i data-lucide="plus-circle" class="w-5 h-5 text-green-500"></i>
        </div>
    `).join('');
    lucide.createIcons();
}

function addBuilderItem(id) {
    const existing = currentState.builder.items.find(i => i.id === id);
    if (existing) {
        existing.count++;
    } else {
        currentState.builder.items.push({ id, count: 1 });
    }
    closeFoodSelector();
    updateBuilderUI();
}

function updateBuilderItem(id, change) {
    const item = currentState.builder.items.find(i => i.id === id);
    if (!item) return;

    item.count += change;
    if (item.count <= 0) {
        currentState.builder.items = currentState.builder.items.filter(i => i.id !== id);
    }
    updateBuilderUI();
}

function updateBuilderUI() {
    // 1. Update Meal Buttons
    ['breakfast', 'lunch', 'dinner'].forEach(m => {
        const btn = document.getElementById(`btn-bm-${m}`);
        if (m === currentState.builder.meal) {
            btn.className = 'px-4 py-2 rounded-full text-xs font-bold bg-green-100 text-green-700 cursor-pointer border-none shadow-sm transition-all';
        } else {
            btn.className = 'px-4 py-2 rounded-full text-xs font-bold bg-gray-100 text-gray-500 cursor-pointer border-none transition-all';
        }
    });

    // 2. Render Items
    const itemsContainer = document.getElementById('builder-items');
    if (currentState.builder.items.length === 0) {
        itemsContainer.innerHTML = '<div class="text-center text-gray-400 py-8 text-sm bg-gray-50 rounded-xl border border-dashed border-gray-200">لسة ماضيفتش حاجة للطبق</div>';
    } else {
        itemsContainer.innerHTML = currentState.builder.items.map(i => {
            const food = foodLibrary.find(f => f.id === i.id);
            return `
                <div class="bg-white p-3 rounded-xl border border-gray-100 flex items-center justify-between shadow-sm">
                    <div class="text-right">
                        <h4 class="font-bold text-gray-800 text-sm">${food.name}</h4>
                        <span class="text-[10px] text-gray-400">${(food.protein * i.count).toFixed(1)}g بروتين</span>
                    </div>
                    <div class="flex items-center gap-3 bg-gray-50 rounded-lg p-1">
                        <button onclick="updateBuilderItem('${i.id}', 1)" class="w-6 h-6 rounded-md bg-white text-green-600 flex items-center justify-center shadow-sm cursor-pointer border-none"><i data-lucide="plus" class="w-3 h-3"></i></button>
                        <span class="font-bold text-sm min-w-[10px] text-center">${i.count}</span>
                        <button onclick="updateBuilderItem('${i.id}', -1)" class="w-6 h-6 rounded-md bg-white text-red-500 flex items-center justify-center shadow-sm cursor-pointer border-none"><i data-lucide="minus" class="w-3 h-3"></i></button>
                    </div>
                </div>
            `;
        }).join('');
    }
    lucide.createIcons();

    // 3. Calculate Totals
    let totalP = 0;
    currentState.builder.items.forEach(i => {
        const food = foodLibrary.find(f => f.id === i.id);
        totalP += food.protein * i.count;
    });

    // Target per meal? (Daily Target / 3) roughly
    const { persona, weight, activity } = currentState.calc;
    const factor = calcFactors[persona][activity];
    const dailyTarget = Math.round(weight * factor);
    const mealTarget = Math.round(dailyTarget / 3); // Approx

    const percentage = Math.min(100, Math.round((totalP / mealTarget) * 100));

    document.getElementById('builder-bar').style.width = `${percentage}%`;
    document.getElementById('builder-total').innerText = `${totalP.toFixed(1)} جرام`;
    document.getElementById('builder-percentage').innerText = `${percentage}% من احتياج الوجبة`;

    // Msg
    const msgEl = document.getElementById('builder-msg');
    if (percentage < 50) {
        msgEl.innerText = 'محتاج تزود بروتين كمان 💪';
        msgEl.className = 'text-xs font-bold mt-2 text-orange-500 h-5';
        document.getElementById('builder-bar').className = 'absolute top-0 right-0 h-full bg-orange-400 transition-all duration-500';
    } else if (percentage < 90) {
        msgEl.innerText = 'قربت توصل، عاش! 🔥';
        msgEl.className = 'text-xs font-bold mt-2 text-yellow-500 h-5';
        document.getElementById('builder-bar').className = 'absolute top-0 right-0 h-full bg-yellow-400 transition-all duration-500';
    } else {
        msgEl.innerText = 'وجبة ممتازة يا بطل! 🏆';
        msgEl.className = 'text-xs font-bold mt-2 text-green-600 h-5';
        document.getElementById('builder-bar').className = 'absolute top-0 right-0 h-full bg-green-500 transition-all duration-500';
    }
}

// --- PLAN LOGIC ---
function setPlanTab(tab) {
    currentState.planTab = tab;

    // Update Tabs
    document.querySelectorAll('.plan-tab-btn').forEach(btn => {
        btn.className = 'plan-tab-btn bg-white text-gray-500 px-4 py-2 rounded-full whitespace-nowrap text-xs font-bold transition-all border border-gray-100 cursor-pointer';
    });
    document.getElementById(`btn-plan-${tab}`).className = 'plan-tab-btn bg-green-600 text-white px-4 py-2 rounded-full whitespace-nowrap text-xs font-bold transition-all border-none shadow-md cursor-pointer';

    // Render Content
    const plan = mealPlans[tab];
    const container = document.getElementById('plan-content');

    container.innerHTML = plan.map(meal => `
        <div class="bg-white rounded-2xl p-4 shadow-sm border border-gray-100 relative overflow-hidden animate-fade-in">
            <div class="flex items-center gap-3 mb-3 border-b border-gray-50 pb-3">
                <div class="text-green-600 bg-green-50 p-2 rounded-lg"><i data-lucide="${meal.icon}" class="w-5 h-5"></i></div>
                <div>
                    <h3 class="font-bold text-gray-800 text-sm">${meal.title}</h3><span class="text-[10px] text-gray-400 bg-gray-50 px-2 py-0.5 rounded-full">${meal.time}</span>
                </div>
            </div>
            <ul class="space-y-2 pr-4 list-disc text-xs text-gray-600">
                ${meal.items.map(i => `<li>${i}</li>`).join('')}
            </ul>
        </div>
    `).join('');
    lucide.createIcons();
    saveState();
}
