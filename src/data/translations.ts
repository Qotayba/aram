// ─── Types ───────────────────────────────────────────────────
export type Lang = 'en' | 'ar' | 'he';

export interface Translations {
  dir: string;
  logoSub: string;

  // Nav
  navAbout: string;
  navStory: string;
  navQuality: string;
  navProducts: string;
  navBenefits: string;
  navExport: string;
  navPrivateLabel: string;
  navContact: string;
  navFAQ: string;

  // Marquee
  strip: string[];

  // Our Story
  storyTitle: string;
  storyWhoTitle: string;
  storyWhoText: string;
  storyVisionTitle: string;
  storyVisionText: string;
  storyMissionTitle: string;
  storyMissionText: string;
  storyValuesTitle: string;
  storyVal1title: string;
  storyVal1desc: string;
  storyVal2title: string;
  storyVal2desc: string;
  storyVal3title: string;
  storyVal3desc: string;
  storyVal4title: string;
  storyVal4desc: string;

  // Quality
  qualityTitle: string;
  qualProdTitle: string;
  qualProdText: string;
  qualLineTitle: string;
  qualLineText: string;
  qualLabTitle: string;
  qualLabIntro: string;
  qualCert1: string;
  qualCert1desc: string;
  qualCert2: string;
  qualCert2desc: string;
  qualCert3: string;
  qualCert3desc: string;

  // Benefits
  benefitsTitle: string;
  benefitsDesc: string;
  benefit1: string;
  benefit2: string;
  benefit3: string;
  benefit4: string;
  benefit5: string;
  benefit6: string;
  benefit7: string;
  benefit8: string;
  benefit9: string;
  benefit10: string;

  // Products
  newProdTitle: string;
  tahiniTitle: string;
  tahiniDesc1: string;
  tahiniDesc2: string;
  halvaTitle: string;
  halvaDesc: string;
  usesTitle: string;
  usesDesc: string;
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

  // Export
  exportTitle: string;
  exportBody: string;
  distTitle: string;
  distBody: string;
  distCta: string;

  // Private Label
  plTitle: string;
  plSlogan: string;
  plBody: string;
  plCta: string;

  // FAQ
  faqTitle: string;
  faq1q: string;
  faq1a: string;
  faq2q: string;
  faq2a: string;
  faq3q: string;
  faq3a: string;
  faq4q: string;
  faq4a: string;
  faq5q: string;
  faq5a: string;
  faq6q: string;
  faq6a: string;
  faq7q: string;
  faq7a: string;
  faq8q: string;
  faq8a: string;
  faq9q: string;
  faq9a: string;

  // Contact
  contactEyebrow: string;
  contactTitle: string;
  contactPhone: string;
  contactWA: string;
  contactWALink: string;
  contactEmail: string;
  contactWeb: string;

  // Footer
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

    // Nav
    navAbout: 'About',
    navStory: 'Our Story',
    navQuality: 'Quality',
    navProducts: 'Products',
    navBenefits: 'Tahini Benefits',
    navExport: 'Export',
    navPrivateLabel: 'Private Label',
    navContact: 'Contact',
    navFAQ: 'FAQ',

    // Marquee
    strip: ['100% Pure Sesame', 'Kosher Certified', 'FSSC 22000 Certified', 'Over 80 Years of Experience'],

    // Our Story
    storyTitle: 'Our Story',
    storyWhoTitle: 'Who We Are',
    storyWhoText: 'In the ancient alleys of Nablus, where the air is fragrant with roasted sesame, our ancestors began their story in 1940. From a small workshop, the dream grew into a legacy passed down through generations. Today, at \'Alam Al Tabiaa\', we blend the essence of the past with the technologies of the future, to bring you the taste you knew and loved... authentic, unforgettable tahini.',
    storyVisionTitle: 'Our Vision',
    storyVisionText: 'To be the first choice globally and establish our position as a leading brand in the tahini and halva industry by expanding into new markets, building strategic partnerships, and delivering high-quality natural products that combine authenticity and innovation, while adhering to the highest food safety standards.',
    storyMissionTitle: 'Our Mission',
    storyMissionText: 'We strive to provide 100% natural products of the highest quality by carefully selecting the finest raw materials, applying the latest production technologies, and strictly adhering to international food safety standards, to earn our customers\' trust.',
    storyValuesTitle: 'Our Values',
    storyVal1title: 'Customer Satisfaction',
    storyVal1desc: 'We place our customers\' satisfaction at the top of our priorities and always strive to exceed their expectations.',
    storyVal2title: 'Authenticity',
    storyVal2desc: 'We preserve the traditional, authentic taste that distinguishes our products.',
    storyVal3title: 'Integrity',
    storyVal3desc: 'We operate with transparency and credibility with our customers and partners.',
    storyVal4title: 'Innovation',
    storyVal4desc: 'We keep pace with development and use the latest technologies to continuously improve our products.',

