function calculateAll() {
    // ২৪ ক্যারেটের রেট
    const rate24 = parseFloat(document.getElementById('rate24k').value) || 0;

    // স্ট্যান্ডার্ড ক্যারেটগুলোর হিসাব
    const rate22 = Math.round(rate24 * (22 / 24));
    const rate21 = Math.round(rate24 * (21 / 24));
    const rate18 = Math.round(rate24 * (18 / 24));

    document.getElementById('rate22k').innerText = `৳ ${rate22.toLocaleString('en-IN')}`;
    document.getElementById('rate21k').innerText = `৳ ${rate21.toLocaleString('en-IN')}`;
    document.getElementById('rate18k').innerText = `৳ ${rate18.toLocaleString('en-IN')}`;

    // কাস্টমারের কাস্টম ক্যারেট ও ওজনের হিসাব
    const testedCarat = parseFloat(document.getElementById('testedCarat').value) || 0;
    const vori = parseFloat(document.getElementById('customerVori').value) || 0;
    const ana = parseFloat(document.getElementById('customerAna').value) || 0;
    const roti = parseFloat(document.getElementById('customerRoti').value) || 0;

    // টেস্ট করা ক্যারেট অনুযায়ী প্রতি ভরির দাম
    const customRatePerVori = rate24 * (testedCarat / 24);

    // মোট ওজন ভরি-তে কনভার্ট করা (১ ভরি = ১৬ আনা, ১ আনা = ৬ রতি)
    const totalVori = vori + (ana / 16) + (roti / 96);

    // কাস্টমারের মোট প্রাপ্য টাকা
    const finalPrice = Math.round(totalVori * customRatePerVori);

    // রেজাল্ট দেখানো
    document.getElementById('customerTotal').innerText = `কাস্টমার পাবে: ৳${finalPrice.toLocaleString('en-IN')}`;
}

// Service Worker Registration for PWA
if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
        navigator.serviceWorker.register('sw.js')
            .then(reg => console.log('Service Worker Registered'))
            .catch(err => console.log('Service Worker Registration Failed', err));
    });
}
