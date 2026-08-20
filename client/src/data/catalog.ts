/**
 * فلسفة الملف: بيانات عربية عملية تطابق كثافة وتصنيفات Masheed Gate المرجعي،
 * مع عدم اختلاق أسعار غير متاحة في المصدر؛ المنتجات هنا تعمل بنظام طلب عرض سعر.
 */

export type Category = {
  slug: string;
  name: string;
  image: string;
  description: string;
  subcategories: string[];
};

export type Product = {
  id: string;
  slug: string;
  name: string;
  brand: string;
  category: string;
  image: string;
  unit: string;
  available: boolean;
  summary: string;
  specs: string[];
};

export const categories: Category[] = [
  {
    slug: "voucher",
    name: "أرض المصنع",
    image: "/manus-storage/masheed-brand-banner_d2498313.jpg",
    description: "كوبونات مواد البناء مباشرة من المصنع.",
    subcategories: ["اسمنت مقاوم كوبون", "إسمنت بورتلاندي عادي", "اسمنت تشطيب كوبون", "اسمنت أبيض كوبون"],
  },
  {
    slug: "cementdelivery",
    name: "الاسمنت",
    image: "/manus-storage/product-khayyat_b8ae65ea.jpg",
    description: "الأسمنت الرمادي والأبيض ومسحوق الجبس ومستلزمات التشطيب.",
    subcategories: ["اسمنت رمادي", "اسمنت أبيض", "مسحوق الجبس"],
  },
  {
    slug: "glue-adhesives",
    name: "الغراء اللاصق",
    image: "/manus-storage/product-sika_69d76698.jpg",
    description: "حلول الغراء والمواد اللاصقة لأعمال البلاط والتشطيب.",
    subcategories: ["غراء بلاط", "لاصق بناء", "مونة", "عازل مائي"],
  },
  {
    slug: "sand-and-aggregate",
    name: "الرمال و الكنكري",
    image: "/manus-storage/sand-aggregate-yard_1381bbb9.jpg",
    description: "رمل دفان ولياسة ورمل أحمر وأبيض وحصى.",
    subcategories: ["رمل دفان", "رمل لياسة", "رمل أحمر", "رمل أبيض", "حصى"],
  },
  {
    slug: "blocks-and-bricks",
    name: "الطابوق والطوب",
    image: "/manus-storage/concrete-block-yard_f9566d97.webp",
    description: "الطوب الأسمنتي والأحمر والأبيض والانترلوك وحجر الرصيف.",
    subcategories: ["طوب أسمنتي", "طوب أحمر", "طوب أبيض", "انترلوك", "حجر رصيف", "بلاط"],
  },
  {
    slug: "drywalls",
    name: "ألواح الجدران الجافة",
    image: "/manus-storage/masheed-hero-reference_108176db.jpg",
    description: "ألواح الجبس والإسمنت وملحقات التركيب.",
    subcategories: ["ألواح الجبس", "ألواح الإسمنت", "ملحقات ألواح الجبس"],
  },
  {
    slug: "steel",
    name: "الحديد",
    image: "/manus-storage/masheed-hero-reference_108176db.jpg",
    description: "منتجات الحديد والحديد المجلفن لمشاريع البناء.",
    subcategories: ["حديد تسليح", "حديد مجلفن"],
  },
  {
    slug: "insulation-materials",
    name: "Insulation Materials",
    image: "/manus-storage/product-arki_5089970f.jpg",
    description: "مواد العزل والحماية للمباني والأسطح.",
    subcategories: ["عزل مائي", "عزل حراري", "مواد حماية"],
  },
];

export const topNavigation = [
  categories[0],
  categories[1],
  { ...categories[1], slug: "gypsum-powder", name: "مسحوق الجبس" },
  categories[2],
  categories[3],
  categories[4],
  categories[6],
  { ...categories[1], slug: "ftl-grey-cement", name: "FTL Grey Cement" },
  { ...categories[1], slug: "ftl-white-cement", name: "FTL White Cement" },
  { ...categories[4], slug: "ftl-blocks-bricks", name: "FTL Blocks & Bricks" },
  { ...categories[3], slug: "ftl-sand-and-aggregates", name: "FTL Sand and Aggregates" },
  categories[7],
];

