import React, { useState } from 'react';
import { Leaf, Egg, Droplet, Wheat, XCircle, Info, User, Baby, Activity, ArrowRight, Home, Heart, Utensils, Scale, Flame, ArrowLeft, Star, Dumbbell, UserCheck, Users, Smile, Calculator, Fish, Clock, AlertTriangle } from 'lucide-react';

const App = () => {
  const [currentView, setCurrentView] = useState('home');
  const [selectedLevel, setSelectedLevel] = useState(null);
  const [selectedPersona, setSelectedPersona] = useState('athlete');

  const pyramidLevels = [
    {
      id: 'limit',
      title: 'القمة: "ضيوف خفاف"',
      subtitle: 'السكريات، الدقيق الأبيض، الزيوت المهدرجة',
      color: 'bg-red-500',
      icon: <XCircle className="w-8 h-8 text-white" />,
      why: 'ليه نقلل؟',
      explanation: 'الحاجات دي بتعلي سكر الدم بسرعة الصاروخ وتنزله تاني، فابنك يجوع ويبقى "مقريف" ومش مركز. كمان الزيوت المهدرجة هي العدو الأول للمناعة.',
      trap: 'الفخ: الفينو والباتيهات بتشبع لحظيًا، بس بعد ساعة البطن بتفضى والجسم بيطلب سكر تاني.',
      egyptian_examples: ['الفينو', 'المقليات (طعمية بزيت غزير)', 'الحلاوة الطحينية (بكثرة)', 'المشروبات الغازية'],
      smart_move: 'لو نفسك في حاجة حلوة، خليها بعد وجبة كاملة مش على معدة فاضية.'
    },
    {
      id: 'fruits',
      title: 'الوسط: فيتامينات وهضم',
      subtitle: 'فواكه، ألبان، ومكسرات',
      color: 'bg-orange-400',
      icon: <Wheat className="w-8 h-8 text-white" />,
      why: 'ليه مهمة؟',
      explanation: 'الفواكه فيها ألياف بتظبط الهضم. الألبان كاملة الدسم (مش خالي الدسم) فيها فيتامين D ودهون مهمة لامتصاص الكالسيوم.',
      trap: 'الفخ: العصير حتى لو فريش بيفقد الألياف وبيبقى "قنبلة سكر". كلي الفاكهة سليمة.',
      egyptian_examples: ['جوافة', 'برتقال', 'زبادي بلدي', 'لبن رايب', 'سوداني', 'لب سوري'],
      smart_move: 'الزبادي بالليل عليه عصرة ليمون "سحر" للمناعة وحرق الدهون أثناء النوم.'
    },
    {
      id: 'fats',
      title: 'الوسط: الوقود الذكي',
      subtitle: 'دهون صحية وحبوب كاملة',
      color: 'bg-yellow-500',
      icon: <Droplet className="w-8 h-8 text-white" />,
      why: 'سمنة بلدي؟ بجد؟',
      explanation: 'أيوه! المخ 60% منه دهون. الدهون الطبيعية (سمنة بلدي، زيت زيتون) بتشبع جداً وبتخليكي مش محتاجة تلقطي طول اليوم. عكس الزيوت المهدرجة اللي بتهلك الكبد.',
      trap: 'الفخ: الخوف من الدهون هو اللي خلانا ناكل عيش وسكر أكتر فزود وزننا.',
      egyptian_examples: ['سمنة بلدي', 'زيت زيتون', 'قشطة', 'عيش بلدي (ردة)', 'فريك', 'بليلة'],
      smart_move: 'معلقة سمنة بلدي على الفول الصبح هتخليكي شبعانة لحد العصر.'
    },
    {
      id: 'base',
      title: 'القاعدة: البناؤون',
      subtitle: 'بروتين عالي الجودة وخضروات',
      color: 'bg-green-600',
      icon: <div className="flex gap-2"><Egg className="w-8 h-8 text-white" /><Leaf className="w-8 h-8 text-white" /></div>,
      why: 'ليه دي الأساس؟',
      explanation: 'البروتين هو اللي بيبني طول ابنك وعضلاته ومناعتك. الخضار هو "المكنسة" اللي بتنظف الجسم. لو شبعتوا من دول، مش هتدوروا على العيش.',
      trap: 'الفخ: إننا نبدأ بالرز أو العيش ونشبع بيهم، والبروتين يبقى حتة صغيرة.',
      egyptian_examples: ['بيض', 'فول', 'جبنة قريش', 'عدس', 'لحمة/فراخ', 'سبانخ', 'ملوخية', 'سلطة بلدي'],
      smart_move: 'ابدئي طبقك بالسلطة والبروتين، وخلي الرز في الآخر.'
    }
  ];

  const renderView = () => {
    switch (currentView) {
      case 'home': return <HomeView setView={setCurrentView} />;
      case 'pyramid': return <PyramidView levels={pyramidLevels} selected={selectedLevel} setSelected={setSelectedLevel} />;
      case 'swaps': return <SwapsView />;
      case 'plan': return <PlanView />;
      case 'why': return <WhyView />;
      case 'personas': return <PersonasView selected={selectedPersona} setSelected={setSelectedPersona} />;
      case 'calculator': return <ProteinCalculatorView />;
      default: return <HomeView setView={setCurrentView} />;
    }
  };

  return (
    <div dir="rtl" className="min-h-screen bg-slate-50 font-sans text-slate-800 pb-safe">
      <header className="bg-white shadow-sm sticky top-0 z-50">
        <div className="max-w-md mx-auto px-4 py-3 flex justify-between items-center">
          <button className="flex items-center gap-2 cursor-pointer border-none bg-transparent" onClick={() => setCurrentView('home')}>
            <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
              <Leaf className="text-green-600 w-5 h-5" />
            </div>
            <div className="text-right">
              <h1 className="text-lg font-bold text-green-800 leading-none">الهرم الذكي</h1>
              <span className="text-[10px] text-gray-500">لصحة البيت المصري</span>
            </div>
          </button>
          {currentView !== 'home' && (
            <button onClick={() => setCurrentView('home')} className="p-2 text-gray-400 hover:text-green-600 bg-gray-50 rounded-full cursor-pointer border-none">
              <Home className="w-5 h-5" />
            </button>
          )}
        </div>
      </header>

      <main className="max-w-md mx-auto min-h-[calc(100vh-60px)]">
        {renderView()}
      </main>
    </div>
  );
};

