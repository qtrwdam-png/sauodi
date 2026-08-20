/**
 * فلسفة المكوّن: تذييل غني ومباشر يطابق بنية Masheed Gate الأصلية؛
 * تصنيفات وروابط وثقة ووسائل دفع ضمن خلفية داكنة هادئة.
 */

import { categories } from "@/data/catalog";
import { Facebook, Instagram, Linkedin, Mail, Phone, Youtube } from "lucide-react";
import { Link } from "wouter";

export default function Footer() {
  return (
    <footer className="site-footer" dir="rtl">
      <div className="site-container footer-grid">
        <section className="footer-brand">
          <img src="/images/site/masheed-footer.png" alt="بوابة مشيد" />
          <p>بوابتك لشراء مواد البناء وتوريدها إلى موقع مشروعك بكل سهولة.</p>
          <a href="tel:+966920011534"><Phone size={17} /><span dir="ltr">+966 920011534</span></a>
          <a href="mailto:Care@masheedGate.com"><Mail size={17} />Care@masheedGate.com</a>
        </section>

        <section>
          <h3>التصنيفات</h3>
          <div className="footer-links">
            {categories.slice(0, 7).map((category) => (
              <Link key={category.slug} href={`/categories/${category.slug}`}>{category.name}</Link>
            ))}
          </div>
        </section>

        <section>
          <h3>روابط سريعة</h3>
          <div className="footer-links">
            <Link href="/contact">اتصل بنا</Link>
            <Link href="/about">معلومات عنا</Link>
            <Link href="/faq">الأسئلة الشائعة</Link>
            <Link href="/terms">الشروط والأحكام</Link>
            <Link href="/returns">سياسة الاسترجاع</Link>
            <Link href="/privacy">سياسة الخصوصية</Link>
          </div>
        </section>

        <section>
          <h3>تواصل معنا</h3>
          <div className="social-links">
            <a href="https://x.com/MasheedGate" target="_blank" rel="noreferrer">X</a>
            <a href="https://youtube.com/channel/UCoDWgmoqjuiQpJEIlYmvkUQ" target="_blank" rel="noreferrer"><Youtube size={19} /></a>
            <a href="https://www.linkedin.com/company/masheed-gate/" target="_blank" rel="noreferrer"><Linkedin size={19} /></a>
            <a href="https://www.facebook.com/MasheedGateKSA" target="_blank" rel="noreferrer"><Facebook size={19} /></a>
            <a href="https://www.instagram.com/masheedgate" target="_blank" rel="noreferrer"><Instagram size={19} /></a>
          </div>
          <h3 className="language-title">اللغة</h3>
          <div className="language-list"><span>English</span><b>العربية</b></div>
          <div className="currency">العملة <strong>SAR</strong></div>
        </section>
      </div>

      <div className="site-container trust-row">
        <img className="payment-logos" src="/images/site/payment-types.png" alt="وسائل الدفع" />
        <img className="store-badge" src="/images/site/app-store.png" alt="متوفر على App Store" />
        <img className="store-badge" src="/images/site/google-store.png" alt="متوفر على Google Play" />
      </div>

      <div className="copyright">
        <div className="site-container">© {new Date().getFullYear()} بوابة مشيد — جميع الحقوق محفوظة</div>
      </div>
    </footer>
  );
}