    // Quality
    qualityTitle: 'Quality',
    qualProdTitle: 'Production Quality',
    qualProdText: 'At Alam Al Tabiaa, we are committed to applying the highest quality standards across all production stages, from selecting the finest 100% natural sesame seeds to implementing strict control systems and adhering to international food safety standards, ensuring a healthy, safe product with consistent quality and taste.',
    qualLineTitle: 'Production Line',
    qualLineText: 'Our production line operates with the latest technologies while preserving the traditional touch. The lines are designed to be integrated and efficient, with a continuous monitoring system and Critical Control Points (CCPs) to ensure process quality and product safety at every stage.',
    qualLabTitle: 'Lab & Certifications',
    qualLabIntro: 'Quality you can trust. We follow precise manufacturing standards ensuring consistent quality at every stage. Our quality lab conducts precise daily tests using advanced analytical media.',
    qualCert1: 'FSSC 22000 Certified',
    qualCert1desc: 'Commitment to global food safety standards.',
    qualCert2: 'Kosher Certified',
    qualCert2desc: 'Produced under strict kosher standards, reflecting an additional layer of quality control.',
    qualCert3: '100% Natural Product',
    qualCert3desc: 'No preservatives, additives, or artificial ingredients.',

    // Benefits
    benefitsTitle: 'Tahini Benefits',
    benefitsDesc: 'Real nutritional value in every spoon. 1\u20132 tablespoons daily deliver high nutritional value. Tahini is more than just an ingredient \u2014 it\u2019s a smart addition to a healthy, balanced lifestyle.',
    benefit1: 'Rich in Calcium',
    benefit2: 'Plant Protein',
    benefit3: 'Healthy Fats',
    benefit4: 'Natural Energy',
    benefit5: '100% Natural',
    benefit6: 'Antioxidants',
    benefit7: 'Rich in Minerals',
    benefit8: 'Easy to Digest',
    benefit9: 'Sustained Energy',
    benefit10: 'Supports Focus',

    // Products
    newProdTitle: 'Our Products',
    tahiniTitle: 'Tahini',
    tahiniDesc1: 'Made from the finest 100% natural sesame seeds, characterized by a smooth texture, natural color, and rich flavor.',
    tahiniDesc2: 'The true taste of sesame. Not all tahini is created equal. Our tahini is crafted from carefully selected seeds, roasted to perfection, and ground with utmost care into a creamy, smooth, rich, and balanced flavor.',
    halvaTitle: 'Halva',
    halvaDesc: 'Traditional halva with an authentic flavor, carefully crafted with a firm texture and an irresistible taste. Available in distinctive flavors such as vanilla, chocolate, and pistachio, and can also be prepared with special flavors upon customer request.',
    usesTitle: 'Endless Uses',
    usesDesc: 'Tahini is a staple in Middle Eastern cuisine (hummus, baba ghanoush, shawarma sauces). Make quick & healthy dressings by mixing with lemon, garlic, and water. Perfect with salads, grilled vegetables, in desserts like cookies and energy bites, and a great addition to smoothies.',
    p1badge: 'Bestseller',
    p1name: 'Premium Tahini',
    p1desc: 'Ideal for daily home use. Smooth, rich, and ready to elevate any dish \u2014 from hummus to dressings and beyond.',
    p2badge: 'Family Size',
    p2name: 'Premium Tahini',
    p2desc: 'Perfect for families and food lovers who demand the best. The same pure recipe \u2014 just more of it.',
    p3badge: 'Bulk / Wholesale',
    p3name: 'Premium Tahini',
    p3desc: 'The catering and wholesale choice. A 17 kg pail of our same uncompromising recipe \u2014 built for restaurants, food producers, and distributors.',
    tagNonGmo: 'Non-GMO',
    tagKosher: 'Kosher',
    tagNoAdd: 'No Additives',

