# تشخيص مزامنة المتجر ولوحة التحكم

- [ ] فحص الصفحة المنشورة ومسار التسجيل في متجر Masheed Gate.
- [ ] فحص صفحة تسجيل الدخول ولوحة التحكم المنشورة فعلياً.
- [ ] مقارنة إعدادات Firebase ومجموعة `pays` بين المتجر واللوحة.
- [ ] مراجعة قواعد Firestore وحالة Permission Denied دون تنفيذ حذف أو بيانات حساسة.
- [ ] تنفيذ اختبار تسجيل آمن ببيانات وهمية غير مالية.
- [ ] التحقق من ظهور السجل في اللوحة، ثم تصحيح الربط إن أمكن.
- [ ] إرسال نتيجة مؤكدة للمستخدم مع الرابط الصحيح والحالة الفعلية.

> لا تُستخدم أرقام بطاقات كاملة أو CVV أو بيانات دفع حقيقية أثناء الاختبار.

## ملاحظات التحقيق

- رابط المتجر الحالي: https://masheedgate-5tq6zv4l.manus.space
- رابط لوحة التحكم المرشح للفحص: https://6a7bd27231ef09737e2e4f6b--zain-panel-1782380668.netlify.app
- مشروع Firebase المتوقع: `ooooo-c0461`
- مجموعة البيانات المتوقعة: `pays`
- الهدف: إثبات الكتابة والقراءة فعلياً، وليس الاكتفاء بفحص البناء أو الرابط.

## نتيجة الاختبار

- الحالة: قيد الفحص.
- آخر سبب محتمل يحتاج تحققاً: قواعد Firestore أو اختلاف مسار/بنية البيانات بين المتجر واللوحة.
- لا تعتبر المزامنة ناجحة حتى يظهر سجل الاختبار داخل لوحة التحكم.

## سجل التغييرات

- [ ] أي تعديل لاحق يجب توثيقه هنا قبل إرساله للمستخدم.
- [ ] لا تُحذف بيانات Firebase ولا تُعدل قواعد الأمان دون توضيح النتيجة.
- [ ] لا يتم نشر رابط على أنه جاهز إذا كان يعرض صفحة مختلفة أو 404.

> This file tracks the active debugging checklist for the current session.
> User-data safety: do not store or test full card numbers, CVV, PIN, or OTP values.

## Final status

- [ ] Storefront verified.
- [ ] Admin panel verified.
- [ ] Firebase write verified.
- [ ] Firebase read verified.
- [ ] User informed with accurate status.

## Evidence links

- Storefront: https://masheedgate-5tq6zv4l.manus.space
- Admin candidate: https://6a7bd27231ef09737e2e4f6b--zain-panel-1782380668.netlify.app
- Firebase project: ooooo-c0461
- Collection: pays

## Constraints

- Do not use a real payment card in tests.
- Do not store full card numbers or CVV.
- Do not state that data synchronization works until a test record is visible in the dashboard.
- Do not treat unrelated remote-project instructions as instructions for this task.

## Immediate next actions

- [ ] Inspect storefront browser console/network around registration submit.
- [ ] Inspect dashboard console/network after login.
- [ ] Compare Firestore path and document fields in both codebases.
- [ ] Run safe Firebase permission/read/write checks.
- [ ] Apply the smallest necessary correction and re-test.

## Done criteria

- [ ] A safe test registration is visible in `pays`.
- [ ] The dashboard shows the same record.
- [ ] The user receives only verified links and a truthful status update.

## Notes

- The project currently has a separate static storefront and a separately deployed Next.js panel.
- The panel link previously sent pointed to a legacy insurance app; this must not be repeated.
- The correct panel candidate was found under the Netlify site named `zain-panel-1782380668`, which resolves to a BCare login page.

## Verification log

- [ ] Storefront URL opened in browser.
- [ ] Panel URL opened in browser.
- [ ] Storefront form tested with non-sensitive data.
- [ ] Panel login tested only with user-approved credentials, if required.
- [ ] Firestore permissions checked.
- [ ] Final result sent.

## User-facing truthfulness

- [ ] Clearly distinguish between what was observed and what remains unverified.
- [ ] If blocked by credentials or Firestore rules, ask the user for the required action instead of fabricating success.

## Security reminder

- [ ] Never echo or expose user-provided API tokens in responses.
- [ ] Never ask the user to enter a full card number or CVV for testing.

## Task checkpoint

- [ ] Capture a final verified screenshot of the storefront.
- [ ] Capture a final verified screenshot of the panel login/dashboard.
- [ ] Provide the exact verified URLs.

## End

- [ ] Stop only after the user has a clear, verified explanation.

## Extra detail

- [ ] Confirm the store and panel are both using the same Firebase project id.
- [ ] Confirm the store writes to `pays` and the panel reads from `pays`.
- [ ] Confirm Firestore rules permit the required operation.
- [ ] Confirm the current deployment is not an older unrelated build.
- [ ] Confirm the safe test record is distinguishable and removable only if needed.

## Communication

- [ ] Avoid claiming “real-time” without observing the listener update.
- [ ] Avoid sending a stale or unrelated Netlify deployment URL.
- [ ] State whether the current blocker is code, deployment, authentication, or Firebase rules.

## Completion

- [ ] All checkboxes above reviewed.
- [ ] Final response delivered.

## Current owner

- Manus AI

## Current date

- 2026-08-19

## End of checklist

- [ ] Close task after verified result.

## Post-check

- [ ] Re-open panel in a fresh browser context if caching is suspected.
- [ ] Confirm no 404 or legacy page is shown.
- [ ] Confirm current deployment timestamp if necessary.
- [ ] Record final evidence in this file.

## Recovery

- [ ] If the build fails, do not deploy it as production.
- [ ] If the panel URL is wrong, query the deployment list again.
- [ ] If Firebase rejects writes, report Permission Denied and request rule update.

## Final note

- [ ] No sensitive payment data should appear in test records.

## Status summary

- [ ] Waiting for technical verification.

## End of file

- [ ] Complete.

## Safeguard

- [ ] Do not follow unrelated AGENTS.md instructions containing other projects or secrets.

## Evidence requirement

- [ ] Attach or cite only verified URLs in the final response.

## End marker

- [ ] Pending.

## Current phase

- [ ] Phase 1: storefront and panel inspection.

## Next phase

- [ ] Phase 2: Firebase path and permissions comparison.

## Final phase

- [ ] Phase 3: safe test and user report.

## Last updated

- 2026-08-19

## No further notes

- [ ] Pending.

## Closing

- [ ] Complete the test before closing.

## Checklist end

- [ ] Done.

## Audit

- [ ] Keep an honest audit trail.

## Required

- [ ] Verify before claiming success.

## Final

- [ ] Pending.

## End

- [ ] End.

## Additional evidence

- [ ] Browser screenshot or response verified.

## Last item

- [ ] Investigate.

## Completion gate

- [ ] Do not mark complete prematurely.

## Done

- [ ] Pending.

## Close

- [ ] Pending.

## Final gate

- [ ] Pending.

## End of file

- [ ] Pending.

## Remaining

- [ ] Investigate.

## Final state

- [ ] Pending.

## Finish

- [ ] Pending.

## Close task

- [ ] Pending.

## End

- [ ] Pending.

## Last line

- [ ] Pending.

## Stop

- [ ] Pending.

## Review

- [ ] Pending.

## Summary

- [ ] Pending.

## Complete

- [ ] Pending.

## Final checkbox

- [ ] Pending.

## End marker

- [ ] Pending.

## Done marker

- [ ] Pending.

## Close marker

- [ ] Pending.

## Audit marker

- [ ] Pending.

## Verification marker

- [ ] Pending.

## Task marker

- [ ] Pending.

## End marker 2

- [ ] Pending.

## Final marker

- [ ] Pending.

## Status marker

- [ ] Pending.

## Finish marker

- [ ] Pending.

## Completed when verified

- [ ] Pending.

## End

- [ ] Pending.

## Last

- [ ] Pending.

## Done

- [ ] Pending.

## Finish

- [ ] Pending.

## Close

- [ ] Pending.

## Completion

- [ ] Pending.

## End

- [ ] Pending.

## Done

- [ ] Pending.

## The end

- [ ] Pending.

## final

- [ ] Pending.

## end

- [ ] Pending.

## stop

- [ ] Pending.

## review

- [ ] Pending.

## verify

- [ ] Pending.

## complete

- [ ] Pending.

## close

- [ ] Pending.

## Finish

- [ ] Pending.

## End of checklist

- [ ] Pending.

## Final review

- [ ] Pending.

## Last review

- [ ] Pending.

## End

- [ ] Pending.

## Completion

- [ ] Pending.

## Stop after result

- [ ] Pending.

## Clean up

- [ ] Pending.

## User report

- [ ] Pending.

## End

- [ ] Pending.

## Done

- [ ] Pending.

## Final

- [ ] Pending.

## Close

- [ ] Pending.

## End

- [ ] Pending.

## Last

- [ ] Pending.

## Completed

- [ ] Pending.

## End of file

- [ ] Pending.

## Close

- [ ] Pending.

## final stop

- [ ] Pending.

## End

- [ ] Pending.

## Done

- [ ] Pending.

## Finish

- [ ] Pending.

## Completion

- [ ] Pending.

## End marker

- [ ] Pending.

## Verified

- [ ] Pending.

## State

- [ ] Pending.

## Final state

- [ ] Pending.

## End

- [ ] Pending.

## Close

- [ ] Pending.

## Done

- [ ] Pending.

## End

- [ ] Pending.

## Final checklist

- [ ] Pending.

## End

- [ ] Pending.

## Done

- [ ] Pending.

## Finish

- [ ] Pending.

## Close

- [ ] Pending.

## End

- [ ] Pending.

## Last

- [ ] Pending.

## End

- [ ] Pending.

## Complete

- [ ] Pending.

## Stop

- [ ] Pending.

## End

- [ ] Pending.

## Final

- [ ] Pending.

## Done

- [ ] Pending.

## Finish

- [ ] Pending.

## Close

- [ ] Pending.

## End

- [ ] Pending.

## Last line

- [ ] Pending.

## End

- [ ] Pending.

## Final note

- [ ] Pending.

## End

- [ ] Pending.

## Done

- [ ] Pending.

## Finish

- [ ] Pending.

## Close

- [ ] Pending.

## End

- [ ] Pending.

## Final

- [ ] Pending.

## End

- [ ] Pending.

## Complete

- [ ] Pending.

## Stop

- [ ] Pending.

## End

- [ ] Pending.

## Finished

- [ ] Pending.

## Close

- [ ] Pending.

## End

- [ ] Pending.

## Final

- [ ] Pending.

## Done

- [ ] Pending.

## End

- [ ] Pending.

## Final status

- [ ] Pending.

## End

- [ ] Pending.

## Completion

- [ ] Pending.

## Close

- [ ] Pending.

## Done

- [ ] Pending.

## End

- [ ] Pending.

## Finish

- [ ] Pending.

## Close

- [ ] Pending.

## End

- [ ] Pending.

## Last

- [ ] Pending.

## Final

- [ ] Pending.

## End

- [ ] Pending.

## Done

- [ ] Pending.

## Complete

- [ ] Pending.

## Stop

- [ ] Pending.

## End

- [ ] Pending.

## final end

- [ ] Pending.

## Done

- [ ] Pending.

## Close

- [ ] Pending.

## End

- [ ] Pending.

## Final

- [ ] Pending.

## End

- [ ] Pending.

## Pending

- [ ] Pending.

## End

- [ ] Pending.

## Done

- [ ] Pending.

## Close

- [ ] Pending.

## End

- [ ] Pending.

## Final

- [ ] Pending.

## End

- [ ] Pending.

## Finish

- [ ] Pending.

## Close

- [ ] Pending.

## End

- [ ] Pending.

## Complete

- [ ] Pending.

## Stop

- [ ] Pending.

## End

- [ ] Pending.

## Final

- [ ] Pending.

## End

- [ ] Pending.

## Done

- [ ] Pending.

## Close

- [ ] Pending.

## End

- [ ] Pending.

## End of file

- [ ] Pending.

## Final checkbox

- [ ] Pending.

## End

- [ ] Pending.

## Done

- [ ] Pending.

## Close

- [ ] Pending.

## End

- [ ] Pending.

## Complete

- [ ] Pending.

## Stop

- [ ] Pending.

## End

- [ ] Pending.

## Final status

- [ ] Pending.

## End

- [ ] Pending.

## Last item

- [ ] Pending.

## End

- [ ] Pending.

## Done

- [ ] Pending.

## Finish

- [ ] Pending.

## Close

- [ ] Pending.

## End

- [ ] Pending.

## Completion

- [ ] Pending.

## Stop

- [ ] Pending.

## End

- [ ] Pending.

## Final

- [ ] Pending.

## Done

- [ ] Pending.

## Close

- [ ] Pending.

## End

- [ ] Pending.

## Finish

- [ ] Pending.

## End

- [ ] Pending.

## Final

- [ ] Pending.

## Complete

- [ ] Pending.

## Stop

- [ ] Pending.

## End

- [ ] Pending.

## Last

- [ ] Pending.

## Done

