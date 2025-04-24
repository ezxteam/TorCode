async function runCode() {
  // الحصول على الكود والتوكن من واجهة المستخدم
  const code = document.getElementById('code').value;
  const token = document.getElementById('token').value;

  // التحقق من أن الكود والتوكن مكتملان
  if (!code || !token) {
    alert('يرجى إدخال الكود والتوكن!');
    return;
  }

  try {
    // إرسال طلب إلى الخادم مع الكود والتوكن
    const response = await fetch('/run', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ code, token }),
    });

    // عرض المخرجات في واجهة المستخدم
    const result = await response.text();
    document.getElementById('output').innerText = result;
  } catch (error) {
    console.error('حدث خطأ أثناء تشغيل الكود:', error);
    document.getElementById('output').innerText = 'حدث خطأ أثناء تشغيل الكود.';
  }
}
