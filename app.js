function calculateRates() {
    // ২৪ ক্যারেটের ইনপুট নেওয়া
    const rate24 = parseFloat(document.getElementById('rate24k').value) || 0;

    // সূত্র অনুযায়ী হিসাব (দশমিক এড়াতে Math.round ব্যবহার করা হয়েছে)
    const rate22 = Math.round(rate24 * (22 / 24));
    const rate21 = Math.round(rate24 * (21 / 24));
    const rate18 = Math.round(rate24 * (18 / 24));

    // ফলাফল স্ক্রিনে দেখানো
    document.getElementById('rate22k').innerText = `৳ ${rate22.toLocaleString('en-IN')}`;
    document.getElementById('rate21k').innerText = `৳ ${rate21.toLocaleString('en-IN')}`;
    document.getElementById('rate18k').innerText = `৳ ${rate18.toLocaleString('en-IN')}`;
}

// Service Worker Registration for PWA
if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
        navigator.serviceWorker.register('sw.js')
            .then(reg => console.log('Service Worker Registered'))
            .catch(err => console.log('Service Worker Registration Failed', err));
    });
}