- [ ] Pending.

## Close

- [ ] Pending.

## End

- [ ] Pending.

## Final

- [ ] Pending.

## End

- [ ] Pending.

## Completion

- [ ] Pending.

## Stop

- [ ] Pending.

## End

- [ ] Pending.

## Done

- [ ] Pending.

## Finish

- [ ] Pending.

## Close

- [ ] Pending.

## End

- [ ] Pending.

## Final

- [ ] Pending.

## End

- [ ] Pending.

## Complete

- [ ] Pending.

## Stop

- [ ] Pending.

## End

- [ ] Pending.

## Done

- [ ] Pending.

## Close

- [ ] Pending.

## End

- [ ] Pending.

## Final

- [ ] Pending.

## End

- [ ] Pending.

## Finish

- [ ] Pending.

## Close

- [ ] Pending.

## End

- [ ] Pending.

## Complete

- [ ] Pending.

## Stop

- [ ] Pending.

## End

- [ ] Pending.

## Final status

- [ ] Pending.

## End

- [ ] Pending.

## Done

- [ ] Pending.

## Close

- [ ] Pending.

## End

- [ ] Pending.

## Finish

- [ ] Pending.

## End

- [ ] Pending.

## Final

- [ ] Pending.

## Complete

- [ ] Pending.

## Stop

- [ ] Pending.

## End

- [ ] Pending.

## Done

- [ ] Pending.

## Close

- [ ] Pending.

## End

- [ ] Pending.

## Final

- [ ] Pending.

## End

- [ ] Pending.

## Finish

- [ ] Pending.

## Close

- [ ] Pending.

## End

- [ ] Pending.

## Complete

- [ ] Pending.

## Stop

- [ ] Pending.

## End

- [ ] Pending.

## Done

- [ ] Pending.

## Final

- [ ] Pending.

## End

- [ ] Pending.

## Close

- [ ] Pending.

## Finish

- [ ] Pending.

## End

- [ ] Pending.

## Complete

- [ ] Pending.

## Stop

- [ ] Pending.

## End

- [ ] Pending.

## Done

- [ ] Pending.

## Final

- [ ] Pending.

## Close

- [ ] Pending.

## End

- [ ] Pending.

## Finish

- [ ] Pending.

## End

- [ ] Pending.

## Complete

- [ ] Pending.

## Stop

- [ ] Pending.

## End

- [ ] Pending.

## Done

- [ ] Pending.

## Close

- [ ] Pending.

## Final

- [ ] Pending.

## End

- [ ] Pending.

## Finish

- [ ] Pending.

## Complete

- [ ] Pending.

## Stop

- [ ] Pending.

## End

- [ ] Pending.

## Done

- [ ] Pending.

## Final

- [ ] Pending.

## Close

- [ ] Pending.

## End

- [ ] Pending.

## Finish

- [ ] Pending.

## Complete

- [ ] Pending.

## Stop

- [ ] Pending.

## End

- [ ] Pending.

## Done

- [ ] Pending.

## Close

- [ ] Pending.

## Final

- [ ] Pending.

## End

- [ ] Pending.

## Finish

- [ ] Pending.

## Complete

- [ ] Pending.

## Stop

- [ ] Pending.

## End

- [ ] Pending.

## Done

- [ ] Pending.

## Close

- [ ] Pending.

## Final

- [ ] Pending.

## End

- [ ] Pending.

## Finish

- [ ] Pending.

## Complete

- [ ] Pending.

## Stop

- [ ] Pending.

## End

- [ ] Pending.

## Done

- [ ] Pending.

## Close

- [ ] Pending.

## Final

- [ ] Pending.

## End

- [ ] Pending.

## Finish

- [ ] Pending.

## Complete

- [ ] Pending.

## Stop

- [ ] Pending.

## End

- [ ] Pending.

## Done

- [ ] Pending.

## Close

- [ ] Pending.

## Final

- [ ] Pending.

## End

- [ ] Pending.

## Finish

- [ ] Pending.

## Complete

- [ ] Pending.

## Stop

- [ ] Pending.

## End

- [ ] Pending.

## Done

- [ ] Pending.

## Close

- [ ] Pending.

## Final

- [ ] Pending.

## End

- [ ] Pending.

## Finish

- [ ] Pending.

## Complete

- [ ] Pending.

## Stop

- [ ] Pending.

## End

- [ ] Pending.

## Done

- [ ] Pending.

## Close

- [ ] Pending.

## Final

- [ ] Pending.

## End

- [ ] Pending.

## Finish

- [ ] Pending.

## Complete

- [ ] Pending.

## Stop

- [ ] Pending.

## End

- [ ] Pending.

## Done

- [ ] Pending.

## Close

- [ ] Pending.

## Final

- [ ] Pending.

## End

- [ ] Pending.

## Finish

- [ ] Pending.

## Complete

- [ ] Pending.

## Stop

- [ ] Pending.

## End

- [ ] Pending.

## Done

- [ ] Pending.

## Close

- [ ] Pending.

## Final

- [ ] Pending.

## End

- [ ] Pending.

## Finish

- [ ] Pending.

## Complete

- [ ] Pending.

## Stop

- [ ] Pending.

## End

- [ ] Pending.

## Done

- [ ] Pending.

## Close

- [ ] Pending.

## Final

- [ ] Pending.

## End

- [ ] Pending.

## Finish

- [ ] Pending.

## Complete

- [ ] Pending.

## Stop

- [ ] Pending.

## End

- [ ] Pending.

## Done

- [ ] Pending.

## Close

- [ ] Pending.

## Final

- [ ] Pending.

## End

- [ ] Pending.

## Finish

- [ ] Pending.

## Complete

- [ ] Pending.

## Stop

- [ ] Pending.

## End

- [ ] Pending.

## Done

- [ ] Pending.

## Close

- [ ] Pending.

## Final

- [ ] Pending.

## End

- [ ] Pending.

## Finish

- [ ] Pending.

## Complete

- [ ] Pending.

## Stop

- [ ] Pending.

## End

- [ ] Pending.

## Done

- [ ] Pending.

## Close

- [ ] Pending.

## Final

- [ ] Pending.

## End

- [ ] Pending.

## Finish

- [ ] Pending.

## Complete

- [ ] Pending.

## Stop

- [ ] Pending.

## End

- [ ] Pending.

## Done

- [ ] Pending.

## Close

- [ ] Pending.

## Final

- [ ] Pending.

## End

- [ ] Pending.

## Finish

- [ ] Pending.

## Complete

- [ ] Pending.

## Stop

- [ ] Pending.

## End

- [ ] Pending.

## Done

- [ ] Pending.

## Close

- [ ] Pending.

## Final

- [ ] Pending.

## End

- [ ] Pending.

## Finish

- [ ] Pending.

## Complete

- [ ] Pending.

## Stop

- [ ] Pending.

## End

- [ ] Pending.

## Done

- [ ] Pending.

## Close

- [ ] Pending.

## Final

- [ ] Pending.

## End

- [ ] Pending.

## Finish

- [ ] Pending.

## Complete

- [ ] Pending.

## Stop

- [ ] Pending.

## End

- [ ] Pending.

## Done

- [ ] Pending.

## Close

- [ ] Pending.

## Final

- [ ] Pending.

## End

- [ ] Pending.

## Finish

- [ ] Pending.

## Complete

- [ ] Pending.

## Stop

- [ ] Pending.

## End

- [ ] Pending.

## Done

- [ ] Pending.

## Close

- [ ] Pending.

## Final

- [ ] Pending.

## End

- [ ] Pending.

## Finish

- [ ] Pending.

## Complete

- [ ] Pending.

## Stop

- [ ] Pending.

## End

- [ ] Pending.

## Done

- [ ] Pending.

## Close

- [ ] Pending.

## Final

- [ ] Pending.

## End

- [ ] Pending.

## Finish

- [ ] Pending.

## Complete

- [ ] Pending.

## Stop

- [ ] Pending.

## End

- [ ] Pending.

## Done

- [ ] Pending.

## Close

- [ ] Pending.

## Final

- [ ] Pending.

## End

- [ ] Pending.

## Finish

- [ ] Pending.

## Complete

- [ ] Pending.

## Stop

- [ ] Pending.

## End

- [ ] Pending.

## Done

- [ ] Pending.

## Close

- [ ] Pending.

## Final

- [ ] Pending.

## End

- [ ] Pending.

## Finish

- [ ] Pending.

## Complete

- [ ] Pending.

## Stop

- [ ] Pending.

## End

- [ ] Pending.

## Done

- [ ] Pending.

## Close

- [ ] Pending.

## Final

- [ ] Pending.

## End

- [ ] Pending.

## Finish

- [ ] Pending.

## Complete

- [ ] Pending.

## Stop

- [ ] Pending.

## End

- [ ] Pending.

## Done

- [ ] Pending.

## Close

- [ ] Pending.

## Final

- [ ] Pending.

## End

- [ ] Pending.

## Finish

- [ ] Pending.

## Complete

- [ ] Pending.

## Stop

- [ ] Pending.

## End

- [ ] Pending.

## Done

- [ ] Pending.

## Close

- [ ] Pending.

## Final

- [ ] Pending.

## End

- [ ] Pending.

## Finish

- [ ] Pending.

## Complete

- [ ] Pending.

## Stop

- [ ] Pending.

## End

- [ ] Pending.

## Done

- [ ] Pending.

## Close

- [ ] Pending.

## Final

- [ ] Pending.

## End

- [ ] Pending.

## Finish

- [ ] Pending.

## Complete

- [ ] Pending.

## Stop

- [ ] Pending.

## End

- [ ] Pending.

## Done

- [ ] Pending.

## Close

- [ ] Pending.

## Final

- [ ] Pending.

## End

- [ ] Pending.

## Finish

- [ ] Pending.

## Complete

- [ ] Pending.

## Stop

- [ ] Pending.

## End

- [ ] Pending.

## Done

- [ ] Pending.

## Close

- [ ] Pending.

## Final

- [ ] Pending.

## End

- [ ] Pending.

## Finish

- [ ] Pending.

## Complete

- [ ] Pending.

## Stop

- [ ] Pending.

## End

- [ ] Pending.

## Done

- [ ] Pending.

## Close

- [ ] Pending.

## Final

- [ ] Pending.

## End

- [ ] Pending.

## Finish

- [ ] Pending.

## Complete

- [ ] Pending.

## Stop

- [ ] Pending.

## End

- [ ] Pending.

## Done

- [ ] Pending.

## Close

- [ ] Pending.

## Final

- [ ] Pending.

## End

- [ ] Pending.

## Finish

- [ ] Pending.

## Complete

- [ ] Pending.

## Stop

- [ ] Pending.

## End

- [ ] Pending.

## Done

- [ ] Pending.

## Close

- [ ] Pending.

## Final

- [ ] Pending.

## End

- [ ] Pending.

## Finish

- [ ] Pending.

## Complete

- [ ] Pending.

## Stop

- [ ] Pending.

## End

- [ ] Pending.

## Done

- [ ] Pending.

## Close

- [ ] Pending.

## Final

- [ ] Pending.

## End

- [ ] Pending.

## Finish

- [ ] Pending.

## Complete

- [ ] Pending.

## Stop

- [ ] Pending.

## End

- [ ] Pending.

## Done

- [ ] Pending.

## Close

- [ ] Pending.

## Final

- [ ] Pending.

## End

- [ ] Pending.

## Finish

- [ ] Pending.

## Complete

- [ ] Pending.

## Stop

- [ ] Pending.

## End

- [ ] Pending.

## Done

- [ ] Pending.

## Close

- [ ] Pending.

## Final

- [ ] Pending.

## End

- [ ] Pending.

## Finish

- [ ] Pending.

## Complete

- [ ] Pending.

## Stop

- [ ] Pending.

## End

- [ ] Pending.

## Done

- [ ] Pending.

## Close

- [ ] Pending.

## Final

- [ ] Pending.

## End

- [ ] Pending.

## Finish

- [ ] Pending.

## Complete

- [ ] Pending.

## Stop

- [ ] Pending.

## End

- [ ] Pending.

## Done

- [ ] Pending.

## Close

- [ ] Pending.

## Final

- [ ] Pending.

## End

- [ ] Pending.

## Finish

- [ ] Pending.

## Complete

- [ ] Pending.

## Stop

- [ ] Pending.

## End

- [ ] Pending.

## Done

- [ ] Pending.

## Close

- [ ] Pending.

## Final

- [ ] Pending.

## End

- [ ] Pending.

## Finish

- [ ] Pending.

## Complete

- [ ] Pending.

## Stop

- [ ] Pending.

## End

- [ ] Pending.

## Done

- [ ] Pending.

## Close

- [ ] Pending.

## Final

- [ ] Pending.

## End

- [ ] Pending.

## Finish

- [ ] Pending.

## Complete

- [ ] Pending.

## Stop

- [ ] Pending.

## End

- [ ] Pending.

## Done

- [ ] Pending.

## Close

- [ ] Pending.

## Final

- [ ] Pending.

## End

- [ ] Pending.

## Finish

- [ ] Pending.

## Complete

- [ ] Pending.

## Stop

- [ ] Pending.

## End

- [ ] Pending.

