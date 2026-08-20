/**
 * فلسفة المكوّن: ترويسة Masheed Gate متعددة الطبقات كما في المرجع؛
 * عملية وكثيفة بالمعلومات، بأخضر العلامة وبرتقاليها ودعم RTL أصيل.
 */

import { categories, topNavigation } from "@/data/catalog";
import { useStore } from "@/contexts/StoreContext";
import {
  ChevronDown,
  Heart,
  Mail,
  Menu,
  Phone,
  Search,
  ShoppingCart,
  UserRound,
  X,
} from "lucide-react";
import { FormEvent, useState } from "react";
import { Link, useLocation } from "wouter";

export default function Header() {
  const { cartCount } = useStore();
  const [, setLocation] = useLocation();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [search, setSearch] = useState("");

  const submitSearch = (event: FormEvent) => {
    event.preventDefault();
    const value = search.trim();
    setLocation(value ? `/categories/all?search=${encodeURIComponent(value)}` : "/categories/all");
  };

  return (
    <header className="site-header" dir="rtl">
      <div className="top-strip">
        <div className="site-container top-strip-inner">
          <div className="contact-links">
            <a href="https://wa.me/966920011534" target="_blank" rel="noreferrer">
              <Phone size={14} />
              <span dir="ltr">+966 920011534</span>
            </a>
            <a href="mailto:care@masheedgate.com">
              <Mail size={14} />
              <span>Care@masheedGate.com</span>
            </a>
            <Link href="/about">من نحن</Link>
          </div>
          <div className="top-actions">
            <a href="https://api.whatsapp.com/send?phone=966920011534" target="_blank" rel="noreferrer">
              اتصل بنا
            </a>
            <span className="top-separator" />
            <a href="https://x.com/MasheedGate" target="_blank" rel="noreferrer">X</a>
            <a href="https://www.linkedin.com/company/masheed-gate/" target="_blank" rel="noreferrer">in</a>
            <a href="https://www.youtube.com/channel/UCoDWgmoqjuiQpJEIlYmvkUQ" target="_blank" rel="noreferrer">▶</a>
          </div>
        </div>
      </div>

      <div className="desktop-main-head">
        <div className="site-container main-head-inner">
          <Link href="/" className="brand-logo" aria-label="بوابة مشيد">
            <img src="/images/site/masheed-logo.png" alt="بوابة مشيد Masheed Gate" />
          </Link>

          <div className="mega-trigger-wrap">
            <button type="button" className="all-categories-button">
              <Menu size={21} />
              جميع التصنيفات
              <ChevronDown size={16} />
            </button>
            <div className="mega-menu" role="menu">
              <div className="mega-menu-grid">
                {categories.map((category) => (
                  <div className="mega-category" key={category.slug}>
                    <Link href={`/categories/${category.slug}`} className="mega-title">
                      {category.name}
                    </Link>
                    <div className="mega-links">
                      {category.subcategories.map((item) => (
                        <Link key={item} href={`/categories/${category.slug}`}>
                          {item}
                        </Link>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <form className="search-form" onSubmit={submitSearch}>
            <input
              value={search}
              onChange={(event) => setSearch(event.target.value)}
              aria-label="بحث المنتجات"
              placeholder="ابحث عن المنتجات..."
            />
            <button type="submit" aria-label="بحث">
              <Search size={20} />
            </button>
          </form>

          <div className="main-head-actions">
            <div className="account-action">
              <UserRound size={24} />
              <div>
                <span>مرحباً بك</span>
                <div className="account-links">
                  <Link href="/customer/login">تسجيل الدخول</Link>
                  <small>/</small>
                  <Link href="/customer/register">حساب جديد</Link>
                </div>
              </div>
            </div>
            <button type="button" className="icon-action" aria-label="المفضلة">
              <Heart size={22} />
            </button>
            <Link href="/checkout/cart" className="cart-action" aria-label="عربة التسوق">
              <ShoppingCart size={25} />
              <span className="cart-count">{cartCount}</span>
            </Link>
            <div className="language-action"><span>English</span><b>العربية</b></div>
          </div>
        </div>
      </div>

      <div className="desktop-category-nav">
        <div className="site-container category-nav-inner">
          <Link href="/marketplace" className="sell-link">ابدأ البيع</Link>
          <nav aria-label="التصنيفات الرئيسية">
            {topNavigation.map((item, index) => (
              <Link key={`${item.slug}-${index}`} href={`/categories/${item.slug}`}>
                {item.name}
              </Link>
            ))}
          </nav>
        </div>
      </div>

      <div className="mobile-head">
        <button type="button" onClick={() => setMobileOpen(true)} aria-label="فتح القائمة">
          <Menu size={26} />
        </button>
        <Link href="/" className="mobile-logo">
          <img src="/images/site/masheed-logo.png" alt="بوابة مشيد" />
        </Link>
        <div className="mobile-icons">
          <Link href="/customer/login" aria-label="الحساب"><UserRound size={22} /></Link>
          <Link href="/checkout/cart" className="cart-action" aria-label="السلة">
            <ShoppingCart size={23} />
            <span className="cart-count">{cartCount}</span>
          </Link>
        </div>
      </div>

      <form className="mobile-search" onSubmit={submitSearch}>
        <input
          value={search}
          onChange={(event) => setSearch(event.target.value)}
          placeholder="ابحث عن المنتجات..."
          aria-label="بحث المنتجات"
        />
        <button type="submit" aria-label="بحث"><Search size={19} /></button>
      </form>

      <div className={`mobile-menu-overlay ${mobileOpen ? "open" : ""}`} onClick={() => setMobileOpen(false)} />
      <aside className={`mobile-drawer ${mobileOpen ? "open" : ""}`} aria-hidden={!mobileOpen}>
        <div className="mobile-drawer-head">
          <img src="/images/site/masheed-logo.png" alt="بوابة مشيد" />
          <button type="button" onClick={() => setMobileOpen(false)} aria-label="إغلاق القائمة"><X size={24} /></button>
        </div>
        <div className="mobile-account-row">
          <Link href="/customer/login" onClick={() => setMobileOpen(false)}>تسجيل الدخول</Link>
          <span>/</span>
          <Link href="/customer/register" onClick={() => setMobileOpen(false)}>حساب جديد</Link>
        </div>
        <div className="mobile-category-list">
          <h3>جميع التصنيفات</h3>
          {categories.map((category) => (
            <details key={category.slug}>
              <summary>{category.name}<ChevronDown size={17} /></summary>
              <Link href={`/categories/${category.slug}`} onClick={() => setMobileOpen(false)}>عرض الكل</Link>
              {category.subcategories.map((item) => (
                <Link key={item} href={`/categories/${category.slug}`} onClick={() => setMobileOpen(false)}>{item}</Link>
              ))}
            </details>
          ))}
        </div>
        <Link href="/marketplace" className="mobile-sell" onClick={() => setMobileOpen(false)}>ابدأ البيع</Link>
      </aside>
    </header>
  );
}
