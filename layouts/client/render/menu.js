async function loadMenu() {
    try {
        const response = await fetch('/layouts/client/menu/');
        if (response.ok) {
            const html = await response.text();
            document.getElementById('menu').innerHTML = html;
            let currentPath = window.location.pathname.replace(/\/+$/, '');
            document.querySelectorAll(".list-unstyled li").forEach((li) => {
                const link = li.querySelector("a");
                const linkPath = link.getAttribute("href").replace(/\/+$/, '');
                if (linkPath === currentPath) {
                    li.classList.add("active");
                } else {
                    li.classList.remove("active");
                }
            });
        } else {
            console.error('Error:', response.status);
        }
    } catch (error) {
        console.error('Fetch error:', error);
    }
}

loadMenu();