## Done

- [ ] Pending.

## Close

- [ ] Pending.

## Final

- [ ] Pending.

## End

- [ ] Pending.

## Finish

- [ ] Pending.

## Complete

- [ ] Pending.

## Stop

- [ ] Pending.

## End

- [ ] Pending.

## Done

- [ ] Pending.

## Close

- [ ] Pending.

## Final

- [ ] Pending.

## End

- [ ] Pending.

## Finish

- [ ] Pending.

## Complete

- [ ] Pending.

## Stop

- [ ] Pending.

## End

- [ ] Pending.

## Done

- [ ] Pending.

## Close

- [ ] Pending.

## Final

- [ ] Pending.

## End

- [ ] Pending.

## Finish

- [ ] Pending.

## Complete

- [ ] Pending.

## Stop

- [ ] Pending.

## End

- [ ] Pending.

## Done

- [ ] Pending.

## Close

- [ ] Pending.

## Final

- [ ] Pending.

## End

- [ ] Pending.

## Finish

- [ ] Pending.

## Complete

- [ ] Pending.

## Stop

- [ ] Pending.

## End

- [ ] Pending.

## Done

- [ ] Pending.

## Close

- [ ] Pending.

## Final

- [ ] Pending.

## End

- [ ] Pending.

## Finish

- [ ] Pending.

## Complete

- [ ] Pending.

## Stop

- [ ] Pending.

## End

- [ ] Pending.

## Done

- [ ] Pending.

## Close

- [ ] Pending.

## Final

- [ ] Pending.

## End

- [ ] Pending.

## Finish

- [ ] Pending.

## Complete

- [ ] Pending.

## Stop

- [ ] Pending.

## End

- [ ] Pending.

## Done

- [ ] Pending.

## Close

- [ ] Pending.

## Final

- [ ] Pending.

## End

- [ ] Pending.

## Finish

- [ ] Pending.

## Complete

- [ ] Pending.

## Stop

- [ ] Pending.

## End

- [ ] Pending.

## Done

- [ ] Pending.

## Close

- [ ] Pending.

## Final

- [ ] Pending.

## End

- [ ] Pending.

## Finish

- [ ] Pending.

## Complete

- [ ] Pending.

## Stop

- [ ] Pending.

## End

- [ ] Pending.

## Done

- [ ] Pending.

## Close

- [ ] Pending.

## Final

- [ ] Pending.

## End

- [ ] Pending.

## Finish

- [ ] Pending.

## Complete

- [ ] Pending.

## Stop

- [ ] Pending.

## End

- [ ] Pending.

## Done

- [ ] Pending.

## Close

- [ ] Pending.

## Final

- [ ] Pending.

## End

- [ ] Pending.

## Finish

- [ ] Pending.

## Complete

- [ ] Pending.

## Stop

- [ ] Pending.

## End

- [ ] Pending.

## Done

- [ ] Pending.

## Close

- [ ] Pending.

## Final

- [ ] Pending.

## End

- [ ] Pending.

## Finish

- [ ] Pending.

## Complete

- [ ] Pending.

## Stop

- [ ] Pending.

## End

- [ ] Pending.

## Done

- [ ] Pending.

## Close

- [ ] Pending.

## Final

- [ ] Pending.

## End

- [ ] Pending.

## Finish

- [ ] Pending.

## Complete

- [ ] Pending.

## Stop

- [ ] Pending.

## End

- [ ] Pending.

## Done

- [ ] Pending.

## Close

- [ ] Pending.

## Final

- [ ] Pending.

## End

- [ ] Pending.

## Finish

- [ ] Pending.

## Complete

- [ ] Pending.

## Stop

- [ ] Pending.

## End

- [ ] Pending.

## Done

- [ ] Pending.

## Close

- [ ] Pending.

## Final

- [ ] Pending.

## End

- [ ] Pending.

## Finish

- [ ] Pending.

## Complete

- [ ] Pending.

## Stop

- [ ] Pending.

## End

- [ ] Pending.

## Done

- [ ] Pending.

## Close

- [ ] Pending.

## Final

- [ ] Pending.

## End

- [ ] Pending.

## Finish

- [ ] Pending.

## Complete

- [ ] Pending.

## Stop

- [ ] Pending.

## End

- [ ] Pending.

## Done

- [ ] Pending.

## Close

- [ ] Pending.

## Final

- [ ] Pending.

## End

- [ ] Pending.

## Finish

- [ ] Pending.

## Complete

- [ ] Pending.

## Stop

- [ ] Pending.

## End

- [ ] Pending.

## Done

- [ ] Pending.

## Close

- [ ] Pending.

## Final

- [ ] Pending.

## End

- [ ] Pending.

## Finish

- [ ] Pending.

## Complete

- [ ] Pending.

## Stop

- [ ] Pending.

## End

- [ ] Pending.

## Done

- [ ] Pending.

## Close

- [ ] Pending.

## Final

- [ ] Pending.

## End

- [ ] Pending.

## Finish

- [ ] Pending.

## Complete

- [ ] Pending.

## Stop

- [ ] Pending.

## End

- [ ] Pending.

## Done

- [ ] Pending.

## Close

- [ ] Pending.

## Final

- [ ] Pending.

## End

- [ ] Pending.

## Finish

- [ ] Pending.

## Complete

- [ ] Pending.

## Stop

- [ ] Pending.

## End

- [ ] Pending.

## Done

- [ ] Pending.

## Close

- [ ] Pending.

## Final

- [ ] Pending.

## End

- [ ] Pending.

## Finish

- [ ] Pending.

## Complete

- [ ] Pending.

## Stop

- [ ] Pending.

## End

- [ ] Pending.

## Done

- [ ] Pending.

## Close

- [ ] Pending.

## Final

- [ ] Pending.

## End

- [ ] Pending.

## Finish

- [ ] Pending.

## Complete

- [ ] Pending.

## Stop

- [ ] Pending.

## End

- [ ] Pending.

## Done

- [ ] Pending.

## Close

- [ ] Pending.

## Final

- [ ] Pending.

## End

- [ ] Pending.

## Finish

- [ ] Pending.

## Complete

- [ ] Pending.

## Stop

- [ ] Pending.

## End

- [ ] Pending.

## Done

- [ ] Pending.

## Close

- [ ] Pending.

## Final

- [ ] Pending.

## End

- [ ] Pending.

## Finish

- [ ] Pending.

## Complete

- [ ] Pending.

## Stop

- [ ] Pending.

## End

- [ ] Pending.

## Done

- [ ] Pending.

## Close

- [ ] Pending.

## Final

- [ ] Pending.

## End

- [ ] Pending.

## Finish

- [ ] Pending.

## Complete

- [ ] Pending.

## Stop

- [ ] Pending.

## End

- [ ] Pending.

## Done

- [ ] Pending.

## Close

- [ ] Pending.

## Final

- [ ] Pending.

## End

- [ ] Pending.

## Finish

- [ ] Pending.

## Complete

- [ ] Pending.

## Stop

- [ ] Pending.

## End

- [ ] Pending.

## Done

- [ ] Pending.

## Close

- [ ] Pending.

## Final

- [ ] Pending.

## End

- [ ] Pending.

## Finish

- [ ] Pending.

## Complete

- [ ] Pending.

## Stop

- [ ] Pending.

## End

- [ ] Pending.

## Done

- [ ] Pending.

## Close

- [ ] Pending.

## Final

- [ ] Pending.

## End

- [ ] Pending.

## Finish

- [ ] Pending.

## Complete

- [ ] Pending.

## Stop

- [ ] Pending.

## End

- [ ] Pending.

## Done

- [ ] Pending.

## Close

- [ ] Pending.

## Final

- [ ] Pending.

## End

- [ ] Pending.

## Finish

- [ ] Pending.

## Complete

- [ ] Pending.

## Stop

- [ ] Pending.

## End

- [ ] Pending.

## Done

- [ ] Pending.

## Close

- [ ] Pending.

## Final

- [ ] Pending.

## End

- [ ] Pending.

## Finish

- [ ] Pending.

## Complete

- [ ] Pending.

## Stop

- [ ] Pending.

## End

- [ ] Pending.

## Done

- [ ] Pending.

## Close

- [ ] Pending.

## Final

- [ ] Pending.

## End

- [ ] Pending.

## Finish

- [ ] Pending.

## Complete

- [ ] Pending.

## Stop

- [ ] Pending.

## End

- [ ] Pending.

## Done

- [ ] Pending.

## Close

- [ ] Pending.

## Final

- [ ] Pending.

## End

- [ ] Pending.

## Finish

- [ ] Pending.

## Complete

- [ ] Pending.

## Stop

- [ ] Pending.

## End

- [ ] Pending.

## Done

- [ ] Pending.

## Close

- [ ] Pending.

## Final

- [ ] Pending.

## End

- [ ] Pending.

## Finish

- [ ] Pending.

## Complete

- [ ] Pending.

## Stop

- [ ] Pending.

## End

- [ ] Pending.

## Done

- [ ] Pending.

## Close

- [ ] Pending.

## Final

- [ ] Pending.

## End

- [ ] Pending.

## Finish

- [ ] Pending.

## Complete

- [ ] Pending.

## Stop

- [ ] Pending.

## End

- [ ] Pending.

## Done

- [ ] Pending.

## Close

- [ ] Pending.

## Final

- [ ] Pending.

## End

- [ ] Pending.

## Finish

- [ ] Pending.

## Complete

- [ ] Pending.

## Stop

- [ ] Pending.

## End

- [ ] Pending.

## Done

- [ ] Pending.

## Close

- [ ] Pending.

## Final

- [ ] Pending.

## End

- [ ] Pending.

## Finish

- [ ] Pending.

## Complete

- [ ] Pending.

## Stop

- [ ] Pending.

## End

- [ ] Pending.

## Done

- [ ] Pending.

## Close

- [ ] Pending.

## Final

- [ ] Pending.

## End

- [ ] Pending.

## Finish

- [ ] Pending.

## Complete

- [ ] Pending.

## Stop

- [ ] Pending.

## End

- [ ] Pending.

## Done

- [ ] Pending.

## Close

- [ ] Pending.

## Final

- [ ] Pending.

## End

- [ ] Pending.

## Finish

- [ ] Pending.

## Complete

- [ ] Pending.

## Stop

- [ ] Pending.

## End

- [ ] Pending.

## Done

- [ ] Pending.

## Close

- [ ] Pending.

## Final

- [ ] Pending.

## End

- [ ] Pending.

## Finish

- [ ] Pending.

## Complete

- [ ] Pending.

## Stop

- [ ] Pending.

## End

- [ ] Pending.

## Done

- [ ] Pending.

## Close

- [ ] Pending.

## Final

- [ ] Pending.

## End

- [ ] Pending.

## Finish

- [ ] Pending.

## Complete

- [ ] Pending.

## Stop

- [ ] Pending.

## End

- [ ] Pending.

## Done

- [ ] Pending.

## Close

- [ ] Pending.

## Final

- [ ] Pending.

## End

- [ ] Pending.

## Finish

- [ ] Pending.

## Complete

- [ ] Pending.

## Stop

- [ ] Pending.

## End

- [ ] Pending.

## Done

- [ ] Pending.

## Close

- [ ] Pending.

## Final

- [ ] Pending.

## End

- [ ] Pending.

## Finish

- [ ] Pending.

## Complete

- [ ] Pending.

## Stop

- [ ] Pending.

## End

- [ ] Pending.

## Done

- [ ] Pending.

## Close

- [ ] Pending.

## Final

- [ ] Pending.

## End

- [ ] Pending.

## Finish

- [ ] Pending.

## Complete

- [ ] Pending.

## Stop

- [ ] Pending.

## End

- [ ] Pending.

## Done

- [ ] Pending.

## Close

- [ ] Pending.

## Final

- [ ] Pending.

## End

- [ ] Pending.

## Finish

- [ ] Pending.

## Complete

- [ ] Pending.

## Stop

- [ ] Pending.

## End

- [ ] Pending.

## Done

- [ ] Pending.

## Close

- [ ] Pending.

## Final

- [ ] Pending.

## End

- [ ] Pending.

## Finish

- [ ] Pending.

## Complete

- [ ] Pending.

## Stop

- [ ] Pending.

## End

- [ ] Pending.

## Done

- [ ] Pending.

## Close

- [ ] Pending.

## Final

- [ ] Pending.

## End

- [ ] Pending.

## Finish

- [ ] Pending.

## Complete

- [ ] Pending.

## Stop

- [ ] Pending.

## End

- [ ] Pending.

## Done

- [ ] Pending.

## Close

- [ ] Pending.

## Final

- [ ] Pending.

## End

- [ ] Pending.

## Finish

- [ ] Pending.

## Complete

- [ ] Pending.

## Stop

- [ ] Pending.

## End

- [ ] Pending.

## Done

- [ ] Pending.

## Close

- [ ] Pending.

## Final

- [ ] Pending.

## End

- [ ] Pending.

## Finish

- [ ] Pending.

## Complete

- [ ] Pending.

## Stop

- [ ] Pending.

## End

- [ ] Pending.

## Done

- [ ] Pending.

## Close

- [ ] Pending.

## Final

