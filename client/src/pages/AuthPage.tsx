/**
 * فلسفة الصفحة: نماذج حساب مطابقة لبنية تسجيل الدخول المرجعية في Masheed Gate،
 * بأقل قدر من الزخرفة ورسائل خطأ واضحة وتكامل Firebase Auth.
 */

import SiteLayout from "@/components/SiteLayout";
import { register, resetPassword, signIn } from "@/lib/firebase";
import { Eye, EyeOff, Loader2, LockKeyhole, Mail, UserRound } from "lucide-react";
import { FormEvent, useState } from "react";
import { toast } from "sonner";
import { Link, useLocation } from "wouter";

export default function AuthPage({ mode }: { mode: "login" | "register" | "forgot" }) {
  const [, setLocation] = useLocation();
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const title = mode === "login" ? "تسجيل الدخول" : mode === "register" ? "إنشاء حساب جديد" : "استعادة كلمة الدخول";

  const submit = async (event: FormEvent) => {
    event.preventDefault();
    setLoading(true);
    try {
      if (mode === "forgot") {
        await resetPassword(email);
        toast.success("تم إرسال رابط استعادة كلمة الدخول إلى بريدك");
      } else if (mode === "register") {
        await register(email, password);
        toast.success("تم إنشاء الحساب بنجاح");
        setLocation("/");
      } else {
        await signIn(email, password);
        toast.success("تم تسجيل الدخول بنجاح");
        setLocation("/");
      }
    } catch (error) {
      console.error(error);
      toast.error("تعذر إكمال العملية. تحقق من البيانات وإعدادات الحساب.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <SiteLayout>
      <section className="page-crumbs"><div className="site-container"><Link href="/">الرئيسية</Link><span>/</span><b>{title}</b></div></section>
      <section className="auth-page page-pad">
        <div className="site-container auth-shell">
          <div className="auth-intro"><img src="/images/site/masheed-logo.png" alt="بوابة مشيد" /><h1>{title}</h1><p>{mode === "login" ? "سجل الدخول للوصول إلى حسابك ومتابعة طلباتك." : mode === "register" ? "أنشئ حسابك لتسريع طلبات مواد البناء." : "أدخل بريدك الإلكتروني لإرسال رابط الاستعادة."}</p></div>
          <form className="auth-form" onSubmit={submit}>
            <label><span>البريد الإلكتروني</span><div className="input-with-icon"><Mail size={18} /><input required type="email" dir="ltr" value={email} onChange={(event) => setEmail(event.target.value)} placeholder="name@example.com" /></div></label>
            {mode !== "forgot" && <label><span>كلمة الدخول</span><div className="input-with-icon"><LockKeyhole size={18} /><input required minLength={6} type={showPassword ? "text" : "password"} dir="ltr" value={password} onChange={(event) => setPassword(event.target.value)} placeholder="••••••••" /><button type="button" onClick={() => setShowPassword(!showPassword)} aria-label="إظهار كلمة المرور">{showPassword ? <EyeOff size={18} /> : <Eye size={18} />}</button></div></label>}
            {mode === "login" && <Link href="/customer/forgot-password" className="forgot-link">نسيت كلمة الدخول؟</Link>}
            <button type="submit" className="auth-submit" disabled={loading}>{loading ? <Loader2 className="spin" size={19} /> : mode === "register" ? <UserRound size={19} /> : null}{title}</button>
            <div className="auth-switch">{mode === "login" ? <>ليس لديك حساب؟ <Link href="/customer/register">إنشاء حساب جديد</Link></> : <>لديك حساب؟ <Link href="/customer/login">تسجيل الدخول</Link></>}</div>
          </form>
        </div>
      </section>
    </SiteLayout>
  );
}