// --- المكونات الفرعية ---

const HomeView = ({ setView }) => (
  <div className="p-4 space-y-6 animate-fade-in">
    <div className="bg-gradient-to-br from-green-600 to-teal-800 rounded-3xl p-6 text-white shadow-lg relative overflow-hidden">
      <div className="relative z-10">
        <h2 className="text-3xl font-bold mb-2">أهلاً يا ست الكل ❤️</h2>
        <p className="text-green-50 text-sm leading-relaxed mb-4 opacity-90">
          عارفين إنك شايلة مسؤولية صحة البيت كله. التطبيق ده عشان يساعدك توفري صحة وفلوس وتعملي أكل يشبع بجد.
        </p>
        <div className="flex gap-2 flex-wrap">
          <button onClick={() => setView('pyramid')} className="bg-white text-green-800 px-4 py-2.5 rounded-full text-sm font-bold shadow-md hover:bg-gray-50 transition flex items-center gap-2 cursor-pointer border-none">
            شوفي الهرم <ArrowLeft className="w-4 h-4" />
          </button>
          <button onClick={() => setView('calculator')} className="bg-green-700/50 text-white border border-white/30 px-4 py-2.5 rounded-full text-sm font-bold shadow-md hover:bg-green-700 transition flex items-center gap-2 cursor-pointer">
            <Calculator className="w-4 h-4" /> أحسب احتياجي
          </button>
        </div>
      </div>
      <div className="absolute top-[-20px] left-[-20px] w-32 h-32 bg-white opacity-10 rounded-full"></div>
    </div>

    <div>
      <h3 className="font-bold text-gray-800 mb-3 px-1">أدوات ذكية ليكي:</h3>
      <div className="grid grid-cols-2 gap-3">
        <NavCard title="حاسبة البروتين" desc="آكل كام بيضة وفرخة؟" icon={<Calculator className="text-emerald-600" />} color="bg-emerald-50" onClick={() => setView('calculator')} featured={true} />
        <NavCard title="لكل العيلة" desc="رياضيين، أطفال، وسيدات" icon={<Users className="text-indigo-500" />} color="bg-indigo-50" onClick={() => setView('personas')} />
        <NavCard title="الهرم بالتفصيل" desc="إيه ناكله وإيه نقلله؟" icon={<Activity className="text-blue-500" />} color="bg-blue-50" onClick={() => setView('pyramid')} />
        <NavCard title="بدائل المطبخ" desc="إزاي نستبدل الفينو والزيت؟" icon={<Utensils className="text-orange-500" />} color="bg-orange-50" onClick={() => setView('swaps')} />
        <NavCard title="خطة الأكل" desc="أفكار للفطار والغدا" icon={<Scale className="text-purple-500" />} color="bg-purple-50" onClick={() => setView('plan')} />
        <NavCard title="ليه اتغيرنا؟" desc="القديم كان غلط؟" icon={<Heart className="text-red-500" />} color="bg-red-50" onClick={() => setView('why')} />
      </div>
    </div>
  </div>
);