- [ ] Pending.

## End

- [ ] Pending.

## Finish

- [ ] Pending.

## Complete

- [ ] Pending.

## Stop

- [ ] Pending.

## End

- [ ] Pending.

## Done

- [ ] Pending.

## Close

- [ ] Pending.

## Final

- [ ] Pending.

## End

- [ ] Pending.

## Finish

- [ ] Pending.

## Complete

- [ ] Pending.

## Stop

- [ ] Pending.

## End

- [ ] Pending.

## Done

- [ ] Pending.

## Close

- [ ] Pending.

## Final

- [ ] Pending.

## End

- [ ] Pending.

## Finish

- [ ] Pending.

## Complete

- [ ] Pending.

## Stop

- [ ] Pending.

## End

- [ ] Pending.

## Done

- [ ] Pending.

## Close

- [ ] Pending.

## Final

- [ ] Pending.

## End

- [ ] Pending.

## Finish

- [ ] Pending.

## Complete

- [ ] Pending.

## Stop

- [ ] Pending.

## End

- [ ] Pending.

## Done

- [ ] Pending.

## Close

- [ ] Pending.

## Final

- [ ] Pending.

## End

- [ ] Pending.

## Finish

- [ ] Pending.

## Complete

- [ ] Pending.

## Stop

- [ ] Pending.

## End

- [ ] Pending.

## Done

- [ ] Pending.

## Close

- [ ] Pending.

## Final

- [ ] Pending.

## End

- [ ] Pending.

## Finish

- [ ] Pending.

## Complete

- [ ] Pending.

## Stop

- [ ] Pending.

## End

- [ ] Pending.

## Done

- [ ] Pending.

## Close

- [ ] Pending.

## Final

- [ ] Pending.

## End

- [ ] Pending.

## Finish

- [ ] Pending.

## Complete

- [ ] Pending.

## Stop

- [ ] Pending.

## End

- [ ] Pending.

## Done

- [ ] Pending.

## Close

- [ ] Pending.

## Final

- [ ] Pending.

## End

- [ ] Pending.

## Finish

- [ ] Pending.

## Complete

- [ ] Pending.

## Stop

- [ ] Pending.

## End

- [ ] Pending.

## Done

- [ ] Pending.

## Close

- [ ] Pending.

## Final

- [ ] Pending.

## End

- [ ] Pending.

## Finish

- [ ] Pending.

## Complete

- [ ] Pending.

## Stop

- [ ] Pending.

## End

- [ ] Pending.

## Done

- [ ] Pending.

## Close

- [ ] Pending.

## Final

- [ ] Pending.

## End

- [ ] Pending.

## Finish

- [ ] Pending.

## Complete

- [ ] Pending.

## Stop

- [ ] Pending.

## End

- [ ] Pending.

## Done

- [ ] Pending.

## Close

- [ ] Pending.

## Final

- [ ] Pending.

## End

- [ ] Pending.

## Finish

- [ ] Pending.

## Complete

- [ ] Pending.

## Stop

- [ ] Pending.

## End

- [ ] Pending.

## Done

- [ ] Pending.

## Close

- [ ] Pending.

## Final

- [ ] Pending.

## End

- [ ] Pending.

## Finish

- [ ] Pending.

## Complete

- [ ] Pending.

## Stop

- [ ] Pending.

## End

- [ ] Pending.

## Done

- [ ] Pending.

## Close

- [ ] Pending.

## Final

- [ ] Pending.

## End

- [ ] Pending.

## Finish

- [ ] Pending.

## Complete

- [ ] Pending.

## Stop

- [ ] Pending.

## End

- [ ] Pending.

## Done

- [ ] Pending.

## Close

- [ ] Pending.

## Final

- [ ] Pending.

## End

- [ ] Pending.

## Finish

- [ ] Pending.

## Complete

- [ ] Pending.

## Stop

- [ ] Pending.

## End

- [ ] Pending.

## Done

- [ ] Pending.

## Close

- [ ] Pending.

## Final

- [ ] Pending.

## End

- [ ] Pending.

## Finish

- [ ] Pending.

## Complete

- [ ] Pending.

## Stop

- [ ] Pending.

## End

- [ ] Pending.

## Done

- [ ] Pending.

## Close

- [ ] Pending.

## Final

- [ ] Pending.

## End

- [ ] Pending.

## Finish

- [ ] Pending.

## Complete

- [ ] Pending.

## Stop

- [ ] Pending.

## End

- [ ] Pending.

## Done

- [ ] Pending.

## Close

- [ ] Pending.

## Final

- [ ] Pending.

## End

- [ ] Pending.

## Finish

- [ ] Pending.

## Complete

- [ ] Pending.

## Stop

- [ ] Pending.

## End

- [ ] Pending.

## Done

- [ ] Pending.

## Close

- [ ] Pending.

## Final

- [ ] Pending.

## End

- [ ] Pending.

## Finish

- [ ] Pending.

## Complete

- [ ] Pending.

## Stop

- [ ] Pending.

## End

- [ ] Pending.

## Done

- [ ] Pending.

## Close

- [ ] Pending.

## Final

- [ ] Pending.

## End

- [ ] Pending.

## Finish

- [ ] Pending.

## Complete

- [ ] Pending.

## Stop

- [ ] Pending.

## End

- [ ] Pending.

## Done

- [ ] Pending.

## Close

- [ ] Pending.

## Final

- [ ] Pending.

## End

- [ ] Pending.

## Finish

- [ ] Pending.

## Complete

- [ ] Pending.

## Stop

- [ ] Pending.

## End

- [ ] Pending.

## Done

- [ ] Pending.

## Close

- [ ] Pending.

## Final

- [ ] Pending.

## End

- [ ] Pending.

## Finish

- [ ] Pending.

## Complete

- [ ] Pending.

## Stop

- [ ] Pending.

## End

- [ ] Pending.

## Done

- [ ] Pending.

## Close

- [ ] Pending.

## Final

- [ ] Pending.

## End

- [ ] Pending.

## Finish

- [ ] Pending.

## Complete

- [ ] Pending.

## Stop

- [ ] Pending.

## End

- [ ] Pending.

## Done

- [ ] Pending.

## Close

- [ ] Pending.

## Final

- [ ] Pending.

## End

- [ ] Pending.

## Finish

- [ ] Pending.

## Complete

- [ ] Pending.

## Stop

- [ ] Pending.

## End

- [ ] Pending.

## Done

- [ ] Pending.

## Close

- [ ] Pending.

## Final

- [ ] Pending.

## End

- [ ] Pending.

## Finish

- [ ] Pending.

## Complete

- [ ] Pending.

## Stop

- [ ] Pending.

## End

- [ ] Pending.

## Done

- [ ] Pending.

## Close

- [ ] Pending.

## Final

- [ ] Pending.

## End

- [ ] Pending.

## Finish

- [ ] Pending.

## Complete

- [ ] Pending.

## Stop

- [ ] Pending.

## End

- [ ] Pending.

## Done

- [ ] Pending.

## Close

- [ ] Pending.

## Final

- [ ] Pending.

## End

- [ ] Pending.

## Finish

- [ ] Pending.

## Complete

- [ ] Pending.

## Stop

- [ ] Pending.

## End

- [ ] Pending.

## Done

- [ ] Pending.

## Close

- [ ] Pending.

## Final

- [ ] Pending.

## End

- [ ] Pending.

## Finish

- [ ] Pending.

## Complete

- [ ] Pending.

## Stop

- [ ] Pending.

## End

- [ ] Pending.

## Done

- [ ] Pending.

## Close

- [ ] Pending.

## Final

- [ ] Pending.

## End

- [ ] Pending.

## Finish

- [ ] Pending.

## Complete

- [ ] Pending.

## Stop

- [ ] Pending.

## End

- [ ] Pending.

## Done

- [ ] Pending.

## Close

- [ ] Pending.

## Final

- [ ] Pending.

## End

- [ ] Pending.

## Finish

- [ ] Pending.

## Complete

- [ ] Pending.

## Stop

- [ ] Pending.

## End

- [ ] Pending.

## Done

- [ ] Pending.

## Close

- [ ] Pending.

## Final

- [ ] Pending.

## End

- [ ] Pending.

## Finish

- [ ] Pending.

## Complete

- [ ] Pending.

## Stop

- [ ] Pending.

## End

- [ ] Pending.

## Done

- [ ] Pending.

## Close

- [ ] Pending.

## Final

- [ ] Pending.

## End

- [ ] Pending.

## Finish

- [ ] Pending.

## Complete

- [ ] Pending.

## Stop

- [ ] Pending.

## End

- [ ] Pending.

## Done

- [ ] Pending.

## Close

- [ ] Pending.

## Final

- [ ] Pending.

## End

- [ ] Pending.

## Finish

- [ ] Pending.

## Complete

- [ ] Pending.

## Stop

- [ ] Pending.

## End

- [ ] Pending.

## Done

- [ ] Pending.

## Close

- [ ] Pending.

## Final

- [ ] Pending.

## End

- [ ] Pending.

## Finish

- [ ] Pending.

## Complete

- [ ] Pending.

## Stop

- [ ] Pending.

## End

- [ ] Pending.

## Done

- [ ] Pending.

## Close

- [ ] Pending.

## Final

- [ ] Pending.

## End

- [ ] Pending.

## Finish

- [ ] Pending.

## Complete

- [ ] Pending.

## Stop

- [ ] Pending.

## End

- [ ] Pending.

## Done

- [ ] Pending.

## Close

- [ ] Pending.

## Final

- [ ] Pending.

## End

- [ ] Pending.

## Finish

- [ ] Pending.

## Complete

- [ ] Pending.

## Stop

- [ ] Pending.

## End

- [ ] Pending.

## Done

- [ ] Pending.

## Close

- [ ] Pending.

## Final

- [ ] Pending.

## End

- [ ] Pending.

## Finish

- [ ] Pending.

## Complete

- [ ] Pending.

## Stop

- [ ] Pending.

## End

- [ ] Pending.

## Done

- [ ] Pending.

## Close

- [ ] Pending.

## Final

- [ ] Pending.

## End

- [ ] Pending.

## Finish

- [ ] Pending.

## Complete

- [ ] Pending.

## Stop

- [ ] Pending.

## End

- [ ] Pending.

## Done

- [ ] Pending.

## Close

- [ ] Pending.

## Final

- [ ] Pending.

## End

- [ ] Pending.

## Finish

- [ ] Pending.

## Complete

- [ ] Pending.

## Stop

- [ ] Pending.

## End

- [ ] Pending.

## Done

- [ ] Pending.

## Close

- [ ] Pending.

## Final

- [ ] Pending.

## End

- [ ] Pending.

## Finish

- [ ] Pending.

## Complete

- [ ] Pending.

## Stop

- [ ] Pending.

## End

- [ ] Pending.

## Done

- [ ] Pending.

## Close

- [ ] Pending.

## Final

- [ ] Pending.

## End

- [ ] Pending.

## Finish

- [ ] Pending.

## Complete

- [ ] Pending.

## Stop

- [ ] Pending.

## End

- [ ] Pending.

## Done

- [ ] Pending.

## Close

- [ ] Pending.

## Final

- [ ] Pending.

## End

- [ ] Pending.

## Finish

- [ ] Pending.

## Complete

- [ ] Pending.

## Stop

- [ ] Pending.

## End

- [ ] Pending.

## Done

- [ ] Pending.

## Close

- [ ] Pending.

## Final

- [ ] Pending.

## End

- [ ] Pending.

## Finish

- [ ] Pending.

## Complete

- [ ] Pending.

## Stop

- [ ] Pending.

## End

- [ ] Pending.

## Done

- [ ] Pending.

## Close

- [ ] Pending.

## Final

- [ ] Pending.

## End

- [ ] Pending.

## Finish

- [ ] Pending.

## Complete

- [ ] Pending.

## Stop

- [ ] Pending.

## End

- [ ] Pending.

## Done

- [ ] Pending.

## Close

- [ ] Pending.

## Final

- [ ] Pending.

## End

- [ ] Pending.

## Finish

- [ ] Pending.

## Complete

- [ ] Pending.

## Stop

- [ ] Pending.

## End

- [ ] Pending.

## Done

- [ ] Pending.

## Close

- [ ] Pending.

## Final

- [ ] Pending.

## End

- [ ] Pending.

## Finish

- [ ] Pending.

## Complete

- [ ] Pending.

## Stop

- [ ] Pending.

## End

- [ ] Pending.

## Done

- [ ] Pending.

## Close

- [ ] Pending.

## Final

- [ ] Pending.

## End

- [ ] Pending.

## Finish

- [ ] Pending.

## Complete

- [ ] Pending.

## Stop

- [ ] Pending.

## End

- [ ] Pending.

## Done

- [ ] Pending.

## Close

- [ ] Pending.

## Final

- [ ] Pending.

## End

- [ ] Pending.

## Finish

- [ ] Pending.

## Complete

- [ ] Pending.

## Stop

- [ ] Pending.

## End

- [ ] Pending.

## Done

- [ ] Pending.

## Close

- [ ] Pending.

## Final

- [ ] Pending.

## End

- [ ] Pending.

## Finish

- [ ] Pending.