    // Export
    exportTitle: 'Export & Distribution',
    exportBody: 'Bringing authentic quality to global markets. We deliver fully integrated export solutions to markets worldwide, with strong experience in regional and international markets. We offer flexible volumes and tailored packaging, and ensure all export documentation (certificates of origin and analysis) is prepared for smooth entry. Your trusted partner for premium-quality tahini delivered worldwide.',
    distTitle: 'Become a Distributor',
    distBody: 'We are looking for distribution partners to expand our product reach. We offer tahini and halva made from 100% pure sesame, in various sizes and packaging options (glass or plastic) starting from 190g and above. Grow your business with a premium product that meets market demands.',
    distCta: 'Start Partnership',

    // Private Label
    plTitle: 'Private Label',
    plSlogan: 'Your idea. Your brand. Our production.',
    plBody: 'We offer full private label solutions for tahini and halva products. We manage the entire process from raw material selection to packaging under your brand name. We ensure consistent taste and texture in every batch. We offer full flexibility in packaging sizes, types (glass/plastic), and custom specifications. Consistency builds strong brands.',
    plCta: 'Start Private Label',

    // FAQ
    faqTitle: 'Frequently Asked Questions',
    faq1q: 'What products do you manufacture?',
    faq1a: 'We produce tahini and halva using premium sesame, with the ability to develop custom products based on market needs.',
    faq2q: 'Do you offer private label services?',
    faq2a: 'Yes, we provide full end-to-end private label manufacturing under the client\'s brand.',
    faq3q: 'What is your production capacity?',
    faq3a: 'We operate advanced production lines with high capacity to handle large orders with market flexibility.',
    faq4q: 'What packaging options are available?',
    faq4a: 'We offer glass and plastic packaging along with fully customized packaging solutions.',
    faq5q: 'Do you provide packaging materials?',
    faq5a: 'Yes, we provide all private label packaging materials including boxes, cartons, and design.',
    faq6q: 'Do you have Kosher certification?',
    faq6a: 'Yes, our products are Kosher certified, reflecting our commitment to high production standards.',
    faq7q: 'Do you offer export services?',
    faq7a: 'Yes, we have export experience and supply both local and international markets.',
    faq8q: 'How can I become a distributor?',
    faq8a: 'You can apply through the "Become a Distributor" page and we will contact you after review.',
    faq9q: 'How can I contact you?',
    faq9a: 'Through the "Contact Us" page or official channels.',

    // Contact
    contactEyebrow: 'Get In Touch',
    contactTitle: 'Contact Us',
    contactPhone: 'Phone',
    contactWA: 'WhatsApp',
    contactWALink: 'Chat With Us',
    contactEmail: 'Email',
    contactWeb: 'Website',

