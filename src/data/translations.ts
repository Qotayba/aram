// ─── Types ───────────────────────────────────────────────────
export type Lang = 'en' | 'ar' | 'he';

export interface Translations {
  dir: string;
  logoSub: string;
  navStory: string;
  navProducts: string;
  navNutrition: string;
  navContact: string;
  heroEyebrow: string;
  heroTitle: string;
  heroDesc: string;
  heroBtn1: string;
  heroBtn2: string;
  heroBadge: string;
  scroll: string;
  strip: string[];
  aboutEyebrow: string;
  aboutTitle: string;
  aboutBody1: string;
  aboutBody2: string;
  statYears: string;
  statPure: string;
  statAdd: string;
  aboutQuote: string;
  prodEyebrow: string;
  prodTitle: string;
  prodIntro: string;
  p1badge: string;
  p1name: string;
  p1desc: string;
  p2badge: string;
  p2name: string;
  p2desc: string;
  p3badge: string;
  p3name: string;
  p3desc: string;
  tagNonGmo: string;
  tagKosher: string;
  tagNoAdd: string;
  feat1title: string;
  feat1desc: string;
  feat2title: string;
  feat2desc: string;
  feat3title: string;
  feat3desc: string;
  feat4title: string;
  feat4desc: string;
  nutEyebrow: string;
  nutTitle: string;
  nutBody: string;
  nutNote: string;
  nutPanelTitle: string;
  nutPer: string;
  nutEnergy: string;
  nutFat: string;
  nutSatFat: string;
  nutTransFat: string;
  nutCarbs: string;
  nutSugar: string;
  nutProtein: string;
  nutCholesterol: string;
  nutFiber: string;
  nutIron: string;
  nutCalcium: string;
  nutSodium: string;
  contactEyebrow: string;
  contactTitle: string;
  contactPhone: string;
  contactWA: string;
  contactWALink: string;
  contactEmail: string;
  contactWeb: string;
  footerTagline: string;
  footerCopy: string;
  footerAllergy: string;
}

// Keys whose value is a plain string (excludes 'strip' which is string[])
export type StringKey = {
  [K in keyof Translations]: Translations[K] extends string ? K : never;
}[keyof Translations];

// Keys whose value is string[]
export type ArrayKey = {
  [K in keyof Translations]: Translations[K] extends string[] ? K : never;
}[keyof Translations];