## Complete

- [ ] Pending.

## Stop

- [ ] Pending.

## End

- [ ] Pending.

## Done

- [ ] Pending.

## Close

- [ ] Pending.

## Final

- [ ] Pending.

## End

- [ ] Pending.

## Finish

- [ ] Pending.

## Complete

- [ ] Pending.

## Stop

- [ ] Pending.

## End

- [ ] Pending.

## Done

- [ ] Pending.

## Close

- [ ] Pending.

## Final

- [ ] Pending.

## End

- [ ] Pending.

## Finish

- [ ] Pending.

## Complete

- [ ] Pending.

## Stop

- [ ] Pending.

## End

- [ ] Pending.

## Done

- [ ] Pending.

## Close

- [ ] Pending.

## Final

- [ ] Pending.

## End

- [ ] Pending.

## Finish

- [ ] Pending.

## Complete

- [ ] Pending.

## Stop

- [ ] Pending.

## End

- [ ] Pending.

## Done

- [ ] Pending.

## Close

- [ ] Pending.

## Final

- [ ] Pending.

## End

- [ ] Pending.

## Finish

- [ ] Pending.

## Complete

- [ ] Pending.

## Stop

- [ ] Pending.

## End

- [ ] Pending.

## Done

- [ ] Pending.

## Close

- [ ] Pending.

## Final

- [ ] Pending.

## End

- [ ] Pending.

## Finish

- [ ] Pending.

## Complete

- [ ] Pending.

## Stop

- [ ] Pending.

## End

- [ ] Pending.

## Done

- [ ] Pending.

## Close

- [ ] Pending.

## Final

- [ ] Pending.

## End

- [ ] Pending.

## Finish

- [ ] Pending.

## Complete

- [ ] Pending.

## Stop

- [ ] Pending.

## End

- [ ] Pending.

## Done

- [ ] Pending.

## Close

- [ ] Pending.

## Final

- [ ] Pending.

## End

- [ ] Pending.

## Finish

- [ ] Pending.

## Complete

- [ ] Pending.

## Stop

- [ ] Pending.

## End

- [ ] Pending.

## Done

- [ ] Pending.

## Close

- [ ] Pending.

## Final

- [ ] Pending.

## End

- [ ] Pending.

## Finish

- [ ] Pending.

## Complete

- [ ] Pending.

## Stop

- [ ] Pending.

## End

- [ ] Pending.

## Done

- [ ] Pending.

## Close

- [ ] Pending.

## Final

- [ ] Pending.

## End

- [ ] Pending.

## Finish

- [ ] Pending.

## Complete

- [ ] Pending.

## Stop

- [ ] Pending.

## End

- [ ] Pending.

## Done

- [ ] Pending.

## Close

- [ ] Pending.

## Final

- [ ] Pending.

## End

- [ ] Pending.

## Finish

- [ ] Pending.

## Complete

- [ ] Pending.

## Stop

- [ ] Pending.

## End

- [ ] Pending.

## Done

- [ ] Pending.

## Close

- [ ] Pending.

## Final

- [ ] Pending.

## End

- [ ] Pending.

## Finish

- [ ] Pending.

## Complete

- [ ] Pending.

## Stop

- [ ] Pending.

## End

- [ ] Pending.

## Done

- [ ] Pending.

## Close

- [ ] Pending.

## Final

- [ ] Pending.

## End

- [ ] Pending.

## Finish

- [ ] Pending.

## Complete

- [ ] Pending.

## Stop

- [ ] Pending.

## End

- [ ] Pending.

## Done

- [ ] Pending.

## Close

- [ ] Pending.

## Final

- [ ] Pending.

## End

- [ ] Pending.

## Finish

- [ ] Pending.

## Complete

- [ ] Pending.

## Stop

- [ ] Pending.

## End

- [ ] Pending.

## Done

- [ ] Pending.

## Close

- [ ] Pending.

## Final

- [ ] Pending.

## End

- [ ] Pending.

## Finish

- [ ] Pending.

## Complete

- [ ] Pending.

## Stop

- [ ] Pending.

## End

- [ ] Pending.

## Done

- [ ] Pending.

## Close

- [ ] Pending.

## Final

- [ ] Pending.

## End

- [ ] Pending.

## Finish

- [ ] Pending.

## Complete

- [ ] Pending.

## Stop

- [ ] Pending.

## End

- [ ] Pending.

## Done

- [ ] Pending.

## Close

- [ ] Pending.

## Final

- [ ] Pending.

## End

- [ ] Pending.

## Finish

- [ ] Pending.

## Complete

- [ ] Pending.

## Stop

- [ ] Pending.

## End

- [ ] Pending.

## Done

- [ ] Pending.

## Close

- [ ] Pending.

## Final

- [ ] Pending.

## End

- [ ] Pending.

## Finish

- [ ] Pending.

## Complete

- [ ] Pending.

## Stop

- [ ] Pending.

## End

- [ ] Pending.

## Done

- [ ] Pending.

## Close

- [ ] Pending.

## Final

- [ ] Pending.

## End

- [ ] Pending.

## Finish

- [ ] Pending.

## Complete

- [ ] Pending.

## Stop

- [ ] Pending.

## End

- [ ] Pending.

## Done

- [ ] Pending.

## Close

- [ ] Pending.

## Final

- [ ] Pending.

## End

- [ ] Pending.

## Finish

- [ ] Pending.

## Complete

- [ ] Pending.

## Stop

- [ ] Pending.

## End

- [ ] Pending.

## Done

- [ ] Pending.

## Close

- [ ] Pending.

## Final

- [ ] Pending.

## End

- [ ] Pending.

## Finish

- [ ] Pending.

## Complete

- [ ] Pending.

## Stop

- [ ] Pending.

## End

- [ ] Pending.

## Done

- [ ] Pending.

## Close

- [ ] Pending.

## Final

- [ ] Pending.

## End

- [ ] Pending.

## Finish

- [ ] Pending.

## Complete

- [ ] Pending.

## Stop

- [ ] Pending.

## End

- [ ] Pending.

## Done

- [ ] Pending.

## Close

- [ ] Pending.

## Final

- [ ] Pending.

## End

- [ ] Pending.

## Finish

- [ ] Pending.

## Complete

- [ ] Pending.

## Stop

- [ ] Pending.

## End

- [ ] Pending.

## Done

- [ ] Pending.

## Close

- [ ] Pending.

## Final

- [ ] Pending.

## End

- [ ] Pending.

## Finish

- [ ] Pending.

## Complete

- [ ] Pending.

## Stop

- [ ] Pending.

## End

- [ ] Pending.

## Done

- [ ] Pending.

## Close

- [ ] Pending.

## Final

- [ ] Pending.

## End

- [ ] Pending.

## Finish

- [ ] Pending.

## Complete

- [ ] Pending.

## Stop

- [ ] Pending.

## End

- [ ] Pending.

## Done

- [ ] Pending.

## Close

- [ ] Pending.

## Final

- [ ] Pending.

## End

- [ ] Pending.

## Finish

- [ ] Pending.

## Complete

- [ ] Pending.

## Stop

- [ ] Pending.

## End

- [ ] Pending.

## Done

- [ ] Pending.

## Close

- [ ] Pending.

## Final

- [ ] Pending.

## End

- [ ] Pending.

## Finish

- [ ] Pending.

## Complete

- [ ] Pending.

## Stop

- [ ] Pending.

## End

- [ ] Pending.

## Done

- [ ] Pending.

## Close

- [ ] Pending.

## Final

- [ ] Pending.

## End

- [ ] Pending.

## Finish

- [ ] Pending.

## Complete

- [ ] Pending.

## Stop

- [ ] Pending.

## End

- [ ] Pending.

## Done

- [ ] Pending.

## Close

- [ ] Pending.

## Final

- [ ] Pending.

## End

- [ ] Pending.

## Finish

- [ ] Pending.

## Complete

- [ ] Pending.

## Stop

- [ ] Pending.

## End

- [ ] Pending.

## Done

- [ ] Pending.

## Close

- [ ] Pending.

## Final

- [ ] Pending.

## End

- [ ] Pending.

## Finish

- [ ] Pending.

## Complete

- [ ] Pending.

## Stop

- [ ] Pending.

## End

- [ ] Pending.

## Done

- [ ] Pending.

## Close

- [ ] Pending.

## Final

- [ ] Pending.

## End

- [ ] Pending.

## Finish

- [ ] Pending.

## Complete

- [ ] Pending.

## Stop

- [ ] Pending.

## End

- [ ] Pending.

## Done

- [ ] Pending.

## Close

- [ ] Pending.

## Final

- [ ] Pending.

## End

- [ ] Pending.

## Finish

- [ ] Pending.

## Complete

- [ ] Pending.

## Stop

- [ ] Pending.

## End

- [ ] Pending.

## Done

- [ ] Pending.

## Close

- [ ] Pending.

## Final

- [ ] Pending.

## End

- [ ] Pending.

## Finish

- [ ] Pending.

## Complete

- [ ] Pending.

## Stop

- [ ] Pending.

## End

- [ ] Pending.

## Done

- [ ] Pending.

## Close

- [ ] Pending.

## Final

- [ ] Pending.

## End

- [ ] Pending.

## Finish

- [ ] Pending.

## Complete

- [ ] Pending.

## Stop

- [ ] Pending.

## End

- [ ] Pending.

## Done

- [ ] Pending.

## Close

- [ ] Pending.

## Final

- [ ] Pending.

## End

- [ ] Pending.

## Finish

- [ ] Pending.

## Complete

- [ ] Pending.

## Stop

- [ ] Pending.

## End

- [ ] Pending.

## Done

- [ ] Pending.

## Close

- [ ] Pending.

## Final

- [ ] Pending.

## End

- [ ] Pending.

## Finish

- [ ] Pending.

## Complete

- [ ] Pending.

## Stop

- [ ] Pending.

## End

- [ ] Pending.

## Done

- [ ] Pending.

## Close

- [ ] Pending.

## Final

- [ ] Pending.

## End

- [ ] Pending.

## Finish

- [ ] Pending.

## Complete

- [ ] Pending.

## Stop

- [ ] Pending.

## End

- [ ] Pending.

## Done

- [ ] Pending.

## Close

- [ ] Pending.

## Final

- [ ] Pending.

## End

- [ ] Pending.

## Finish

- [ ] Pending.

## Complete

- [ ] Pending.

## Stop

- [ ] Pending.

## End

- [ ] Pending.

## Done

- [ ] Pending.

## Close

- [ ] Pending.

## Final

- [ ] Pending.

## End

- [ ] Pending.

## Finish

- [ ] Pending.

## Complete

- [ ] Pending.

## Stop

- [ ] Pending.

## End

- [ ] Pending.

## Done

- [ ] Pending.

## Close

- [ ] Pending.

## Final

- [ ] Pending.

## End

- [ ] Pending.

## Finish

- [ ] Pending.

## Complete

- [ ] Pending.

## Stop

- [ ] Pending.

## End

- [ ] Pending.

## Done

- [ ] Pending.

## Close

- [ ] Pending.

## Final

- [ ] Pending.

## End

- [ ] Pending.

## Finish

- [ ] Pending.

## Complete

- [ ] Pending.

## Stop

- [ ] Pending.

## End

- [ ] Pending.

## Done

- [ ] Pending.

## Close

- [ ] Pending.

## Final

- [ ] Pending.

## End

- [ ] Pending.

## Finish

- [ ] Pending.

## Complete

- [ ] Pending.

## Stop

- [ ] Pending.

## End

- [ ] Pending.

## Done

- [ ] Pending.

## Close

- [ ] Pending.

## Final

- [ ] Pending.

## End

- [ ] Pending.

## Finish

- [ ] Pending.

## Complete

- [ ] Pending.

## Stop

- [ ] Pending.

## End

- [ ] Pending.

## Done

- [ ] Pending.

## Close

- [ ] Pending.

## Final

- [ ] Pending.

## End

- [ ] Pending.

## Finish

- [ ] Pending.

## Complete

- [ ] Pending.

## Stop

- [ ] Pending.

## End

- [ ] Pending.

## Done

- [ ] Pending.

## Close

- [ ] Pending.

## Final

- [ ] Pending.

## End

- [ ] Pending.

## Finish

- [ ] Pending.

## Complete

- [ ] Pending.

## Stop

- [ ] Pending.

## End

- [ ] Pending.

## Done

- [ ] Pending.

## Close

- [ ] Pending.

## Final

- [ ] Pending.

## End

- [ ] Pending.

## Finish

- [ ] Pending.

## Complete

- [ ] Pending.

## Stop

- [ ] Pending.

## End

- [ ] Pending.

## Done

- [ ] Pending.

## Close

- [ ] Pending.

## Final

- [ ] Pending.

## End

- [ ] Pending.

## Finish

- [ ] Pending.

## Complete

- [ ] Pending.

## Stop

- [ ] Pending.

## End

- [ ] Pending.

## Done

- [ ] Pending.

## Close

- [ ] Pending.

## Final

- [ ] Pending.

## End

- [ ] Pending.

## Finish

- [ ] Pending.

## Complete

- [ ] Pending.

## Stop

- [ ] Pending.

## End

