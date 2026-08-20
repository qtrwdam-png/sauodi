/**
 * فلسفة الصفحة: تأكيد مباشر وموثوق بعد إرسال طلب Masheed Gate،
 * يعرض المرجع والخطوة التالية دون مبالغة أو عناصر مشتتة.
 */

import SiteLayout from "@/components/SiteLayout";
import { CheckCircle2 } from "lucide-react";
import { Link } from "wouter";

export default function OrderSuccessPage() {
  const orderNumber = sessionStorage.getItem("masheed_last_order") ?? "MG-PENDING";
  return (
    <SiteLayout>
      <section className="success-page page-pad"><div className="site-container"><div className="success-card"><CheckCircle2 size={68} /><span>تم استلام طلبك</span><h1>شكراً لك، سنراجع احتياج مشروعك</h1><p>وصل طلب عرض السعر إلى فريق الخدمة، وسيتم التواصل معك عبر رقم الجوال المسجل لتأكيد الكمية والسعر والتوريد.</p><div className="order-reference"><span>رقم الطلب</span><b dir="ltr">{orderNumber}</b></div><div className="success-actions"><Link href="/">العودة للرئيسية</Link><Link href="/categories/all" className="outline">متابعة التسوق</Link></div></div></div></section>
    </SiteLayout>
  );
}
