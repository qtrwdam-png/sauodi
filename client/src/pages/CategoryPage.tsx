/**
 * فلسفة الصفحة: صفحة تصنيف كثيفة وعملية كما في Masheed Gate المرجعي؛
 * مرشحات على اليمين، بطاقات منتجات منظمة، ومسار تنقل واضح في RTL.
 */

import ProductCard from "@/components/ProductCard";
import SiteLayout from "@/components/SiteLayout";
import { brands, categories, getCategory, getProductsForCategory, products } from "@/data/catalog";
import { Grid2X2, SlidersHorizontal } from "lucide-react";
import { useMemo, useState } from "react";
import { Link, useParams } from "wouter";

export default function CategoryPage() {
  const params = useParams<{ slug: string }>();
  const category = params.slug === "all" ? null : getCategory(params.slug);
  const [selectedBrands, setSelectedBrands] = useState<string[]>([]);
  const [mobileFilters, setMobileFilters] = useState(false);
  const search = new URLSearchParams(window.location.search).get("search")?.trim().toLowerCase() ?? "";

  const visibleProducts = useMemo(() => {
    const base = params.slug === "all" ? products : getProductsForCategory(params.slug);
    return base.filter((product) => {
      const brandMatch = selectedBrands.length === 0 || selectedBrands.includes(product.brand);
      const searchMatch = !search || `${product.name} ${product.brand}`.toLowerCase().includes(search);
      return brandMatch && searchMatch;
    });
  }, [params.slug, search, selectedBrands]);

  const toggleBrand = (brand: string) => {
    setSelectedBrands((current) => current.includes(brand) ? current.filter((item) => item !== brand) : [...current, brand]);
  };

  return (
    <SiteLayout>
      <section className="page-crumbs"><div className="site-container"><Link href="/">الرئيسية</Link><span>/</span><b>{category?.name ?? "جميع المنتجات"}</b></div></section>
      <section className="category-hero">
        <div className="site-container category-hero-inner">
          <div><span>المنتجات</span><h1>{category?.name ?? (search ? `نتائج البحث: ${search}` : "جميع المنتجات")}</h1><p>{category?.description ?? "تصفح مواد البناء المتاحة واطلب المواد  المناسبة لمشروعك."}</p></div>
          {category && <img src={category.image} alt={category.name} />}
        </div>
      </section>
      <section className="category-content">
        <div className="site-container category-layout">
          <button type="button" className="mobile-filter-button" onClick={() => setMobileFilters(!mobileFilters)}><SlidersHorizontal size={19} /> المرشحات</button>
          <aside className={`filters-sidebar ${mobileFilters ? "open" : ""}`}>
            <div className="filter-box">
              <h3>العلامة التجارية</h3>
              <div className="filter-options">
                {brands.map((brand) => (
                  <label key={brand}><input type="checkbox" checked={selectedBrands.includes(brand)} onChange={() => toggleBrand(brand)} /><span>{brand}</span></label>
                ))}
              </div>
            </div>
            <div className="filter-box">
              <h3>التصنيفات</h3>
              <div className="filter-links">
                {categories.map((item) => <Link key={item.slug} href={`/categories/${item.slug}`}>{item.name}</Link>)}
              </div>
            </div>
            {category && (
              <div className="filter-box">
                <h3>التصنيفات الفرعية</h3>
                <div className="filter-links">{category.subcategories.map((item) => <span key={item}>{item}</span>)}</div>
              </div>
            )}
          </aside>
          <div className="category-products">
            <div className="results-toolbar">
              <div><Grid2X2 size={18} /><b>{visibleProducts.length}</b> منتج</div>
              <select aria-label="ترتيب المنتجات" defaultValue="default"><option value="default">الترتيب الافتراضي</option><option value="name">الاسم</option><option value="availability">المتوفر أولاً</option></select>
            </div>
            {visibleProducts.length > 0 ? (
              <div className="product-grid">{visibleProducts.map((product) => <ProductCard key={product.id} product={product} />)}</div>
            ) : (
              <div className="empty-results"><SlidersHorizontal size={34} /><h2>لا توجد منتجات مطابقة</h2><p>جرّب إزالة بعض المرشحات أو العودة إلى جميع المنتجات.</p><Link href="/categories/all">عرض جميع المنتجات</Link></div>
            )}
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}
