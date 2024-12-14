async function loadHTML() {
    try {
        const response = await fetch('/layouts/advertiser/navbar/');
        if (response.ok) {
            const html = await response.text();
            document.getElementById('navbar').innerHTML = html;
        } else {
            console.error('Có lỗi xảy ra:', response.status);
        }
    } catch (error) {
        console.error('Lỗi:', error);
    }
}

loadHTML();