export const products: Product[] = [
  {
    id: "prd-001",
    slug: "alkhayyat-white-gypsum-40kg",
    name: "الخياط - جبس أبيض 40 كج",
    brand: "مصنع الخياط",
    category: "cementdelivery",
    image: "/manus-storage/product-khayyat_b8ae65ea.jpg",
    unit: "كيس 40 كج",
    available: true,
    summary: "جبس أبيض لأعمال التشطيب واللياسة الداخلية بجودة مناسبة للمشاريع.",
    specs: ["وزن العبوة: 40 كج", "مخصص لأعمال التشطيب", "توريد حسب موقع المشروع"],
  },
  {
    id: "prd-002",
    slug: "sika-tile-adhesive-202",
    name: "سيكا - غراء بلاط 202",
    brand: "سيكا",
    category: "glue-adhesives",
    image: "/manus-storage/product-sika_69d76698.jpg",
    unit: "كيس",
    available: true,
    summary: "لاصق أسمنتي جاهز للاستخدام في تثبيت البلاط والأعمال الداخلية.",
    specs: ["سهولة الخلط والتطبيق", "مناسب للبلاط", "للاستخدام الداخلي"],
  },
  {
    id: "prd-003",
    slug: "arki-spatter-d4",
    name: "أركي - سباتر D4",
    brand: "أركي",
    category: "glue-adhesives",
    image: "/manus-storage/product-arki_5089970f.jpg",
    unit: "كيس",
    available: true,
    summary: "طبقة رش أسمنتية لتجهيز الأسطح قبل أعمال اللياسة.",
    specs: ["تجهيز الأسطح", "تحسين الالتصاق", "توريد للمشاريع"],
  },
  {
    id: "prd-004",
    slug: "arabian-cement-ppc",
    name: "اسمنت العربية - اسمنت بورتلاندي بوزولاني",
    brand: "شركة اسمنت العربية",
    category: "cementdelivery",
    image: "/manus-storage/product-khayyat_b8ae65ea.jpg",
    unit: "كيس 50 كج",
    available: false,
    summary: "أسمنت بورتلاندي بوزولاني للأعمال الخرسانية العامة.",
    specs: ["عبوة 50 كج", "أعمال خرسانية", "متوفر قريباً"],
  },
  {
    id: "prd-005",
    slug: "yanbu-opc-50kg",
    name: "اسمنت ينبع - اسمنت بورتلاندي عادي 50 كجم",
    brand: "شركة اسمنت ينبع",
    category: "cementdelivery",
    image: "/manus-storage/product-khayyat_b8ae65ea.jpg",
    unit: "كيس 50 كج",
    available: false,
    summary: "أسمنت بورتلاندي عادي للاستخدامات الإنشائية المتنوعة.",
    specs: ["عبوة 50 كج", "استخدامات متعددة", "متوفر قريباً"],
  },
  {
    id: "prd-006",
    slug: "white-cement-super",
    name: "اسمنت الصفوة - الأسمنت الأبيض الناصع سوبر",
    brand: "اسمنت الصفوة",
    category: "cementdelivery",
    image: "/manus-storage/product-khayyat_b8ae65ea.jpg",
    unit: "كيس",
    available: false,
    summary: "أسمنت أبيض لأعمال التشطيب والديكور.",
    specs: ["لون أبيض ناصع", "أعمال التشطيب", "متوفر قريباً"],
  },
  {
    id: "prd-007",
    slug: "red-sand-load",
    name: "رمل أحمر - حمولة مشروع",
    brand: "موردو بوابة مشيد",
    category: "sand-and-aggregate",
    image: "/manus-storage/sand-aggregate-yard_1381bbb9.jpg",
    unit: "حمولة",
    available: true,
    summary: "رمل أحمر للتوريد إلى مواقع المشاريع وفق الكمية والموقع.",
    specs: ["توريد للموقع", "الكميات حسب الطلب", "السعر حسب المسافة"],
  },
  {
    id: "prd-008",
    slug: "washed-aggregate-load",
    name: "كنكري مغسول - حمولة",
    brand: "موردو بوابة مشيد",
    category: "sand-and-aggregate",
    image: "/manus-storage/sand-aggregate-yard_1381bbb9.jpg",
    unit: "حمولة",
    available: true,
    summary: "كنكري مغسول للأعمال الخرسانية ومواقع البناء.",
    specs: ["تدرج مناسب", "توريد للموقع", "حسب الكمية"],
  },
  {
    id: "prd-009",
    slug: "cement-block-20cm",
    name: "طابوق أسمنتي 20 سم",
    brand: "موردو بوابة مشيد",
    category: "blocks-and-bricks",
    image: "/manus-storage/concrete-block-yard_f9566d97.webp",
    unit: "حبة",
    available: true,
    summary: "طابوق أسمنتي لمشاريع المباني والتقسيمات.",
    specs: ["عرض 20 سم", "توريد للمشروع", "الكمية حسب الطلب"],
  },
  {
    id: "prd-010",
    slug: "red-clay-brick",
    name: "طوب أحمر للمباني",
    brand: "موردو بوابة مشيد",
    category: "blocks-and-bricks",
    image: "/manus-storage/concrete-block-yard_f9566d97.webp",
    unit: "حبة",
    available: true,
    summary: "طوب أحمر للأعمال المعمارية والإنشائية.",
    specs: ["مقاسات متعددة", "توريد للموقع", "السعر حسب الكمية"],
  },
  {
    id: "prd-011",
    slug: "galvanized-steel-bundle",
    name: "حديد مجلفن - ربطة",
    brand: "موردو بوابة مشيد",
    category: "steel",
    image: "/manus-storage/masheed-hero-reference_108176db.jpg",
    unit: "ربطة",
    available: true,
    summary: "حديد مجلفن لمتطلبات المشاريع الصناعية والإنشائية.",
    specs: ["مقاسات حسب الطلب", "توريد بالجملة", "عرض سعر مخصص"],
  },
  {
    id: "prd-012",
    slug: "waterproofing-material",
    name: "مادة عزل مائي للأسطح",
    brand: "أركي",
    category: "insulation-materials",
    image: "/manus-storage/product-arki_5089970f.jpg",
    unit: "كيس",
    available: true,
    summary: "مادة عزل وحماية للأسطح والأماكن المعرضة للرطوبة.",
    specs: ["مقاومة للماء", "للأسطح والجدران", "تطبيق حسب إرشادات المصنع"],
  },
];

export const brands = Array.from(new Set(products.map((product) => product.brand)));

export function getCategory(slug?: string) {
  return categories.find((category) => category.slug === slug) ?? categories[1];
}

export function getProduct(slug?: string) {
  return products.find((product) => product.slug === slug) ?? products[0];
}

export function getProductsForCategory(slug?: string) {
  if (!slug) return products;
  if (slug.startsWith("ftl-")) {
    if (slug.includes("cement")) return products.filter((p) => p.category === "cementdelivery");
    if (slug.includes("blocks")) return products.filter((p) => p.category === "blocks-and-bricks");
    if (slug.includes("sand")) return products.filter((p) => p.category === "sand-and-aggregate");
  }
  if (slug === "gypsum-powder") return products.filter((p) => p.slug.includes("gypsum"));
  return products.filter((product) => product.category === slug);
}
