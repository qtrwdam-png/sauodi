/**
 * فلسفة الصفحة: إعادة بناء الصفحة الرئيسية المرجعية لـ Masheed Gate بتسلسلها التجاري؛
 * بانر واضح، تصنيفات، منتجات، مزايا، وفيديو، دون إضافة أنماط لا تنتمي للأصل.
 */

import ProductCard from "@/components/ProductCard";
import SiteLayout from "@/components/SiteLayout";
import { categories, products } from "@/data/catalog";
import { ArrowLeft, ChevronLeft } from "lucide-react";
import { Link } from "wouter";

const serviceItems = [
  { title: "سرعة في الوصول", image: "/manus-storage/feature-speed_6bc947f9.png" },
  { title: "خدمة العملاء", image: "/manus-storage/feature-support_8d859e86.png" },
  { title: "طرق دفع متعددة", image: "/manus-storage/feature-payment_c6de1b26.png" },
  { title: "اطلب احتياجتك", image: "/manus-storage/feature-request_a8ab473c.png" },
];

export default function Home() {
  return (
    <SiteLayout>
      <section className="hero-section">
        <div className="site-container hero-shell">
          <div className="hero-main">
            <img
              className="hero-image"
              src="/manus-storage/masheed-hero-reference_108176db.jpg"
              alt="مواد بناء وتوريد للمشاريع"
            />
            <div className="hero-overlay" />
            <div className="hero-content">
              <span className="hero-kicker">كل احتياجات مشروعك في مكان واحد</span>
              <h1>بوابة مشيد لمواد البناء</h1>
              <p>اطلب الأسمنت والرمل والطوب والحديد ومواد التشطيب من موردين متخصصين.</p>
              <div className="hero-actions">
                <Link href="/categories/cementdelivery" className="hero-primary">تسوق مواد البناء <ArrowLeft size={19} /></Link>
                <Link href="/marketplace" className="hero-secondary">ابدأ البيع</Link>
              </div>
            </div>
          </div>
          <div className="hero-side-cards">
            <Link href="/categories/glue-adhesives" className="promo-card">
              <img src="/manus-storage/masheed-brand-banner_d2498313.jpg" alt="مواد اللصق" />
              <span>مواد اللصق والتشطيب</span>
            </Link>
            <Link href="/categories/voucher" className="promo-card promo-small">
              <img src="/manus-storage/masheed-campaign_2d981623.jpg" alt="أرض المصنع" />
              <span>عروض أرض المصنع</span>
            </Link>
          </div>
        </div>
      </section>

      <section className="quick-categories">
        <div className="site-container category-chip-row">
          {categories.slice(0, 5).map((category) => (
            <Link key={category.slug} href={`/categories/${category.slug}`} className="category-chip">
              <div className="category-chip-image"><img src={category.image} alt="" /></div>
              <span>{category.name}</span>
              <ChevronLeft size={17} />
            </Link>
          ))}
        </div>
      </section>

      <section className="home-section soft-section">
        <div className="site-container">
          <div className="section-heading">
            <div><span>تصفح حسب الاحتياج</span><h2>التصنيفات الرئيسية</h2></div>
            <Link href="/categories/all">عرض جميع التصنيفات <ArrowLeft size={17} /></Link>
          </div>
          <div className="category-grid">
            {categories.map((category) => (
              <Link key={category.slug} href={`/categories/${category.slug}`} className="category-card">
                <div className="category-card-image"><img src={category.image} alt={category.name} /></div>
                <div className="category-card-content">
                  <h3>{category.name}</h3>
                  <p>{category.description}</p>
                  <span>تصفح المنتجات <ChevronLeft size={16} /></span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="home-section products-section">
        <div className="site-container">
          <div className="section-heading">
            <div><span>مختارات بوابة مشيد</span><h2>منتجات لمشروعك</h2></div>
            <Link href="/categories/all">عرض كل المنتجات <ArrowLeft size={17} /></Link>
          </div>
          <div className="product-grid home-product-grid">
            {products.slice(0, 8).map((product) => <ProductCard key={product.id} product={product} />)}
          </div>
        </div>
      </section>

      <section className="services-section">
        <div className="site-container services-grid">
          {serviceItems.map((item) => (
            <div className="service-item" key={item.title}>
              <img src={item.image} alt="" />
              <div><h3>{item.title}</h3><p>خدمة عملية تساند طلبك من الاختيار حتى التوريد.</p></div>
            </div>
          ))}
        </div>
      </section>

      <section className="home-section story-section">
        <div className="site-container story-grid">
          <div className="story-copy">
            <span>بوابة مشيد</span>
            <h2>أسهل طريقة لطلب مواد البناء</h2>
            <p>اختر المواد والكميات، أرسل موقع المشروع، ثم استلم عرض السعر المناسب من فريق الخدمة.</p>
            <ol>
              <li><b>01</b><div><strong>اختر احتياجك</strong><span>تصفح التصنيفات والمنتجات.</span></div></li>
              <li><b>02</b><div><strong>حدد الكمية والموقع</strong><span>أضف تفاصيل مشروعك إلى الطلب.</span></div></li>
              <li><b>03</b><div><strong>استلم عرض السعر</strong><span>يتواصل الفريق لتأكيد السعر والتوريد.</span></div></li>
            </ol>
          </div>
          <div className="video-frame">
            <iframe
              src="https://www.youtube.com/embed/-TbDeNjTiC4"
              title="تعرف على بوابة مشيد"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
        </div>
      </section>

      <section className="request-banner">
        <div className="site-container request-banner-inner">
          <div><span>لم تجد المادة المطلوبة؟</span><h2>أرسل احتياج مشروعك وسنتواصل معك</h2></div>
          <Link href="/checkout" className="request-banner-button">اطلب احتياجتك <ArrowLeft size={19} /></Link>
        </div>
      </section>
    </SiteLayout>
  );
}
