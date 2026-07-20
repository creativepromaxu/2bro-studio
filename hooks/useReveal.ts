"use client";
import { useEffect, useRef, useState } from "react";

/**
 * useReveal
 * يراقب ظهور عنصر داخل الشاشة (Intersection Observer) ويعيد
 * مرجعاً (ref) وحالة (visible) لتفعيل حركات الكشف التدريجي (reveal-on-scroll).
 *
 * @param threshold نسبة ظهور العنصر المطلوبة لتفعيل الحركة (0 - 1)
 */
export default function useReveal<T extends HTMLElement = HTMLElement>(
  threshold = 0.2
): [React.RefObject<T | null>, boolean] {
  const ref = useRef<T | null>(null);
  // يجب أن تبدأ الحالة بـ false دائماً (حتى في السيرفر) لتفادي تعارض الـ hydration؛
  // أي حالة استثنائية (مثل عدم دعم IntersectionObserver) تُعالج داخل useEffect فقط.
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    if (typeof IntersectionObserver === "undefined") {
      // تأخير بسيط (تشغيل داخل callback غير متزامن) لإظهار العنصر مباشرة
      // على المتصفحات القديمة التي لا تدعم IntersectionObserver
      const id = window.setTimeout(() => setVisible(true), 0);
      return () => window.clearTimeout(id);
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.unobserve(node);
        }
      },
      { threshold, rootMargin: "0px 0px -5% 0px" }
    );

    observer.observe(node);

    return () => observer.disconnect();
  }, [threshold]);

  return [ref, visible];
}
