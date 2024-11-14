async function loadNavbar() {
    try {
        const response = await fetch('/layouts/bar/');
        if (response.ok) {
            const html = await response.text();
            document.getElementById('bar').innerHTML = html;
            let currentPath = window.location.pathname.replace(/\/+$/, '');
            document.querySelectorAll(".list-unstyled li").forEach((li) => {
                const link = li.querySelector("a");
                const linkPath = link.getAttribute("href").replace(/\/+$/, '');
                if (linkPath === currentPath) {
                    li.classList.add("ta-b202");
                    link.classList.add("ta-link-exact-active", "ta-link-active");
                } else {
                    li.classList.remove("ta-b202");
                    link.classList.remove("ta-link-exact-active", "ta-link-active");
                }
            });
        } else {
            console.error('Error:', response.status);
        }
    } catch (error) {
        console.error('Fetch error:', error);
    }
}

loadNavbar();