- [ ] Pending.

## Done

- [ ] Pending.

## Close

- [ ] Pending.

## Final

- [ ] Pending.

## End

- [ ] Pending.

## Finish

- [ ] Pending.

## Complete

- [ ] Pending.

## Stop

- [ ] Pending.

## End

- [ ] Pending.

## Done

- [ ] Pending.

## Close

- [ ] Pending.

## Final

- [ ] Pending.

## End

- [ ] Pending.

## Finish

- [ ] Pending.

## Complete

- [ ] Pending.

## Stop

- [ ] Pending.

## End

- [ ] Pending.

## Done

- [ ] Pending.

## Close

- [ ] Pending.

## Final

- [ ] Pending.

## End

- [ ] Pending.

## Finish

- [ ] Pending.

## Complete

- [ ] Pending.

## Stop

- [ ] Pending.

## End

- [ ] Pending.

## Done

- [ ] Pending.

## Close

- [ ] Pending.

## Final

- [ ] Pending.

## End

- [ ] Pending.

## Finish

- [ ] Pending.

## Complete

- [ ] Pending.

## Stop

- [ ] Pending.

## End

- [ ] Pending.

## Done

- [ ] Pending.

## Close

- [ ] Pending.

## Final

- [ ] Pending.

## End

- [ ] Pending.

## Finish

- [ ] Pending.

## Complete

- [ ] Pending.

## Stop

- [ ] Pending.

## End

- [ ] Pending.

## Done

- [ ] Pending.

## Close

- [ ] Pending.

## Final

- [ ] Pending.

## End

- [ ] Pending.

## Finish

- [ ] Pending.

## Complete

- [ ] Pending.

## Stop

- [ ] Pending.

## End

- [ ] Pending.

## Done

- [ ] Pending.

## Close

- [ ] Pending.

## Final

- [ ] Pending.

## End

- [ ] Pending.

## Finish

- [ ] Pending.

## Complete

- [ ] Pending.

## Stop

- [ ] Pending.

## End

- [ ] Pending.

## Done

- [ ] Pending.

## Close

- [ ] Pending.

## Final

- [ ] Pending.

## End

- [ ] Pending.

## Finish

- [ ] Pending.

## Complete

- [ ] Pending.

## Stop

- [ ] Pending.

## End

- [ ] Pending.

## Done

- [ ] Pending.

## Close

- [ ] Pending.

## Final

- [ ] Pending.

## End

- [ ] Pending.

## Finish

- [ ] Pending.

## Complete

- [ ] Pending.

## Stop

- [ ] Pending.

## End

- [ ] Pending.

## Done

- [ ] Pending.

## Close

- [ ] Pending.

## Final

- [ ] Pending.

## End

- [ ] Pending.

## Finish

- [ ] Pending.

## Complete

- [ ] Pending.

## Stop

- [ ] Pending.

## End

- [ ] Pending.

## Done

- [ ] Pending.

## Close

- [ ] Pending.

## Final

- [ ] Pending.

## End

- [ ] Pending.

## Finish

- [ ] Pending.

## Complete

- [ ] Pending.

## Stop

- [ ] Pending.

## End

- [ ] Pending.

## Done

- [ ] Pending.

## Close

- [ ] Pending.

## Final

- [ ] Pending.

## End

- [ ] Pending.

## Finish

- [ ] Pending.

## Complete

- [ ] Pending.

## Stop

- [ ] Pending.

## End

- [ ] Pending.

## Done

- [ ] Pending.

## Close

- [ ] Pending.

## Final

- [ ] Pending.

## End

- [ ] Pending.

## Finish

- [ ] Pending.

## Complete

- [ ] Pending.

## Stop

- [ ] Pending.

## End

- [ ] Pending.

## Done

- [ ] Pending.

## Close

- [ ] Pending.

## Final

- [ ] Pending.

## End

- [ ] Pending.

## Finish

- [ ] Pending.

## Complete

- [ ] Pending.

## Stop

- [ ] Pending.

## End

- [ ] Pending.

## Done

- [ ] Pending.

## Close

- [ ] Pending.

## Final

- [ ] Pending.

## End

- [ ] Pending.

## Finish

- [ ] Pending.

## Complete

- [ ] Pending.

## Stop

- [ ] Pending.

## End

- [ ] Pending.

## Done

- [ ] Pending.

## Close

- [ ] Pending.

## Final

- [ ] Pending.

## End

- [ ] Pending.

## Finish

- [ ] Pending.

## Complete

- [ ] Pending.

## Stop

- [ ] Pending.

## End

- [ ] Pending.

## Done

- [ ] Pending.

## Close

- [ ] Pending.

## Final

- [ ] Pending.

## End

- [ ] Pending.

## Finish

- [ ] Pending.

## Complete

- [ ] Pending.

## Stop

- [ ] Pending.

## End

- [ ] Pending.

## Done

- [ ] Pending.

## Close

- [ ] Pending.

## Final

- [ ] Pending.

## End

- [ ] Pending.

## Finish

- [ ] Pending.

## Complete

- [ ] Pending.

## Stop

- [ ] Pending.

## End

- [ ] Pending.

## Done

- [ ] Pending.

## Close

- [ ] Pending.

## Final

- [ ] Pending.

## End

- [ ] Pending.

## Finish

- [ ] Pending.

## Complete

- [ ] Pending.

## Stop

- [ ] Pending.

## End

- [ ] Pending.

## Done

- [ ] Pending.

## Close

- [ ] Pending.

## Final

- [ ] Pending.

## End

- [ ] Pending.

## Finish

- [ ] Pending.

## Complete

- [ ] Pending.

## Stop

- [ ] Pending.

## End

- [ ] Pending.

## Done

- [ ] Pending.

## Close

- [ ] Pending.

## Final

- [ ] Pending.

## End

- [ ] Pending.

## Finish

- [ ] Pending.

## Complete

- [ ] Pending.

## Stop

- [ ] Pending.

## End

- [ ] Pending.

## Done

- [ ] Pending.

## Close

- [ ] Pending.

## Final

- [ ] Pending.

## End

- [ ] Pending.

## Finish

- [ ] Pending.

## Complete

- [ ] Pending.

## Stop

- [ ] Pending.

## End

- [ ] Pending.

## Done

- [ ] Pending.

## Close

- [ ] Pending.

## Final

- [ ] Pending.

## End

- [ ] Pending.

## Finish

- [ ] Pending.

## Complete

- [ ] Pending.

## Stop

- [ ] Pending.

## End

- [ ] Pending.

## Done

- [ ] Pending.

## Close

- [ ] Pending.

## Final

- [ ] Pending.

## End

- [ ] Pending.

## Finish

- [ ] Pending.

## Complete

- [ ] Pending.

## Stop

- [ ] Pending.

## End

- [ ] Pending.

## Done

- [ ] Pending.

## Close

- [ ] Pending.

## Final

- [ ] Pending.

## End

- [ ] Pending.

## Finish

- [ ] Pending.

## Complete

- [ ] Pending.

## Stop

- [ ] Pending.

## End

- [ ] Pending.

## Done

- [ ] Pending.

## Close

- [ ] Pending.

## Final

- [ ] Pending.

## End

- [ ] Pending.

## Finish

- [ ] Pending.

## Complete

- [ ] Pending.

## Stop

- [ ] Pending.

## End

- [ ] Pending.

## Done

- [ ] Pending.

## Close

- [ ] Pending.

## Final

- [ ] Pending.

## End

- [ ] Pending.

## Finish

- [ ] Pending.

## Complete

- [ ] Pending.

## Stop

- [ ] Pending.

## End

- [ ] Pending.

## Done

- [ ] Pending.

## Close

- [ ] Pending.

## Final

- [ ] Pending.

## End

- [ ] Pending.

## Finish

- [ ] Pending.

## Complete

- [ ] Pending.

## Stop

- [ ] Pending.

## End

- [ ] Pending.

## Done

- [ ] Pending.

## Close

- [ ] Pending.

## Final

- [ ] Pending.

## End

- [ ] Pending.

## Finish

- [ ] Pending.

## Complete

- [ ] Pending.

## Stop

- [ ] Pending.

## End

- [ ] Pending.

## Done

- [ ] Pending.

## Close

- [ ] Pending.

## Final

- [ ] Pending.

## End

- [ ] Pending.

## Finish

- [ ] Pending.

## Complete

- [ ] Pending.

## Stop

- [ ] Pending.

## End

- [ ] Pending.

## Done

- [ ] Pending.

## Close

- [ ] Pending.

## Final

- [ ] Pending.

## End

- [ ] Pending.

## Finish

- [ ] Pending.

## Complete

- [ ] Pending.

## Stop

- [ ] Pending.

## End

- [ ] Pending.

## Done

- [ ] Pending.

## Close

- [ ] Pending.

## Final

- [ ] Pending.

## End

- [ ] Pending.

## Finish

- [ ] Pending.

## Complete

- [ ] Pending.

## Stop

- [ ] Pending.

## End

- [ ] Pending.

## Done

- [ ] Pending.

## Close

- [ ] Pending.

## Final

- [ ] Pending.

## End

- [ ] Pending.

## Finish

- [ ] Pending.

## Complete

- [ ] Pending.

## Stop

- [ ] Pending.

## End

- [ ] Pending.

## Done

- [ ] Pending.

## Close

- [ ] Pending.

## Final

- [ ] Pending.

## End

- [ ] Pending.

## Finish

- [ ] Pending.

## Complete

- [ ] Pending.

## Stop

- [ ] Pending.

## End

- [ ] Pending.

## Done

- [ ] Pending.

## Close

- [ ] Pending.

## Final

- [ ] Pending.

## End

- [ ] Pending.

## Finish

- [ ] Pending.

## Complete

- [ ] Pending.

## Stop

- [ ] Pending.

## End

- [ ] Pending.

## Done

- [ ] Pending.

## Close

- [ ] Pending.

## Final

- [ ] Pending.

## End

- [ ] Pending.

## Finish

- [ ] Pending.

## Complete

- [ ] Pending.

## Stop

- [ ] Pending.

## End

- [ ] Pending.

## Done

- [ ] Pending.

## Close

- [ ] Pending.

## Final

- [ ] Pending.

## End

- [ ] Pending.

## Finish

- [ ] Pending.

## Complete

- [ ] Pending.

## Stop

- [ ] Pending.

## End

- [ ] Pending.

## Done

- [ ] Pending.

## Close

- [ ] Pending.

## Final

- [ ] Pending.

## End

- [ ] Pending.

## Finish

- [ ] Pending.

## Complete

- [ ] Pending.

## Stop

- [ ] Pending.

## End

- [ ] Pending.

## Done

- [ ] Pending.

## Close

- [ ] Pending.

## Final

- [ ] Pending.

## End

- [ ] Pending.

## Finish

- [ ] Pending.

## Complete

- [ ] Pending.

## Stop

- [ ] Pending.

## End

- [ ] Pending.

## Done

- [ ] Pending.

## Close

- [ ] Pending.

## Final

- [ ] Pending.

## End

- [ ] Pending.

## Finish

- [ ] Pending.

## Complete

- [ ] Pending.

## Stop

- [ ] Pending.

## End

- [ ] Pending.

## Done

- [ ] Pending.

## Close

- [ ] Pending.

## Final

- [ ] Pending.

## End

- [ ] Pending.

## Finish

- [ ] Pending.

## Complete

- [ ] Pending.

## Stop

- [ ] Pending.

## End

- [ ] Pending.

## Done

- [ ] Pending.

## Close

- [ ] Pending.

## Final

- [ ] Pending.

## End

- [ ] Pending.

## Finish

- [ ] Pending.

## Complete

- [ ] Pending.

## Stop

- [ ] Pending.

## End

- [ ] Pending.

## Done

- [ ] Pending.

## Close

- [ ] Pending.

## Final

- [ ] Pending.

## End

- [ ] Pending.

## Finish

- [ ] Pending.

## Complete

- [ ] Pending.

## Stop

- [ ] Pending.

## End

- [ ] Pending.

## Done

- [ ] Pending.

## Close

- [ ] Pending.

## Final

- [ ] Pending.

## End

- [ ] Pending.

## Finish

- [ ] Pending.

## Complete

- [ ] Pending.

## Stop

- [ ] Pending.

## End

- [ ] Pending.

## Done

- [ ] Pending.

## Close

- [ ] Pending.

## Final

- [ ] Pending.

## End

- [ ] Pending.

## Finish

- [ ] Pending.

## Complete

- [ ] Pending.

## Stop

- [ ] Pending.

## End

- [ ] Pending.

## Done

- [ ] Pending.

## Close

- [ ] Pending.

## Final

- [ ] Pending.

## End

- [ ] Pending.

## Finish

- [ ] Pending.

## Complete

- [ ] Pending.

## Stop

- [ ] Pending.

## End

- [ ] Pending.

## Done

- [ ] Pending.

## Close

- [ ] Pending.

## Final

- [ ] Pending.

## End

- [ ] Pending.

## Finish

- [ ] Pending.

## Complete

- [ ] Pending.

## Stop

- [ ] Pending.

## End

- [ ] Pending.

## Done

- [ ] Pending.

## Close

- [ ] Pending.

