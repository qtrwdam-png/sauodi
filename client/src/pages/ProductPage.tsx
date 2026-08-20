/**
 * فلسفة الصفحة: صفحة تفاصيل منتج عملية وواضحة، تحافظ على أسلوب Masheed Gate
 * في الصورة الكبيرة، معلومات التوريد، طلب عرض السعر، والمنتجات المشابهة.
 */

import ProductCard from "@/components/ProductCard";
import SiteLayout from "@/components/SiteLayout";
import { useStore } from "@/contexts/StoreContext";
import { getProduct, products } from "@/data/catalog";
import { Check, ChevronLeft, Minus, Plus, ShieldCheck, ShoppingCart, Truck } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";
import { Link, useLocation, useParams } from "wouter";

export default function ProductPage() {
  const { slug } = useParams<{ slug: string }>();
  const product = getProduct(slug);
  const { addToCart } = useStore();
  const [, setLocation] = useLocation();
  const [quantity, setQuantity] = useState(1);
  const related = products.filter((item) => item.category === product.category && item.id !== product.id).slice(0, 4);

  const add = (goToCart = false) => {
    addToCart(product, quantity);
    toast.success("تمت إضافة المنتج إلى طلب عرض السعر");
    if (goToCart) setLocation("/checkout/cart");
  };

  return (
    <SiteLayout>
      <section className="page-crumbs"><div className="site-container"><Link href="/">الرئيسية</Link><span>/</span><Link href={`/categories/${product.category}`}>المنتجات</Link><span>/</span><b>{product.name}</b></div></section>
      <section className="product-details-section">
        <div className="site-container product-details-grid">
          <div className="product-gallery">
            <div className="main-product-image"><img src={product.image} alt={product.name} /></div>
            <div className="gallery-thumb active"><img src={product.image} alt="" /></div>
          </div>
          <div className="product-info">
            <span className="product-info-brand">{product.brand}</span>
            <h1>{product.name}</h1>
            <div className={`availability-pill ${product.available ? "available" : "unavailable"}`}>
              {product.available ? <><Check size={16} /> متوفر لطلب عرض سعر</> : "هذا المنتج سيتوفر قريباً"}
            </div>
            <p className="product-summary">{product.summary}</p>
            <div className="quote-price"><span>السعر</span><strong>عند الطلب</strong><small>يُحدد حسب الكمية وموقع المشروع</small></div>
            <div className="unit-row"><span>وحدة البيع</span><b>{product.unit}</b></div>
            <div className="quantity-row">
              <span>الكمية</span>
              <div className="quantity-control">
                <button type="button" onClick={() => setQuantity((value) => Math.max(1, value - 1))}><Minus size={16} /></button>
                <input value={quantity} onChange={(event) => setQuantity(Math.max(1, Number(event.target.value) || 1))} inputMode="numeric" aria-label="الكمية" />
                <button type="button" onClick={() => setQuantity((value) => value + 1)}><Plus size={16} /></button>
              </div>
            </div>
            <div className="product-buttons">
              <button type="button" onClick={() => add(false)} disabled={!product.available}><ShoppingCart size={19} /> أضف لطلب السعر</button>
              <button type="button" className="outline" onClick={() => add(true)} disabled={!product.available}>اطلب الآن</button>
            </div>
            <div className="product-assurances">
              <div><Truck size={23} /><span><b>توريد للمشروع</b><small>حسب المدينة والكمية</small></span></div>
              <div><ShieldCheck size={23} /><span><b>موردون موثوقون</b><small>متابعة من فريق الخدمة</small></span></div>
            </div>
          </div>
        </div>
      </section>
      <section className="product-specs-section">
        <div className="site-container product-specs-grid">
          <div><h2>وصف المنتج</h2><p>{product.summary}</p><p>يتم تأكيد المواصفات النهائية والتوفر وجدول التوريد عند مراجعة طلب عرض السعر.</p></div>
          <div><h2>المواصفات</h2><ul>{product.specs.map((spec) => <li key={spec}><Check size={16} />{spec}</li>)}</ul></div>
        </div>
      </section>
      {related.length > 0 && (
        <section className="home-section soft-section related-section"><div className="site-container"><div className="section-heading"><div><span>قد تحتاج أيضاً</span><h2>منتجات مشابهة</h2></div><Link href={`/categories/${product.category}`}>عرض التصنيف <ChevronLeft size={17} /></Link></div><div className="product-grid">{related.map((item) => <ProductCard key={item.id} product={item} />)}</div></div></section>
      )}
    </SiteLayout>
  );
}