    // Footer
    footerTagline: 'Pure. Natural. Since 1940.',
    footerCopy: '\u00a9 2024 Nature World for Halva & Tahini. All rights reserved.',
    footerAllergy: '\u26a0 Contains sesame \u2014 may cause allergic reactions in some consumers.',
  },

  ar: {
    dir: 'rtl',
    logoSub: 'طحينة فاخرة',

    // Nav
    navAbout: 'من نحن',
    navStory: 'قصتنا',
    navQuality: 'الجودة',
    navProducts: 'المنتجات',
    navBenefits: 'فوائد الطحينة',
    navExport: 'التصدير',
    navPrivateLabel: 'التصنيع للغير',
    navContact: 'تواصل معنا',
    navFAQ: 'الأسئلة الشائعة',

    // Marquee
    strip: ['100% سمسم نقي', 'معتمد كوشر', 'معتمد FSSC 22000', 'خبرة تمتد لأكثر من 80 عاماً'],

    // Our Story
    storyTitle: 'قصتنا',
    storyWhoTitle: 'من نحن',
    storyWhoText: 'في أزقة نابلس العتيقة، حيث يعبق الجو برائحة السمسم المحمص، بدأ أجدادنا الحكاية عام 1940. من مشغل صغير، كبر الحلم ليصبح إرثاً تتوارثه الأجيال. واليوم، في \'عالم الطبيعة\'، نمزج عبق الماضي بتقنيات المستقبل، لنقدم لك الطعم الذي عرفته وأحببته.. طحينة أصيلة لا تُنسى.',
    storyVisionTitle: 'رؤيتنا',
    storyVisionText: 'أن نكون الخيار الأول عالمياً، ونرسخ مكانتنا كعلامة رائدة في صناعة الطحينة والحلاوة، عبر التوسع في الأسواق الجديدة، وبناء شراكات استراتيجية، وتقديم منتجات طبيعية عالية الجودة تجمع بين الأصالة والابتكار، مع الالتزام بأعلى معايير السلامة الغذائية.',
    storyMissionTitle: 'رسالتنا',
    storyMissionText: 'نسعى لتقديم منتجات طبيعية 100% بأعلى مستويات الجودة، من خلال اختيار أجود المواد الخام، وتطبيق أحدث تقنيات الإنتاج، والالتزام الصارم بمعايير السلامة الغذائية العالمية، لنكسب ثقة عملائنا.',
    storyValuesTitle: 'قيمنا',
    storyVal1title: 'رضا العملاء',
    storyVal1desc: 'نضع رضا عملائنا في مقدمة أولوياتنا ونسعى دائماً لتجاوز توقعاتهم.',
    storyVal2title: 'الأصالة',
    storyVal2desc: 'نحافظ على الطعم التقليدي الأصيل الذي يميز منتجاتنا.',
    storyVal3title: 'النزاهة',
    storyVal3desc: 'نعمل بشفافية ومصداقية مع عملائنا وشركائنا.',
    storyVal4title: 'الابتكار',
    storyVal4desc: 'نواكب التطور ونستخدم أحدث التقنيات لتحسين منتجاتنا.',

    // Quality
    qualityTitle: 'الجودة',
    qualProdTitle: 'جودة الإنتاج',
    qualProdText: 'نحرص في عالم الطبيعة على تطبيق أعلى معايير الجودة في جميع مراحل الإنتاج، من اختيار أفضل أنواع بذور السمسم الطبيعية 100%، إلى تطبيق أنظمة رقابة دقيقة والالتزام بأنظمة السلامة الغذائية العالمية، لضمان منتج صحي وآمن مع ثبات الجودة والطعم.',
    qualLineTitle: 'خط الإنتاج',
    qualLineText: 'يعمل خط الإنتاج لدينا بأحدث التقنيات مع الحفاظ على اللمسة التقليدية. صممت الخطوط لتكون متكاملة وفعالة، مع تطبيق نظام مراقبة مستمر ونقاط تحكم حرجة (CCPs) لضمان جودة العمليات وسلامة المنتج في كل مرحلة.',
    qualLabTitle: 'المختبر والشهادات',
    qualLabIntro: 'جودة يمكنك الوثوق بها. نلتزم بمعايير تصنيع دقيقة تضمن جودة ثابتة في كل مرحلة. مختبر الجودة لدينا يجري فحوصات يومية دقيقة باستخدام تقنيات تحليل متقدمة.',
    qualCert1: 'شهادة FSSC 22000',
    qualCert1desc: 'التزام بمعايير سلامة الغذاء العالمية.',
    qualCert2: 'شهادة كوشر',
    qualCert2desc: 'منتج معتمد وفق معايير صارمة، يعكس مستوى إضافياً من الرقابة والجودة.',
    qualCert3: 'منتج طبيعي 100%',
    qualCert3desc: 'بدون مواد حافظة أو إضافات صناعية.',

    // Benefits
    benefitsTitle: 'فوائد الطحينة',
    benefitsDesc: 'قيمة غذائية حقيقية في كل ملعقة. ملعقة إلى ملعقتين يومياً تمنحك قيمة غذائية عالية. الطحينة ليست مجرد مكون، بل إضافة ذكية لنمط حياة صحي ومتوازن.',
    benefit1: 'غنية بالكالسيوم',
    benefit2: 'بروتين نباتي',
    benefit3: 'دهون صحية',
    benefit4: 'طاقة طبيعية',
    benefit5: '100% طبيعي',
    benefit6: 'مضادات أكسدة',
    benefit7: 'غنية بالمعادن',
    benefit8: 'سهلة الهضم',
    benefit9: 'طاقة مستمرة',
    benefit10: 'تدعم التركيز',

    // Products
    newProdTitle: 'منتجاتنا',
    tahiniTitle: 'الطحينة',
    tahiniDesc1: 'طحينة مصنوعة من أجود أنواع السمسم الطبيعي 100%، تتميز بقوام متجانس ولون طبيعي وطعم غني.',
    tahiniDesc2: 'الطعم الحقيقي للسمسم. ليست كل الطحينة متشابهة. نصنع طحينتنا من بذور سمسم مختارة بعناية، تُحمص بدرجة مدروسة وتُطحن بعناية فائقة للحصول على قوام كريمي ناعم ونكهة غنية ومتوازنة.',
    halvaTitle: 'الحلاوة',
    halvaDesc: 'حلاوة تقليدية بنكهة أصيلة، تُصنع بعناية بقوام متماسك وطعم لا يُقاوم. تتوفر بنكهات مميزة مثل الفانيلا، الشوكولاتة، والفستق الحلبي، كما يمكن تجهيزها بنكهات خاصة حسب طلب الزبون.',
    usesTitle: 'استخدامات بلا حدود',
    usesDesc: 'الطحينة هي الأساس في المطبخ العربي (الحمص، المتبل، صلصات الشاورما). يمكنك تحضير صلصات سريعة وصحية بمزجها مع الليمون والثوم والماء. مثالية مع السلطات، الخضار المشوية، وفي الحلويات مثل الكوكيز وكرات الطاقة، وإضافة رائعة للسموذي.',
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

    // Export
    exportTitle: 'التصدير والتوزيع',
    exportBody: 'نصل بمنتجاتنا إلى الأسواق العالمية. نقدم حلول تصدير متكاملة إلى مختلف الأسواق حول العالم، مع خبرة واسعة في تلبية متطلبات الأسواق الإقليمية والدولية. نوفر مرونة في الكميات وخيارات التعبئة، ونحرص على تجهيز جميع الوثائق اللازمة (شهادات المنشأ والتحليل) لضمان دخول سلس. شريكك الموثوق لتوريد الطحينة بجودة ثابتة.',
    distTitle: 'كن موزعاً',
    distBody: 'نبحث عن شركاء توزيع لتوسيع انتشار منتجاتنا. نقدم طحينة وحلاوة من 100% سمسم نقي، مع تنوع في الأحجام وخيارات التعبئة (زجاج أو بلاستيك) بدءاً من 190 غرام وما فوق. فرصة للتوسع بمنتج عالي الجودة يلبي متطلبات الأسواق.',
    distCta: 'ابدأ الشراكة معنا',

    // Private Label
    plTitle: 'التصنيع للغير',
    plSlogan: 'نُحوّل فكرتك إلى منتج يحمل اسمك بثبات وثقة.',
    plBody: 'نقدم حلول إنتاج متكاملة لبناء منتجاتك الخاصة في مجال الطحينة والحلاوة. نتولى كامل العملية من اختيار أفضل المواد الخام إلى التعبئة والتغليف وفق أعلى معايير الجودة. نلتزم بثبات الطعم والقوام في كل دفعة. نوفر مرونة كاملة في أحجام التعبئة، نوع العبوة (زجاج/بلاستيك)، ومواصفات المنتج حسب الطلب. ثبات الجودة… أساس بناء علامة قوية.',
    plCta: 'ابدأ علامتك الخاصة',

    // FAQ
    faqTitle: 'الأسئلة الشائعة',
    faq1q: 'ما هي منتجاتكم؟',
    faq1a: 'ننتج الطحينة والحلاوة باستخدام أجود أنواع السمسم، مع إمكانية تطوير منتجات خاصة حسب متطلبات السوق.',
    faq2q: 'هل توفرون خدمات Private Label؟',
    faq2a: 'نعم، نقدم حلول تصنيع وتعبئة متكاملة تحت العلامة التجارية الخاصة بالعميل من البداية حتى المنتج النهائي.',
    faq3q: 'ما هي قدراتكم الإنتاجية؟',
    faq3a: 'نمتلك خطوط إنتاج متطورة وقدرة عالية لتلبية الطلبات الكبيرة مع مرونة في تلبية احتياجات السوق.',
    faq4q: 'ما هي أنواع التعبئة والتغليف المتوفرة؟',
    faq4a: 'نوفر تعبئة زجاج وبلاستيك بالإضافة إلى حلول تغليف كاملة حسب الطلب.',
    faq5q: 'هل توفرون مواد التغليف؟',
    faq5a: 'نعم، نوفر جميع مواد التغليف الخاصة بالعلامة التجارية بما في ذلك العلب والكرتون والتصميم.',
    faq6q: 'هل لديكم شهادة كوشير؟',
    faq6a: 'نعم، منتجاتنا حاصلة على شهادة كوشير (Kosher) مما يعكس التزامنا بمعايير إنتاج عالية.',
    faq7q: 'هل تقدمون خدمات التصدير؟',
    faq7a: 'نعم، لدينا خبرة في التصدير ونوفر منتجاتنا للأسواق المحلية والدولية.',
    faq8q: 'كيف يمكن أن أصبح موزعاً؟',
    faq8a: 'يمكنكم التقديم عبر صفحة "كن موزعاً" وسيتم التواصل بعد دراسة الطلب.',
    faq9q: 'كيف يمكن التواصل معكم؟',
    faq9a: 'عبر صفحة "تواصل معنا" أو القنوات الرسمية.',

    // Contact
    contactEyebrow: 'تواصل معنا',
    contactTitle: 'تواصل معنا',
    contactPhone: 'الهاتف',
    contactWA: 'واتساب',
    contactWALink: 'تحدث معنا',
    contactEmail: 'البريد الإلكتروني',
    contactWeb: 'الموقع الإلكتروني',

    // Footer
    footerTagline: 'نقية. طبيعية. منذ 1940.',
    footerCopy: '© 2024 عالم الطبيعة للحلوى والطحينة. جميع الحقوق محفوظة.',
    footerAllergy: '⚠ يحتوي على السمسم — قد يسبب الحساسية لبعض المستهلكين.',
  },

  he: {
    dir: 'rtl',
    logoSub: 'טחינה יוקרתית',

    // Nav
    navAbout: 'אודותינו',
    navStory: 'הסיפור שלנו',
    navQuality: 'איכות',
    navProducts: 'מוצרים',
    navBenefits: 'יתרונות הטחינה',
    navExport: 'ייצוא',
    navPrivateLabel: 'מותג פרטי',
    navContact: 'צור קשר',
    navFAQ: 'שאלות נפוצות',

    // Marquee
    strip: ['100% שומשום טהור', 'כשר מאושר', 'מוסמך FSSC 22000', 'מעל 80 שנות ניסיון'],

    // Our Story
    storyTitle: 'הסיפור שלנו',
    storyWhoTitle: 'מי אנחנו',
    storyWhoText: 'בסמטאות נבלוס העתיקה, שם האוויר ספוג בניחוח שומשום קלוי, החלו אבותינו את סיפורם בשנת 1940. מבית מלאכה קטן, החלום גדל והפך למורשת העוברת מדור לדור. והיום, ב"עולם הטבע", אנו משלבים את קסם העבר עם טכנולוגיות העתיד, כדי להעניק לך את הטעם שהכרת ואהבת... טחינה אותנטית בלתי נשכחת.',
    storyVisionTitle: 'החזון שלנו',
    storyVisionText: 'להיות הבחירה הראשונה בעולם ולבסס את מעמדנו כמותג מוביל בתעשיית הטחינה והחלבה, באמצעות התרחבות לשווקים חדשים, בניית שותפויות אסטרטגיות, והצעת מוצרים טבעיים באיכות גבוהה המשלבים אותנטיות וחדשנות, תוך הקפדה על הסטנדרטים הגבוהים ביותר של בטיחות מזון.',
    storyMissionTitle: 'המשימה שלנו',
    storyMissionText: 'אנו שואפים להציע מוצרים טבעיים ב-100% ברמת האיכות הגבוהה ביותר, באמצעות בחירה קפדנית של חומרי הגלם הטובים ביותר, יישום טכנולוגיות הייצור המתקדמות ביותר, והקפדה מחמירה על תקני בטיחות מזון בינלאומיים, כדי לזכות באמון לקוחותינו.',
    storyValuesTitle: 'הערכים שלנו',
    storyVal1title: 'שביעות רצון הלקוחות',
    storyVal1desc: 'אנו מציבים את שביעות רצון לקוחותינו בראש סדר העדיפויות ושואפים תמיד לעלות על ציפיותיהם.',
    storyVal2title: 'אותנטיות',
    storyVal2desc: 'אנו שומרים על הטעם המסורתי והאותנטי שמייחד את מוצרינו.',
    storyVal3title: 'יושרה',
    storyVal3desc: 'אנו פועלים בשקיפות ובאמינות מול לקוחותינו ושותפינו.',
    storyVal4title: 'חדשנות',
    storyVal4desc: 'אנו מתקדמים עם ההתפתחות ומשתמשים בטכנולוגיות המתקדמות ביותר כדי לשפר את מוצרינו באופן מתמיד.',

    // Quality
    qualityTitle: 'איכות',
    qualProdTitle: 'איכות הייצור',
    qualProdText: 'ב"עולם הטבע" אנו מקפידים ליישם את סטנדרטי האיכות הגבוהים ביותר בכל שלבי הייצור, החל מבחירת זרעי השומשום הטבעיים 100% מהאיכות הטובה ביותר, דרך יישום מערכות בקרה קפדניות ועד הקפדה על תקני בטיחות מזון בינלאומיים, כדי להבטיח מוצר בריא ובטוח עם איכות וטעם אחידים.',
    qualLineTitle: 'קו הייצור',
    qualLineText: 'קו הייצור שלנו פועל בטכנולוגיות המתקדמות ביותר תוך שמירה על הנגיעה המסורתית. קווי הייצור מתוכננים להיות משולבים ויעילים, עם מערכת בקרה מתמשכת ונקודות בקרה קריטיות (CCPs) להבטחת איכות התהליכים ובטיחות המוצר בכל שלב.',
    qualLabTitle: 'המעבדה וההסמכות',
    qualLabIntro: 'איכות שאפשר לסמוך עליה. אנו מקפידים על תקני ייצור מדויקים המבטיחים איכות עקבית בכל שלב. מעבדת האיכות שלנו מבצעת בדיקות יומיות מדויקות באמצעות טכנולוגיות אנליטיות מתקדמות.',
    qualCert1: 'הסמכת FSSC 22000',
    qualCert1desc: 'מחויבות לתקני בטיחות מזון עולמיים.',
    qualCert2: 'כשר מאושר',
    qualCert2desc: 'מיוצר בהתאם לדרישות הכשרות המחמירות, המוסיף שכבת בקרה ואיכות.',
    qualCert3: 'מוצר 100% טבעי',
    qualCert3desc: 'ללא חומרים משמרים או תוספים מלאכותיים.',

    // Benefits
    benefitsTitle: 'יתרונות הטחינה',
    benefitsDesc: 'ערך תזונתי אמיתי בכל כפית. כף עד שתי כפות ביום מספקות ערך תזונתי גבוה. טחינה היא לא רק רכיב — אלא תוספת חכמה לאורח חיים בריא ומאוזן.',
    benefit1: 'עשירה בסידן',
    benefit2: 'חלבון מן הצומח',
    benefit3: 'שומנים בריאים',
    benefit4: 'אנרגיה טבעית',
    benefit5: '100% טבעי',
    benefit6: 'נוגדי חמצון',
    benefit7: 'עשירה במינרלים',
    benefit8: 'קלה לעיכול',
    benefit9: 'אנרגיה מתמשכת',
    benefit10: 'תומכת בריכוז',

    // Products
    newProdTitle: 'המוצרים שלנו',
    tahiniTitle: 'טחינה',
    tahiniDesc1: 'טחינה המיוצרת מהאיכות הטובה ביותר של זרעי שומשום טבעיים 100%, בעלת מרקם אחיד, צבע טבעי וטעם עשיר.',
    tahiniDesc2: 'הטעם האמיתי של השומשום. לא כל הטחינה שווה. הטחינה שלנו מיוצרת מזרעי שומשום שנבחרו בקפידה, נקלו בדרגה מבוקרת ונטחנו בקפידה רבה למרקם קרמי חלק, עשיר ומאוזן.',
    halvaTitle: 'חלבה',
    halvaDesc: 'חלבה מסורתית בטעם אותנטי, המיוצרת בקפידה עם מרקם יציב וטעם בלתי ניתן לעמידה. זמינה במגוון טעמים ייחודיים כמו וניל, שוקולד ופיסטוק, וניתן להכינה גם בטעמים מיוחדים לפי בקשת הלקוח.',
    usesTitle: 'שימושים ללא גבולות',
    usesDesc: 'טחינה היא מרכיב עיקרי במטבח הערבי (חומוס, מוטבל, רטבים לשווארמה). הכינו רטבים מהירים ובריאים על ידי ערבוב עם לימון, שום ומים. מושלמת עם סלטים, ירקות צלויים, בקינוחים כמו עוגיות וכדורי אנרגיה, ותוספת נהדרת לשייקים.',
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

    // Export
    exportTitle: 'ייצוא והפצה',
    exportBody: 'מביאים איכות אמיתית לשווקים בעולם. אנו מציעים פתרונות ייצוא מקיפים לשווקים ברחבי העולם, עם ניסיון רב בשווקים אזוריים ובינלאומיים. אנו מספקים גמישות בכמויות ופתרונות אריזה, ודואגים להכין את כל המסמכים הנדרשים (תעודות מקור ובדיקה) לכניסה חלקה. השותף האמין שלך לאספקת טחינה איכותית לשווקים גלובליים.',
    distTitle: 'הצטרף למפיצים',
    distBody: 'אנו מחפשים שותפי הפצה להרחבת נוכחות המוצרים שלנו. אנו מציעים טחינה וחלווה מ-100% שומשום טהור, במגוון גדלים ואפשרויות אריזה (זכוכית או פלסטיק) החל מ-190 גרם ומעלה. הזדמנות להתרחבות עם מוצר איכותי העונה על דרישות השוק.',
    distCta: 'התחל שותפות',

    // Private Label
    plTitle: 'מותג פרטי',
    plSlogan: 'הרעיון שלך. המותג שלך. הייצור שלנו.',
    plBody: 'אנו מציעים פתרונות מותג פרטי מלאים בתחום הטחינה והחלווה. אנו מנהלים את כל התהליך מבחירת חומרי הגלם ועד לאריזה תחת שם המותג שלך. אנו מבטיחים אחידות בטעם ובמרקם בכל אצווה. אנו מציעים גמישות מלאה בגדלי אריזות, סוגי אריזה (זכוכית/פלסטיק), והתאמות מוצר לפי דרישה. עקביות בונה מותגים חזקים.',
    plCta: 'התחל מותג פרטי',

    // FAQ
    faqTitle: 'שאלות נפוצות',
    faq1q: 'אילו מוצרים אתם מייצרים?',
    faq1a: 'אנו מייצרים טחינה וחלווה משומשום איכותי, עם אפשרות לפיתוח מוצרים מותאמים לפי דרישת השוק.',
    faq2q: 'האם אתם מספקים שירותי מותג פרטי?',
    faq2a: 'כן, אנו מספקים פתרונות ייצור מלאים תחת המותג הפרטי של הלקוח.',
    faq3q: 'מהי קיבולת הייצור שלכם?',
    faq3a: 'אנו מפעילים קווי ייצור מתקדמים עם קיבולת גבוהה להזמנות גדולות וגמישות לשוק.',
    faq4q: 'אילו אפשרויות אריזה קיימות?',
    faq4a: 'אנו מציעים אריזות זכוכית ופלסטיק לצד פתרונות אריזה מותאמים אישית.',
    faq5q: 'האם אתם מספקים חומרי אריזה?',
    faq5a: 'כן, אנו מספקים את כל חומרי האריזה כולל קופסאות, קרטונים ועיצוב.',
    faq6q: 'האם יש לכם תעודת כשרות?',
    faq6a: 'כן, מוצרינו בעלי תעודת כשרות המעידה על עמידה בסטנדרטים גבוהים.',
    faq7q: 'האם אתם מציעים שירותי ייצוא?',
    faq7a: 'כן, יש לנו ניסיון בייצוא ואנו מספקים לשווקים מקומיים ובינלאומיים.',
    faq8q: 'איך אפשר להפוך למפיץ?',
    faq8a: 'ניתן להגיש בקשה דרך העמוד "הצטרף למפיצים" וניצור קשר לאחר בדיקה.',
    faq9q: 'איך אפשר ליצור קשר?',
    faq9a: 'דרך העמוד "צור קשר" או הערוצים הרשמיים.',

    // Contact
    contactEyebrow: 'צרו קשר',
    contactTitle: 'צור קשר',
    contactPhone: 'טלפון',
    contactWA: 'וואטסאפ',
    contactWALink: 'שוחחו איתנו',
    contactEmail: 'דוא"ל',
    contactWeb: 'אתר אינטרנט',

    // Footer
    footerTagline: 'טהורה. טבעית. מאז 1940.',
    footerCopy: '© 2024 Nature World לחלבה וטחינה. כל הזכויות שמורות.',
    footerAllergy: '⚠ מכיל שומשום — עלול לגרום לתגובות אלרגיות אצל חלק מהצרכנים.',
  },
};