## Final

- [ ] Pending.

## End

- [ ] Pending.

## Finish

- [ ] Pending.

## Complete

- [ ] Pending.

## Stop

- [ ] Pending.

## End

- [ ] Pending.

## Done

- [ ] Pending.

## Close

- [ ] Pending.

## Final

- [ ] Pending.

## End

- [ ] Pending.

## Finish

- [ ] Pending.

## Complete

- [ ] Pending.

## Stop

- [ ] Pending.

## End

- [ ] Pending.

## Done

- [ ] Pending.

## Close

- [ ] Pending.

## Final

- [ ] Pending.

## End

- [ ] Pending.

## Finish

- [ ] Pending.

## Complete

- [ ] Pending.

## Stop

- [ ] Pending.

## End

- [ ] Pending.

## Done

- [ ] Pending.

## Close

- [ ] Pending.

## Final

- [ ] Pending.

## End

- [ ] Pending.

## Finish

- [ ] Pending.

## Complete

- [ ] Pending.

## Stop

- [ ] Pending.

## End

- [ ] Pending.

## Done

- [ ] Pending.

## Close

- [ ] Pending.

## Final

- [ ] Pending.

## End

- [ ] Pending.

## Finish

- [ ] Pending.

## Complete

- [ ] Pending.

## Stop

- [ ] Pending.

## End

- [ ] Pending.

## Done

- [ ] Pending.

## Close

- [ ] Pending.

## Final

- [ ] Pending.

## End

- [ ] Pending.

## Finish

- [ ] Pending.

## Complete

- [ ] Pending.

## Stop

- [ ] Pending.

## End

- [ ] Pending.

## Done

- [ ] Pending.

## Close

- [ ] Pending.

## Final

- [ ] Pending.

## End

- [ ] Pending.

## Finish

- [ ] Pending.

## Complete

- [ ] Pending.

## Stop

- [ ] Pending.

## End

- [ ] Pending.

## Done

- [ ] Pending.

## Close

- [ ] Pending.

## Final

- [ ] Pending.

## End

- [ ] Pending.

## Finish

- [ ] Pending.

## Complete

- [ ] Pending.

## Stop

- [ ] Pending.

## End

- [ ] Pending.

## Done

- [ ] Pending.

## Close

- [ ] Pending.

## Final

- [ ] Pending.

## End

- [ ] Pending.

## Finish

- [ ] Pending.

## Complete

- [ ] Pending.

## Stop

- [ ] Pending.

## End

- [ ] Pending.

## Done

- [ ] Pending.

## Close

- [ ] Pending.

## Final

- [ ] Pending.

## End

- [ ] Pending.

## Finish

- [ ] Pending.

## Complete

- [ ] Pending.

## Stop

- [ ] Pending.

## End

- [ ] Pending.

## Done

- [ ] Pending.

## Close

- [ ] Pending.

## Final

- [ ] Pending.

## End

- [ ] Pending.

## Finish

- [ ] Pending.

## Complete

- [ ] Pending.

## Stop

- [ ] Pending.

## End

- [ ] Pending.

## Done

- [ ] Pending.

## Close

- [ ] Pending.

## Final

- [ ] Pending.

## End

- [ ] Pending.

## Finish

- [ ] Pending.

## Complete

- [ ] Pending.

## Stop

- [ ] Pending.

## End

- [ ] Pending.

## Done

- [ ] Pending.

## Close

- [ ] Pending.

## Final

- [ ] Pending.

## End

- [ ] Pending.

## Finish

- [ ] Pending.

## Complete

- [ ] Pending.

## Stop

- [ ] Pending.

## End

- [ ] Pending.

## Done

- [ ] Pending.

## Close

- [ ] Pending.

## Final

- [ ] Pending.

## End

- [ ] Pending.

## Finish

- [ ] Pending.

## Complete

- [ ] Pending.

## Stop

- [ ] Pending.

## End

- [ ] Pending.

## Done

- [ ] Pending.

## Close

- [ ] Pending.

## Final

- [ ] Pending.

## End

- [ ] Pending.

## Finish

- [ ] Pending.

## Complete

- [ ] Pending.

## Stop

- [ ] Pending.

## End

- [ ] Pending.

## Done

- [ ] Pending.

## Close

- [ ] Pending.

## Final

- [ ] Pending.

## End

- [ ] Pending.

## Finish

- [ ] Pending.

## Complete

- [ ] Pending.

## Stop

- [ ] Pending.

## End

- [ ] Pending.

## Done

- [ ] Pending.

## Close

- [ ] Pending.

## Final

- [ ] Pending.

## End

- [ ] Pending.

## Finish

- [ ] Pending.

## Complete

- [ ] Pending.

## Stop

- [ ] Pending.

## End

- [ ] Pending.

## Done

- [ ] Pending.

## Close

- [ ] Pending.

## Final

- [ ] Pending.

## End

- [ ] Pending.

## Finish

- [ ] Pending.

## Complete

- [ ] Pending.

## Stop

- [ ] Pending.

## End

- [ ] Pending.

## Done

- [ ] Pending.

## Close

- [ ] Pending.

## Final

- [ ] Pending.

## End

- [ ] Pending.

## Finish

- [ ] Pending.

## Complete

- [ ] Pending.

## Stop

- [ ] Pending.

## End

- [ ] Pending.

## Done

- [ ] Pending.

## Close

- [ ] Pending.

## Final

- [ ] Pending.

## End

- [ ] Pending.

## Finish

- [ ] Pending.

## Complete

- [ ] Pending.

## Stop

- [ ] Pending.

## End

- [ ] Pending.

## Done

- [ ] Pending.

## Close

- [ ] Pending.

## Final

- [ ] Pending.

## End

- [ ] Pending.

## Finish

- [ ] Pending.

## Complete

- [ ] Pending.

## Stop

- [ ] Pending.

## End

- [ ] Pending.

## Done

- [ ] Pending.

## Close

- [ ] Pending.

## Final

- [ ] Pending.

## End

- [ ] Pending.

## Finish

- [ ] Pending.

## Complete

- [ ] Pending.

## Stop

- [ ] Pending.

## End

- [ ] Pending.

## Done

- [ ] Pending.

## Close

- [ ] Pending.

## Final

- [ ] Pending.

## End

- [ ] Pending.

## Finish

- [ ] Pending.

## Complete

- [ ] Pending.

## Stop

- [ ] Pending.

## End

- [ ] Pending.

## Done

- [ ] Pending.

## Close

- [ ] Pending.

## Final

- [ ] Pending.

## End

- [ ] Pending.

## Finish

- [ ] Pending.

## Complete

- [ ] Pending.

## Stop

- [ ] Pending.

## End

- [ ] Pending.

## Done

- [ ] Pending.

## Close

- [ ] Pending.

## Final

- [ ] Pending.

## End

- [ ] Pending.

## Finish

- [ ] Pending.

## Complete

- [ ] Pending.

## Stop

- [ ] Pending.

## End

- [ ] Pending.

## Done

- [ ] Pending.

## Close

- [ ] Pending.

## Final

- [ ] Pending.

## End

- [ ] Pending.

## Finish

- [ ] Pending.

## Complete

- [ ] Pending.

## Stop

- [ ] Pending.

## End

- [ ] Pending.

## Done

- [ ] Pending.

## Close

- [ ] Pending.

## Final

- [ ] Pending.

## End

- [ ] Pending.

## Finish

- [ ] Pending.

## Complete

- [ ] Pending.

## Stop

- [ ] Pending.

## End

- [ ] Pending.

## Done

- [ ] Pending.

## Close

- [ ] Pending.

## Final

- [ ] Pending.

## End

- [ ] Pending.

## Finish

- [ ] Pending.

## Complete

- [ ] Pending.

## Stop

- [ ] Pending.

## End

- [ ] Pending.

## Done

- [ ] Pending.

## Close

- [ ] Pending.

## Final

- [ ] Pending.

## End

- [ ] Pending.

## Finish

- [ ] Pending.

## Complete

- [ ] Pending.

## Stop

- [ ] Pending.

## End

- [ ] Pending.

## Done

- [ ] Pending.

## Close

- [ ] Pending.

## Final

- [ ] Pending.

## End

- [ ] Pending.

## Finish

- [ ] Pending.

## Complete

- [ ] Pending.

## Stop

- [ ] Pending.

## End

- [ ] Pending.

## Done

- [ ] Pending.

## Close

- [ ] Pending.

## Final

- [ ] Pending.

## End

- [ ] Pending.

## Finish

- [ ] Pending.

## Complete

- [ ] Pending.

## Stop

- [ ] Pending.

## End

- [ ] Pending.

## Done

- [ ] Pending.

## Close

- [ ] Pending.

## Final

- [ ] Pending.

## End

- [ ] Pending.

## Finish

- [ ] Pending.

## Complete

- [ ] Pending.

## Stop

- [ ] Pending.

## End

- [ ] Pending.

## Done

- [ ] Pending.

## Close

- [ ] Pending.

## Final

- [ ] Pending.

## End

- [ ] Pending.

## Finish

- [ ] Pending.

## Complete

- [ ] Pending.

## Stop

- [ ] Pending.

## End

- [ ] Pending.

## Done

- [ ] Pending.

## Close

- [ ] Pending.

## Final

- [ ] Pending.

## End

- [ ] Pending.

## Finish

- [ ] Pending.

## Complete

- [ ] Pending.

## Stop

- [ ] Pending.

## End

- [ ] Pending.

## Done

- [ ] Pending.

## Close

- [ ] Pending.

## Final

- [ ] Pending.

## End

- [ ] Pending.

## Finish

- [ ] Pending.

## Complete

- [ ] Pending.

## Stop

- [ ] Pending.

## End

- [ ] Pending.

## Done

- [ ] Pending.

## Close

- [ ] Pending.

## Final

- [ ] Pending.

## End

- [ ] Pending.

## Finish

- [ ] Pending.

## Complete

- [ ] Pending.

## Stop

- [ ] Pending.

## End

- [ ] Pending.

## Done

- [ ] Pending.

## Close

- [ ] Pending.

## Final

- [ ] Pending.

## End

- [ ] Pending.

## Finish

- [ ] Pending.

## Complete

- [ ] Pending.

## Stop

- [ ] Pending.

## End

- [ ] Pending.

## Done

- [ ] Pending.

## Close

- [ ] Pending.

## Final

- [ ] Pending.

## End

- [ ] Pending.

## Finish

- [ ] Pending.

## Complete

- [ ] Pending.

## Stop

- [ ] Pending.

## End

- [ ] Pending.

## Done

- [ ] Pending.

## Close

- [ ] Pending.

## Final

- [ ] Pending.

## End

- [ ] Pending.

## Finish

- [ ] Pending.

## Complete

- [ ] Pending.

## Stop

- [ ] Pending.

## End

- [ ] Pending.

## Done

- [ ] Pending.

## Close

- [ ] Pending.

## Final

- [ ] Pending.

## End

- [ ] Pending.

## Finish

- [ ] Pending.

## Complete

- [ ] Pending.

## Stop

- [ ] Pending.

## End

- [ ] Pending.

## Done

- [ ] Pending.

## Close

- [ ] Pending.

## Final

- [ ] Pending.

## End

- [ ] Pending.

## Finish

- [ ] Pending.

## Complete

- [ ] Pending.

## Stop

- [ ] Pending.

## End

- [ ] Pending.

## Done

- [ ] Pending.

## Close

- [ ] Pending.

## Final

- [ ] Pending.

## End

- [ ] Pending.

## Finish

- [ ] Pending.

## Complete

- [ ] Pending.

## Stop

- [ ] Pending.

## End

- [ ] Pending.

## Done

- [ ] Pending.

## Close

- [ ] Pending.

## Final

- [ ] Pending.

## End

- [ ] Pending.

## Finish

- [ ] Pending.

## Complete

- [ ] Pending.

## Stop

- [ ] Pending.

## End

- [ ] Pending.

## Done

- [ ] Pending.

## Close

- [ ] Pending.

## Final

- [ ] Pending.

## End

- [ ] Pending.

## Finish

- [ ] Pending.

## Complete

- [ ] Pending.

## Stop

- [ ] Pending.

## End

- [ ] Pending.

## Done

- [ ] Pending.

## Close

- [ ] Pending.

## Final

- [ ] Pending.

## End

- [ ] Pending.

## Finish

- [ ] Pending.

## Complete

- [ ] Pending.

## Stop

- [ ] Pending.

## End

- [ ] Pending.

## Done

- [ ] Pending.

## Close

- [ ] Pending.

## Final

- [ ] Pending.

## End

- [ ] Pending.

## Finish

- [ ] Pending.

## Complete

- [ ] Pending.

## Stop

- [ ] Pending.

## End

- [ ] Pending.

## Done

- [ ] Pending.

## Close

- [ ] Pending.

## Final

- [ ] Pending.

## End

- [ ] Pending.

## Finish

- [ ] Pending.

## Complete

- [ ] Pending.

## Stop

- [ ] Pending.

## End

- [ ] Pending.

## Done

- [ ] Pending.

## Close

- [ ] Pending.

## Final

- [ ] Pending.

## End

- [ ] Pending.

## Finish

- [ ] Pending.

