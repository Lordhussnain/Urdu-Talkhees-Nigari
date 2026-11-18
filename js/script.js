/* ==========================================================================
   Urdu Qawaid-o-Insha — Interactive Compendium & Practice Controller
   Pure Vanilla JS (ES6+) | Zero Dependencies | GitHub Pages Ready
   ========================================================================== */

(function () {
  "use strict";

  const PASSAGES = [
    {
      id: "ex-1",
      kind: "example",
      badgeLabel: "Solved Example 01",
      urduNumber: "نمونہ تلخیص (۱)",
      examQuestion: "سوال نمبر ۴ (الف) — نمونہ تلخیص (۱)",
      category: "society",
      categoryLabel: "Environment & Society",
      pages: "pp. 75–76",
      titles: [
        "درخت ایک نعمت (کتاب میں دیا گیا عنوان)",
        "درختوں کے فوائد",
        "شجر کاری کی اہمیت"
      ],
      originalText:
        "درختوں کی بہتات ہوا میں موجود آبی بخارات میں اضافے کا باعث بنتی ہے اور بارش کے ذریعے فضائی آلودگی کو کم کرنے میں اہم کردار انجام دیتی ہے۔ اس کے علاوہ درختوں کی وجہ سے زمینی اور صوتی آلودگی بھی کم ہوتی ہے۔ وہ علاقے جہاں سیم اور تھور زیادہ ہو، وہاں درخت زمین سے پانی جذب کر کے زمین پانی کی مقدار کو کم کر دیتے ہیں۔ اس طرح پانی کی سطح نیچے چلی جاتی ہے اور زمین قابل کاشت بن جاتی ہے۔ پھل دار درخت اور پھول دار پودے مناظرِ فطرت کو پرکشش بناتے ہیں۔ سبزہ مال مویشیوں کی خوراک بنتا ہے۔ درختوں کی وجہ سے فرنیچر، ریشم اور گتہ سازی جیسی صنعتیں فروغ پاتی ہیں۔ درخت نہ صرف ہمارے بہترین دوست ہیں بلکہ ان پر چڑیا اور فاختہ جیسے بے شمار پرندے گھونسلے بناتے، پرورش پاتے اور چہچہاتے ہیں، اس لیے انہیں بلاوجہ ایندھن کی نذر نہیں کرنا چاہیے۔",
      precis:
        "درختوں کی پیدا کردہ نمی بارشوں کا سبب بنتی ہے۔ ان کی بہتات زمین، صوتی اور فضائی آلودگی کو کم کرتی ہے۔ درخت زمین کو زرخیز بناتے اور ماحول کو سجاتے ہیں۔ ان سے لکڑی کی صنعت فروغ پاتی ہے۔ انسانوں اور پرندوں کے لیے یہ دوست ہیں، انہیں ایندھن کی نذر نہیں ہونا چاہیے۔",
      englishGloss:
        "Solved Textbook Model 1: Highlights how trees increase atmospheric moisture for rain, reduce air/land/noise pollution, reclaim waterlogged soil, support timber industries, and shelter birds."
    },
    {
      id: "ex-2",
      kind: "example",
      badgeLabel: "Solved Example 02",
      urduNumber: "نمونہ تلخیص (۲)",
      examQuestion: "سوال نمبر ۴ (الف) — نمونہ تلخیص (۲)",
      category: "society",
      categoryLabel: "Society & Progress",
      pages: "pp. 75–76",
      titles: [
        "گداگری ایک سماجی مسئلہ (کتاب میں دیا گیا عنوان)",
        "گداگری کی وبا",
        "پیشہ ور گداگر اور ہمارا معاشرہ"
      ],
      originalText:
        "اخلاقی لحاظ سے بلا ضرورت کسی کے آگے ہاتھ پھیلانا اور بھیک مانگنا نہایت برا فعل ہے۔ ہمارے معاشرے میں آج کل گداگری ایک پیشے کی صورت اختیار کر چکی ہے۔ ہمارے ملک کے چھوٹے بڑے شہر، قصبے اور دیہات بھی اس کا شکار ہو چکے ہیں۔ مختلف قومی اور مذہبی تہواروں کے موقع پر گداگروں کی قطاریں لگی نظر آتی ہیں۔ گلی محلوں میں بھیک مانگنے والے گداگروں کے انداز بہت عجیب ہوتے ہیں۔ کوئی اونچی آواز میں التجا کرتا ہے تو کوئی دعائیں دیتا ہے اور کوئی مُتَرّنم صدائیں دیتا نظر آتا ہے۔ معذور لوگوں کے ساتھ صحت مند مرد و خواتین جگہ جگہ بھیک مانگتے نظر آتے ہیں۔ معروف اور مصروف شاہراہوں یا چوک چوراہے، بھکاریوں کی طرح طرح کی اداکاری اور اندازِ ہر کسی کو سوچنے پر مجبور کر دیتا ہے کہ آخر ہمارا معاشرہ کس طرف جا رہا ہے؟",
      precis:
        "گداگری جیسا برا فعل پیشے کی صورت اختیار کر گیا ہے۔ ہمارے ملک میں ہر تہوار پر ہر جگہ گداگروں کی کثرت نظر آتی ہے۔ گلیوں اور شاہراہوں پر معذوروں کے ساتھ تندرست لوگ بھیک کے لیے ہمہ اقسام صدائیں دیتے اور فکر انگیز اداکاری کرتے نظر آتے ہیں۔",
      englishGloss:
        "Solved Textbook Model 2: Examines how begging has turned into a widespread profession across cities, villages, and festivals, involving able-bodied beggars alongside the disabled."
    },
    {
      id: "pr-1",
      kind: "practice",
      badgeLabel: "Practice 01",
      urduNumber: "مشقی عبارت (۱)",
      examQuestion: "سوال نمبر ۴ (الف) — مشقی عبارت نمبر ۱",
      category: "society",
      categoryLabel: "Society & Progress",
      pages: "pp. 76–79",
      titles: [
        "قوموں کی ترقی اور تنزل",
        "اقوامِ عالم کا فرق",
        "ترقی اور زوال کا راز"
      ],
      originalText:
        "ہم دیکھتے ہیں کہ دنیا میں دو قسم کی قومیں ہیں۔ ایک وہ جس نے اپنے باپ دادا کو درجہ کمال تک پہنچا ہوا قابلِ سہو و خطا سمجھ کر ان کے علوم و فنون اور طریقہ معاشرت کو کامل سمجھا اور اس کی پیروی پر جمی رہی اور اس کی بہتری اور ترقی پر اور نئی چیزوں کے اخذ و ایجاد پر کچھ کوشش نہیں کی۔ دوسری قوم نے کسی کو کامل نہیں سمجھا اور ہمیشہ ترقی میں نئے نئے علوم و فنون اور طریقہ معاشرت کے ایجاد میں کوشش کرتی رہی۔ اب دیکھ لو کہ ان دونوں قوموں میں کیا فرق ہے۔ کون ترقی اور کون تنزل کی حالت میں ہے۔",
      precis:
        "دنیا میں دو طرح کی قومیں ہیں؛ ایک اسلاف کو کامل سمجھ کر نئی ایجادات کی کوشش نہیں کرتی، جبکہ دوسری ہمیشہ جدید علوم و فنون اور معاشرتی ترقی کے لیے کوشاں رہتی ہے۔ یہی دونوں میں ترقی اور تنزل کا فرق ہے۔",
      englishGloss:
        "Contrasts stagnant nations that rely solely on ancestral perfection with progressive nations that continuously pursue modern arts, sciences, and social advancement."
    },
    {
      id: "pr-2",
      kind: "practice",
      badgeLabel: "Practice 02",
      urduNumber: "مشقی عبارت (۲)",
      examQuestion: "سوال نمبر ۴ (الف) — مشقی عبارت نمبر ۲",
      category: "literature",
      categoryLabel: "Literature & Prose",
      pages: "pp. 76–79",
      titles: [
        "سرسید کا اسلوبِ تحریر",
        "سرسید کی سادہ نثر نگاری",
        "سرسید کا قدرتی اسلوب"
      ],
      originalText:
        "سرسید نے اپنے خیالات کے ظاہر کرنے میں بناوٹ اور تصنع کو کبھی دخل نہیں دیا۔ جس سادگی اور بے تکلفی کے ساتھ ابتدا میں مطلب نگاری شروع کی تھی، غدر کے زمانے تک جو تقریباً بیس برس کا ہوتا ہے، اپنے سیدھے سادے نیچرل اسٹائل (قدرتی اسلوب) میں ہر قسم کی تحریریں کیا کتابیں، کیا مقدمات، کیا فیصلے اور تحریریں برابر لکھتے رہے۔ اس میں بیس سال کی مشق اور مہارت نے جو کہ ایک انداز پر متصل جاری رہی اور پیچیدہ مضمون کے سلجھانے کی ایک غیر معمولی طاقت پیدا کر دی۔",
      precis:
        "سرسید نے تصنع کے بغیر سادہ اور قدرتی اسلوب میں اپنے خیالات لکھے۔ غدر تک بیس سال ہر قسم کی تحریروں کی مسلسل مشق نے ان میں پیچیدہ مضامین سلجھانے کی غیر معمولی طاقت پیدا کر دی۔",
      englishGloss:
        "Examines Sir Syed Ahmad Khan's unadorned, natural prose style shaped by twenty years of varied writing practice prior to 1857."
    },
    {
      id: "pr-3",
      kind: "practice",
      badgeLabel: "Practice 03",
      urduNumber: "مشقی عبارت (۳)",
      examQuestion: "سوال نمبر ۴ (الف) — مشقی عبارت نمبر ۳",
      category: "character",
      categoryLabel: "Ethics & Character",
      pages: "pp. 76–79",
      titles: [
        "انسان کی فطری آزادی اور خود مختاری",
        "فطرتِ انسانی اور خود مختاری",
        "انسان اور اختیارِ عمل"
      ],
      originalText:
        "انسان ایک ایسی ہستی بنایا گیا ہے جس کی فطرت میں آزادی اور خودمختاری رکھی گئی ہے۔ وہ ذی عقل اور ذی شعور ہے۔ اس کو تمام قوائے ظاہری اور باطنی دیے گئے ہیں۔ ان کے استعمال پر جس طرح وہ چاہے قادر ہے۔ تمام کاموں کے شروع کرنے کی سمجھ اور ان کے انجام کی سوچ اس کو دی گئی ہے تاکہ ہر کام کا آغاز اور انجام سوچ لے۔ اس کی فطرت ایسی ہے کہ اپنے لیے آپ تمام چیزیں مہیا کرنے کے لیے حاجت مند ہے۔ وہ ضروریاتِ زندگی فراہم کر سکتا ہے۔ وہ قدرت رکھتا ہے۔ پس یہ تمام چیزیں اس بات پر دلالت کرتی ہیں کہ اس صانع کی مرضی یہی تھی کہ یہ پتلا آپ اپنا مالک رہے۔",
      precis:
        "انسان فطرتاً آزاد اور ذی شعور ہے۔ اسے ظاہری و باطنی قوتوں کے آزادانہ استعمال، ہر کام کا آغاز و انجام سوچنے اور ضروریاتِ زندگی خود پوری کرنے کی قدرت دی گئی ہے۔ یہ تمام باتیں ظاہر کرتی ہیں کہ خالق اسے خود اپنا مالک رکھنا چاہتا تھا۔",
      englishGloss:
        "Reflects on human natural freedom, intellect, and self-reliance as signs that the Creator intended humanity to govern its own choices."
    },
    {
      id: "pr-4",
      kind: "practice",
      badgeLabel: "Practice 04",
      urduNumber: "مشقی عبارت (۴)",
      examQuestion: "سوال نمبر ۴ (الف) — مشقی عبارت نمبر ۴",
      category: "character",
      categoryLabel: "Ethics & Character",
      pages: "pp. 76–79",
      titles: [
        "حق کی فتح و سربلندی",
        "حق و باطل کا معرکہ",
        "اہلِ حق کی استقامت"
      ],
      originalText:
        "دنیا میں جب بھی حق پر برا وقت آیا، جب بھی جھوٹ اور کذب کے طوفانوں نے حق کو گھیرا، جب بھی ظلمت کی آندھی چڑھی، حق کے دیوانوں نے بڑھ چڑھ کر اس چیلنج کا مقابلہ کیا۔ تعداد کی قلت کے باوجود باطل کی کثرت کے سامنے ڈٹ گئے، سینہ سپر ہو گئے۔ باطل کے ظاہری رعب اور دبدبے کے باوجود اُن کے پائے استقامت نہیں لڑکھڑائے۔ وہ قطعاً نہیں گھبرائے، وہ جان و مال اور اہل و عیال کی قربانی دینے کے لیے ہمیشہ تیار رہے اور رہے ہیں۔ کرب و بلا کی داستان بھی ان ہی اہلِ ایماں کے خون سے رنگین ہے۔ بدر و حنین کا معرکہ بھی ان ہی کے ایمان و ایثار کا منہ بولتا ثبوت ہے۔ دنیا میں باطل آج بھی ذلیل و رسوا ہے اور حق آج بھی سربلند ہے۔ آج بھی حق فاتح ہے اور اس کا ڈنکا بجتا ہے۔",
      precis:
        "دنیا میں جب بھی حق پر برا وقت آیا، اہلِ حق نے کم تعداد کے باوجود استقامت سے باطل کا مقابلہ کیا۔ وہ جان، مال اور خاندان کی قربانی سے بھی نہ گھبرائے؛ کربلا اور بدر و حنین اس کے ثبوت ہیں۔ آج بھی باطل رسوا اور حق ہی فاتح ہے۔",
      englishGloss:
        "Illustrates how steadfast people of truth prevail over falsehood despite small numbers and immense personal sacrifice, citing Badr, Hunain, and Karbala."
    },
    {
      id: "pr-5",
      kind: "practice",
      badgeLabel: "Practice 05",
      urduNumber: "مشقی عبارت (۵)",
      examQuestion: "سوال نمبر ۴ (الف) — مشقی عبارت نمبر ۵",
      category: "society",
      categoryLabel: "Society & Progress",
      pages: "pp. 76–79",
      titles: [
        "کامیابی کا راز",
        "ذہانت اور محنت",
        "انتھک محنت کی اہمیت"
      ],
      originalText:
        "جو اشخاص شہرت کے آسمان پر آفتاب ہو کر چمکتے ہیں، اُن کے سوانح کا مطالعہ کرنے سے معلوم ہوتا ہے کہ وہ اپنے مقصد کو حاصل کرنے کے لیے دن رات ان تھک محنت کرتے ہیں۔ لیکن وہ نوجوان عموماً سست اور کاہل ہوتے ہیں جو اپنے زعم میں یہ خیال کرتے ہیں کہ ان کی ترقی کا سبب اُن کی ذہانت اور ذکاوت تھی، نہ ان کی ذاتی کوشش۔ یہ خوب سمجھ لینا چاہیے کہ جتنا کوئی شخص سست اور کاہل ہوگا، اتنا ہی اس بات کا قائل ہوگا کہ بڑے بڑے کام صرف ذہین اشخاص ہی کر سکتے ہیں۔ ذہانت کیا ہے؟ انتہا درجے کی کاوش کرنے کی اہلیت کا دوسرا نام ہے۔ کاش! ان سست اور کاہل نوجوانوں کو ان تکالیف، ان مصائب اور ان ناکامیوں کا علم ہوتا جو بڑے کام کرنے والی ہستیوں کے سدراہ ہوتے ہیں تو یقیناً اُن کی ڈھارس بندھ جاتی اور وہ بھی کام کرنے کے لیے کمر باندھ لیتے۔",
      precis:
        "مشہور اشخاص کی سوانح سے معلوم ہوتا ہے کہ وہ انتھک محنت سے کامیاب ہوئے۔ سست نوجوان ان کی ترقی کو کوشش کے بجائے ذہانت سمجھتے ہیں، حالانکہ انتہائی کاوش کی اہلیت ہی ذہانت ہے۔ اگر یہ نوجوان ان کی مشکلات و ناکامیوں کو جان لیں تو حوصلہ پا کر کام شروع کر دیں۔",
      englishGloss:
        "Argues that sustained hard work—not effortless innate genius—drives historical achievement, and learning from past struggles inspires youth to act."
    },
    {
      id: "pr-6",
      kind: "practice",
      badgeLabel: "Practice 06",
      urduNumber: "مشقی عبارت (۶)",
      examQuestion: "سوال نمبر ۴ (الف) — مشقی عبارت نمبر ۶",
      category: "education",
      categoryLabel: "Education & Language",
      pages: "pp. 76–79",
      titles: [
        "اردو بطور ذریعہ تعلیم",
        "ذریعہ تعلیم کا مسئلہ",
        "قومی زبان اور تعلیمی معیار"
      ],
      originalText:
        "کسی غیر زبان کو ذریعہ علم بنانا حماقت کے سوا کچھ نہیں۔ جاپان میں جاپانی، چین میں چینی، انگلستان میں انگریزی، فرانس میں فرانسیسی، جرمنی میں جرمن غرضیکہ ہر ملک کے اندر وہی زبان ذریعہ تعلیم ہے جس کو سب بخوبی سمجھتے ہیں سوائے پاکستان کے، جہاں سب لوگ سمجھتے تو اردو ہیں لیکن یہاں ذریعہ تعلیم انگریزی ہے اور اسی وجہ سے ہمارا معیارِ تعلیم پست ہے۔ علم اسی زبان میں اچھی طرح دی جا سکتی ہے جس کو طالب علم آسانی سے سمجھ سکیں۔ ہمارے یہاں تعلیم اس زبان میں دی جاتی ہے جس کو سمجھنے میں دس سال کا عرصہ لگ جاتا ہے اور پھر کہیں جا کر صحیح معنوں میں علم سیکھنے کا آغاز ہوتا ہے۔ ہمارے زوال، پستی اور نالائقی کا واحد سبب یہی ہے کہ ہم نے اردو کو ذریعہ تعلیم نہیں بنایا اور ہم اپنا قیمتی وقت علوم سیکھنے کے بجائے انگریزی سیکھنے میں ضائع کر دیتے ہیں۔",
      precis:
        "غیر زبان کو ذریعہ تعلیم بنانا حماقت ہے۔ تمام ممالک میں عام فہم زبان ذریعہ تعلیم ہے، مگر پاکستان میں اردو سمجھنے کے بجائے انگریزی رائج ہے۔ اسے سیکھنے میں دس سال ضائع ہونے سے معیارِ تعلیم پست ہے۔ اردو کو ذریعہ تعلیم نہ بنانا ہی ہمارے زوال کا سبب ہے۔",
      englishGloss:
        "Critiques adopting a foreign language as the medium of instruction and makes the case for teaching in widely understood Urdu."
    },
    {
      id: "pr-7",
      kind: "practice",
      badgeLabel: "Practice 07",
      urduNumber: "مشقی عبارت (۷)",
      examQuestion: "سوال نمبر ۴ (الف) — مشقی عبارت نمبر ۷",
      category: "education",
      categoryLabel: "Education & Language",
      pages: "pp. 76–79",
      titles: [
        "تعلیمی پستی کے اسباب",
        "معیارِ تعلیم میں گراوٹ کی وجوہات",
        "نظامِ تعلیم کے مسائل"
      ],
      originalText:
        "تعلیمی پستی اور کم شرحِ تعلیم کے یوں تو بہت سے اسباب ہیں اور اُن کی تفصیل کے لیے دفتر کے دفتر درکار ہیں لیکن میرے خیال میں گرتے ہوئے معیارِ تعلیم کا بنیادی سبب اور اصل وجہ تعلیم کے لیے مثبت منصوبہ بندی کا فقدان ہے۔ سستی شہرت اور نام نہاد نعرہ ترقی نے رہی سہی کسر بھی پوری کر دی ہے۔ نام نہاد ماہرین نے تعلیم کو عام کرنے کا نعرہ لگایا تو ہر ضلع، تحصیل اور قصبے میں تعلیمی ادارے منہ شہود پر آئے۔ ان میں سے بہت سے تعلیمی ادارے اوپر سے تو نور ہے ہیں اور نوجوان نسلوں کا خون قوم بھی مفت میں اپنی جان کھور رہے ہیں۔ تعلیمی ادارے تو ہر جگہ موجود ہیں مگر طلبہ و طالبات، اساتذہ، والدین اور دیگر متعلقہ افراد کی عدم توجہی اپنا کردار ادا کر رہی ہے۔ اساتذہ ہیں کہ رہائش کے مسئلہ سے دو چار در بدر مارے مارے پھرتے ہیں۔ عوام اتنے بے بس ہو چکے ہیں کہ ان کا تعاون نہ ہونے کے برابر ہے۔ جب تک تعلیمی ادارے مذکورہ بالا مسائل سے دو چار رہیں گے، معیارِ تعلیم گرتا چلا جائے گا۔",
      precis:
        "تعلیمی پستی اور کم شرحِ تعلیم کی بنیادی وجہ مثبت منصوبہ بندی کا فقدان ہے۔ سستی شہرت کے لیے جگہ جگہ کھلنے والے ادارے بدحال ہیں اور بچوں کا نقصان ہو رہا ہے۔ طلبہ، اساتذہ، والدین اور متعلقین کی عدم توجہی، اساتذہ کے رہائشی مسائل اور عوامی عدم تعاون کے برقرار رہنے تک معیارِ تعلیم گرتا رہے گا۔",
      englishGloss:
        "Identifies lack of constructive planning, poorly run institutions, stakeholder apathy, and teacher welfare issues behind declining educational standards."
    },
    {
      id: "pr-8",
      kind: "practice",
      badgeLabel: "Practice 08",
      urduNumber: "مشقی عبارت (۸)",
      examQuestion: "سوال نمبر ۴ (الف) — مشقی عبارت نمبر ۸",
      category: "society",
      categoryLabel: "Society & Progress",
      pages: "pp. 76–79",
      titles: [
        "ماحول کا تحفظ اور ہماری ذمہ داری",
        "پائیدار معاشرہ اور ماحولیاتی اصول",
        "ماحولیاتی توازن کی اہمیت"
      ],
      originalText:
        "انسان کے ارد گرد کا ماحول اس کی فطرت کی عکاسی کرتا ہے۔ صحت مند انسانوں سے صحت مند معاشرے جنم لیتے ہیں۔ صحت کی قیمت پر کوئی بھی ترقی خوش آئند نہیں ہوا کرتی۔ انسان دوستی اور پائیدار معاشرے کے شفاف تصور کے لیے ہر شخص کو، جہاں تک اس کی دسترس ہے، اپنا فرض ادا کرنا ہوگا۔ چنانچہ ہم پر لازم آتا ہے کہ ہم اپنی ضرورتیں اس طرح پوری کریں جن سے وسائل پر کم سے کم بوجھ پڑے۔ یہ نہ ہو کہ ہمارے آج کے آرام و آسائش کا خمیازہ ہماری آنے والی نسلوں کو بھگتنا پڑے۔ اس کی ابتدا کا پہلا، آسان اور سب سے مناسب راستہ یہ ہے کہ ہم ماحولیات کے بنیادی اصولوں کی پیروی کرتے ہوئے، پانی، توانائی اور باقی چیزوں کو کفایت سے استعمال کریں۔ اگر ماحول کی تبدیلی موجودہ رفتار سے جاری رہی تو زیادہ امکان یہی ہے کہ آنے والی نسلوں کے لیے تباہ شدہ ماحولیاتی نظام ہی باقی رہ جائے گا۔",
      precis:
        "ماحول انسانی فطرت کا عکاس ہے اور صحت مند افراد سے صحت مند معاشرہ بنتا ہے۔ صحت کی قیمت پر ترقی نامناسب ہے؛ پائیدار معاشرے کے لیے ہر فرد کو ماحولیاتی اصولوں کے تحت پانی، توانائی اور اشیا کفایت سے برتنی چاہئیں، ورنہ ماحولیاتی تبدیلی کی موجودہ رفتار سے آئندہ نسلوں کے لیے تباہ شدہ ماحول ہی باقی رہ جائے گا۔",
      englishGloss:
        "Connects environmental stewardship with public health and urges conservation of water, energy, and resources for future generations."
    },
    {
      id: "pr-9",
      kind: "practice",
      badgeLabel: "Practice 09",
      urduNumber: "مشقی عبارت (۹)",
      examQuestion: "سوال نمبر ۴ (الف) — مشقی عبارت نمبر ۹",
      category: "character",
      categoryLabel: "Ethics & Character",
      pages: "pp. 76–79",
      titles: [
        "نواب محسن الملک کی خوبیاں",
        "نواب محسن الملک کی شخصیت",
        "محسن الملک کے اوصاف"
      ],
      originalText:
        "قدرت نے نواب محسن الملک کو بہت سی خوبیاں عطا کی تھیں۔ وجاہت، ذہانت، خوش بیانی اور فیاضی ان کی ایسی عام اور ممتاز صفات تھیں کہ ایک راہ چلتا بھی چند منٹ کی بات چیت میں معلوم کر لیتا تھا۔ خطاب یا نام اُن کے سر کھ دیے جاتے ہیں۔ مٹی کی خصوصیات کا ان میں مطلق لحاظ نہیں ہوتا۔ نام رکھتے وقت تو ممکن ہی نہیں۔ عطائے خطاب کے وقت بھی اس کا لحاظ نہیں کیا جاتا لیکن محسن الملک کا خطاب ان کے لیے بہت ہی موزوں نکلا۔ ان میں پارس پتھر کی خاصیت تھی۔ کوئی ہو کہیں کا، اُن سے چھو انہیں اور کندن کا ہوا نہیں۔ اگر کسی نے سلام بھی کر لیا تو ان پر اس کا بار رہتا تھا اور جب تک اس کا معاوضہ نہ کر لیتے انہیں چین نہ آتا۔ یہاں تک کہ وہ اپنے دشمن کو بھی نہ بھولتے تھے اور یہ میں ذاتی علم سے کہتا ہوں کہ وہ بھی ان کے زیر بارِ منت تھے۔",
      precis:
        "نواب محسن الملک کی وجاہت، ذہانت، خوش بیانی اور فیاضی مختصر گفتگو میں ہی عیاں ہو جاتی۔ عموماً نام و خطاب بلا لحاظِ صفات رکھے جاتے ہیں، مگر محسن الملک کا خطاب ان پر موزوں نکلا۔ ان کی صحبت سے ہر شخص فیض پاتا۔ وہ سلام کا معاوضہ دیے بغیر چین نہ پاتے، حتیٰ کہ دشمن بھی ان کے احسان مند تھے۔",
      englishGloss:
        "Portrays Nawab Mohsin-ul-Mulk's eloquence, generosity, and noble character that earned admiration even from his adversaries."
    },
    {
      id: "pr-10",
      kind: "practice",
      badgeLabel: "Practice 10",
      urduNumber: "مشقی عبارت (۱۰)",
      examQuestion: "سوال نمبر ۴ (الف) — مشقی عبارت نمبر ۱۰",
      category: "literature",
      categoryLabel: "Literature & Prose",
      pages: "pp. 76–79",
      titles: [
        "شاہد احمد دہلوی کا اسلوبِ نثر",
        "شاہد احمد دہلوی کی نثر نگاری",
        "دلی کا بانکپن اور شاہد احمد دہلوی کی نثر"
      ],
      originalText:
        "زبان کا صحیح استعمال اور محاوروں کے برتنے کا سلیقہ ان کا خاندانی وصف ہے جو اپنی پوری رچاؤٹ اور ایک نئے توازن کے ساتھ ان کی نثر میں آ گیا ہے۔ شاہد احمد دہلوی کی نثر میں دلی کا وہ سارا بانکپن موجود ہے جو الگ ڈپٹی نذیر احمد اور محمد حسین آزاد کے ہاں ملتا ہے۔ آزاد کی نثر میں استعاروں کا استعمال کثرت سے ہوتا ہے۔ وہ ایک بات کو کئی کئی استعاروں کے ذریعے ادا کرتے ہیں اور ان کی عبارت رنگین اور تخیل کے زور سے شوخ اور شگفتہ ہو جاتی ہے۔ نذیر احمد محاوروں کو خوب خوب استعمال کرتے ہیں۔ شاہد کے ہاں نہ استعاروں کی کثرت ہے نہ محاوروں کی لیکن اس کے باوجود دونوں صاحبِ طرز ادیبوں کی نثر کے امکانات جس نقطے پر ملتے ہیں وہاں سے شاہد احمد دہلوی کی نثر پیدا ہوتی ہے۔",
      precis:
        "شاہد احمد دہلوی کی نثر میں زبان و محاورے کا متوازن خاندانی سلیقہ اور دلی کا بانکپن موجود ہے۔ آزاد استعاروں و تخیل سے عبارت رنگین بناتے اور نذیر احمد محاورے خوب برتتے ہیں۔ شاہد استعاروں و محاوروں کی کثرت کے بغیر انھی دونوں ادیبوں کے اسلوب کے سنگم سے نثر لکھتے ہیں۔",
      englishGloss:
        "Analyzes Shahid Ahmad Dehlavi's prose as a balanced synthesis of Muhammad Husain Azad's imagery and Deputy Nazir Ahmad's idiomatic Delhi Urdu."
    }
  ];

  const SPECIMEN_ZONES = {
    question: {
      title: "1. Centered Question Header (سوال نمبر)",
      description:
        "Center the question number at the top of the answer sheet using a cut-nib marker (605/604), underlined cleanly without decorative clutter.",
      tip: "Examiner Tip: Keep the header strictly centered with generous breathing room before starting the title line."
    },
    title: {
      title: "2. Title Heading (مجوزہ عنوان)",
      description:
        "Write 'عنوان:' clearly with a cut marker on its own line, followed by a concise 2–6 word title reflecting the passage's central theme.",
      tip: "Scoring Rule: Board rubrics typically award dedicated marks (usually 1–2 marks out of 10) specifically for an accurate title."
    },
    body: {
      title: "3. Single-Paragraph Précis (تلخیص)",
      description:
        "Write 'تلخیص:' as a clear subheading, then compose the entire summary in one cohesive paragraph using a blue or black pen—never in bullet points.",
      tip: "Style Rule: Use indirect third-person voice in your own words. Omit examples, similes (تشبیہات), and phrases like 'مصنف کہتا ہے'."
    },
    tally: {
      title: "4. Word Count Notation (الفاظ کا حساب)",
      description:
        "Keep your précis close to one-third (1/3) of the original passage's word count. Note the exact original vs. précis word count neatly if required by your board.",
      tip: "Math Check: For a 120-word passage, aim for roughly 38–44 words—never exceeding half the original length."
    },
    closing: {
      title: "5. Finishing Rule (ختمی لکیر)",
      description:
        "Close the answer cleanly with a straight or dashed finishing line drawn with a scale and marker so the examiner sees a clear boundary before the next question.",
      tip: "Presentation Discipline: Avoid ornate floral borders; a crisp single line keeps the sheet readable and fast to grade."
    }
  };

  const DRAFTS_STORAGE_KEY = "qawaid_insha_drafts_v1";
  const CHECKLIST_STORAGE_KEY = "qawaid_github_checklist_v1";

  function countUrduWords(text) {
    const cleaned = (text || "").trim();
    if (!cleaned) return 0;
    return cleaned.split(/\s+/).filter(Boolean).length;
  }

  function cleanTitleForExam(rawTitle) {
    return (rawTitle || "").replace(/\s*\(کتاب میں دیا گیا عنوان\)\s*/g, "").trim();
  }

  function loadStorage(key, fallback) {
    try {
      const raw = window.localStorage.getItem(key);
      return raw ? JSON.parse(raw) : fallback;
    } catch {
      return fallback;
    }
  }

  function saveStorage(key, value) {
    try {
      window.localStorage.setItem(key, JSON.stringify(value));
    } catch {
      // Ignore storage quota errors in restricted preview browsers
    }
  }

  function showToast(message) {
    const banner = document.getElementById("toast-banner");
    if (!banner) return;
    banner.textContent = message;
    banner.classList.add("is-visible");
    window.clearTimeout(showToast._timer);
    showToast._timer = window.setTimeout(() => {
      banner.classList.remove("is-visible");
    }, 2400);
  }

  function setupSharedHeader() {
    const menuBtn = document.getElementById("mobile-menu-btn");
    const nav = document.getElementById("primary-nav");
    if (menuBtn && nav) {
      menuBtn.addEventListener("click", () => {
        const expanded = menuBtn.getAttribute("aria-expanded") === "true";
        menuBtn.setAttribute("aria-expanded", String(!expanded));
        nav.classList.toggle("is-open", !expanded);
      });
    }

    const printBtn = document.getElementById("print-sheet-btn");
    if (printBtn) {
      printBtn.addEventListener("click", () => {
        window.print();
      });
    }

    document.querySelectorAll(".media-frame img").forEach((img) => {
      img.addEventListener("error", () => {
        const frame = img.closest(".media-frame");
        if (frame) frame.classList.add("is-fallback");
      });
      if (img.complete && img.naturalWidth === 0) {
        const frame = img.closest(".media-frame");
        if (frame) frame.classList.add("is-fallback");
      }
    });
  }

  /* ========================================================================
     Home Page: Compendium, Filters, Exam Sheet Mode & Practice Studio
     ======================================================================== */
  function setupCompendiumPage() {
    const listEl = document.getElementById("passages-list");
    if (!listEl) return;

    const filterBtns = Array.from(document.querySelectorAll(".filter-tab"));
    const searchInput = document.getElementById("passage-search");
    const glossToggle = document.getElementById("toggle-gloss");
    const examModeToggle = document.getElementById("toggle-exam-mode");
    const countLabel = document.getElementById("results-count");
    const studioSelect = document.getElementById("studio-passage-select");
    const studioOpenBtn = document.getElementById("studio-open-btn");

    const state = {
      category: "all",
      query: "",
      showGloss: true,
      examMode: false,
      openPracticeId: null,
      selectedTitles: {},
      drafts: loadStorage(DRAFTS_STORAGE_KEY, {})
    };

    if (studioSelect) {
      PASSAGES.forEach((p) => {
        const opt = document.createElement("option");
        opt.value = p.id;
        opt.textContent = `${p.badgeLabel} — ${cleanTitleForExam(p.titles[0])}`;
        studioSelect.appendChild(opt);
      });
    }

    function copyText(text, successMsg) {
      if (navigator.clipboard && navigator.clipboard.writeText) {
        navigator.clipboard
          .writeText(text)
          .then(() => showToast(successMsg))
          .catch(() => fallbackCopy(text, successMsg));
      } else {
        fallbackCopy(text, successMsg);
      }
    }

    function fallbackCopy(text, successMsg) {
      const ta = document.createElement("textarea");
      ta.value = text;
      ta.setAttribute("readonly", "");
      ta.style.position = "fixed";
      ta.style.opacity = "0";
      document.body.appendChild(ta);
      ta.select();
      try {
        document.execCommand("copy");
        showToast(successMsg);
      } catch {
        showToast("Copy unavailable in this browser.");
      }
      document.body.removeChild(ta);
    }

    function getDraft(id) {
      return (
        state.drafts[id] || {
          notes: "",
          draft: "",
          checks: [false, false, false, false]
        }
      );
    }

    function updateDraft(id, partial) {
      const current = getDraft(id);
      state.drafts[id] = { ...current, ...partial };
      saveStorage(DRAFTS_STORAGE_KEY, state.drafts);
    }

    function getSelectedTitleIndex(id) {
      return typeof state.selectedTitles[id] === "number" ? state.selectedTitles[id] : 0;
    }

    function evaluateWordTarget(draftWords, originalWords) {
      const oneThird = Math.round(originalWords / 3);
      const minTarget = Math.max(10, Math.round(oneThird * 0.8));
      const maxTarget = Math.round(oneThird * 1.25);
      if (draftWords === 0) {
        return {
          cls: "",
          text: `Target: ~${oneThird} words (1/3rd of ${originalWords} words)`
        };
      }
      if (draftWords < minTarget) {
        return {
          cls: "",
          text: `Too brief (${draftWords} words) — ensure all key ideas are covered.`
        };
      }
      if (draftWords <= maxTarget) {
        return {
          cls: "is-target",
          text: `On Target (${draftWords} words) — matches 1/3rd textbook standard (~${oneThird}).`
        };
      }
      return {
        cls: "is-long",
        text: `Over Target (${draftWords} words) — trim similes, examples, or repetition.`
      };
    }

    function buildPassageCard(p) {
      const originalWords = countUrduWords(p.originalText);
      const precisWords = countUrduWords(p.precis);
      const targetOneThird = Math.round(originalWords / 3);
      const ratioPercent = originalWords > 0 ? Math.round((precisWords / originalWords) * 100) : 0;
      const selectedIdx = getSelectedTitleIndex(p.id);
      const activeTitle = cleanTitleForExam(p.titles[selectedIdx] || p.titles[0]);

      const draftState = getDraft(p.id);
      const isOpen = state.openPracticeId === p.id;
      const draftWords = countUrduWords(draftState.draft);
      const targetEval = evaluateWordTarget(draftWords, originalWords);

      const titleButtonsMarkup = p.titles
        .map((titleOption, idx) => {
          const isActive = idx === selectedIdx;
          const sep = idx < p.titles.length - 1 ? '<span class="title-separator" aria-hidden="true">·</span>' : "";
          return `
            <button
              type="button"
              class="title-option-btn${isActive ? " is-active" : ""}"
              data-id="${p.id}"
              data-title-idx="${idx}"
              aria-pressed="${isActive}"
            >${titleOption}</button>${sep}
          `;
        })
        .join("");

      const article = document.createElement("article");
      article.className = `passage-card${state.examMode ? " is-exam-view" : ""}`;
      article.id = `passage-${p.id}`;

      article.innerHTML = `
        <div class="passage-meta-row">
          <div class="passage-meta-text tabular-nums">
            <span class="passage-meta-strong">${p.badgeLabel}</span>
            <span aria-hidden="true">·</span>
            <span>${p.categoryLabel}</span>
            <span aria-hidden="true">·</span>
            <span>${p.pages}</span>
            <span aria-hidden="true">·</span>
            <span>Original ${originalWords}w → Précis ${precisWords}w (${ratioPercent}%)</span>
          </div>
          <div class="passage-actions">
            <button type="button" class="btn btn-ghost btn-sm copy-btn" data-id="${p.id}">
              Copy Précis
            </button>
            <button type="button" class="btn ${isOpen ? "btn-primary" : "btn-secondary"} btn-sm practice-toggle-btn" data-id="${p.id}" aria-expanded="${isOpen}">
              ${isOpen ? "Close Practice" : "Practice This Passage"}
            </button>
          </div>
        </div>

        <div class="urdu-block">
          <div class="original-passage-box">
            <div class="original-passage-head">
              <span class="original-passage-label">اصل عبارت (${p.urduNumber}):</span>
              <span class="original-word-meta tabular-nums">${originalWords} Urdu Words · 1/3rd Target ~${targetOneThird}w</span>
            </div>
            <p class="original-passage-text">${p.originalText}</p>
          </div>

          <div class="titles-selector-block">
            <span class="titles-selector-caption">Suggested Titles (مجوزہ عنوانات — Click any option to set active title):</span>
            <div class="titles-selector-list">
              ${titleButtonsMarkup}
            </div>
          </div>

          <div class="exam-sheet-header">
            <span class="exam-question-heading">${p.examQuestion}</span>
          </div>

          <div class="passage-header-urdu">
            <h3 class="passage-title-urdu" id="active-title-${p.id}">
              <span class="passage-title-label">مجوزہ عنوان:</span>${activeTitle}
            </h3>
            <span class="passage-number-urdu">${p.urduNumber}</span>
          </div>
          <p class="passage-body-urdu">
            <span class="passage-body-label">تلخیص:</span>${p.precis}
          </p>
        </div>

        <div class="exam-finishing-line">
          <span class="tabular-nums">اصل عبارت: <strong>${originalWords}</strong> الفاظ · تلخیص: <strong>${precisWords}</strong> الفاظ</span>
          <span class="finishing-rule-bar" aria-hidden="true"></span>
          <span>ختمی لکیر</span>
        </div>

        <p class="english-gloss${state.showGloss ? "" : " is-hidden"}">
          <strong>Topic Summary:</strong> ${p.englishGloss}
        </p>

        <div class="practice-drawer" id="practice-drawer-${p.id}" ${isOpen ? "" : "hidden"}>
          <div class="practice-grid">
            <div class="practice-field-group">
              <div>
                <div class="field-label">
                  <label for="notes-${p.id}">Step 1 · Rough Key Points (اہم نکات — Optional Scratchpad)</label>
                </div>
                <textarea
                  id="notes-${p.id}"
                  class="urdu-textarea is-compact practice-notes-input"
                  data-id="${p.id}"
                  placeholder="عبارت کے اہم نکات یہاں مختصراً نوٹ کریں..."
                >${draftState.notes}</textarea>
              </div>
              <div>
                <div class="field-label">
                  <label for="draft-${p.id}">Step 2 · Your Single-Paragraph Précis (اپنی تلخیص لکھیں)</label>
                  <span class="tabular-nums" id="draft-count-${p.id}">${draftWords} words</span>
                </div>
                <textarea
                  id="draft-${p.id}"
                  class="urdu-textarea is-draft practice-draft-input"
                  data-id="${p.id}"
                  placeholder="اپنے الفاظ میں ایک پیراگراف پر مشتمل تلخیص تحریر کریں..."
                >${draftState.draft}</textarea>
              </div>
            </div>

            <div class="practice-stats-panel">
              <div class="stat-row tabular-nums">
                <span>Original Passage Length</span>
                <strong>${originalWords} words</strong>
              </div>
              <div class="stat-row tabular-nums">
                <span>1/3rd Target Range</span>
                <strong>${Math.max(10, Math.round(targetOneThird * 0.8))}–${Math.round(targetOneThird * 1.25)} words</strong>
              </div>
              <div class="stat-row tabular-nums">
                <span>Model Précis Length</span>
                <strong>${precisWords} words</strong>
              </div>
              <div class="stat-status ${targetEval.cls}" id="target-status-${p.id}">
                ${targetEval.text}
              </div>
              <ul class="checklist-items">
                <li>
                  <label>
                    <input type="checkbox" class="rule-check" data-id="${p.id}" data-idx="0" ${draftState.checks[0] ? "checked" : ""}>
                    <span>Single cohesive paragraph (no bullets)</span>
                  </label>
                </li>
                <li>
                  <label>
                    <input type="checkbox" class="rule-check" data-idx="1" data-id="${p.id}" ${draftState.checks[1] ? "checked" : ""}>
                    <span>Written in own indirect words</span>
                  </label>
                </li>
                <li>
                  <label>
                    <input type="checkbox" class="rule-check" data-idx="2" data-id="${p.id}" ${draftState.checks[2] ? "checked" : ""}>
                    <span>Removed examples, similes &amp; repetition</span>
                  </label>
                </li>
                <li>
                  <label>
                    <input type="checkbox" class="rule-check" data-idx="3" data-id="${p.id}" ${draftState.checks[3] ? "checked" : ""}>
                    <span>Includes concise title (عنوان)</span>
                  </label>
                </li>
              </ul>
              <div class="practice-footer-actions">
                <button type="button" class="btn btn-ghost btn-sm clear-draft-btn" data-id="${p.id}">
                  Clear Draft
                </button>
              </div>
            </div>
          </div>
        </div>
      `;

      return article;
    }

    function appendSectionHeader(titleEn, titleUr) {
      const header = document.createElement("div");
      header.className = "section-group-header";
      header.innerHTML = `
        <h3>${titleEn}</h3>
        <span class="section-group-urdu" lang="ur">${titleUr}</span>
      `;
      listEl.appendChild(header);
    }

    function renderPassages() {
      const rawQuery = state.query.trim();
      const q = rawQuery.toLowerCase();

      const filtered = PASSAGES.filter((p) => {
        let matchesCat = true;
        if (state.category === "examples") {
          matchesCat = p.kind === "example";
        } else if (state.category !== "all") {
          matchesCat = p.category === state.category;
        }
        if (!matchesCat) return false;
        if (!q) return true;

        const titlesJoined = p.titles.join(" ");
        return (
          titlesJoined.includes(rawQuery) ||
          p.originalText.includes(rawQuery) ||
          p.precis.includes(rawQuery) ||
          p.urduNumber.includes(rawQuery) ||
          p.englishGloss.toLowerCase().includes(q) ||
          p.categoryLabel.toLowerCase().includes(q) ||
          p.badgeLabel.toLowerCase().includes(q)
        );
      });

      if (countLabel) {
        countLabel.textContent = `Showing ${filtered.length} of ${PASSAGES.length} passages`;
      }

      listEl.innerHTML = "";

      if (filtered.length === 0) {
        const empty = document.createElement("div");
        empty.className = "empty-state";
        empty.innerHTML = `
          <h3>No matching passages found</h3>
          <p>Try clearing your search term or switching back to all passages.</p>
          <button type="button" class="btn btn-primary" id="reset-filters-btn">Reset Filters</button>
        `;
        listEl.appendChild(empty);
        const resetBtn = document.getElementById("reset-filters-btn");
        if (resetBtn) {
          resetBtn.addEventListener("click", () => {
            state.category = "all";
            state.query = "";
            if (searchInput) searchInput.value = "";
            filterBtns.forEach((b) =>
              b.classList.toggle("is-active", b.dataset.category === "all")
            );
            renderPassages();
          });
        }
        return;
      }

      const examples = filtered.filter((p) => p.kind === "example");
      const practices = filtered.filter((p) => p.kind === "practice");

      if (examples.length > 0) {
        appendSectionHeader(
          "Part I · Solved Textbook Examples (Pages 75–76)",
          "حصہ اول: کتاب میں حل شدہ دو نمونے (صفحہ ۷۵–۷۶)"
        );
        examples.forEach((p) => listEl.appendChild(buildPassageCard(p)));
      }

      if (practices.length > 0) {
        appendSectionHeader(
          "Part II · Practice Passages 1–10 (Pages 76–79)",
          "حصہ دوم: مشقی عبارات ۱ تا ۱۰ (صفحہ ۷۶–۷۹)"
        );
        practices.forEach((p) => listEl.appendChild(buildPassageCard(p)));
      }

      bindCardEvents();
    }

    function bindCardEvents() {
      listEl.querySelectorAll(".title-option-btn").forEach((btn) => {
        btn.addEventListener("click", () => {
          const id = btn.dataset.id;
          const idx = Number(btn.dataset.titleIdx);
          const p = PASSAGES.find((item) => item.id === id);
          if (!p) return;

          state.selectedTitles[id] = idx;
          const card = document.getElementById(`passage-${id}`);
          if (card) {
            card.querySelectorAll(".title-option-btn").forEach((b) => {
              const active = Number(b.dataset.titleIdx) === idx;
              b.classList.toggle("is-active", active);
              b.setAttribute("aria-pressed", String(active));
            });
          }

          const titleEl = document.getElementById(`active-title-${id}`);
          if (titleEl) {
            const cleanTitle = cleanTitleForExam(p.titles[idx]);
            titleEl.innerHTML = `<span class="passage-title-label">مجوزہ عنوان:</span>${cleanTitle}`;
          }
        });
      });

      listEl.querySelectorAll(".copy-btn").forEach((btn) => {
        btn.addEventListener("click", () => {
          const id = btn.dataset.id;
          const p = PASSAGES.find((item) => item.id === id);
          if (!p) return;
          const selectedIdx = getSelectedTitleIndex(p.id);
          const activeTitle = cleanTitleForExam(p.titles[selectedIdx] || p.titles[0]);
          const allTitles = p.titles.join(" / ");
          const payload = `مجوزہ عنوان: ${activeTitle}\nدیگر ممکنہ عنوانات: ${allTitles}\nتلخیص: ${p.precis}`;
          copyText(payload, `Copied ${p.badgeLabel} titles & précis to clipboard.`);
          const originalLabel = btn.textContent;
          btn.textContent = "Copied";
          window.setTimeout(() => {
            btn.textContent = originalLabel;
          }, 1500);
        });
      });

      listEl.querySelectorAll(".practice-toggle-btn").forEach((btn) => {
        btn.addEventListener("click", () => {
          const id = btn.dataset.id;
          state.openPracticeId = state.openPracticeId === id ? null : id;
          renderPassages();
          if (state.openPracticeId === id) {
            const card = document.getElementById(`passage-${id}`);
            if (card) card.scrollIntoView({ behavior: "smooth", block: "nearest" });
          }
        });
      });

      listEl.querySelectorAll(".practice-notes-input").forEach((ta) => {
        ta.addEventListener("input", () => {
          const id = ta.dataset.id;
          updateDraft(id, { notes: ta.value });
        });
      });

      listEl.querySelectorAll(".practice-draft-input").forEach((ta) => {
        ta.addEventListener("input", () => {
          const id = ta.dataset.id;
          const p = PASSAGES.find((item) => item.id === id);
          if (!p) return;
          updateDraft(id, { draft: ta.value });

          const words = countUrduWords(ta.value);
          const originalWords = countUrduWords(p.originalText);
          const countEl = document.getElementById(`draft-count-${id}`);
          const statusEl = document.getElementById(`target-status-${id}`);
          if (countEl) countEl.textContent = `${words} words`;
          if (statusEl) {
            const evaluation = evaluateWordTarget(words, originalWords);
            statusEl.className = `stat-status ${evaluation.cls}`;
            statusEl.textContent = evaluation.text;
          }
        });
      });

      listEl.querySelectorAll(".rule-check").forEach((cb) => {
        cb.addEventListener("change", () => {
          const id = cb.dataset.id;
          const idx = Number(cb.dataset.idx);
          const current = getDraft(id);
          const nextChecks = [...current.checks];
          nextChecks[idx] = cb.checked;
          updateDraft(id, { checks: nextChecks });
        });
      });

      listEl.querySelectorAll(".clear-draft-btn").forEach((btn) => {
        btn.addEventListener("click", () => {
          const id = btn.dataset.id;
          const p = PASSAGES.find((item) => item.id === id);
          updateDraft(id, {
            notes: "",
            draft: "",
            checks: [false, false, false, false]
          });
          renderPassages();
          showToast(`Cleared practice draft for ${p ? p.badgeLabel : id}.`);
        });
      });
    }

    filterBtns.forEach((btn) => {
      btn.addEventListener("click", () => {
        filterBtns.forEach((b) => b.classList.remove("is-active"));
        btn.classList.add("is-active");
        state.category = btn.dataset.category || "all";
        renderPassages();
      });
    });

    if (searchInput) {
      searchInput.addEventListener("input", () => {
        state.query = searchInput.value;
        renderPassages();
      });
    }

    if (glossToggle) {
      glossToggle.addEventListener("change", () => {
        state.showGloss = glossToggle.checked;
        renderPassages();
      });
    }

    if (examModeToggle) {
      examModeToggle.addEventListener("change", () => {
        state.examMode = examModeToggle.checked;
        renderPassages();
      });
    }

    if (studioOpenBtn && studioSelect) {
      studioOpenBtn.addEventListener("click", () => {
        const chosenId = studioSelect.value;
        state.category = "all";
        state.query = "";
        if (searchInput) searchInput.value = "";
        filterBtns.forEach((b) =>
          b.classList.toggle("is-active", b.dataset.category === "all")
        );
        state.openPracticeId = chosenId;
        renderPassages();
        const targetCard = document.getElementById(`passage-${chosenId}`);
        if (targetCard) {
          targetCard.scrollIntoView({ behavior: "smooth", block: "start" });
        }
      });
    }

    renderPassages();
  }

  /* ========================================================================
     About Page: Interactive Board Exam Paper Specimen
     ======================================================================== */
  function setupSpecimenInspector() {
    const inspector = document.getElementById("specimen-inspector-detail");
    if (!inspector) return;

    const zones = Array.from(document.querySelectorAll(".specimen-zone"));
    const zoneButtons = Array.from(document.querySelectorAll(".zone-pill-btn"));

    function selectZone(zoneKey) {
      const info = SPECIMEN_ZONES[zoneKey];
      if (!info) return;

      zones.forEach((z) =>
        z.classList.toggle("is-selected", z.dataset.zone === zoneKey)
      );
      zoneButtons.forEach((b) =>
        b.classList.toggle("is-selected", b.dataset.zone === zoneKey)
      );

      inspector.innerHTML = `
        <h3>${info.title}</h3>
        <p>${info.description}</p>
        <div class="inspector-tip">${info.tip}</div>
      `;
    }

    zones.forEach((z) => {
      z.addEventListener("click", () => selectZone(z.dataset.zone));
    });

    zoneButtons.forEach((b) => {
      b.addEventListener("click", () => selectZone(b.dataset.zone));
    });

    selectZone("question");
  }

  /* ========================================================================
     Contact Page: GitHub Pages Checklist & Static Feedback Form
     ======================================================================== */
  function setupContactAndChecklist() {
    const checklistEl = document.getElementById("github-deploy-checklist");
    if (checklistEl) {
      const boxes = Array.from(
        checklistEl.querySelectorAll('input[type="checkbox"]')
      );
      const progressEl = document.getElementById("checklist-progress");
      const resetChecklistBtn = document.getElementById("reset-checklist-btn");
      const saved = loadStorage(CHECKLIST_STORAGE_KEY, {});

      function updateProgress() {
        const done = boxes.filter((b) => b.checked).length;
        if (progressEl) {
          progressEl.textContent = `${done} of ${boxes.length} verified`;
        }
      }

      boxes.forEach((box) => {
        if (typeof saved[box.id] === "boolean") {
          box.checked = saved[box.id];
        }
        box.addEventListener("change", () => {
          saved[box.id] = box.checked;
          saveStorage(CHECKLIST_STORAGE_KEY, saved);
          updateProgress();
        });
      });

      if (resetChecklistBtn) {
        resetChecklistBtn.addEventListener("click", () => {
          boxes.forEach((b) => {
            b.checked = false;
            saved[b.id] = false;
          });
          saveStorage(CHECKLIST_STORAGE_KEY, saved);
          updateProgress();
          showToast("GitHub Pages checklist reset.");
        });
      }

      updateProgress();
    }

    const form = document.getElementById("study-feedback-form");
    const statusBox = document.getElementById("form-status-box");
    if (form && statusBox) {
      form.addEventListener("submit", (e) => {
        e.preventDefault();
        const name = (document.getElementById("sender-name")?.value || "").trim();
        const topic = (document.getElementById("feedback-topic")?.value || "").trim();
        const msg = (document.getElementById("feedback-message")?.value || "").trim();

        if (!name || !msg) {
          statusBox.hidden = false;
          statusBox.textContent = "Please provide both your name and your study note or feedback.";
          return;
        }

        statusBox.hidden = false;
        statusBox.textContent = `Thank you, ${name}. Your note regarding "${topic}" has been validated for static preview (no server required).`;
        form.reset();
        showToast("Study note preview recorded.");
      });
    }
  }

  document.addEventListener("DOMContentLoaded", () => {
    setupSharedHeader();
    setupCompendiumPage();
    setupSpecimenInspector();
    setupContactAndChecklist();
  });
})();