// ─── Translation data ─────────────────────────────────────────
export const translations: Record<Lang, Translations> = {
  en: {
    dir: 'ltr',
    logoSub: 'PREMIUM TAHINI',
    navStory: 'Our Story',
    navProducts: 'Products',
    navNutrition: 'Nutrition',
    navContact: 'Contact',
    heroEyebrow: 'Est. 1940 · Nature World',
    heroTitle: 'Pure Sesame.<br/><em>Perfected.</em>',
    heroDesc: '100% pure ground sesame — no additives, no preservatives. Crafted from a tradition over eight decades in the making.',
    heroBtn1: 'Explore Products',
    heroBtn2: 'Our Story',
    heroBadge: '100%<br/><small>Pure Sesame</small>',
    scroll: 'Scroll',
    strip: ['No Preservatives', 'Non-GMO', '100% Pure Sesame', 'Kosher Certified', 'Est. 1940', 'No Additives'],
    aboutEyebrow: 'Our Heritage',
    aboutTitle: 'A Legacy<br/><em>Since 1940</em>',
    aboutBody1: 'Nature World for Halva & Tahini has been a cornerstone of authentic Palestinian food craftsmanship for over 80 years. What began as a family passion for quality has grown into a trusted name across the region.',
    aboutBody2: 'Our premium tahini is made from the finest sesame seeds — pure, wholesome, and completely free from additives. Every jar carries the weight of tradition and the promise of uncompromising quality.',
    statYears: 'Years of Craft',
    statPure: 'Pure Sesame',
    statAdd: 'Additives',
    aboutQuote: '"Pure sesame, ground with care — the way it has always been."',
    prodEyebrow: 'Our Range',
    prodTitle: 'Premium<br/><em>Tahini</em>',
    prodIntro: 'Three sizes, one uncompromising recipe. Choose what fits your operation.',
    p1badge: 'Bestseller',
    p1name: 'Premium Tahini',
    p1desc: 'Ideal for daily home use. Smooth, rich, and ready to elevate any dish — from hummus to dressings and beyond.',
    p2badge: 'Family Size',
    p2name: 'Premium Tahini',
    p2desc: 'Perfect for families and food lovers who demand the best. The same pure recipe — just more of it.',
    p3badge: 'Bulk / Wholesale',
    p3name: 'Premium Tahini',
    p3desc: 'The catering and wholesale choice. A 17 kg pail of our same uncompromising recipe — built for restaurants, food producers, and distributors.',
    tagNonGmo: 'Non-GMO',
    tagKosher: 'Kosher',
    tagNoAdd: 'No Additives',
    feat1title: 'No Preservatives',
    feat1desc: 'Shelf-stable through natural purity alone — no chemicals, ever.',
    feat2title: 'Rich Nutrition',
    feat2desc: '674 kcal · 25g protein · 57g healthy fats per 100g serving.',
    feat3title: 'Non-GMO',
    feat3desc: 'Sourced from naturally cultivated sesame — clean from seed to jar.',
    feat4title: 'Kosher Certified',
    feat4desc: 'Certified Kosher Pareve — meeting the highest standards of quality.',
    nutEyebrow: "What's Inside",
    nutTitle: 'Nutrition<br/><em>Facts</em>',
    nutBody: 'Per 100g of Aram Premium Tahini. Nothing added — every gram is pure sesame goodness.',
    nutNote: 'Store away from direct sunlight. Mix contents before use. Use a dry spoon when serving.',
    nutPanelTitle: 'Nutrition Facts',
    nutPer: 'Per 100g',
    nutEnergy: 'Energy',
    nutFat: 'Total Fat',
    nutSatFat: 'Saturated Fat',
    nutTransFat: 'Trans Fat',
    nutCarbs: 'Carbohydrates',
    nutSugar: 'Sugar',
    nutProtein: 'Protein',
    nutCholesterol: 'Cholesterol',
    nutFiber: 'Dietary Fiber',
    nutIron: 'Iron',
    nutCalcium: 'Calcium',
    nutSodium: 'Sodium',
    contactEyebrow: 'Get In Touch',
    contactTitle: 'Find Us',
    contactPhone: 'Phone',
    contactWA: 'WhatsApp',
    contactWALink: 'Chat With Us',
    contactEmail: 'Email',
    contactWeb: 'Website',
    footerTagline: 'Pure. Natural. Since 1940.',
    footerCopy: '© 2024 Nature World for Halva & Tahini. All rights reserved.',
    footerAllergy: '⚠ Contains sesame — may cause allergic reactions in some consumers.',
  },

  ar: {
    dir: 'rtl',
    logoSub: 'طحينة فاخرة',
    navStory: 'قصتنا',
    navProducts: 'المنتجات',
    navNutrition: 'القيمة الغذائية',
    navContact: 'تواصل معنا',
    heroEyebrow: 'تأسست عام 1940 · عالم الطبيعة',
    heroTitle: 'سمسم خالص.<br/><em>بامتياز.</em>',
    heroDesc: 'طحينة 100% سمسم نقي مطحون — بدون إضافات، بدون مواد حافظة. صُنعت من تقليد عريق يمتد لأكثر من ثمانية عقود.',
    heroBtn1: 'استكشف المنتجات',
    heroBtn2: 'قصتنا',
    heroBadge: '100%<br/><small>سمسم نقي</small>',
    scroll: 'تمرير',
    strip: ['بدون مواد حافظة', 'خالٍ من GMO', '100% سمسم نقي', 'معتمد كوشر', 'منذ 1940', 'بدون إضافات'],
    aboutEyebrow: 'إرثنا',
    aboutTitle: 'إرث عريق<br/><em>منذ 1940</em>',
    aboutBody1: 'شركة عالم الطبيعة للحلوى والطحينة ركيزة أصيلة في الصناعة الغذائية الفلسطينية منذ أكثر من 80 عامًا. بدأت شغفًا عائليًا نحو الجودة، ونمت لتصبح اسمًا موثوقًا في المنطقة.',
    aboutBody2: 'طحينتنا الفاخرة مصنوعة من أجود بذور السمسم — نقية وصحية وخالية تمامًا من الإضافات. كل جرة تحمل ثقل الموروث ووعد الجودة الذي لا يُساوَم عليه.',
    statYears: 'سنوات من الخبرة',
    statPure: 'سمسم نقي',
    statAdd: 'إضافات',
    aboutQuote: '"سمسم نقي، مطحون بعناية — كما كان دائمًا."',
    prodEyebrow: 'منتجاتنا',
    prodTitle: 'طحينة<br/><em>فاخرة</em>',
    prodIntro: 'ثلاثة أحجام، وصفة واحدة لا تتهاون مع الجودة. اختر ما يناسب احتياجاتك.',
    p1badge: 'الأكثر مبيعًا',
    p1name: 'طحينة فاخرة',
    p1desc: 'مثالية للاستخدام المنزلي اليومي. ناعمة وغنية، جاهزة لترقية أي طبق — من الحمص إلى الصلصات وما هو أبعد.',
    p2badge: 'حجم العائلة',
    p2name: 'طحينة فاخرة',
    p2desc: 'مثالية للعائلات ومحبي الطعام الذين يرفضون التنازل. نفس الوصفة النقية — فقط أكثر منها.',
    p3badge: 'جملة / بالجملة',
    p3name: 'طحينة فاخرة',
    p3desc: 'الخيار المثالي للمطاعم والموزعين. 17 كيلوجرام من نفس الوصفة الفائقة الجودة — مصممة لعمليات الطهي الاحترافية والصناعة الغذائية.',
    tagNonGmo: 'خالٍ من GMO',
    tagKosher: 'كوشر',
    tagNoAdd: 'بدون إضافات',
    feat1title: 'بدون مواد حافظة',
    feat1desc: 'مستقر على الرف بفضل النقاء الطبيعي وحده — بدون مواد كيميائية أبدًا.',
    feat2title: 'قيمة غذائية عالية',
    feat2desc: '674 سعرة حرارية · 25 جم بروتين · 57 جم دهون صحية لكل 100 جم.',
    feat3title: 'خالٍ من GMO',
    feat3desc: 'مصدره سمسم مزروع طبيعيًا — نظيف من البذرة إلى الجرة.',
    feat4title: 'معتمد كوشر',
    feat4desc: 'معتمد كوشر بارف — يلبي أعلى معايير الجودة.',
    nutEyebrow: 'ما بداخلها',
    nutTitle: 'القيمة<br/><em>الغذائية</em>',
    nutBody: 'لكل 100 جم من طحينة آرام الفاخرة. لا شيء مضاف — كل جرام سمسم نقي.',
    nutNote: 'احفظ بعيدًا عن أشعة الشمس المباشرة. حرك المحتويات قبل الاستعمال. استخدم ملعقة جافة عند الأخذ.',
    nutPanelTitle: 'القيمة الغذائية',
    nutPer: 'لكل 100 جم',
    nutEnergy: 'الطاقة (سعرات حرارية)',
    nutFat: 'الدهون الكلية',
    nutSatFat: 'الدهون المشبعة',
    nutTransFat: 'الدهون المتحولة',
    nutCarbs: 'الكربوهيدرات',
    nutSugar: 'السكر',
    nutProtein: 'البروتين',
    nutCholesterol: 'الكوليسترول',
    nutFiber: 'الألياف الغذائية',
    nutIron: 'الحديد',
    nutCalcium: 'الكالسيوم',
    nutSodium: 'الصوديوم',
    contactEyebrow: 'تواصل معنا',
    contactTitle: 'اعثر علينا',
    contactPhone: 'الهاتف',
    contactWA: 'واتساب',
    contactWALink: 'تحدث معنا',
    contactEmail: 'البريد الإلكتروني',
    contactWeb: 'الموقع الإلكتروني',
    footerTagline: 'نقية. طبيعية. منذ 1940.',
    footerCopy: '© 2024 عالم الطبيعة للحلوى والطحينة. جميع الحقوق محفوظة.',
    footerAllergy: '⚠ يحتوي على السمسم — قد يسبب الحساسية لبعض المستهلكين.',
  },

  he: {
    dir: 'rtl',
    logoSub: 'טחינה יוקרתית',
    navStory: 'הסיפור שלנו',
    navProducts: 'מוצרים',
    navNutrition: 'ערכים תזונתיים',
    navContact: 'צור קשר',
    heroEyebrow: 'נוסד 1940 · Nature World',
    heroTitle: 'שומשום טהור.<br/><em>מושלם.</em>',
    heroDesc: 'טחינה מ-100% שומשום טהור — ללא תוספים, ללא חומרים משמרים. מסורת של יותר משמונה עשורים.',
    heroBtn1: 'גלה מוצרים',
    heroBtn2: 'הסיפור שלנו',
    heroBadge: '100%<br/><small>שומשום טהור</small>',
    scroll: 'גלול',
    strip: ['ללא חומרים משמרים', 'ללא הנדסה גנטית', '100% שומשום טהור', 'כשר פרווה', 'מאז 1940', 'ללא תוספים'],
    aboutEyebrow: 'המורשת שלנו',
    aboutTitle: 'מורשת<br/><em>מאז 1940</em>',
    aboutBody1: 'Nature World לחלבה וטחינה היא אבן יסוד של מלאכת המזון הפלסטינית האותנטית כבר למעלה מ-80 שנה. מה שהחל כתשוקה משפחתית לאיכות הפך לשם מהימן בכל האזור.',
    aboutBody2: 'הטחינה היוקרתית שלנו עשויה מגרעיני שומשום מהמשובחים ביותר — טהורה, בריאה ונקייה לחלוטין מתוספים. כל צנצנת נושאת את משקל המסורת והבטחה לאיכות ללא פשרות.',
    statYears: 'שנות מומחיות',
    statPure: 'שומשום טהור',
    statAdd: 'תוספים',
    aboutQuote: '"שומשום טהור, טחון בקפידה — כפי שהיה תמיד."',
    prodEyebrow: 'המגוון שלנו',
    prodTitle: 'טחינה<br/><em>יוקרתית</em>',
    prodIntro: 'שלושה גדלים, מתכון אחד ללא פשרות. בחרו מה שמתאים לצרכים שלכם.',
    p1badge: 'נמכר ביותר',
    p1name: 'טחינה יוקרתית',
    p1desc: 'אידיאלית לשימוש יומיומי בבית. חלקה, עשירה ומוכנה להעלות כל מנה — מחומוס לרטבים ומעבר לכך.',
    p2badge: 'מידה משפחתית',
    p2name: 'טחינה יוקרתית',
    p2desc: 'מושלמת למשפחות ולאוהבי אוכל שאינם מוכנים להתפשר. אותו מתכון טהור — רק יותר ממנו.',
    p3badge: 'בתפזורת / סיטונאי',
    p3name: 'טחינה יוקרתית',
    p3desc: 'הבחירה של מסעדות ומפיצים. פח 17 ק"ג עם אותו מתכון ללא פשרות — מיועד למקצועני מזון ומפיצים.',
    tagNonGmo: 'ללא הנדסה גנטית',
    tagKosher: 'כשר',
    tagNoAdd: 'ללא תוספים',
    feat1title: 'ללא חומרים משמרים',
    feat1desc: 'יציב במדף בזכות הטוהר הטבעי בלבד — ללא כימיקלים, לעולם.',
    feat2title: 'עשיר ותזונתי',
    feat2desc: '674 קלוריות · 25 גרם חלבון · 57 גרם שומן בריא לכל 100 גרם.',
    feat3title: 'ללא הנדסה גנטית',
    feat3desc: 'ממקור שומשום מגודל טבעי — נקי מהזרע עד הצנצנת.',
    feat4title: 'כשר מוסמך',
    feat4desc: 'כשר פרווה מוסמך — עומד בסטנדרטים הגבוהים ביותר של איכות.',
    nutEyebrow: 'מה בפנים',
    nutTitle: 'ערכים<br/><em>תזונתיים</em>',
    nutBody: 'לכל 100 גרם טחינה יוקרתית של ארם. ללא תוספים — כל גרם הוא שומשום טהור.',
    nutNote: 'יש לאחסן הרחק מאור שמש ישיר. יש לערבב לפני השימוש. יש להשתמש בכף יבשה.',
    nutPanelTitle: 'ערכים תזונתיים',
    nutPer: 'ל-100 גרם',
    nutEnergy: 'אנרגיה (קלוריות)',
    nutFat: 'סך השומנים',
    nutSatFat: 'חומצת שומן רווי',
    nutTransFat: 'חומצת שומן טראנס',
    nutCarbs: 'פחמימות',
    nutSugar: 'סוכר',
    nutProtein: 'חלבונים',
    nutCholesterol: 'כולסטרול',
    nutFiber: 'סיבים תזונתיים',
    nutIron: 'ברזל',
    nutCalcium: 'סידן',
    nutSodium: 'נתרן',
    contactEyebrow: 'צרו קשר',
    contactTitle: 'מצאו אותנו',
    contactPhone: 'טלפון',
    contactWA: 'וואטסאפ',
    contactWALink: 'שוחחו איתנו',
    contactEmail: 'דוא"ל',
    contactWeb: 'אתר אינטרנט',
    footerTagline: 'טהורה. טבעית. מאז 1940.',
    footerCopy: '© 2024 Nature World לחלבה וטחינה. כל הזכויות שמורות.',
    footerAllergy: '⚠ מכיל שומשום — עלול לגרום לתגובות אלרגיות אצל חלק מהצרכנים.',
  },
};
