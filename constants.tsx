
import { Project, NavItem } from './types';

export const WHATSAPP_NUMBER = '966501308295';
export const WHATSAPP_LINK = `https://wa.me/${WHATSAPP_NUMBER}`;

export const NAV_ITEMS: NavItem[] = [
  { label: 'الرئيسية', href: '#home' },
  { label: 'أعمالنا', href: '#gallery' },
  { label: 'خدماتنا', href: '#services' },
  { label: 'تواصل معنا', href: '#contact' },
];

export const PROJECTS: Project[] = [
  {
    id: '1',
    title: 'تجديد فيلا ملكية - الرياض',
    description: 'تحول جذري للمساحات الداخلية باستخدام أرقى أنواع الدهانات المخملية والزخارف الجبسية اليدوية.',
    longDescription: 'في هذا المشروع، قمنا بإعادة صياغة مفهوم الفخامة. تم استخدام دهان "فينوماستيك ميري" من جوتن بلونه البيج اللؤلؤي، مع دمج تقنيات الإضاءة المخفية في الأسقف الجبسية المعلقة. الأوصاف الفنية شملت معالجة التشققات الجدارية وتأسيس طبقات المعجون بأسلوب احترافي يضمن نعومة فائقة للملمس.',
    imageUrl: 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&q=80&w=1200',
    additionalImages: [
      'https://images.unsplash.com/photo-1615529328331-f8917597711f?auto=format&fit=crop&q=80&w=800',
      'https://images.unsplash.com/photo-1615873968403-89e068629275?auto=format&fit=crop&q=80&w=800'
    ],
    category: 'داخلي',
    materials: ['دهان جوتن فينوماستيك', 'جبس بورد فرنسي', 'ورق حائط إيطالي', 'إضاءة LED ذكية']
  },
  {
    id: '2',
    title: 'صالة معيشة مودرن - تصميم "نيو كلاسيك"',
    description: 'مزيج متناغم بين دفء الخشب وبرودة الرخام، لخلق بيئة مريحة وعصرية.',
    longDescription: 'التصميم يعتمد على استغلال المساحات المفتوحة. تم تركيب بديل الخشب (WPC) عالي الجودة المقاوم للرطوبة، مع دهانات الجزيرة "ورود" التي تعطي إيحاءً بالاتساع. الوصف الدقيق لهذا العمل يكمن في دقة زوايا التركيب وتناغم درجات الألوان الترابية التي تمنح شعوراً بالراحة النفسية.',
    imageUrl: 'https://images.unsplash.com/photo-1616486341351-7973a6970532?auto=format&fit=crop&q=80&w=1200',
    additionalImages: [
      'https://images.unsplash.com/photo-1616486029423-aaa4789e8c9a?auto=format&fit=crop&q=80&w=800'
    ],
    category: 'مودرن',
    materials: ['دهان الجزيرة ورود', 'بديل خشب WPC', 'أرضيات باركيه ألماني', 'سبوت لايت مضاد للتوهج']
  },
  {
    id: '3',
    title: 'تكسيات جدارية فاخرة',
    description: 'حلول مبتكرة للممرات والزوايا الضيقة باستخدام المرايا والتكسيات الخشبية.',
    longDescription: 'تم تنفيذ هذا المشروع في ممر رئيسي لمنزل سكني، حيث استخدمنا مرايا "جري" بلجيكية مقطوعة بالليزر، مدمجة مع خشب طبيعي معالج. هذا الديكور يضيف عمقاً بصرياً للمكان ويحوله من مجرد ممر إلى ركن فني لافت للأنظار.',
    imageUrl: 'https://images.unsplash.com/photo-1513519245088-0e12902e5a38?auto=format&fit=crop&q=80&w=1200',
    additionalImages: [
      'https://images.unsplash.com/photo-1505693357370-5d474817060a?auto=format&fit=crop&q=80&w=800'
    ],
    category: 'ديكور جدران',
    materials: ['خشب طبيعي زان', 'مرايا بلجيكية', 'دهان استر شفاف', 'إضاءة جدارية مودرن']
  },
  {
    id: '4',
    title: 'مكتب منزلي هادئ',
    description: 'تنسيق ألوان يساعد على التركيز مع عزل صوتي جمالي باستخدام دهانات مطفية.',
    longDescription: 'تم اختيار اللون "الكحلي الملكي" المطفي لتقليل انعكاسات الإضاءة، مما يوفر بيئة عمل مثالية. المشروع تضمن أيضاً تركيب ألواح فوم ديكورية خلف المكتب لتعزيز العزل الصوتي وإضافة لمسة معمارية مميزة.',
    imageUrl: 'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&q=80&w=1200',
    category: 'إضاءة',
    materials: ['دهان جوتن ماجستيك', 'نظام تحكم ذكي Philips', 'عزل صوتي جداري']
  }
];
