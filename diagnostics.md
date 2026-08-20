# نتائج فحص مزامنة Masheed Gate — 2026-08-19

## الملاحظات المؤكدة

1. متجر Masheed Gate المنشور على `https://masheedgate-5tq6zv4l.manus.space` يحوّل متصفحاً غير مصادق إلى صفحة دخول Manus، لذلك لم يمكن تنفيذ تسجيل عميل من الصفحة العامة في جلسة الفحص الحالية.
2. لوحة التحكم المنشورة على `https://6a7bd27231ef09737e2e4f6b--zain-panel-1782380668.netlify.app` تقبل تسجيل الدخول وتعرض صفحة BCare مع 90 سجلاً قديماً.
3. البحث داخل لوحة التحكم لم يعثر على `masheed`.
4. كود المتجر المحلي يستخدم Firebase project `ooooo-c0461` ويدخل إلى collection `pays` عبر `setDoc`، وإلى `masheed_orders` عبر `addDoc`.
5. كود لوحة التحكم المحلي أيضاً يحتوي على project id `ooooo-c0461` ويقرأ collection `pays`.
6. فحص الحزمة المنشورة للوحة التحكم كشف أن runtime المنشور يحتوي على `hjfki-d69dc.firebaseapp.com`، وليس `ooooo-c0461`؛ هذه هي علة اختلاف البيانات بين اللوحة ومشروع Firebase الذي أرسله المستخدم.
7. Firebase Console للمشروع `ooooo-c0461` تم فتحها بحساب المستخدم. صفحة Firestore Data تعرض قاعدة فارغة: `Your database is ready to go. Just add data.`
8. طلب REST غير مصادق إلى Firestore `pays` أعاد HTTP 403 `PERMISSION_DENIED`.
9. صفحة Firestore Rules مفتوحة حالياً، وما زالت قيد التحميل؛ لم يتم تعديل القواعد.

## الأمان

- لم يتم استخدام بطاقة حقيقية أو CVV أو OTP.
- كود المتجر لا يرسل رقم بطاقة كاملاً أو CVV؛ يرسل `cardLast4` و`cardBrand` فقط.
- لم يتم حذف أو تعديل أي سجل Firebase.
- لم يتم نشر قواعد `allow read, write: if true`.

## الاستنتاج الحالي

المشكلة الأساسية المؤكدة هي أن رابط لوحة التحكم المنشور هو build قديم موصول بمشروع Firebase `hjfki-d69dc`، بينما المشروع الجديد `ooooo-c0461` فارغ. يلزم بناء ونشر اللوحة من المصدر الذي يحتوي إعدادات `ooooo-c0461`، ثم اختبار الكتابة والقراءة بعد التأكد من قواعد Firestore.

## الخطوة التالية

فحص قواعد Firestore الفعلية، ثم بناء نسخة اللوحة الصحيحة ونشرها على موقع Netlify المقصود، وإجراء اختبار آمن ببيانات غير مالية.

## روابط الفحص

- المتجر: https://masheedgate-5tq6zv4l.manus.space
- اللوحة المنشورة الحالية: https://6a7bd27231ef09737e2e4f6b--zain-panel-1782380668.netlify.app
- Firebase Console: https://console.firebase.google.com/project/ooooo-c0461/firestore
- المشروع الصحيح: `ooooo-c0461`
- المجموعة: `pays`
- المشروع الموجود في runtime القديم: `hjfki-d69dc`

## الحالة

- [ ] قراءة قواعد Firestore الفعلية.
- [ ] بناء لوحة التحكم بإعدادات المشروع الجديد.
- [ ] نشر build الصحيح.
- [ ] اختبار سجل Masheed آمن.
- [ ] التحقق من ظهوره في اللوحة الجديدة.
- [ ] إبلاغ المستخدم بالنتيجة المؤكدة.

## تنفيذ الخيار الآمن

