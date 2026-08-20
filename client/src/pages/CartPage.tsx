/**
 * فلسفة الصفحة: سلة Masheed Gate عملية وهادئة، تحافظ على حالة السلة الفارغة المرجعية
 * وتعرض طلبات الأسعار في جدول واضح عند إضافة منتجات.
 */

import SiteLayout from "@/components/SiteLayout";
import { useStore } from "@/contexts/StoreContext";
import { formatPrice } from "@/data/catalog";
import { Minus, Plus, ShoppingCart, Trash2 } from "lucide-react";
import { Link } from "wouter";

export default function CartPage() {
  const { cart, cartCount, removeFromCart, updateQuantity } = useStore();
  const subtotal = cart.reduce((sum, { product, quantity }) => sum + (product.price ?? 0) * quantity, 0);
  const hasUnpriced = cart.some(({ product }) => product.price == null);

  if (typeof window !== "undefined") {
    sessionStorage.setItem("masheed_cart_total", subtotal.toFixed(2));
  }

  return (
    <SiteLayout>
      <section className="page-crumbs"><div className="site-container"><Link href="/">الرئيسية</Link><span>/</span><b>عربة التسوق</b></div></section>
      <section className="cart-page page-pad">
        <div className="site-container">
          <h1 className="page-title">عربة التسوق</h1>
          {cart.length === 0 ? (
            <div className="empty-cart">
              <div className="empty-cart-icon"><ShoppingCart size={56} /></div>
              <h2>عربة التسوق فارغة</h2>
              <p>لم تضف أي منتجات إلى طلب عرض السعر بعد.</p>
              <Link href="/">واصل التسوق</Link>
            </div>
          ) : (
            <div className="cart-layout">
              <div className="cart-list">
                <div className="cart-table-head"><span>المنتج</span><span>الكمية</span><span>الحالة</span><span /></div>
                {cart.map(({ product, quantity }) => (
                  <article className="cart-row" key={product.id}>
                    <div className="cart-product"><img src={product.image} alt={product.name} /><div><b>{product.name}</b><span>{product.brand}</span><small>الوحدة: {product.unit}</small></div></div>
                    <div className="quantity-control compact">
                      <button type="button" onClick={() => updateQuantity(product.id, quantity - 1)}><Minus size={14} /></button>
                      <input value={quantity} onChange={(event) => updateQuantity(product.id, Number(event.target.value) || 1)} aria-label={`كمية ${product.name}`} />
                      <button type="button" onClick={() => updateQuantity(product.id, quantity + 1)}><Plus size={14} /></button>
                    </div>
                    <div className="cart-status">{product.price != null ? formatPrice(product.price * quantity) : "السعر عند الطلب"}</div>
                    <button className="remove-cart-item" type="button" onClick={() => removeFromCart(product.id)} aria-label={`حذف ${product.name}`}><Trash2 size={19} /></button>
                  </article>
                ))}
                <Link href="/categories/all" className="continue-shopping">متابعة التسوق</Link>
              </div>
              <aside className="cart-summary">
                <h2>ملخص الطلب</h2>
                <div><span>عدد الأصناف</span><b>{cart.length}</b></div>
                <div><span>إجمالي الوحدات</span><b>{cartCount}</b></div>
                {subtotal > 0 && <div><span>إجمالي المنتجات المسعّرة</span><b>{formatPrice(subtotal)}</b></div>}
                <div className="summary-note"><strong>{subtotal > 0 && !hasUnpriced ? "الإجمالي التقريبي" : "التكلفة النهائية"}</strong><p>{hasUnpriced || subtotal === 0 ? "بعض المنتجات تُسعّر عند الطلب؛ يتم تأكيد السعر والتوصيل بعد مراجعة الكمية وموقع المشروع." : "يشمل المنتجات المسعّرة، ويُؤكد التوصيل بعد مراجعة موقع المشروع."}</p></div>
                <Link href="/checkout" className="checkout-link">متابعة طلب عرض السعر</Link>
              </aside>
            </div>
          )}
        </div>
      </section>
    </SiteLayout>
  );
}
