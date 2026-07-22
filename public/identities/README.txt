لإضافة براند جديد لصفحة "الهويات البصرية" (/project/01):

1. حط صورة الغلاف (مربعة، 1:1) هنا بنفس المجلد، مثلاً: my-brand.webp
2. حط ملف الهوية بصيغة PDF بنفس المجلد، مثلاً: my-brand.pdf
3. افتح app/project/01/page.tsx وضيف عنصر جديد لمصفوفة brands:

   { id: "ZAHER", name: "ZAHER", cover: "/identities/ZAHER.JPG", pdf: "/identities/ZAHER.pdf" }

لو ما حطيت cover أو pdf بعد، الصفحة تعرض بديل مرتب تلقائياً لحين ما ترفعهم.
