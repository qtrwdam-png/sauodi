/**
 * فلسفة المكوّن: غلاف ثابت يحافظ على الترويسة والتذييل المرجعيين في جميع الصفحات،
 * مع تتبع خلفي هادئ لا يغيّر تجربة المستخدم المرئية.
 */

import { trackVisit } from "@/lib/firebase";
import { useEffect } from "react";
import { useLocation } from "wouter";
import Footer from "./Footer";
import Header from "./Header";

export default function SiteLayout({ children }: { children: React.ReactNode }) {
  const [location] = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" });
    void trackVisit(location);
  }, [location]);

  return (
    <div className="min-h-screen bg-white text-[#242424]" dir="rtl">
      <Header />
      <main>{children}</main>
      <Footer />
      <a
        href="https://wa.me/966920011534"
        target="_blank"
        rel="noreferrer"
        className="floating-whatsapp"
        aria-label="تواصل عبر واتساب"
      >
        <span>واتساب</span>
      </a>
    </div>
  );
}
