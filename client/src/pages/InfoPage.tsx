/**
 * فلسفة الصفحة: صفحات معلومات قانونية وخدمية بسيطة ومتسقة مع الترويسة والتذييل المرجعيين،
 * مع محتوى عربي واضح ومساحة قراءة مريحة.
 */

import SiteLayout from "@/components/SiteLayout";
import { Link, useLocation } from "wouter";

const content: Record<string, { title: string; paragraphs: string[] }> = {
  "/about": { title: "معلومات عنا", paragraphs: ["بوابة مشيد منصة متخصصة في تسهيل الوصول إلى مواد البناء ومورديها.", "تهدف الخدمة إلى تنظيم طلبات المشاريع وربط العميل بالخيارات المناسبة حسب المادة والكمية وموقع التوريد."] },
  "/contact": { title: "اتصل بنا", paragraphs: ["يسعد فريق الخدمة باستقبال استفساراتك وطلباتك عبر الرقم +966 920011534 أو البريد Care@masheedGate.com.", "يمكنك كذلك إرسال طلب عرض سعر من الموقع وسيتم التواصل معك بعد مراجعة التفاصيل."] },
  "/faq": { title: "الأسئلة الشائعة", paragraphs: ["كيف أحصل على السعر؟ أضف المنتجات والكميات ثم أرسل موقع المشروع ليتم تجهيز عرض السعر.", "هل التوصيل متاح؟ يتم تأكيد التوصيل والتكلفة حسب المدينة والكمية ونوع المادة."] },
  "/terms": { title: "الشروط والأحكام", paragraphs: ["يخضع توفر المواد والأسعار وجداول التوريد لتأكيد المورد بعد استلام الطلب.", "إرسال الطلب من الموقع لا يمثل فاتورة نهائية حتى يتم تأكيد التفاصيل مع العميل."] },
  "/returns": { title: "سياسة الاسترجاع", paragraphs: ["تختلف شروط الإلغاء والاسترجاع حسب نوع المادة وحالتها ومرحلة التوريد.", "يرجى التواصل مع فريق الخدمة فوراً عند الحاجة إلى تعديل الطلب أو إلغائه."] },
  "/privacy": { title: "سياسة الخصوصية", paragraphs: ["تُستخدم بيانات التواصل وموقع المشروع لمعالجة الطلب والتواصل بشأن التوريد.", "لا تُعرض بيانات العميل للعامة، وتُحفظ ضمن أنظمة تشغيل الطلبات المخصصة للخدمة."] },
};

export default function InfoPage() {
  const [location] = useLocation();
  const page = content[location] ?? content["/about"];
  return <SiteLayout><section className="page-crumbs"><div className="site-container"><Link href="/">الرئيسية</Link><span>/</span><b>{page.title}</b></div></section><section className="info-page page-pad"><div className="site-container"><article><h1>{page.title}</h1>{page.paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}</article></div></section></SiteLayout>;
}