const ProteinCalculatorView = () => {
  const [persona, setPersona] = useState('woman');
  const [weight, setWeight] = useState(70);
  const [activity, setActivity] = useState('medium');
  const [mealCount, setMealCount] = useState(3);

  const factors = {
    kid: { low: 1.0, medium: 1.2, high: 1.4, label: 'طفل بينمو' },
    woman: { low: 1.0, medium: 1.2, high: 1.4, label: 'سيدة' },
    man: { low: 1.2, medium: 1.4, high: 1.6, label: 'رجل' },
    athlete: { low: 1.6, medium: 1.8, high: 2.2, label: 'رياضي' }
  };

  const proteinTarget = Math.round(weight * factors[persona][activity]);

  const equivalents = [
    { name: 'فراخ (ربع متوسط)', count: Math.round((proteinTarget / 30) * 10) / 10, icon: <Utensils className="w-5 h-5 text-orange-500" />, unit: 'ربع' },
    { name: 'لحمة (صافي)', count: Math.round((proteinTarget / 26) * 100), icon: <Scale className="w-5 h-5 text-red-500" />, unit: 'جرام' },
    { name: 'سمك / تونة', count: Math.round((proteinTarget / 25) * 10) / 10, icon: <Fish className="w-5 h-5 text-blue-500" />, unit: 'علبة/سمكة' },
    { name: 'بيض مسلوق', count: Math.ceil(proteinTarget / 6), icon: <Egg className="w-5 h-5 text-yellow-500" />, unit: 'بيضة' },
  ];

  const getFoodExamples = (target, meals) => {
    let examples = [];
    let remaining = target;

    if (meals === 2) {
      const meal1Protein = Math.round(target * 0.4);
      let meal1Desc = "";
      if (meal1Protein > 40) {
        meal1Desc = "4 بيضات + قطعة جبنة قريش كبيرة";
      } else if (meal1Protein > 25) {
        meal1Desc = "3 بيضات + جبنة بالطماطم";
      } else {
        meal1Desc = "2 بيضة + كوب لبن";
      }
      examples.push({ name: 'الوجبة الأولى (فطار متأخر)', desc: meal1Desc, icon: <Clock className="w-4 h-4" /> });

      const meal2Protein = target - meal1Protein;
      let meal2Desc = "";
      if (meal2Protein > 60) {
        meal2Desc = "نص فرخة مشوية + طبق سلطة كبير";
      } else if (meal2Protein > 40) {
        meal2Desc = "ربع فرخة (صدر كبير) + طبق عدس";
      } else {
        meal2Desc = "ربع فرخة أو سمكة متوسطة";
      }
      examples.push({ name: 'الوجبة الثانية (الرئيسية)', desc: meal2Desc, icon: <Utensils className="w-4 h-4" /> });

    } else {
      examples.push({ name: 'فطار', desc: '2 بيضة + خيار', icon: <Egg className="w-4 h-4" /> });
      remaining -= 12;

      let lunchDesc = "";
      if (remaining > 50) {
        lunchDesc = "نص فرخة + سلطة";
        remaining -= 45;
      } else {
        lunchDesc = "ربع فرخة (صدر) + سلطة";
        remaining -= 30;
      }
      examples.push({ name: 'غداء', desc: lunchDesc, icon: <Utensils className="w-4 h-4" /> });

      let dinnerDesc = "";
      if (remaining > 20) {
        dinnerDesc = "قطعة جبنة قريش كبيرة (200جم)";
      } else {
        dinnerDesc = "2 علبة زبادي أو جبنة قريش";
      }
      examples.push({ name: 'عشاء', desc: dinnerDesc, icon: <Scale className="w-4 h-4" /> });

      if (remaining > 5) {
        examples.push({ name: 'سناكس', desc: 'لبن / مكسرات / حمص', icon: <Droplet className="w-4 h-4" /> });
      }
    }

    return examples;
  };

  const examples = getFoodExamples(proteinTarget, mealCount);

  return (
    <div className="p-4 animate-fade-in pb-20">
      <div className="bg-emerald-600 rounded-3xl p-6 text-white shadow-lg mb-6">
        <h2 className="text-2xl font-bold flex items-center gap-2 mb-1">
          <Calculator className="w-6 h-6" /> حاسبة البروتين
        </h2>
        <p className="text-emerald-100 text-sm">احسبي احتياجك واحتياج ولادك بالظبط.</p>
      </div>

      <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-5 mb-6 space-y-6 text-right">
        <div>
          <label className="block text-sm font-bold text-gray-700 mb-3">أنا مين؟</label>
          <div className="grid grid-cols-4 gap-2">
            {Object.keys(factors).map(key => (
              <button key={key} onClick={() => setPersona(key)} className={`flex flex-col items-center p-3 rounded-xl border-2 transition-all cursor-pointer border-none ${persona === key ? 'bg-emerald-500 text-white' : 'bg-gray-100 text-gray-400'}`}>
                <span className="text-[10px] font-bold">{factors[key].label}</span>
              </button>
            ))}
          </div>
        </div>
        <div>
          <div className="flex justify-between mb-2">
            <label className="text-sm font-bold text-gray-700">الوزن:</label>
            <span className="text-emerald-600 font-bold">{weight} كجم</span>
          </div>
          <input type="range" min="20" max="150" value={weight} onChange={(e) => setWeight(parseInt(e.target.value))} className="w-full h-2 bg-gray-200 rounded-lg accent-emerald-600 cursor-pointer" />
        </div>
        <div>
          <label className="block text-sm font-bold text-gray-700 mb-3">مجهودي اليومي:</label>
          <div className="flex gap-2 bg-gray-100 p-1 rounded-xl">
            {[
              { id: 'low', label: 'قليل' },
              { id: 'medium', label: 'متوسط' },
              { id: 'high', label: 'عالي' }
            ].map(lvl => (
              <button
                key={lvl.id}
                onClick={() => setActivity(lvl.id)}
                className={`flex-1 py-2 text-xs font-bold rounded-lg transition-all cursor-pointer border-none ${activity === lvl.id ? 'bg-white text-emerald-600 shadow-sm' : 'text-gray-500'}`}
              >
                {lvl.label}
              </button>
            ))}
          </div>
        </div>
      </div>

      <div className="bg-slate-900 rounded-3xl p-6 text-white shadow-xl space-y-6">
        <div className="text-center border-b border-white/10 pb-6">
          <p className="text-gray-400 text-xs">الهدف اليومي لـ {factors[persona].label}</p>
          <h3 className="text-4xl font-extrabold text-emerald-400">{proteinTarget} جرام</h3>
        </div>

        <div className="relative z-10">
          <h4 className="text-emerald-300 font-bold text-xs mb-3 flex items-center justify-center gap-2">
            <Info className="w-4 h-4" />
            الرقم ده يساوي إيه؟ (لو أكلت صنف واحد فقط)
          </h4>
          <div className="grid grid-cols-2 gap-3">
            {equivalents.map((eq, i) => (
              <div key={i} className="bg-white/10 rounded-xl p-3 flex items-center gap-3 border border-white/5">
                <div className="bg-white/90 w-10 h-10 rounded-full flex items-center justify-center shadow-sm flex-shrink-0 text-black">{eq.icon}</div>
                <div className="text-right">
                  <div className="text-lg font-bold leading-none">{eq.count} <span className="text-xs font-normal">{eq.unit}</span></div>
                  <div className="text-[10px] text-gray-300 mt-1">{eq.name}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="relative z-10 bg-white/5 p-4 rounded-xl border border-white/10">
          <div className="flex justify-between items-center mb-4">
            <h4 className="text-emerald-300 font-bold text-sm flex items-center gap-2">
              <Utensils className="w-4 h-4" />
              أوزعهم إزاي؟
            </h4>
            <div className="bg-white/10 p-1 rounded-lg flex text-[10px]">
              <button
                onClick={() => setMealCount(3)}
                className={`px-3 py-1 rounded-md transition cursor-pointer border-none ${mealCount === 3 ? 'bg-emerald-500 text-white shadow' : 'text-gray-400'}`}
              >
                3 وجبات
              </button>
              <button
                onClick={() => setMealCount(2)}
                className={`px-3 py-1 rounded-md transition cursor-pointer border-none ${mealCount === 2 ? 'bg-emerald-500 text-white shadow' : 'text-gray-400'}`}
              >
                وجبتين
              </button>
            </div>
          </div>

          <div className="space-y-3">
            {examples.map((item, idx) => (
              <div key={idx} className="flex items-start justify-between border-b border-white/10 pb-2 last:border-0 last:pb-0">
                <div className="flex items-start gap-2">
                  <div className="bg-emerald-500/20 p-1.5 rounded-full text-emerald-300 mt-0.5">
                    {item.icon}
                  </div>
                  <div className="text-right">
                    <span className="text-xs text-gray-300 block mb-0.5">{item.name}</span>
                    <span className="text-sm font-medium text-white">{item.desc}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="mt-8 space-y-4">
        <h3 className="font-bold text-gray-800 px-1">سؤال وجواب ع الماشي:</h3>
        <div className="bg-red-50 p-4 rounded-2xl border border-red-100 flex gap-3">
          <AlertTriangle className="w-6 h-6 text-red-500 flex-shrink-0" />
          <div>
            <h4 className="font-bold text-red-700 text-sm mb-1">لو أكلت أقل من كدة؟</h4>
            <p className="text-xs text-red-600 leading-relaxed">
              شعرك ممكن يقع، ضوافرك تتكسر، وهتحسي بجوع دايماً ونهم للسكريات. للأطفال ده بيأثر على الطول والنمو.
            </p>
          </div>
        </div>
        <div className="bg-blue-50 p-4 rounded-2xl border border-blue-100 flex gap-3">
          <Info className="w-6 h-6 text-blue-500 flex-shrink-0" />
          <div>
            <h4 className="font-bold text-blue-700 text-sm mb-1">لو أكلت أكتر من كدة؟</h4>
            <p className="text-xs text-blue-600 leading-relaxed">
              غالباً مش هيحصل حاجة لو كليتك سليمة، بس هتبقي بتصرفي فلوس زيادة ع الفاضي، والجسم ممكن يحول الزيادة لدهون لو مفيش رياضة.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

const PyramidView = ({ levels, selected, setSelected }) => (
  <div className="p-4 animate-fade-in pb-8">
    <h2 className="text-xl font-bold mb-4 text-right">الهرم التفاعلي</h2>
    <div className="flex flex-col items-center gap-1">
      {levels.map((level, index) => (
        <button key={level.id} onClick={() => setSelected(selected === level.id ? null : level.id)} className={`relative w-full cursor-pointer text-white font-bold rounded-xl shadow-md transition-all border-none ${selected === level.id ? 'scale-105 z-10' : 'opacity-90'}`} style={{ width: `${40 + (index * 20)}%`, height: '70px' }}>
          <div className={`absolute inset-0 ${level.color} rounded-xl`}></div>
          <div className="relative flex flex-col items-center justify-center h-full">
            {level.icon}
            <span className="text-sm">{level.title}</span>
          </div>
        </button>
      ))}
    </div>
    {selected && (
      <div className="mt-6 bg-white p-5 rounded-2xl shadow-xl border-r-4 border-green-500 animate-slide-up text-right">
        <h3 className="text-lg font-bold mb-2">{levels.find(l => l.id === selected).title}</h3>
        <p className="text-sm text-gray-600 leading-relaxed">{levels.find(l => l.id === selected).explanation}</p>
        <div className="mt-4 p-3 bg-gray-50 rounded-lg">
          <h4 className="text-xs font-bold text-gray-500 mb-2">أمثلة مصرية:</h4>
          <div className="flex flex-wrap gap-2">
            {levels.find(l => l.id === selected).egyptian_examples.map((ex, i) => (
              <span key={i} className="text-xs bg-white border border-gray-200 px-2 py-1 rounded-md">{ex}</span>
            ))}
          </div>
        </div>
      </div>
    )}
  </div>
);

const NavCard = ({ title, desc, icon, color, onClick, featured }) => (
  <button onClick={onClick} className={`${color} p-4 rounded-2xl text-right transition-transform hover:scale-105 cursor-pointer flex flex-col justify-between min-h-[110px] border-none ${featured ? 'ring-2 ring-emerald-500/30' : 'shadow-sm'}`}>
    <div className="bg-white w-8 h-8 rounded-full flex items-center justify-center shadow-sm mb-2">{icon}</div>
    <div>
      <h3 className="font-bold text-gray-800 text-sm">{title}</h3>
      <p className="text-[10px] text-gray-500">{desc}</p>
    </div>
  </button>
);

const SwapsView = () => (
  <div className="p-4 animate-fade-in">
    <h2 className="text-2xl font-bold text-gray-800 mb-4">بدائل صحية</h2>
    <div className="space-y-4">
      <DetailedSwapCard title="الفينو والمخبوزات" bad="عيش فينو" good="عيش بلدي (ردة)" why="الردة بتقلل امتصاص السكر وتشبع لفترة أطول." />
      <DetailedSwapCard title="طاسة القلي" bad="قلي بزيت غزير" good="شوي / قلاية هوائية" why="تقليل السعرات والدهون المهدرجة الضارة." />
      <DetailedSwapCard title="التحلية" bad="عصائر معلبة" good="فاكهة كاملة" why="الاستفادة من الألياف وتقليل السكر المضاف." />
    </div>
  </div>
);

const DetailedSwapCard = ({ title, bad, good, why }) => (
  <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
    <div className="bg-gray-50 px-4 py-2 border-b border-gray-100 flex justify-between items-center">
      <h3 className="font-bold text-gray-800 text-sm">{title}</h3>
      <div className="bg-green-100 text-green-700 text-[10px] px-2 py-0.5 rounded-full font-bold">بديل ذكي</div>
    </div>
    <div className="p-4 grid grid-cols-[1fr,auto,1fr] gap-2 items-center text-center">
      <div>
        <div className="text-red-500 font-bold text-xs mb-1 line-through opacity-60">{bad}</div>
      </div>
      <ArrowRight className="text-green-500 w-4 h-4" />
      <div>
        <div className="text-green-700 font-bold text-xs mb-1">{good}</div>
      </div>
    </div>
    <div className="px-4 pb-4 pt-0 text-right">
      <p className="text-[10px] text-gray-500 bg-gray-50 p-2 rounded-lg leading-relaxed border border-gray-100">
        <span className="font-bold text-gray-600">السبب:</span> {why}
      </p>
    </div>
  </div>
);

const PlanView = () => (
  <div className="p-4 animate-fade-in">
    <h2 className="text-2xl font-bold text-gray-800 mb-4">خطة الأكل المقترحة</h2>
    <div className="space-y-4">
      <MealSection title="الفطار" time="7:00 AM" icon={<Egg className="w-5 h-5" />} options={["فول بالزيت الحار والكمون", "جبنة قريش بالطماطم", "بيض مسلوق"]} />
      <MealSection title="الغداء" time="3:00 PM" icon={<Utensils className="w-5 h-5" />} options={["طبق سلطة كبير (أساسي)", "بروتين (فراخ/سمك/لحمة)", "نشويات (أرز/فريك) بكمية قليلة"]} />
      <MealSection title="العشاء" time="8:00 PM" icon={<Leaf className="w-5 h-5" />} options={["زبادي", "فاكهة", "سلطة خفيفة"]} />
    </div>
  </div>
);

const MealSection = ({ title, time, icon, options }) => (
  <div className="bg-white rounded-2xl p-4 shadow-sm border border-gray-100 relative overflow-hidden">
    <div className="flex items-center gap-3 mb-3 border-b border-gray-50 pb-3">
      <div className="text-green-600 bg-green-50 p-2 rounded-lg">{icon}</div>
      <div>
        <h3 className="font-bold text-gray-800 text-sm">{title}</h3>
        <span className="text-[10px] text-gray-400 bg-gray-50 px-2 py-0.5 rounded-full">{time}</span>
      </div>
    </div>
    <ul className="space-y-2 pr-4 list-disc text-xs text-gray-600">
      {options.map((opt, i) => (
        <li key={i}>{opt}</li>
      ))}
    </ul>
  </div>
);

const WhyView = () => (
  <div className="p-4 animate-fade-in">
    <h2 className="text-2xl font-bold text-gray-800 mb-4">ليه غيرنا النظام؟</h2>
    <div className="space-y-4">
      <div className="bg-white p-4 rounded-xl border-r-4 border-green-500 shadow-sm text-right">
        <h3 className="font-bold text-gray-800 text-sm mb-2">تحديث العلم</h3>
        <p className="text-xs text-gray-600 leading-relaxed">الأبحاث الجديدة أثبتت أن تقليل النشويات والاعتماد على الدهون الصحية والبروتين أفضل للصحة والوقاية من الأمراض.</p>
      </div>
      <div className="bg-white p-4 rounded-xl border-r-4 border-green-500 shadow-sm text-right">
        <h3 className="font-bold text-gray-800 text-sm mb-2">مشاكل السمنة</h3>
        <p className="text-xs text-gray-600 leading-relaxed">النظام القديم كان بيعتمد بشكل كبير على النشويات اللي بتزود الوزن وبتعمل مقاومة أنسولين.</p>
      </div>
    </div>
  </div>
);

const PersonasView = ({ selected, setSelected }) => {
  const personas = [
    { id: 'athlete', name: 'رياضي', icon: <Dumbbell className="w-5 h-5" /> },
    { id: 'kids', name: 'أطفال', icon: <Baby className="w-5 h-5" /> },
    { id: 'women', name: 'سيدات', icon: <UserCheck className="w-5 h-5" /> },
    { id: 'men', name: 'رجال', icon: <Smile className="w-5 h-5" /> }
  ];

  return (
    <div className="p-4 animate-fade-in">
      <h2 className="text-2xl font-bold text-gray-800 mb-4">نصائح مخصصة</h2>
      <div className="flex gap-2 mb-6 overflow-x-auto pb-2 scrollbar-hide">
        {personas.map(p => (
          <button
            key={p.id}
            onClick={() => setSelected(p.id)}
            className={`flex items-center gap-2 px-4 py-2 rounded-full whitespace-nowrap text-sm font-bold transition-all border-none ${selected === p.id ? 'bg-indigo-600 text-white' : 'bg-white text-gray-600 border border-gray-100 shadow-sm'}`}
          >
            {p.icon} {p.name}
          </button>
        ))}
      </div>

      <div className="bg-white rounded-3xl p-6 shadow-lg border border-gray-100 text-right">
        <h3 className="text-xl font-bold mb-2 text-indigo-700">نصيحة لـ {personas.find(p => p.id === selected).name}</h3>
        <p className="text-sm text-gray-600 leading-relaxed">
          {selected === 'athlete' && "ركز على البروتين العالي (1.6 - 2 جرام/كجم) لتعافي العضلات. الكربوهيدرات المعقدة قبل التمرين مهمة للطاقة."}
          {selected === 'kids' && "الدهون الصحية (زي المكسرات والبيض) مهمة جداً لنمو المخ. ابعدهم عن السكريات المصنعة قدر الإمكان."}
          {selected === 'women' && "اهتمي بالحديد والكالسيوم (منتجات الألبان والخضروات الورقية). الدهون الصحية مهمة لتوازن الهرمونات."}
          {selected === 'men' && "حافظ على صحة القلب بتقليل الدهون المهدرجة وزيادة الألياف. البروتين مهم للحفاظ على الكتلة العضلية مع التقدم في العمر."}
        </p>
      </div>
    </div>
  );
};

export default App;