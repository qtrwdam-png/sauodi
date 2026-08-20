/**
 * فلسفة الصفحة: نموذج طلب عربي واضح مطابق لطابع Masheed Gate التجاري،
 * يطلب الحد الضروري من بيانات المشروع ويرسلها لنفس لوحة التحكم الحالية.
 */

import SiteLayout from "@/components/SiteLayout";
import { useStore } from "@/contexts/StoreContext";
import { formatPrice } from "@/data/catalog";
import { submitOrder } from "@/lib/firebase";
import { CheckCircle2, Loader2, MapPin, ShoppingBag } from "lucide-react";
import { FormEvent, useState } from "react";
import { toast } from "sonner";
import { Link, useLocation } from "wouter";

const cities = ["الرياض", "جدة", "الدمام", "الخبر", "مكة المكرمة", "المدينة المنورة", "القصيم", "أبها", "أخرى"];

export default function CheckoutPage() {
  const { cart, clearCart } = useStore();
  const subtotal = cart.reduce((sum, { product, quantity }) => sum + (product.price ?? 0) * quantity, 0);
  const [, setLocation] = useLocation();
  const [submitting, setSubmitting] = useState(false);
  const [form, setForm] = useState({ ownerName: "", phoneNumber: "", email: "", city: "الرياض", district: "", address: "", notes: "" });

  const update = (key: keyof typeof form, value: string) => setForm((current) => ({ ...current, [key]: value }));

  const submit = async (event: FormEvent) => {
    event.preventDefault();
    if (!form.ownerName.trim() || !form.phoneNumber.trim() || !form.address.trim()) {
      toast.error("يرجى تعبئة الاسم ورقم الجوال وعنوان المشروع");
      return;
    }
    setSubmitting(true);
    try {
      const items = cart.length > 0
        ? cart.map(({ product, quantity }) => ({ id: product.id, name: product.name, brand: product.brand, quantity, unit: product.unit, price: product.price ?? undefined }))
        : [{ id: "general-request", name: "احتياج مواد بناء عام", brand: "بوابة مشيد", quantity: 1, unit: "طلب" }];
      const orderNumber = await submitOrder({ ...form, items, totalAmount: subtotal > 0 ? subtotal.toFixed(2) : undefined, requestType: "order" });
      sessionStorage.setItem("masheed_last_order", orderNumber);
      clearCart();
      setLocation("/order-success");
    } catch (error) {
      console.error(error);
      toast.error("تعذر إرسال الطلب حالياً. يرجى المحاولة مرة أخرى.");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <SiteLayout>
      <section className="page-crumbs"><div className="site-container"><Link href="/">الرئيسية</Link><span>/</span><Link href="/checkout/cart">عربة التسوق</Link><span>/</span><b>إتمام الطلب</b></div></section>
      <section className="checkout-page page-pad">
        <div className="site-container">
          <h1 className="page-title">طلب عرض السعر</h1>
          <div className="checkout-grid">
            <form className="checkout-form" onSubmit={submit}>
              <div className="form-card">
                <div className="form-card-title"><MapPin size={22} /><div><h2>بيانات التواصل وموقع المشروع</h2><p>أدخل البيانات اللازمة لتجهيز عرض السعر والتوريد.</p></div></div>
                <div className="form-grid">
                  <label className="full"><span>الاسم الكامل *</span><input required value={form.ownerName} onChange={(event) => update("ownerName", event.target.value)} placeholder="الاسم الكامل" /></label>
                  <label><span>رقم الجوال *</span><input required dir="ltr" inputMode="tel" value={form.phoneNumber} onChange={(event) => update("phoneNumber", event.target.value)} placeholder="05xxxxxxxx" /></label>
                  <label><span>البريد الإلكتروني</span><input type="email" dir="ltr" value={form.email} onChange={(event) => update("email", event.target.value)} placeholder="name@example.com" /></label>
                  <label><span>المدينة *</span><select value={form.city} onChange={(event) => update("city", event.target.value)}>{cities.map((city) => <option key={city}>{city}</option>)}</select></label>
                  <label><span>الحي</span><input value={form.district} onChange={(event) => update("district", event.target.value)} placeholder="اسم الحي" /></label>
                  <label className="full"><span>عنوان المشروع *</span><input required value={form.address} onChange={(event) => update("address", event.target.value)} placeholder="الشارع، رقم المبنى، علامة مميزة" /></label>
                  <label className="full"><span>ملاحظات الطلب</span><textarea rows={4} value={form.notes} onChange={(event) => update("notes", event.target.value)} placeholder="اذكر أي تفاصيل عن الكميات أو وقت التوريد" /></label>
                </div>
              </div>
              <button type="submit" className="submit-order-button" disabled={submitting}>{submitting ? <Loader2 className="spin" size={20} /> : <CheckCircle2 size={20} />} إرسال طلب عرض السعر</button>
            </form>

            <aside className="checkout-summary">
              <div className="summary-title"><ShoppingBag size={21} /><h2>تفاصيل الطلب</h2></div>
              {cart.length > 0 ? cart.map(({ product, quantity }) => (
                <div className="checkout-item" key={product.id}><img src={product.image} alt="" /><div><b>{product.name}</b><span>{quantity} × {product.unit}</span>{product.price != null && <span className="checkout-item-price">{formatPrice(product.price * quantity)}</span>}</div></div>
              )) : <div className="general-request-note">سيُرسل طلب احتياج عام، ويمكنك كتابة المواد والكميات في خانة الملاحظات.</div>}
              {subtotal > 0 && <div className="checkout-total"><span>الإجمالي التقريبي</span><b>{formatPrice(subtotal)}</b></div>}
              <div className="checkout-price-note"><b>{subtotal > 0 ? "إجمالي المنتجات المسعّرة" : "السعر عند الطلب"}</b><p>سيتواصل فريق الخدمة بعد مراجعة التفاصيل لتأكيد السعر وموعد التوريد.</p></div>
            </aside>
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}