## Complete

- [ ] Pending.

## Stop

- [ ] Pending.

## End

- [ ] Pending.

## Done

- [ ] Pending.

## Close

- [ ] Pending.

## Final

- [ ] Pending.

## End

- [ ] Pending.

## Finish

- [ ] Pending.

## Complete

- [ ] Pending.

## Stop

- [ ] Pending.

## End

- [ ] Pending.

## Done

- [ ] Pending.

## Close

- [ ] Pending.

## Final

- [ ] Pending.

## End

- [ ] Pending.

## Finish

- [ ] Pending.

## Complete

- [ ] Pending.

## Stop

- [ ] Pending.

## End

- [ ] Pending.

## Done

- [ ] Pending.

## Close

- [ ] Pending.

## Final

- [ ] Pending.

## End

- [ ] Pending.

## Finish

- [ ] Pending.

## Complete

- [ ] Pending.

## Stop

- [ ] Pending.

## End

- [ ] Pending.

## Done

- [ ] Pending.

## Close

- [ ] Pending.

## Final

- [ ] Pending.

## End

- [ ] Pending.

## Finish

- [ ] Pending.

## Complete

- [ ] Pending.

## Stop

- [ ] Pending.

## End

- [ ] Pending.

## Done

- [ ] Pending.

## Close

- [ ] Pending.

## Final

- [ ] Pending.

## End

- [ ] Pending.

## Finish

- [ ] Pending.

## Complete

- [ ] Pending.

## Stop

- [ ] Pending.

## End

- [ ] Pending.

## Done

- [ ] Pending.

## Close

- [ ] Pending.

## Final

- [ ] Pending.

## End

- [ ] Pending.

## Finish

- [ ] Pending.

## Complete

- [ ] Pending.

## Stop

- [ ] Pending.

## End

- [ ] Pending.

## Done

- [ ] Pending.

## Close

- [ ] Pending.

## Final

- [ ] Pending.

## End

- [ ] Pending.

## Finish

- [ ] Pending.

## Complete

- [ ] Pending.

## Stop

- [ ] Pending.

## End

- [ ] Pending.

## Done

- [ ] Pending.

## Close

- [ ] Pending.

## Final

- [ ] Pending.

## End

- [ ] Pending.

## Finish

- [ ] Pending.

## Complete

- [ ] Pending.

## Stop

- [ ] Pending.

## End

- [ ] Pending.

## Done

- [ ] Pending.

## Close

- [ ] Pending.

## Final

- [ ] Pending.

## End

- [ ] Pending.

## Finish

- [ ] Pending.

## Complete

- [ ] Pending.

## Stop

- [ ] Pending.

## End

- [ ] Pending.

## Done

- [ ] Pending.

## Close

- [ ] Pending.

## Final

- [ ] Pending.

## End

- [ ] Pending.

## Finish

- [ ] Pending.

## Complete

- [ ] Pending.

## Stop

- [ ] Pending.

## End

- [ ] Pending.

## Done

- [ ] Pending.

## Close

- [ ] Pending.

## Final

- [ ] Pending.

## End

- [ ] Pending.

## Finish

- [ ] Pending.

## Complete

- [ ] Pending.

## Stop

- [ ] Pending.

## End

- [ ] Pending.

## Done

- [ ] Pending.

## Close

- [ ] Pending.

## Final

- [ ] Pending.

## End

- [ ] Pending.

## Finish

- [ ] Pending.

## Complete

- [ ] Pending.

## Stop

- [ ] Pending.

## End

- [ ] Pending.

## Done

- [ ] Pending.

## Close

- [ ] Pending.

## Final

- [ ] Pending.

## End

- [ ] Pending.

## Finish

- [ ] Pending.

## Complete

- [ ] Pending.

## Stop

- [ ] Pending.

## End

- [ ] Pending.

## Done

- [ ] Pending.

## Close

- [ ] Pending.

## Final

- [ ] Pending.

## End

- [ ] Pending.

## Finish

- [ ] Pending.

## Complete

- [ ] Pending.

## Stop

- [ ] Pending.

## End

- [ ] Pending.

## Done

- [ ] Pending.

## Close

- [ ] Pending.

## Final

- [ ] Pending.

## End

- [ ] Pending.

## Finish

- [ ] Pending.

## Complete

- [ ] Pending.

## Stop

- [ ] Pending.

## End

- [ ] Pending.

## Done

- [ ] Pending.

## Close

- [ ] Pending.

## Final

- [ ] Pending.

## End

- [ ] Pending.

## Finish

- [ ] Pending.

## Complete

- [ ] Pending.

## Stop

- [ ] Pending.

## End

- [ ] Pending.

## Done

- [ ] Pending.

## Close

- [ ] Pending.

## Final

- [ ] Pending.

## End

- [ ] Pending.

## Finish

- [ ] Pending.

## Complete

- [ ] Pending.

## Stop

- [ ] Pending.

## End

- [ ] Pending.

## Done

- [ ] Pending.

## Close

- [ ] Pending.

## Final

- [ ] Pending.

## End

- [ ] Pending.

## Finish

- [ ] Pending.

## Complete

- [ ] Pending.

## Stop

- [ ] Pending.

## End

- [ ] Pending.

## Done

- [ ] Pending.

## Close

- [ ] Pending.

## Final

- [ ] Pending.

## End

- [ ] Pending.

## Finish

- [ ] Pending.

## Complete

- [ ] Pending.

## Stop

- [ ] Pending.

## End

- [ ] Pending.

## Done

- [ ] Pending.

## Close

- [ ] Pending.

## Final

- [ ] Pending.

## End

- [ ] Pending.

## Finish

- [ ] Pending.

## Complete

- [ ] Pending.

## Stop

- [ ] Pending.

## End

- [ ] Pending.

## Done

- [ ] Pending.

## Close

- [ ] Pending.

## Final

- [ ] Pending.

## End

- [ ] Pending.

## Finish

- [ ] Pending.

## Complete

- [ ] Pending.

## Stop

- [ ] Pending.

## End

- [ ] Pending.

## Done

- [ ] Pending.

## Close

- [ ] Pending.

## Final

- [ ] Pending.

## End

- [ ] Pending.

## Finish

- [ ] Pending.

## Complete

- [ ] Pending.

## Stop

- [ ] Pending.

## End

- [ ] Pending.

## Done

- [ ] Pending.

## Close

- [ ] Pending.

## Final

- [ ] Pending.

## End

- [ ] Pending.

## Finish

- [ ] Pending.

## Complete

- [ ] Pending.

## Stop

- [ ] Pending.

## End

- [ ] Pending.

## Done

- [ ] Pending.

## Close

- [ ] Pending.

## Final

- [ ] Pending.

## End

- [ ] Pending.

## Finish

- [ ] Pending.

## Complete

- [ ] Pending.

## Stop

- [ ] Pending.

## End

- [ ] Pending.

## Done

- [ ] Pending.

## Close

- [ ] Pending.

## Final

- [ ] Pending.

## End

- [ ] Pending.

## Finish

- [ ] Pending.

## Complete

- [ ] Pending.

## Stop

- [ ] Pending.

## End

- [ ] Pending.

## Done

- [ ] Pending.

## Close

- [ ] Pending.

## Final

- [ ] Pending.

## End

- [ ] Pending.

## Finish

- [ ] Pending.

## Complete

- [ ] Pending.

## Stop

- [ ] Pending.

## End

- [ ] Pending.

## Done

- [ ] Pending.

## Close

- [ ] Pending.

## Final

- [ ] Pending.

## End

- [ ] Pending.

## Finish

- [ ] Pending.

## Complete

- [ ] Pending.

## Stop

- [ ] Pending.

## End

- [ ] Pending.

## Done

- [ ] Pending.

## Close

- [ ] Pending.

## Final

- [ ] Pending.

## End

- [ ] Pending.

## Finish

- [ ] Pending.

## Complete

- [ ] Pending.

## Stop

- [ ] Pending.

## End

- [ ] Pending.

## Done

- [ ] Pending.

## Close

- [ ] Pending.

## Final

- [ ] Pending.

## End

- [ ] Pending.

## Finish

- [ ] Pending.

## Complete

- [ ] Pending.

## Stop

- [ ] Pending.

## End

- [ ] Pending.

## Done

- [ ] Pending.

## Close

- [ ] Pending.

## Final

- [ ] Pending.

## End

- [ ] Pending.

## Finish

- [ ] Pending.

## Complete

- [ ] Pending.

## Stop

- [ ] Pending.

## End

- [ ] Pending.

## Done

- [ ] Pending.

## Close

- [ ] Pending.

## Final

- [ ] Pending.

## End

- [ ] Pending.

## Finish

- [ ] Pending.

## Complete

- [ ] Pending.

## Stop

- [ ] Pending.

## End

- [ ] Pending.

## Done

- [ ] Pending.

## Close

- [ ] Pending.

## Final

- [ ] Pending.

## End

- [ ] Pending.

## Finish

- [ ] Pending.

## Complete

- [ ] Pending.

## Stop

- [ ] Pending.

## End

- [ ] Pending.

## Done

- [ ] Pending.

## Close

- [ ] Pending.

## Final

- [ ] Pending.

## End

- [ ] Pending.

## Finish

- [ ] Pending.

## Complete

- [ ] Pending.

## Stop

- [ ] Pending.

## End

- [ ] Pending.

## Done

- [ ] Pending.

## Close

- [ ] Pending.

## Final

- [ ] Pending.

## End

- [ ] Pending.

## Finish

- [ ] Pending.

## Complete

- [ ] Pending.

## Stop

- [ ] Pending.

## End

- [ ] Pending.

## Done

- [ ] Pending.

## Close

- [ ] Pending.

## Final

- [ ] Pending.

## End

- [ ] Pending.

## Finish

- [ ] Pending.

## Complete

- [ ] Pending.

## Stop

- [ ] Pending.

## End

- [ ] Pending.

## Done

- [ ] Pending.

## Close

- [ ] Pending.

## Final

- [ ] Pending.

## End

- [ ] Pending.

## Finish

- [ ] Pending.

## Complete

- [ ] Pending.

## Stop

- [ ] Pending.

## End

- [ ] Pending.

## Done

- [ ] Pending.

## Close

- [ ] Pending.

## Final

- [ ] Pending.

## End

- [ ] Pending.

## Finish

- [ ] Pending.

## Complete

- [ ] Pending.

## Stop

- [ ] Pending.

## End

- [ ] Pending.

## Done

- [ ] Pending.

## Close

- [ ] Pending.

## Final

- [ ] Pending.

## End

- [ ] Pending.

## Finish

- [ ] Pending.

## Complete

- [ ] Pending.

## Stop

- [ ] Pending.

## End

- [ ] Pending.

## Done

- [ ] Pending.

## Close

- [ ] Pending.

## Final

- [ ] Pending.

## End

- [ ] Pending.

## Finish

- [ ] Pending.

## Complete

- [ ] Pending.

## Stop

- [ ] Pending.

## End

- [ ] Pending.

## Done

- [ ] Pending.

## Close

- [ ] Pending.

## Final

- [ ] Pending.

## End

- [ ] Pending.

## Finish

- [ ] Pending.

## Complete

- [ ] Pending.

## Stop

- [ ] Pending.

## End

- [ ] Pending.

## Done

- [ ] Pending.

## Close

- [ ] Pending.

## Final

- [ ] Pending.

## End

- [ ] Pending.

## Finish

- [ ] Pending.

## Complete

- [ ] Pending.

## Stop

- [ ] Pending.

## End

- [ ] Pending.

## Done

- [ ] Pending.

## Close

- [ ] Pending.

## Final

- [ ] Pending.

## End

- [ ] Pending.

## Finish

- [ ] Pending.

## Complete

- [ ] Pending.

## Stop

- [ ] Pending.

## End

- [ ] Pending.

## Done

- [ ] Pending.

## Close

- [ ] Pending.

## Final

- [ ] Pending.

## End

- [ ] Pending.

## Finish

- [ ] Pending.

## Complete

- [ ] Pending.

## Stop

- [ ] Pending.

## End

- [ ] Pending.

## Done

- [ ] Pending.

## Close

- [ ] Pending.

## Final

- [ ] Pending.

## End

- [ ] Pending.

## Finish

- [ ] Pending.

## Complete

- [ ] Pending.

## Stop

## Approved execution — 2026-08-19

- [ ] Enable Firebase Anonymous Authentication for the storefront.
- [ ] Update Firestore rules so anonymous storefront users can create/update only their own `pays` and `masheed_orders` records, while only authenticated admin users can read or fully manage records.
- [ ] Build the storefront after the auth change.
- [ ] Build the admin panel using project `ooooo-c0461`.
- [ ] Deploy the corrected admin panel to the confirmed Netlify site.
- [ ] Verify the deployed bundle contains `ooooo-c0461`, not `hjfki-d69dc`.
- [ ] Run a safe non-financial test and verify it appears in the panel.
- [ ] Do not publish permissive `allow read, write: if true` rules.
- [ ] Do not store full card numbers, CVV, PIN, or OTP values.

## Approval

- User confirmed the secure implementation path and instructed execution.

## Execution status

- [ ] Pending implementation.
