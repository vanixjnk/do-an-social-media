async function loadHTML() {
    try {
        const response = await fetch('/layouts/client/footer/');
        if (response.ok) {
            const html = await response.text();
            document.getElementById('footer').innerHTML = html;
        } else {
            console.error('Có lỗi xảy ra:', response.status);
        }
    } catch (error) {
        console.error('Lỗi:', error);
    }
}

loadHTML();