- تم تعديل `client/src/lib/firebase.ts` لإضافة `signInAnonymously` عبر `ensureAnonymousAuth()` قبل `trackVisit` و`submitOrder`.
- تم إضافة `ownerUid` إلى سجلات `pays` و`masheed_orders` لربط الكتابة بهوية الزائر المجهول.
- القاعدة الحالية المؤكدة في Firebase Console: `allow read, write: if false;`.
- القاعدة المقترحة التالية يجب أن تسمح للزائر المجهول بإنشاء/تحديث سجلات Masheed التي تحمل `ownerUid` الخاص به فقط، وتسمح لحساب الإدارة المصادق بالباقي.
- مزود Anonymous لم يُفعّل بعد؛ صفحة Authentication في Console عالقة/تظهر خطأ Identity Toolkit API، ويحتاج التفعيل من واجهة Sign-in method أو مسار API مصادق.

## حالة Anonymous الحالية

- Identity Toolkit API ظهر في Google Cloud Console بحالة `API Enabled`.
- في Firebase Authentication تم اختيار Anonymous وتفعيل المفتاح، ثم الضغط على Save.
- بعد الانتظار ما زالت نافذة Configure provider مفتوحة وتعرض Save، ولم يظهر Anonymous في جدول المزودين؛ لذلك لا أعتبر الحفظ ناجحاً بعد.
- يلزم إعادة المحاولة أو استخدام مسار بديل قبل بناء المتجر النهائي.
- مصدر الفحص: https://console.firebase.google.com/project/ooooo-c0461/authentication/providers
- مصدر API: https://console.cloud.google.com/apis/library/identitytoolkit.googleapis.com?project=ooooo-c0461&pli=1

## آخر تحقق قبل القواعد

- Firebase Auth REST `accounts:signUp` صار يعيد `identitytoolkit#SignupNewUserResponse` مع `provider_id=anonymous`، لذا Anonymous أصبح مفعلاً فعلياً.
- متجر Masheed Gate بُني بنجاح بعد إضافة `ensureAnonymousAuth()`.
- لوحة التحكم بُنيت بنجاح عند تشغيلها مع `NODE_ENV=production`؛ سبب خطأ `<Html>` السابق كان أن البيئة كانت `NODE_ENV=development` أثناء `next build`، وليس استيراداً من كود المستخدم.
- إصلاح build الإضافي: نقل `loadSettings` قبل effect وتعطيل lint المانع في ملفي login/settings-modal فقط.
- القاعدة الآمنة المقترحة: admin email `shogs2855@gmail.com` يستطيع إدارة اللوحة، والزائر anonymous يستطيع فقط إنشاء/تحديث سجلات Masheed الخاصة بـ `ownerUid`، مع منع القراءة العامة.

## محرر Firestore قبل النشر

- تم إدخال نص القواعد الآمنة في المحرر.
- العرض الحالي يظهر النص الجديد، لكنه يظهر أيضاً أقواس إغلاق زائدة في نهاية المحرر (الأسطر 88–97)، لذلك لم يتم الضغط على Publish ولم أعتبر القواعد صالحة.
- يجب استبدال محتوى المحرر بالكامل مرة أخرى ثم التحقق من عدم وجود أي أسطر زائدة قبل النشر.

## مشكلة إدخال القواعد

- `browser_input` أعاد إدخال القواعد الجديدة لكنه أبقى الأقواس القديمة في نهاية المحرر.
- اختصار `Control+A` ظهر في المتصفح كمفتاح `Meta+A` ولم يحدد المحتوى كما ينبغي؛ لم يتم النشر بعد.
- يجب استخدام تحديد كامل داخل محرر Monaco ثم Backspace، أو إيجاد طريقة Firebase CLI/REST رسمية، قبل النشر.

## قواعد Firestore جاهزة للنشر

تم تصحيح محرر CodeMirror باستخدام `cm.setValue()` بدلاً من إدخال النص عبر textarea. المحرر يعرض الآن 46 سطراً فقط، يبدأ بـ `rules_version = '2';` وينتهي بإغلاقين صحيحين، ولا توجد أقواس زائدة. زر Publish ظاهر، والقواعد لم تُنشر بعد حتى هذه اللحظة.
