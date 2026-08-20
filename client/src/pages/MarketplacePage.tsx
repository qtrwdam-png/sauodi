/**
 * فلسفة الصفحة: صفحة «ابدأ البيع» متسقة مع مرجع Masheed Gate وتستخدم نموذجاً عملياً
 * يرسل طلب المورد إلى لوحة التحكم نفسها دون تغيير بنيتها.
 */

import SiteLayout from "@/components/SiteLayout";
import { submitOrder } from "@/lib/firebase";
import { Building2, CheckCircle2, Loader2, Store } from "lucide-react";
import { FormEvent, useState } from "react";
import { toast } from "sonner";

export default function MarketplacePage() {
  const [loading, setLoading] = useState(false);
  const [sent, setSent] = useState(false);
  const [form, setForm] = useState({ ownerName: "", companyName: "", phoneNumber: "", email: "", city: "الرياض", address: "", notes: "" });

  const submit = async (event: FormEvent) => {
    event.preventDefault();
    setLoading(true);
    try {
      await submitOrder({ ...form, district: "", items: [{ id: "seller-application", name: "طلب انضمام مورد", brand: form.companyName, quantity: 1, unit: "طلب" }], requestType: "seller" });
      setSent(true);
    } catch (error) {
      console.error(error);
      toast.error("تعذر إرسال طلب المورد حالياً");
    } finally {
      setLoading(false);
    }
  };

  return (
    <SiteLayout>
      <section className="marketplace-hero"><div className="site-container marketplace-hero-inner"><div><span>انضم إلى بوابة مشيد</span><h1>ابدأ البيع لعملاء مشاريع البناء</h1><p>اعرض موادك وخدمات التوريد من خلال بوابة متخصصة في احتياجات قطاع البناء.</p><div className="seller-benefits"><div><CheckCircle2 size={19} />وصول لطلبات مشاريع</div><div><CheckCircle2 size={19} />إدارة واضحة للاحتياجات</div><div><CheckCircle2 size={19} />دعم فريق الخدمة</div></div></div><Store size={130} /></div></section>
      <section className="page-pad"><div className="site-container seller-form-shell">{sent ? <div className="seller-success"><CheckCircle2 size={58} /><h2>تم استلام طلب الانضمام</h2><p>سيتواصل معك فريق بوابة مشيد لمراجعة بيانات المنشأة.</p></div> : <form className="seller-form" onSubmit={submit}><div className="form-card-title"><Building2 size={23} /><div><h2>بيانات المورد</h2><p>عبّئ البيانات الأساسية وسيتواصل معك الفريق.</p></div></div><div className="form-grid"><label><span>اسم المسؤول *</span><input required value={form.ownerName} onChange={(e) => setForm({ ...form, ownerName: e.target.value })} /></label><label><span>اسم المنشأة *</span><input required value={form.companyName} onChange={(e) => setForm({ ...form, companyName: e.target.value })} /></label><label><span>رقم الجوال *</span><input required dir="ltr" value={form.phoneNumber} onChange={(e) => setForm({ ...form, phoneNumber: e.target.value })} /></label><label><span>البريد الإلكتروني</span><input type="email" dir="ltr" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} /></label><label><span>المدينة</span><input value={form.city} onChange={(e) => setForm({ ...form, city: e.target.value })} /></label><label><span>عنوان المنشأة</span><input value={form.address} onChange={(e) => setForm({ ...form, address: e.target.value })} /></label><label className="full"><span>المنتجات والخدمات</span><textarea rows={5} value={form.notes} onChange={(e) => setForm({ ...form, notes: e.target.value })} /></label></div><button type="submit" className="submit-order-button" disabled={loading}>{loading ? <Loader2 className="spin" size={20} /> : <Store size={20} />} إرسال طلب الانضمام</button></form>}</div></section>
    </SiteLayout>
  );
}
